import { graphql } from "@/gql";
import { orgUser } from "@/types";
import { useQuery } from "urql";

const userPermissions: {
  0: string;
  1: string;
  2: string;
  [key: number]: string;
} = {
  0: "none",
  1: "member",
  2: "admin",
};

const GET_MEMBERS_FROM_ORG_QUERY = graphql(`
  query Org($id: ID!) {
    organisation(id: $id) {
      permissions {
        wallet {
          id
          etchENS {
            name
          }
        }
        permissionLevel
      }
    }
  }
`);

export const useGetMembersFromOrg = (id: string) => {
  const [{ data, fetching, error }] = useQuery({
    query: GET_MEMBERS_FROM_ORG_QUERY,
    variables: { id },
  });

  if (!data?.organisation?.permissions) return { members: [], isLoading: fetching, error };

  return {
    members: data.organisation.permissions.map(({ permissionLevel, wallet: { id, etchENS } }) => ({
      id,
      name: etchENS[0]?.name,
      role: userPermissions[permissionLevel],
    })) as orgUser[],
    isLoading: fetching,
    error,
  };
};
