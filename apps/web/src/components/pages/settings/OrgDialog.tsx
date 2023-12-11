import { EditOrgDialog } from "@/components/edit-org-dialog";
import { EditButton } from "@/components/ui/edit-button";
import { Icons } from "@/components/ui/icons";
import { Organisation } from "@/gql/graphql";
import { teamUser } from "@/types";
import { useGetMembersFromOrg } from "@/utils/hooks/useGetMembersFromOrg";
import { useEffect, useRef, useState } from "react";

import { shortenAddress } from "@/utils/hooks/address";
import { TeamDialog } from "./TeamDialog";

export const OrgDialog = ({
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
              {members.map(({ name, id }) => {
                return (
                  <div className=" text-sm font-medium lowercase text-neutral-500">{name || shortenAddress({ address: id })}</div>
                );
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
