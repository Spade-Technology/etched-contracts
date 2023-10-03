import Image from "next/image";
import { useRouter } from "next/router";
import ForwardArrow from "public/icons/forward-arrow.svg";
import { Dispatch, SetStateAction, useState } from "react";
import LeftHeaderBg from "public/images/backgrounds/leftHeaderBg.svg";
import RightHeaderBg from "public/images/backgrounds/RightHeaderBg.svg";

interface Props {
  setShowWaitlist: Dispatch<SetStateAction<boolean>>;
}
const HomeInfo = ({ setShowWaitlist }: Props) => {
  const router = useRouter();
  return (
    <div>
      <div className="relative mx-auto max-w-[1266px] text-4xl font-bold text-black md:text-[80px] md:leading-[90px]  xl:leading-normal">
        <Image
          src={RightHeaderBg}
          alt=""
          className="absolute right-[-120px] top-[-31px] -z-10 h-[154px] w-[330px] bg-[url(/images/home/leftWave.svg)] bg-contain bg-center bg-no-repeat opacity-50 md:right-[-173px] md:top-[-30px] md:h-[263px] md:w-[562px] xl:right-[-230px] xl:top-[-58.58px]"
        />
        <div className="mx-auto max-w-[1238px]">Modernise, Secure, and Manage Your IP</div>
        <Image
          src={LeftHeaderBg}
          alt=""
          className="absolute left-[-127px] top-[116.58px] -z-10 h-[155px] w-[332px] bg-[url(/images/home/wave.svg)] bg-contain bg-center bg-no-repeat opacity-50 md:bottom-[-200.58px] md:left-[-139px] md:top-auto md:h-[299.65px] md:w-[641px] xl:left-[-230px]"
        />
      </div>
      <div>
        <div className="mx-auto max-w-[1500px] py-11 font-campton text-base font-normal leading-5 tracking-[0.192px] md:py-16 md:text-2xl md:leading-[34px]">
          Create an ‘Etch’ and secure your intellectual property. An Etch is digital evidence, like a strain of DNA that is linked
          to the essence of your creation, proving what you did, when you say you did it. Etched empowers you to redefine your
          copyright, trademark security, and IP management. With robust safeguards and total transparency, we shield your
          creativity and brands while unlocking fresh earning potential.
          <br />
          <br /> “Imagine more, create with confidence and worry less”
        </div>
      </div>

      <div className="mx-auto flex flex-col justify-between gap-5 rounded-[40px] bg-[#F1F5F9] py-5 text-lg max-md:max-w-[353px] max-md:items-center md:w-[630px] md:flex-row md:gap-10 md:pl-[42px] md:pr-5">
        <input
          placeholder="Type email address here"
          className="w-full max-w-[300px] bg-inherit px-5 text-base font-normal outline-none max-md:text-center"
        />

        <div
          // onClick={() => router.push("/authentication")}
          onClick={() => setShowWaitlist(true)}
          className="flex cursor-pointer items-center gap-[10px] rounded-3xl bg-[#097B45] px-[30px] py-[15px] font-campton text-sm font-semibold text-white md:text-lg"
        >
          Join Waitlist
          <Image src={ForwardArrow} alt="forward" className="h-[15px] w-[12.049px]" />
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
