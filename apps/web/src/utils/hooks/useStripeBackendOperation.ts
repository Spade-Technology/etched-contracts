import { toast } from "@/components/ui/use-toast";
import { useContext, useState } from "react";
import { api } from "../api";
import { sleep } from "../common";
import { SubscriptionStatus, SubscriptionItems } from "@/stripeTypes";

export const useStripeProductsList = () => {
  const { data: products, isLoading: stripeLoadingProducts, error: stripeErrorProducts, refetch: stripeRefetchProducts } = api.stripe.listProducts.useQuery();
  return { products, stripeLoadingProducts, stripeErrorProducts, stripeRefetchProducts };
};

export const useStripeSubscriptionsList = (status: SubscriptionStatus = 'active') => {
  const { data: subscriptions, isLoading: stripeLoadingSubscriptions, error: stripeErrorSubscriptions, refetch: stripeRefetchSubscriptions } = api.stripe.listUserSubscriptions.useQuery({ status });
  return { subscriptions, stripeLoadingSubscriptions, stripeErrorSubscriptions, stripeRefetchSubscriptions };
};

export const useStripeSubscriptionCreate = () => {
  const { mutateAsync: mutationCreateSubscription, isLoading: stripeCreatingSubscription, error: stripeErrorCreatingSubscription } = api.stripe.createUserSubscription.useMutation();
  return { mutationCreateSubscription, stripeCreatingSubscription, stripeErrorCreatingSubscription };
};

export const useStripeSubscriptionUpdate = () => {
  const { mutateAsync: mutationUpdateSubscription, isLoading: stripeUpdatingSubscription, error: stripeErrorUpdatingSubscription } = api.stripe.updateUserSubscription.useMutation();
  return { mutationUpdateSubscription, stripeUpdatingSubscription, stripeErrorUpdatingSubscription };
};