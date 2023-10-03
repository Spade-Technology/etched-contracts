import { Etch, EtchOwnership, Team, useQuery } from "@/gqty";

import { useEffect } from "react";

export const RefreshEtchesEvent = new Event("refresh-etches");

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

  const _etchToDisplay = [
    ...etches,
    ...(teams
      .map((el: Team) => el.managedEtches({ first: 10 })?.map((el: EtchOwnership) => el.etch))
      .reduce((acc: Etch[], val: any) => acc.concat(val), [] as Etch[]) ?? []),
  ];

  useEffect(() => {
    document.addEventListener("refresh-etches", () => {
      query.$refetch(false);
    });
  }, []);

  const etchToDisplay = _etchToDisplay.filter((el) => el.__typename !== undefined);

  const isLoading = etchToDisplay.length !== _etchToDisplay.length || query.$state.isLoading || !userId;

  return { etchToDisplay, isLoading, $state: query.$state };
};
