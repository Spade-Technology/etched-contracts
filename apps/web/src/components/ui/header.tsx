import Image from "next/image";
import { useRouter } from "next/router";
import ForwardArrow from "public/icons/forward-arrow.svg";
import { Icons } from "./icons";

const Header = () => {
  const router = useRouter();

  return (
    <div className="my-8 flex justify-between gap-3">
      <Icons.logoLong color="#097B45" className="h-8 cursor-pointer align-middle md:mr-2" onClick={() => router.push("/")} />
      <div className="hidden md:block">
        <div
          onClick={() => router.push("/dashboard")}
          className="m-auto  cursor-pointer rounded-2xl bg-[#E3FFF2] px-5 py-2 text-lg font-medium text-[#097B45]"
        >
          Dashboard
        </div>
      </div>
      <div
        onClick={() => router.push("/authentication")}
        className="my-auto flex cursor-pointer gap-3 rounded-3xl bg-[#097B45] px-7 py-3 text-sm font-semibold text-white md:text-lg"
      >
        Join Waitlist
        <Image src={ForwardArrow} alt="forward" />
      </div>
    </div>
  );
};

export default Header;
