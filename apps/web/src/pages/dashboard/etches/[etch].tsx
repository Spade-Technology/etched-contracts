// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { PageBoilerplate } from "@/components/page-boilerplate";
import EtchSection from "@/components/pages/etch/edit/etch-section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumbs";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetUniqueEtch } from "@/utils/hooks/useGetEtchFromUser";
import { Metadata } from "next";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of the Etched app.",
};

export default function DashboardPage() {
  const router = useRouter();
  const etchId = router.query!.etch as string;

  const { etch, isLoading, error } = useGetUniqueEtch(etchId);

  if (!etchId || typeof etchId !== "string") return <div className="flex h-screen w-screen bg-white"> 404 </div>;

  return (
    <PageBoilerplate>
      <div className="mt-6 flex flex-col px-6 pt-6 shadow-etched-1">
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
                  {isLoading ? (
                    <>
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-3 w-4" />
                    </>
                  ) : (
                    <>
                      <span className="text-sm font-semibold text-gray-800">{etch?.documentName}</span>
                      <span className="text-sm font-semibold text-gray-500">#{etchId}</span>
                    </>
                  )}
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        {error ? <span>{error.message}</span> : <EtchSection etch={etch} isLoading={isLoading} />}
      </div>
      <div className="flex flex-col items-center justify-center"></div>
    </PageBoilerplate>
  );
}
