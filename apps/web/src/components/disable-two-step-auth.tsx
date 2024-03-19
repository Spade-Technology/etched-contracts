import { AlertDialog, AlertDialogContent, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { form } from "./pages/profile";
import ScanQrCode from "./ui/scan-qr-code";
import { BackupCodesModal } from "./ui/two-step-auth-success";

export const DisableTwoStepAuth = ({
  isModal,
  setIsModal,
  setTwoStepAuth,
}: {
  isModal: boolean;
  setIsModal: React.Dispatch<boolean>;
  setTwoStepAuth: React.Dispatch<string>;
}) => {
  const [form, setForm] = useState<form>({});
  const [sendCode, setSendCode] = useState(false);
  const [verifyCode, setVerifyCode] = useState("pending");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (form.password && form.email) setForm({ ...form, status: true });
  };

  const props = { verifyCode, setVerifyCode, setForm };

  return (
    <AlertDialog
      open={isModal}
      onOpenChange={() => {
        setIsModal(!isModal);
      }}
    >
      <AlertDialogContent
        className={`${verifyCode != "success" ? "max-w-[361px]" : "max-w-md"} ${
          form.status && verifyCode != "success" ? "px-0" : ""
        }`}
      >
        <AlertDialogTitle className="font-body text-base text-primary">
          {form.status && verifyCode != "success" ? <div className="px-5">Scan QR Code</div> : "Disable two-step authentication"}
        </AlertDialogTitle>
        {!form.status ? (
          <section>
            <div className="mb-5 font-body text-sm font-medium text-muted-foreground">
              To continue please enter your password. This will disable your two step authentication entirely.
            </div>
            <form onSubmit={handleSubmit}>
              <Label className="font-body text-base font-semibold">Email</Label>
              <input
                autoFocus
                required
                type="email"
                placeholder="example@gmail.com"
                className="mb-7 flex h-10 w-full items-center gap-1 rounded border border-muted-foreground px-3 font-body text-base focus:outline-none focus:ring-0"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Label className="font-body text-base font-semibold">Enter password</Label>
              <div className="flex h-10 w-full items-center gap-1 rounded border border-muted-foreground  px-3">
                <input
                  value={form.password}
                  required
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  type={showPassword ? "text" : "password"}
                  className="h-full w-full border-none font-body text-base focus:outline-none"
                />
                {showPassword ? (
                  <Icons.hidePassword onClick={() => setShowPassword(!showPassword)} className="cursor-pointer" />
                ) : (
                  <Icons.openEye onClick={() => setShowPassword(!showPassword)} className="cursor-pointer" />
                )}
              </div>

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
                  <Button type="submit" className="bg-destructive text-white">
                    Disable
                  </Button>
                </div>
              </footer>
            </form>
          </section>
        ) : form.status && verifyCode != "success" ? (
          <ScanQrCode {...props} />
        ) : verifyCode === "success" ? (
          <BackupCodesModal
            title={"Successfully disabled"}
            description="Save this emergency backup code and store it somewhere safe. If you lose you phone, you can use this to sign in."
            backupCode={Array(12).fill("807 374")}
            onClick={() => setTwoStepAuth("disabled")}
          />
        ) : null}
      </AlertDialogContent>
    </AlertDialog>
  );
};
