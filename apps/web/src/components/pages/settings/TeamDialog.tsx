import React from "react";
import { EditButton } from "@/components/ui/edit-button";
import { EditTeamDialog } from "@/components/edit-team-dialog";
import { Organisation } from "@/gql/graphql";
import { teamUser } from "@/types";
import { shortenAddress } from "@/utils/common";

export const TeamDialog = ({
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
            {members.map(({ name, id }) => {
              return <div className=" text-sm font-medium text-neutral-500">{name || shortenAddress(id)}</div>;
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
