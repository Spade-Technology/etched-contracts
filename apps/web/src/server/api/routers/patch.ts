import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { env } from "@/env.mjs";
import { currentNetwork } from "@/contracts";
import { Address, encodeAbiParameters, encodeFunctionData, getContract, hashMessage, keccak256, toBytes } from "viem";
import { SiweMessage } from "siwe";
import { currentChain, walletClientToProviderAndSigner } from "@/utils/wagmi";

import { publicClient, walletClient } from "@/server/web3";
import { PATCH_FACTORY_ABI, PATCH_FACTORY_ADDRESS } from "@/contracts/patchwallet/factory";

const getBaseAccountAddress = async ({
  baseProvider,
  userId,
  access_token,
}: {
  baseProvider: string;
  userId: string;
  access_token: string;
}) => {
  const patchId = baseProvider + ":" + userId;
  const salt = keccak256(toBytes(patchId + `:kernel-account`));

  const result = await fetch(`${env.PATCHWALLET_BASE_URL}/resolver`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({
      userIds: patchId,
    }),
  });

  if (result.status !== 200) throw new Error(`Failed to get base account address for user ${userId}`);

  const data = await result.json();

  const addressFromApi = data.users[0].accountAddress;

  const factory = getContract({
    abi: PATCH_FACTORY_ABI,
    address: PATCH_FACTORY_ADDRESS,
    publicClient,
  });

  const addressFromFactory = await factory.read.getAccountAddress([salt]);

  // don't match if the provider is "etched", but works if "test"
  console.log({ addressFromApi, addressFromFactory });

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
  const body = JSON.stringify({
    userId: baseProvider + ":" + userId,
    string: message,
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

  if (result.status !== 200) throw new Error(`Failed to sign message for user ${userId}`);

  // check signature validity

  // THIS WON'T WORK Because the signature hasn't been wrapped by EIP6492
  const address = await getBaseAccountAddress({ access_token, baseProvider: baseProvider, userId });

  const patchId = baseProvider + ":" + userId;
  const salt = keccak256(toBytes(patchId + `:kernel-account`));

  console.log("Encoding function data...");
  const factoryCreationCalldata = encodeFunctionData({
    functionName: "createAccount",
    abi: PATCH_FACTORY_ABI,
    args: [salt],
  }) as `0x${string}`;

  const signature_6492_account_not_created =
    encodeAbiParameters(
      [
        { type: "address", name: "create2Factory" },
        { type: "bytes", name: "factoryCalldata" },
        { type: "bytes", name: "signature" },
      ],
      [PATCH_FACTORY_ADDRESS, factoryCreationCalldata, _signature.signature as `0x${string}`]
      // the "MagicBytes" are used to detect 6492 signatures. They consist of 64 Characters (32 bytes) that say "6492"
    ) + "6492".repeat(16);

  return { hash: _signature.hash, signature: signature_6492_account_not_created };
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
