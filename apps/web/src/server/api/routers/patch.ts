import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { env } from "@/env.mjs";
import { currentNetwork } from "@/contracts";
import { hashMessage, keccak256 } from "viem";
import { SiweMessage } from "siwe";
import { currentChain, walletClientToProviderAndSigner } from "@/utils/wagmi";
import { walletClient } from "@/server/web3";

const getBaseAccountAddress = async ({
  baseProvider,
  userId,
  access_token,
}: {
  baseProvider: string;
  userId: string;
  access_token: string;
}) => {
  const result = await fetch(`${env.PATCHWALLET_BASE_URL}/resolver`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({
      userIds: baseProvider + ":" + userId,
    }),
  });

  if (result.status !== 200) throw new Error(`Failed to get base account address for user ${userId}`);

  const data = await result.json();

  return data.users[0].accountAddress;
};

const getAccessToken = async () => {
  const result = await fetch(`${env.PATCHWALLET_BASE_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: env.PATCHWALLET_CLIENT_ID,
      client_secret: env.PATCHWALLET_CLIENT_SECRET,
    }),
  });

  if (result.status !== 200) throw new Error(`Failed to get an access token`);

  const data = await result.json();

  return data.access_token;
};

const signMessageUsingPatchWallet = async ({
  access_token,
  baseProvider,
  userId,
  message,
}: {
  access_token: string;
  baseProvider: string;
  userId: string;
  message: string;
}) => {
  const address = await getBaseAccountAddress({ access_token, baseProvider: baseProvider, userId });

  console.log({
    user: baseProvider + ":" + userId,
    address: address,
  });

  const preparedMessage = {
    domain: "localhost:3000",
    address: address,
    version: "1",
    chainId: 1,
    expirationTime: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000).toISOString(),
    uri: "http://localhost:3000/",
  };
  console.log(preparedMessage);
  const _siwe = new SiweMessage(preparedMessage);
  console.log(_siwe);
  const siwe = _siwe.prepareMessage();

  console.log(siwe);

  const body = JSON.stringify({
    userId: baseProvider + ":" + userId,
    string: siwe,
  });

  const result = await fetch(`${env.PATCHWALLET_BASE_URL}/kernel/sign`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    body,
    redirect: "follow",
  });

  const _signature = await result.json();

  // check signature validity

  console.log(
    await _siwe
      .verify(
        {
          signature: _signature.signature,
        },
        {
          provider: walletClientToProviderAndSigner(walletClient, currentChain).provider,
        }
      )
      .catch((e) => {
        console.log("we should not be here");
        console.log(e);
        return { success: false };
      })
  );

  if (result.status !== 200) throw new Error(`Failed to sign message for user ${userId}`);

  const data = await result.json();

  return { hash: data.hash, signature: data.signature };
};

export const patchRouter = createTRPCRouter({
  signMessageForPatchWallet: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        baseProvider: z.string().optional().default(env.NEXT_PUBLIC_PATCHWALLET_KERNEL_NAME),
        message: z.string(),
      })
    )
    .mutation(async ({ input: { userId, baseProvider, message } }) => {
      const access_token = await getAccessToken();

      const signature = await signMessageUsingPatchWallet({
        access_token,
        baseProvider: baseProvider,
        userId,
        message,
      });

      return {
        message,
        hash: signature.hash,
        signature: signature.signature,
        user: {
          id: userId,
          provider: baseProvider,
        },
      };
    }),

  getUser: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        baseProvider: z.string().optional().default(env.NEXT_PUBLIC_PATCHWALLET_KERNEL_NAME),
      })
    )
    .mutation(async ({ input: { userId, baseProvider } }) => {
      const access_token = await getAccessToken();

      const baseAccountAddress = await getBaseAccountAddress({
        access_token,
        baseProvider: baseProvider,
        userId,
      });

      return {
        eoa: baseAccountAddress,
        id: userId,
        provider: baseProvider,
      };
    }),
});
