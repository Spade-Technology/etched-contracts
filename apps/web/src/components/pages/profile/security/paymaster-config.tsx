import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Label } from "@/components/ui/label";
import { handleCopy } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

export const Paymaster = () => {
  const [addWallet, setAddWallet] = useState("");
  const [modal, setModal] = useState(false);
  const props = { modal, setModal, setAddWallet };

  useEffect(() => {
    setTimeout(() => {
      if (addWallet == "pending") {
        setAddWallet("success");
      }
    }, 2000);
  }, [addWallet]);

  if (addWallet == "pending") {
    return (
      <div className={`flex w-80 flex-col rounded-2xl bg-emerald-200 p-4`}>
        <div onClick={() => setAddWallet("")} className="ml-auto cursor-pointer text-sm font-medium text-primary">
          Remove
        </div>
        <Icons.circleCheck className="relative -top-3 mx-auto h-9 w-9" />
        <div className="w-72 text-center text-base font-normal text-primary">
          Your request has been sent. <br />
          The details will be visible once the request is approved.
        </div>
      </div>
    );
  }

  if (addWallet == "success") {
    return <Wallet setAddWallet={setAddWallet} />;
  }

  return (
    <main>
      <header className=" mb-5 text-xl font-semibold text-foreground">Gas Configuration</header>

      <div className="flex h-14 w-80 items-center justify-between rounded-2xl bg-primary p-4">
        <div className="font-body text-base font-medium text-primary-foreground">
          Using <b>{"Etched.xyz"}</b> for gas
        </div>
        {/* <---------- modals & more ----------> */}
        <AddWallet {...props}>
          <div
            onClick={() => setModal(true)}
            className="ml-auto cursor-pointer rounded-full bg-white px-2 py-0.5 text-sm font-medium text-primary"
          >
            Change
          </div>
        </AddWallet>
      </div>
    </main>
  );
};

const AddWallet = ({
  modal,
  setModal,
  setAddWallet,
  children,
}: {
  modal: boolean;
  setModal: React.Dispatch<boolean>;
  setAddWallet: React.Dispatch<string>;
  children: ReactNode;
}) => {
  const [privateKey, setPrivateKey] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setModal(false);
    setAddWallet("pending");
    setPrivateKey("");
  };

  return (
    <AlertDialog open={modal}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className={"max-h-screen !w-96"}>
        <AlertDialogTitle className="font-body text-base text-primary">Enter your private key</AlertDialogTitle>
        <div className="mt-3 font-body text-sm font-medium text-muted-foreground">
          Enter your private key to add a new wallet. Please check and confirm. This action cannot be reversed.
        </div>
        <form onSubmit={handleSubmit}>
          <Label className="font-body text-base font-semibold text-muted-foreground">Private key string</Label>
          <input
            autoFocus
            required
            type="text"
            placeholder="Ex: shoe,unicorn,bag,phone,hammer,land,drain,super"
            value={privateKey}
            onChange={(e: any) => setPrivateKey(e.target.value)}
            className="shadow-btn mt-1 flex h-10 w-full items-center gap-1 rounded border border-muted-foreground px-3 font-body font-body text-base text-base font-medium text-muted-foreground focus:outline-none"
          />

          <footer className="mt-10 flex items-center justify-end gap-5">
            <div
              onClick={() => {
                setModal(false);
              }}
              className="cursor-pointer font-body text-base font-semibold text-muted-foreground hover:text-foreground"
            >
              Cancel
            </div>
            <div>
              <Button type="submit" className="text-white">
                Confirm
              </Button>
            </div>
          </footer>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const Wallet = ({ setAddWallet }: { setAddWallet: React.Dispatch<string> }) => {
  return (
    <>
      <header className="mb-5 text-xl font-semibold text-foreground">Wallet Configuration</header>
    <main className="w-80 rounded-2xl bg-primary p-4 font-body text-[#DBFFEE]">

      <section className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          ki290...1nDn <Icons.copy className="cursor-pointer" onClick={() => handleCopy("ki290...1nDn")} />
        </div>
        <div
          onClick={() => setAddWallet("")}
          className="ml-auto cursor-pointer rounded-full bg-white px-2 py-0.5 text-sm font-medium text-muted-foreground"
        >
          Remove
        </div>
      </section>
      <div className="mt-5 text-base font-semibold">Balance</div>
      <div className="text-3xl font-light">22.345 ETH</div>
    </main>
    </>
  );
};
