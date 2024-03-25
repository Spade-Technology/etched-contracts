import { Stripe as IStripe, loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

let stripePromise: Promise<IStripe | null>;
const getStripeJS = async () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

const stripeProper = new Stripe(process.env.STRIPE_SECRET_KEY!);
export { getStripeJS, stripeProper as stripe };