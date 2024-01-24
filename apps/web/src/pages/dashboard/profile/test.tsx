import { PageBoilerplate } from "@/components/page-boilerplate";
import { SessionItem } from "@/components/sessionItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { api } from "@/utils/api";
import { useUploadThing } from "@/utils/uploadthing";
import { UserButton, UserProfile, useClerk } from "@clerk/nextjs";
import { useCallback, useEffect, useState } from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
import QRCode from "react-qr-code";

export default function ProfilePage() {
  const [file, setFile] = useState<any>();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [otp, setOtp] = useState<string>();
  const [qr, setQr] = useState<string>();
  const [TOTP, setTOTP] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [userSessions, setUserSessions] = useState<any[]>([]);
  const { user, client } = useClerk();

  const { startUpload } = useUploadThing("EtchUpload");

  const { mutateAsync: setClerkProfileImage } = api.user.setClerkProfileImage.useMutation();
  const { mutateAsync: setClerkPassword } = api.user.setClerkPassword.useMutation();
  const { mutateAsync: setClerkFirstName } = api.user.setClerkFirstName.useMutation();
  const { mutateAsync: setClerkLastName } = api.user.setClerkLastName.useMutation();

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => {
    if (!acceptedFiles[0]) {
      return;
    }

    const newFiles = [
      ...acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    ];

    console.log("MAMA newFiles: ", newFiles);

    setFile(newFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/*": [],
    },
  });

  useEffect(() => {
    user?.getSessions().then((userSessions) => {
      userSessions.sort((x, y) => y.expireAt.getTime() - x.expireAt.getTime());
      userSessions.reverse();
      setUserSessions(userSessions);
    });
  }, [user]);

  console.log("MAMA user?.phoneNumbers[0]: ", user?.phoneNumbers[0]);
  return (
    <PageBoilerplate>
      {/* <UserProfile path="/dashboard/profile" routing="path" />; */}
      <div
        {...getRootProps()}
        className="bg-primary-foreground-50 flex h-[33vh] cursor-pointer items-center justify-center rounded-lg border-[1px] border-dashed border-gray-600 bg-slate-50 text-slate-600  transition-all hover:border-gray-400 hover:text-slate-900"
      >
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
      </div>
      <button
        onClick={async () => {
          const uploaded = await startUpload([file]);

          if (!uploaded || !uploaded[0]?.url) {
            toast({
              title: "Upload failed",
              description: "Please try again",
              variant: "destructive",
            });
            return;
          }
          setClerkProfileImage({ file: uploaded[0]?.url });
        }}
      >
        Submit
      </button>

      <h2>Change pwd</h2>
      <Input className="bg-red-500" onChange={(e) => setPassword(e.target.value)} />
      <Button
        onClick={async () => {
          if (password) {
            setClerkPassword({ password });
          }
        }}
      >
        Change pwd
      </Button>
      <h2>Change Email</h2>
      <Input className="bg-red-500" onChange={(e) => setEmail(e.target.value)} />
      <Button
        onClick={async () => {
          if (email) {
            // setClerkEmail({ email: password });
            const emailAddress = await user?.createEmailAddress({ email });
            console.log("MAMA emailAddress: ", emailAddress);
            try {
              await emailAddress?.prepareVerification({
                strategy: "email_code",
              });
            } catch (error) {
              await emailAddress?.destroy();
              console.log("MAMA error: ", error);
            }
          }
        }}
      >
        Change email
      </Button>
      <h2>OTP CODE</h2>
      <Input className="bg-red-500" onChange={(e) => setOtp(e.target.value)} />
      <Button
        onClick={async () => {
          if (otp) {
            // setClerkEmail({ email: password });
            const emailAddress = await user?.emailAddresses.find((emailAddress) => emailAddress.emailAddress === email);
            console.log("MAMA emailAddress: ", emailAddress);
            if (!emailAddress) return;

            const verified = await emailAddress.attemptVerification({ code: otp });
            console.log("MAMA verified: ", verified);
            if (verified.verification.status === "verified") {
              await user?.update({ primaryEmailAddressId: verified.id });
            }
          }
        }}
      >
        Validate email
      </Button>
      <h2>Remove Email</h2>
      <Input className="bg-red-500" onChange={(e) => setEmail(e.target.value)} />
      <Button
        onClick={async () => {
          if (email) {
            const emailAddress = await user?.emailAddresses.find((emailAddress) => emailAddress.emailAddress === email);
            if (!emailAddress) return;

            await emailAddress.destroy();
          }
        }}
      >
        Remove email
      </Button>

      <h2>First Name</h2>
      <Input className="bg-red-500" onChange={(e) => setFirstName(e.target.value)} />
      <Button
        onClick={async () => {
          if (firstName) {
            await setClerkFirstName({ firstName });
          }
        }}
      >
        Set First Name
      </Button>

      <h2>Last Name</h2>
      <Input className="bg-red-500" onChange={(e) => setLastName(e.target.value)} />
      <Button
        onClick={async () => {
          if (lastName) {
            await setClerkLastName({ lastName });
          }
        }}
      >
        Set Last Name
      </Button>

      <h2>Sessions</h2>
      {userSessions.map((userSession, index) => (
        <SessionItem key={userSession.id} userSession={userSession} index={index} />
      ))}

      <h2>TOTP MFA</h2>
      <Button
        onClick={async () => {
          const topt = await user?.createTOTP();
          console.log("MAMA totp: ", topt);
          setQr(topt?.uri);
        }}
      >
        TEST
      </Button>

      {qr && <QRCode size={256} value={qr} />}

      <Input className="bg-red-500" onChange={(e) => setTOTP(e.target.value)} />
      <Button
        onClick={async () => {
          if (TOTP) {
            const totp = await user?.verifyTOTP({ code: TOTP });
            console.log("MAMA totp: ", totp);
            const bcode = await user?.createBackupCode();
            console.log("MAMA bcode: ", bcode);
          }
        }}
      >
        Enable
      </Button>

      <Button
        onClick={async () => {
          const t = await user?.disableTOTP();
          console.log("MAMA t: ", t);
        }}
      >
        Disable
      </Button>
      <Button
        onClick={async () => {
          const bcode = await user?.createBackupCode();
          console.log("MAMA bcode: ", bcode);
        }}
      >
        Regenerate bcode
      </Button>
      <h2>PHONE MFA</h2>
      <Input className="bg-red-500" onChange={(e) => setPhoneNumber(e.target.value)} />
      <Button
        onClick={async () => {
          if (phoneNumber) {
            const pnumber = await user?.createPhoneNumber({ phoneNumber });
            console.log("MAMA pnumber: ", pnumber);
            const pv = await pnumber?.prepareVerification();
            console.log("MAMA pv: ", pv);
          }
        }}
      >
        add number
      </Button>

      <Input className="bg-red-500" onChange={(e) => setOtp(e.target.value)} />
      <Button
        onClick={async () => {
          if (otp) {
            const pnumber = await user?.phoneNumbers.find((pn) => pn.phoneNumber === phoneNumber);
            if (pnumber) {
              const pv = await pnumber.attemptVerification({ code: otp });
              console.log("MAMA pv: ", pv);
            }
          }
        }}
      >
        verify
      </Button>

      <Button
        onClick={async () => {
          await user?.phoneNumbers[0]?.makeDefaultSecondFactor();
          const setReservedForSecondFactor = await user?.phoneNumbers[0]?.setReservedForSecondFactor({ reserved: true });
          console.log("MAMA setReservedForSecondFactor: ", setReservedForSecondFactor);
          const bcode = await user?.createBackupCode();
          console.log("MAMA bcode: ", bcode);
        }}
      >
        EnableSecondFactor
      </Button>

      <Button
        onClick={async () => {
          const setReservedForSecondFactor = await user?.phoneNumbers[0]?.setReservedForSecondFactor({ reserved: false });
          console.log("MAMA setReservedForSecondFactor: ", setReservedForSecondFactor);
        }}
      >
        DisableSecondFactor
      </Button>
      <UserProfile />
    </PageBoilerplate>
  );
}
