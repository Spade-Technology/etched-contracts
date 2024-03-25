// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { DataTable } from "@/components/etches-dashboard-table";
import { PageBoilerplate } from "@/components/page-boilerplate";
import { useGetEtchesFromUser } from "@/utils/hooks/useGetEtchesFromUser";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";
import { useStripeBackend } from "@/utils/hooks/useStripeBackendOperation";
import { Metadata } from "next";
import { useEffect } from "react";
import { api } from "@/utils/api";
import { Button } from "@/components/ui/button";
import ProductList from "@/components/stripe/product-list";

export const metadata: Metadata = {
  title: "Billing",
  description: "Billing center!",
};

export default function DashboardPage() {
  const { products, isLoading, stripeError, stripeRefetch } = useStripeBackend();
  const { mutateAsync: linkStripeAccount } = api.stripe.linkStripeAccount.useMutation();
  // const loggedInAddress = useLoggedInAddress();

  // useEffect(() => {
  //   listProducts();
  // }, []);

  return (
    <PageBoilerplate>
      <Button className="my-4"
        onClick={async () => {
          await linkStripeAccount();
        }}
      >
        Link Stripe Account
      </Button>
      <ProductList products={products || []}></ProductList>
    </PageBoilerplate>
  );
}
