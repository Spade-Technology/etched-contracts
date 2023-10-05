import { Icons } from "./icons";
import Link from "next/link";

const Footer = () => {
  const links = [
    {
      title: "Company",
      links: [
        { url: "#", text: "Terms" },
        { url: "#", text: "Privacy" },
      ],
    },
    {
      title: "Social",
      links: [
        { url: "#", text: "Instagram" },
        { url: "#", text: "Twitter" },
        { url: "#", text: "LinkedIn" },
      ],
    },
  ];

  return (
    <footer className="mx-auto mt-[76px] border-t-[1px] border-t-[#94A3B8] pb-[65px] pt-7 md:mt-[54px] md:py-[72px] lg:px-24">
      <main className="mx-auto flex max-w-[1200px] flex-col justify-between text-start text-base  font-normal leading-[27px] md:flex-row md:text-xl md:leading-[34px]">
        <section>
          <Icons.logoLong color="#097B45" className="h-[35px] !w-[133px] max-sm:mx-auto" />
          <div className="mx-auto w-[136px] pt-[13px] max-sm:text-center md:w-[200px]">
            123 Baker Street London, W1U 6TE United Kingdom
          </div>
        </section>
        <section className="mt-7 flex flex-col justify-between gap-7 md:flex-row md:gap-[80px] lg:gap-[150px]">
          {links.map(({ title, links }, index) => {
            return (
              <div className="text-right max-sm:text-center">
                <div className="font-header text-[28px] font-bold leading-[47.7px]">{title}</div>
                <div className="flex flex-col gap-3">
                  {links.map(({ url, text }) => {
                    return (
                      <Link href={url} className={index === 0 && "text-[#94A3B8] md:text-left"}>
                        {text}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </footer>
  );
};

export default Footer;
