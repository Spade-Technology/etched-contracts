import { PageBoilerplate } from "@/components/page-boilerplate";
import EtchSection from "@/components/pages/etch/edit/etch-section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumbs";
import { Skeleton } from "@/components/ui/skeleton";
import { contracts } from "@/contracts";
import { Etch } from "@/gql/graphql";
// import { useGetUniqueEtch } from "@/utils/hooks/useGetUniqueEtch";
import { useGetUniqueEtchWithDetails } from "@/utils/hooks/useGetUniqueEtchWithDetails";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useLoggedInAddress } from "@/utils/hooks/useSignIn";

import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Etch Viewer",
  description: "Etch Viewer",
};

export default function EtchPage() {
  const router = useRouter();
  const etchId = !!globalThis.window && (window?.location?.pathname?.split("/").pop() as string);

  // using window location because the query cannot be upheld, and the useRouter takes a few renders to initialize
  // const { etch, isLoading, error } = useGetUniqueEtch(etchId);
  const { etch, etchCreated, isLoading, error } = useGetUniqueEtchWithDetails(etchId);
  const owner = useLoggedInAddress();

  useEffect(() => {
    console.log("********* ETCH CHANGED *********");
    console.log(etch);
    console.log(etchCreated);

    return () => {};
  }, [etch, etchCreated]);

  if (!(router.query!.etch as string) || typeof (router.query!.etch as string) !== "string")
    return <div className="flex h-screen w-screen bg-background"> todo: add skeleton </div>;

  return (
    <PageBoilerplate>
      <div className="mt-6 flex flex-col px-6 pt-6 shadow-etched-1">
        <div className="flex-col gap-2 text-xl font-bold text-opacity-75">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xl font-bold text-opacity-75" href="/dashboard">
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xl font-bold text-opacity-75" href="/dashboard/">
                Etches
              </BreadcrumbLink>
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
                    <div className="text-xl font-bold text-opacity-75">
                      <span>{etch?.documentName}</span>
                    </div>
                  )}
                </div>
              </BreadcrumbLink>

              {!isLoading && (
                <div className="mx-3 flex items-center gap-3">
                  <div className="h-3 w-[1px] bg-muted"></div>

                  <span>#{etchId}</span>

                  <Link
                    // href={`https://polygonscan.com/address/${contracts.Etch}#readContract#F16`}
                    href={`https://polygonscan.com/tx/${etchCreated?.transactionHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/icons/etherscan.svg" alt="etherscan" width={16} height={16} />
                  </Link>

                  <Link
                    href={`https://opensea.io/assets/matic/${contracts.Etch}/${etchId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/icons/opensea.svg" alt="opensea" width={16} height={16} />
                  </Link>
                </div>
              )}
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        {error ? <span>{error.message}</span> : <EtchSection etch={etch as Etch} isLoading={isLoading} />}
      </div>
      <div className="flex flex-col items-center justify-center"></div>
    </PageBoilerplate>
  );
}
