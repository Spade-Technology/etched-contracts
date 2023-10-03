// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { DataTable } from "@/components/etches-dashboard-table";
import { PageBoilerplate } from "@/components/page-boilerplate";
import { useGetEtchesFromUser } from "@/utils/hooks/useGetEtchesFromUser";
import { Metadata } from "next";
import { useSession } from "next-auth/react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of the Etched app.",
};

export default function DashboardPage() {
  const { data: session } = useSession();
  const { $state, isLoading, etchToDisplay } = useGetEtchesFromUser(session?.address?.toLowerCase());

  return (
    <PageBoilerplate>
      <div className="flex flex-col items-center justify-center">
        <DataTable isLoading={isLoading} data={isLoading || $state.error ? [] : etchToDisplay} />
      </div>
    </PageBoilerplate>
  );
}
