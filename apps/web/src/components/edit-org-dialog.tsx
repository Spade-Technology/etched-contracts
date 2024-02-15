import { Input } from "@/components/ui/input";
import React, { useState } from "react";

import { orgUser } from "@/types";
import * as z from "zod";
import { roleData } from "./create-org-dialog";
import { BarIcon } from "./icons/bar";
import { DeleteIcon } from "./icons/delete";
import { GoodIcon } from "./icons/good";
import { TransferIcon } from "./icons/transfer";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Icons } from "./ui/icons";
import { UsersInputDropdown } from "./ui/input-dropdown";
import { Label } from "./ui/label";

import { shortenAddress } from "@/utils/hooks/address";
import { useTransferOwnershipOrg } from "@/utils/hooks/useOrgTransferOwnershipBackendOperation";
import { useUpdateOrg } from "@/utils/hooks/useUpdateOrgBackendOperation";

const formSchema = z.object({
  orgName: z.string(),
  orgMembers: z.array(z.string()),
});

type FormData = z.infer<typeof formSchema>;

type confirmDelete = {
  id: string;
  orgName: string;
  setDeleteTeam: any;
  setOpenEditOrgModal: any;
  deleteOrg: any;
};
type confirmTransferOwnership = {
  orgId: string;
  orgName: string;
  setOpenEditOrgModal: any;
  setTransferOwnership: any;
  transferOwnership: boolean;
};

export const EditOrgDialog = ({
  openEditOrgModal,
  setOpenEditOrgModal,
  id,
  name,
  orgId,
  members,
}: {
  id: string;
  name: string;
  orgId: string;
  members: orgUser[];
  openEditOrgModal: boolean;
  setOpenEditOrgModal: any;
}) => {
  const [deleteTeam, setDeleteTeam] = useState(false);
  const [transferOwnership, setTransferOwnership] = useState(false);
  const {
    isLoading,
    orgData,
    setOrgMembers,
    setOrgName,
    updateDone,
    orgMembers,
    setOrgData,
    setUpdateDone,
    orgName,
    updateOrg: onSubmit,
  } = useUpdateOrg({ name, members, orgId });

  const editUserRole = ({ id, item }: { id: string; item: "none" | "member" | "admin" }) => {
    const user = orgMembers?.find((profile: any) => profile.id === id);
    if (user) user.role = item;
    setOrgMembers([...orgMembers]);
  };

  const removeAccess = (id: string) => {
    const user = orgMembers?.find((profile: any) => profile.id === id);
    if (user) user.role = "none";

    setOrgMembers([...orgMembers]);
  };

  const chooseOption = (idx: any) => {
    if (idx > 0) {
      setDeleteTeam(true);
    } else {
      setTransferOwnership(true);
    }
  };

  return (
    <>
      <Dialog
        open={openEditOrgModal}
        onOpenChange={() => {
          setOpenEditOrgModal(!openEditOrgModal);
          setOrgData({});
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
                  <DialogTitle className="text-base text-primary">Modify Organization</DialogTitle>
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
                                  : "rounded-none border-t-[1px] border-black border-s-stone-50 text-destructive hover:rounded-sm hover:border-none hover:bg-destructive-foreground hover:!text-destructive"
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
                  <form onSubmit={onSubmit}>
                    <Label className="font-semibold">Organization Name</Label>
                    <Input
                      disabled={isLoading}
                      id="text"
                      placeholder="Name your team"
                      className="col-span-3 mb-7 capitalize"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                    />
                    <Label className="font-semibold">Invite users</Label>
                    <UsersInputDropdown
                      placeholder="ex: astrew.etched"
                      roleData={roleData}
                      type={"multiSelect"}
                      selectedItems={orgMembers}
                      setSelectedItems={setOrgMembers}
                    />

                    <div>
                      {orgMembers.length > 0 && (
                        <div className="mt-3 rounded-[6px] bg-[#F3F5F5] p-3">
                          {orgMembers.map(({ id, name, role }) => {
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
                        onClick={() => setOpenEditOrgModal(false)}
                        className="cursor-pointer text-sm font-semibold hover:text-foreground"
                      >
                        Cancel
                      </div>
                      <div>
                        <Button
                          isLoading={isLoading}
                          type="submit"
                          className={`${orgMembers.length < 1 ? " pointer-events-noe cursor-not-allowed" : ""}`}
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
                  {orgData.orgName} is now owner of Team {orgData.orgName} 🎉
                </DialogTitle>
                {!!orgData?.orgMembers?.length && (
                  <DialogDescription>
                    <div className="mt-3 flex flex-col gap-4 rounded-[6px] bg-[#F3F5F5] p-3">
                      <div className="items-center rounded-sm text-sm transition-colors">Invited users</div>
                      <div className="flex items-center justify-between ">
                        <div className="cursor-default text-sm transition-colors hover:text-accent-foreground ">{orgName}</div>
                        <div className="">Owner</div>
                      </div>
                      {orgData?.orgMembers?.map(({ id, name, role }: orgUser) => {
                        return (
                          <div key={id} className="flex items-center justify-between ">
                            <div className="cursor-default text-sm transition-colors hover:text-accent-foreground ">{name}</div>
                            <div className="">{role}</div>
                          </div>
                        );
                      })}
                    </div>
                  </DialogDescription>
                )}
              </>
            ))}
          {deleteTeam && (
            <ConfirmDelectDialog
              orgName={name}
              deleteOrg={() => {}}
              id={id}
              setDeleteTeam={setDeleteTeam}
              setOpenEditOrgModal={setOpenEditOrgModal}
            />
          )}

          {transferOwnership && (
            <TransferOwnershipDialog
              orgId={orgId}
              orgName={name}
              setOpenEditOrgModal={setOpenEditOrgModal}
              setTransferOwnership={setTransferOwnership}
              transferOwnership={transferOwnership}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

const ConfirmDelectDialog: React.FC<confirmDelete> = ({ orgName, setDeleteTeam, setOpenEditOrgModal }) => {
  const removeTeam = () => {
    setDeleteTeam(true);
    setOpenEditOrgModal(false);
  };

  return (
    <div>
      <DialogTitle className="mb-6 text-center text-base text-destructive">Deleting Organization Confirmation</DialogTitle>
      <div className="mx-auto w-[342px] text-center text-muted-foreground">
        Are you sure that you want to delete Organization <span className="capitalize">“{orgName}”</span>?
      </div>

      <footer className="mt-10 flex items-center justify-center gap-5">
        <div
          onClick={() => setDeleteTeam(false)}
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

const TransferOwnershipDialog: React.FC<confirmTransferOwnership> = ({ setTransferOwnership, orgId, setOpenEditOrgModal }) => {
  const { isLoading, ownerData, setOwnerData, transferOwnership } = useTransferOwnershipOrg({
    setOpenEditOrgModal,
    orgId,
  });

  return (
    <>
      <DialogTitle className="text-base text-primary">Transfer Ownership</DialogTitle>
      <DialogDescription>
        <form onSubmit={transferOwnership}>
          <Label className="font-semibold">Transfer to</Label>
          <UsersInputDropdown
            type={"singleSelect"}
            roleData={[]}
            placeholder="ex: Prolific Inc."
            selectedItems={ownerData}
            setSelectedItems={setOwnerData}
          />

          <footer className="mt-10 flex items-center justify-end gap-5">
            <div
              onClick={() => setTransferOwnership(false)}
              className="cursor-pointer text-sm font-semibold hover:text-foreground"
            >
              Cancel
            </div>
            <div>
              <Button isLoading={isLoading} type="submit" className={`${ownerData.length < 1 ? " cursor-not-allowed" : ""}`}>
                Done
              </Button>
            </div>
          </footer>
        </form>
      </DialogDescription>
    </>
  );
};
