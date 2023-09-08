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

  const logIn = async () => {
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

  const logInUsingClerk = async (userId: string, userToken: string, data: string) => {
    const response = await fetch("https://paymagicapi.com/v1/kernel/tx", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer {{access_token}}",
      },
      body: JSON.stringify({
        userId: userId + ":" + (await getToken()),
        chain: "matic",
        data,
      }),
    });
  };

  const regenerateAuthSig = async (_expiration?: string) => {
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

    const walletClient = await getWalletClient({ chainId: chain!.id });

    const authSig = await LitJsSdk.ethConnect.signAndSaveAuthMessage({
      web3: walletClientToProviderAndSigner(walletClient!, chain!).provider,
      account: address!.toLowerCase(),
      chainId: chain!.id,
      uri: window.location.origin,
      expiration,
      resources: undefined,
    });

    return authSig;
  };

  return { isLoading, logIn, regenerateAuthSig };
};
