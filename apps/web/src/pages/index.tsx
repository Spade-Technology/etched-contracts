import Benefits from "@/components/pages/home/benefits";
import HomeInfo from "@/components/pages/home/homeInfo";
import JoinWaitlist from "@/components/pages/home/popups/joinWaitlist";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { useState } from "react";

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  return (
    <div className="mx-5  my-8 md:mx-24">
      <Header setShowWaitlist={setShowWaitlist} />

      <div className="mx-auto pt-10 text-center align-middle md:pt-24">
        <HomeInfo setShowWaitlist={setShowWaitlist} />
        <Benefits setShowWaitlist={setShowWaitlist} />
      </div>

      <Footer />
      {showWaitlist && <JoinWaitlist show={showWaitlist} close={() => setShowWaitlist(false)} />}
    </div>
  );
}
