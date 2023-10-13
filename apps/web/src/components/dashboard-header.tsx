import { CommandMenu } from "./command";
import { CreateEtchButton } from "./create-etch-button";
import { CreateOrgDialog } from "./create-org-dialog";
import { CreateTeamDialog } from "./create-team-dialog";
import { EtchedENS } from "./ens-button";
import { TeamSelector } from "./team-selector";

export const DashboardHeader = () => {
  const modifyTeamData = {
    ok: "m",
    teamOrganisation: "None",
    teamName: "spade tech",
    teamMembers: [
      {
        id: "0",
        name: "ex: tom12.etched",
        role: "read & write",
      },
      {
        id: "2",
        name: "Sophia5678.etched",
        role: "read only",
      },
      {
        id: "3",
        name: "Olivia3456.etched",
        role: "read & write",
      },
    ],
  };
  return (
    <div className="flex h-16 items-center px-6 shadow-etched-1">
      <CreateEtchButton />
      <br />
      <CommandMenu />

      {/* Etched ENS */}
      <EtchedENS />
      <CreateTeamDialog modifyTeamData={modifyTeamData} />

      <div className="mx-6 h-full border-[1px]" />

      <TeamSelector />

      {/* Modals & More */}
      <CreateTeamDialog />
      <CreateOrgDialog />
    </div>
  );
};
