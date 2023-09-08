import { Etch, EtchOwnership, Team, useQuery } from "@/gqty";
import { useSession } from "next-auth/react";

export const useGetEtchesFromTeam = (teamId?: string) => {
  const query = useQuery({});

  const teams = query.teams({
    where: {
      teamId,
    },
  });

  const _etches = teams.map((el: Team) => el.managedEtches({ first: 10 })?.map((el: EtchOwnership) => el.etch));
  const etches = _etches.reduce((acc: Etch[], val: any) => acc.concat(val), [] as Etch[]) ?? [];

  const isLoading = query.$state.isLoading || !teamId || _etches.length !== etches.length;

  return { etchToDisplay: etches, team: teams[0], isLoading, $state: query.$state };
};
