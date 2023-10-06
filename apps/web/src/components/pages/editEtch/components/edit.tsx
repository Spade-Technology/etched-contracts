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
import ProfileCard from "../../../ui/profile-card";

type EditProps = {
  setOpenAddUser: Dispatch<SetStateAction<boolean>>;
};

const Edit = ({ setOpenAddUser }: EditProps) => {
  const [owner, setOwner] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <div className={` ${edit ? "bg-[#F3F5F5] text-[#6D6D6D]" : " bg-[#097B45] text-[#FBFBFB]"} relative  z-10 w-fit rounded-2xl`}>
      <Image src={edit ? BgEditVector : BgVector} alt="" className="absolute right-0 -z-10 rounded-2xl bg-transparent" />
      <div className="z-10 p-7">
        <div className="flex justify-between gap-24  ">
          {edit ? (
            <div className="w-full">
              <div>Etch Name</div>
              <Input placeholder="Etch Name" className="w-full bg-[#F3F5F5]" />
            </div>
          ) : (
            <div className="flex justify-between">
              <Icons.etchedIcon className="my-auto h-8 cursor-pointer align-middle md:mr-2" />
              <div className="my-auto text-2xl">Etch Name</div>
            </div>
          )}
          {!edit && (
            <Button
              variant="default"
              onClick={() => setEdit(true)}
              className="gap-2 rounded-full  bg-[#A1FFD3] px-3 text-base text-[#097B45]  "
            >
              Edit Etch <Image src={PenIcon} alt="penIcon" />
            </Button>
          )}
        </div>
        <div className="pt-5 text-base"> Owned by </div>
        <div className="flex justify-between py-1">
          <div className={`text-base font-normal ${edit ? "#6D6D6D" : "text-[#E2E2E2]"}`}>jimcarlosxsak23.etched</div>
          <Button
            variant="default"
            onClick={() => setEdit(false)}
            className={`${
              edit ? "border-[#097B45] bg-transparent text-[#097B45]" : "border-[#A1FFD3] text-[#A1FFD3]"
            } gap-2  rounded-full  border-[1px] px-3 text-base`}
          >
            <span className="my-auto">Transfer</span>
            <Icons.transferIcon color={edit ? "#097B45" : "#A1FFD3"} className="align-middle" />
          </Button>
        </div>

        <div className="text-base"> Time Stamp </div>
        <div className={`pt-1 text-base font-normal ${edit ? "#6D6D6D" : "text-[#E2E2E2]"}`}>12:23 PM UTC | 18 Sep, 2023</div>

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
        <div className={`${edit ? "bg-[#FFF]" : "bg-[#A1FFD3]"} mt-7 rounded-2xl p-4 text-[#6D6D6D]`}>
          <div>Shared with</div>
          <ProfileCard image={Placeholder1} name="Jim Carlos" link="jimcarlosxsak23.etched" role="owner" />
          <ProfileCard image={Placeholder2} name="Tom Robins" link="tom.etched" role="editor" />

          <ProfileCard image={Placeholder3} name="Tom Robins" link="tom.etched" role="editor" />

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
              <Button className="border-none bg-transparent text-[#6D6D6D]">Cancel</Button>

              <Button className="rounded-lg">Save Changes</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edit;
