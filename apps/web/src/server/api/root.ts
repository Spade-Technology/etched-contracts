import { etchRouter } from "@/server/api/routers/etch";
import { createTRPCRouter } from "@/server/api/trpc";
import { ensRouter } from "./routers/ens";
import { patchRouter } from "./routers/patch";
import { teamRouter } from "./routers/team";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  etch: etchRouter,
  team: teamRouter,
  ens: ensRouter,
  patch: patchRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
