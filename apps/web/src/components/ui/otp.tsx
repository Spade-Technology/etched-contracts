import React, { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { Icons } from "./icons";
import { toast } from "./use-toast";

export default function Otp({
  setSendCode,
  verifyCode,
  verifyAccount,
  resendCode,
}: {
  setSendCode: React.Dispatch<boolean>;
  verifyCode: string;
  verifyAccount?: any;
  resendCode?: any;
}) {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [wrongCode, setWrongCode] = useState(false);

  const verify = async (e: any, strOverride?: string[]) => {
    e.preventDefault();
    const _otp = strOverride || otp;
    try {
      if (_otp.find((el) => el === "")) return;
      setLoading(true);
      await verifyAccount(_otp.join(""));
      setLoading(false);
      toast({
        title: "Success",
        description: "Verification succeeded!",
        variant: "success",
      });
    } catch (error) {
      setLoading(false);
      setWrongCode(true);
    }
  };

  const props = { verifyCode, otp, setOtp, verify };

  return (
    <section className="px-3">
      <div className="mb-5 text-center font-body text-sm font-medium text-muted-foreground">
        Enter the authentication code below that we sent you.
      </div>
      <form onSubmit={(e) => verify(e)}>
        <OtpInputs {...props} />
        {wrongCode && (
          <div className="text-error mt-2 text-center text-sm font-semibold">
            The code you entered is incorrect. Please try again.
          </div>
        )}
        {resendCode && (
          <div
            className="mt-2 cursor-pointer text-center font-body text-xs font-semibold text-primary"
            onClick={() => {
              resendCode();
              setOtp(Array(6).fill(""));
            }}
          >
            Resend code
          </div>
        )}
        <footer className="mt-10 flex items-center justify-end gap-5">
          <div onClick={() => setSendCode(false)} className="cursor-pointer text-sm font-semibold hover:text-foreground">
            Cancel
          </div>
          <Button type="submit" disabled={loading}>
            Verify
          </Button>
        </footer>
      </form>
    </section>
  );
}

export const OtpInputs = ({
  verifyCode,
  otp,
  setOtp,
  verify,
}: {
  verifyCode: string;
  otp: string[];
  setOtp: React.Dispatch<string[]>;
  verify: (e: any, strOverride: string[]) => void;
}) => {
  const inputs: React.MutableRefObject<any[]> = useRef([]);

  const handleChange = (e: any, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    // If the value is not empty, move to the next input
    if (e.target.value !== "" && e.target.nextSibling) e.target.nextSibling.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // If backspace is pressed and the current input is empty, focus the previous input
    if (e.key === "Backspace" && e.currentTarget.value === "" && index > 0) inputs.current[index - 1].select();
    if (e.key === "ArrowLeft" && index > 0) inputs.current[index - 1].select();
    else if (e.key === "ArrowRight" && index < otp.length - 1) inputs.current[index + 1].select();
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim().slice(0, 6);
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      inputs.current[newOtp.length - 1].focus();
      verify(e, newOtp);
    } else {
      // Handle the error case where pasted data is not numeric or not 6 characters long
      console.error("Invalid paste content. Only a 6-digit number is allowed.");
    }
  };

  return (
    <main>
      <section className="mx-auto flex h-fit w-fit justify-center gap-1 overflow-hidden rounded">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            autoFocus={index === 0}
            required
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={(input) => {
              inputs.current[index] = input;
            }}
            className={`flex h-10 w-8 items-center justify-center ${
              value
                ? isNaN(value as any) || value.length === 0
                  ? "border-b-2 border-destructive"
                  : "border-b-2 border-primary"
                : "border-neutral-200"
            } bg-neutral-100 pl-3 font-body text-base font-semibold text-muted-foreground focus:outline-primary`}
          />
        ))}
      </section>
      {verifyCode === "error" && (
        <div className="mt-1 flex items-center justify-center text-center font-body text-xs font-semibold text-destructive">
          <Icons.error />
          Invalid authentication code
        </div>
      )}
    </main>
  );
};
