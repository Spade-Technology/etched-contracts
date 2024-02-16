import { adminProcedure, createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";
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

async function retrieveStoredCode(code: string) {
  const userCode = await prisma.userActivationCode.findFirstOrThrow({
    where: { code, userAddress: null },
  });

  return {
    storedCode: userCode?.code,
    expiration: userCode?.expiration,
  };
}

async function invalidateStoredCode(code: string, userAddress: string) {
  await prisma.userActivationCode.updateMany({
    where: { code },
    data: { userAddress },
  });
}

async function createStoredCode() {
  const generateRandomPart = () =>
    String.fromCharCode(
      ...Array(5)
        .fill(null)
        .map(() => Math.floor(Math.random() * 26) + 65)
    );
  const code = `${generateRandomPart()}-${generateRandomPart()}-${generateRandomPart()}`;
  const expiration = new Date();

  // 30d
  expiration.setDate(expiration.getDate() + 30);

  await prisma.userActivationCode.create({
    data: { code, expiration },
  });

  return { code, expiration };
}

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

  sendActivationCode: protectedProcedure
    .input(z.object({ code: z.string() }))
    .mutation(async ({ input: { code }, ctx: { session } }) => {
      // Assuming you have a method to retrieve the stored code and its expiration
      try {
        const { storedCode, expiration } = await retrieveStoredCode(code);
        const currentTime = new Date();

        if (!storedCode) {
          throw new TRPCError({ code: "FORBIDDEN", message: "No activation code found." });
        }

        if (currentTime > expiration) {
          throw new TRPCError({ code: "FORBIDDEN", message: "The activation code has expired." });
        }
      } catch (error) {
        throw new TRPCError({ code: "FORBIDDEN", message: "The activation code is invalid." });
      }

      // Invalidate or delete the code after successful verification
      await invalidateStoredCode(code, session.address!);

      await prisma.user.update({
        where: { address: session.address! },
        data: { isApproved: "Approved" },
      });

      return { success: true, message: "Activation code verified successfully." };
    }),

  createActivationCode: adminProcedure.mutation(async ({ ctx: { session } }) => {
    const { code, expiration } = await createStoredCode();

    return { code, expiration };
  }),
});
