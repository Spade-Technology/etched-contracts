import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { handleCopy } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

export const Paymaster = () => {
  const [addWallet, setAddWallet] = useState("");
  const [modal, setModal] = useState(false);
  const [privateKey, setPrivateKey] = useState("");
  const props = { modal, setModal, setAddWallet, setPrivateKey };

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
      <header className=" mb-5 text-xl font-semibold text-foreground">Paymaster Configuration</header>
      <div className="mb-2 text-base font-semibold text-muted-foreground">Enter your private key string here</div>
      <input
        value={privateKey}
        onChange={(e) => setPrivateKey(e.target.value)}
        className="mb-4 flex h-10 w-80 items-center rounded border border-muted-foreground px-5 text-base font-normal text-foreground outline-primary duration-100"
      />
      <div className="flex gap-4">
        <Button onClick={() => setPrivateKey("")} className="border border-primary bg-white font-semibold text-primary">
          Clear
        </Button>
        <AddWallet {...props}>
          <Button disabled={!privateKey} onClick={() => setModal(true)} className="font-semibold text-white">
            Submit
          </Button>
        </AddWallet>
      </div>
    </main>
  );
};

const AddWallet = ({
  modal,
  setModal,
  setAddWallet,
  setPrivateKey,
  children,
}: {
  modal: boolean;
  setModal: React.Dispatch<boolean>;
  setAddWallet: React.Dispatch<string>;
  setPrivateKey: React.Dispatch<string>;
  children: ReactNode;
}) => {

  const confirm = () => {
    setModal(false);
    setAddWallet("pending");
    setPrivateKey("");
  };

  return (
    <AlertDialog open={modal}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className={"block max-h-screen w-96"}>
        <section>
          <div className="text-base font-semibold text-primary">Confirm addWallet addition</div>
          <div className="mt-3 text-base font-medium text-muted-foreground">
            Once you confirm, you can’t change the addWallet.
          </div>
          <div className="mt-9 flex justify-end gap-1">
            <Button onClick={() => setModal(false)} className=" bg-white font-semibold text-muted-foreground shadow-none">
              Cancel
            </Button>
            <Button onClick={confirm} className="font-semibold text-white">
              Confirm
            </Button>
          </div>
        </section>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const Wallet = ({ setAddWallet }: { setAddWallet: React.Dispatch<string> }) => {
  return (
    <main className="w-80 rounded-2xl bg-primary p-4 font-body text-[#DBFFEE]">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          ki290...1nDn <Icons.copy className="cursor-pointer" onClick={() => handleCopy("ki290...1nDn")} />
        </div>
        <div
          onClick={() => setAddWallet("")}
          className="ml-auto cursor-pointer rounded-full bg-white px-2 py-0.5 text-sm font-medium text-muted-foreground"
        >
          Remove
        </div>
      </header>
      <div className="mt-5 text-base font-semibold">Balance</div>
      <div className="text-3xl font-light">22.345 ETH</div>
    </main>
  );
};
