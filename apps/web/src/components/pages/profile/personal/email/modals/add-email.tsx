import { AlertDialog, AlertDialogContent, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Otp from "@/components/ui/otp";
import { toast } from "@/components/ui/use-toast";
import { useClerk } from "@clerk/nextjs";
import { useState } from "react";

export interface email {
  title: string;
  value: string;
  id?: string;
  verified?: string;
}

export const AddEmail = ({
  isModal,
  setIsModal,
  emails,
  setVerify,
}: {
  isModal: boolean;
  setIsModal: React.Dispatch<boolean>;
  setVerify: React.Dispatch<boolean>;
  emails: email[];
}) => {
  const { user } = useClerk();

  const [inputVal, setInputVal] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const emailAddress = await user?.createEmailAddress({ email: inputVal });
    try {
      await emailAddress?.prepareVerification({
        strategy: "email_code",
      });
    } catch (error) {
      console.log("error: ", error);
      await emailAddress?.destroy();
    }

    toast({
      title: "Success",
      description: "Secondary email successfully added!",
      variant: "success",
    });
    setInputVal("");
    setVerify(true);
    setIsModal(false);
  };

  return (
    <AlertDialog
      open={isModal}
      onOpenChange={() => {
        setIsModal(!isModal);
      }}
    >
      <AlertDialogContent className="max-w-[361px]">
        <AlertDialogTitle className="font-body text-base text-primary">Add secondary email address</AlertDialogTitle>
        <section>
          <div className="mb-5 font-body text-sm font-medium text-muted-foreground">
            You can also use this email address to login.
          </div>
          <form onSubmit={handleSubmit}>
            <Label className="font-body text-base font-semibold">Email</Label>
            <input
              autoFocus
              required
              type="email"
              placeholder="example@gmail.com"
              value={inputVal}
              onChange={(e: any) => setInputVal(e.target.value)}
              className="mb-7 flex h-10 w-full items-center gap-1 rounded border border-muted-foreground px-3 font-body text-base focus:outline-none focus:ring-0"
            />

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
                <Button type="submit" className="text-white">
                  Add email
                </Button>
              </div>
            </footer>
          </form>
        </section>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const RemoveEmail = ({
  removeEmail,
  setRemoveEmail,
  emails,
}: {
  removeEmail: boolean;
  setRemoveEmail: React.Dispatch<boolean>;
  emails: email[];
}) => {
  const { user } = useClerk();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const item: email | any = emails.find(({ title }) => title == "Secondary Email Address");
    item.value = "";
    const emailAddress = user?.emailAddresses.find(({ id }) => id === item.id);
    if (!emailAddress) {
      return;
    }
    await emailAddress.destroy();
    setRemoveEmail(false);
    toast({
      title: "Success",
      description: "Secondary email successfully removed!",
      variant: "success",
    });
  };

  return (
    <AlertDialog
      open={removeEmail}
      onOpenChange={() => {
        setRemoveEmail(!removeEmail);
      }}
    >
      <AlertDialogContent className="max-w-[361px]">
        <AlertDialogTitle className="font-body text-base text-primary">Remove secondary email address</AlertDialogTitle>
        <section>
          <div className="font-body text-sm font-medium text-muted-foreground">
            Are you sure you want to remove the <b>{emails[1]?.value}</b> from your secondary email address?
          </div>
        </section>
        <footer className="mt-10 flex items-center justify-end gap-5">
          <div
            onClick={() => {
              setRemoveEmail(false);
            }}
            className="cursor-pointer font-body text-base font-semibold text-muted-foreground hover:text-foreground"
          >
            Cancel
          </div>
          <div>
            <Button onClick={handleSubmit} className="bg-destructive text-white !shadow-2xl">
              Remove email
            </Button>
          </div>
        </footer>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const VerifyEmail = ({
  isModal,
  setIsModal,
  emailId,
}: {
  isModal: boolean;
  setIsModal: React.Dispatch<boolean>;
  emailId?: string;
}) => {
  const { user } = useClerk();
  if (!user || !emailId) return;
  const [verifyCode, setVerifyCode] = useState("pending");

  const props = {
    setSendCode: setIsModal,
    verifyCode,
    setVerifyCode,
    verifyAccount: async (code: string) => {
      const emailAddress = user?.emailAddresses.find(({ id }) => id === emailId);
      if (!emailAddress) {
        return;
      }

      await emailAddress.attemptVerification({ code });
      setIsModal(false);
    },
    resendCode: async () => {
      const emailAddress = user?.emailAddresses.find(({ id }) => id === emailId);

      if (!emailAddress) {
        return;
      }
      await emailAddress?.prepareVerification({
        strategy: "email_code",
      });
    },
  };

  return (
    <AlertDialog
      open={isModal}
      onOpenChange={() => {
        setIsModal(!isModal);
      }}
    >
      <AlertDialogContent className={`${verifyCode != "success" ? "max-w-[385px]" : "max-w-md"} px-5"`}>
        <AlertDialogTitle className="text-base text-primary ">Verify Email</AlertDialogTitle>
        <Otp {...props} />
      </AlertDialogContent>
    </AlertDialog>
  );
};
