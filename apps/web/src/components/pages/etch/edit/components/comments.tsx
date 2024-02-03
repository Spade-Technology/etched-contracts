import { TextArea } from "@/components/ui/autoresize-textarea";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Etch, EtchCommentAdded } from "@/gql/graphql";
import { lit } from "@/lit";
import { api } from "@/utils/api";
import { shortenAddress } from "@/utils/hooks/address";
import { useCommentEtch } from "@/utils/hooks/useCommentBackendOperation";
import { useLoggedInAddress, useSignIn } from "@/utils/hooks/useSignIn";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import Avatar from "boring-avatars";
import dayjs from "dayjs";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type CommentProps = {
  imgUrl?: string;
  userName: string;
  description: string;
  commentedAt: number;
  addr: string;
};

export const EtchedAvatar = ({ uid }: { uid: string }) => (
  <Avatar size={40} name={uid.toLowerCase()} variant="beam" colors={["#077844", "#147c60", "#f1f5f9", "#6b9568", "#64748b"]} />
);

const Comment = ({ imgUrl, userName, description, commentedAt, addr }: CommentProps) => {
  return (
    <div className="flex justify-start gap-3 py-5">
      {imgUrl ? (
        <Image src={imgUrl} width={40} height={40} alt={description} className="mt-3 aspect-square h-10 w-10 rounded" />
      ) : (
        <EtchedAvatar uid={addr} />
      )}
      <div className="w-full">
        <div className="flex items-center gap-3">
          <div className="pt-2 text-base font-semibold text-muted-foreground">{userName}</div>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <div className="pt-2 text-base font-normal text-muted-foreground">
                  <p>{dayjs.unix(commentedAt).format("YYYY.MM.DD HH:mm")}</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>{dayjs.unix(commentedAt).from(dayjs())}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {description ? (
          <div className="whitespace-pre-wrap pt-2 text-base font-medium text-muted-foreground">{description}</div>
        ) : (
          <div className="mt-2 w-full space-y-2">
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-300"></div>
            <div className="h-4 w-5/6 animate-pulse rounded bg-gray-300"></div>
            <div className="h-4 w-2/3 animate-pulse rounded bg-gray-300"></div>
          </div>
        )}
      </div>
    </div>
  );
};

const Comments = ({ etch, hasWritePermission }: { etch: Partial<Etch>; hasWritePermission: boolean }) => {
  const [comments, setComments] = useState<Record<string, { comment: string; timestamp: number; owner: string; addr: string }>>(
    {}
  );
  const [profilePics, setProfilePics] = useState<Record<string, string | undefined>>({});

  const { addComment, isLoading, newComment, setNewComment } = useCommentEtch(etch?.documentName, etch.tokenId);

  const { regenerateAuthSig } = useSignIn();
  const owner = useLoggedInAddress();
  const { mutateAsync: getClerkUsers } = api.user.getClerkUser.useMutation();

  const handleComment = (evt: any) => {
    const input = evt.target.value;
    if (input && input.length > 0) {
      setNewComment(input);
    } else {
      setNewComment("");
    }
  };

  // this is done this way so that if a second render calls the decrypt function before the first one is done,
  // it will not call the decrypt function again, rather it will return the promise from the first call.
  const memoizedDecrypt = useMemo(() => {
    const cache = new Map();
    const _decrypt = (comment: EtchCommentAdded) => {
      if (cache.has(comment.commentId)) {
        return Promise.resolve(cache.get(comment.commentId));
      }

      const decryptPromise = (async () => {
        await lit.connect();

        if (!lit.client) return;

        const authSig = await regenerateAuthSig();

        try {
          const decryptedObject = await lit.decryptFromIpfs({ authSig, ipfsCid: comment.comment_commentIpfsCid });
          const decryptedComment = decryptedObject?.data as string;

          if (decryptedComment) {
            cache.set(comment.commentId, decryptedComment);
            return decryptedComment;
          }
        } catch (e) {
          if (e instanceof Error) {
            alert(e.message);
          } else {
            alert("An unknown error occurred during decryption.");
          }
        }
      })();

      cache.set(comment.commentId, decryptPromise);

      return decryptPromise;
    };
    return _decrypt;
  }, []); // Dependencies array is empty, meaning it will only compute this once

  const decrypt = async (comments: EtchCommentAdded[]) => {
    for (const comment of comments) {
      const decryptedComment = await memoizedDecrypt(comment);
      if (decryptedComment) {
        setComments((old) => ({
          ...old,
          [comment.commentId]: {
            comment: decryptedComment,
            timestamp: comment.comment_timestamp,
            addr: comment.owner.id,
            owner: comment.owner.etchENS[0]?.name || shortenAddress({ address: comment.owner.id }),
          },
        }));
      }
    }
  };

  const getProfilePics = async (comments: EtchCommentAdded[]) => {
    const extractUniqueWalletIds = (comments: EtchCommentAdded[]): string[] => {
      const uniqueWalletIdsSet = new Set<string>();

      comments.forEach((comment) => {
        if (comment?.owner?.id) {
          uniqueWalletIdsSet.add(comment.owner.id);
        }
      });

      return Array.from(uniqueWalletIdsSet);
    };

    const accounts = extractUniqueWalletIds(comments);

    const users = await getClerkUsers({ externalId: accounts });
    users.forEach(async (user) => {
      setProfilePics((old) => ({
        ...old,
        [user.externalId as string]: users[0]?.imageUrl,
      }));
    });
  };

  useEffect(() => {
    decrypt(etch.comments || []);
    getProfilePics(etch.comments || []);
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
          <TextArea
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
              userName={owner}
              description={comment}
              commentedAt={timestamp}
              key={idx}
              addr={addr}
              imgUrl={profilePics[addr]}
            />
          );
        })}
    </div>
  );
};

export default Comments;
