import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import AddIcon from "public/icons/dashboard/editEtch/addIcon.svg";
import PenIcon from "public/icons/dashboard/editEtch/pen.svg";
import Placeholder1 from "public/icons/dashboard/placeholder1.svg";
import Placeholder2 from "public/icons/dashboard/placeholder2.svg";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import BgEditVector from "public/images/backgrounds/dashboard/editVector.svg";
import BgVector from "public/images/backgrounds/dashboard/vector.svg";
import { Dispatch, SetStateAction, useState } from "react";
import ProfileCard from "../../../../ui/profile-card";
import { Etch, Team } from "@/gql/graphql";
import { formatUserFromWallet } from "@/utils/hooks/address";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { api } from "@/utils/api";
import { Textarea } from "@/components/ui/textarea";
import { teamUser } from "@/types";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";
import { toast } from "@/components/ui/use-toast";
import { TeamInputDropdown, UsersInputDropdown } from "@/components/ui/input-dropdown";

dayjs.extend(relativeTime);

type EditProps = {
  setOpenAddUser: Dispatch<SetStateAction<boolean>>;
  etch?: Partial<Etch>;
  isLoading?: boolean;
};

const userPermissions: {
  0: string;
  1: string;
  2: string;
  [key: number]: string;
} = {
  0: "none",
  1: "read",
  2: "read & write",
};

const Edit = ({ setOpenAddUser, etch, isLoading }: EditProps) => {
  const [edit, setEdit] = useState(false);
  const [openTransferOwnerShipDialog, setOpenTransferOwnerShipDialog] = useState(false);
  const [documentName, setDocumentName] = useState(etch?.documentName || "");
  const [description, setDescription] = useState(etch?.description || "");
  const { mutateAsync: updateAsync, isLoading: updateLoading } = api.etch.updateMetadata.useMutation();

  const saveHandler = async () => {
    try {
      await updateAsync({
        etchId: etch?.tokenId.toString(),
        fileName: documentName || etch?.documentName || "",
        description: description || etch?.description || "",
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
      });
    } catch (error) {
      console.error(error);
    }

    setEdit(false);
  };

  console.log(etch);

  return (
    <div
      className={` ${
        edit ? "bg-[#F3F5F5] text-[#6D6D6D]" : " bg-[#097B45] text-[#FBFBFB]"
      } relative z-10 w-fit basis-1/3 rounded-2xl transition-colors`}
    >
      <TransferOwnershipDialog
        openDialog={openTransferOwnerShipDialog}
        setOpenDialog={setOpenTransferOwnerShipDialog}
        etchId={etch?.tokenId}
      />
      <Image
        src={edit ? BgEditVector : BgVector}
        alt=""
        className="absolute right-0 -z-10 rounded-2xl bg-transparent transition-all"
      />
      <div className="z-10 flex h-full flex-col p-7">
        <div className="flex justify-between gap-4">
          {edit ? (
            <div className=" w-full">
              <div>{etch?.documentName}</div>
              <Input
                defaultValue={etch?.documentName}
                onChange={(e) => setDocumentName(e.target.value)}
                disabled={updateLoading}
                className="w-full bg-[#F3F5F5]"
              />
            </div>
          ) : (
            <div className="flex justify-between">
              <Icons.etchedIcon className="my-auto h-8 cursor-pointer align-middle md:mr-2" />
              {isLoading ? (
                <Skeleton className="my-auto mt-1 h-6 w-24 text-2xl" />
              ) : (
                <div className="my-auto mt-1 text-2xl">{etch?.documentName}</div>
              )}
            </div>
          )}
          {!edit && (
            <Button
              variant="default"
              onClick={() => setEdit(true)}
              className="w-40 gap-2 rounded-full  bg-[#A1FFD3] px-3 text-base text-[#097B45]  "
            >
              Edit Etch <Image src={PenIcon} alt="penIcon" />
            </Button>
          )}
        </div>

        <div>
          <div className="pt-5 text-base"> Owned by </div>
          <div className="flex justify-between py-1">
            {isLoading ? (
              <Skeleton className="my-auto h-4 w-16" />
            ) : (
              <Link
                className={`text-base font-normal hover:underline ${edit ? "#6D6D6D" : "text-[#E2E2E2]"}`}
                href={
                  etch?.ownership?.team
                    ? `/dashboard/teams/${etch?.ownership?.team?.teamId}`
                    : `/dashboard/users/${etch?.ownership?.owner?.id}`
                }
              >
                {formatUserFromWallet({
                  user: etch?.ownership?.owner,
                  isLoading,
                  override: etch?.ownership?.team?.name,
                })}
              </Link>
            )}
            <Button
              onClick={() => setOpenTransferOwnerShipDialog(true)}
              variant="default"
              className={`${
                edit ? "border-[#097B45] bg-transparent text-[#097B45]" : "border-[#A1FFD3] text-[#A1FFD3]"
              } gap-2  rounded-full  border-[1px] px-3 text-base`}
            >
              <span className="my-auto">Transfer</span>
              <Icons.transferIcon color={edit ? "#097B45" : "#A1FFD3"} className="align-middle" />
            </Button>
          </div>
        </div>

        <div>
          <div className="text-base"> Time Stamp </div>
          {isLoading ? (
            <div className="flex w-full gap-1">
              <Skeleton className="my-auto h-4 w-16" /> UTC | <Skeleton className="my-auto h-4 w-3" /> /{" "}
              <Skeleton className="my-auto h-4 w-3" /> / <Skeleton className="my-auto h-4 w-3" />
            </div>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className={`pt-1 text-base font-normal ${edit ? "#6D6D6D" : "text-[#E2E2E2]"}`}>
                    {new Date(etch?.createdAt * 1000).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "UTC",
                    })}{" "}
                    UTC | {new Date(etch?.createdAt * 1000).toLocaleDateString()}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{dayjs.unix(etch?.createdAt).from(dayjs())}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        <div>
          <div className="pt-5 text-base">Description </div>
          {edit ? (
            <Textarea
              defaultValue={etch?.description || ""}
              onChange={(e) => setDescription(e.target.value)}
              disabled={updateLoading}
              className="mb-5 w-full bg-[#F3F5F5]"
            />
          ) : (
            <div className="mb-5 max-w-[400px] pt-1 text-base font-normal text-[#E2E2E2]">{etch?.description}</div>
          )}
        </div>

        <div className={`${edit ? "bg-[#FFF]" : "bg-[#A1FFD3]"} mt-auto rounded-2xl p-4 text-[#6D6D6D]`}>
          <div>Shared with</div>
          {etch?.permissions?.map((perm) => {
            if (perm.wallet)
              return (
                <ProfileCard
                  image={Placeholder1}
                  name={perm.wallet.etchENS[0]?.name || "Unamed User"}
                  link={perm.wallet.id}
                  role={userPermissions[perm.permissionLevel]}
                />
              );
          })}
          {etch?.permissions?.map((perm) => {
            // CHANGE THE ICON.
            if (perm.team)
              return (
                <ProfileCard
                  image={Placeholder2}
                  name={perm.team.name || "Unamed Team"}
                  link={perm.team.id}
                  role={userPermissions[perm.permissionLevel]}
                />
              );
          })}

          <Button
            onClick={() => setOpenAddUser(true)}
            className="mt-10 w-full gap-3 rounded-3xl border-[2px] border-[#097B45] bg-transparent text-[#097B45] "
          >
            <Image src={AddIcon} alt="add-icon" /> Add more users
          </Button>
        </div>

        {edit && (
          <div className="float-right py-5">
            <div className="flex justify-start gap-5">
              <Button className="border-none bg-transparent text-[#6D6D6D]" onClick={() => setEdit(false)}>
                Cancel
              </Button>

              <Button className="rounded-lg" onClick={saveHandler} isLoading={updateLoading}>
                Save Changes
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface transferOwnershipProps {
  etchId: number;
  setOpenDialog: (bool: boolean) => void;
  openDialog: boolean;
}

const TransferOwnershipDialog: React.FC<transferOwnershipProps> = ({ etchId, openDialog, setOpenDialog }) => {
  const [owner, setOwner] = useState("individual");
  const [newTeam, setNewTeam] = useState<Team[]>([]);
  const [newIndiv, setNewIndiv] = useState<teamUser[]>([]);

  const { mutateAsync: transferToTeamAsync, isLoading: isTransferToTeamLoading } = api.etch.transferToTeam.useMutation();
  const { mutateAsync: transferToIndividualAsync, isLoading: isTransferToIndivLoading2 } =
    api.etch.transferToIndividual.useMutation();
  const isLoading = isTransferToTeamLoading || isTransferToIndivLoading2;

  const from = useLoggedInAddress();

  const transfer = async (e: any) => {
    e.preventDefault();
    if (owner === "team" && newTeam.length) {
      const { teamId } = newTeam[0] as Team;

      await transferToTeamAsync({
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
        teamId: +teamId,
        tokenId: +etchId,
      });
      toast({
        title: "Ownership Updated",
        description: "successfull",
        variant: "success",
      });
    } else if (owner === "individual" && newIndiv.length) {
      const { id } = newIndiv[0] as teamUser;

      await transferToIndividualAsync({
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
        tokenId: +etchId,
        to: id,
        from,
      });
      toast({
        title: "Ownership Updated",
        description: "successfull",
        variant: "success",
      });
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
    }
    setOpenDialog(false);
  };

  return (
    <Dialog
      open={openDialog}
      onOpenChange={() => {
        setOpenDialog(false);
      }}
    >
      <DialogContent className={"max-w-[440px]"}>
        <DialogTitle className="text-base text-primary">Transfer Ownership</DialogTitle>
        <DialogDescription>
          <form onSubmit={transfer}>
            <Label className="font-semibold">Select</Label>
            <section className="mb-7 mt-[9px] flex gap-5">
              {["individual", "team"].map((item, id) => {
                return (
                  <div key={id} onClick={() => setOwner(item)} className="flex items-center gap-1">
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
            </section>
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

            {owner === "team" && (
              <>
                <Label className="font-semibold">Team Name</Label>
                <TeamInputDropdown
                  type={"singleSelect"}
                  roleData={[]}
                  placeholder={"ex: astrew.etched"}
                  selectedItems={newTeam}
                  setSelectedItems={setNewTeam}
                />
              </>
            )}

            <footer className="mt-10 flex items-center justify-end gap-5">
              <div onClick={() => setOpenDialog(false)} className="cursor-pointer text-sm font-semibold hover:text-foreground">
                Cancel
              </div>
              <div>
                <Button
                  isLoading={isLoading}
                  type="submit"
                  className={`${newTeam.length < 1 && newIndiv.length < 1 ? " cursor-not-allowed" : ""}`}
                >
                  Done
                </Button>
              </div>
            </footer>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default Edit;
