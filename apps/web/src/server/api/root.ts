import { etchRouter } from "@/server/api/routers/etch";
import { diamondEtchRouter } from "@/server/api/routers/diamond-etch";
import { createTRPCRouter } from "@/server/api/trpc";
import { ensRouter } from "./routers/ens";
import { orgRouter } from "./routers/org";
import { patchRouter } from "./routers/patch";
import { teamRouter } from "./routers/team";
import { userRouter } from "./routers/user";
import { stripeRouter } from "./routers/stripe";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  etch: etchRouter,
  diamondEtch: diamondEtchRouter,
  team: teamRouter,
  org: orgRouter,
  ens: ensRouter,
  patch: patchRouter,
  user: userRouter,
  stripe: stripeRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
