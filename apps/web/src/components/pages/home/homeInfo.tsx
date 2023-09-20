import Image from "next/image";
import { useRouter } from "next/router";
import ForwardArrow from "public/icons/forward-arrow.svg";

const HomeInfo = () => {
  const router = useRouter();
  return (
    <div>
      <div className="text-4xl font-bold text-black md:text-7xl">Etched: Modernise, Secure, and Manage Your IP</div>

      <div className="py-16 text-base md:text-2xl">
        Our advanced blockchain empowers creators and businesses to redefine digital copyright, trademark security, and IP
        management. With robust safeguards and total transparency, we shield your creativity and brands while unlocking fresh
        earning potential. Join us in shaping the IP future.
      </div>

      <div className="mx-auto flex w-fit flex-col justify-between gap-5 rounded-[40px] bg-[#F1F5F9] p-5 text-lg md:flex-row md:gap-10">
        <input placeholder="Type email address here" className="bg-inherit px-5 outline-none" />

        <div
          onClick={() => router.push("/authentication")}
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
