import Image from "next/image";
import File_SS from "public/images/home/file_SS.svg";
import Storage_SS from "public/images/home/storage_SS.svg";
import Library_SS from "public/images/home/library_SS.svg";
import Dashboard_SS from "public/images/home/dashboard_SS.svg";
import BackImage from "public/images/home/backImage.svg";
import BlackForward from "public/icons/blackForward.svg";
import { useRouter } from "next/router";
import GradientImg from "public/images/home/Gradient.svg";
import { Dispatch, SetStateAction } from "react";
import { features } from "./mockData";

interface Props {
  setShowWaitlist: Dispatch<SetStateAction<boolean>>;
}

const Benefits = ({ setShowWaitlist }: Props) => {
  const router = useRouter();
  return (
    <div className="mx-auto w-full max-w-[1566px] pt-[76px] text-center md:pt-[131px]">
      <div className="text-[28px] font-semibold text-black md:text-[42px]">Key Features</div>
      {/* FEATURES/BENEFITS */}
      <div className="relative -z-10 flex grid-cols-12 flex-col gap-[46px] pt-10 text-left min-[360px]:px-[42px] sm:grid">
        {features.reverse().map(({ title, text, description, color, background, img }, index) => {
          return (
            <div className={` sm:col-span-6 lg:col-span-3`}>
              <div className={`rounded-2xl px-14 py-4 ` + `${background}`}>
                <div className={`text-center text-lg font-bold ${color}`}>{title}</div>
                <Image src={img} alt="File_SS" width={162} height={110} className={`mx-auto pt-5`} />
              </div>
              <div className={`pb-4 pt-6 text-2xl font-semibold`}>{text}</div>

              <div className="text-lg font-normal leading-7 tracking-[0.144px]">{description}</div>
            </div>
          );
        })}
        <div className="absolute right-[-306px] top-16 -z-10 hidden h-[946px] w-[946px] bg-[url(/images/home/blur.svg)] bg-contain bg-center bg-no-repeat md:block">
          <div className=" absolute left-0 top-0 -z-10 h-full w-full bg-white opacity-80 blur-[75px]"></div>
        </div>
      </div>
      {/* bg-gradient-to-r from-green-400 to-cyan-500 */}

      <div
        className={`max-xs:p-5 relative z-10 mx-auto mt-40 flex h-[539px] max-w-[1238px] flex-col gap-7 overflow-hidden
      rounded-[32px] bg-[url(/images/home/backImage.svg)] bg-cover bg-center bg-no-repeat p-10 md:h-[438px] md:pb-[95px] md:pl-[45px]`}
      >
        {/* <Image src={GradientImg} alt="BackImage" className="rounded-3xl" /> */}
        {/* md:bottom-[340px] */}
        <div className="max-w-[500px] text-left text-xl font-medium leading-[28px] text-white md:mt-auto md:w-6/12 xl:max-w-[600px]">
          Unlock these advantages and more on a single platform. Tap the button below to get on the waitlist.
        </div>

        <div
          // onClick={() => router.push("/authentication")}
          onClick={() => setShowWaitlist(true)}
          className="max-xs:px-5 max-xs:py-2 flex w-fit cursor-pointer items-center gap-[21px] rounded-[52.293px] bg-white px-[39px] py-[19px] font-campton  font-semibold text-black shadow-[0px_2.80141px_11.20565px_0px_rgba(20,20,43,0.10)]"
        >
          Join Waitlist
          <Image src={BlackForward} alt="forward" />
        </div>

        <Image
          src={Library_SS}
          height={350}
          width={485}
          alt="File_SS"
          className="absolute bottom-[-10.5px] right-[-25.42px] w-[352px] rounded-r-none rounded-t-2xl bg-white max-md:h-[253px] md:bottom-[-24px] md:right-[-17px] md:w-[385px] lg:w-[485px]"
        />
      </div>
    </div>
  );
};

export default Benefits;
