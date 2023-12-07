import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { lit } from "@/lit";
import { useLoggedInAddress, useSignIn } from "@/utils/hooks/useSignIn";
import Placeholder from "public/icons/dashboard/placeholder2.svg";
import { useEffect, useRef, useState } from "react";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { Etch, EtchCommentAdded } from "@/gql/graphql";
import Avatar from "boring-avatars";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { shortenAddress } from "@/utils/hooks/address";
import { useCommentEtch } from "@/utils/hooks/useCommentBackendOperation";
import { TeaxtArea } from "@/components/ui/autoresize-textarea";

type CommentProps = {
  image: any;
  userName: string;
  description: string;
  commentedAt: string;
  addr: string;
};

const Comment = ({ image, userName, description, commentedAt, addr }: CommentProps) => {
  return (
    <div className="flex justify-start gap-3 py-5">
      <Avatar size={40} name={addr} variant="beam" colors={["#077844", "#147c60", "#f1f5f9", "#6b9568", "#64748b"]} />
      <div>
        <div className="flex items-center gap-3">
          <div className='text-muted-foreground pt-2 text-base font-semibold'>{userName}</div>
          <div className='text-muted-foreground pt-2 text-base font-nornal'>{commentedAt}</div>
        </div>
        <div className="whitespace-pre-wrap text-muted-foreground pt-2 text-base font-medium">{description}</div>
      </div>
    </div>
  );
};

const Comments = ({ etch }: { etch: Partial<Etch> }) => {
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

  return (
    <div className="my-6 rounded-2xl bg-[#F3F5F5] p-7 text-[#6D6D6D]">
      <div className="text-xl font-semibold">{Object.keys(comments).length} Comments</div>

      <div className=" py-5">
        <div className="flex justify-start gap-3">
          <div className="flex cursor-pointer gap-1">
            {/* <Image src={Placeholder} alt="placeholder" className="my-auto" /> */}
            {/* <Icons.dropdownIcon className="my-auto mt-4" /> */}
            <Avatar
              size={40}
              name={owner.toLowerCase()}
              variant="beam"
              colors={["#077844", "#147c60", "#f1f5f9", "#6b9568", "#64748b"]}
            />
          </div>
          <TeaxtArea disabled={isLoading} placeholder="Add a comment" value={newComment} onChange={handleComment} />
          {newComment && (
            <div className="float-right">
              <div className="flex justify-start gap-5">
                {/* <Button
                  className="border-none bg-transparent text-[#6D6D6D]"
                  disabled={!newComment}
                  onClick={() => {
                    setNewComment("");
                  }}
                >
                  X
                </Button> */}

                <Button
                  className={`rounded-lg duration-500 ${
                    !newComment ? " translate-x-[-60px] opacity-0" : " translate-x-0 opacity-100"
                  }`}
                  onClick={addComment}
                  isLoading={isLoading}
                >
                  <PaperPlaneIcon />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {comments &&
        Object.keys(comments).length > 0 &&
        Object.values(comments).map(({ comment, timestamp, owner, addr }, idx) => {
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
