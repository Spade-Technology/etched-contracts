import { prisma } from "@/server/db";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";
import { getStripeJS, stripe } from "@/utils/get-stripe";



export const stripeRouter = createTRPCRouter({
  //ASSUMPTION: Wallet metadata is never repeated
  linkStripeAccount: protectedProcedure
    .mutation(
      async ({
        // input: { },
        ctx: {
          session: { address, customerId },
        },
      }) => {
        // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
        console.log(address, customerId)
        //DETAIL: See if metadata with wallet exists already
        const existing = await stripe.customers.search({
          query: `metadata['wallet']:'${address}'`
        })

        if (existing?.data?.length > 0) {
          console.log(existing.data[0])
          return existing.data[0]
        }


        //DETAIL: If no wallet/user already exists, continue
        const account = await stripe.customers.create({
          metadata: {
            wallet: address!
          }
        }, { idempotencyKey: address! });
        
        let user = await prisma.user.update(
          {
            where: {
              address: address!,
            },
            data: {
              customerId: account.id
            },
          }
        )
        return { account: account };
      }
    ),

  //CONSIDER: We should probably only allow a "single" subscription with multiple "items" (sub-subscriptions with quantities) listed rather than managing separate subscriptions.
  createUserSubscription: protectedProcedure
    .input(z.object({
      items: z.array(z.object({
        priceId: z.string(),
        quantity: z.number(),
      })),
    }))
    .mutation(
      async ({
        input,
        ctx: {
          session: { customerId },
        },
      }) => {
        if (!customerId) {
          throw new Error("Subscriber ID is required");
        }
        const items = input.items.map(({ priceId, quantity }) => ({
          price: priceId,
          quantity: !isNaN(quantity) ? quantity : 0
        }));
        const subscription = await stripe.subscriptions.create({
          customer: customerId,
          items: items,
          // expand: ["latest_invoice.payment_intent"],
        });
        console.log(subscription)
        return { subscription };
      }
    ),

  updateUserSubscription: protectedProcedure
    .input(
      z.object({
        subscriptionId: z.string(),
        items: z.array(z.object({
          priceId: z.string(),
          quantity: z.number(),
        })),
      }))
    .mutation(
      async ({
        input,
        ctx: {
          session: { customerId },
        },
      }) => {
        if (!customerId) {
          throw new Error("Subscriber ID is required");
        }
        const items = input.items.map(({ priceId, quantity }) => ({
          price: priceId,
          quantity: !isNaN(quantity) ? quantity : 0
        }));
        const subscription = await stripe.subscriptions.update(
          input.subscriptionId,
          {
            items: input.items
          });
        console.log(subscription)
        return { subscription };
      }
    ),
  cancelUserSubscription: protectedProcedure
    .input(z.object({
      subscriptionId: z.string(),
    }))
    .mutation(async ({
      input,
      ctx: {
        session: { customerId },
      }, }) => {
      const { subscriptionId } = input;
      const cancelledSubscription = await stripe.subscriptions.cancel(subscriptionId);
      return { cancelledSubscription };
    }),

  listUserSubscriptions: protectedProcedure
    .input(z.object({
      status: z.enum(["incomplete", "incomplete_expired", "trialing", "active", "past_due", "canceled", "unpaid", "paused"]).optional(),
    }))
    .query(
      async ({
        input,
        ctx: {
          session: { address, customerId },
        },
      }) => {
        const subscriptions = await stripe.subscriptions.list({
          customer: `${customerId}`,
          status: input.status,
          // expand: ['data.default_payment_method'],
        });
        console.dir(subscriptions.data)
        return subscriptions.data;
      }),

  listProducts: protectedProcedure
    .query(
      async ({
        // input: { },
        ctx: {
          session: { address, customerId },
        },
      }) => {
        // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
        console.log(address, customerId)
        const prodResponse = await stripe.products.list({ limit: 3 })
        const products = prodResponse.data || []
        // console.log(products)
        return products;
      }
    ),
});
