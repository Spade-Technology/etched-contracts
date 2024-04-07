// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/components/etches-dashboard-table";
import { PageBoilerplate } from "@/components/page-boilerplate";
import { useGetEtchesFromUser } from "@/utils/hooks/useGetEtchesFromUser";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";
import { useStripeProductsList, useStripeSubscriptionsList } from "@/utils/hooks/useStripeBackendOperation";
import { useState } from "react";
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
  const { products, stripeLoadingProducts, stripeErrorProducts, stripeRefetchProducts } = useStripeProductsList();
  const { subscriptions, stripeLoadingSubscriptions, stripeErrorSubscriptions, stripeRefetchSubscriptions } =
    useStripeSubscriptionsList("active");
  const { mutateAsync: linkStripeAccount } = api.stripe.linkStripeAccount.useMutation();
  const [curTab, setCurTab] = useState("subscriptions");
  // const loggedInAddress = useLoggedInAddress();

  // useEffect(() => {
  //   listProducts();
  // }, []);

  return (
    <PageBoilerplate>
      <Button
        className="my-4"
        onClick={async () => {
          await linkStripeAccount();
        }}
      >
        {" "}
        Link Stripe Account
      </Button>
      <Tabs
        defaultValue="subscriptions"
        value={curTab}
        onValueChange={(v) => {
          setCurTab(v);
        }}
      >
        <TabsList aria-label="Billing" className="mb-7 mt-[9px]  w-full">
          {["subscriptions", "payment-methods"].map((item, id) => (
            <TabsTrigger key={id} value={item} className="w-full">
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="subscriptions">
          <ProductList products={products || []}></ProductList>
          {subscriptions?.map((sub) => {
            return <div>{sub.id}</div>;
          })}
        </TabsContent>
        <TabsContent value="payment-methods">PAYMENT METHODS!</TabsContent>
      </Tabs>
    </PageBoilerplate>
  );
}
