import { Cross2Icon } from "@radix-ui/react-icons";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "./icons/logo-long-animated";
import { Icons } from "./ui/icons";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

export default function GuideTour() {
  const [openModal, setOpenModal] = useState(false);
  const [rate, setRate] = useState("");
  const [tip, setTip] = useState(0);

  useEffect(() => {
    const viewedTips = JSON.parse(localStorage.getItem("viewedTips"));
    if (!viewedTips) {
      setOpenModal(true);
    }
  }, []);

  const buttonState = (name: string) =>
    name === "back" && tip === 0
      ? "!cursor-not-allowed opacity-70"
      : name === "next" && tip === tips.length - 1
      ? "!cursor-not-allowed opacity-70 hidden"
      : name === "close" && tip === tips.length - 1
      ? "bg-primary text-white"
      : "";

  const onChangeTip = (name: string) => {
    if (name === "back") {
      if (tip > 0) setTip(tip - 1);
    } else if (name === "next") {
      if (tip < tips.length - 1) setTip(tip + 1);
    } else {
      setOpenModal(false);
      localStorage.setItem("viewedTips", JSON.stringify(true));
    }
  };

  return (
    <article>
      <section
        className={`bg-background/80 fixed left-0 top-0 flex h-[100vh] w-full backdrop-blur-sm ${
          openModal ? "z-[900]" : "invisible -z-50"
        }`}
      ></section>
      <main
        className={`fixed left-[calc((100vw-500px)/2)] top-[calc((100vh-365px)/2)] w-[500px] cursor-grabbing gap-4 border bg-background drop-shadow-2xl duration-200 ${
          openModal ? "visible z-[1000] translate-x-0" : "invisible z-0 !translate-x-full"
        }`}
      >
        <Cross2Icon
          onClick={() => {
            setOpenModal(false);
          }}
          className="absolute right-0 top-0 m-4 h-4 w-4 cursor-pointer"
        />
        <main className="cursor-default text-sm font-semibold text-muted-foreground">
          <header className="flex cursor-grabbing items-center gap-2 px-4 py-3 text-base text-foreground">
            <div className="h-6 w-6">
              <Logo />
            </div>
            <div>Tip of the day</div>
          </header>
          <section className="flex items-center gap-3 border-b border-t border-muted-foreground bg-accent px-4 py-3 text-sm text-muted-foreground">
            <Icons.info className="h-4 w-4" />
            <div className="">Interactive lesson available</div>
            <div className="ml-auto cursor-pointer text-base text-primary">Start learning</div>
          </section>
          <section className="flex h-[204px] flex-col px-4 py-3">
            {tips.map(({ title, description }, idx) => {
              if (idx === tip) {
                return (
                  <div className="">
                    <div className="mb-3 text-xl capitalize text-foreground">{title}</div>
                    <div className="">{description}</div>
                  </div>
                );
              }
            })}

            <div className="mt-auto flex items-center justify-end gap-3 py-3 text-foreground">
              <div className="mr-1">Did you find this tip helpful?</div>
              <Icons.like
                onClick={() => setRate("like")}
                color={rate === "like" ? "#077844" : ""}
                className="h-5 w-5 cursor-pointer"
              />
              <Icons.like
                onClick={() => setRate("dislike")}
                color={rate === "dislike" ? "#ef4444" : ""}
                className="h-5 w-5 rotate-180 cursor-pointer"
              />
            </div>
          </section>

          <footer className="border-forground flex items-center justify-between border-t p-4">
            <div className="flex items-center gap-2">
              <Checkbox />
              <div className=" text-foreground">Don't show this tip again</div>
            </div>
            <aside className="flex gap-3">
              {["back", "next", "close"].map((name, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => onChangeTip(name)}
                    className={`${idx === 1 ? "bg-primary text-white" : "bg-accent text-foreground"} duration-300 ${buttonState(
                      name
                    )} text- cursor-pointer rounded-md border px-4 py-1 capitalize`}
                  >
                    {name}
                  </div>
                );
              })}
            </aside>
          </footer>
        </main>
      </main>
    </article>
  );
}

const label = (name: string) => {
  return <span className="rounded bg-accent px-2 py-1 text-foreground">{name}</span>;
};

const tips = [
  {
    title: "Search Everywhere",
    description: (
      <div className="leading-[28px] tracking-wide">
        Press {label("Ctrl")} {label("K")} to search for files/etches, actions, new organizations, UI elements, new teams and
        comments across your profile
      </div>
    ),
  },
  {
    title: "New Etch",
    description: (
      <div className="leading-[28px] tracking-wide">
        Press {label("Ctrl")} {label("E")} to create new etch
      </div>
    ),
  },
  {
    title: "New organiztion",
    description: (
      <div className="leading-[28px] tracking-wide">
        Press {label("Ctrl")} {label("O")} to create new organization
      </div>
    ),
  },
  {
    title: "New Team",
    description: (
      <div className="leading-[28px] tracking-wide">
        Press {label("Ctrl")} {label("D")} to create new team
      </div>
    ),
  },
  {
    title: "Logout",
    description: (
      <div className="leading-[28px] tracking-wide">
        Press {label("Shift")} {label("Ctrl")} {label("O")} to logout
      </div>
    ),
  },
  {
    title: "visit Profile",
    description: (
      <div className="leading-[28px] tracking-wide">
        To quickly navigate to your profile, press {label("Shift")} {label("Ctrl")} {label("P")}
      </div>
    ),
  },
];
