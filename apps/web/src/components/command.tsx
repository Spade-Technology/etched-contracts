import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signOut } from "@/utils/hooks/useSignIn";
import { SearchIcon } from "lucide-react";
import { CreateEtchEvent } from "./create-etch-button";

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
      document.dispatchEvent(CreateEtchEvent);
    },
  },
  {
    shortcut: "t",
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

  return (
    <div className="w-full">
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="flex w-full cursor-text justify-start gap-2 rounded-sm p-3 text-slate-500"
      >
        <SearchIcon className="h-full scale-150" />
        Type a Command, or use {bsrtct("⌘K")}
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
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
