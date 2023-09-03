import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),

    // Database
    DATABASE_URL: z.string().url(),
    DATABASE_PRISMA_URL: z.string().url(),
    DATABASE_URL_NON_POOLING: z.string().url(),
    DATABASE_USER: z.string(),
    DATABASE_HOST: z.string(),
    DATABASE_PASSWORD: z.string(),
    DATABASE_DATABASE: z.string(),

    // Authorization
    NEXTAUTH_SECRET: process.env.NODE_ENV === "production" ? z.string().min(1) : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
      // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
      // Since NextAuth.js automatically uses the VERCEL_URL if present.
      (str) => process.env.VERCEL_URL ?? str,
      // VERCEL_URL doesn't include `https` so it cant be validated as a URL
      process.env.VERCEL ? z.string().min(1) : z.string().url()
    ),

    // Third Party
    UPLOADTHING_SECRET: z.string().min(1),
    UPLOADTHING_APP_ID: z.string().min(1),

    // RPC URLs
    // Add `.min(1) on ID and SECRET if you want to make sure they're not empty
    NEXT_PUBLIC_INFURA_ID: z.string(),
    INFURA_API_SECRET: z.string(),
    INFURA_KEY: z.string(),

    // Etched Configuration
    DEPLOYMENT_BLOCK: z.string(),
    NETWORK: z.string(),
    NETWORK_ID: z.number(),

    // Etched Node
    ETCHED_NODE_PRIVATE_KEY: z.string(),

    // Etched Configuration
    NEXT_PUBLIC_THEGRAPH_URL: z.string().url(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,

    // Database
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_PRISMA_URL: process.env.DATABASE_PRISMA_URL,
    DATABASE_URL_NON_POOLING: process.env.DATABASE_URL_NON_POOLING,
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_DATABASE: process.env.DATABASE_DATABASE,

    // Authorization
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,

    // Third Party
    UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
    UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID,

    // RPC URLs
    NEXT_PUBLIC_INFURA_ID: process.env.NEXT_PUBLIC_INFURA_ID,
    INFURA_API_SECRET: process.env.INFURA_API_SECRET,
    INFURA_KEY: process.env.INFURA_KEY,

    // Etched Configuration
    DEPLOYMENT_BLOCK: process.env.DEPLOYMENT_BLOCK,
    NETWORK: process.env.NETWORK,
    NETWORK_ID: Number(process.env.NETWORK_ID),

    // Etched Node
    ETCHED_NODE_PRIVATE_KEY: process.env.ETCHED_NODE_PRIVATE_KEY,

    // Etched Configuration
    NEXT_PUBLIC_THEGRAPH_URL: process.env.NEXT_PUBLIC_THEGRAPH_URL,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
