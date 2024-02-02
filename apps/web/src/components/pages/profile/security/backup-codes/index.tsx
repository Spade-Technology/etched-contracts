import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { SuccessDialog } from "@/components/ui/two-step-auth-success";
import { useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export const BackUpCodes = () => {
  const { user } = useClerk();
  const [backup, setBackup] = useState<string[]>([]);
  const [backupCodeEnabled, setBackupCodeEnabled] = useState(!!user?.backupCodeEnabled);
  const [showBackup, setShowBackup] = useState(false);

  const regenerate = async () => {
    const bc = await user?.createBackupCode();
    setBackup(bc?.codes || []);
    setShowBackup(true);
  };
  useEffect(() => {
    document.addEventListener("show-backup-code-card", () => {
      setBackupCodeEnabled(true);
    });
    document.addEventListener("hide-backup-code-card", () => {
      setBackupCodeEnabled(false);
    });
  }, []);

  if (!backupCodeEnabled) return;
  return (
    <main>
      <ShowBackupCode backupCode={backup} isModal={showBackup} setIsModal={setShowBackup} />
      <header className="mb-2 text-xl font-semibold text-foreground">Backup codes</header>
      <section className="mt-2 w-fit rounded-2xl bg-muted p-5 text-foreground">
        <div className="text-sm font-semibold">Regenerate backup codes</div>
        <div className="mt-2">
          <div className="w-72 text-xs font-medium">
            Get a fresh set of secure backup codes. Prior backup codes will be deleted and cannot be used.
          </div>
        </div>
        <div className="mt-2 cursor-pointer font-body text-sm font-semibold text-primary underline" onClick={regenerate}>
          Regenerate codes
        </div>
      </section>
    </main>
  );
};

export const ShowBackupCode = ({
  isModal,
  setIsModal,
  backupCode,
}: {
  isModal: boolean;
  setIsModal: React.Dispatch<boolean>;
  backupCode: string[];
}) => {
  return (
    <AlertDialog
      open={isModal}
      onOpenChange={() => {
        setIsModal(!isModal);
      }}
    >
      <AlertDialogContent>
        <SuccessDialog
          description="Save your backup code"
          title="Backup Code"
          onClick={() => setIsModal(false)}
          backupCode={backupCode}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
};
