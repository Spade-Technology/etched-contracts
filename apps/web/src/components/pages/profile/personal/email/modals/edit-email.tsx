import { AlertDialog, AlertDialogContent, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

export const EditEmail = ({
  isModal,
  setIsModal,
  emails,
}: {
  isModal: boolean;
  setIsModal: React.Dispatch<boolean>;
  emails: email[];
}) => {
  const [inputVal, setInputVal] = useState(emails[1].value );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const item: email | any = emails.find(({ title }) => title == "Secondary Email Address");
    item.value = inputVal;
    setIsModal(false);
    toast({
      title: "Success",
      description: "Secondary email successfully edited!",
      variant: "success",
    });
    setInputVal("");
  };

  const cancel = ()=>{
    setInputVal(emails[1].value)
     setIsModal(false);
  }

  return (
    <AlertDialog
      open={isModal}
      onOpenChange={() => {
        setIsModal(!isModal);
      }}
    >
      <AlertDialogContent className="max-w-[361px]">
        <AlertDialogTitle className="font-body text-base text-primary">Edit secondary email address</AlertDialogTitle>
        <section>
         
          <form onSubmit={handleSubmit}>
            <Label className="font-body text-base font-semibold text-muted-foreground">Email</Label>
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
                onClick={cancel}
                className="cursor-pointer font-body text-base font-semibold text-muted-foreground hover:text-foreground"
              >
                Cancel
              </div>
              <div>
                <Button type="submit" className="text-white">
                  Save
                </Button>
              </div>
            </footer>
          </form>
        </section>
      </AlertDialogContent>
    </AlertDialog>
  );
};

