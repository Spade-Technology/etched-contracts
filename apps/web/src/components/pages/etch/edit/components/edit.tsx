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
dayjs.extend(relativeTime);

type EditProps = {
  setOpenAddUser: Dispatch<SetStateAction<boolean>>;
  etch?: Partial<Etch>;
  isLoading?: boolean;
};

const Edit = ({ setOpenAddUser, etch, isLoading }: EditProps) => {
  const [owner, setOwner] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <div
      className={` ${
        edit ? "bg-[#F3F5F5] text-[#6D6D6D]" : " bg-[#097B45] text-[#FBFBFB]"
      } relative z-10 w-fit basis-1/3 rounded-2xl transition-colors mx-auto`}
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
              <div>{etch?.documentName ? etch?.documentName : "Etch Name" }</div>
              <Input defaultValue={etch?.documentName} className="w-full bg-[#F3F5F5]" />
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
            ) : etch?.ownership ?  (
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
            ): "0x00....000000"}
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
            <textarea
              className="h-44 w-full rounded-[6px] border-[1px] border-[#6D6D6D] p-4 outline-none"
              placeholder="Lorem ipsum dolor sit amet consectetur. Eu morbi bibendum purus lectus et tellus sed enim. Elit commodo laoreet molestie consectetur lectus ultricies enim elit. Massa lacus porttitor at ultrices.tur lectus ultricies ornare et loreitor at "
            />
          ) : (
            <div className="max-w-[400px] pt-1 text-base font-normal text-[#E2E2E2]">
              Lorem ipsum dolor sit amet consectetur. Eu morbi bibendum purus lectus et tellus sed enim. Vulputate aenean massa
              ultrices arcu pharetra ornare et lorem. Elit commodo laoreet molestie consectetur lectus ultricies enim elit. Massa
              lacus porttitor at ultrices.tur lectus ultricies ornare et loreitor at.
            </div>
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

              <Button className="rounded-lg">Save Changes</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edit;
