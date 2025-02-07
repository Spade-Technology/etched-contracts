// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { PageBoilerplate } from "@/components/page-boilerplate";
import { ManageDialog } from "@/components/pages/settings";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings of the Etched app.",
};

export default function SettingsPage() {
  const loggedInAddress = useLoggedInAddress();

  return (
    <PageBoilerplate>
      <div className="mt-6 flex flex-col px-6 pt-6 shadow-etched-1">
        <ManageDialog />
      </div>
    </PageBoilerplate>
  );
}
