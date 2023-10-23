import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { DashboardHeader } from "./dashboard-header";
import { SideBar } from "./sidebar";

export const PageBoilerplate = ({ children }: { children: React.ReactNode }) => {
  // maybe a bit extra, should do the trick though, right
  useVerifyAuth();

  return (
    <div className="flex w-full bg-white !font-body">
      <SideBar />
      <div className="w-full p-3">
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
