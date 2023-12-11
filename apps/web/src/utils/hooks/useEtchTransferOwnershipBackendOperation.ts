import { toast } from "@/components/ui/use-toast";
import { useContext, useState } from "react";
import { api } from "../api";
import { refetchContext } from "../urql";

import { Team } from "@/gql/graphql";
import { teamUser } from "@/types";
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

export const useTransferOwnershipEtch = ({
  setOpenDialog,
  etchId,
}: {
  setOpenDialog: (arg: boolean) => void;
  etchId: number;
}) => {
  const { addOperation, setOperation, refetchEtch } = useContext(refetchContext);

  const [owner, setOwner] = useState("individual");
  const [newTeam, setNewTeam] = useState<Team[]>([]);
  const [newIndiv, setNewIndiv] = useState<teamUser[]>([]);

  const { mutateAsync: transferToTeamAsync, isLoading: isTransferToTeamLoading } = api.etch.transferToTeam.useMutation();
  const { mutateAsync: transferToIndividualAsync, isLoading: isTransferToIndivLoading } =
    api.etch.transferToIndividual.useMutation();
  const isLoading = isTransferToTeamLoading || isTransferToIndivLoading;

  const from = useLoggedInAddress();

  const transferOwnership = async (e: any) => {
    e.preventDefault();

    if (!newTeam.length && !newIndiv.length) {
      setOpenDialog(false);
      return;
    }
    enableBeforeUnload();
    const opName = `Transfering the ownership of the etch ${etchId}`;
    const opId = addOperation({
      name: opName,
      status: "Updating the team",
      progress: 0,
      statusType: "loading",
      timestamp: Date.now(),
    });
    try {
      if (owner === "team") {
        const { teamId } = newTeam[0] as Team;

        await transferToTeamAsync({
          blockchainSignature: localStorage.getItem("blockchainSignature")!,
          blockchainMessage: localStorage.getItem("blockchainMessage")!,
          teamId: +teamId,
          tokenId: +etchId,
        });
      } else if (owner === "individual") {
        const { id } = newIndiv[0] as teamUser;

        await transferToIndividualAsync({
          blockchainSignature: localStorage.getItem("blockchainSignature")!,
          blockchainMessage: localStorage.getItem("blockchainMessage")!,
          tokenId: +etchId,
          to: id,
          from,
        });
      }
      setOperation(opId, {
        name: opName,
        status: "Done",
        progress: 100,
        statusType: "success",
      });
      toast({
        title: "The ownership of your etch has been transferred, and will be visible shortly.",
        description: "successfull",
        variant: "success",
      });
      setOpenDialog(false);

      await sleep(10000);

      refetchEtch();
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
    setOpenDialog(false);
  };

  return {
    transferOwnership,
    isLoading,
    owner,
    setOwner,
    newTeam,
    setNewTeam,
    newIndiv,
    setNewIndiv,
  };
};
