import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { DashboardHeader } from "./dashboard-header";
import { SideBar } from "./sidebar";

export const PageBoilerplate = ({ children }: { children: React.ReactNode }) => {
  // maybe a bit extra, should do the trick though, right
  useVerifyAuth();

  return (
    <div className="flex h-screen w-screen bg-white">
      <SideBar />
      <div className="w-full pl-2 pr-3 pt-3">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};

export const useVerifyAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status == "unauthenticated") router.push("/authentication");
  }, []);
};
