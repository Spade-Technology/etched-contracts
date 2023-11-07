import { graphql } from "@/gql";
import { useQuery } from "urql";

const GET_USERS_QUERY = graphql(`
  query Users($input: String) {
    wallets(first: 15, where: { etchENS_: { name_contains_nocase: $input } }) {
      id
      etchENS {
        name
      }
    }
  }
`);

export const useGetUsers = (input?: string) => {
  const [{ data, fetching, error }] = useQuery({
    query: GET_USERS_QUERY,
    variables: { input: input || "" },
  });

  if (!data) return { wallets: [], isLoading: fetching, error };

  return { wallets: data.wallets.map(({ id, etchENS }) => ({ id, name: etchENS[0]?.name })), isLoading: fetching, error };
};
