import Image from "next/image";
import { useRouter } from "next/router";
import ForwardArrow from "public/icons/forward-arrow.svg";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  setShowWaitlist: Dispatch<SetStateAction<boolean>>;
}
const HomeInfo = ({ setShowWaitlist }: Props) => {
  const router = useRouter();
  return (
    <div>
      <div className="font-body max-w-[800px] mx-auto text-4xl font-bold text-black md:text-7xl">
        Modernise, Secure, and Manage Your IP
      </div>

      <div className="py-16 text-base md:text-2xl">
        Create an ‘Etch’ and secure your intellectual property. An Etch is digital evidence, like a strain of DNA that is linked
        to the essence of your creation, proving what you did, when you say you did it. Etched empowers you to redefine your
        copyright, trademark security, and IP management. With robust safeguards and total transparency, we shield your creativity
        and brands while unlocking fresh earning potential.
        <br />
        <br /> “Imagine more, create with confidence and worry less”
      </div>

      <div className="mx-auto flex w-fit flex-col justify-between gap-5 rounded-[40px] bg-[#F1F5F9] p-5 text-lg md:flex-row md:gap-10">
        <input placeholder="Type email address here" className="bg-inherit px-5 outline-none" />

        <div
          // onClick={() => router.push("/authentication")}
          onClick={() => setShowWaitlist(true)}
          className="mx-auto flex w-fit cursor-pointer gap-3 rounded-3xl bg-[#097B45] px-7 py-3  font-semibold text-white"
        >
          Join Waitlist
          <Image src={ForwardArrow} alt="forward" />
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
