import { graphql } from "@/gql";
import { useContext, useEffect } from "react";
import { useQuery } from "urql";
import { refetchContext } from "../urql";

const GET_ETCHES_FROM_TEAM_QUERY = graphql(`
  query TeamEtches($teamId: BigInt!) {
    teams(where: { teamId: $teamId }) {
      id
      ownership {
        owner {
          id
          etchENS {
            id
            name
          }
        }
        organisation {
          id
          orgId
          name
        }
      }
      permissions(where: { permissionLevel_gt: 0 }) {
        id
        wallet {
          id
        }
      }
      managedEtches {
        id
        etch {
          id
          tokenId
          createdAt
          documentName
          ownership {
            id
            owner {
              id
              etchENS {
                id
                name
              }
            }
            team {
              id
              name
            }
          }
        }
      }
    }
  }
`);

export const useGetEtchesFromTeam = (teamId?: string) => {
  const [{ data: etchesData, fetching, error, operation }, reexecute] = useQuery({
    query: GET_ETCHES_FROM_TEAM_QUERY,
    variables: { teamId },
  });

  const refetch = () => reexecute({ requestPolicy: "network-only" });

  const { setRefetchEtches } = useContext(refetchContext);
  useEffect(() => setRefetchEtches(refetch), [operation]);

  if (!etchesData) return { etches: [], isLoading: fetching, error };

  const team = etchesData.teams?.[0];
  const etches = team?.managedEtches.map((etch: any) => etch.etch);

  return { etches, team, isLoading: fetching, error, refetch };
};
