import { PageBoilerplate } from "@/components/page-boilerplate";
import EtchSection from "@/components/pages/etch/edit/etch-section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumbs";
import { Skeleton } from "@/components/ui/skeleton";
import { Etch } from "@/gql/graphql";
import { useGetUniqueEtch } from "@/utils/hooks/useGetUniqueEtch";
import { Metadata } from "next";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of the Etched app.",
};

export default function DashboardPage() {
  const router = useRouter();
  const etchId = !!globalThis.window && (window?.location?.pathname?.split("/").pop() as string);

  // using window location because the query cannot be upheld, and the useRouter takes a few renders to initialize
  const { etch, isLoading, error } = useGetUniqueEtch(etchId);

  if (!(router.query!.etch as string) || typeof (router.query!.etch as string) !== "string")
    return <div className="flex h-screen w-screen bg-white"> todo: add skeleton </div>;

  return (
    <PageBoilerplate>
      <div className="mt-6 flex flex-col px-6 pt-6 shadow-etched-1">
        <div className="flex-col gap-2 text-xl font-bold text-neutral-700">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-neutral-700 text-xl font-bold" href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-neutral-700 text-xl font-bold" href="/dashboard/">Etches</BreadcrumbLink>
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
                    <div className="text-neutral-700 text-xl font-bold">
                      <span className="">{etch?.documentName}</span>
                      <span className="">#{etchId}</span>
                    </div>
                  )}
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        {error ? <span>{error.message}</span> : <EtchSection etch={etch as Etch} isLoading={isLoading} />}
      </div>
      <div className="flex flex-col items-center justify-center"></div>
    </PageBoilerplate>
  );
}
