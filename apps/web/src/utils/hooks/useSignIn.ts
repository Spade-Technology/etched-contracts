import { currentNetworkId, currentNode } from "@/contracts";
import { useAuth } from "@clerk/nextjs";
import { getWalletClient } from "@wagmi/core";
import { signOut as _signOut, signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { SiweMessage } from "siwe";
import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";
import { Address, encodeAbiParameters, keccak256, parseAbiParameters } from "viem";
import { useAccount, useBlockNumber, useSignMessage } from "wagmi";

import { toast } from "@/components/ui/use-toast";
import { env } from "@/env.mjs";
import { hashMessageForLit } from "@/lit";
import { api } from "../api";
import { useRouter } from "next/router";

export function useSignOut() {
  const { signOut: clerkSignOut, sessionId } = useAuth();

  const signOut = async () => {
    try {
      if (sessionId) await clerkSignOut({ sessionId });

      localStorage.clear();

      _signOut({ callbackUrl: "/auth" });
    } catch (error) {
      console.error("signOut error: ", error);
    }
  };

  return { signOut };
}

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: blockNumber } = useBlockNumber();
  const { address } = useAccount();
  const { signOut } = useSignOut();

  const { signMessageAsync } = useSignMessage();
  const { mutateAsync: generatePatchSignature } = api.patch.signMessageForPatchWallet.useMutation();
  const { userId: _userId } = useAuth();
  const userId = _userId?.toLowerCase();
  const { mutateAsync: getUserFromId } = api.patch.getUser.useMutation();
  const { data: nextAuthSession } = useSession();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (nextAuthSession && nextAuthSession.isApproved === "Pending" && isSignedIn && !router.asPath.includes("auth"))
      router.push("/auth/waitlist");
  }, [nextAuthSession, isSignedIn]);

  const logIn = async ({ isPatchWallet = false, callback }: { isPatchWallet?: boolean; callback?: (status: string) => void }) => {
    try {
      if (!blockNumber) return;

      setIsLoading(true);
      // Generate the message to be signed

      callback?.("Preparing your Folders");

      const authSig = await regenerateAuthSig(undefined, { isPatchWallet, patchUserId: userId || undefined });

      // example

      const blockchainMessage = await encodeAbiParameters(parseAbiParameters("uint256 blockNumber, address nodeAddress"), [
        10000000000n,
        currentNode! as Address,
      ]);

      callback?.("Tidying your workspace");

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

      callback?.("Making sure everything is in order");

      // Send the signature to the server to be verified, and sign in or sign up the user
      const signedIn = await signIn("credentials", {
        message: authSig.signedMessage,
        signature: authSig.sig,
        userId: _userId,
        derivedVia: authSig.derivedVia,
        blockchainMessage,
        blockchainSignature,
        redirect: false,
      });

      if (!signedIn?.ok) {
        toast({
          title: "Error",
          description: "Unable to sign in. Please try again later.",
          variant: "destructive",
        });
        signOut();
      }

      localStorage.setItem("blockchainSignature", blockchainSignature);
      localStorage.setItem("blockchainMessage", blockchainMessage);
    } catch (error) {
      console.error("error login: ", error);
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
    try {
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

      // cache
      if (signature && new Date(expirationDateString) > new Date()) return signature;

      // -- 1. prepare 'sign-in with ethereum' message
      const preparedMessage = {
        domain: globalThis.location.host,
        uri: globalThis.location.href,
        address: addressOverride ?? address,
        version: "1",
        statement: "This message will allow both Lit MPC Protocol, and etched, to verify your identity.",
        chainId: currentNetworkId,
        expirationTime: expiration,
      };

      const message = new SiweMessage(preparedMessage);

      const body = message.prepareMessage();

      // -- 2. sign the message

      let signedResult: string | undefined;

      if (isPatchWallet) {
        if (!patchUserId) throw new Error("No user ID provided");
        const patchSignatureResult = await generatePatchSignature({
          userId: patchUserId,
          message: hashMessageForLit(body),
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
        address: (addressOverride ?? address)?.toLowerCase(),
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
    } catch (error) {
      console.error("error regenerateAuthSig: ", error);
      signOut();
    }
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
