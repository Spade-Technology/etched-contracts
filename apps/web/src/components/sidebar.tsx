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

const sideBarElementCn =
  "cursor-pointer flex flex-col items-center justify-center rounded-lg px-3 py-5 text-[#9C9C9C] hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700";

const activeClassName =
  sideBarElementCn +
  "cursor-pointer !bg-primary-foreground !text-primary before:absolute before:left-0 before:h-20 before:w-8 before:-translate-x-1/2 before:rounded-full before:bg-primary";

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

  const loggedInAddress = useLoggedInAddress();

  const path = router.asPath;
  const active = path.startsWith("/dashboard")
    ? path.includes("/settings")
      ? activePage.SETTINGS
      : path.includes("/etchLibrary")
      ? activePage.ETCH_LIBRARY
      : path.includes("/marketplace")
      ? activePage.MARKETPLACE
      : path.includes("community")
      ? activePage.COMMUNITY
      : activePage.DASHBOARD
    : activePage.DASHBOARD;

  return (
    <aside id="sidebar" className="left-0 top-0 z-40 h-screen w-52 transition-transform" aria-label="Sidebar">
      <div className="flex h-full flex-col overflow-y-auto  py-4 dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
          <LogoAnimated className="mx-auto" />
        </div>

        <ul className="my-auto space-y-2 text-sm font-medium">
          <li>
            <Link className={active === activePage.DASHBOARD ? activeClassName : sideBarElementCn} href={"/dashboard/"}>
              <Icons.dashboard color={active === activePage.DASHBOARD ? "#097B45" : "#9C9C9C"} className="h-6 w-6" />
              <span className="mt-2 whitespace-nowrap">Dashboard</span>
            </Link>
          </li>
          <li>
            <a className={active === activePage.ETCH_LIBRARY ? activeClassName : sideBarElementCn}>
              <Icons.etchLibrary color={active === activePage.ETCH_LIBRARY ? "#097B45" : "#9C9C9C"} className="h-6 w-6" />
              <span className="mt-2 whitespace-nowrap">Etch Library</span>
            </a>
          </li>
          <li>
            <a className={active === activePage.MARKETPLACE ? activeClassName : sideBarElementCn}>
              <Icons.marketplace color={active === activePage.MARKETPLACE ? "#097B45" : "#9C9C9C"} />
              <span className="mt-2 whitespace-nowrap">Marketplace</span>
            </a>
          </li>
          <li>
            <a className={active === activePage.COMMUNITY ? activeClassName : sideBarElementCn}>
              <Icons.community color={active === activePage.COMMUNITY ? "#097B45" : "#9C9C9C"} />
              <span className="mt-2 whitespace-nowrap">Community</span>
            </a>
          </li>
          <li>
            <a className={active === activePage.SETTINGS ? activeClassName : sideBarElementCn}>
              <Icons.settings color={active === activePage.SETTINGS ? "#097B45" : "#9C9C9C"} />{" "}
              <span className="mt-2 whitespace-nowrap">Settings</span>
            </a>
          </li>
        </ul>
        <div className="mt-auto flex">
          <UserSettings>
            <div className="flex w-full justify-between rounded-lg px-3 py-2 hover:bg-slate-100">
              <span className="my-auto text-sm font-medium text-black dark:text-white">
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
                className="h-12 w-12 rounded-lg px-3 py-2 text-black hover:bg-slate-200"
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
      <DropdownMenuContent className="w-56">
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
