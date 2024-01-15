import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";
import { prisma } from "@/server/db";
import { clerkClient } from "@clerk/nextjs";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const passwordValidation = z.string().refine(
  (password) => {
    if (password.length < 8) {
      return false;
    }

    // At least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }

    // At least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return false;
    }

    // At least one number
    if (!/\d/.test(password)) {
      return false;
    }

    // At least one special character
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      return false;
    }

    return true;
  },
  {
    message:
      "Invalid password. It must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.",
  }
);

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

  setClerkProfileImage: protectedProcedure
    .input(
      z.object({
        file: z.string(),
      })
    )
    .mutation(async ({ input: { file }, ctx: { session } }) => {
      if (!session?.clerkUser) {
        console.error(`User Not Found!`);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }

      const fileBlob = await fetch(file).then((r) => r.blob());
      const user = await clerkClient.users.updateUserProfileImage(session?.clerkUser.id, { file: fileBlob });

      return user;
    }),
  setClerkPassword: protectedProcedure
    .input(
      z.object({
        password: passwordValidation,
      })
    )
    .mutation(async ({ input: { password }, ctx: { session } }) => {
      if (!session?.clerkUser) {
        console.error(`User Not Found!`);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }

      if (!session?.clerkUser.passwordEnabled) {
        console.error(`Password Isn't Enabled`);
        throw new TRPCError({ code: "BAD_REQUEST" });
      }

      const user = await clerkClient.users.updateUser(session?.clerkUser.id, { password });

      return user;
    }),

  setClerkFirstName: protectedProcedure
    .input(
      z.object({
        firstName: z.string(),
      })
    )
    .mutation(async ({ input: { firstName }, ctx: { session } }) => {
      if (!session?.clerkUser) {
        console.error(`User Not Found!`);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }

      const user = await clerkClient.users.updateUser(session?.clerkUser.id, { firstName });

      return user;
    }),

  setClerkLastName: protectedProcedure
    .input(
      z.object({
        lastName: z.string(),
      })
    )
    .mutation(async ({ input: { lastName }, ctx: { session } }) => {
      if (!session?.clerkUser) {
        console.error(`User Not Found!`);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }

      const user = await clerkClient.users.updateUser(session?.clerkUser.id, { lastName });

      return user;
    }),
});
