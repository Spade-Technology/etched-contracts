import Image from "next/image";
import BgImage1 from "public/images/dashboard/image1.svg";
import BgImage2 from "public/images/dashboard/image2.svg";
import BgImage3 from "public/images/dashboard/image3.svg";
import BgImage4 from "public/images/dashboard/image4.svg";
import BgImage5 from "public/images/dashboard/image5.svg";
import BgImage6 from "public/images/dashboard/image6.svg";
import BgImage7 from "public/images/dashboard/image7.svg";
import Edit from "./components/edit";
import Comments from "./components/comments";
import AddUser from "./components/add-user";
import { useState } from "react";

const EtchSection = () => {
  const [openAddUser, setOpenAddUser] = useState(false);

  return (
    <div>
      <div className="my-4 flex justify-between gap-4">
        <div className="flex w-fit flex-col justify-between rounded-2xl bg-[#F3F5F5] p-4 text-black">
          <Image src={BgImage1} alt="bgImage" />
          <div className="flex justify-between pt-4">
            <Image src={BgImage2} alt="bgImage" />
            <Image src={BgImage3} alt="bgImage" />
            <Image src={BgImage4} alt="bgImage" />
            <Image src={BgImage5} alt="bgImage" />
            <Image src={BgImage6} alt="bgImage" />
            <Image src={BgImage7} alt="bgImage" />
          </div>
        </div>
        <Edit setOpenAddUser={setOpenAddUser} />
      </div>
      <Comments />

      <AddUser show={openAddUser} setShow={setOpenAddUser} />
    </div>
  );
};

export default EtchSection;
