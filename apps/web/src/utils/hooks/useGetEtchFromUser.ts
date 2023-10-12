import { graphql } from "@/gql";
import { Etch } from "@/gql/graphql";
import { useQuery } from "urql";

const FullEtchFragment = graphql(`
  fragment FullEtchFragment on Etch {
    id
    tokenId
    createdAt
    documentName
    ipfsCid
    ownership {
      id
      etch {
        id
        tokenId
        createdAt
        documentName
        ipfsCid
      }
      owner {
        id
        etchENS {
          id
          name
        }
      }
      team {
        id
        teamId
        name
      }
    }
    permissions {
      id
      etch {
        id
        tokenId
        createdAt
        documentName
        ipfsCid
      }
      wallet {
        id
      }
      team {
        id
      }
      permissionLevel
    }
    comments {
      id
      tokenId
      commentId
      comment_commentIpfsCid
      comment_timestamp
    }
    transfers {
      id
      from
      to
      tokenId
    }
    approvals {
      id
      owner
      approved
      tokenId
    }
  }
`);

const GET_UNIQUE_ETCH_QUERY = graphql(`
  query Etch($etchId: BigInt!) {
    etches(where: { tokenId: $etchId }) {
      ...FullEtchFragment
    }
  }
`);

export const useGetUniqueEtch = (etchId?: string) => {
  const [{ data: etchData, fetching, error }] = useQuery({
    query: GET_UNIQUE_ETCH_QUERY,
    variables: { etchId },
  });

  if (!etchData) return { etch: undefined, isLoading: fetching, error };

  const etch = etchData.etches[0] as Partial<Etch>; // Should only be one etch

  return { etch, isLoading: fetching, error };
};
