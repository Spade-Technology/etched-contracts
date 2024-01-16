import { usePathname, useRouter } from "next/navigation";
import { CommandMenu } from "./command";
import { CreateEtchButton } from "./create-etch-button";
import { CreateOrgDialog } from "./create-org-dialog";
import { CreateTeamDialog } from "./create-team-dialog";
import { EtchedENS } from "./ens-button";
import { TeamSelector } from "./team-selector";
import { Icons } from "./ui/icons";
import { UserSettings } from "./sidebar";

export const DashboardHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  const icons = [
    { Icon: Icons.userCircle, url: "/dashboard/profile" },
    { Icon: Icons.bell, url: "/dashboard/manage" },
  ];

  return (
    <div className="sticky top-0 z-10 flex h-16 w-full items-center bg-white pl-6 shadow-4xl">
      <CreateEtchButton />
      <CommandMenu />

      <div className="mx-6 flex h-full w-fit items-center gap-6 border-l border-[#F5F6FA] pl-6">
        {/* Etched ENS */}
        <EtchedENS />
        <TeamSelector horizontal={true} className="w-fit py-2" />
      </div>

      {/* Modals & More */}
      <CreateTeamDialog />
      <CreateOrgDialog />

      <div className="flex h-full">
        <div className="h-full border-[1px] border-[#F5F6FA]" />
        {icons.map(({ Icon, url }, idx) => (
          <div className="flex">
            <div
              key={idx}
              onClick={() => router.push(url)}
              className="relative flex h-full w-16 cursor-pointer items-center justify-center"
            >
              <Icon color={pathname == url ? "#097B45" : ""} />
              <div
                className={`absolute bottom-0 left-0 h-1.5 w-16 rounded-tl-full rounded-tr-full bg-green-700 duration-500 ${
                  pathname == url ? "visible" : "invisible"
                }`}
              />
            </div>
            {idx < 1 && <div className="h-full border border-[#F5F6FA]" />}
          </div>
        ))}
        <div className="h-full border border-[#F5F6FA]" />
        <UserSettings>
          <div className="relative flex h-full w-16 cursor-pointer items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              aria-roledescription="more menu"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className=" h-12 w-12 rounded-lg py-2 text-[#9C9C9C] lg:px-3"
              strokeLinecap="round"
              strokeLinejoin="round"
              // className="lucide lucide-more-horizontal"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </div>
        </UserSettings>
      </div>
    </div>
  );
};
