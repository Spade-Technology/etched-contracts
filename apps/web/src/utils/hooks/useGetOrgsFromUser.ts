import { graphql } from "@/gql";
import { useContext, useEffect } from "react";
import { useQuery } from "urql";
import { refetchContext } from "../urql";

const ORGANISATIONS_QUERY = graphql(/* GraphQL */ `
  query Organisations($address: String!) {
    organisations(
      where: { or: [{ ownership_: { owner: $address } }, { permissions_: { wallet: $address, permissionLevel_gt: 0 } }] }
    ) {
      orgId
      id
      name
      createdAt
    }
  }
`);
export const useGetOrgsFromUser = (address: string) => {
  const [{ data, fetching, error, operation }, reexecute] = useQuery({
    query: ORGANISATIONS_QUERY,
    variables: { address },
  });

  const refetch = () => reexecute({ requestPolicy: "network-only" });

  const { setRefetchOrganisations } = useContext(refetchContext);
  useEffect(() => setRefetchOrganisations(refetch), [operation]);

  if (!data) return { organisations: [], isLoading: fetching, error };

  return { organisations: data.organisations, isLoading: fetching, error };
};
