import { graphql } from "@/gql";
import { useEffect } from "react";
import { useQuery } from "urql";

const TeamFragment = graphql(`
  fragment TeamFragment on Team {
    id
    teamId
    name
    ownership {
      id
      organisation {
        id
        name
        orgId
      }
    }
  }
`);

const GET_TEAMS_FROM_USER_QUERY = graphql(`
  query Teams($userId: String) {
    teams(where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }) {
      ...TeamFragment
    }

    organisations(
      where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }
    ) {
      id
      managedTeams {
        id
        team {
          ...TeamFragment
        }
      }
    }
  }
`);

export const useGetTeamsFromUser = (userId?: string) => {
  const [{ data: teamsData, fetching, error }, $refetch] = useQuery({
    query: GET_TEAMS_FROM_USER_QUERY,
    variables: { userId },
  });

  useEffect(() => document.addEventListener("refresh-teams", () => $refetch()), []);

  if (!teamsData) return { teams: [], isLoading: fetching, error };

  const teams = [
    ...teamsData.teams,
    ...teamsData.organisations.flatMap((org: any) => org.managedTeams.map((team: any) => team.team)),
  ];

  const Organisations = teams
    .map((team) => team.ownership.organisation?.name ?? team.ownership.organisation?.orgId ?? "Sole Team")
    .filter((org, index, self) => self.indexOf(org) === index);

  return { teams, uniqueOrgs: Organisations, isLoading: fetching, error };
};
