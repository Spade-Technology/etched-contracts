import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { AlertDialogContent, AlertDialogTitle } from "./ui/alert-dialog";
import { SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { Label } from "@radix-ui/react-label";
import { api } from "@/utils/api";
import { toast } from "./ui/use-toast";

export const ChangePasword = ({ isModal, setIsModal }: { isModal: boolean; setIsModal: React.Dispatch<boolean> }) => {
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const { mutateAsync: setClerkPassword } = api.user.setClerkPassword.useMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (!password || password !== confirmPassword) {
        toast({
          title: "Something went wrong",
          description: "Please try again",
          variant: "destructive",
        });
        return;
      }
      await setClerkPassword({ password });
      setIsModal(false);
    } catch (error: any) {
      console.error(error);
      if (typeof error.message === "string") {
        toast({
          title: "Something went wrong",
          description: error.message || "Please try again",
          variant: "destructive",
        });
        return;
      }
      const errors = JSON.parse(error.message) as {
        message: string;
      }[];

      errors.map(({ message }) =>
        toast({
          title: "Something went wrong",
          description: message || "Please try again",
          variant: "destructive",
        })
      );
    }
  };

  return (
    <AlertDialog
      open={isModal}
      onOpenChange={() => {
        setIsModal(!isModal);
      }}
    >
      <AlertDialogContent className={`px-5" max-w-[385px]`}>
        <AlertDialogTitle className="text-base text-primary ">Change Password</AlertDialogTitle>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input title="Enter new password" setValue={setPassword} value={password} />
          <Input title="Confirm Password" setValue={setConfirmPassword} value={confirmPassword} />

          <footer className="mt-6 flex items-center justify-end gap-5">
            <div
              onClick={() => {
                setIsModal(false);
              }}
              className="cursor-pointer text-base  font-semibold text-muted-foreground  hover:text-foreground"
            >
              Cancel
            </div>
            <div>
              <Button disabled={!confirmPassword || !password || password !== confirmPassword} type="submit">
                Change Password
              </Button>
            </div>
          </footer>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const Input = ({
  title,
  value,
  setValue,
}: {
  title: string;
  value?: string;
  setValue: React.Dispatch<SetStateAction<string | undefined>>;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Label className=" font-body text-base font-semibold opacity-60">{title}</Label>
      <div className="mt-2 flex h-10 w-full items-center gap-1 overflow-hidden rounded border border-muted-foreground px-3">
        <input
          value={value}
          required
          onChange={(e) => setValue(e.target.value)}
          placeholder="*****************"
          type={showPassword ? "text" : "password"}
          className="flex h-full w-full items-center border-none font-body text-base placeholder:mt-10 focus:outline-none"
        />
        {showPassword ? (
          <Icons.hidePassword onClick={() => setShowPassword(!showPassword)} className=" cursor-pointer" />
        ) : (
          <Icons.openEye onClick={() => setShowPassword(!showPassword)} className=" cursor-pointer" />
        )}
      </div>
    </div>
  );
};
