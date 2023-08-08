import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { lit } from "~/lit";
import * as LitJsSdk from "@lit-protocol/lit-node-client";

export const exampleRouter = createTRPCRouter({
  postLitDocument: publicProcedure
    .input(
      z.object({
        chain: z.string(),
        authSig: z.any(),
        accessControlConditions: z.any(),
        title: z.string(),
        file_link: z.string(),
      })
    )
    .mutation(
      async ({
        input: { chain, authSig, accessControlConditions, title, file_link },
      }) => {
        await lit.connect();

        const file = await fetch(file_link).then((res) => res.blob());

        console.log("downloaded file");

        const ipfsCid = await LitJsSdk.encryptToIpfs({
          chain,
          authSig,
          accessControlConditions,
          // string: title,
          file,
          infuraId: process.env.NEXT_PUBLIC_INFURA_ID as string,
          infuraSecretKey: process.env.INFURA_API_SECRET as string,
          litNodeClient: lit.client as any,
        });

        console.log(ipfsCid);

        return ipfsCid;
      }
    ),

  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
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
