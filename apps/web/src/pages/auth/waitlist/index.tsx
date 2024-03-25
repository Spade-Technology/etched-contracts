import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { api } from "@/utils/api";
import { useSignOut } from "@/utils/hooks/useSignIn";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Approval() {
  const sendActivationCode = api.user.sendActivationCode.useMutation();
  const [code, setCode] = useState("");

  const handleSendActivationCode = async () => {
    try {
      if (!code) return;
      await sendActivationCode.mutateAsync({
        code,
      });
      toast({
        title: "Success",
        description: "Activation was successful.",
        variant: "success",
      });

      // force browser to refresh to /dashboard
      window.location.href = "/dashboard";
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send activation code.",
        variant: "destructive",
      });
    }
  };

  const { signOut } = useSignOut();

  return (
    <div className="bg-primary">
      <div></div>
      <div
        style={{ backgroundColor: "#0ea05c" }}
        className="flex h-screen w-screen items-center justify-center bg-[url('/images/pending/BG.svg')] bg-cover bg-center bg-no-repeat"
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

            <Button className="h-8 w-full rounded-sm" onClick={signOut}>
              Go back to home
            </Button>

            <Separator orientation="horizontal" className="my-8" />

            <Label className="text-sm font-semibold text-primary">Activation code</Label>

            <div className="flex h-8 w-full gap-2">
              <Input className="h-8 w-full" placeholder="Enter your Activation Code" onChange={(e) => setCode(e.target.value)} />
              <Button className="h-8 rounded-sm" onClick={handleSendActivationCode} isLoading={sendActivationCode.isLoading}>
                Activate <ArrowRight size={16} />
              </Button>
            </div>

            <div className="my-1 text-center font-body text-xs font-semibold italic text-muted-foreground">
              If a member of the team has given you an activation code, you can enter it above to skip the waitlist.
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
