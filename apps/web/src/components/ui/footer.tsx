import Link from "next/link";
import { Icons } from "./icons";

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
    <footer className="md:py-18 mx-auto mt-20 border-t border-gray-300 pb-16 pt-7 md:mt-14 lg:px-24">
      <main className="mx-auto flex max-w-7xl flex-col justify-between text-start text-base font-normal leading-7 md:flex-row md:text-xl md:leading-9 ">
        <section>
          <Icons.logoLong color="#097B45" className="h-9 w-32 max-sm:mx-auto" />
          <div className="w-34 md:w-50 mx-auto pt-3 max-sm:text-center">
            Dashwood House
            <br />
            EC2M 1QS
            <br />
            London
          </div>
        </section>
        <section className="-mt-1 flex flex-col justify-between gap-7 md:flex-row md:gap-20 lg:gap-36">
          {links.map(({ title, links }, index) => {
            return (
              <div className="text-right max-sm:text-center" key={index}>
                <div className="font-header text-3xl font-semibold leading-[3rem]">{title}</div>
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
