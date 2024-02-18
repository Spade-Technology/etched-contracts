import { useContext, useEffect } from "react";
import { gql, useQuery } from "urql";
import { refetchContext } from "../urql";

import { Client } from "urql";
import { urqlConfig } from "../urql";

const TAGS_OF_OWNER = gql`
  query GetTagsOfOwner($owner: String!) {
    tagLinks(where: { owner: $owner }) {
      tag {
        label
        id
        owner {
          eoa
        }
      }
    }
  }
`;

export const getTagsOfOwner = (address: string) => {
  const client = new Client(urqlConfig);

  return client.query(TAGS_OF_OWNER, {
    owner: address,
  });
};

export const useGetTagsOfOwner = (address?: string) => {
  const [{ data, fetching, error, operation }, reexecute] = useQuery({
    query: TAGS_OF_OWNER,
    variables: { owner: address },
  });

  const refetch = () => reexecute({ requestPolicy: "network-only" });

  const { setRefetchTagsOfOwner } = useContext(refetchContext);
  useEffect(() => {
    if (setRefetchTagsOfOwner) {
      setRefetchTagsOfOwner(refetch);
    }
  }, [operation, setRefetchTagsOfOwner]);

  return { data: data?.tags.filter((tag: any) => tag?.tag?.length > 0), fetching, error, refetch };
};
