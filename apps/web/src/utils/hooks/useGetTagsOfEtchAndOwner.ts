// File 1: web/src/utils/hooks/useGetTagsOfEtchAndOwner.ts
import { useContext, useEffect } from "react";
import { gql, useQuery } from "urql";
import { refetchContext } from "../urql";

import { Client } from "urql";
import { urqlConfig } from "../urql";

const TAG_OF_ETCH_AND_OWNER = gql`
  query GetTagsOfEtchAndOwner($owner: String!, $id: ID!) {
    etch(id: $id) {
      id
      tags(where: { owner: $owner }) {
        tag {
          id
          owner {
            eoa
          }
        }
      }
    }
  }
`;

export const getTagsOfEtchAndOwner = (etchId: string, address: string) => {
  const client = new Client(urqlConfig);

  return client.query(TAG_OF_ETCH_AND_OWNER, {
    id: etchId + "-Etch",
    owner: address,
  });
};

export const useGetTagsOfEtchAndOwner = (etchId?: string, address?: string) => {
  const [{ data, fetching, error, operation }, reexecute] = useQuery({
    query: TAG_OF_ETCH_AND_OWNER,
    variables: { id: etchId!, owner: address! },
    pause: !etchId || !address,
  });

  const refetch = () => reexecute({ requestPolicy: "network-only" });

  const { setRefetchTagsOfEtchAndOwner } = useContext(refetchContext);
  useEffect(() => {
    if (setRefetchTagsOfEtchAndOwner) {
      setRefetchTagsOfEtchAndOwner(refetch);
    }
  }, [operation, setRefetchTagsOfEtchAndOwner]);

  return { data, fetching, error, refetch };
};
