import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { DashboardHeader } from "./dashboard-header";
import GuidedTour from "./guided-tour";
import { SideBar } from "./sidebar";
import { WorkQueue } from "./work-queue";

export const PageBoilerplate = ({ children }: { children: React.ReactNode }) => {
  // maybe a bit extra, should do the trick though, right
  useVerifyAuth();

  return (
    <div className="flex w-full bg-background !font-body">
      <SideBar />
      <div className="w-full p-3">
        <GuidedTour />
        <DashboardHeader />
        <WorkQueue />
        {children}
      </div>
    </div>
  );
};

export const useVerifyAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status == "unauthenticated") router.push("/auth");
  }, []);
};
