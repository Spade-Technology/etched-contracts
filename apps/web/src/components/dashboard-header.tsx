import { CommandMenu } from "./command";
import { CreateEtchButton } from "./create-etch-button";
import { CreateOrgDialog } from "./create-org-dialog";
import { CreateTeamDialog } from "./create-team-dialog";
import { EtchedENS } from "./ens-button";
import { TeamSelector } from "./team-selector";

export const DashboardHeader = () => {
  return (
    <div className="sticky top-0 flex h-16 w-full items-center justify-between bg-white px-6 shadow">
      <CreateEtchButton />
      <CommandMenu />

      <div className="flex h-full w-fit items-center gap-3">
        {/* Etched ENS */}
        <EtchedENS />
        <div className="h-full border-[1px]" />
        <TeamSelector horizontal={true} className="w-fit py-2" />
      </div>

      {/* Modals & More */}
      <CreateTeamDialog />
      <CreateOrgDialog />
    </div>
  );
};
