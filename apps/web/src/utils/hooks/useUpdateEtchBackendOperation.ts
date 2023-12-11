import { toast } from "@/components/ui/use-toast";
import { Etch } from "@/gql/graphql";
import { useContext, useState } from "react";
import { api } from "../api";
import { sleep } from "../common";
import { refetchContext } from "../urql";

function enableBeforeUnload() {
  window.onbeforeunload = function (e) {
    return "Discard changes?";
  };
}
function disableBeforeUnload() {
  window.onbeforeunload = null;
}

export const useUpdateEtch = (setEdit: (arg: boolean) => void, etch?: Partial<Etch>) => {
  const { mutateAsync: updateAsync, isLoading } = api.etch.updateMetadata.useMutation();
  const { addOperation, setOperation, refetchEtch } = useContext(refetchContext);
  const [documentName, setDocumentName] = useState(etch?.documentName || "");
  const [description, setDescription] = useState(etch?.description || "");

  const updateEtch = async () => {
    if (documentName === etch?.documentName && description === (etch?.description || "")) {
      setEdit(false);

      return;
    }
    enableBeforeUnload();
    const name = `Updating the etch ${etch?.documentName || etch?.tokenId}`;
    const opId = addOperation({
      name,
      status: "Updating the etch",
      progress: 0,
      statusType: "loading",
      timestamp: Date.now(),
    });
    try {
      await updateAsync({
        etchId: etch?.tokenId.toString(),
        fileName: documentName || etch?.documentName || "",
        description: description || etch?.description || "",
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
      });
      setOperation(opId, {
        name,
        status: "Done",
        progress: 100,
        statusType: "success",
      });
      toast({
        title: "Etch Updated",
        description: "Your etch has been updated, and will be visible shortly.",
        variant: "success",
      });

      setEdit(false);
      await sleep(5000);

      refetchEtch();
    } catch (e: any) {
      console.error(e);
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
    setEdit(false);
  };

  return { updateEtch, isLoading, setDocumentName, setDescription };
};
