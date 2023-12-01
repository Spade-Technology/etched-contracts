import { api } from "../api";
import { toast } from "@/components/ui/use-toast";
import { useContext, useState } from "react";
import { refetchContext } from "../urql";

import { orgUser } from "@/types";
import { findUserDifferences } from "../user";
import { sleep } from "../common";

function enableBeforeUnload() {
  window.onbeforeunload = function (e) {
    return "Discard changes?";
  };
}
function disableBeforeUnload() {
  window.onbeforeunload = null;
}

export const useUpdateOrg = ({ name, members, orgId }: { name: string; members: orgUser[]; orgId: string }) => {
  const { addOperation, setOperation, refetchOrganisations } = useContext(refetchContext);
  const [orgName, setOrgName] = useState(name || "");
  const [orgMembers, setOrgMembers] = useState<orgUser[]>(members);
  const [orgData, setOrgData] = useState<FormData | any>({});
  const [updateDone, setUpdateDone] = useState(false);

  const { mutateAsync: renameOrgAsync, isLoading: renameIsLoading } = api.org.renameOrg.useMutation();
  const { mutateAsync: setPermissionsOrgAsync, isLoading: setPermissionsIsLoading } = api.org.setPermissionsOrg.useMutation();

  const updateOrg = async (e: any) => {
    e.preventDefault();
    if (orgMembers.length < 1 && orgName === name) {
      setUpdateDone(true);
      return;
    }

    enableBeforeUnload();
    const opName = `Updating the Organisation ${name}`;
    let progress = 0;
    const step = orgMembers.length < 1 !== (orgName === name) ? 50 : 33;
    const opId = addOperation({
      name: opName,
      status: "Updating the Organisation",
      progress,
      statusType: "loading",
      timestamp: Date.now(),
    });

    try {
      const newPermissions = findUserDifferences(members as orgUser[], orgMembers) as orgUser[];
      setOrgData({ orgName, orgMembers });
      if (orgName !== name) {
        progress += step;
        setOperation(opId, {
          name: opName,
          status: "Updating the Organisation name",
          progress,
          statusType: "loading",
        });
        await renameOrgAsync({
          blockchainSignature: localStorage.getItem("blockchainSignature")!,
          blockchainMessage: localStorage.getItem("blockchainMessage")!,
          orgId: +orgId,
          orgName,
        });
      }
      if (newPermissions.length) {
        progress += step;
        setOperation(opId, {
          name: opName,
          status: "Updating the Organisation permissions",
          progress,
          statusType: "loading",
        });
        await setPermissionsOrgAsync({
          blockchainSignature: localStorage.getItem("blockchainSignature")!,
          blockchainMessage: localStorage.getItem("blockchainMessage")!,
          orgId: +orgId,
          orgMembers: newPermissions,
        });
      }
      setOperation(opId, {
        name: opName,
        status: "Done",
        progress: 100,
        statusType: "success",
      });
      toast({
        title: "Your organisation has been updated, and will be visible shortly.",
        description: "successfull",
        variant: "success",
      });
      setUpdateDone(true);

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

    setUpdateDone(true);
  };

  const isLoading = renameIsLoading || setPermissionsIsLoading;

  return { updateOrg, isLoading, setOrgName, setOrgMembers, orgData, setOrgData, updateDone, setUpdateDone, orgMembers, orgName };
};
