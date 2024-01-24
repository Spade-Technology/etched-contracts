import { useClerk } from "@clerk/nextjs";
import { useState } from "react";

export const BackUpCodes = () => {
  const { user } = useClerk();
  const [backup, setBackup] = useState<string[]>([]);

  if (!user?.backupCodeEnabled) return;

  return (
    <main>
      <header className="mb-2 text-xl font-semibold text-foreground">Backup codes</header>
      <section className="mt-2 w-fit rounded-2xl bg-muted p-5 text-foreground">
        <div className="text-sm font-semibold">Regenerate backup codes</div>
        <div className="mt-2">
          <div className="w-72 text-xs font-medium">
            Get a fresh set of secure backup codes. Prior backup codes will be deleted and cannot be used.
          </div>
        </div>
        <div
          className="mt-2 cursor-pointer font-body text-sm font-semibold text-primary underline"
          onClick={async () => {
            const bc = await user?.createBackupCode();
            setBackup(bc?.codes || []);
          }}
        >
          Regenerate codes
        </div>
        {backup}
      </section>
    </main>
  );
};
