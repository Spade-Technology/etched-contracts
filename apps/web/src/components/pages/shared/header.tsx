import { Icons } from "@/components/ui/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import ForwardArrow from "public/icons/forward-arrow.svg";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex gap-3 justify-between my-8">
      <Icons.logoLong color="#097B45" className="md:mr-2 h-8 align-middle" />
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
        className="flex my-auto cursor-pointer gap-3 rounded-3xl bg-[#097B45] px-7 py-3 text-sm md:text-lg font-semibold text-white"
      >
        Join Waitlist
        <Image src={ForwardArrow} alt="forward" />
      </div>
    </div>
  );
};

export default Header;
