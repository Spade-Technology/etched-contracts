import Image from "next/image";
import BgImage1 from "public/images/dashboard/image1.svg";
import BgImage2 from "public/images/dashboard/image2.svg";
import BgImage3 from "public/images/dashboard/image3.svg";
import BgImage4 from "public/images/dashboard/image4.svg";
import BgImage5 from "public/images/dashboard/image5.svg";
import BgImage6 from "public/images/dashboard/image6.svg";
import { useState } from "react";
import AddUser from "./components/add-user";
import Comments from "./components/comments";
import Edit from "./components/edit";
import { Etch } from "@/gql/graphql";

const EtchSection = ({ etch, isLoading }: { etch?: Partial<Etch>; isLoading: boolean }) => {
  const [openAddUser, setOpenAddUser] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const imagesList = [BgImage1, BgImage2, BgImage3, BgImage4, BgImage5, BgImage6];

  return (
    <div>
      <div className="my-4 flex justify-between gap-4">
        <div className="flex w-full basis-2/3 flex-col justify-between rounded-2xl bg-[#F3F5F5] p-4 text-black">
          <Image
            src={selectedImg ? selectedImg : BgImage1}
            height={564}
            width={684}
            alt="bgImage"
            className="col-span-2 mx-auto my-auto"
          />
          <div className="flex h-full w-full  justify-center gap-2 pt-4">
            {imagesList.map((image, idx) => {
              return (
                <Image
                  height={112}
                  width={108}
                  key={idx}
                  src={image}
                  alt="bgImage"
                  className={` ${image === selectedImg ? "rounded-md border-2 border-[#097B45]" : ""} cursor-pointer`}
                  onClick={() => setSelectedImg(image)}
                />
              );
            })}
          </div>
        </div>
        <Edit setOpenAddUser={setOpenAddUser} etch={etch} isLoading={isLoading} />
      </div>
      <Comments />

      <AddUser show={openAddUser} setShow={setOpenAddUser} />
    </div>
  );
};

export default EtchSection;
