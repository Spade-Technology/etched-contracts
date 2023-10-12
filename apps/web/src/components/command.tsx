import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { signOut } from "@/utils/hooks/useSignIn";
import { BriefcaseIcon, Loader2Icon, SearchIcon, Users2Icon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { useSearchGQL } from "@/utils/hooks/useSearchGQL";
import { Skeleton } from "./ui/skeleton";
import { FileIcon } from "@radix-ui/react-icons";
import { Label } from "./ui/label";
import { Etch, Organisation, Team, Wallet } from "@/gql/graphql";

export const commands = [
  {
    shortcut: "k",
    name: "Search",
    hideOnDialog: true,
    action: "open",
    type: "misc",
  },
  {
    shortcut: "o",
    shift: true,
    name: "Log Out",
    action: () => {
      signOut();
    },
    type: "auth",
  },
  {
    shortcut: "e",
    name: "New Etch",
    type: "create",
    action: () => {
      document.dispatchEvent(new CustomEvent("create-etch"));
    },
  },
  {
    shortcut: "d",
    name: "New Team",
    type: "create",
    action: () => {
      document.dispatchEvent(new CustomEvent("create-team"));
    },
  },
  {
    shortcut: "o",
    name: "New Organisation",
    type: "create",
    action: () => {
      document.dispatchEvent(new CustomEvent("create-org"));
    },
  },
  {
    shortcut: "p",
    name: "Profile",
    shift: true,
    type: "profile",
  },
  {
    shortcut: "b",
    name: "Billing",
    type: "profile",
  },
  {
    shortcut: "s",
    name: "Settings",
    type: "misc",
  },
];

export const bsrtct = (shortcut: string) => {
  try {
    // the shortcut is passed as "⇧⌘K", if windows transform it to ⇧ + Ctrl + K
    // ⌘ if mac, ctrl if windows
    if (navigator.platform.indexOf("Win") != -1) {
      // join all the characters with a + sign
      shortcut = shortcut.split("").join(" + ");
      shortcut = shortcut.replace("⌘", "Ctrl");
    }

    return shortcut;
  } catch (e) {
    return shortcut;
  }
};

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const currentSearch = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      commands.forEach((command) => {
        if (command.shortcut && e.key === command.shortcut && (e.metaKey || e.ctrlKey) && e.shiftKey === !!command.shift) {
          e.preventDefault();
          handleAction(command.action);
        }
      });
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleAction = (action: string | Function | undefined) => {
    setOpen(false);
    if (typeof action === "function") {
      action();
    } else if (typeof action === "string") {
      switch (action) {
        // Add cases for different actions here
        // case "actionName":
        //   // Perform action
        //   break;
        case "open":
          setOpen(true);
          break;
        default:
          break;
      }
    }
  };

  const { isLoading, etches, organisations, teams, wallets } = useSearchGQL(currentSearch[0]);

  const getItemName = (item: Team | Organisation | Etch | Wallet) => {
    switch (item.id.split("-")[1]) {
      case "Etch":
        return (item as Etch)?.documentName;
      case "Team":
        return (item as Team)?.name;
      case "Organisation":
        return (item as Organisation)?.name;
      default:
        return (item as Wallet)?.etchENS?.[0]?.name || (item as Wallet)?.id || "";
    }
  };

  const mostRelevent = [...etches, ...organisations, ...teams, ...wallets]
    .sort((a, b) => {
      const aName = getItemName(a).toLowerCase();
      const bName = getItemName(b).toLowerCase();

      console.log({ aName, bName, "a<b": aName < bName });

      if (currentSearch[0].length > 0) {
        const search = currentSearch[0].toLowerCase();
        const aIndex = aName.indexOf(search);
        const bIndex = bName.indexOf(search);
        if (aIndex !== -1 && bIndex !== -1) {
          return aIndex < bIndex ? -1 : 1;
        } else if (aIndex !== -1) {
          return -1;
        } else if (bIndex !== -1) {
          return 1;
        }
      }
      return 0;
    })
    .slice(0, 2);

  // dirty fix to refresh the search once the data is loaded
  useEffect(() => {
    if (!isLoading) currentSearch[1](currentSearch[0]);
  });

  return (
    <div className="w-full">
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="mx-auto flex w-full max-w-[30%] cursor-text justify-start gap-2 rounded-sm p-3 text-slate-500"
      >
        <SearchIcon className="h-full scale-150" />
        Type a Command, or use {bsrtct("⌘K")}
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          onValueChange={(value) => currentSearch[1](value)}
          value={currentSearch[0]}
        />
        <CommandList>
          {isLoading ? (
            <>
              <Loader2Icon className="mx-auto my-4 animate-spin" />
              <CommandSeparator />
            </>
          ) : (
            <>
              <CommandGroup heading="Global Search">
                {etches
                  .slice(0, 2)
                  .filter((etch) => mostRelevent.includes(etch))
                  .map((etch, index) => (
                    <CommandItem
                      key={index}
                      className="flex justify-between"
                      // onSelect={() => handleAction(etch.action)}
                    >
                      {/* <FileIcon /> */}
                      {etch.documentName + " - " + etch.tokenId}
                    </CommandItem>
                  ))}
                {teams
                  .slice(0, 2)
                  .filter((team) => mostRelevent.includes(team))
                  .map((team, index) => (
                    <CommandItem
                      key={index}
                      className="flex justify-between"
                      // onSelect={() => handleAction(team.action)}
                    >
                      {/* <Users2Icon /> */}
                      {team.name}
                    </CommandItem>
                  ))}
                {organisations
                  .slice(0, 2)
                  .filter((organisation) => mostRelevent.includes(organisation))
                  .map((organisation, index) => (
                    <CommandItem
                      key={index}
                      className="flex justify-between"
                      // onSelect={() => handleAction(team.action)}
                    >
                      {/* <BriefcaseIcon /> */}
                      {organisation.name}
                    </CommandItem>
                  ))}
              </CommandGroup>
              <CommandSeparator />
            </>
          )}

          <CommandEmpty>No results found.</CommandEmpty>

          {Object.entries(
            commands
              .filter((command) => !command.hideOnDialog)
              .reduce((groups, command) => {
                if (!groups[command.type]) groups[command.type] = [];
                groups?.[command.type]?.push(command);
                return groups;
              }, {} as Record<string, typeof commands>)
          ).map(([group, commands]) => (
            <div key={group}>
              <CommandSeparator />
              <CommandGroup heading={group}>
                {commands.map((command, index) => (
                  <CommandItem key={index} className="flex justify-between" onSelect={() => handleAction(command.action)}>
                    <div> {command.name} </div>
                    <div>
                      <CommandShortcut>
                        {bsrtct((command.shift ? "⇧" : "") + "⌘" + command.shortcut.toUpperCase())}
                      </CommandShortcut>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  );
}
