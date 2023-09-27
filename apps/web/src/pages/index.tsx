import Benefits from "@/components/pages/home/benefits";
import HomeInfo from "@/components/pages/home/homeInfo";
import JoinWaitlist from "@/components/pages/home/popups/joinWaitlist";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import ForwardArrow from "public/icons/forward-arrow.svg";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  return (
    <div className="">
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
                <Button type="submit" className="gap-3 mt-5 rounded-lg">
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
