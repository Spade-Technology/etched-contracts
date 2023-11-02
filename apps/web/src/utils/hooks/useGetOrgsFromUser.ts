import { graphql } from "@/gql";
import { useQuery } from "urql";

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
  const [{ data, fetching, error }] = useQuery({
    query: ORGANISATIONS_QUERY,
    variables: { address },
  });

  if (!data) return { organisations: [], isLoading: fetching, error };

  return { organisations: data.organisations, isLoading: fetching, error };
};
