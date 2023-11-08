import { currentNetworkId, currentNode } from "@/contracts";
import { useAuth, useSession } from "@clerk/nextjs";
import { getWalletClient } from "@wagmi/core";
import { signOut as _signOut, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { SiweMessage } from "siwe";
import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";
import { Address, encodeAbiParameters, hashMessage, keccak256, parseAbiParameters } from "viem";
import { useAccount, useBlockNumber, useSignMessage } from "wagmi";

import { api } from "../api";
import { env } from "@/env.mjs";

export function signOut() {
  localStorage.clear();
  // clear cookies

  _signOut({ callbackUrl: "/auth" });
}

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: blockNumber } = useBlockNumber();
  const { address } = useAccount();

  const { signMessageAsync } = useSignMessage();
  const { mutateAsync: generatePatchSignature } = api.patch.signMessageForPatchWallet.useMutation();
  const { userId: _userId } = useAuth();
  const userId = _userId?.toLowerCase();
  const { mutateAsync: getUserFromId } = api.patch.getUser.useMutation();

  const logIn = async ({ isPatchWallet = false }: { isPatchWallet?: boolean }) => {
    try {
      if (!blockNumber) return;

      setIsLoading(true);
      // Generate the message to be signed

      console.log("Signing in...");

      const authSig = await regenerateAuthSig(undefined, { isPatchWallet, patchUserId: userId || undefined });

      // example
      console.log("AUTH SIG GENERATED");

      const blockchainMessage = await encodeAbiParameters(parseAbiParameters("uint256 blockNumber, address nodeAddress"), [
        10000000000n,
        currentNode! as Address,
      ]);

      const walletClient = await getWalletClient({ chainId: Number(currentNetworkId!) });
      let blockchainSignature;
      if (isPatchWallet) {
        if (!userId) throw new Error("No user ID provided");
        const _blockchainSignature = await generatePatchSignature({
          message: keccak256(blockchainMessage),
          userId: userId,
          erc6492: true,
        });

        blockchainSignature = _blockchainSignature.signature;
      } else blockchainSignature = await walletClient!.signMessage({ message: { raw: keccak256(blockchainMessage) } });

      console.log("BLOCKCHAIN SIGNATURE GENERATED");

      // Send the signature to the server to be verified, and sign in or sign up the user
      await signIn("credentials", {
        message: authSig.signedMessage,
        signature: authSig.sig,
        userId: userId,
        derivedVia: authSig.derivedVia,
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

  const regenerateAuthSig = async (
    _expiration?: string,
    {
      addressOverride,

      isPatchWallet,
      patchUserId,
    }: {
      addressOverride?: string;

      isPatchWallet?: boolean;
      patchUserId?: string;
    } = {}
  ) => {
    if (isPatchWallet && !addressOverride)
      addressOverride = (
        await getUserFromId({
          userId: patchUserId!,
          baseProvider: env.NEXT_PUBLIC_PATCHWALLET_KERNEL_NAME,
        })
      ).eoa;

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
      chainId: 1,
      expirationTime: expiration,
      uri: globalThis.location.href,
    };

    const message = new SiweMessage(preparedMessage);
    const body = message.prepareMessage();

    // -- 2. sign the message

    let signedResult: string | undefined;
    console.log({ isPatchWallet });
    if (isPatchWallet) {
      if (!patchUserId) throw new Error("No user ID provided");
      const patchSignatureResult = await generatePatchSignature({
        userId: patchUserId,
        message: body,
        erc6492: false,
      });
      signedResult = patchSignatureResult.signature;
      console.log("Patch signature result:", signedResult);
      console.log("-----------------------------------");
    } else signedResult = await signMessageAsync({ message: body });

    if (!signedResult) throw new Error("Unable to sign message");

    let authSig = {
      sig: signedResult,
      derivedVia: isPatchWallet ? "EIP1271" : "web3.eth.personal.sign",
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

  return { isLoading, logIn, regenerateAuthSig };
};

export const useLoggedInAddress = () => {
  const [loggedInAddress, setLoggedInAddress] = useState<string | null>(null);

  useEffect(() => {
    const authSignature = JSON.parse(localStorage.getItem("lit-auth-signature") ?? "{}");
    setLoggedInAddress(authSignature.address);
  }, []);

  return loggedInAddress || "";
};
