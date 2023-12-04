// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { DataTable } from "@/components/etches-dashboard-table";
import { PageBoilerplate } from "@/components/page-boilerplate";
import { useGetEtchesFromUser } from "@/utils/hooks/useGetEtchesFromUser";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of the Etched app.",
};

export default function DashboardPage() {
  const loggedInAddress = useLoggedInAddress();
  const { isLoading, etches, error } = useGetEtchesFromUser(loggedInAddress.toLowerCase());

  const etchesData = error ? [] : etches;

  return (
    <PageBoilerplate>
      <div className="mb-64 flex flex-col items-center justify-center">
        <DataTable isLoading={isLoading} data={etchesData} />
      </div>
    </PageBoilerplate>
  );
}
