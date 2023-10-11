import { Button } from "@/components/ui/button";
import { Dialog, DialogTitle, DialogContent, DialogDescription } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { InputDropdownTwo } from "@/components/ui/input-dropdown";
import { Label } from "@/components/ui/label";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";
export default function NewOrg() {
  const [openModal, setOpenModal] = useState(false);
  const [orgName, setOrgName] = useState("");
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  const [inviteUsers, setInviteUsers] = useState({ state: false, name: "", users: [] });

  const users = [
    {
      id: 0,
      name: "ex: tom12.etched",
      role: "member",
    },
    {
      id: 1,
      name: "Benjamin.etched",
      role: "member",
    },
    {
      id: 2,
      name: "Sophia5678.etched",
      role: "member",
    },
    {
      id: 3,
      name: "Olivia3456.etched",
      role: "member",
    },
  ];

  const editUserRole = ({ id, item }: { id: string; item: string }) => {
    const user = selectedProfiles?.find((profile: any) => profile.id === id);
    user.role = item;
    setSelectedProfiles([...selectedProfiles]);
  };

  return (
    <>
      <Dialog open={openModal} onOpenChange={(x) => setOpenModal(x)}>
        <DialogContent className="max-w-[440px]">
          {!inviteUsers.state ? (
            // INVITE USER FORM
            <>
              <DialogTitle className="text-base text-primary">New Organization</DialogTitle>
              <DialogDescription>
                <Label className="font-semibold">Organization Name</Label>
                <Input
                  id="text"
                  placeholder="Name your organization"
                  className="col-span-3 mb-7"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                />
                <Label className="font-semibold">Invite users</Label>
                <InputDropdownTwo data={users} selectedItems={selectedProfiles} setSelectedItems={setSelectedProfiles} />
                {selectedProfiles.length > 0 ? (
                  <div className="mt-3 rounded-[6px] bg-[#F3F5F5] p-3">
                    {selectedProfiles.map(({ id, name, role }) => {
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
                            <DropdownMenuContent className=" items-start">
                              <DropdownMenuGroup>
                                {["member", "admin"].map((item, idx) => {
                                  return (
                                    <DropdownMenuItem
                                      key={idx}
                                      onClick={() => editUserRole({ id, item })}
                                      className="cursor-default"
                                      textValue="Jim Carlos"
                                    >
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
                ) : (
                  ""
                )}
                <footer className="mt-10 flex items-center justify-end gap-5">
                  <div onClick={() => setOpenModal(false)} className="cursor-pointer text-sm font-semibold hover:text-foreground">
                    Cancel
                  </div>
                  <div
                    onClick={() =>
                      selectedProfiles.length > 0
                        ? setInviteUsers({ state: true, name: orgName, users: selectedProfiles })
                        : console.log("select user")
                    }
                  >
                    <Button className={`${selectedProfiles.length < 1 ? " pointer-events-noe cursor-not-allowed" : ""}`}>
                      Done
                    </Button>
                  </div>
                </footer>
              </DialogDescription>{" "}
            </>
          ) : (
            // INVITED USERS
            <>
              <DialogTitle className="mx-auto max-w-[226px] text-center text-base text-primary">
                New Organization {inviteUsers.name} has been created! 🎉
              </DialogTitle>
              <DialogDescription>
                <div className="mt-3 flex flex-col gap-4 rounded-[6px] bg-[#F3F5F5] p-3">
                  <div className="items-center rounded-sm text-sm transition-colors">Invited users</div>
                  {inviteUsers.users.map(({ id, name, role }) => {
                    return (
                      <section className="flex items-center justify-between ">
                        <div key={id} className="cursor-default text-sm transition-colors hover:text-accent-foreground ">
                          {name}
                        </div>
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
    </>
  );
}
