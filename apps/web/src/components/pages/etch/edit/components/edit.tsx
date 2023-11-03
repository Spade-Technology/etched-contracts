import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import AddIcon from "public/icons/dashboard/editEtch/addIcon.svg";
import PenIcon from "public/icons/dashboard/editEtch/pen.svg";
import Placeholder1 from "public/icons/dashboard/placeholder1.svg";
import Placeholder2 from "public/icons/dashboard/placeholder2.svg";
import Placeholder3 from "public/icons/dashboard/placeholder3.svg";
import BgEditVector from "public/images/backgrounds/dashboard/editVector.svg";
import BgVector from "public/images/backgrounds/dashboard/vector.svg";
import { Dispatch, SetStateAction, useState } from "react";
import ProfileCard from "../../../../ui/profile-card";
import { Etch, Wallet } from "@/gql/graphql";
import { formatUserFromWallet } from "@/utils/hooks/address";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { api } from "@/utils/api";
import { Textarea } from "@/components/ui/textarea";
dayjs.extend(relativeTime);

type EditProps = {
  setOpenAddUser: Dispatch<SetStateAction<boolean>>;
  etch?: Partial<Etch>;
  isLoading?: boolean;
};

const Edit = ({ setOpenAddUser, etch, isLoading }: EditProps) => {
  const [owner, setOwner] = useState(false);
  const [edit, setEdit] = useState(false);
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
          <ProfileCard image={Placeholder1} name="jimcarlosxsak23.etched" link="0x1234...5678" role="owner" />
          <ProfileCard image={Placeholder2} name="tom.etched" link="0x2234...5678" role="editor" />

          <ProfileCard image={Placeholder3} name="louis.etched" link="0x3234...5678" role="editor" />

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

export default Edit;
