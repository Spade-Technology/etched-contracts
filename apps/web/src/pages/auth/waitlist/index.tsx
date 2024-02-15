import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function Approval() {
  //TODO: Create Account Approve TRPC ENDPOINT

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
            <header className="text-center text-lg font-semibold text-primary">You've Successfully joined the Waitlist !</header>
            <div className="my-1 text-center font-body text-base font-semibold italic text-muted-foreground">
              Hi, You have been added to the <b className="text-primary">Waiting list</b>. You will receive an email when you are
              accepted into the beta programme.
            </div>

            <Separator orientation="horizontal" className="my-8" />

            <Label className="text-sm font-semibold text-primary">Activation code</Label>

            <div className="flex h-8 w-full gap-2">
              <Input className="h-8 w-full" placeholder="Enter your Activation Code" />
              <Button className="h-8 rounded-sm">
                Activate <ArrowRight size={16} />
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
