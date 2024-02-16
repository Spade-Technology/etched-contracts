import { Icons } from "@/components/ui/icons";
import { useSession } from "next-auth/react";

export const SidebarDialog = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: React.Dispatch<string> }) => {
  const { data } = useSession();

  const tabs = [
    { Icon: Icons.userSettings, name: "Personal" },
    { Icon: Icons.security, name: "Security" },
    ...(data?.isAdmin ? [{ Icon: Icons.pnpm, name: "Admin Panel", admin: true }] : []),
    { Icon: Icons.dollar, name: "Billing (Soon)", disabled: true },
  ];

  return (
    <aside className="flex flex-col gap-3">
      {tabs.map(({ Icon, name, disabled }, idx) => {
        return (
          <div
            key={idx}
            onClick={!disabled ? () => setActiveTab(name) : undefined}
            className={`flex w-32 items-center gap-2 rounded-lg py-1.5 text-base font-medium duration-300 ${
              activeTab == name ? "bg-background px-2 text-primary " : "text-muted-foreground hover:text-foreground"
            } ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
          >
            <Icon className="h-5 w-5" color={activeTab == name ? "#097B45" : "#9C9C9C"} />
            {name}
          </div>
        );
      })}
      <div className=""></div>
    </aside>
  );
};
