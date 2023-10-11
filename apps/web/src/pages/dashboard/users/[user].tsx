// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { DataTable } from "@/components/etches-dashboard-table";
import { PageBoilerplate } from "@/components/page-boilerplate";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumbs";
import { Skeleton } from "@/components/ui/skeleton";
import { contracts } from "@/contracts";
import ENSAbi from "@/contracts/abi/EtchENS.json";
import { shortenAddress } from "@/utils/hooks/address";
import { useGetEtchesFromUser } from "@/utils/hooks/useGetEtchesFromUser";
import { Metadata } from "next";
import { useRouter } from "next/router";
import { useContractRead } from "wagmi";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of the Etched app.",
};

export default function DashboardPage() {
  const router = useRouter();
  const user = router.query?.user;

  if (!user || typeof user !== "string") return <div className="flex h-screen w-screen bg-white"> 404 </div>;

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

  const { error, isLoading, etches } = useGetEtchesFromUser(user);

  const userName = ens?.[0] ? ens?.[0]?.split(".etched")[0] : user ? shortenAddress({ address: user as string }) : user;

  return (
    <PageBoilerplate>
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
        <DataTable isLoading={isLoading} data={error ? [] : etches} />
      </div>
    </PageBoilerplate>
  );
}
