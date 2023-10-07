import { Organisation, Team, useQuery } from "@/gqty";
import { useSession } from "next-auth/react";
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
import { Separator } from "./ui/separator";

type TeamSelector = {
  name: string;
  org: string;
  id: string;
};

const emptyTeam = { name: "Private", org: "Yourself", id: "" };
export const getSelectedTeam: () => TeamSelector = () =>
  JSON.parse(localStorage.getItem("selectedBehalfOf") || "false") ?? emptyTeam;

export const TeamSelector = ({
  className = "w-1/8 h-full !border-0 !ring-0",
  horizontal = false,
}: {
  className?: string;
  horizontal?: boolean;
}) => {
  const { data: session, status } = useSession();
  const [isOpened, setIsOpened] = useState(false);
  const [selectedBehalfOf, setSelectedBehalfOf] = useState(emptyTeam);

  const query = useQuery({});

  const _teams = query.teams({
    where: {
      or: [
        {
          ownership_: {
            owner: session?.address?.toLowerCase(),
          },
        },
        {
          permissions_: {
            wallet: session?.address?.toLowerCase(),
            permissionLevel_gt: 0,
          },
        },
      ],
    },
  });

  const organisations = query.organisations({
    where: {
      or: [
        {
          ownership_: {
            owner: session?.address?.toLowerCase(),
          },
        },
        {
          permissions_: {
            wallet: session?.address?.toLowerCase(),
            permissionLevel_gt: 0,
          },
        },
      ],
    },
  });

  const teams = [
    ..._teams,
    ...(organisations
      .map((el: Organisation) => el.managedTeams({ first: 10 })?.map((el) => el.team))
      .reduce((acc: Team[], val: any) => acc.concat(val), [] as Team[]) ?? []),
  ].filter((team) => !!team.__typename);

  const behalfOf = teams
    .map((team) => ({
      name: team.name ?? "Team " + team.teamId,
      org: team.ownership.organisation?.name ?? team.ownership.organisation?.orgId ?? "Sole Team",
      teamId: team.teamId,
    }))
    .filter((team) => !!team.teamId);

  const Organisations = behalfOf.map((team) => team.org).filter((org, index, self) => self.indexOf(org) === index);

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
      onOpenChange={(b) => status === "authenticated" && setIsOpened(b)}
    >
      <SelectTrigger className={className}>
        <div
          className={
            "justify-cente mr-4 flex " + (horizontal ? "flex-row items-center justify-center gap-4" : "flex-col items-start")
          }
        >
          <span className="text-sm font-semibold text-gray-800">{selectedBehalfOf.name}</span>
          <Separator orientation="vertical" />
          <span className="text text-ellipsis text-xs text-gray-500">{selectedBehalfOf.org}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Myself">Myself</SelectItem>
          <SelectSeparator className="SelectSeparator" />
          {Organisations.map((org, index) => (
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
          ))}
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
            New Orgnisation
          </Button>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
