import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { AlertDialogContent, AlertDialogTitle } from "./ui/alert-dialog";
import { useState } from "react";
// import { form } from "./pages/profile";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { Label } from "@radix-ui/react-label";

interface form {
  newPass: string;
  comfirmPass: string;
  value: string;
}

export const ChangePasword = ({ isModal, setIsModal }: { isModal: boolean; setIsModal: React.Dispatch<boolean> }) => {
  const [form, setForm] = useState<form | any>({});

  const inputs = [
    { title: "Enter new password", value: "newPass" },
    { title: "Confirm Password", value: "comfirmPass" },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsModal(false);
    setForm({});
  };

  const props = { form, setForm };

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
          {inputs.map(({ title, value }) => {
            const prop = { ...props, title, value };
            return <Input {...prop} />;
          })}

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
              <Button type="submit">Change Password</Button>
            </div>
          </footer>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const Input = ({ title, value, form, setForm }: { title: string; value: string; form: form; setForm: React.Dispatch<form> }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Label className=" font-body text-base font-semibold opacity-60">{title}</Label>
      <div className="mt-2 flex h-10 w-full items-center gap-1 overflow-hidden rounded border border-muted-foreground px-3">
        <input
          value={form[value]}
          required
          onChange={(e) => setForm({ ...form, [value]: e.target.value })}
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
