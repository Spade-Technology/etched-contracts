import { EnableTOTP } from "@/components/enable-totp";
import { useClerk } from "@clerk/nextjs";
import { useState } from "react";

export default function GoogleAuth() {
  const { user } = useClerk();

  const enabled = !!user?.totpEnabled && !!user?.twoFactorEnabled;
  const [twoStepAuth, setTwoStepAuth] = useState(enabled ? "enabled" : "disabled");
  const [isModal, setIsModal] = useState(false);

  const toggle = async () => {
    if (enabled) {
      await user?.disableTOTP();
      setTwoStepAuth("disabled");
      if (!user?.primaryPhoneNumber?.defaultSecondFactor && !user?.primaryPhoneNumber?.reservedForSecondFactor)
        document.dispatchEvent(new CustomEvent("hide-backup-code-card"));
    } else {
      setIsModal(!isModal);
    }
  };

  return (
    <main>
      <EnableTOTP isModal={isModal} setIsModal={setIsModal} setTwoStepAuth={setTwoStepAuth} />
      <section className="mt-2 w-fit rounded-2xl bg-muted p-5 text-foreground">
        <div className="text-sm font-semibold">Google Authenticator</div>
        <div className="mt-2 flex gap-5">
          <div className="w-56 text-xs font-medium">You will get a login code from the Google Authenticator app.</div>
          <div
            onClick={toggle}
            className={`flex h-7 w-14 cursor-pointer items-center justify-start rounded-full p-1 duration-500 ${
              twoStepAuth == "enabled" ? "bg-primary" : " bg-neutral-200"
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
    </main>
  );
}
