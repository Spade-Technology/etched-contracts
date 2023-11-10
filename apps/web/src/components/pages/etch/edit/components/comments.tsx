import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { lit } from "@/lit";
import { api } from "@/utils/api";
import { useLoggedInAddress, useSignIn } from "@/utils/hooks/useSignIn";
import Image from "next/image";
import Placeholder from "public/icons/dashboard/placeholder2.svg";
import { useEffect, useState } from "react";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { Etch, EtchCommentAdded } from "@/gql/graphql";
import Avatar from "boring-avatars";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

type CommentProps = {
  image: any;
  userName: string;
  description: string;
  commentedAt: string;
};

const Comment = ({ image, userName, description, commentedAt }: CommentProps) => {
  return (
    <div className="flex justify-start gap-3 py-5">
      <Image src={image} alt="profile-pic" className="align-top" />
      <div>
        <div className="flex justify-start gap-3">
          <div>{userName}</div>
          <div>{commentedAt}</div>
        </div>
        <div className="pt-2">{description}</div>
      </div>
    </div>
  );
};

const Comments = ({ etch }: { etch: Partial<Etch> }) => {
  const [enableSubmit, setEnableSubmit] = useState<boolean>(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<{ comment: string; timestamp: number; owner: string }[]>([]);

  const { regenerateAuthSig } = useSignIn();
  const owner = useLoggedInAddress();

  const { mutateAsync: encryptAsync, isLoading: encryptLoading } = api.etch.uploadAndEncryptString.useMutation();
  const { mutateAsync: commentOnEtchAsync, isLoading: commentOnEtchLoading } = api.etch.commentOnEtch.useMutation();

  const isLoading = encryptLoading || commentOnEtchLoading;

  const handleComment = (evt: any) => {
    const input = evt.target.value;
    if (input && input.length > 0) {
      setNewComment(input);
    } else {
      setNewComment("");
    }
  };

  const addComment = async () => {
    if (newComment) {
      const authSig = await regenerateAuthSig();

      const { ipfsCid } = await encryptAsync({
        etchId: etch.tokenId,
        authSig,
        str: newComment,
      });

      await commentOnEtchAsync({
        etchId: etch.tokenId,
        ipfsCid,
        owner,
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
      });

      setNewComment("");
      setEnableSubmit(false);
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
        setComments((old) => [
          ...old,
          {
            comment: decryptedComment,
            timestamp: comment.comment_timestamp,
            owner: comment.owner.etchENS[0]?.name || comment.owner.id,
          },
        ]);
    });
  };

  useEffect(() => {
    setComments([]);
    decrypt(etch.comments || []);
  }, [etch.comments]);

  return (
    <div className="my-6 rounded-2xl bg-[#F3F5F5] p-7 text-[#6D6D6D]">
      <div className="text-xl font-semibold">{comments.length} Comments</div>

      <div className=" py-5">
        <div className="flex justify-start gap-3">
          <div className="flex cursor-pointer gap-1">
            {/* <Image src={Placeholder} alt="placeholder" className="my-auto" /> */}
            {/* <Icons.dropdownIcon className="my-auto mt-4" /> */}
            <Avatar size={40} name={owner} variant="beam" colors={["#077844", "#147c60", "#f1f5f9", "#6b9568", "#64748b"]} />
          </div>
          <Input placeholder="Add a comment" value={newComment} onChange={handleComment} />
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

                <Button className="rounded-lg" disabled={!newComment} onClick={addComment} isLoading={isLoading}>
                  <PaperPlaneIcon />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {comments &&
        comments.length > 0 &&
        comments.map(({ comment, timestamp, owner }, idx) => {
          return (
            <Comment
              image={Placeholder}
              userName={owner}
              description={comment}
              commentedAt={new Date(timestamp * 1000).toDateString()}
              key={idx}
            />
          );
        })}
    </div>
  );
};

export default Comments;
