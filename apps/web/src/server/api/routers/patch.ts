import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  postLitDocument: publicProcedure
    .input(
      z.object({
        chain: z.string(),
      })
    )
    .query(async ({ input: {} }) => {
      return "";
    }),
});
