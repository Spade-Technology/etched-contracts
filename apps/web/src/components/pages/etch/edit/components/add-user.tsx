import { GoodIcon } from "@/components/icons/good";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { TeamInputDropdown, UsersInputDropdown } from "@/components/ui/input-dropdown";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { Etch } from "@/gql/graphql";
import { teamUser } from "@/types";
import { api } from "@/utils/api";
import { shortenAddress } from "@/utils/hooks/address";
import { removeAmpersandAndtransformToCamelCase } from "@/utils/team";
import { findUserDifferences } from "@/utils/user";
import { CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { privateKeyToAccount } from "viem/accounts";

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

  const [gerneatedLink, setGeneratedLink] = useState("");

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

    if (permissionTo === "link") {
      // Generate a random Ethereum private key using the 'crypto' module
      const { randomBytes } = require("crypto");
      const privateKey = ("0x" + randomBytes(32).toString("hex")) as `0x${string}`;
      console.log("Generated Ethereum Private Key:", privateKey);

      const wallet = privateKeyToAccount(privateKey);

      const newPermissions = findUserDifferences(
        etch.permissions
          ?.filter((perm) => !!perm.wallet)
          .map((perm) => ({
            id: perm.wallet?.id,
            name: perm.wallet?.etchENS[0]?.name || "",
            role: permissions[perm.permissionLevel],
          })) as teamUser[],
        [{ id: wallet.address, name: "Link", role: "read" }]
      ) as teamUser[];

      if (newPermissions.length === 0) return;

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

      toast({
        title: "Link has been generated",
        description: "successful",
        variant: "success",
      });

      const currentDomain = window.location.origin;
      setGeneratedLink(`${currentDomain}/dashboard/etch/${etch.tokenId}?k=${privateKey}`);

      return;
    }

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

      if (newPermissions.length === 0) return;

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

      if (newPermissions.length !== 0) return;

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
      description: "successful",
      variant: "success",
    });
    setShow(false);
  };

  return (
    <Dialog open={show} onOpenChange={(x) => setShow(x)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-normal text-[#6D6D6D]">Invite or Edit permissions</DialogTitle>
          <DialogDescription className="text-[#6D6D6D]">
            <Tabs defaultValue="individual" value={permissionTo} onValueChange={(v) => setPermissaionTo(v)}>
              <TabsList aria-label="Permission types" className="mb-7 mt-[9px]  w-full">
                {["individual", "team", "link"].map((item, id) => (
                  <TabsTrigger key={id} value={item} className="w-full">
                    {item}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value="individual">
                <Label className="font-semibold">Allow user</Label>
                <UsersInputDropdown
                  placeholder="ex: astrew.etched"
                  type={"multiSelect"}
                  roleData={roleData}
                  selectedItems={selectedUsers}
                  setSelectedItems={setSelectedUsers}
                />
                <div>
                  {selectedUsers?.length > 0 && (
                    <div className="mt-3 rounded-[6px] bg-[#F3F5F5] p-3">
                      {selectedUsers.map(({ id, name, role }) => {
                        return (
                          <div className="flex items-center justify-between">
                            <div
                              key={id}
                              className=" flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:text-accent-foreground "
                            >
                              {name || shortenAddress({ address: id })}
                            </div>
                            <RoleDropdown id={id} role={role} editRole={editUserRole} removeAccess={removeUserAccess} />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="flex w-full items-end">
                  <Button
                    type="submit"
                    className="ml-auto mt-5 gap-3 rounded-lg"
                    onClick={permissionHandler}
                    isLoading={isLoading}
                  >
                    Save
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="team">
                <Label className="font-semibold">Allow team</Label>
                <TeamInputDropdown
                  placeholder="ex: team1"
                  type={"multiSelect"}
                  roleData={roleData}
                  selectedItems={selectedTeams}
                  setSelectedItems={setSelectedTeams}
                />
                <div>
                  {selectedTeams?.length > 0 && (
                    <div className="mt-3 rounded-[6px] bg-[#F3F5F5] p-3">
                      {selectedTeams.map(({ id, name, role }) => {
                        return (
                          <div className="flex items-center justify-between">
                            <div
                              key={id}
                              className=" flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:text-accent-foreground "
                            >
                              {name}
                            </div>
                            <RoleDropdown id={id} role={role} editRole={editTeamRole} removeAccess={removeTeamAccess} />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="flex w-full items-end">
                  <Button
                    type="submit"
                    className="ml-auto mt-5 gap-3 rounded-lg"
                    onClick={permissionHandler}
                    isLoading={isLoading}
                  >
                    Save
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="link">
                <div className="flex flex-col gap-4">
                  <div className="mt-5 flex w-full flex-col items-center justify-center">
                    {gerneatedLink === "" ? (
                      <>
                        <Button type="submit" className="w-full rounded-lg" onClick={permissionHandler} isLoading={isLoading}>
                          Generate Read-Only Link
                        </Button>
                        <div className="my-auto mt-2 text-xs text-gray-500">
                          The link will be displayed only once and will not be shown again.
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex w-full items-center gap-2">
                          <Input className="w-full" readOnly value={gerneatedLink} />
                          <Button
                            aria-label="Copy link"
                            className="rounded-full"
                            onClick={() => navigator.clipboard.writeText(gerneatedLink)}
                          >
                            <CopyIcon />
                          </Button>
                        </div>
                        <div className="my-auto mt-2 text-xs text-gray-500">
                          Please save this link, it will not be shown again. The access will act as a user.
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const RoleDropdown = ({ id, role, editRole, removeAccess }: { id: string; role: string; editRole: any; removeAccess: any }) => {
  console.log({ id, role, editRole, removeAccess });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="float-right flex justify-between gap-2 border-none bg-transparent text-[#6D6D6D] hover:bg-transparent"
        >
          {role} <Icons.dropdownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="items-start p-1">
        <DropdownMenuGroup>
          {[...roleData, ...(removeAccess ? ["Remove Access"] : [])].map((item, idx) => {
            return (
              <DropdownMenuItem
                key={idx}
                // @ts-ignore
                onClick={() => (item !== "Remove Access" ? editRole({ id, item }) : removeAccess && removeAccess(id))}
                className={`flex cursor-default items-center justify-center gap-[7px] rounded-sm p-1 text-xs capitalize text-accent-foreground ${
                  idx < 2
                    ? "hover:bg-accent"
                    : "cursor-pointer rounded-none border-t-[1px] border-black border-s-stone-50 text-destructive hover:rounded-sm hover:border-none hover:bg-destructive-foreground hover:!text-destructive"
                }`}
              >
                <GoodIcon className={role === item ? "" : "hidden"} />
                {item}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddUser;
