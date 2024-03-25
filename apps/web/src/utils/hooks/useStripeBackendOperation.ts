import { toast } from "@/components/ui/use-toast";
import { useContext, useState } from "react";
import { api } from "../api";
import { refetchContext } from "../urql";
import { sleep } from "../common";

export const useStripeBackend = () => {
  const { data: products, isLoading: stripeLoading, error: stripeError, refetch: stripeRefetch } = api.stripe.listProducts.useQuery();
  const isLoading = false; // Adjust based on actual loading state from trpc or similar API calls
  return { products, isLoading, stripeError, stripeRefetch };
};

