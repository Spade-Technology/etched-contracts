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
import { useGetEtchesFromTeam } from "@/utils/hooks/useGetEtchesFromTeam";
import { Label } from "@radix-ui/react-label";
import { type } from "os";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of the Etched app.",
};

export default function DashboardPage() {
  const router = useRouter();
  const teamId = router.query?.team;

  if (!teamId || typeof teamId !== "string") return <div className="flex h-screen w-screen bg-white"> 404 </div>;

  const { $state, isLoading, team, etchToDisplay } = useGetEtchesFromTeam(teamId);

  const _teamMembers = team
    ?.permissions({
      first: 100,
      where: {
        permissionLevel_gt: 0,
      },
    })
    ?.map((memberPermission) => memberPermission.wallet);

  const teamMembers = _teamMembers?.filter((el) => el.__typename !== undefined) ?? [];

  const organisation = team?.ownership?.organisation?.orgId ? "Organisation " + team?.ownership?.organisation?.orgId : undefined;
  const ownerENS = team?.ownership?.owner?.etchENS({ first: 1 })[0]?.name ?? undefined;
  const ownerAddress = team?.ownership?.owner?.id && shortenAddress({ address: team?.ownership?.owner?.id });
  const ownerFormatted = isLoading ? undefined : organisation ?? ownerENS ?? ownerAddress ?? undefined;

  return (
    <div className="flex h-screen w-screen bg-white">
      <SideBar />
      <div className="w-full pl-2 pr-3 pt-3">
        <DashboardHeader />
        <div className="mt-6 flex h-32 items-center px-6 shadow-etched-1">
          <div className="flex-col gap-2">
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard/teams">Team</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href={"/dashboard/teams/" + teamId}>
                  <div className="flex gap-1">team {teamId ?? <Skeleton className="my-auto h-4 w-5" />}</div>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="flex-col gap-2">
              <div className="flex gap-1">team {teamId ? teamId : <Skeleton className="my-auto h-4 w-5" />}</div>
              <div className="flex gap-2">Owner: {ownerFormatted ?? <Skeleton className="my-auto h-4 w-16" />}</div>
              <div className="flex gap-2">
                Total Members:{" "}
                {teamMembers.length !== _teamMembers?.length ? (
                  <Skeleton className="my-auto h-4 w-4" />
                ) : (
                  Number(teamMembers?.length) + 1
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <DataTableDemo isLoading={isLoading} data={isLoading || $state.error ? [] : etchToDisplay} />
        </div>
      </div>
    </div>
  );
}
