import { getCsrfToken, signIn, signOut as _signOut } from "next-auth/react";
import { useState } from "react";
import { SiweMessage } from "siwe";
import { useAccount, useBlockNumber, useNetwork, useSignMessage } from "wagmi";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { currentNetwork, currentNetworkId, currentNode } from "@/contracts";
import { Address, encodeAbiParameters, encodePacked, hashMessage, keccak256, parseAbiParameters } from "viem";
import { getWalletClient, signMessage } from "@wagmi/core";
import { parseAbi } from "abitype";
import { lit } from "@/lit";
import { walletClientToProviderAndSigner } from "../wagmi";
import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";
import { useAuth, useSession } from "@clerk/nextjs";
//@ts-ignore
import { KERNEL_ACCOUNT_SUFFIX } from "@/contracts/patchwallet/seaport copy";
//@ts-ignore
import { formUserIdAndSuffix, getBaseAccountAddress } from "../patchWalletHelper";

export function signOut() {
  localStorage.clear();
  _signOut({ callbackUrl: "/" });
}

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: blockNumber } = useBlockNumber();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { signMessageAsync } = useSignMessage();
  const { getToken, isLoaded, userId, actor } = useAuth();
  const { session } = useSession();
  const LoginUsingPatch = async () => {
    if (!blockNumber) return;

    setIsLoading(true);

    const address = await getBaseAccountAddress("email", session?.user.primaryEmailAddress?.emailAddress!);

    console.log(address);

    // const authSig = await generateSignatureUsingPatch(address);

    // console.log(authSig);
  };

  const logIn = async ({}) => {
    try {
      if (!blockNumber) return;

      setIsLoading(true);
      // Generate the message to be signed

      const authSig = await regenerateAuthSig();

      const blockchainMessage = await encodeAbiParameters(parseAbiParameters("uint256 blockNumber, address nodeAddress"), [
        10000000000n,
        currentNode! as Address,
      ]);
      const walletClient = await getWalletClient({ chainId: Number(currentNetworkId!) });
      const blockchainSignature = await walletClient!.signMessage({ message: { raw: keccak256(blockchainMessage) } });

      // Send the signature to the server to be verified, and sign in or sign up the user
      await signIn("credentials", {
        message: authSig.signedMessage,
        signature: authSig.sig,
        blockchainMessage,
        blockchainSignature,
        redirect: false,
      });

      localStorage.setItem("blockchainSignature", blockchainSignature);
      localStorage.setItem("blockchainMessage", blockchainMessage);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  const generateSignatureUsingPatch = async (data: string) => {
    const token = await getToken();

    if (!token) throw new Error("No token");
    if (!userId) throw new Error("No user id");
//@ts-ignore
    const json = await response.json();

    console.log(json);
  };

  const regenerateAuthSig = async (
    _expiration?: string,
    {
      addressOverride,
      chainIdOverride,
      isPatchWallet,
    }: { addressOverride?: string; chainIdOverride?: number; isPatchWallet?: boolean } = {}
  ) => {
    const expiration_time = 60 * 60 * 24 * 7; // 7 days
    const expiration_date = new Date(Date.now() + expiration_time * 1000);
    const expiration = _expiration ?? expiration_date.toISOString();

    const signature = JSON.parse(localStorage.getItem("lit-auth-signature")!);

    // Example signature message: "localhost:3000 wants you to sign in with your Ethereum account:\n0x1cd4C1A65183472B4dA8023D40Bcf5e3D9171d49\n\n\nURI: http://localhost:3000/\nVersion: 1\nChain ID: 11155111\nNonce: TY8n8U10su60qKwyi\nIssued At: 2023-09-05T10:12:38.759Z\nExpiration Time: 2023-09-06T10:12:38.759Z"

    const expirationDateString = signature?.signedMessage
      .split("\n")
      .find((line: string) => line.startsWith("Expiration Time:"))
      .split(": ")[1];

    if (signature && new Date(expirationDateString) > new Date()) return signature;

    // -- 1. prepare 'sign-in with ethereum' message
    const preparedMessage = {
      domain: globalThis.location.host,
      address: addressOverride ?? address,
      version: "1",
      chainId: chainIdOverride ?? chain!.id,
      expirationTime: expiration,
      uri: globalThis.location.href,
    };

    const message = new SiweMessage(preparedMessage);
    const body = message.prepareMessage();

    // -- 2. sign the message
    let signedResult: string | undefined;
    if (isPatchWallet) {
      // Sign with PatchWallet
      generateSignatureUsingPatch(body);
    } else {
      signedResult = await signMessageAsync({ message: body });
    }

    if (!signedResult) throw new Error("Unable to sign message");

    // -- 3. prepare auth message
    let authSig = {
      sig: signedResult,
      derivedVia: "web3.eth.personal.sign",
      signedMessage: body,
      address: addressOverride ?? address,
    };

    if (authSig) localStorage.setItem("lit-auth-signature", JSON.stringify(authSig));

    const commsKeyPair = nacl.box.keyPair();
    if (commsKeyPair)
      localStorage.setItem(
        "lit-comms-keypair",
        JSON.stringify({
          publicKey: naclUtil.encodeBase64(commsKeyPair.publicKey),
          secretKey: naclUtil.encodeBase64(commsKeyPair.secretKey),
        })
      );

    return authSig;
  };

  return { isLoading, logIn, regenerateAuthSig, LoginUsingPatch };
};
