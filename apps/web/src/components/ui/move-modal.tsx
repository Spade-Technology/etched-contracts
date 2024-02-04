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
      <DialogContent className={"max-w-[382px] font-body"}>
        <DialogTitle className=" text-xl font-bold  text-neutral-500">Move “client custom z” folder</DialogTitle>
        <DialogDescription>
          <div className="flex items-center gap-3">
            <div className="text-base font-medium text-neutral-500">Current Location:</div>
            <div className="flex w-fit cursor-pointer items-center gap-2.5 rounded-lg border border-neutral-400 px-3 py-2">
              <Icons.folder className="IconFolders relative h-[18px] w-6" />
              <div className="ChipDesigns font-['Quicksand'] text-base font-medium text-neutral-500">Chip designs</div>
            </div>
          </div>
          <div className="bo mt-5 text-base font-semibold text-primary">Choose location</div>
          <div className="h-[0px] w-[121px] border-2 border-primary"></div>
          <div className="mt-[14px] flex flex-col gap-3">
            {[
              "NexusLogix Solutions",
              "CrestCore Analytics",
              "StellarVista Technologies",
              "Echelon Global Ventures",
              "Amperex Innovations",
            ].map((name, idx) => {
              return (
                <div key={idx} className="flex cursor-pointer items-center gap-3">
                  <Icons.folder className="h-[18px] w-6" />
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
              <Button
                onClick={() => setOpenMoveModal(false)}
                className={`bg-neutral-500 text-base text-white shadow-[0px_4px_13px_0px_rgba(0,0,0,0.25)]`}
              >
                Move
              </Button>
            </div>
          </footer>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
