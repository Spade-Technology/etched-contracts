import { DisableTwoStepAuth } from "@/components/disable-two-step-auth";
import { EnableTwoStepAuth } from "@/components/enable-two-step-auth";

import React, { useEffect, useState } from "react";

export interface form {
  email?: string;
  password?: string;
  status?: boolean;
}

export const TwoStep = () => {
  const [isModal, setIsModal] = useState(false);
  const [twoStepAuth, setTwoStepAuth] = useState("disabled");

  const props = { isModal, setIsModal, setTwoStepAuth };

  useEffect(() => {
    setIsModal(false);
  }, [twoStepAuth]);

  return (
    <main>
      <header className="mb-2 font-body text-xl font-semibold text-foreground">2 Step Authentication</header>
      <div className="mb-5 font-body text-sm font-semibold text-muted-foreground">
        You can enable Two-step authentication for enhanced security
      </div>

      <div
        onClick={() => setIsModal(!isModal)}
        className={`flex h-7 w-14 cursor-pointer items-center justify-start rounded-full p-1 duration-500 ${
          twoStepAuth == "enabled" ? "bg-primary" : " bg-neutral-200"
        }`}
      >
        <div
          className={`relative h-5 w-5 rounded-full duration-500 ${
            twoStepAuth == "enabled" ? "ml-auto bg-white" : " bg-muted-foreground"
          }`}
        />
      </div>

      {/* <---------- modals & more ----------> */}
      {twoStepAuth == "disabled" ? (
        <EnableTwoStepAuth {...props} />
      ) : twoStepAuth == "enabled" ? (
        <DisableTwoStepAuth {...props} />
      ) : null}
    </main>
  );
};
