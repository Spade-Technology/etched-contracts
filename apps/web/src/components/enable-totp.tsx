import { useClerk } from "@clerk/nextjs";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
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
              <AlertDialogTitle className="mx-auto text-base text-primary">Time-based One-time Password</AlertDialogTitle>
              {qr && (
                <div className="mx-auto">
                  <QRCode
                    size={256}
                    value={qr}
                    logoImage="/icons/etched-logo-big.png"
                    logoWidth={96}
                    qrStyle="dots"
                    ecLevel="M"
                  />
                </div>
              )}
              <p className="text-center text-sm text-muted-foreground">
                Use{" "}
                <a
                  href="https://support.google.com/accounts/answer/1066447?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Google Authenticator
                </a>{" "}
                to scan the QR code and generate your authentication code.
              </p>
              <AlertDialogFooter>
                <footer className="mt-5 flex items-center justify-end gap-5">
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
