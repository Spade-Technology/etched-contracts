import { CreateOrgDialog } from "@/components/create-org-dialog";
import { CreateTeamDialog } from "@/components/create-team-dialog";
import { Icons } from "@/components/ui/icons";
import React, { useState } from "react";

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
      {tabs.map(({ Icon, name }) => {
        return (
          <div
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

export const ManageDialog = () => {
  const [openOrgModal, setOpenOrgModal] = useState<boolean>(false);
  const [openTeamModal, setOpenTeamModal] = useState<boolean>(false);

  const buttons = [{ name: "+ Create Organization" }, { name: "+ Create Team" }];

  const orgs = [
    { id: "ID:987", title: "Firehawks", date: "Created on 12th Oct. 2023, 12:30:14 UTC" },
    { id: "ID:987", title: "Firehawks", date: "Created on 12th Oct. 2023, 12:30:14 UTC" },
  ];

  const props = { openOrgModal, setOpenOrgModal, openTeamModal, setOpenTeamModal };

  return (
    <article className="ml-[25px] flex min-h-screen w-full flex-col gap-7 border-l-[1px] border-[#E0E0E0] pl-[60px]">
      {/* Modals & More */}
      <CreateTeamDialog {...props} />
      <CreateOrgDialog {...props} />

      <header className="flex gap-5">
        {buttons.map(({ name }, idx) => {
          return (
            <div
              key={idx}
              onClick={() => (idx == 0 ? setOpenOrgModal(true) : setOpenTeamModal(true))}
              className={`flex h-fit cursor-pointer items-center gap-3 border-[1px] border-primary px-5 py-[11px] text-base font-semibold text-primary shadow-[0px_4px_13px_0px_rgba(0,0,0,0.25)] duration-300 hover:bg-primary hover:text-white `}
            >
              {name}
            </div>
          );
        })}
      </header>

      {orgs.map(({ id, title, date }, idx) => {
        const props = { id, title, date };
        return <OrgDialog key={idx} {...props} />;
      })}
    </article>
  );
};

export const OrgDialog = ({ id, title, date }: { id: string; title: string; date: string }) => {
  return (
    <article className="h-[105px] w-full px-10 shadow-[0px_7.11111px_35.55556px_5.33333px_rgba(0,0,0,0.10)]">
      <div className="flex h-full items-center">
        <div className="mr-4 text-xl font-bold text-foreground">{title}</div>
        <div className="mr-[27px] text-sm font-medium text-muted-foreground">{id}</div>
        <div className="max text-sm font-medium text-muted-foreground max-lg:hidden">{date}</div>

        <div className="ml-auto flex cursor-pointer items-center gap-2 rounded-full border-[1px] border-primary px-2 py-1 text-base font-medium text-primary duration-300 ">
          <Icons.edit className="h-[14px]" color={"#097B45"} />
          Modify organization
        </div>

        <Icons.dropdown className="mb-2.5 ml-[37px] w-6 cursor-pointer" />
      </div>
    </article>
  );
};
