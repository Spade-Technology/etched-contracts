import Image from "next/image";
import { useRouter } from "next/router";
import ForwardArrow from "public/icons/forward-arrow.svg";
import { Dispatch, SetStateAction } from "react";
import { Icons } from "../../ui/icons";
// import bg from ""

interface Props {
  setShowWaitlist: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setShowWaitlist }: Props) => {
  const router = useRouter();

  return (
    <div className="relative z-10 mx-auto flex max-w-[1566px] justify-between gap-3 pb-[88px] pt-[62px] md:pb-20 xl:pb-[156px] xl:pt-8">
      <Icons.logoLong
        color="#097B45"
        className="max-xs:w-20 h-8 w-[120px] cursor-pointer align-middle md:mr-2"
        onClick={() => router.push("/")}
      />

      <div
        className="absolute left-[calc((100%-394px)/2)] top-0 -z-10 hidden h-[177px] w-[394px] bg-[url(/images/backgrounds/middleHeaderBg.svg)]
      bg-cover bg-center bg-no-repeat opacity-50 md:block xl:left-[calc((100%-794px)/2)] xl:w-[794px]"
      >
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
        className="max-xs:gap-1 max-xs:px-4 flex cursor-pointer items-center gap-[10px] rounded-3xl bg-[#097B45] px-[23px] py-2.5 text-sm font-semibold text-white md:px-[30px] md:py-[15px] md:text-lg"
      >
        Join Waitlist
        <Image src={ForwardArrow} alt="forward" className="h-[15px] w-[12.049px] " />
      </div>
    </div>
  );
};

export default Header;
