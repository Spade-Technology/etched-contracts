import { Icons } from "@/components/ui/icons";
import { useState } from "react";

export const SidebarDialog = ({ activeTab, setActiveTab }: { activeTab:string; setActiveTab :React.Dispatch<string>}) => {
  const tabs = [
    { Icon: Icons.userSettings, name: "Personal" },
    { Icon: Icons.dollar, name: "Billing" },
    { Icon: Icons.security, name: "Security" },
    { Icon: Icons.bar, name: "Item 4" },
  ];

  return (
    <aside className="flex flex-col gap-3">
      {tabs.map(({ Icon, name }, idx) => {
        return (
          <div
            key={idx}
            onClick={() => setActiveTab(name)}
            className={`flex w-32 cursor-pointer items-center gap-2 rounded-lg py-1.5 text-base font-medium duration-300 ${
              activeTab == name ? "bg-[#DBFFEE] px-3 text-primary " : "text-muted-foreground hover:text-foreground"
            }`}
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
