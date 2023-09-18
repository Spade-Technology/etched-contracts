import { Icons } from "@/components/ui/icons";

const Footer = () => {
  return (
    <div className="mt-10 text-center items-center flex flex-col md:flex-row justify-between border-t-[1px] border-t-black md:px-24 mx-auto pt-7 md:py-20">
      <div>
        <Icons.logoLong color="#097B45" className="h-9 " />
        <div className="py-3">
          123 Baker Street <br />
          London, W1U 6TE
          <br />
          United Kingdom
        </div>
      </div>

      <div className="flex  flex-col md:flex-row justify-between gap-3 md:gap-36">
        <div>
          <div className="text-2xl font-bold pb-2">Company</div>
          <div className="text-lg">Terms</div>
          <div className="text-lg">Privacy</div>
        </div>

        <div>
          <div className="text-2xl font-bold md:pb-2">Social</div>
          <div className="text-lg">Instagram</div>
          <div className="text-lg">Twitter</div>
          <div className="text-lg">LinkedIn</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
