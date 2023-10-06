import { Icons } from "./icons";
import Link from "next/link";

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
      { url: "https://www.linkedin.com/company/etched-tech/", text: "LinkedIn" },
      { url: "#", text: "Instagram" },
      { url: "#", text: "Twitter" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mx-auto mt-[76px] border-t-[1px] border-t-[#94A3B8] pb-[65px] pt-7 md:mt-[54px] md:py-[72px] lg:px-24">
      <main className="mx-auto flex max-w-[1280px] flex-col justify-between text-start text-base  font-normal leading-[27px] md:flex-row md:text-xl md:leading-[34px] ">
        <section>
          <Icons.logoLong color="#097B45" className="h-[35px] !w-[133px] max-sm:mx-auto" />
          <div className="mx-auto w-[136px] pt-[13px] max-sm:text-center md:w-[200px]">
            Dashwood House
            <br />
            EC2M 1QS
            <br />
            London
          </div>
        </section>
        <section className="-mt-1 flex flex-col justify-between gap-7 md:flex-row md:gap-[80px] lg:gap-[150px]">
          {links.map(({ title, links }, index) => {
            return (
              <div className="text-right max-sm:text-center" key={index}>
                <div className="font-header text-[28px] font-semibold leading-[47.7px]">{title}</div>
                <div className="flex flex-col gap-3">
                  {links.map(({ url, text }) => {
                    return (
                      <Link
                        href={url}
                        className={"text-slate-500 hover:underline " + (index === 0 ? "md:text-left" : "")}
                        key={text}
                        target={url.startsWith("http") ? "_blank" : ""}
                      >
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
