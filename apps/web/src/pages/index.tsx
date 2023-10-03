import Benefits from "@/components/pages/home/benefits";
import Header from "@/components/pages/home/header";
import HomeInfo from "@/components/pages/home/homeInfo";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Footer from "@/components/ui/footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import ForwardArrow from "public/icons/forward-arrow.svg";
import { useState } from "react";

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  return (
    <div className="font-campton">
      <Header setShowWaitlist={setShowWaitlist} />

      <div className="mx-auto pt-10 text-center align-middle ">
        <Dialog open={showWaitlist} onOpenChange={(x) => setShowWaitlist(x)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Join The Etched Waitlist</DialogTitle>
              {/* <DialogDescription>Secure your spot in our exclusive community</DialogDescription> */}
              <DialogDescription>
                <div className="grid grid-cols-4 items-center gap-4 py-4">
                  <Label htmlFor="email" className="text-right">
                    Email:
                  </Label>
                  <Input id="email" defaultValue="example@domain.com" className="col-span-3" />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="company" className="text-right">
                    Company:
                  </Label>
                  <Input id="company" defaultValue="Acme Corp" className="col-span-3" />
                </div>
              </DialogDescription>
              <DialogFooter>
                <Button type="submit" className="mt-5 gap-3 rounded-lg">
                  Join Waitlist <Image src={ForwardArrow} alt="forward" />
                </Button>
              </DialogFooter>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <HomeInfo setShowWaitlist={setShowWaitlist} />
        <Benefits setShowWaitlist={setShowWaitlist} />
      </div>

      <Footer />
      {/* {showWaitlist && <JoinWaitlist show={showWaitlist} close={() => setShowWaitlist(false)} />} */}
    </div>
  );
}
