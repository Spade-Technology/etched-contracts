import { toast } from "@/components/ui/use-toast";
import { useContext, useState } from "react";
import { api } from "../api";
import { refetchContext } from "../urql";

import { teamUser } from "@/types";
import { sleep } from "../common";
import { removeAmpersandAndtransformToCamelCase } from "../team";
import { findUserDifferences } from "../user";

function enableBeforeUnload() {
  window.onbeforeunload = function (e) {
    return "Discard changes?";
  };
}
function disableBeforeUnload() {
  window.onbeforeunload = null;
}

export const useUpdateTeam = ({ name, members, teamId }: { name: string; members: teamUser[]; teamId: string }) => {
  const { addOperation, setOperation, refetchTeams } = useContext(refetchContext);

  const [teamName, setTeamName] = useState(name || "");
  const [teamMembers, setTeamMembers] = useState<teamUser[]>(members);

  const { mutateAsync: renameTeamAsync, isLoading: renameIsLoading } = api.team.renameTeam.useMutation();
  const { mutateAsync: setPermissionsTeamAsync, isLoading: setPermissionsIsLoading } = api.team.setPermissionsTeam.useMutation();

  const [updateDone, setUpdateDone] = useState(false);
  const isLoading = renameIsLoading || setPermissionsIsLoading;

  const updateTeam = async (e: any) => {
    e.preventDefault();
    if (teamMembers.length < 1 && teamName === name) {
      setUpdateDone(true);
      return;
    }

    enableBeforeUnload();
    const opName = `Updating the team ${name}`;
    let progress = 0;
    const step = teamMembers.length < 1 !== (teamName === name) ? 50 : 33;
    const opId = addOperation({
      name: opName,
      status: "Updating the team",
      progress,
      statusType: "loading",
      timestamp: Date.now(),
    });

    try {
      const newPermissions = findUserDifferences(members as teamUser[], teamMembers) as teamUser[];

      if (teamName !== name) {
        progress += step;
        setOperation(opId, {
          name: opName,
          status: "Updating the team name",
          progress,
          statusType: "loading",
        });
        await renameTeamAsync({
          blockchainSignature: localStorage.getItem("blockchainSignature")!,
          blockchainMessage: localStorage.getItem("blockchainMessage")!,
          teamId: +teamId,
          teamName,
        });
      }

      if (newPermissions.length) {
        progress += step;
        setOperation(opId, {
          name: opName,
          status: "Updating the team permissions",
          progress,
          statusType: "loading",
        });
        await setPermissionsTeamAsync({
          blockchainSignature: localStorage.getItem("blockchainSignature")!,
          blockchainMessage: localStorage.getItem("blockchainMessage")!,
          teamId: +teamId,
          teamMembers: newPermissions.map(({ id, name, role }) => ({
            id,
            name,
            role: removeAmpersandAndtransformToCamelCase(role),
          })) as teamUser[],
        });
      }
      setOperation(opId, {
        name: opName,
        status: "Done",
        progress: 100,
        statusType: "success",
      });
      toast({
        title: "Your team has been updated, and will be visible shortly.",
        description: "successfull",
        variant: "success",
      });
      setUpdateDone(true);

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
    setUpdateDone(true);
  };

  return {
    setTeamName,
    setTeamMembers,
    updateDone,
    setUpdateDone,
    updateTeam,
    isLoading,
    teamName,
    teamMembers,
  };
};
