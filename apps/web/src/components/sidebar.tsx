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
import { useSignOut, useLoggedInAddress } from "@/utils/hooks/useSignIn";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { LogoAnimated } from "./icons/logo-long-animated";
import { Icons } from "./ui/icons";

const sideBarElementCn =
  "cursor-pointer relaive text-base flex flex-col max-lg:mx-auto items-center justify-center max-lg:px-5 px-3 max-lg:w-fit py-5 text-[#9C9C9C] duration-300 hover:bg-muted dark:text-white dark:hover:bg-slate-700";

const activeClassName =
  sideBarElementCn +
  "cursor-pointer !bg-primary-foreground !text-primary before:absolute max-lg:rounded-lg before:left-0 font-semibold before:h-24 before:w-8 before:-translate-x-1/2 before:rounded-full lg:before:bg-primary";

enum activePage {
  DASHBOARD,
  ETCH_LIBRARY,
  MARKETPLACE,
  COMMUNITY,
  SETTINGS,
}

export const SideBar = () => {
  const router = useRouter();
  const [tooltip, setTooltip] = useState("");

  const loggedInAddress = useLoggedInAddress();

  const path = router.asPath;

  const pages = [
    { url: "/dashboard", title: "Dashboard", Icon: Icons.dashboard },
    { url: "/dashboard/manage", title: "Organisation", Icon: Icons.organisation },
    { url: "/dashboard/etch-library", title: "Etch Library", Icon: Icons.etchLibrary },
    { url: "/dashboard/marketplace", title: "Marketplace", Icon: Icons.marketplace, disabled: true },
    { url: "/dashboard/community", title: "Community", Icon: Icons.community, disabled: true },
    // { url: "/dashboard/profile", title: "Profile", Icon: Icons.user },
    // { url: "/dashboard/settings", title: "Settings", Icon: Icons.settings },
  ];

  const activePageIndex = pages.findIndex(({ url }) => url === path) === -1 ? 0 : pages.findIndex(({ url }) => url === path);

  return (
    <aside id="sidebar" className="sticky left-0 top-0 h-screen w-fit transition-transform z-10 lg:w-52" aria-label="Sidebar">
      <div className="custom-scrollbar flex h-full flex-col overflow-y-auto bg-white pb-4 pt-8 dark:border-slate-700 dark:bg-slate-900 max-lg:px-3">
        <LogoAnimated className="mx-auto mb-10 max-lg:w-24" />
        <ul className="my-auto space-y-2 text-sm font-medium">
          {pages.map(({ url, title, Icon, disabled }, index) => {
            return (
              <li key={title} className="pr-1 max-xl:pr-0">
                <Link
                  onMouseOver={() => setTooltip(title)}
                  onMouseOut={() => setTooltip("")}
                  className={index === activePageIndex ? activeClassName : sideBarElementCn}
                  href={disabled ? "#" : url}
                >
                  <Icon color={url === path ? "#097B45" : "#9C9C9C"} className="h-6 w-6" />
                  <span className="mt-2 hidden whitespace-nowrap lg:block">{title}</span>

                  <div
                    className={`absolute left-20 z-10 ml-3 flex w-36 w items-center duration-300 group-hover:flex ${
                      tooltip === title ? "visible scale-100 opacity-100 lg:hidden" : "invisible scale-50 opacity-0"
                    }`}
                  >
                    <div className={`-mr-2 h-3 w-3 rotate-45 bg-primary`}></div>
                    <div className={`z-10 flex w-fit bg-primary p-2 text-white shadow-lg`}> {title}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto"></div>
      </div>
    </aside>
  );
};

function UserSettings({ children }: { children: React.ReactNode }) {
  const { signOut } = useSignOut();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="mr-7 w-56">
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
};
