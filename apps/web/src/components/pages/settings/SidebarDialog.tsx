import { Icons } from "@/components/ui/icons";
import { useState } from "react";

export const SidebarDialog = () => {
  const [activeTab, setActiveTab] = useState<string>("Manage");

  const tabs = [
    { Icon: Icons.info, name: "Manage" },
    { Icon: Icons.dollar, name: "Billing" },
    { Icon: Icons.security, name: "Security" },
    { Icon: Icons.bar, name: "Item 4" },
    { Icon: Icons.bar, name: "Item 5" },
    { Icon: Icons.bar, name: "Item 6" },
  ];

  return (
    <aside className="flex flex-col gap-[6px]">
      {tabs.map(({ Icon, name }, idx) => {
        return (
          <div
            key={idx}
            onClick={() => setActiveTab(name)}
            className={`flex w-[118px] cursor-pointer items-center gap-3 rounded-[8px] py-3 text-base font-medium text-muted-foreground duration-300 ${
              activeTab == name ? "bg-primary px-3 text-white" : "hover:text-foreground"
            }`}
          >
            <Icon className="h-5" color={activeTab == name ? "#fff" : "#9C9C9C"} />
            {name}
          </div>
        );
      })}
      <div className=""></div>
    </aside>
  );
};
