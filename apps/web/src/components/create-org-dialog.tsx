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

const formSchema = z.object({
  orgName: z.string(),
  orgMembers: z.array(z.string()),
});

type FormData = z.infer<typeof formSchema>;

type user = {
  id: string;
  name: string;
  role: string;
};

export const CreateOrgDialog = ({ children }: { children?: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orgName, setOrgName] = useState("");
  const [roleData, setRoleData] = useState(["member", "admin"]);
  const [orgMembers, setOrgMembers] = useState<user[]>([]);
  const [orgData, setOrgData] = useState<FormData>({});
  const { mutateAsync } = api.org.createOrg.useMutation();

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

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      orgName,
      orgMembers,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    if (orgMembers.length > 0) {
      localStorage.setItem("orgData", JSON.stringify({ orgName, orgMembers }));
      setOrgData({ orgName, orgMembers });

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }

    // try {
    //   await mutateAsync({
    //     orgName: data.orgName,
    //     orgMembers: data.orgMembers,
    //     blockchainSignature: localStorage.getItem("blockchainSignature")!,
    //     blockchainMessage: localStorage.getItem("blockchainMessage")!,
    //   });

    //   setOpenModal(false);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  const editUserRole = ({ id, item }: { id: string; item: string }) => {
    const user = orgMembers?.find((profile: any) => profile.id === id);
    if (user) user.role = item;
    setOrgMembers([...orgMembers]);
  };

  useEffect(() => {
    document.addEventListener("create-org", () => {
      setOpenModal(true);
    });
  }, []);

  return (
    <Dialog open={openModal} onOpenChange={() => setOpenModal(!openModal)}>
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
                                  {roleData.map((item, idx) => {
                                    return (
                                      <DropdownMenuItem
                                        key={idx}
                                        onClick={() => editUserRole({ id, item })}
                                        className="flex cursor-default items-center justify-center gap-[7px] rounded-sm p-1 text-xs capitalize text-accent-foreground  hover:bg-accent"
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
                      onClick={() => setOpenModal(false)}
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
