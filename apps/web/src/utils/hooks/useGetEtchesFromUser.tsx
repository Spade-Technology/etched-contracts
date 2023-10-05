import { Etch, EtchOwnership, Team, useQuery } from "@/gqty";

import { useEffect } from "react";

export const useGetEtchesFromUser = (userId?: string) => {
  const query = useQuery({});

  const etches = query.etches({
    first: 10,
    where: {
      or: [
        {
          ownership_: {
            owner: userId,
          },
        },
        {
          permissions_: {
            wallet: userId,
          },
        },
      ],
    },
  });

  const organisations = query.organisations({
    where: {
      ownership_: {
        owner: userId,
      },
    },
  });

  const teams = query.teams({
    where: {
      or: [
        {
          ownership_: {
            owner: userId,
          },
        },
        {
          permissions_: {
            wallet: userId,
            permissionLevel_gt: 0,
          },
        },
      ],
    },
  });

  console.log();

  const _etchToDisplay = [
    ...etches,
    ...([
      ...teams,
      ...(organisations
        .map((organisation) => organisation.managedTeams({ first: 10 })?.map((el) => el.team))
        ?.reduce((acc: Team[], val: any) => acc.concat(val), [] as Team[]) ?? []),
    ]
      .filter((team, index, self) => self.findIndex((t) => t.teamId === team.teamId) === index)
      .map((el: Team) => el.managedEtches({ first: 10 })?.map((el: EtchOwnership) => el.etch))
      .reduce((acc: Etch[], val: any) => acc.concat(val), [] as Etch[]) ?? []),
  ];

  useEffect(() => {
    document.addEventListener("refresh-etches", () => {
      console.log("first");
      query.$refetch(false);
    });
  }, []);

  const etchToDisplay = _etchToDisplay.filter((el) => el.__typename !== undefined);

  const isLoading = etchToDisplay.length !== _etchToDisplay.length || query.$state.isLoading || !userId;

  return { etchToDisplay, isLoading, $state: query.$state };
};
