import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TeamInputDropdown, UsersInputDropdown } from "@/components/ui/input-dropdown";
import { Label } from "@/components/ui/label";
import { Etch } from "@/gql/graphql";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import { GoodIcon } from "@/components/icons/good";
import { api } from "@/utils/api";
import { findUserDifferences } from "@/utils/user";
import { teamUser } from "@/types";
import { removeAmpersandAndtransformToCamelCase } from "@/utils/team";
import { toast } from "@/components/ui/use-toast";
import { shortenAddress } from "@/utils/hooks/address";

type UserProps = {
  show: boolean;
  setShow: any;
  etch: Etch;
};

//   Type '{ id: number; name: string; image: any; link: string; }' is not assignable to type 'ProfileProps'.
export type ProfileProps = {
  id: number;
  name?: string;
  image?: any;
  link?: string;
  role?: string;
};

const roleData = ["read", "read & write"];
const permissions = ["none", ...roleData];

const AddUser = ({ show, setShow, etch }: UserProps) => {
  const [permissionTo, setPermissaionTo] = useState("individual");
  const { mutateAsync: setIndividualPermissionsAsync, isLoading: isSettingIndivPermLoading } =
    api.etch.setIndividualPermissionsBulk.useMutation();

  const { mutateAsync: setTeamPermissionsAsync, isLoading: isSettingTeamPermLoading } =
    api.etch.setTeamPermissionsBulk.useMutation();
  const isLoading = isSettingIndivPermLoading || isSettingTeamPermLoading;

  const [selectedUsers, setSelectedUsers] = useState<teamUser[]>(
    etch?.permissions
      ?.filter((perm) => !!perm.wallet)
      .map((perm) => ({
        id: perm.wallet?.id,
        name: perm.wallet?.etchENS[0]?.name || "",
        role: permissions[perm.permissionLevel],
      })) as teamUser[]
  );

  const editUserRole = ({ id, item }: { id: string; item: "none" | "read" | "readWrite" }) => {
    const user = selectedUsers?.find((profile: any) => profile.id === id);
    if (user) user.role = item;
    setSelectedUsers([...selectedUsers]);
  };

  const removeUserAccess = (id: string) => {
    if (etch?.permissions?.find((perm) => perm.wallet?.id === id)) {
      const user = selectedUsers?.find((profile) => profile.id === id);
      if (user) user.role = "none";
      setSelectedUsers([...selectedUsers]);
    } else {
      const users = selectedUsers?.filter((profile) => profile.id !== id);
      setSelectedUsers(users);
    }
  };

  const [selectedTeams, setSelectedTeams] = useState<teamUser[]>(
    etch?.permissions
      ?.filter((perm) => !!perm.team)
      .map((perm) => ({
        id: perm.team?.teamId,
        name: perm.team?.name || "",
        role: permissions[perm.permissionLevel],
      })) as teamUser[]
  );

  const editTeamRole = ({ id, item }: { id: string; item: "none" | "read" | "readWrite" }) => {
    const team = selectedTeams?.find((profile: any) => profile.id === id);
    if (team) team.role = item;
    setSelectedTeams([...selectedTeams]);
  };

  const removeTeamAccess = (id: string) => {
    if (etch?.permissions?.find((perm) => perm.team?.teamId === id)) {
      const team = selectedTeams?.find((profile) => profile.id === id);
      if (team) team.role = "none";
      setSelectedTeams([...selectedTeams]);
    } else {
      const teams = selectedTeams?.filter((profile) => profile.id !== id);
      setSelectedTeams(teams);
    }
  };

  const permissionHandler = async (e: any) => {
    e.preventDefault();
    if (permissionTo === "individual") {
      const newPermissions = findUserDifferences(
        etch.permissions
          ?.filter((perm) => !!perm.wallet)
          .map((perm) => ({
            id: perm.wallet?.id,
            name: perm.wallet?.etchENS[0]?.name || "",
            role: permissions[perm.permissionLevel],
          })) as teamUser[],
        selectedUsers
      ) as teamUser[];

      await setIndividualPermissionsAsync({
        etchId: +etch.tokenId,
        users: newPermissions.map(({ id, name, role }) => ({
          id,
          name,
          role: removeAmpersandAndtransformToCamelCase(role),
        })) as teamUser[],
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
      });
    }
    if (permissionTo === "team") {
      const newPermissions = findUserDifferences(
        etch.permissions
          ?.filter((perm) => !!perm.team)
          .map((perm) => ({
            id: perm.team?.teamId,
            name: perm.team?.name || "",
            role: permissions[perm.permissionLevel],
          })) as teamUser[],
        selectedTeams
      ) as any[];

      await setTeamPermissionsAsync({
        etchId: +etch.tokenId,
        teams: newPermissions.map(({ teamId, role }) => ({
          teamId,
          role: removeAmpersandAndtransformToCamelCase(role) as "none" | "read" | "readWrite",
        })),
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
      });
    }
    toast({
      title: "Permissions Updated",
      description: "successfull",
      variant: "success",
    });
    setShow(false);
  };

  return (
    <Dialog open={show} onOpenChange={(x) => setShow(x)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-normal text-[#6D6D6D]">Invite users and teams</DialogTitle>
          <DialogDescription className="text-[#6D6D6D]">
            <Label className="font-semibold">Select</Label>
            <section className="mb-7 mt-[9px] flex gap-5">
              {["individual", "team"].map((item, id) => {
                return (
                  <div key={id} onClick={() => setPermissaionTo(item)} className="flex items-center gap-1">
                    <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-[1px] border-muted-foreground">
                      <div
                        className={`${
                          permissionTo == item ? "scale-100" : "scale-0"
                        } h-3 w-3 rounded-full bg-primary duration-300`}
                      ></div>
                    </div>
                    <div
                      className={`text-sm font-medium capitalize text-muted-foreground ${
                        permissionTo == item ? "!text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {item}
                    </div>
                  </div>
                );
              })}
            </section>

            {permissionTo === "individual" && (
              <>
                <Label className="font-semibold">Allow user</Label>
                <UsersInputDropdown
                  placeholder="ex: astrew.etched"
                  type={"multiSelect"}
                  roleData={roleData}
                  selectedItems={selectedUsers}
                  setSelectedItems={setSelectedUsers}
                />

                <section>
                  {selectedUsers?.length > 0 && (
                    <div className="mt-3 rounded-[6px] bg-[#F3F5F5] p-3">
                      {selectedUsers.map(({ id, name, role }) => {
                        return (
                          <section className="flex items-center justify-between">
                            <div
                              key={id}
                              className=" flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:text-accent-foreground "
                            >
                              {name || shortenAddress({ address: id })}
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant={"ghost"}
                                  className="float-right flex justify-between gap-2 border-none bg-transparent text-[#6D6D6D] hover:bg-transparent"
                                >
                                  {role} <Icons.dropdownIcon />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className=" items-start p-1">
                                <DropdownMenuGroup>
                                  {[...roleData, "Remove access"].map((item, idx) => {
                                    return (
                                      <DropdownMenuItem
                                        key={idx}
                                        // @ts-ignore
                                        onClick={() => (idx !== 2 ? editUserRole({ id, item }) : removeUserAccess(id))}
                                        className={`flex cursor-default items-center justify-center gap-[7px] rounded-sm p-1 text-xs capitalize text-accent-foreground  ${
                                          idx < 2
                                            ? "hover:bg-accent"
                                            : "cursor-pointer rounded-none border-t-[1px] border-black border-s-stone-50 text-[#f55] hover:rounded-sm hover:border-none hover:bg-red-50 hover:!text-[#f55]"
                                        }`}
                                        textValue="Jim Carlos"
                                      >
                                        <GoodIcon className={role === item ? "" : "hidden"} />
                                        {item}
                                      </DropdownMenuItem>
                                    );
                                  })}
                                </DropdownMenuGroup>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </section>
                        );
                      })}
                    </div>
                  )}
                </section>
              </>
            )}
            {permissionTo === "team" && (
              <>
                <Label className="font-semibold">Allow team</Label>
                <TeamInputDropdown
                  placeholder="ex: team1"
                  type={"multiSelect"}
                  roleData={roleData}
                  selectedItems={selectedTeams}
                  setSelectedItems={setSelectedTeams}
                />

                <section>
                  {selectedTeams?.length > 0 && (
                    <div className="mt-3 rounded-[6px] bg-[#F3F5F5] p-3">
                      {selectedTeams.map(({ id, name, role }) => {
                        return (
                          <section className="flex items-center justify-between">
                            <div
                              key={id}
                              className=" flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:text-accent-foreground "
                            >
                              {name}
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant={"ghost"}
                                  className="float-right flex justify-between gap-2 border-none bg-transparent text-[#6D6D6D] hover:bg-transparent"
                                >
                                  {role} <Icons.dropdownIcon />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className=" items-start p-1">
                                <DropdownMenuGroup>
                                  {[...roleData, "Remove access"].map((item, idx) => {
                                    return (
                                      <DropdownMenuItem
                                        key={idx}
                                        // @ts-ignore
                                        onClick={() => (idx !== 2 ? editTeamRole({ id, item }) : removeTeamAccess(id))}
                                        className={`flex cursor-default items-center justify-center gap-[7px] rounded-sm p-1 text-xs capitalize text-accent-foreground  ${
                                          idx < 2
                                            ? "hover:bg-accent"
                                            : "cursor-pointer rounded-none border-t-[1px] border-black border-s-stone-50 text-[#f55] hover:rounded-sm hover:border-none hover:bg-red-50 hover:!text-[#f55]"
                                        }`}
                                        textValue="Jim Carlos"
                                      >
                                        <GoodIcon className={role === item ? "" : "hidden"} />
                                        {item}
                                      </DropdownMenuItem>
                                    );
                                  })}
                                </DropdownMenuGroup>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </section>
                        );
                      })}
                    </div>
                  )}
                </section>
              </>
            )}
          </DialogDescription>

          <DialogFooter>
            <Button type="submit" className="mt-5 gap-3 rounded-lg" onClick={permissionHandler} isLoading={isLoading}>
              Done
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddUser;
