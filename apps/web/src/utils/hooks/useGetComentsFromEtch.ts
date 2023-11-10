import { graphql } from "@/gql";
import { useQuery } from "urql";

const GET_COMMENTS_FROM_ETCH_QUERY = graphql(`
  query EtchComments($etchId: BigInt!) {
    etchCommentAddeds(first: 5, orderBy: blockTimestamp, where: { tokenId: $etchId }) {
      commentId
      comment_commentIpfsCid
      blockTimestamp
      owner {
        id
        etchENS {
          name
        }
      }
    }
  }
`);

export const useGetCommentsFromEtch = (etchId?: string) => {
  const [{ data, fetching, error }] = useQuery({
    query: GET_COMMENTS_FROM_ETCH_QUERY,
    variables: { etchId },
  });

  if (!data) return { comments: [], isLoading: fetching, error };

  return { comments: data.etchCommentAddeds, isLoading: fetching, error };
};
