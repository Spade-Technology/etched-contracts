import { Etch } from "@/gql/graphql";
import { formatUserFromWallet } from "@/utils/hooks/address";
import { Cross2Icon } from "@radix-ui/react-icons";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface types {
  etch?: Partial<Etch | any>;
  isLoading: boolean;
  openPropertiesModal: boolean;
  setOpenPropertiesModal: React.Dispatch<boolean>;
  activeModals: any; // replace 'any' with the actual type of activeModals
  setActiveModals: React.Dispatch<any>; // replace 'any' with the actual type of setActiveModals
}

export default function PropertiesDialog({
  etch,
  isLoading,
  openPropertiesModal,
  setOpenPropertiesModal,
  activeModals,
  setActiveModals,
}: types) {
  const ref: React.MutableRefObject<HTMLElement> | any = useRef();

  const [activeTab, setActiveTab] = useState("General");
  const [shake, setShake] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const data = [
    { name: "Filename:", value: etch?.documentName },
    { name: "Type of file:", value: "PNG File (.png)" },
    {
      name: "Owner:",
      value: formatUserFromWallet({
        user: etch?.ownership?.owner,
        isLoading,
        override: etch?.ownership?.team?.name,
      }),
    },
    { name: "File size:", value: "- - -" },
    {
      name: "Time Stamp:",
      value: `${new Date(etch?.createdAt * 1000).toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "UTC",
      })} UTC | ${new Date(etch?.createdAt * 1000).toLocaleDateString()}`,
    },
  ];

  const permissions = [
    { address: "0x3234...5678", name: "jimcarlosxsak23.etched", role: "owner", img: "/icons/dashboard/placeholder1.svg" },
    { address: "0x3234...5678", name: "tom.etched", role: "editor", img: "/icons/dashboard/placeholder2.svg" },
    { address: "0x3234...5678", name: "louis.etched", role: "editor", img: "/icons/dashboard/placeholder3.svg" },
  ];

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

  const currentPosition = activeModals.list.findIndex((idx: string) => idx === etch?.documentName);

  return (
    <main
      ref={ref}
      onMouseDown={onMouseDown}
      style={{
        top: `${(currentPosition + 1) * 40 + 150}px`,
        transform: `translate(-${(currentPosition + 1) * 40}px)`,
        zIndex: activeModals.current === etch?.documentName ? "50" : `${currentPosition + 10}`,
      }}
      onClick={() => setActiveModals({ ...activeModals, current: data[0]?.value })}
      className={`${
        shake && activeModals.current === data[0]?.value ? "shake" : ""
      } fixed right-10 grid w-96 cursor-grabbing gap-4 border bg-background p-6 shadow-2xl duration-200 focus:ring-0 ${
        openPropertiesModal ? "visible" : "invisible z-0 !translate-x-full"
      }`}
    >
      <Cross2Icon
        onClick={() => {
          setOpenPropertiesModal(false);
          setPosition({ x: 0, y: 0 });
        }}
        className="absolute right-0 top-0 m-4 h-4 w-4 cursor-pointer"
      />
      <div className="cursor-default text-sm font-semibold text-muted-foreground">
        <header className="flex text-base capitalize text-foreground">
          <div
            onClick={() => setActiveTab("General")}
            className={`cursor-pointer duration-300 ${activeTab === "General" ? "bg-accent" : ""} p-3`}
          >
            general
          </div>
          <div
            onClick={() => setActiveTab("Permissions")}
            className={`cursor-pointer p-3 duration-300 ${activeTab === "General" ? "" : "bg-accent"}`}
          >
            permissions
          </div>
        </header>
        {activeTab === "General" && (
          <div className="flex flex-col bg-accent">
            {data.map(({ name, value }) => {
              return (
                <main className="grid grid-cols-12 px-3 py-3">
                  <div className="col-span-4">{name}</div>
                  <div className="col-span-8 text-base text-foreground">{value}</div>
                </main>
              );
            })}
          </div>
        )}
        {activeTab === "Permissions" && (
          <div className="flex flex-col gap-4 bg-accent p-3 pt-4">
            {permissions.map(({ name, address, role, img }) => {
              return (
                <main className=" flex items-center gap-3">
                  <img src={img} alt="" className="h-10 w-10" />
                  <div>
                    <div className="w-44 truncate text-lg text-foreground">{name}</div>
                    <div className="text-base">{address}</div>
                  </div>
                  <div className="ml-auto text-lg font-light capitalize text-muted-foreground">{role}</div>
                </main>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
