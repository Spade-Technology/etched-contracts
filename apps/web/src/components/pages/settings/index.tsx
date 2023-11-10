import { CreateOrgDialog } from "@/components/create-org-dialog";
import { CreateTeamDialog } from "@/components/create-team-dialog";
import { EditButton } from "@/components/ui/edit-button";
import { Icons } from "@/components/ui/icons";
import React, { useEffect, useRef, useState } from "react";
import { EditOrgDialog } from "@/components/edit-org-dialog";
import { EditTeamDialog } from "@/components/edit-team-dialog";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";
import { Organisation } from "@/gql/graphql";

import { useGetTeamsFromUser } from "@/utils/hooks/useGetTeamsFromUser";
import { useGetMembersFromOrg } from "@/utils/hooks/useGetMembersFromOrg";
import { teamUser } from "@/types";
import { useGetOrgsFromUser } from "@/utils/hooks/useGetOrgsFromUser";

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

export const ManageDialog = () => {
  const [openOrgModal, setOpenOrgModal] = useState(false);
  const [openTeamModal, setOpenTeamModal] = useState(false);
  const [accordion, setAccordion] = useState("");
  const loggedInAddress = useLoggedInAddress();
  const { organisations, isLoading } = useGetOrgsFromUser(loggedInAddress.toLowerCase());

  const { teams } = useGetTeamsFromUser(loggedInAddress.toLowerCase());

  const buttons = [{ name: "+ Create Organization" }, { name: "+ Create Team" }];

  console.log(organisations);

  return (
    <article className="ml-[25px] flex min-h-screen w-full flex-col gap-7 border-l-[1px] border-[#E0E0E0] pl-5 lg:pl-[60px]">
      {/*------------- Modals & More -------------*/}
      <CreateTeamDialog openTeamModal={openTeamModal} setOpenTeamModal={setOpenTeamModal} />
      <CreateOrgDialog openOrgModal={openOrgModal} setOpenOrgModal={setOpenOrgModal} />
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

      {isLoading ?
          [1, 2, 3].map((item, idx) => (
            <div key={idx} className="flex h-[105px] w-full items-center  gap-5 bg-white px-10 shadow">
              <div className="skeleton h-6 w-2/12 rounded-md bg-skeleton "></div>
              <div className="skeleton h-6 w-4/12 rounded-md bg-skeleton"></div>
              <div className="skeleton ml-auto h-6 w-4/12 rounded-md bg-skeleton"></div>
            </div>
          ))
        : organisations?.map(({ id, orgId, name, createdAt }) => {
            const prop = {
              id,
              orgId,
              name,
              date: new Date(+createdAt * 1000).toDateString(),
              teams: teams?.filter(({ ownership }) => ownership?.organisation?.name === name),
              accordion,
              setAccordion,
              organisations,
            };
            return <OrgDialog {...prop} />;
          })}
      <Teams
        name={"MySelf"}
        accordion={accordion}
        setAccordion={setAccordion}
        teams={teams?.filter(({ ownership }) => !ownership?.organisation)}
        organisations={organisations}
      />
    </article>
  );
};

const OrgDialog = ({
  id,
  name,
  orgId,
  date,
  teams,
  accordion,
  setAccordion,
  organisations,
}: {
  id: string;
  orgId: string;
  name?: string | null | undefined;
  date: string;
  teams: any[];
  accordion: string;
  setAccordion: any;
  organisations: {
    orgId: any;
    id: string;
    name?: string | null | undefined;
  }[];
}) => {
  const [height, setHeight] = useState(0);
  const [openEditOrgModal, setOpenEditOrgModal] = useState(false);
  const [openEditTeamModal, setOpenEditTeamModal] = useState(false);
  const ref = useRef<HTMLInputElement | any>(null);
  const { members, isLoading } = useGetMembersFromOrg(id);

  const openAccordion = () => {
    if (accordion !== name) {
      setAccordion(name);
    } else {
      setAccordion("");
    }
  };

  // THIS USEFFECT IS USED TO GET DIV HEIGHT
  useEffect(() => {
    if (accordion === name) {
      setHeight(ref.current?.scrollHeight);
    } else {
      setHeight(0);
    }
    window.addEventListener("resize", () => {
      if (accordion === name) {
        setHeight(ref.current?.scrollHeight);
      } else {
        setHeight(0);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        setHeight(0);
      });
    };
  }, [accordion]);

  if (isLoading) {
    return (
      <article
        key={name}
        className={`h-fit w-full bg-white px-10 shadow-[0px_7.11111px_35.55556px_5.33333px_rgba(0,0,0,0.10)] ${
          accordion === name ? " pb-10" : ""
        }`}
      >
        Loading...
      </article>
    );
  }
  return (
    <article
      key={name}
      className={`h-fit w-full bg-white px-10 shadow-[0px_7.11111px_35.55556px_5.33333px_rgba(0,0,0,0.10)] ${
        accordion === name ? " pb-10" : ""
      }`}
    >
      {/*------------- Modals & More -------------*/}
      <EditOrgDialog
        openEditOrgModal={openEditOrgModal}
        setOpenEditOrgModal={setOpenEditOrgModal}
        id={id}
        name={name || ""}
        orgId={orgId}
        members={members}
      />

      <header onClick={openAccordion} className="flex h-[105px] cursor-pointer items-center">
        <div className="mr-4 text-xl font-bold capitalize text-foreground">{name}</div>
        <div className="mr-[27px] text-sm font-medium text-muted-foreground">{orgId}</div>
        <div className="max text-sm font-medium text-muted-foreground max-lg:hidden">{date}</div>
        <EditButton onClick={() => setOpenEditOrgModal(true)} title=" Modify organization" />

        <Icons.dropdown className={`${accordion === name ? "rotate-180" : "rotate-0"} mb-2.5 ml-[37px] w-6 duration-300`} />
      </header>
      <main ref={ref} style={{ height: `${height}px` }} className="overflow-hidden bg-white duration-300">
        <section className="flex gap-[53px]">
          <div>
            <div className=" text-base font-bold tracking-tight text-neutral-700">Members</div>
            <div className="mt-4 flex flex-col gap-2">
              {members.map(({ name }) => {
                return <div className=" text-sm font-medium lowercase text-neutral-500">{name}</div>;
              })}
            </div>
          </div>
          <div>
            <div className="text-base font-bold tracking-tight text-neutral-700">Access</div>
            <div className="mt-4 flex flex-col gap-2">
              {members.map(({ role }) => {
                return <div className=" text-sm font-medium lowercase text-neutral-500">{role}</div>;
              })}
            </div>
          </div>
        </section>

        <section className="mt-10 flex flex-col gap-5">
          {teams?.map(
            ({
              id,
              teamId,
              name,
              ownership,
              members,
              createdAt,
            }: {
              id: string;
              name: string;
              teamId: string;
              createdAt: string;
              ownership: Partial<Organisation>;
              members: teamUser[];
            }) => {
              const props = {
                id,
                teamId,
                name,
                members,
                date: new Date(+createdAt * 1000).toDateString(),
                setOpenEditTeamModal,
                openEditTeamModal,
                organisations,
                ownership,
              };
              return <TeamDialog {...props} />;
            }
          )}
        </section>
      </main>
    </article>
  );
};

const Teams = ({
  name,
  teams,
  accordion,
  setAccordion,
  organisations,
}: {
  name: string;
  teams: any[];
  accordion: string;
  setAccordion: any;
  organisations: {
    orgId: any;
    id: string;
    name?: string | null | undefined;
  }[];
}) => {
  const [height, setHeight] = useState(0);
  const [openEditTeamModal, setOpenEditTeamModal] = useState(false);
  const ref = useRef<HTMLInputElement | any>(null);

  const openAccordion = () => {
    if (accordion !== name) {
      setAccordion(name);
    } else {
      setAccordion("");
    }
  };

  // THIS USEFFECT IS USED TO GET DIV HEIGHT
  useEffect(() => {
    if (accordion === name) {
      setHeight(ref.current?.scrollHeight);
    } else {
      setHeight(0);
    }
    window.addEventListener("resize", () => {
      if (accordion === name) {
        setHeight(ref.current?.scrollHeight);
      } else {
        setHeight(0);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        setHeight(0);
      });
    };
  }, [accordion]);

  if (teams.length)
    return (
      <article
        key={name}
        className={`h-fit w-full bg-white px-10 shadow-[0px_7.11111px_35.55556px_5.33333px_rgba(0,0,0,0.10)] ${
          accordion === name ? " pb-10" : ""
        }`}
      >
        <header onClick={openAccordion} className="flex h-[105px] cursor-pointer items-center justify-between">
          <div className="mr-4 text-xl font-bold capitalize text-foreground">{name}</div>
          <Icons.dropdown className={`${accordion === name ? "rotate-180" : "rotate-0"} mb-2.5 ml-[37px] w-6 duration-300`} />
        </header>
        <main ref={ref} style={{ height: `${height}px` }} className="overflow-hidden bg-white duration-300">
          <section className="mt-10 flex flex-col gap-5">
            {teams?.map(
              ({
                id,
                teamId,
                name,
                ownership,
                members,
                createdAt,
              }: {
                id: string;
                name: string;
                teamId: string;
                createdAt: string;
                ownership: Partial<Organisation>;
                members: teamUser[];
              }) => {
                const props = {
                  id,
                  teamId,
                  name,
                  members,
                  date: new Date(+createdAt * 1000).toDateString(),
                  setOpenEditTeamModal,
                  openEditTeamModal,
                  organisations,
                  ownership,
                };
                return <TeamDialog {...props} />;
              }
            )}
          </section>
        </main>
      </article>
    );
};

const TeamDialog = ({
  id,
  teamId,
  name,
  members,
  date,
  ownership,
  openEditTeamModal,
  setOpenEditTeamModal,
  organisations,
}: {
  id: string;
  teamId: string;
  name: string;
  members: teamUser[];
  date: string;
  ownership: any;
  openEditTeamModal: boolean;
  setOpenEditTeamModal: React.Dispatch<boolean>;
  organisations: Partial<Organisation | any>;
}) => {
  const props = {
    id,
    teamId,
    name,
    members,
    date,
    openEditTeamModal,
    setOpenEditTeamModal,
    organisations,
    ownership,
  };

  return (
    <article className="w-fit rounded-2xl bg-accent p-4">
      {/*------------- Modals & More -------------*/}
      <EditTeamDialog {...props} />

      <div className="flex justify-between">
        <div className="text-base font-bold capitalize text-neutral-700">Team: {name}</div>
        <EditButton onClick={() => setOpenEditTeamModal(true)} title=" Modify" className="ml-[175px]" />
      </div>
      <section className="flex gap-[53px]">
        <div className="mt-2.5">
          <div className=" text-base font-bold tracking-tight text-neutral-700">Members</div>
          <div className="mt-[14px] flex flex-col gap-2">
            {members.map(({ name }) => {
              return <div className=" text-sm font-medium text-neutral-500">{name}</div>;
            })}
          </div>
        </div>
        <div className="mt-2.5">
          <div className=" text-base font-bold tracking-tight text-neutral-700">Access</div>
          <div className="mt-[14px] flex flex-col gap-2">
            {members.map(({ role }) => {
              return <div className=" text-sm font-medium text-neutral-500">{role}</div>;
            })}
          </div>
        </div>
      </section>
      <div className="mt-7 flex justify-between text-xs font-medium text-neutral-400">
        <div>{date}</div>
        <div>{teamId}</div>
      </div>
    </article>
  );
};
