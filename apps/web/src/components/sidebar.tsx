import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { shortenAddress } from "@/utils/hooks/address";
import { signOut, useLoggedInAddress } from "@/utils/hooks/useSignIn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Icons } from "./ui/icons";
import { LogoAnimated } from "./icons/logo-long-animated";
import Link from "next/link";
import { useState } from "react";

const sideBarElementCn =
  "cursor-pointer flex flex-col max-lg:mx-auto items-center justify-center rounded-lg max-lg:px-5 px-3 max-lg:w-fit py-5 text-[#9C9C9C] hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700";

const activeClassName =
  sideBarElementCn +
  "cursor-pointer !bg-primary-foreground  !text-primary before:absolute before:left-0 before:h-20 before:w-8 before:-translate-x-1/2 before:rounded-full lg:before:bg-primary";

enum activePage {
  DASHBOARD,
  ETCH_LIBRARY,
  MARKETPLACE,
  COMMUNITY,
  SETTINGS,
}

export const SideBar = () => {
  const { data } = useSession();
  const router = useRouter();
  const [tooltip, setTooltip] = useState("");

  const loggedInAddress = useLoggedInAddress();

  const path = router.asPath;

  const pages = [
    { url: "/dashboard", title: "Dashboard", Icon: Icons.dashboard },
    { url: "/etch-library", title: "Etch Library", Icon: Icons.etchLibrary },
    { url: "/dashboard", title: "Marketplace", Icon: Icons.marketplace },
    { url: "/dashboard", title: "Community", Icon: Icons.community },
    { url: "/settings", title: "Settings", Icon: Icons.settings },
  ];

  return (
    <aside
      id="sidebar"
      className="sticky left-0 top-0 z-40 h-screen w-fit px-3 transition-transform lg:w-52"
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col overflow-y-auto pb-4 pt-8 dark:border-slate-700 dark:bg-slate-900">
        <LogoAnimated className="mx-auto mb-10 max-lg:w-[92px]" />

        <ul className="my-auto space-y-2 text-sm font-medium">
          {pages.map(({ url, title, Icon }) => {
            return (
              <li key={title}>
                <Link
                  onMouseOver={() => setTooltip(title)}
                  onMouseOut={() => setTooltip("")}
                  className={url === path ? activeClassName : sideBarElementCn}
                  href={url}
                >
                  <Icon color={url === path ? "#097B45" : "#9C9C9C"} className="h-6 w-6" />
                  <span className="mt-2 hidden whitespace-nowrap lg:block">{title}</span>

                  <div
                    className={`absolute left-20 z-50 ml-3 flex w-[100px] items-center duration-300 group-hover:flex ${
                      tooltip === title ? "visible scale-100 opacity-100 lg:hidden" : "invisible scale-50 opacity-0"
                    }`}
                  >
                    <div className={`-mr-2 h-3 w-3 rotate-45 bg-primary`}></div>
                    <div className={`shado s z-10 flex w-fit bg-primary p-2 text-white shadow-lg`}> {title}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto">
          <UserSettings>
            <div className="max-lg flex w-full cursor-pointer justify-center rounded-lg py-2 hover:bg-slate-100 lg:justify-between lg:px-3">
              <span className="my-auto text-sm font-medium text-black dark:text-white max-lg:hidden">
                {loggedInAddress ? shortenAddress({ address: loggedInAddress ?? "" }) : "Loading..."}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                aria-roledescription="more menu"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className=" h-12 w-12 rounded-lg py-2 text-black lg:px-3"
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
    </aside>
  );
};

function UserSettings({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="ml-3 w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          Log out
          <DropdownMenuShortcut>⇧⌘O</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
