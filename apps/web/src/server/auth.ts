import { IncomingMessage } from "http";
import { type GetServerSidePropsContext } from "next";
import { getServerSession, type DefaultSession, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getCsrfToken } from "next-auth/react";
import { SiweMessage } from "siwe";
import { prisma } from "@/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    address: string | undefined | null;
    user: {
      name: string | undefined | null;
      description: string | undefined | null;
      picture: string | undefined | null;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }
}

export async function verifySiweMessage(credentials: Record<"message" | "signature", string> | undefined, req: IncomingMessage) {
  const siwe = new SiweMessage(credentials!.message);
  console.log(siwe);

  // Make sure the domain matches
  let nextAuthHost = "";
  const nextAuthUrl = process.env.NEXTAUTH_URL || null;

  if (process.env.NODE_ENV === "development") nextAuthHost = req.headers.host || "";
  else if (!nextAuthUrl) return null;
  else nextAuthHost = new URL(nextAuthUrl).host;

  console.log(credentials);

  const verified = await siwe
    .verify({
      signature: credentials?.signature || "",
      domain: nextAuthHost,
      // nonce: await getCsrfToken({ req }),
    })
    .catch((e) => {
      console.log(e);
      return { success: false };
    });

  if (verified.success) return siwe;

  return null;
}

export function getAuthOptions(req: IncomingMessage): NextAuthOptions {
  const providers = [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          if (!credentials) return null;

          console.log(credentials);

          // Verify the message
          const siwe = await verifySiweMessage(
            {
              message: credentials.message,
              signature: credentials.signature,
            },
            req
          );

          // If the message is invalid, bad request
          if (!siwe) return null;

          // Fetch user by address
          let user = await prisma.user.findUnique({ where: { address: siwe.address } });

          // If user doesn't exist, create it
          if (!user) user = await prisma.user.create({ data: { address: siwe.address } });

          // Return the user info
          return { id: user.address };
        } catch (e) {
          return null;
        }
      },
      credentials: {
        message: {
          label: "Message",
          placeholder: "0x0",
          type: "text",
        },
        signature: {
          label: "Signature",
          placeholder: "0x0",
          type: "text",
        },
        blockchainMessage: {
          label: "BlockchainMessage",
          placeholder: "0x0",
          type: "text",
        },
        blockchainSignature: {
          label: "BlockchainSignature",
          placeholder: "0x0",
          type: "text",
        },
      },
      name: "Ethereum",
    }),
  ];

  return {
    callbacks: {
      async session({ session, token }) {
        let user = await prisma.user.findUnique({
          where: { address: token.sub },
        });

        session.address = token.sub;
        return session;
      },
    },
    pages: {
      signIn: "/authentication",
      signOut: "/authentication",
      error: "/authentication",
      verifyRequest: "/authentication",
      newUser: "/authentication",
    },
    // https://next-auth.js.org/configuration/providers/oauth
    providers,
    secret: process.env.NEXTAUTH_JWT_SECRET,
    session: {
      strategy: "jwt",
    },
  };
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: { req: GetServerSidePropsContext["req"]; res: GetServerSidePropsContext["res"] }) => {
  return getServerSession(ctx.req, ctx.res, getAuthOptions(ctx.req));
};
