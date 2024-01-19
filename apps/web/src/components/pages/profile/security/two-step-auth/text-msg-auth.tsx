import { DisableTwoStepAuth } from "@/components/disable-two-step-auth";
import { EnableTwoStepAuth } from "@/components/enable-two-step-auth";
import React, { useEffect, useState } from "react";

export default function TextMsgAuth() {
  const [isModal, setIsModal] = useState(false);
  const [twoStepAuth, setTwoStepAuth] = useState("disabled");

  const props = { isModal, setIsModal, setTwoStepAuth };

  useEffect(() => {
    setIsModal(false);
  }, [twoStepAuth]);
  return (
    <main>
      <section className="w-fit rounded-2xl bg-muted p-5 text-foreground">
        <div className="text-sm font-semibold">Text message (SMS)</div>
        <div className="mt-2 flex gap-5">
          <div className="w-56 text-xs font-medium">We’ll send a code to the number that you choose.</div>
          <div
            onClick={() => setIsModal(!isModal)}
            className={`flex h-7 w-14 cursor-pointer items-center justify-start rounded-full p-1 duration-500 ${
              twoStepAuth == "enabled" ? "bg-white" : " bg-neutral-200"
            }`}
          >
            <div
              className={`relative h-5 w-5 rounded-full duration-500 ${
                twoStepAuth == "enabled" ? "ml-auto bg-primary-foreground" : " bg-muted-foreground"
              }`}
            />
          </div>
        </div>
      </section>
      {/* <---------- modals & more ----------> */}
      {twoStepAuth == "disabled" ? (
        <EnableTwoStepAuth {...props} />
      ) : twoStepAuth == "enabled" ? (
        <DisableTwoStepAuth {...props} />
      ) : null}
    </main>
  );
}
