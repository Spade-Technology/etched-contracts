import { contracts, currentNetwork, currentNode } from "@/contracts";
import { lit } from "@/lit";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";
import { publicClient, walletClient } from "@/server/web3";
import EtchABI from "@abis/Etches.json";
import { TRPCError } from "@trpc/server";
import {
  Address,
  decodeEventLog,
  decodeFunctionResult,
  encodeFunctionData,
  encodePacked,
  hashMessage,
  keccak256,
  recoverAddress,
} from "viem";
import { z, infer } from "zod";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { defaultAccessControlConditions } from "@/utils/accessControlConditions";
import { env } from "@/env.mjs";
import { prisma } from "@/server/db";

export const userRouter = createTRPCRouter({
  subscribeToNewsletter: publicProcedure
    .input(z.object({ email: z.string().email(), company: z.string() }))
    .mutation(async ({ input: { email, company } }) => {
      const el = await prisma.subscriber.upsert({
        where: { email },
        update: { company },
        create: { email, company },
      });

      console.log(el);

      return true;
    }),
});
