import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./dialog";
import { Etch } from "@/gql/graphql";
import { formatUserFromWallet } from "@/utils/hooks/address";
import { Cross2Icon } from "@radix-ui/react-icons";

interface types {
  etch?: Partial<Etch | any>;
  isLoading: boolean;
  openPropertiesModal: boolean;
  setOpenPropertiesModal: React.Dispatch<boolean>;
}

export default function PropertiesDialog({ etch, isLoading, openPropertiesModal, setOpenPropertiesModal }: types) {
  const [activeTab, setActiveTab] = useState("General");
  const [shake, setShake] = useState(false);
  const ref: React.MutableRefObject<HTMLElement> | any = useRef();

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

  // CLOSE DROPDOWN USEEFFECT
  useEffect(() => {
    const closeModal = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShake(true);
      }
    };
    document.addEventListener("mousedown", closeModal);
  }, [ref]);

  useEffect(() => {
    const count = setTimeout(() => {
      if (shake) {
        setShake(false);
      }
    }, 900);

    return () => {
      clearTimeout(count);
    };
  }, [shake]);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseDown = useCallback(
    (event: any) => {
      const onMouseMove = (event: MouseEvent) => {
        position.x += event.movementX;
        position.y += event.movementY;
        const element = ref.current;
        if (element) {
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

  return (
    // <main open={!openPropertiesModal} onOpenChange={() => setOpenPropertiesModal(false)}>
    <main
      ref={ref}
      onMouseDown={onMouseDown}
      className={`${
        shake ? "shake" : ""
      } fixed right-10 top-[160px] grid w-[380px] cursor-grabbing gap-4 border bg-background p-6 shadow-2xl duration-200 focus:ring-0 ${
        openPropertiesModal ? "visible z-50 translate-x-0" : "invisible z-0 translate-x-full"
      }`}
    >
      <header className="text-xl font-semibold leading-none tracking-tight text-primary">File Properties</header>
      <Cross2Icon onClick={() => setOpenPropertiesModal(false)} className="absolute right-0 top-0 m-4 h-4 w-4 cursor-pointer" />

      <section className="cursor-default text-sm font-semibold text-muted-foreground">
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
          <section className="flex flex-col bg-accent">
            {data.map(({ name, value }) => {
              return (
                <main className="grid grid-cols-12 px-3 py-3">
                  <div className="col-span-4">{name}</div>
                  <div className="col-span-8 text-base text-foreground">{value}</div>
                </main>
              );
            })}
          </section>
        )}
        {activeTab === "Permissions" && (
          <section className="flex flex-col gap-4 bg-accent p-3 pt-4">
            {permissions.map(({ name, address, role, img }) => {
              return (
                <main className=" flex items-center gap-3">
                  <img src={img} alt="" className="h-10 w-10" />
                  <div className="">
                    <div className="w-[170px] truncate text-lg text-foreground">{name}</div>
                    <div className="text-base">{address}</div>
                  </div>
                  <div className="ml-auto text-lg font-light capitalize text-muted-foreground">{role}</div>
                </main>
              );
            })}
          </section>
        )}
      </section>
    </main>
    // </main>
  );
}
