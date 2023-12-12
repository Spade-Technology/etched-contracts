import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { prisma } from "@/server/db";
import { clerkClient } from "@clerk/nextjs";
import { z } from "zod";

export const userRouter = createTRPCRouter({
  subscribeToNewsletter: publicProcedure
    .input(z.object({ email: z.string().email(), company: z.string() }))
    .mutation(async ({ input: { email, company } }) => {
      const el = await prisma.subscriber.upsert({
        where: { email },
        update: { company },
        create: { email, company },
      });

      return true;
    }),

  getClerkUser: publicProcedure
    .input(z.object({ externalId: z.string().array() }))
    .mutation(async ({ input: { externalId } }) => {
      const user = await clerkClient.users.getUserList({ externalId });

      return user;
    }),
});
