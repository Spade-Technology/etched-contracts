import { CreateEtchButton } from "./create-etch-button";
import { EtchedENS } from "./ens-button";

export const DashboardHeader = () => {
  return (
    <div className="flex h-16 items-center px-6 shadow-etched-1">
      <CreateEtchButton />

      <div className="flex-grow" />

      {/* Etched ENS */}
      <EtchedENS />
    </div>
  );
};
