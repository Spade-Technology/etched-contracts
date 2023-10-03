import { CommandMenu } from "./command";
import { CreateEtchButton } from "./create-etch-button";
import { EtchedENS } from "./ens-button";
import { TeamSelector } from "./team-selector";

export const DashboardHeader = () => {
  return (
    <div className="flex h-16 items-center px-6 shadow-etched-1">
      <CreateEtchButton />

      <div className="w-full flex-grow" />

      <CommandMenu />

      <div className="w-full flex-grow" />

      {/* Etched ENS */}
      <EtchedENS />

      <div className="mx-6 h-full border-[1px]" />

      <TeamSelector />
    </div>
  );
};
