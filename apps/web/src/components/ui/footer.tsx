import { Icons } from "./icons";

const Footer = () => {
  return (
    <div className="mx-5 md:mx-24 ">
      <div className="mx-auto mt-10 flex flex-col items-center justify-between border-t-[1px] border-t-black pt-7 text-center md:flex-row md:px-24 md:py-20">
        <div>
          <Icons.logoLong color="#097B45" className="h-9 " />
          <div className="py-3">
            Dashwood House <br />
            London
            <br />
            United Kingdom
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex  flex-col justify-between gap-3 md:flex-row md:gap-36">
            <div>
              <div className="pb-2 text-2xl font-bold">Company</div>
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
      </div>
    </div>
  );
};

export default Footer;
