import { z } from "zod";
import { api } from "../api";
import { useSignIn } from "./useSignIn";
import { getSelectedTeam } from "@/components/team-selector";
import { useUploadThing } from "../uploadthing";
import { toast } from "@/components/ui/use-toast";
import { useContext, useState } from "react";
import { refetchContext } from "../urql";

// const useOperation = () = {

// }

const formSchema = z.object({
  etchTitle: z.string(),
  etchDescription: z.string(),
  etchFile: z.any(),
  etchVisibility: z.boolean(),
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

export const useCreateEtch = () => {
  const { mutateAsync: mintAsync, isLoading: mintLoading } = api.etch.mintEtch.useMutation();
  const { mutateAsync: encryptAsync, isLoading: encryptLoading } = api.etch.uploadAndEncrypt.useMutation();
  const { mutateAsync: updateAsync, isLoading: updateLoading } = api.etch.setMetadata.useMutation();
  const { startUpload, isUploading } = useUploadThing("EtchUpload");
  const { addOperation, setOperation, refetchEtches } = useContext(refetchContext);
  const { regenerateAuthSig } = useSignIn();
  const [etchCreated, setEtchCreated] = useState("");

  const onSubmit = async (data: FormData): Promise<void> => {
    const opId = addOperation({
      name: "Creation of " + data.etchTitle,
      status: "Uploading file",
      progress: 0,
      statusType: "loading",
      timestamp: Date.now(),
    });

    enableBeforeUnload();

    try {
      const uploaded = await startUpload([data.etchFile]);

      setOperation(opId, {
        name: "Creation of " + data.etchTitle,
        status: "Generating Signatures",
        progress: 20,
        statusType: "loading",
      });
      const authSig = await regenerateAuthSig();

      setOperation(opId, {
        name: "Creation of " + data.etchTitle,
        status: "Minting Etch",
        progress: 40,
        statusType: "loading",
      });
      const etchId = await mintAsync({
        fileName: data.etchTitle,
        fileDescription: data.etchDescription,

        team: getSelectedTeam().id,
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
      });

      setEtchCreated(data.etchTitle);

      if (!uploaded || !uploaded[0]) {
        toast({
          title: "Upload failed",
          description: "Please try again",
          variant: "destructive",
        });
        return;
      }

      setOperation(opId, {
        name: "Creation of " + data.etchTitle,
        status: "Encrypting file",
        progress: 60,
        statusType: "loading",
      });
      const { ipfsCid } = await encryptAsync({
        etchId: etchId.toString(),
        fileUrl: uploaded[0].fileUrl,
        authSig,
      });

      setOperation(opId, {
        name: "Creation of " + data.etchTitle,
        status: "Setting metadata",
        progress: 80,
        statusType: "loading",
      });
      await updateAsync({
        etchId: etchId.toString(),
        fileName: data.etchTitle,
        ipfsCid,
        description: data.etchDescription,
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
      });

      setOperation(opId, {
        name: "Creation of " + data.etchTitle,
        status: "Done",
        progress: 100,
        statusType: "success",
      });
      refetchEtches();
      toast({
        title: "Etch created",
        description: "Your etch has been created",
        variant: "success",
      });
      disableBeforeUnload();
    } catch (e: any) {
      console.error(e);
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
      setOperation(opId, {
        name: "Creation of " + data.etchTitle,
        status: "Something went wrong",
        statusType: "error",
        error: (e.message || e.code || "Unknown error") as string,
      });
      disableBeforeUnload();
    }
  };

  const isLoading: boolean = mintLoading || updateLoading || encryptLoading || isUploading;

  return { onSubmit, isLoading, etchCreated, setEtchCreated };
};
