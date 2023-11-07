import { graphql } from "@/gql";
import { TeamPermission } from "@/gql/graphql";
import { teamUser } from "@/types";
import { useEffect } from "react";
import { useQuery } from "urql";
import { removeDuplicatesByField } from "../common";

const userPermissions: {
  0: string;
  1: string;
  2: string;
  [key: number]: string;
} = {
  0: "none",
  1: "read",
  2: "read & write",
};
const TeamFragment = graphql(`
  fragment TeamFragment on Team {
    id
    teamId
    name
    createdAt
    ownership {
      id
      organisation {
        id
        name
        orgId
      }
      owner {
        id
      }
    }
    permissions {
      permissionLevel
      wallet {
        id
        etchENS {
          name
        }
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
  const [{ data: teamsData, fetching, error }, refetch] = useQuery({
    query: GET_TEAMS_FROM_USER_QUERY,
    variables: { userId },
  });

  useEffect(() => document.addEventListener("refresh-teams", () => refetch()), []);

  if (!teamsData) return { teams: [], isLoading: fetching, error, refetch };

  const teams = [
    ...teamsData.teams,
    ...teamsData.organisations.flatMap((org: any) => org.managedTeams.map((team: any) => team.team)),
  ].map((team) => ({
    ...team,
    members: team.permissions.map((perm: TeamPermission) => ({
      role: userPermissions[perm.permissionLevel],
      name: perm.wallet.etchENS[0]?.name,
      id: perm.wallet.id,
    })) as teamUser[],
  }));

  const Organisations = teams
    .map((team) => team.ownership.organisation?.name ?? team.ownership.organisation?.orgId ?? "Sole Team")
    .filter((org, index, self) => self.indexOf(org) === index);

  return { teams: removeDuplicatesByField(teams, "id"), uniqueOrgs: Organisations, isLoading: fetching, error, refetch };
};
