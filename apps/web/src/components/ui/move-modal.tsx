import React from "react";
import { Button } from "./button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./dialog";
import { Icons } from "./icons";

export default function MoveDialog({
  openMoveModal,
  setOpenMoveModal,
}: {
  openMoveModal: boolean;
  setOpenMoveModal: React.Dispatch<boolean>;
}) {
  return (
    <Dialog open={openMoveModal} onOpenChange={() => setOpenMoveModal(!openMoveModal)}>
      <DialogContent className={"max-w-sm font-body"}>
        <DialogTitle className="text-xl font-bold  text-neutral-500">Move “client custom z” folder</DialogTitle>
        <DialogDescription>
          <div className="flex items-center gap-3">
            <div className="text-base font-medium text-neutral-500">Current Location:</div>
            <div className="flex w-fit cursor-pointer items-center gap-2.5 rounded-lg border border-neutral-400 px-3 py-2">
              <Icons.folder className="IconFolders relative h-4 w-6" />
              <div className="font-body text-base font-medium text-neutral-500">Chip designs</div>
            </div>
          </div>
          <div className="mt-5 text-base font-semibold tracking-wide text-primary">Choose location</div>
          <div className="w-32 border-b-2 border-primary"></div>
          <div className="mt-3 flex flex-col gap-3">
            {[
              "NexusLogix Solutions",
              "CrestCore Analytics",
              "StellarVista Technologies",
              "Echelon Global Ventures",
              "Amperex Innovations",
            ].map((name, idx) => {
              return (
                <div key={idx} className="flex cursor-pointer items-center gap-3">
                  <Icons.folder className="h-4 w-6" />
                  <div className="text-base font-medium text-neutral-500">{name}</div>
                </div>
              );
            })}
          </div>
          <footer className="mt-10 flex items-center justify-end gap-5">
            <div
              onClick={() => setOpenMoveModal(false)}
              className="cursor-pointer text-base font-semibold text-neutral-500 hover:text-foreground"
            >
              {" "}
              Cancel
            </div>
            <div>
              <Button onClick={() => setOpenMoveModal(false)} className={`bg-neutral-500 text-base text-white shadow-3xl`}>
                Move
              </Button>
            </div>
          </footer>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
