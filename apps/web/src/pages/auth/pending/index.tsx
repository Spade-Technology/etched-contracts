import { Icons } from "@/components/ui/icons";
import React from "react";

export default function Approval() {
  return (
    <div className="bg-primary">
      <div className=""></div>
      <div
        style={{ backgroundColor: "#0ea05c" }}
        className=" flex h-screen w-screen items-center justify-center bg-[url('/images/pending/BG.svg')] bg-cover bg-center bg-no-repeat"
      >
        <main
          className={`tilt-in-top-1 w-11/12 max-w-2xl rounded-md bg-white/20 p-3 shadow-2xl backdrop-blur-[10px] duration-300`}
        >
          <section className="bg-white px-8 py-4">
            <header className="text-center text-lg font-semibold text-primary">Waiting for admin to approve you</header>
            <div className="my-1 text-center font-body text-base font-semibold italic text-muted-foreground">
              {" "}
              Hi kris@spadetech.io, it will take <b className=" text-foreground">6hrs - 48hrs </b>for your account to be approved.
            </div>

            <div className="mt-4 h-3 w-full rounded-full bg-black/10">
              <div className="custom-loader h-full rounded-full bg-primary"></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
