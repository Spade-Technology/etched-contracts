import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { AlertDialogContent, AlertDialogTitle } from "./ui/alert-dialog";
import { useState } from "react";
import { form } from "./pages/profile";
import SendCode from "./ui/send-code";
import Otp from "./ui/otp";
import { SuccessDialog } from "./ui/two-step-auth-success";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { Label } from "@radix-ui/react-label";

export const EnableTwoStepAuth = ({
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

  const props = { isModal, setIsModal, form, setForm, setSendCode, verifyCode, setVerifyCode, setTwoStepAuth };

  return (
    <AlertDialog
      open={isModal}
      onOpenChange={() => {
        setIsModal(!isModal);
      }}
    >
      <AlertDialogContent className={`${verifyCode != "success" ? "max-w-[385px]" : "max-w-md"} px-5"`}>
        <AlertDialogTitle className="text-base text-primary ">Two-step authentication</AlertDialogTitle>
        {!form.status ? (
          <>
            <div className="text-sm font-medium text-muted-foreground ">To continue please enter your password</div>
            <form onSubmit={() => form.password && form.email && setForm({ ...form, status: true })}>
              <Label className="font-body text-base font-semibold">Email</Label>
              <input
                // disabled={isLoading}
                autoFocus
                required
                type="email"
                placeholder="example@gmail.com"
                className="mb-7 flex h-10 w-full items-center gap-1 rounded border border-muted-foreground px-3 font-body text-base font-medium focus:outline-none focus:ring-0"
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
                  <Icons.hidePassword onClick={() => setShowPassword(!showPassword)} className=" cursor-pointer" />
                ) : (
                  <Icons.openEye onClick={() => setShowPassword(!showPassword)} className=" cursor-pointer" />
                )}
              </div>

              <footer className="mt-10 flex items-center justify-end gap-5">
                <div
                  onClick={() => {
                    setIsModal(false);
                  }}
                  className="cursor-pointer text-base  font-semibold text-muted-foreground  hover:text-foreground"
                >
                  Cancel
                </div>
                <div>
                  <Button type="submit">Continue</Button>
                </div>
              </footer>
            </form>
          </>
        ) : form.status && !sendCode ? (
          <SendCode {...props} />
        ) : sendCode && verifyCode != "success" ? (
          <Otp {...props} />
        ) : verifyCode == "success" ? (
          <SuccessDialog
            title={"Successfully enabled"}
            description="Your phone number is set to +1938402040 Authentication codes will be sent to this number for logging in"
            onClick={() => setTwoStepAuth("enabled")}
          />
        ) : null}
      </AlertDialogContent>
    </AlertDialog>
  );
};
