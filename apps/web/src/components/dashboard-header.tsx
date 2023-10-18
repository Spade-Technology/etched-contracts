import { CommandMenu } from "./command";
import { CreateEtchButton } from "./create-etch-button";
import { CreateOrgDialog } from "./create-org-dialog";
import { CreateTeamDialog } from "./create-team-dialog";
import { EditOrgDialog } from "./edit-org-dialog";
import { EditTeamDialog } from "./edit-team-dialog";
import { EtchedENS } from "./ens-button";
import { TeamSelector } from "./team-selector";

export const DashboardHeader = () => {
  const modifyTeamData = {
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

  const modifyOrgData = {
    orgName: "SpaceX",
    teamName: "spade tech",
    orgMembers: [
      {
        id: "0",
        name: "ex: tom12.etched",
        role: "admin",
      },
      {
        id: "2",
        name: "Sophia5678.etched",
        role: "member",
      },
      {
        id: "3",
        name: "Olivia3456.etched",
        role: "admin",
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
      <EditTeamDialog modifyTeamData={modifyTeamData} />
      <EditOrgDialog modifyOrgData={modifyOrgData} />

      <div className="mx-6 h-full border-[1px]" />
      {/* Modals & More */}
      <CreateTeamDialog />
      <CreateOrgDialog />
      <TeamSelector />
    </div>
  );
};
