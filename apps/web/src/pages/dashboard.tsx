// import { DocsSidebarNav } from "@/components/dashboard-side-bar";
import { SideBar } from "@/components/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of the Etched app.",
};

export default function DashboardPage() {
  return (
    <div className="h-screen w-screen bg-slate-900">
      <SideBar />
    </div>
  );
}
