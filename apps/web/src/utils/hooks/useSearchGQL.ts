import { graphql } from "@/gql";
import { Etch, Organisation, Team, Wallet } from "@/gql/graphql";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "urql";
import { refetchContext } from "../urql";

const SEARCH_GQL_QUERY = graphql(`
  query Search($input: String) {
    etches(first: 2, where: { documentName_contains_nocase: $input }, orderDirection: desc, orderBy: createdAt) {
      id
      tokenId
      documentName
      ownership {
        owner {
          etchENS {
            name
          }
        }
      }
    }

    wallets(where: { etchENS_: { name_contains_nocase: $input } }, first: 2) {
      id

      etchENS {
        name
      }
    }

    teams(where: { name_contains_nocase: $input }, first: 2) {
      id
      teamId
      name
    }
    organisations(where: { name_contains_nocase: $input }, first: 2) {
      id
      orgId
      name
    }
  }
`);

export const useSearchGQL = (input?: string) => {
  const [debouncedInput, setDebouncedInput] = useState(input);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
    }, 100);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  const [{ data: searchData, fetching, error, operation }, reexecute] = useQuery({
    query: SEARCH_GQL_QUERY,
    variables: { input: debouncedInput },
  });

  const refetch = () => reexecute({ requestPolicy: "network-only" });

  const { setRefetchEtches } = useContext(refetchContext);
  useEffect(() => setRefetchEtches(refetch), [operation]);

  if (!searchData)
    return {
      etches: [] as Partial<Etch>[],
      teams: [] as Partial<Team>[],
      organisations: [] as Partial<Organisation>[],
      wallets: [] as Partial<Wallet>[],
      isLoading: fetching,
      error,
    };

  const etches = searchData.etches as Partial<Etch>[];
  const teams = searchData.teams as Partial<Team>[];
  const organisations = searchData.organisations as Partial<Organisation>[];
  const wallets = searchData.wallets as Partial<Wallet>[];

  return { etches, teams, organisations, wallets, isLoading: fetching, error, refetch };
};
