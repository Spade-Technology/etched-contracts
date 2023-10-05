import Image from "next/image";
import { useRouter } from "next/router";
import ForwardArrow from "public/icons/forward-arrow.svg";
import { Dispatch, SetStateAction, useState } from "react";
import LeftHeaderBg from "public/images/backgrounds/leftHeaderBg.svg";
import RightHeaderBg from "public/images/backgrounds/rightHeaderBg.svg";

interface Props {
  setShowWaitlist: (open: boolean | string) => void;
}

const HomeInfo = ({ setShowWaitlist }: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="relative mx-auto max-w-[1280px] text-4xl font-bold text-black md:text-[80px] md:leading-[45px]  xl:leading-tight">
        <Image
          src={RightHeaderBg}
          alt=""
          className="absolute right-[-120px] top-[-31px] -z-10 h-[154px] w-[330px] bg-[url(/images/home/leftWave.svg)] bg-contain bg-center bg-no-repeat opacity-50 md:right-[-173px] md:top-[-30px] md:h-[263px] md:w-[562px] xl:right-[-230px] xl:top-[-58.58px]"
        />
        <div className="mx-auto max-w-[1280px]">The modern way to claim, manage and immortalise IP</div>
        <Image
          src={LeftHeaderBg}
          alt=""
          className="absolute left-[-127px] top-[116.58px] -z-10 h-[155px] w-[332px] bg-[url(/images/home/wave.svg)] bg-contain bg-center bg-no-repeat opacity-50 md:bottom-[-200.58px] md:left-[-139px] md:top-auto md:h-[299.65px] md:w-[641px] xl:left-[-230px]"
        />
      </div>

      <div className="mx-auto my-16 max-w-[1280px] text-center text-[22px] font-normal leading-8 tracking-[0.18px] text-slate-600">
        The future of IP management is here. An ‘Etch’ is digital evidence of what you do and when you do it. By allowing you to
        create ‘Etches’, Etched empowers you to claim and control your intellectual property worldwide, at the click of a button,
        even if you do not have it registered. It allows you to manage your IP better by changing the way you think of your
        intellectual assets and how you build, manage and monetise your portfolios. <br />
        <br />
        “Etched is digital DNA”
      </div>

      <div className="mx-auto flex flex-col justify-between gap-5 rounded-[40px] bg-[#F1F5F9] py-5 text-lg max-md:max-w-[353px] max-md:items-center md:w-[630px] md:flex-row md:gap-10 md:pl-[42px] md:pr-5">
        <input
          placeholder="Type email address here"
          className="w-full max-w-[300px] bg-inherit px-5 text-base font-normal outline-none max-md:text-center"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div
          // onClick={() => router.push("/authentication")}
          onClick={() => setShowWaitlist(email.length > 0 ? email : true)}
          className="flex cursor-pointer items-center gap-[10px] rounded-3xl bg-[#097B45] px-[30px] py-[15px] font-campton text-sm font-semibold text-white md:text-lg"
        >
          Join Waitlist
          <Image src={ForwardArrow} alt="forward" className="h-[15px] w-[12px]" />
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
