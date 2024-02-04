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
import { useSignOut } from "@/utils/hooks/useSignIn";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { Icons } from "./ui/icons";

import { Etch, Organisation, Team, Wallet } from "@/gql/graphql";
import { useSearchGQL } from "@/utils/hooks/useSearchGQL";
import { useRouter } from "next/router";
import { Button } from "./ui/button";

export const useCommands = () => {
  const { signOut } = useSignOut();
  const commands = [
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

  return { commands };
};

export const useBsrtct = () => {
  const [isWin, setIsWin] = useState(false);

  function bsrtct(shortcut: string) {
    try {
      // the shortcut is passed as "⇧⌘K", if windows transform it to ⇧ + Ctrl + K
      // ⌘ if mac, ctrl if windows
      if (!isWin) {
        // join all the characters with a + sign
        shortcut = shortcut.split("").join(" + ");
        shortcut = shortcut.replace("⌘", "Ctrl");
      }

      return shortcut;
    } catch (e) {
      return shortcut;
    }
  }

  useEffect(() => {
    if (navigator.platform.indexOf("Win")) setIsWin(true);
  }, []);

  return { bsrtct };
};

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const currentSearch = useState("");
  const router = useRouter();
  const { bsrtct } = useBsrtct();
  const { commands } = useCommands();

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

  const getItemName = (item: Partial<Team> | Partial<Organisation> | Partial<Etch> | Partial<Wallet>) => {
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
  // these are some changes

  return (
    <article className="ml-auto">
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="flex w-fit cursor-text justify-start gap-2 rounded-sm border-[1.5px] border-input px-4 py-2 font-body !text-sm font-normal text-opacity-75 max-[950px]:hidden"
      >
        <Icons.search className="" />
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
                      onSelect={() => {
                        router.push("/dashboard/etches/" + etch.tokenId);
                        setOpen(false);
                      }}
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
                      onSelect={() => {
                        router.push("/dashboard/teams/" + team.id);
                        setOpen(false);
                      }}
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
                      onSelect={() => {
                        router.push("/dashboard/settings/");
                        setOpen(false);
                      }}
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
    </article>
  );
}
