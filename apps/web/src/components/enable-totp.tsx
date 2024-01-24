import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { AlertDialogContent, AlertDialogFooter, AlertDialogTitle } from "./ui/alert-dialog";
import { useEffect, useState } from "react";
import { form } from "./pages/profile";
import SendCode from "./ui/send-code";
import Otp from "./ui/otp";
import { SuccessDialog } from "./ui/two-step-auth-success";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { Label } from "@radix-ui/react-label";
import QRCode from "react-qr-code";
import { useClerk } from "@clerk/nextjs";

export const EnableTOTP = ({ isModal, setIsModal }: { isModal: boolean; setIsModal: React.Dispatch<boolean> }) => {
  const [qr, setQr] = useState<string>();
  const [otp, setOtp] = useState(false);
  const { user } = useClerk();
  if (!user) return;

  useEffect(() => {
    user?.createTOTP().then((topt) => setQr(topt?.uri));
  }, []);
  const [form, setForm] = useState<form>({});
  const [sendCode, setSendCode] = useState(false);
  const [verifyCode, setVerifyCode] = useState("pending");
  const [showPassword, setShowPassword] = useState(false);
  const props = {
    setSendCode: setOtp,
    verifyCode,
    setVerifyCode,
    verifyAccount: async (code: string) => {
      await user?.verifyTOTP({ code });
      if (!user?.backupCodeEnabled) {
        await user?.createBackupCode();
      }
      setIsModal(false);
      setOtp(false);
    },
  };
  return (
    <>
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
