// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { DashboardHeader } from "@/components/dashboard-header";
import { DataTableDemo } from "@/components/etches-dashboard-table";
import { SideBar } from "@/components/sidebar";
import { Etch, usePaginatedQuery, useQuery } from "@/gqty";
import { Metadata } from "next";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of the Etched app.",
};

export default function DashboardPage() {
  const [data, setData] = useState<Etch[]>([]);
  const query = useQuery({
    suspense: true,
  });

  const etches = query.etches({ first: 10 });

  return (
    <div className="flex h-screen w-screen bg-white">
      <SideBar />
      <div className="w-full pl-2 pr-3 pt-3">
        <DashboardHeader />
        <div className="flex flex-col items-center justify-center">
          <DataTableDemo
            data={query.$state.isLoading || query.$state.error || etches[0]?.__typename === undefined ? [] : etches}
          />
          {/* <div className="flex-grid flex">
              {query
                .etches({
                  first: 10,
                })
                .map((etch) => (
                  <div className="flex flex-col items-center justify-center" key={etch.id}>
                    {etch.id}
                  </div>
                ))}
            </div> */}
        </div>
      </div>
    </div>
  );
}
