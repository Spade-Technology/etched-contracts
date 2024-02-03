import { useClerk } from "@clerk/nextjs";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { ShowBackupCode } from "./pages/profile";
import { AlertDialogContent, AlertDialogFooter, AlertDialogTitle } from "./ui/alert-dialog";
import { Button } from "./ui/button";
import Otp from "./ui/otp";

export const EnableTOTP = ({
  isModal,
  setIsModal,
  setTwoStepAuth,
}: {
  isModal: boolean;
  setIsModal: React.Dispatch<boolean>;
  setTwoStepAuth: React.Dispatch<string>;
}) => {
  const [qr, setQr] = useState<string>();
  const [otp, setOtp] = useState(false);
  const { user } = useClerk();
  const [backup, setBackup] = useState<string[]>([]);
  const [showBackup, setShowBackup] = useState(false);

  useEffect(() => {
    if (isModal) user?.createTOTP().then((topt) => setQr(topt?.uri));
  }, [isModal]);

  const [verifyCode, setVerifyCode] = useState("pending");
  const props = {
    setSendCode: setOtp,
    verifyCode,
    setVerifyCode,
    verifyAccount: async (code: string) => {
      await user?.verifyTOTP({ code });
      if (!user?.backupCodeEnabled) {
        const bc = await user?.createBackupCode();
        setBackup(bc?.codes || []);
        setShowBackup(true);
        document.dispatchEvent(new CustomEvent("show-backup-code-card"));
      }
      setIsModal(false);
      setOtp(false);
      setTwoStepAuth("enabled");
    },
  };
  if (!user) return;

  return (
    <>
      <ShowBackupCode backupCode={backup} isModal={showBackup} setIsModal={setShowBackup} />

      <AlertDialog
        open={isModal}
        onOpenChange={() => {
          setIsModal(!isModal);
        }}
      >
        <AlertDialogContent className={`${verifyCode != "success" ? "max-w-[385px]" : "max-w-md"} px-5"`}>
          {otp ? (
            <Otp {...props} />
          ) : (
            <>
              <AlertDialogTitle className="text-base text-primary ">Time-based One-time Password</AlertDialogTitle>
              {qr && <QRCode size={256} value={qr} />}
              <AlertDialogFooter>
                <footer className="mt-10 flex items-center justify-end gap-5">
                  <div
                    onClick={() => {
                      setIsModal(false);
                    }}
                    className="cursor-pointer font-body text-base font-semibold text-muted-foreground hover:text-foreground"
                  >
                    Cancel
                  </div>
                  <div>
                    <Button
                      onClick={() => {
                        setOtp(true);
                      }}
                      className="text-white"
                    >
                      Continue
                    </Button>
                  </div>
                </footer>
              </AlertDialogFooter>
            </>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
