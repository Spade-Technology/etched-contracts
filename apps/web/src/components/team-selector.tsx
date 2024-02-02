import { useEffect, useState } from "react";
import { Button } from "./ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
} from "@/components/ui/select";
import { useGetTeamsFromUser } from "@/utils/hooks/useGetTeamsFromUser";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";

type TeamSelector = {
  name: string;
  org: string;
  id: string;
};

const emptyTeam = { name: "Private", org: "Yourself", id: "" };
export const getSelectedTeam: () => TeamSelector = () =>
  JSON.parse(localStorage.getItem("selectedBehalfOf") || "false") ?? emptyTeam;

export const TeamSelector = ({
  className = "w-fit h-full !border-0 !ring-0",
  horizontal = false,
}: {
  className?: string;
  horizontal?: boolean;
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedBehalfOf, setSelectedBehalfOf] = useState(emptyTeam);

  const loggedInAddress = useLoggedInAddress();

  const { isLoading, error, teams, uniqueOrgs } = useGetTeamsFromUser(loggedInAddress.toLowerCase());

  const behalfOf = teams
    .map((team) => ({
      name: team.name ?? "Team " + team.teamId,
      org: team.ownership.organisation?.name ?? team.ownership.organisation?.orgId ?? "Sole Team",
      teamId: team.teamId,
    }))
    .filter((team) => !!team.teamId);

  const handleSelectTeam = ({ name, organisation, teamId }: { name: string; organisation: string; teamId: string }) => {
    setSelectedBehalfOf({ name, org: organisation, id: teamId });
    localStorage.setItem("selectedBehalfOf", JSON.stringify({ name, org: organisation, id: teamId }));
    setIsOpened(false);
  };

  useEffect(() => {
    const selectedBehalfOf = localStorage.getItem("selectedBehalfOf");
    if (selectedBehalfOf) setSelectedBehalfOf(JSON.parse(selectedBehalfOf));
  }, []);

  return (
    <Select
      onValueChange={(el) =>
        handleSelectTeam({
          name: el,
          organisation: behalfOf.find((team) => team.name === el)?.org ?? "Sole Team",
          teamId: behalfOf.find((team) => team.name === el)?.teamId ?? "",
        })
      }
      open={isOpened}
      onOpenChange={(b) => setIsOpened(b)}
    >
      <SelectTrigger className={className}>
        <div
          className={
            "mr-4 flex h-fit justify-center " +
            (horizontal ? "flex-row items-center justify-center gap-1" : "flex-col items-start")
          }
        >
          <span className="whitespace-nowrap font-body text-sm font-medium text-primary">{selectedBehalfOf.name}</span>
          <Separator orientation="vertical" />
          <span className="text text-ellipsis text-xs text-gray-500">{selectedBehalfOf.org}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Myself">Myself</SelectItem>
          <SelectSeparator className="SelectSeparator" />
          {isLoading ? (
            <div className="flex flex-col gap-3">
              <Skeleton className="mt-2 h-5 w-16" />
              <Skeleton className="h-3 w-6" />
              <Skeleton className="h-3 w-6" />
              <SelectSeparator className="SelectSeparator" />
            </div>
          ) : (
            !error &&
            uniqueOrgs?.map((org, index) => (
              <div key={index}>
                <SelectGroup>
                  <SelectLabel>{org}</SelectLabel>
                  {behalfOf
                    .filter((team) => team.org === org && team.teamId)
                    .map((team, index) => (
                      <SelectItem key={index} value={team.name}>
                        {team.name}
                      </SelectItem>
                    ))}
                </SelectGroup>
                <SelectSeparator className="SelectSeparator" />
              </div>
            ))
          )}
        </SelectGroup>
        <SelectGroup className="flex flex-col">
          <SelectLabel>Actions</SelectLabel>

          <Button
            variant={"ghost"}
            className="flex w-full justify-start rounded-sm p-2"
            onClick={() => document.dispatchEvent(new CustomEvent("create-team"))}
          >
            New Team
          </Button>

          <Button
            variant={"ghost"}
            className="flex w-full justify-start rounded-sm p-2"
            onClick={() => document.dispatchEvent(new CustomEvent("create-org"))}
          >
            New Organisation
          </Button>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
