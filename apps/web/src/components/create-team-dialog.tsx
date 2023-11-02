import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import { SelectValue } from "@radix-ui/react-select";
import { Select, SelectContent, SelectGroup, SelectItem, SelectSeparator, SelectTrigger } from "./ui/select";
import { toast } from "./ui/use-toast";
import { Organisation } from "@/gql/graphql";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { UsersInputDropdown } from "./ui/input-dropdown";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Icons } from "./ui/icons";
import { GoodIcon } from "./icons/good";
import { teamUser } from "@/types";
import { removeAmpersandAndtransformToCamelCase } from "@/utils/team";

const formSchema = z.object({
  teamName: z.string(),
  teamMembers: z.array(
    z.object({
      id: z.string(), // wallet address
      name: z.string(),
      role: z.enum(["none", "read", "readWrite"]),
    })
  ),
  teamOrganisation: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const roleData = ["read", "read & write"];

export const CreateTeamDialog = ({
  openTeamModal,
  setOpenTeamModal,
  organisations,
}: {
  openTeamModal?: boolean | any;
  setOpenTeamModal?: any;
  organisations?: Partial<Organisation>[];
}) => {
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState<teamUser[]>([]);
  const { mutateAsync, isLoading } = api.team.createTeam.useMutation();

  const [creationDone, setCreationDone] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      teamName,
      teamMembers,
      teamOrganisation: "None",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await mutateAsync({
        teamName: teamName,
        teamMembers: teamMembers.map(({ id, name, role }) => ({
          id,
          name,
          role: removeAmpersandAndtransformToCamelCase(role),
        })) as teamUser[],
        owningOrg: data.teamOrganisation,
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
      });
      toast({
        title: "Team created",
        description: "Your team has been created",
        variant: "success",
      });

      // cleanup after done
      setTeamName("");
      setCreationDone(true);
    } catch (e) {
      console.log(e);
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const editUserRole = ({ id, item }: { id: string; item: "none" | "read" | "readWrite" }) => {
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
      setOpenTeamModal(true);
    });
  }, []);

  return (
    <Dialog
      open={openTeamModal}
      onOpenChange={() => {
        setOpenTeamModal(!openTeamModal);
        setCreationDone(false);
      }}
    >
      <DialogContent className={"max-w-[440px]"}>
        {!creationDone ? (
          <>
            <DialogTitle className="text-base text-primary">New Team</DialogTitle>
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
                          <Select {...field} onValueChange={(e: any) => field.onChange(e)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="None">No Organisation</SelectItem>
                                <SelectSeparator className="SelectSeparator" />
                                {organisations?.map(
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
                  <UsersInputDropdown
                    placeholder="ex: astrew.etched"
                    type={"multiSelect"}
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
                      onClick={() => setOpenTeamModal(false)}
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
        ) : (
          <>
            <DialogTitle className="mx-auto max-w-[226px] text-center text-base text-primary">
              New Team {teamName} has been created! 🎉
            </DialogTitle>
            <DialogDescription>
              {!!teamMembers?.length && (
                <div className="mt-3 flex flex-col gap-4 rounded-[6px] bg-[#F3F5F5] p-3">
                  <div className="items-center rounded-sm text-sm transition-colors">Invited users</div>
                  {teamMembers?.map(({ id, name, role }) => {
                    return (
                      <section key={id} className="flex items-center justify-between ">
                        <div className="cursor-default text-sm transition-colors hover:text-accent-foreground ">{name}</div>
                        <div className="">{role}</div>
                      </section>
                    );
                  })}
                </div>
              )}
            </DialogDescription>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
