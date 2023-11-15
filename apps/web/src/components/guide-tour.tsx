import { Cross2Icon } from "@radix-ui/react-icons";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "./icons/logo-long-animated";
import { Icons } from "./ui/icons";
import { Checkbox } from "./ui/checkbox";

export default function GuideTour() {
  const ref = useRef<HTMLElement | any>();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [openModal, setOpenModal] = useState(false);
  const [rate, setRate] = useState("");
  const [tip, setTip] = useState(0);
  const [shake, setShake] = useState(false);

  // Drag modal function
  const onMouseDown = useCallback(
    (event: any) => {
      const onMouseMove = (event: MouseEvent) => {
        const element = ref.current;
        if (element && element.contains(event.target)) {
          position.x += event.movementX;
          position.y += event.movementY;

          element.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }
        setPosition(position);
      };
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [position, setPosition, ref]
  );

  useEffect(() => {
    const viewedTips = JSON.parse(localStorage.getItem("viewedTips"));
    if (!viewedTips) {
      setOpenModal(true);
    }
    const responsive = () => {
      if (ref?.current?.getBoundingClientRect().x < 1) {
        setPosition({ ...position, x: -50 });
        ref.current.style.transform = `translate(${-50}px, ${position.y}px)`;
      }
    };
    window.addEventListener("resize", responsive);
  }, []);

  //SHAKE ANIMATION USEEFFECT
  useEffect(() => {
    const shakeAnime = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShake(true);
      }
    };
    document.addEventListener("mousedown", shakeAnime);
  }, [ref]);

  useEffect(() => {
    const count = setTimeout(() => {
      if (shake) {
        setShake(false);
      }
    }, 500);

    return () => {
      clearTimeout(count);
    };
  }, [shake]);

  const buttonState = (name: string) =>
    name === "back" && tip === 0
      ? "!cursor-not-allowed opacity-70"
      : name === "next" && tip === tips.length - 1
      ? "!cursor-not-allowed opacity-70"
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
    <article className="fixed left-0 top-0 z-50 flex h-[100vh] w-full items-center justify-center bg-transparent">
      <main
        ref={ref}
        onMouseDown={onMouseDown}
        className={`${shake ? "shake" : ""} w-[500px] cursor-grabbing gap-4 border bg-background shadow-2xl duration-200 ${
          openModal ? "visible translate-x-0" : "invisible z-0 !translate-x-full"
        }`}
      >
        <Cross2Icon
          onClick={() => {
            setOpenModal(false);
            setPosition({ x: 0, y: 0 });
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
          <section className="px-4 py-3">
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

            <div className="mt-3 flex items-center justify-end gap-3 py-3 text-foreground">
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
                    className={`${idx === 1 ? "bg-primary text-white" : "bg-accent text-foreground"} ${buttonState(
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
