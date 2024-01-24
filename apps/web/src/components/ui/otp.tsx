import React, { useRef, useState } from "react";
import { DialogDescription } from "./dialog";
import { Button } from "./button";
import { Icons } from "./icons";

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

  const verify = async (e: any) => {
    e.preventDefault();
    if (otp.find((el) => el === "")) return;

    await verifyAccount(otp.join(""));
  };

  const props = { verifyCode, otp, setOtp };

  return (
    <section className="px-3">
      <div className="mb-5 text-center font-body text-sm font-medium text-muted-foreground">
        Enter the authentication code below that we sent you.
      </div>
      <form onSubmit={verify}>
        <OtpInputs {...props} />
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
          <Button type="submit">Verify</Button>
        </footer>
      </form>
    </section>
  );
}

export const OtpInputs = ({
  verifyCode,
  otp,
  setOtp,
}: {
  verifyCode: string;
  otp: string[];
  setOtp: React.Dispatch<string[]>;
}) => {
  const inputs: React.MutableRefObject<any[]> = useRef([]);

  const handleChange = (e: any, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (e.target.nextSibling && e.target.value !== "") {
      e.target.nextSibling.focus();
    }
  };

  const handlePaste = (e: any) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").slice(0, length);

    const newOtp = pastedData.split("").map((char: string, index: number) => {
      if (inputs.current[index]) {
        inputs.current[index].value = char;
      }
      return char;
    });

    setOtp(newOtp);
  };

  return (
    <main>
      <section className="mx-auto flex h-fit w-fit justify-center overflow-hidden rounded">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            autoFocus={index < 1 && true}
            required
            value={value}
            onChange={(e) => handleChange(e, index)}
            onPaste={handlePaste}
            ref={(input) => (inputs.current[index] = input)}
            className="flex h-10 w-8 items-center justify-center border border-neutral-200 bg-neutral-100 pl-3 font-body text-base font-semibold text-muted-foreground focus:outline-primary"
          />
        ))}
      </section>
      {verifyCode == "error" && (
        <div className="gap- mt-1 flex items-center justify-center text-center font-body text-xs font-semibold text-destructive">
          <Icons.error />
          Invalid authentication code
        </div>
      )}
    </main>
  );
};
