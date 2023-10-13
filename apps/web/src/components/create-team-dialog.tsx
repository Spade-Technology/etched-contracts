import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useQuery } from "urql";
import * as z from "zod";
import { Button } from "./ui/button";

import { SelectValue } from "@radix-ui/react-select";

import { graphql } from "@/gql";
import { Select, SelectContent, SelectGroup, SelectItem, SelectSeparator, SelectTrigger } from "./ui/select";
import { toast } from "./ui/use-toast";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";
import { Organisation } from "@/gql/graphql";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { InputDropdownTwo } from "./ui/input-dropdown";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Icons } from "./ui/icons";
import { GoodIcon } from "./icons/good";
import { BarIcon } from "./icons/bar";
import { TransferIcon } from "./icons/transfer";
import { DeleteIcon } from "./icons/delete";

const formSchema = z.object({
  teamName: z.string(),
  teamMembers: z.array(z.string()),
  teamOrganisation: z.string(),
});

type FormData = z.infer<typeof formSchema>;

type user = {
  id: string;
  name: string;
  role: string;
};

type datatype = {
  teamOrganisation: string;
  teamName: string;
  teamMembers: user[];
};

const ORGANISATIONS_QUERY = graphql(/* GraphQL */ `
  query Organisations($address: String!) {
    organisations(
      where: { or: [{ ownership_: { owner: $address } }, { permissions_: { wallet: $address, permissionLevel_gt: 0 } }] }
    ) {
      orgId
      id
      name
    }
  }
`);

export const CreateTeamDialog = ({ children, modifyTeamData }: { children?: React.ReactNode; modifyTeamData: any }) => {
  const [state, setStatus] = useState("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [teamName, setTeamName] = useState(modifyTeamData?.teamName || "");
  const [roleData, setRoleData] = useState(["read only", "read & write"]);
  const [teamMembers, setTeamMembers] = useState<user[]>(modifyTeamData?.teamMembers || []);
  const [teamData, setTeamData] = useState<datatype | any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [deleteTeam, setDeleteTeam] = useState({ state: false, confirm: false });
  const { mutateAsync } = api.team.createTeam.useMutation();

  const loggedInAddress = useLoggedInAddress();

  const [{ data, fetching }, refetch] = useQuery({
    query: ORGANISATIONS_QUERY,
    variables: { address: loggedInAddress.toLowerCase() },
  });
  const organisations: Partial<Organisation>[] = data ? data.organisations : [];

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      teamName,
      teamMembers,
      teamOrganisation: "None",
    },
  });

  const users: user[] = [
    {
      id: "0",
      name: "ex: tom12.etched",
      role: "member",
    },
    {
      id: "1",
      name: "Benjamin.etched",
      role: "member",
    },
    {
      id: "2",
      name: "Sophia5678.etched",
      role: "member",
    },
    {
      id: "3",
      name: "Olivia3456.etched",
      role: "member",
    },
  ];

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    if (teamMembers.length > 0 && data.teamOrganisation && teamName) {
      setTeamData({ teamOrganisation: data.teamOrganisation, teamName, teamMembers });
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

    // try {
    //   await mutateAsync({
    //     teamName: data.teamName,
    //     teamMembers: data.teamMembers,
    //     owningOrg: data.teamOrganisation,
    //     blockchainSignature: localStorage.getItem("blockchainSignature")!,
    //     blockchainMessage: localStorage.getItem("blockchainMessage")!,
    //   });
    //   toast({
    //     title: "Team created",
    //     description: "Your team has been created",
    //     variant: "success",
    //   });
    //   // setOpenModal(false);
    // } catch (e) {
    //   console.log(e);
    //   toast({
    //     title: "Something went wrong",
    //     description: "Please try again",
    //     variant: "destructive",
    //   });
    // }
  };

  const editUserRole = ({ id, item }: { id: string; item: string }) => {
    const user = teamMembers?.find((profile: any) => profile.id === id);
    if (user) user.role = item;
    setTeamMembers([...teamMembers]);
  };

  const removeAccess = (id: string) => {
    const members = teamMembers?.filter((profile: any) => profile.id !== id);
    setTeamMembers(members);
  };

  useEffect(() => {
    document.addEventListener("create-team", () => {
      setOpenModal(true);
    });
  }, []);

  const props = { teamName, setDeleteTeam, setOpenModal };

  return (
    <>
      <Button onClick={() => setOpenModal(!openModal)}>modify team</Button>
      <Dialog open={openModal} onOpenChange={() => setOpenModal(!openModal)}>
        <DialogContent className={"max-w-[440px]"}>
          {!teamData.teamName && !deleteTeam.state ? (
            // INVITE USER FORM
            <>
              <div className="flex justify-between">
                <DialogTitle className="text-base text-primary">{modifyTeamData?.teamName ? "Modify" : "New"} Team</DialogTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div
                      style={{ backdropFilter: "blur(50px)" }}
                      className={`${
                        modifyTeamData?.teamName ? "" : "hidden"
                      } absolute right-4 top-4 z-50 flex h-[29px] w-[29px] items-center justify-center rounded-full hover:bg-[#D3FBE8]`}
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
                            onClick={() =>
                              idx > 0 ? setDeleteTeam({ ...deleteTeam, state: true }) : console.log("Transfer Ownership")
                            }
                            className={`flex cursor-default items-center justify-start gap-[7px] rounded-sm p-3 text-xs capitalize text-accent-foreground  ${
                              idx < 1
                                ? "hover:bg-accent"
                                : "cursor-pointer rounded-none border-t-[1px] border-black border-s-stone-50 text-[#f55] hover:rounded-sm hover:border-none hover:bg-red-50 hover:!text-[#f55]"
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Label className="font-semibold">Select Organization</Label>
                    <FormField
                      control={form.control}
                      name="teamOrganisation"
                      render={({ field }: { field: FieldValues }) => (
                        <FormItem className="mb-7">
                          <FormControl>
                            {/* {console.log()} */}
                            <Select {...field} onValueChange={(e: any) => field.onChange(e)}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="None">No Organisation</SelectItem>
                                  <SelectSeparator className="SelectSeparator" />
                                  {!fetching &&
                                    organisations?.[0]?.id &&
                                    organisations.map(
                                      (org, index) =>
                                        org.orgId && (
                                          <div key={index}>
                                            <SelectItem key={index} value={org.orgId}>
                                              {org.name ?? org.id}
                                            </SelectItem>
                                          </div>
                                        )
                                    )}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
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
                    <InputDropdownTwo
                      data={users}
                      roleData={roleData}
                      selectedItems={teamMembers}
                      setSelectedItems={setTeamMembers}
                    />

                    <section>
                      {teamMembers.length > 0 && (
                        <div className="mt-3 rounded-[6px] bg-[#F3F5F5] p-3">
                          {teamMembers.map(({ id, name, role }) => {
                            return (
                              <section className="flex items-center justify-between">
                                <div
                                  key={id}
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
                        onClick={() => setOpenModal(false)}
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
                </Form>
              </DialogDescription>
            </>
          ) : teamData.teamName && !deleteTeam.state ? (
            // INVITED USERS
            <>
              <DialogTitle className="mx-auto max-w-[226px] text-center text-base text-primary">
                New Team {teamData.teamName} has been created! 🎉
              </DialogTitle>
              <DialogDescription>
                <div className="mt-3 flex flex-col gap-4 rounded-[6px] bg-[#F3F5F5] p-3">
                  <div className="items-center rounded-sm text-sm transition-colors">Invited users</div>
                  {teamData?.teamMembers?.map(({ id, name, role }: user) => {
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
          ) : deleteTeam.state ? (
            <ConfirmDelectDialog {...props} />
          ) : (
            ""
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

type confirm = {
  teamName: string;
  setDeleteTeam: any;
  setOpenModal: any;
};

const ConfirmDelectDialog: React.FC<confirm> = ({ teamName, setDeleteTeam, setOpenModal }) => {
  const removeTeam = () => {
    setDeleteTeam({ confirm: true, state: false });
    setOpenModal(false);
  };
  return (
    <section>
      <DialogTitle className="mb-6 text-center text-base text-[#f55]">Deleting Team Confirmation</DialogTitle>
      <div className="mx-auto w-[342px] text-center text-muted-foreground">
        Are you sure that you want to delete Team <span className="capitalize">“{teamName}”</span>?
      </div>

      <footer className="mt-10 flex items-center justify-center gap-5">
        <div
          onClick={() => removeTeam()}
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
