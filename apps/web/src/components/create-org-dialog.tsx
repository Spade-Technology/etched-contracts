import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";

import { toast } from "./ui/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { InputDropdownTwo } from "./ui/input-dropdown";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Icons } from "./ui/icons";
import { GoodIcon } from "./icons/good";
import { useSearchGQL } from "@/utils/hooks/useSearchGQL";
import { Etch, Wallet } from "@/gql/graphql";

const formSchema = z.object({
  orgName: z.string(),
  orgMembers: z.array(z.string()),
});

type FormData = z.infer<typeof formSchema>;

type user = {
  id?: string;
  name?: string;
  role?: string;
};

export const roleData = ["member", "admin"];

export const CreateOrgDialog = ({
  children,
  openOrgModal,
  setOpenOrgModal,
  users,
}: {
  children?: React.ReactNode;
  openOrgModal?: boolean;
  setOpenOrgModal?: any;
  users: user[];
}) => {
  const [orgName, setOrgName] = useState("");
  const [orgMembers, setOrgMembers] = useState<user[] | any>([]);
  const [orgData, setOrgData] = useState<FormData | any>({});
  const { data, mutateAsync, isLoading } = api.org.createOrg.useMutation();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      orgName,
      orgMembers,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await mutateAsync({
        orgName: orgName,
        orgMembers: [],
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
      });
      toast({
        title: "org created",
        description: "successfull",
        variant: "success",
      });
      console.log(data);

      // setOpenOrgModal(false);
    } catch (e) {
      console.log(e);
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const editUserRole = ({ id, item }: { id: string; item: string }) => {
    const user = orgMembers?.find((profile: any) => profile.id === id);
    if (user) user.role = item;
    setOrgMembers([...orgMembers]);
  };

  const removeAccess = (id: string) => {
    const members = orgMembers?.filter((profile: any) => profile.id !== id);
    setOrgMembers(members);
  };

  useEffect(() => {
    document.addEventListener("create-org", () => {
      setOpenOrgModal(true);
    });
  }, []);

  return (
    <Dialog open={openOrgModal} onOpenChange={() => setOpenOrgModal(!openOrgModal)}>
      <DialogContent className={"max-w-[440px]"}>
        {!orgData.orgName ? (
          // INVITE USER FORM
          <>
            {" "}
            <DialogTitle className="text-base text-primary">New Organization</DialogTitle>
            <DialogDescription>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <Label className="font-semibold">Organization Name</Label>
                  <Input
                    disabled={isLoading}
                    id="text"
                    placeholder="Name your organization"
                    className="col-span-3 mb-7"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                  />
                  <Label className="font-semibold">Invite users</Label>
                  <InputDropdownTwo
                    placeholder="ex: astrew.etched"
                    data={users}
                    roleData={roleData}
                    selectedItems={orgMembers}
                    setSelectedItems={setOrgMembers}
                  />

                  {orgMembers.length > 0 && (
                    <div className="mt-3 rounded-[6px] bg-[#F3F5F5] p-3">
                      {orgMembers.map(({ id, name, role }) => {
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

                  <footer className="mt-10 flex items-center justify-end gap-5">
                    <div
                      onClick={() => setOpenOrgModal(false)}
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
              </Form>
            </DialogDescription>
          </>
        ) : (
          // INVITED USERS
          <>
            <DialogTitle className="mx-auto max-w-[226px] text-center text-base text-primary">
              New Organization {orgData.orgName} has been created! 🎉
            </DialogTitle>
            <DialogDescription>
              <div className="mt-3 flex flex-col gap-4 rounded-[6px] bg-[#F3F5F5] p-3">
                <div className="items-center rounded-sm text-sm transition-colors">Invited users</div>
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
        )}
      </DialogContent>
    </Dialog>
  );
};
