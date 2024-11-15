import { graphql } from "@/gql";
import { Etch, EtchCreated } from "@/gql/graphql";
import { useContext, useEffect } from "react";
import { useQuery } from "urql";
import { refetchContext } from "../urql";

const FullEtchCreatedFragment = graphql(`
  fragment FullEtchCreatedFragment on EtchCreated {
    id
    to
    tokenId
    blockNumber
    blockTimestamp
    transactionHash
  }
`);

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
    tagLinks {
      tag {
        id
        label
        owner {
          eoa
        }
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
    etches(
      where: { tokenId: $etchId }
    ) {
      ...FullEtchFragment
    }
    etchCreateds(
      where: { tokenId: $etchId }
    ) {
      ...FullEtchCreatedFragment
    }
  }
`);

interface EtchQueryResult {
  etch?: Partial<Etch>;
  etchCreated?: Partial<EtchCreated>;
  isLoading: boolean;
  error?: Error;
  refetch: () => void;
}

export const useGetUniqueEtchWithDetails = (etchId?: string): EtchQueryResult => {
  const [{ data: etchData, fetching, error, operation }, reexecute] = useQuery({
    query: GET_UNIQUE_ETCH_QUERY,
    variables: { etchId },
    pause: !etchId, // Pause the query if no etchId is provided
  });

  const refetch = () => reexecute({ requestPolicy: "cache-and-network" });
  const { setRefetchEtch } = useContext(refetchContext);

  useEffect(() => setRefetchEtch(refetch), [operation]);

  if (!etchData) {
    return {
      etch: undefined,
      etchCreated: undefined,
      isLoading: fetching,
      error,
      refetch
    };
  }

  const etch = etchData.etches[0] as Partial<Etch>;
  const etchCreated = etchData.etchCreateds[0] as Partial<EtchCreated>;

  return {
    etch,
    etchCreated,
    isLoading: fetching,
    error,
    refetch
  };
};