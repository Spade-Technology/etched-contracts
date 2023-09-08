// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { DashboardHeader } from "@/components/dashboard-header";
import { DataTableDemo } from "@/components/etches-dashboard-table";
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

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of the Etched app.",
};

export default function DashboardPage() {
  const router = useRouter();
  const user = router.query?.user;

  const {
    isLoading: isQuerying,
    data: _ens,
    refetch,
  } = useContractRead({
    abi: ENSAbi,
    address: contracts.ENS,
    functionName: "getENS",
    args: [user],
    enabled: !!user,
  });
  const ens = (_ens as string[]) || undefined;

  const { $state, isLoading, etchToDisplay } = useGetEtchesFromUser(user);

  console.log({ ens, etchToDisplay, user });
  const userName = ens?.[0] ? ens?.[0]?.split(".etched")[0] : user ? shortenAddress({ address: user as string }) : user;

  return (
    <div className="flex h-screen w-screen bg-white">
      <SideBar />
      <div className="w-full pl-2 pr-3 pt-3">
        <DashboardHeader />
        <div className="mt-6 flex h-16 items-center px-6 shadow-etched-1">
          <h2 className="text-lg font-semibold">
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard/users">Users</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href={"/dashboard/users/" + userName}>
                  {userName ?? <Skeleton className="my-auto h-4 w-12" />}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="flex">
              {userName ? (
                <>
                  {userName}
                  {ens?.[0] && <span className="text-primary">.etched</span>}
                </>
              ) : (
                <Skeleton className="my-auto h-4 w-24" />
              )}
              <span className="my-auto">'s history</span>
            </div>
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <DataTableDemo isLoading={isLoading} data={isLoading || $state.error ? [] : etchToDisplay} />
        </div>
      </div>
    </div>
  );
}
