import { useClerk } from "@clerk/nextjs";
import { useState } from "react";
import { ShowBackupCode } from "../backup-codes";

export default function TextMsgAuth() {
  const { user } = useClerk();
  const enabled = !!user?.phoneNumbers[0]?.defaultSecondFactor && !!user?.phoneNumbers[0]?.reservedForSecondFactor;
  const [twoStepAuth, setTwoStepAuth] = useState(enabled ? "enabled" : "disabled");
  const [showBackup, setShowBackup] = useState(false);
  const [backup, setBackup] = useState<string[]>([]);

  const toggle = async () => {
    if (enabled) {
      await user?.phoneNumbers[0]?.setReservedForSecondFactor({ reserved: false });
      setTwoStepAuth("disabled");
      if (!user?.totpEnabled) document.dispatchEvent(new CustomEvent("hide-backup-code-card"));
    } else {
      await user?.phoneNumbers[0]?.makeDefaultSecondFactor();
      await user?.phoneNumbers[0]?.setReservedForSecondFactor({ reserved: true });
      setTwoStepAuth("enabled");

      if (!user?.backupCodeEnabled) {
        const bc = await user?.createBackupCode();
        document.dispatchEvent(new CustomEvent("show-backup-code-card"));
        setBackup(bc?.codes || []);
        setShowBackup(true);
      }
    }
  };

  return (
    <main>
      <ShowBackupCode backupCode={backup} isModal={showBackup} setIsModal={setShowBackup} />
      <section className="w-fit rounded-2xl bg-muted p-5 text-foreground">
        <div className="text-sm font-semibold">Text message (SMS)</div>
        <div className="mt-2 flex gap-5">
          <div className="w-56 text-xs font-medium">We’ll send a code to the number that you choose.</div>
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
