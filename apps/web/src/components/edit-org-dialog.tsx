import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "urql";
import * as z from "zod";
import { Button } from "./ui/button";
import { graphql } from "@/gql";
import { toast } from "./ui/use-toast";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";
import { Organisation, Wallet } from "@/gql/graphql";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { InputDropdownTwo } from "./ui/input-dropdown";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Icons } from "./ui/icons";
import { GoodIcon } from "./icons/good";
import { BarIcon } from "./icons/bar";
import { TransferIcon } from "./icons/transfer";
import { DeleteIcon } from "./icons/delete";
import { roleData } from "./create-org-dialog";
import { useSearchGQL } from "@/utils/hooks/useSearchGQL";

const formSchema = z.object({
  orgName: z.string(),
  orgMembers: z.array(z.string()),
});

type FormData = z.infer<typeof formSchema>;

type confirm = {
  orgName: string;
  setDeleteTeam: any;
  setOpenEditOrgModal: any;
  setTransferOwnership: any;
  transferOwnership: boolean;
  setOrgName: any;
  organisations: Partial<Organisation[]>;
};

export type user = {
  id?: string;
  name?: string;
  role?: string;
};

export const EditOrgDialog = ({
  children,
  openEditOrgModal,
  setOpenEditOrgModal,
  organisations,
  id,
  name,
  orgId,
  members,
}: {
  children?: React.ReactNode;
  id: string;
  name: string;
  orgId: string;
  members: user[];
  openEditOrgModal: boolean;
  setOpenEditOrgModal: any;
  organisations: Partial<Organisation>[];
}) => {
  const { wallets } = useSearchGQL(".");
  const users = wallets.map(({ id, etchENS }: Partial<Wallet | any>) => {
    const idx = etchENS[0];
    return { ...idx, id };
  });

  const [orgName, setOrgName] = useState(name || "");
  const [orgMembers, setOrgMembers] = useState<user[] | any>(members || []);
  const [orgData, setOrgData] = useState<FormData | any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [deleteTeam, setDeleteTeam] = useState(false);
  const [transferOwnership, setTransferOwnership] = useState(false);

  const editUserRole = ({ id, item }: { id: string; item: string }) => {
    const user = orgMembers?.find((profile: any) => profile.id === id);
    if (user) user.role = item;
    setOrgMembers([...orgMembers]);
  };

  const removeAccess = (id: string) => {
    const members = orgMembers?.filter((profile: any) => profile.id !== id);
    setOrgMembers(members);
  };

  const chooseOption = (idx: any) => {
    if (idx > 0) {
      setDeleteTeam(true);
    } else {
      setTransferOwnership(true);
    }
  };

  const onSubmit = () => {
    setIsLoading(true);
    if (orgMembers.length > 0 && orgName) {
      setOrgData({ orgName, orgMembers });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const props = {
    orgName,
    setDeleteTeam,
    transferOwnership,
    setOpenEditOrgModal,
    setTransferOwnership,
    setOrgName,
    organisations,
  };

  return (
    <>
      <Dialog open={openEditOrgModal} onOpenChange={() => setOpenEditOrgModal(!openEditOrgModal)}>
        <DialogContent className={"max-w-[440px]"}>
          {!orgData.orgName && !deleteTeam && !transferOwnership ? (
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
                                : "rounded-none border-t-[1px] border-black border-s-stone-50 text-[#f55] hover:rounded-sm hover:border-none hover:bg-red-50 hover:!text-[#f55]"
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
                <form onSubmit={() => onSubmit()}>
                  <Label className="font-semibold">Organization Name</Label>
                  <Input
                    disabled={isLoading}
                    id="text"
                    placeholder="Name your team"
                    className="col-span-3 mb-7 capitalize"
                    value={name}
                    // onChange={(e) => setOrgName(e.target.value)}
                  />
                  <Label className="font-semibold">Invite users</Label>
                  <InputDropdownTwo
                    placeholder="ex: astrew.etched"
                    data={users}
                    roleData={roleData}
                    type={"multiSelect"}
                    selectedItems={orgMembers}
                    setSelectedItems={setOrgMembers}
                  />

                  <section>
                    {orgMembers.length > 0 && (
                      <div className="mt-3 rounded-[6px] bg-[#F3F5F5] p-3">
                        {orgMembers.map(({ id, name, role }) => {
                          return (
                            <section key={id} className="flex items-center justify-between">
                              <div
                                // onClick={() => inviteUser({ id, name, role })}
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
                                          onClick={() => (idx !== 2 ? editUserRole({ id, item }) : removeAccess(id))}
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
          ) : orgData.orgName && !deleteTeam && !transferOwnership ? (
            // INVITED USERS
            <>
              <DialogTitle className="mx-auto max-w-[226px] text-center text-base text-primary">
                {orgData.orgName} is now owner of Team {orgData.orgName} 🎉
              </DialogTitle>
              <DialogDescription>
                <div className="mt-3 flex flex-col gap-4 rounded-[6px] bg-[#F3F5F5] p-3">
                  <div className="items-center rounded-sm text-sm transition-colors">Invited users</div>
                  <section className="flex items-center justify-between ">
                    <div className="cursor-default text-sm transition-colors hover:text-accent-foreground ">{orgName}</div>
                    <div className="">Owner</div>
                  </section>
                  {orgData?.orgMembers?.map(({ id, name, role }: user) => {
                    return (
                      <section key={id} className="flex items-center justify-between ">
                        <div className="cursor-default text-sm transition-colors hover:text-accent-foreground ">{name}</div>
                        <div className="">{role}</div>
                      </section>
                    );
                  })}
                </div>
              </DialogDescription>
            </>
          ) : deleteTeam ? (
            <ConfirmDelectDialog {...props} />
          ) : transferOwnership ? (
            <TransferOwnershipDialog {...props} />
          ) : (
            ""
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

const ConfirmDelectDialog: React.FC<confirm> = ({ orgName, setDeleteTeam, setOpenEditOrgModal }) => {
  const removeTeam = () => {
    setDeleteTeam(true);
    setOpenEditOrgModal(false);
  };

  return (
    <section>
      <DialogTitle className="mb-6 text-center text-base text-[#f55]">Deleting Organization Confirmation</DialogTitle>
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
    </section>
  );
};

const TransferOwnershipDialog: React.FC<confirm> = ({ setTransferOwnership, setOrgName, organisations }) => {
  const [ownerData, setOwnerData] = useState<user[]>([]);

  const transfer = (e: any) => {
    e.preventDefault();
    const item: user | any = ownerData.find((idx) => idx.name);
    setOrgName(item.name);
    console.log(item.name);
    setTransferOwnership(false);
  };

  return (
    <>
      <DialogTitle className="text-base text-primary">Transfer Ownership</DialogTitle>
      <DialogDescription>
        <form onSubmit={transfer}>
          <Label className="font-semibold">Transfer to</Label>
          <InputDropdownTwo
            data={organisations}
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
              <Button isLoading={false} type="submit" className={`${ownerData.length < 1 ? " cursor-not-allowed" : ""}`}>
                Done
              </Button>
            </div>
          </footer>
        </form>
      </DialogDescription>
    </>
  );
};
