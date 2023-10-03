import Image from "next/image";
import { useRouter } from "next/router";
import ForwardArrow from "public/icons/forward-arrow.svg";
import { Icons } from "../../ui/icons";
import { Dispatch, SetStateAction } from "react";
// import bg from ""

interface Props {
  setShowWaitlist: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setShowWaitlist }: Props) => {
  const router = useRouter();

  return (
    <div className="mx-5 flex justify-between md:mx-24 md:gap-20">
      <Icons.logoLong
        color="#097B45"
        className="my-auto h-8 cursor-pointer align-middle md:mr-2"
        onClick={() => router.push("/")}
      />
      <div className="h-36 bg-[url('/images/backgrounds/middleHeaderBg.svg')] md:w-fit md:px-96">
        <div className="hidden ">
          <div className="flex gap-5">
            <div
              onClick={() => router.push("/")}
              className="m-auto  cursor-pointer rounded-2xl bg-[#E3FFF2] px-5 py-2 text-lg font-medium text-[#097B45]"
            >
              Home
            </div>

            <div
              onClick={() => router.push("/dashboard")}
              className="m-auto  cursor-pointer rounded-2xl bg-[#E3FFF2] px-5 py-2 text-lg font-medium text-[#097B45]"
            >
              Dashboard
            </div>

            <div
              // onClick={() => router.push("/authentication")}
              className="m-auto  cursor-pointer rounded-2xl bg-[#E3FFF2] px-5 py-2 text-lg font-medium text-[#097B45]"
            >
              Create/Sign In
            </div>
          </div>
        </div>
      </div>
      <div
        // onClick={() => router.push("/authentication")}
        onClick={() => setShowWaitlist(true)}
        className="my-auto flex  w-fit cursor-pointer gap-3 rounded-3xl bg-[#097B45] px-7 py-3 text-sm font-semibold text-white md:text-lg"
      >
        Join Waitlist
        <Image src={ForwardArrow} alt="forward" />
      </div>
    </div>
  );
};

export default Header;
