import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./dialog";
import { Etch } from "@/gql/graphql";
import { formatUserFromWallet } from "@/utils/hooks/address";

interface types {
  etch?: Partial<Etch | any>;
  isLoading: boolean;
  openPropertiesModal: boolean;
  setOpenPropertiesModal: React.Dispatch<boolean>;
}

export default function PropertiesDialog({ etch, isLoading, openPropertiesModal, setOpenPropertiesModal }: types) {
  const [activeTab, setActiveTab] = useState("General");

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

  return (
    <Dialog open={openPropertiesModal} onOpenChange={() => setOpenPropertiesModal(false)}>
      <DialogContent className={"max-w-[440px]"}>
        <DialogTitle className="text-xl text-primary">Properties</DialogTitle>
        <DialogDescription className="">
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
                      <div className="text-lg text-foreground">{name}</div>
                      <div className="text-base">{address}</div>
                    </div>
                    <div className="ml-auto text-lg font-light capitalize text-muted-foreground">{role}</div>
                  </main>
                );
              })}
            </section>
          )}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
