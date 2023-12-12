import { graphql } from "@/gql";
import { Etch } from "@/gql/graphql";
import { useContext, useEffect } from "react";
import { useQuery } from "urql";
import { refetchContext } from "../urql";

const FullEtchFragment = graphql(`
  fragment FullEtchFragment on Etch {
    id
    tokenId
    createdAt
    documentName
    description

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
        eoa
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
        etchENS {
          id
          name
        }
      }
      team {
        id
        name
      }
      permissionLevel
    }
    comments {
      id
      tokenId
      commentId
      comment_commentIpfsCid
      comment_timestamp

      owner {
        id
        etchENS {
          id
          name
        }
      }
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
  const [{ data: etchData, fetching, error, operation }, reexecute] = useQuery({
    query: GET_UNIQUE_ETCH_QUERY,
    variables: { etchId },
  });

  const refetch = () => reexecute({ requestPolicy: "cache-and-network" });

  const { setRefetchEtch } = useContext(refetchContext);
  useEffect(() => setRefetchEtch(refetch), [operation]);

  if (!etchData) return { etch: undefined, isLoading: fetching, error };

  const etch = etchData.etches[0] as Partial<Etch>; // Should only be one etch

  return { etch, isLoading: fetching, error };
};
