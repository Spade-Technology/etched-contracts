import { toast } from "@/components/ui/use-toast";
import { useContext, useState } from "react";
import { api } from "../api";
import { refetchContext } from "../urql";

import { Organisation } from "@/gql/graphql";
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

export const useTransferOwnershipTeam = ({
  setOpenEditTeamModal,
  teamId,
}: {
  setOpenEditTeamModal: (arg: boolean) => void;
  teamId: string;
}) => {
  const { addOperation, setOperation, refetchTeams } = useContext(refetchContext);

  const [owner, setOwner] = useState("individual");
  const [newOrg, setNewOrg] = useState<Organisation[]>([]);
  const [newIndiv, setNewIndiv] = useState<teamUser[]>([]);

  const { mutateAsync: transferToOrganisationAsync, isLoading: isTransferToOrgLoading } =
    api.team.transferToOrganisation.useMutation();
  const { mutateAsync: transferToIndividualAsync, isLoading: isTransferToIndivLoading } =
    api.team.transferToIndividual.useMutation();

  const isLoading = isTransferToOrgLoading || isTransferToIndivLoading;

  const from = useLoggedInAddress();

  const transferOwnership = async (e: any) => {
    e.preventDefault();
    if (!newOrg.length && !newIndiv.length) {
      setOpenEditTeamModal(false);
      return;
    }

    enableBeforeUnload();
    const opName = `Transfering the ownership of the team ${teamId}`;
    const opId = addOperation({
      name: opName,
      status: "Updating the team",
      progress: 0,
      statusType: "loading",
      timestamp: Date.now(),
    });
    try {
      if (owner === "organization") {
        const { orgId } = newOrg[0] as Organisation;

        await transferToOrganisationAsync({
          blockchainSignature: localStorage.getItem("blockchainSignature")!,
          blockchainMessage: localStorage.getItem("blockchainMessage")!,
          teamId: +teamId,
          orgId: +orgId,
        });
      } else if (owner === "individual") {
        const { id } = newIndiv[0] as teamUser;

        await transferToIndividualAsync({
          blockchainSignature: localStorage.getItem("blockchainSignature")!,
          blockchainMessage: localStorage.getItem("blockchainMessage")!,
          teamId: +teamId,
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
        title: "The ownership of your team has been transferred, and will be visible shortly.",
        description: "successfull",
        variant: "success",
      });
      setOpenEditTeamModal(false);

      await sleep(10000);

      refetchTeams();
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
    setOpenEditTeamModal(false);
  };
  return {
    owner,
    setOwner,
    newOrg,
    setNewOrg,
    newIndiv,
    setNewIndiv,
    transferOwnership,
    isLoading,
  };
};
