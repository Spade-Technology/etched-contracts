import Image from "next/image";
import { useRouter } from "next/router";
import BlackForward from "public/icons/blackForward.svg";
import Dashboard_SS from "public/images/home/dashboard_SS.svg";
import File_SS from "public/images/home/file_SS.svg";
import Library_SS from "public/images/home/library_SS.svg";
import Storage_SS from "public/images/home/storage_SS.svg";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setShowWaitlist: Dispatch<SetStateAction<boolean>>;
}

const Benefits = ({ setShowWaitlist }: Props) => {
  const router = useRouter();
  return (
    <div className="mx-5 pt-16 text-center  md:mx-24 md:pt-28 ">
      <div className="text-[28px] font-semibold text-black md:text-[42px] ">Key Features</div>
      <div className="flex flex-col  gap-5 py-5 text-left md:flex-row md:justify-evenly">
        <div className="mx-auto max-w-[273px] ">
          <div className="rounded-2xl bg-[#FFF8E5] px-14 py-4">
            <div className="text-center font-bold text-[#DDA200]">Storage</div>
            <Image src={Storage_SS} alt="File_SS" width={162} height={110} className="mx-auto pt-5" />
          </div>

          <div className="py-6 text-center text-2xl font-semibold md:text-left">Privacy on your terms</div>

          <div className="text-center text-lg font-normal md:text-left">
            At Etched, we believe in putting you in control. With our platform, you can choose to keep your intellectual property
            private or share it securely with confidence. Your privacy, your rules.
          </div>
        </div>

        <div className="mx-auto max-w-[273px]">
          <div className="rounded-2xl bg-[#F0F9FF] px-14 py-4">
            <div className="text-center font-bold text-[#0369A1]">Etch Library</div>
            <Image src={Library_SS} alt="File_SS" width={162} height={111} className="mx-auto pt-5" />
          </div>

          <div className="py-6 text-center text-2xl font-semibold md:text-left">Etch Library</div>

          <div className=" text-center text-lg font-normal md:text-left">
            Keep your creative works organised and accessible in your personal Etch Library. Easily manage, track, and share your
            intellectual property assets from one centralised location.
          </div>
        </div>

        <div className="mx-auto max-w-[273px]">
          <div className="rounded-2xl bg-[#EEF2FF] px-14 py-4">
            <div className="text-center font-bold text-[#4338CA]">Dashboard</div>
            <Image src={Dashboard_SS} alt="Dashboard_SS" width={162} height={110} className="mx-auto pt-5" />
          </div>

          <div className="py-6 text-center text-2xl font-semibold md:text-left">Manage from one screen</div>

          <div className="text-center text-lg font-normal md:text-left">
            Etched empowers you to effortlessly manage your organisations intellectual property. From overseeing users and
            permissions to tracking etches, our intuitive interface simplifies company-wide IP management. Stay in control and
            protect your assets seamlessly.
          </div>
        </div>

        <div className="mx-auto max-w-[273px]">
          <div className="rounded-2xl bg-[#ECFDF5] px-14 py-4">
            <div className="text-center font-bold text-[#047857]">File Easily</div>
            <Image src={File_SS} alt="File_SS" width={162} height={111} className="pt-5" />
          </div>

          <div className="py-6 text-center text-2xl font-semibold md:text-left">User friendly UI</div>

          <div className="text-center text-lg font-normal md:text-left">
            Etcheds intuitive and user-friendly interface ensures a smooth experience for creators of all levels, without
            requiring any prior blockchain knowledge. Say goodbye to complex tools and hello to effortless IP protection.
          </div>
        </div>
      </div>
      {/* bg-gradient-to-r from-green-400 to-cyan-500 */}
      <div className={`my-32 rounded-3xl bg-[url('/images/home/backImage.svg')] pt-10 md:pt-24`}>
        {/* <Image src={GradientImg} alt="BackImage" className="rounded-3xl" /> */}
        {/* md:bottom-[340px] */}
        <div className="relative flex flex-col justify-between md:flex-row">
          <div className=" max-w-[600px] px-10 text-left text-xl font-medium text-white">
            Unlock these advantages and more on a single platform. Tap the button below to get on the waitlist.
            <div
              // onClick={() => router.push("/authentication")}
              onClick={() => setShowWaitlist(true)}
              className="my-10 flex w-fit cursor-pointer gap-3 rounded-[60px] bg-white px-10 py-5 text-base font-semibold text-black md:my-20"
            >
              Join Waitlist
              <Image src={BlackForward} alt="forward" />
            </div>
          </div>

          <div>
            <Image
              src={Library_SS}
              height={350}
              width={485}
              alt="File_SS"
              className="relative float-right w-[285px] rounded-r-none rounded-t-2xl bg-white md:w-[485px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
