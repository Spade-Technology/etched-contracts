// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { DashboardHeader } from "@/components/dashboard-header";
import { DataTable } from "@/components/etches-dashboard-table";
import { SideBar } from "@/components/sidebar";
import { useGetEtchesFromUser } from "@/utils/hooks/useGetEtchesFromUser";
import { Metadata } from "next";
import { useRouter } from "next/router";
import { useContractRead } from "wagmi";
import ENSAbi from "@/contracts/abi/EtchENS.json";
import { contracts } from "@/contracts";
import { shortenAddress } from "@/utils/hooks/address";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumbs";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetEtchesFromTeam } from "@/utils/hooks/useGetEtchesFromTeam";
import { Label } from "@radix-ui/react-label";
import { type } from "os";
import { PageBoilerplate } from "@/components/page-boilerplate";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of the Etched app.",
};

export default function DashboardPage() {
  const router = useRouter();
  const etchId = router.query?.etch;

  if (!etchId || typeof etchId !== "string") return <div className="flex h-screen w-screen bg-white"> 404 </div>;

  return (
    <PageBoilerplate>
      <div className="mt-6 flex h-32 items-center px-6 shadow-etched-1">
        <div className="flex-col gap-2">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/">Etches</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href={"/dashboard/etches/"}>
                <div className="flex gap-1">
                  <Skeleton className="my-auto h-4 w-5" />
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="flex-col gap-2"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center"></div>
    </PageBoilerplate>
  );
}
