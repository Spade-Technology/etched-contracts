// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { DataTable } from "@/components/etches-dashboard-table";
import { PageBoilerplate } from "@/components/page-boilerplate";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumbs";
import { Skeleton } from "@/components/ui/skeleton";
import { Wallet } from "@/gql/graphql";
import { formatUserFromWallet, shortenAddress } from "@/utils/hooks/address";
import { useGetEtchesFromTeam } from "@/utils/hooks/useGetEtchesFromTeam";
import { Metadata } from "next";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of the Etched app.",
};

export default function DashboardPage() {
  const router = useRouter();
  const teamId = router.query?.team;

  if (!teamId || typeof teamId !== "string") return <div className="flex h-screen w-screen bg-white"> 404 </div>;

  const { error, isLoading, team, etches } = useGetEtchesFromTeam(teamId);

  const teamMembers = team?.permissions?.map((permission: any) => permission.wallet);

  const organisation =
    team?.ownership?.organisation &&
    (team?.ownership?.organisation?.name
      ? team?.ownership?.organisation?.name
      : "Organisation " + team?.ownership?.organisation?.orgId);

  return (
    <PageBoilerplate>
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
            <div className="flex gap-2">
              Owner:{" "}
              {formatUserFromWallet({
                user: team?.ownership?.owner as Partial<Wallet>,
                isLoading: isLoading,
                override: organisation,
              }) ?? <Skeleton className="my-auto h-4 w-16" />}
            </div>
            <div className="flex gap-2">
              Total Members: {isLoading ? <Skeleton className="my-auto h-4 w-4" /> : Number(teamMembers?.length) + 1}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <DataTable isLoading={isLoading} data={error ? [] : etches} />
      </div>
    </PageBoilerplate>
  );
}
