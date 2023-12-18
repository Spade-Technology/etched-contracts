import { TeaxtArea } from "@/components/ui/autoresize-textarea";
import { Button } from "@/components/ui/button";
import { Etch, EtchCommentAdded } from "@/gql/graphql";
import { lit } from "@/lit";
import { shortenAddress } from "@/utils/hooks/address";
import { useCommentEtch } from "@/utils/hooks/useCommentBackendOperation";
import { useLoggedInAddress, useSignIn } from "@/utils/hooks/useSignIn";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import Avatar from "boring-avatars";
import Placeholder from "public/icons/dashboard/placeholder2.svg";
import { useEffect, useState } from "react";

type CommentProps = {
  image: any;
  userName: string;
  description: string;
  commentedAt: string;
  addr: string;
};

export const EtchedAvatar = ({ uid }: { uid: string }) => (
  <Avatar size={40} name={uid.toLowerCase()} variant="beam" colors={["#077844", "#147c60", "#f1f5f9", "#6b9568", "#64748b"]} />
);

const Comment = ({ image, userName, description, commentedAt, addr }: CommentProps) => {
  return (
    <div className="flex justify-start gap-3 py-5">
      <EtchedAvatar uid={addr} />
      <div>
        <div className="flex items-center gap-3">
          <div className="pt-2 text-base font-semibold text-muted-foreground">{userName}</div>
          <div className="font-nornal pt-2 text-base text-muted-foreground">{commentedAt}</div>
        </div>
        {description ? (
          <div className="whitespace-pre-wrap pt-2 text-base font-medium text-muted-foreground">{description}</div>
        ) : (
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
        )}
      </div>
    </div>
  );
};

const Comments = ({ etch, hasWritePermission }: { etch: Partial<Etch>; hasWritePermission: boolean }) => {
  const [comments, setComments] = useState<Record<string, { comment: string; timestamp: number; owner: string; addr: string }>>(
    {}
  );
  const { addComment, isLoading, newComment, setNewComment } = useCommentEtch(etch?.documentName, etch.tokenId);

  const { regenerateAuthSig } = useSignIn();
  const owner = useLoggedInAddress();

  const handleComment = (evt: any) => {
    const input = evt.target.value;
    if (input && input.length > 0) {
      setNewComment(input);
    } else {
      setNewComment("");
    }
  };

  const decrypt = async (comments: EtchCommentAdded[]) => {
    await lit.connect();

    if (!lit.client) return;

    const authSig = await regenerateAuthSig();

    comments.forEach(async (comment) => {
      const decryptedComment = (await LitJsSdk.decryptFromIpfs({
        authSig,
        ipfsCid: comment.comment_commentIpfsCid,
        litNodeClient: lit.client as any,
      })) as string;

      if (decryptedComment)
        setComments((old) => ({
          ...old,
          [comment.commentId]: {
            comment: decryptedComment,
            timestamp: comment.comment_timestamp,
            addr: comment.owner.id,
            owner: comment.owner.etchENS[0]?.name || shortenAddress({ address: comment.owner.id }),
          },
        }));
    });
  };

  useEffect(() => {
    decrypt(etch.comments || []);
  }, [etch.comments]);

  const [_comments, set_Comments] = useState<Record<string, { comment: string; timestamp: number; owner: string; addr: string }>>(
    {}
  );

  useEffect(() => {
    const commentsUpdate: Record<string, { comment: string; timestamp: number; owner: string; addr: string }> = {};
    (etch?.comments || []).forEach((etch_comment) => {
      const commentId = etch_comment.commentId.toString();
      const commentData = comments[commentId] || { comment: "", timestamp: 0, owner: "", addr: "" };
      commentsUpdate[commentId] = {
        comment: commentData.comment,
        timestamp: etch_comment.comment_timestamp as number,
        addr: etch_comment.owner.id as string,
        owner: etch_comment.owner.etchENS[0]?.name || shortenAddress({ address: etch_comment.owner.id }),
      };
    });
    set_Comments(commentsUpdate);
  }, [etch.comments, comments]);

  return (
    <div className="my-6 rounded-2xl bg-[#F3F5F5] p-7 text-[#6D6D6D]">
      <div className="text-xl font-semibold">{Object.keys(_comments).length} Comments</div>

      <div className=" py-5">
        <div className="flex justify-start gap-3">
          <div className="flex cursor-pointer gap-1">
            <Avatar
              size={40}
              name={owner.toLowerCase()}
              variant="beam"
              colors={["#077844", "#147c60", "#f1f5f9", "#6b9568", "#64748b"]}
            />
          </div>
          <TeaxtArea
            disabled={isLoading || !hasWritePermission}
            placeholder="Add a comment"
            value={newComment}
            onChange={handleComment}
            className={!hasWritePermission ? "cursor-not-allowed" : ""}
          />
          {newComment && (
            <div className="float-right">
              <div className="flex justify-start gap-5">
                <Button
                  className={`rounded-lg duration-500 ${
                    !newComment ? " translate-x-[-60px] opacity-0" : " translate-x-0 opacity-100"
                  }
                  `}
                  onClick={addComment}
                  isLoading={isLoading || !hasWritePermission}
                >
                  <PaperPlaneIcon />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {_comments &&
        Object.keys(_comments).length > 0 &&
        Object.values(_comments).map(({ comment, timestamp, owner, addr }, idx) => {
          return (
            <Comment
              image={Placeholder}
              userName={owner}
              description={comment}
              commentedAt={new Date(timestamp * 1000).toDateString()}
              key={idx}
              addr={addr}
            />
          );
        })}
    </div>
  );
};

export default Comments;
