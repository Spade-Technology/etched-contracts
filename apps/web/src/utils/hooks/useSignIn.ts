import { getCsrfToken, signIn, signOut as _signOut } from "next-auth/react";
import { useState } from "react";
import { SiweMessage } from "siwe";
import { useAccount, useBlockNumber, useNetwork, useSignMessage } from "wagmi";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { currentNetwork, currentNetworkId, currentNode } from "@/contracts";
import { Address, encodeAbiParameters, encodePacked, hashMessage, keccak256, parseAbiParameters } from "viem";
import { getWalletClient, signMessage } from "@wagmi/core";
import { parseAbi } from "abitype";

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

      const expiration = 60 * 60 * 24 * 7; // 7 days
      const expiration_date = new Date(Date.now() + expiration * 1000);

      const message = new SiweMessage({
        domain: window.location.host,
        uri: window.location.origin,
        address: address,
        statement: "Sign in with Ethereum to Etched.",
        version: "1",
        chainId: chain?.id,
        nonce: await getCsrfToken(),
        expirationTime: expiration_date.toISOString(),
      });

      const blockchainMessage = await encodeAbiParameters(parseAbiParameters("uint256 blockNumber, address nodeAddress"), [
        10000000000n,
        currentNode! as Address,
      ]);
      const walletClient = await getWalletClient({ chainId: Number(currentNetworkId!) });
      const blockchainSignature = await walletClient!.signMessage({ message: { raw: keccak256(blockchainMessage) } });

      // Request the web2 signature from the user
      const webSignature = await signMessageAsync({ message: message.prepareMessage() });

      // Generate the lit signature
      const litAuthSig = await LitJsSdk.checkAndSignAuthMessage({
        chain: currentNetwork,
        expiration: expiration_date.toISOString(),
      });

      // Send the signature to the server to be verified, and sign in or sign up the user
      await signIn("credentials", {
        message: JSON.stringify(message),
        signature: webSignature,
        blockchainMessage,
        blockchainSignature,
        litAuthSig: JSON.stringify(litAuthSig),
        redirect: false,
      });

      localStorage.setItem("blockchainSignature", blockchainSignature);
      localStorage.setItem("blockchainMessage", blockchainMessage);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return { isLoading, logIn };
};
