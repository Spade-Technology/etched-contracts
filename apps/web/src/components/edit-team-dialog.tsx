import { Input } from "@/components/ui/input";
import { Organisation, TeamOwnership } from "@/gql/graphql";
import { teamUser } from "@/types";
import React, { useState } from "react";
import { BarIcon } from "./icons/bar";
import { DeleteIcon } from "./icons/delete";
import { GoodIcon } from "./icons/good";
import { TransferIcon } from "./icons/transfer";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Icons } from "./ui/icons";
import { OrgInputDropdown, UsersInputDropdown } from "./ui/input-dropdown";
import { Label } from "./ui/label";

import { shortenAddress } from "@/utils/hooks/address";
import { useTransferOwnershipTeam } from "@/utils/hooks/useTeamTransferOwnershipBackendOperation";
import { useUpdateTeam } from "@/utils/hooks/useUpdateTeamBackendOperation";

const roleData = ["read", "read & write"];

export const EditTeamDialog = ({
  teamId,
  name,
  members,
  openEditTeamModal,
  setOpenEditTeamModal,
  organisations,
  ownership,
}: {
  teamId: string;
  name: string;
  members: teamUser[];
  openEditTeamModal: boolean;
  setOpenEditTeamModal: React.Dispatch<boolean>;
  organisations: Partial<Organisation | any>;
  ownership: TeamOwnership;
}) => {
  const [teamOrganisation, setTeamOrganisation] = useState<string>(ownership?.organisation?.name || "");
  const [deleteTeam, setDeleteTeam] = useState(false);
  const [transferOwnership, setTransferOwnership] = useState(false);

  const { setTeamName, setTeamMembers, updateDone, setUpdateDone, updateTeam, isLoading, teamName, teamMembers } = useUpdateTeam({
    members,
    name,
    teamId,
  });
  const editUserRole = ({ id, item }: { id: string; item: "none" | "read" | "readWrite" }) => {
    const user = teamMembers?.find((profile: teamUser) => profile.id === id);
    if (user) user.role = item;
    setTeamMembers([...teamMembers]);
  };

  const removeAccess = (id: string) => {
    const user = teamMembers?.find((profile: teamUser) => profile.id === id);
    if (user) user.role = "none";
    setTeamMembers([...teamMembers]);
  };

  const chooseOption = (idx: any) => {
    if (idx > 0) {
      setDeleteTeam(true);
    } else {
      setTransferOwnership(true);
    }
  };

  const props = {
    teamName,
    setDeleteTeam,
    transferOwnership,
    setOpenEditTeamModal,
    setTransferOwnership,
    setTeamOrganisation,
    organisations,
    teamId,
    ownership,
  };

  return (
    <>
      <Dialog
        open={openEditTeamModal}
        onOpenChange={() => {
          setOpenEditTeamModal(!openEditTeamModal);
          setUpdateDone(false);
        }}
      >
        <DialogContent className={"max-w-[440px]"}>
          {!deleteTeam &&
            !transferOwnership &&
            (!updateDone ? (
              // EDIT TEAM FORM
              <>
                <div className="flex justify-between">
                  <DialogTitle className="text-base text-primary">Modify Team</DialogTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div
                        style={{ backdropFilter: "blur(50px)" }}
                        className={`${
                          name ? "" : "hidden"
                        } absolute right-4 top-4 z-50 flex h-[29px] w-[29px] items-center justify-center rounded-full duration-300 hover:bg-[#D3FBE8]`}
                      >
                        <BarIcon className="h-[21px] w-[5px]" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-[150px] items-start p-1">
                      <DropdownMenuGroup>
                        {["Transfer Ownership", "Remove access"].map((item, idx) => {
                          return (
                            <DropdownMenuItem
                              key={idx}
                              onClick={() => chooseOption(idx)}
                              className={`flex cursor-pointer items-center justify-start gap-[7px] rounded-sm p-3 text-xs capitalize text-accent-foreground  ${
                                idx < 1
                                  ? "hover:bg-accent"
                                  : "cursor-pointer rounded-none border-t-[1px] border-black border-s-stone-50 text-destructive hover:rounded-sm hover:border-none hover:bg-destructive-foreground hover:!text-destructive"
                              }`}
                              textValue="Jim Carlos"
                            >
                              {idx == 1 ? <DeleteIcon className="h-4 w-3" /> : <TransferIcon className="h-4 w-3" />}
                              {item}
                            </DropdownMenuItem>
                          );
                        })}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <DialogDescription>
                  <form onSubmit={updateTeam}>
                    <Label className="font-semibold">Team Name</Label>
                    <Input
                      disabled={isLoading}
                      id="text"
                      placeholder="Name your team"
                      className="col-span-3 mb-7"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                    />
                    <Label className="font-semibold">Invite users</Label>
                    <UsersInputDropdown
                      placeholder="ex: astrew.etched"
                      roleData={roleData}
                      type={"multiSelect"}
                      selectedItems={teamMembers}
                      setSelectedItems={setTeamMembers}
                    />

                    <div>
                      {teamMembers.length > 0 && (
                        <div className="mt-3 rounded-[6px] bg-[#F3F5F5] p-3">
                          {teamMembers.map(({ id, name, role }) => {
                            return (
                              <div key={id} className="flex items-center justify-between">
                                <div
                                  // onClick={() => inviteUser({ id, name, role })}
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
                                            onClick={() => (idx !== 2 ? editUserRole({ id, item }) : removeAccess(id))}
                                            className={`flex cursor-default items-center justify-center gap-[7px] rounded-sm p-1 text-xs capitalize text-accent-foreground  ${
                                              idx < 2
                                                ? "hover:bg-accent"
                                                : "cursor-pointer rounded-none border-t-[1px] border-black border-s-stone-50 text-destructive hover:rounded-sm hover:border-none hover:bg-destructive-foreground hover:!text-destructive"
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
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <footer className="mt-10 flex items-center justify-end gap-5">
                      <div
                        onClick={() => setOpenEditTeamModal(false)}
                        className="cursor-pointer text-sm font-semibold hover:text-foreground"
                      >
                        Cancel
                      </div>
                      <div>
                        <Button
                          isLoading={isLoading}
                          type="submit"
                          className={`${teamMembers.length < 1 ? " pointer-events-noe cursor-not-allowed" : ""}`}
                        >
                          Done
                        </Button>
                      </div>
                    </footer>
                  </form>
                </DialogDescription>
              </>
            ) : (
              // INVITED USERS
              <>
                <DialogTitle className="mx-auto max-w-[226px] text-center text-base text-primary">
                  {teamOrganisation} is now owner of Team {teamName} 🎉
                </DialogTitle>
                {!!teamMembers.length && (
                  <DialogDescription>
                    <div className="mt-3 flex flex-col gap-4 rounded-[6px] bg-[#F3F5F5] p-3">
                      <div className="items-center rounded-sm text-sm transition-colors">Invited users</div>
                      <div className="flex items-center justify-between ">
                        <div className="cursor-default text-sm transition-colors hover:text-accent-foreground ">
                          {teamOrganisation}
                        </div>
                        <div>Owner</div>
                      </div>
                      {teamMembers?.map(({ id, name, role }: teamUser) => {
                        return (
                          <div key={id} className="flex items-center justify-between ">
                            <div className="cursor-default text-sm transition-colors hover:text-accent-foreground ">{name}</div>
                            <div>{role}</div>
                          </div>
                        );
                      })}
                    </div>
                  </DialogDescription>
                )}
              </>
            ))}
          {deleteTeam && <ConfirmDelectDialog {...props} />}

          {transferOwnership && <TransferOwnershipDialog {...props} />}
        </DialogContent>
      </Dialog>
    </>
  );
};

type confirm = {
  teamName: string;
  teamId: string;
  setDeleteTeam: any;
  setOpenEditTeamModal: any;
  setTransferOwnership: any;
  transferOwnership: any;
  setTeamOrganisation: any;
  organisations: Partial<Organisation | any>;
  ownership: TeamOwnership;
};

const ConfirmDelectDialog: React.FC<confirm> = ({ teamName, setDeleteTeam, setOpenEditTeamModal }) => {
  const removeTeam = () => {
    setDeleteTeam({ confirm: true, state: false });
    setOpenEditTeamModal(false);
  };
  return (
    <div>
      <DialogTitle className="mb-6 text-center text-base text-destructive">Deleting Team Confirmation</DialogTitle>
      <div className="mx-auto w-[342px] text-center text-muted-foreground">
        Are you sure that you want to delete Team <span className="capitalize">“{teamName}”</span>?
      </div>

      <footer className="mt-10 flex items-center justify-center gap-5">
        <div
          onClick={() => setDeleteTeam({ confirm: true, state: false })}
          className="cursor-pointer text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          Cancel
        </div>
        <div>
          <Button
            // isLoading={'isLoading'}
            // type="submit"
            onClick={() => removeTeam()}
          >
            Yes
          </Button>
        </div>
      </footer>
    </div>
  );
};

const TransferOwnershipDialog: React.FC<confirm> = ({
  setTransferOwnership,
  teamId,
  organisations,
  setOpenEditTeamModal,
  ownership,
}) => {
  const { owner, setOwner, newOrg, setNewOrg, newIndiv, setNewIndiv, transferOwnership, isLoading } = useTransferOwnershipTeam({
    teamId,
    setOpenEditTeamModal,
  });

  return (
    <>
      <DialogTitle className="text-base text-primary">Transfer Ownership</DialogTitle>
      <DialogDescription>
        <form onSubmit={transferOwnership}>
          <Label className="font-semibold">Select</Label>
          <div className="mb-7 mt-[9px] flex gap-5">
            {["individual", "organization"].map((item, id) => {
              return (
                <div
                  key={id}
                  onClick={() => {
                    setOwner(item);
                    setNewOrg([]);
                    setNewIndiv([]);
                  }}
                  className="flex items-center gap-1"
                >
                  <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-[1px] border-muted-foreground">
                    <div
                      className={`${owner == item ? "scale-100" : "scale-0"} h-3 w-3 rounded-full bg-primary duration-300`}
                    ></div>
                  </div>
                  <div
                    className={`text-sm font-medium capitalize text-muted-foreground ${
                      owner == item ? "!text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
          {owner === "individual" && (
            <>
              <Label className="font-semibold">Transfer to</Label>
              <UsersInputDropdown
                type={"singleSelect"}
                roleData={[]}
                placeholder={"ex: astrew.etched"}
                selectedItems={newIndiv}
                setSelectedItems={setNewIndiv}
              />
            </>
          )}

          {owner === "organization" && (
            <>
              <Label className="font-semibold">Organization Name</Label>
              <OrgInputDropdown
                type={"singleSelect"}
                orgs={organisations as Organisation[]}
                placeholder="ex: Prolific Inc."
                selectedItems={newOrg}
                setSelectedItems={setNewOrg}
              />
            </>
          )}

          <footer className="mt-10 flex items-center justify-end gap-5">
            <div
              onClick={() => setTransferOwnership(false)}
              className="cursor-pointer text-sm font-semibold hover:text-foreground"
            >
              Cancel
            </div>
            <div>
              <Button
                isLoading={isLoading}
                type="submit"
                className={`${newOrg.length < 1 && newIndiv.length < 1 ? " cursor-not-allowed" : ""}`}
              >
                Done
              </Button>
            </div>
          </footer>
        </form>
      </DialogDescription>
    </>
  );
};
