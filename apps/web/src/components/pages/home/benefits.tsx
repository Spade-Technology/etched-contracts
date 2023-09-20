import Image from "next/image";
import File_SS from "public/images/home/file_SS.svg";
import Storage_SS from "public/images/home/storage_SS.svg";
import Library_SS from "public/images/home/library_SS.svg";
import Dashboard_SS from "public/images/home/dashboard_SS.svg";
import BackImage from "public/images/home/backImage.svg";
import BlackForward from "public/icons/blackForward.svg";
import BenefitsImage from "public/images/home/VDAO-apply.png";
import { useRouter } from "next/router";

const Benefits = () => {
  const router = useRouter();
  return (
    <div className="pt-16 text-center md:pt-28 ">
      <div className="text-[28px] font-semibold text-black md:text-[42px] ">Some benefits</div>
      <div className="flex flex-col  gap-5 py-5 text-left md:flex-row md:justify-evenly">
        <div className="max-w-[273px] mx-auto">
          <div className="rounded-2xl bg-[#ECFDF5] px-14 py-4">
            <div className="text-center font-bold text-[#047857]">File Easily</div>
            <Image src={File_SS} alt="File_SS" width={162} height={111} className="pt-5" />
          </div>

          <div className="py-6 text-2xl font-semibold">User friendly UI</div>

          <div className="text-lg font-normal">
            Etcheds intuitive and user-friendly interface ensures a smooth experience for creators of all levels, without
            requiring any prior blockchain knowledge. Say goodbye to complex tools and hello to effortless IP protection.
          </div>
        </div>

        <div className="max-w-[273px] mx-auto">
          <div className="rounded-2xl bg-[#FFF8E5] px-14 py-4">
            <div className="text-center font-bold text-[#DDA200]">Storage</div>
            <Image src={Storage_SS} alt="File_SS" width={162} height={110} className="mx-auto pt-5" />
          </div>

          <div className="py-6 text-2xl font-semibold">Privacy on your terms</div>

          <div className="text-left text-lg font-normal">
            At Etched, we believe in putting you in control. With our platform, you can choose to keep your intellectual property
            private or share it securely with confidence. Your privacy, your rules.
          </div>
        </div>

        <div className="max-w-[273px] mx-auto">
          <div className="rounded-2xl bg-[#F0F9FF] px-14 py-4">
            <div className="text-center font-bold text-[#0369A1]">Etch Library</div>
            <Image src={Library_SS} alt="File_SS" width={162} height={111} className="mx-auto pt-5" />
          </div>

          <div className="py-6 text-2xl font-semibold">Etch Library</div>

          <div className="text-left text-lg font-normal">
            Keep your creative works organised and accessible in your personal Etch Library. Easily manage, track, and share your
            intellectual property assets from one centralised location.
          </div>
        </div>

        <div className="max-w-[273px] mx-auto">
          <div className="rounded-2xl bg-[#EEF2FF] px-14 py-4">
            <div className="text-center font-bold text-[#4338CA]">Dashboard</div>
            <Image src={Dashboard_SS} alt="Dashboard_SS" width={162} height={110} className="mx-auto pt-5" />
          </div>

          <div className="py-6 text-2xl font-semibold">Manage everything from one screen</div>

          <div className="text-lg font-normal">
            Etched empowers you to effortlessly manage your organisations intellectual property. From overseeing users and
            permissions to tracking etches, our intuitive interface simplifies company-wide IP management. Stay in control and
            protect your assets seamlessly.
          </div>
        </div>
      </div>

      <div className="relative mt-32 rounded-3xl bg-gradient-to-r from-green-400 to-blue-500 pt-10 md:pt-24 ">
        {/* <Image src={BackImage} alt="BackImage" className=" " /> */}

        <div className=" flex flex-col justify-between md:flex-row">
          <div className="my-auto px-10 text-left text-xl text-white font-medium">
            Unlock these advantages and more on a single platform. Tap the button below to get on the waitlist.
            <div
              onClick={() => router.push("/authentication")}
              className="my-5 flex w-fit cursor-pointer gap-3 rounded-[60px] bg-white px-10 py-5 text-base font-semibold text-black"
            >
              Join Waitlist
              <Image src={BlackForward} alt="forward" />
            </div>
          </div>

          <div>
            <Image
              src={Library_SS}
              height={180}
              width={325}
              alt="File_SS"
              className="relative float-right rounded-r-none rounded-t-2xl bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
