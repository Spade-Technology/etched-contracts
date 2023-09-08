// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { DashboardHeader } from "@/components/dashboard-header";
import { DataTableDemo } from "@/components/etches-dashboard-table";
import { SideBar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Etch, usePaginatedQuery, useQuery } from "@/gqty";
import { useGetEtchesFromUser } from "@/utils/hooks/useGetEtchesFromUser";
import { Metadata } from "next";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of the Etched app.",
};

export default function DashboardPage() {
  const { data: session } = useSession();
  const { $state, isLoading, etchToDisplay } = useGetEtchesFromUser(session?.address?.toLowerCase());

  return (
    <div className="flex h-screen w-screen bg-white">
      <SideBar />
      <div className="w-full pl-2 pr-3 pt-3">
        <DashboardHeader />
        <div className="flex flex-col items-center justify-center">
          <DataTableDemo isLoading={isLoading} data={isLoading || $state.error ? [] : etchToDisplay} />
        </div>
      </div>
    </div>
  );
}
