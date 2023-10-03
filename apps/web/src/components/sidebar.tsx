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
import { signOut } from "@/utils/hooks/useSignIn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { LogoAnimated } from "./icons/logo-long-animated";

const sideBarElementCn =
  "flex flex-col items-center justify-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700 h-24";

const activeClassName =
  sideBarElementCn +
  " !bg-primary-foreground !text-primary before:absolute before:left-0 before:h-24 before:w-8 before:-translate-x-1/2 before:rounded-full before:bg-primary";

enum activePage {
  HOME,
  CUSTOMERS,
  PRODUCTS,
  SETTINGS,
}

export const SideBar = () => {
  const { data } = useSession();
  const router = useRouter();

  const path = router.asPath;
  const active = path.startsWith("/dashboard")
    ? path.includes("/settings")
      ? activePage.SETTINGS
      : path.includes("/customers")
      ? activePage.CUSTOMERS
      : path.includes("/products")
      ? activePage.PRODUCTS
      : activePage.HOME
    : activePage.HOME;

  return (
    <aside id="sidebar" className="left-0 top-0 z-40 h-screen w-64 transition-transform" aria-label="Sidebar">
      <div className="flex h-full flex-col overflow-y-auto  py-4 dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
          <LogoAnimated className="mx-auto" />
        </div>

        <ul className="space-y-2 text-sm font-medium">
          <li>
            <a className={active === activePage.HOME ? activeClassName : sideBarElementCn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2 h-6 w-6"
                width="24"
                height="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="whitespace-nowrap">Home</span>
            </a>
          </li>
          <li>
            <a className={active === activePage.CUSTOMERS ? activeClassName : sideBarElementCn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2 h-6 w-6"
                width="24"
                height="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                //   className="lucide lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="whitespace-nowrap">Customers</span>
            </a>
          </li>
          <li>
            <a className={active === activePage.PRODUCTS ? activeClassName : sideBarElementCn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2 h-6 w-6"
                width="24"
                height="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                //   className="lucide lucide-package"
              >
                <path d="M16.5 9.4 7.55 4.24" />
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" x2="12" y1="22" y2="12" />
              </svg>
              <span className="whitespace-nowrap">Products</span>
            </a>
          </li>
          <li>
            <a className={active === activePage.SETTINGS ? activeClassName : sideBarElementCn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2 h-6 w-6"
                width="24"
                height="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                //   className="lucide lucide-settings"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="whitespace-nowrap">Settings</span>
            </a>
          </li>
        </ul>
        <div className="mt-auto flex">
          <UserSettings>
            <div className="flex w-full justify-between rounded-lg px-3 py-2 hover:bg-slate-100">
              <span className="my-auto text-sm font-medium text-black dark:text-white">
                {data ? shortenAddress({ address: data?.address ?? "" }) : "Loading..."}
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
