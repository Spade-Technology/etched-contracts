import { AlertDialog, AlertDialogContent, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Otp from "@/components/ui/otp";
import SendCode from "@/components/ui/send-code";
import { toast } from "@/components/ui/use-toast";
import { useClerk } from "@clerk/nextjs";
import { useState } from "react";

export interface phone {
  title: string;
  value: string;
  id?: string;
  verified?: string;
}

export const AddPhone = ({
  isModal,
  setIsModal,
  setVerify,
}: {
  isModal: boolean;
  setIsModal: React.Dispatch<boolean>;
  setVerify: React.Dispatch<boolean>;
}) => {
  const { user } = useClerk();

  const addPhone = async (inputVal: string) => {
    const phoneNumber = await user?.createPhoneNumber({ phoneNumber: inputVal });
    try {
      const t = await phoneNumber?.prepareVerification();
      console.log("MAMA t: ", t);
    } catch (error) {
      console.log("error: ", error);
      await phoneNumber?.destroy();
    }

    toast({
      title: "Success",
      description: "Phone number successfully added!",
      variant: "success",
    });

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
        <SendCode close={setIsModal} setSendCode={setVerify} addPhone={addPhone} />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const RemovePhone = ({
  removePhone,
  setRemovePhone,
}: {
  removePhone: boolean;
  setRemovePhone: React.Dispatch<boolean>;
}) => {
  const { user } = useClerk();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await user?.phoneNumbers[0]?.destroy();
    setRemovePhone(false);
    toast({
      title: "Success",
      description: "Phone Number successfully removed!",
      variant: "success",
    });
  };

  return (
    <AlertDialog
      open={removePhone}
      onOpenChange={() => {
        setRemovePhone(!removePhone);
      }}
    >
      <AlertDialogContent className="max-w-[361px]">
        <AlertDialogTitle className="font-body text-base text-primary">Remove secondary email address</AlertDialogTitle>
        <section>
          <div className="font-body text-sm font-medium text-muted-foreground">
            Are you sure you want to remove the <b>{user?.phoneNumbers[0]?.phoneNumber}</b> from your secondary email address?
          </div>
        </section>
        <footer className="mt-10 flex items-center justify-end gap-5">
          <div
            onClick={() => {
              setRemovePhone(false);
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

export const VerifyPhone = ({ isModal, setIsModal }: { isModal: boolean; setIsModal: React.Dispatch<boolean> }) => {
  const { user } = useClerk();
  if (!user) return;
  const [verifyCode, setVerifyCode] = useState("pending");

  const props = {
    setSendCode: setIsModal,
    verifyCode,
    setVerifyCode,
    verifyAccount: async (code: string) => {
      await user?.phoneNumbers[0]?.attemptVerification({ code });
      setIsModal(false);
    },
    resendCode: async () => {
      await user?.phoneNumbers[0]?.prepareVerification();
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
        <AlertDialogTitle className="text-base text-primary ">Verify Phone</AlertDialogTitle>
        <Otp {...props} />
      </AlertDialogContent>
    </AlertDialog>
  );
};
