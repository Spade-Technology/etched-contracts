import { EditTeamDialog } from "@/components/edit-team-dialog";
import { EditButton } from "@/components/ui/edit-button";
import { Organisation } from "@/gql/graphql";
import { teamUser } from "@/types";
import { shortenAddress } from "@/utils/hooks/address";
import React from "react";

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
        <div className="text-base font-bold capitalize text-muted-foreground  ">Team: {name}</div>
        <EditButton onClick={() => setOpenEditTeamModal(true)} title="Modify" className="ml-[175px]" />
      </div>
      <div className="flex gap-[53px]">
        <div className="mt-2.5">
          <div className="text-base font-bold tracking-tight text-muted-foreground  ">Members</div>
          <div className="mt-[14px] flex flex-col gap-2">
            {members.map(({ name, id }) => {
              return (
                <div className="text-sm font-medium text-muted-foreground opacity-80">
                  {name || shortenAddress({ address: id })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-2.5">
          <div className="text-base font-bold tracking-tight text-muted-foreground  ">Access</div>
          <div className="mt-[14px] flex flex-col gap-2">
            {members.map(({ role }) => {
              return <div className="text-sm font-medium text-muted-foreground opacity-80">{role}</div>;
            })}
          </div>
        </div>
      </div>
      <div className="mt-7 flex justify-between text-xs font-medium text-neutral-400">
        <div>{date}</div>
        <div>{teamId}</div>
      </div>
    </article>
  );
};
