import { CommandMenu } from "./command";
import { CreateEtchButton } from "./create-etch-button";
import { CreateOrgDialog } from "./create-org-dialog";
import { CreateTeamDialog } from "./create-team-dialog";
import { EtchedENS } from "./ens-button";
import { TeamSelector } from "./team-selector";

export const DashboardHeader = () => {
  

  return (
    <div className="flex h-16 items-center px-6 shadow-etched-1">
      <CreateEtchButton />
      <br />
      <CommandMenu />

      {/* Etched ENS */}
      <EtchedENS />


      <div className="mx-6 h-full border-[1px]" />
      {/* Modals & More */}
      <CreateTeamDialog />
      <CreateOrgDialog />
      <TeamSelector />
    </div>
  );
};
