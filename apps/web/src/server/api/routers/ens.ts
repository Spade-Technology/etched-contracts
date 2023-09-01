import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "@/server/api/trpc";
import { lit } from "@/lit";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { TRPCError } from "@trpc/server";
import { readContract } from "@wagmi/core";
import { contracts } from "@/contracts";


export const exampleRouter = createTRPCRouter({
  requestEtchedENS: protectedProcedure.input(z.object({ ens: z.string() })).mutation(async ({ input: { ens } }) => {
    // make sure ens is alphanumeric or _, and ends with .etched
    if (!ens.match(/^[a-zA-Z0-9_]+\.etched$/)) throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid ENS name" });

    await readContract({
      address: contracts.
    })
  }),

  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
