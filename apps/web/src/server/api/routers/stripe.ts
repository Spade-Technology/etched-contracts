import { prisma } from "@/server/db";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { getStripeJS, stripe } from "@/utils/get-stripe";



export const stripeRouter = createTRPCRouter({
  linkStripeAccount: protectedProcedure
    .mutation(
      async ({
        // input: { },
        ctx: {
          session: { address, subscriberId },
        },
      }) => {
        // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
        console.log(address, subscriberId)
        const account = await stripe.customers.create({
          metadata: {
            wallet: address!
          }
        }, { idempotencyKey: address! });
        console.dir(account)
        let user = await prisma.user.update(
          {
            where: {
              address: address!,
            },
            data: {
              subscriberId: account.id
            },
          }
        )
        return { account: account };
      }
    ),

  listProducts: protectedProcedure
    .query(
      async ({
        // input: { },
        ctx: {
          session: { address, subscriberId },
        },
      }) => {
        // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
        console.log(address, subscriberId)
        const prodResponse = await stripe.products.list({ limit: 3 })
        const products = prodResponse.data || []
        // console.log(products)
        return products;
      }
    ),

  //CONSIDER: We should probably only allow a "single" subscription with multiple "items" (sub-subscriptions with quantities) listed rather than managing separate subscriptions.
  //TODO: createUserSubscription
  //TODO: cancelUserSubscription
  //TODO: listUserSubscriptions
});
