// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { getStripe } from "@/utils/get-stripe";
import { DataTable } from "@/components/etches-dashboard-table";
import { PageBoilerplate } from "@/components/page-boilerplate";
import { useGetEtchesFromUser } from "@/utils/hooks/useGetEtchesFromUser";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing",
  description: "Billing center!",
};

export default function DashboardPage() {
  const loggedInAddress = useLoggedInAddress();
  // const { isLoading, etches, error } = useGetEtchesFromUser(loggedInAddress.toLowerCase());
  
  return (
    <PageBoilerplate>
      <div className="mb-64 flex flex-col items-center justify-center">{loggedInAddress}</div>
    </PageBoilerplate>
  );
}
