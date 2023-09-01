// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
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
      <div className="w-full pl-2 pr-8">
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-white">Dashboard</div>
          <div className="text-3xl font-bold text-white">Etches</div>
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
