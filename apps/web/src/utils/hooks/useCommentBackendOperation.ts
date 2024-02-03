import { toast } from "@/components/ui/use-toast";
import { currentNetworkId } from "@/contracts";
import { useContext, useState } from "react";
import { z } from "zod";
import { api } from "../api";
import { sleep } from "../common";
import { refetchContext } from "../urql";
import { publicClient } from "../wagmi";
import { useLoggedInAddress, useSignIn } from "./useSignIn";

const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  file: z.any(),
});

type FormData = z.infer<typeof formSchema>;

function enableBeforeUnload() {
  window.onbeforeunload = function (e) {
    return "Discard changes?";
  };
}
function disableBeforeUnload() {
  window.onbeforeunload = null;
}

export const useCommentEtch = (etchName: string | undefined, etchId: string) => {
  const { mutateAsync: encryptAsync, isLoading: encryptLoading } = api.etch.uploadAndEncryptString.useMutation();
  const { mutateAsync: commentOnEtchAsync, isLoading: commentOnEtchLoading } = api.etch.commentOnEtch.useMutation();

  const { addOperation, setOperation, refetchEtch } = useContext(refetchContext);
  const { regenerateAuthSig } = useSignIn();
  const owner = useLoggedInAddress();
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addComment = async () => {
    if (!newComment) {
      toast({
        title: "Comment is required",
        description: "Please try again",
        variant: "destructive",
      });
      return;
    }
    enableBeforeUnload();
    setIsLoading(true);
    const name = `Commenting the etch ${etchName || etchId}`;
    const opId = addOperation({
      name,
      status: "Encrypting the comment",
      progress: 0,
      statusType: "loading",
      timestamp: Date.now(),
    });

    try {
      const authSig = await regenerateAuthSig();

      const { ipfsCid } = await encryptAsync({
        etchId,
        authSig,
        str: newComment,
      });

      if (!ipfsCid) {
        toast({
          title: "Encryption failed",
          description: "Please try again",
          variant: "destructive",
        });
        return;
      }

      setOperation(opId, {
        name,
        status: "Saving the comment",
        progress: 50,
        statusType: "loading",
      });

      const res = await commentOnEtchAsync({
        etchId,
        ipfsCid,
        owner,
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
      });

      const receipt = await publicClient({ chainId: currentNetworkId }).waitForTransactionReceipt({
        hash: res.tx,
      });

      console.log(receipt);

      setIsLoading(false);

      setOperation(opId, {
        name,
        status: "Done",
        progress: 100,
        statusType: "success",
      });

      toast({
        title: "Etch Commented",
        description: "Your comment has been created, and will be visible shortly.",
        variant: "success",
      });
      setNewComment("");

      await sleep(5000);

      refetchEtch();
    } catch (e: any) {
      console.error(e);
      setIsLoading(false);
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
      setOperation(opId, {
        name,
        status: "Something went wrong",
        statusType: "error",
        error: (e.message || e.code || "Unknown error") as string,
      });
    }
    disableBeforeUnload();
  };

  return { addComment, isLoading: encryptLoading || commentOnEtchLoading || isLoading, newComment, setNewComment };
};
