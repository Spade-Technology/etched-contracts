import { api } from "../api";
import { toast } from "@/components/ui/use-toast";
import { useContext, useState } from "react";
import { refetchContext } from "../urql";

import { orgUser } from "@/types";
import { sleep } from "../common";
import { useLoggedInAddress } from "./useSignIn";

function enableBeforeUnload() {
  window.onbeforeunload = function (e) {
    return "Discard changes?";
  };
}
function disableBeforeUnload() {
  window.onbeforeunload = null;
}

export const useTransferOwnershipOrg = ({
  setOpenEditOrgModal,
  orgId,
}: {
  setOpenEditOrgModal: (arg: boolean) => void;
  orgId: string;
}) => {
  const { addOperation, setOperation, refetchOrganisations } = useContext(refetchContext);
  const [ownerData, setOwnerData] = useState<orgUser[]>([]);
  const { mutateAsync: transferOwnershipAsync, isLoading } = api.org.transferOwnership.useMutation();
  const from = useLoggedInAddress();

  const transferOwnership = async (e: any) => {
    e.preventDefault();
    if (!ownerData[0]?.id) {
      setOpenEditOrgModal(false);
      return;
    }

    enableBeforeUnload();
    const opName = `Transfering the ownership of the Organisation ${orgId}`;
    const opId = addOperation({
      name: opName,
      status: "Updating the organisation",
      progress: 0,
      statusType: "loading",
      timestamp: Date.now(),
    });
    try {
      await transferOwnershipAsync({
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
        from,
        orgId: +orgId,
        to: ownerData[0].id,
      });
      setOperation(opId, {
        name: opName,
        status: "Done",
        progress: 100,
        statusType: "success",
      });
      toast({
        title: "The ownership of your organisation has been transferred, and will be visible shortly.",
        description: "successfull",
        variant: "success",
      });
      setOpenEditOrgModal(false);
      await sleep(10000);

      refetchOrganisations();
    } catch (e: any) {
      console.error(e);
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
      setOperation(opId, {
        name: opName,
        status: "Something went wrong",
        statusType: "error",
        error: (e.message || e.code || "Unknown error") as string,
      });
    }
    disableBeforeUnload();
    setOpenEditOrgModal(false);
  };

  return { isLoading, ownerData, setOwnerData, transferOwnership };
};
