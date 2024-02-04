import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import MoveDialog from "@/components/ui/move-modal";
import PropertiesDialog from "@/components/ui/properties";
import { useGetUniqueEtch } from "@/utils/hooks/useGetUniqueEtch";
import { FileLockIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FileProps } from "./types";
const options = ["Move to >", "Rename", "Share", "Delete", "Properties"];

export const File = ({ documentName, tokenId, activeModals, setActiveModals }: FileProps) => {
  const [openMoveModal, setOpenMoveModal] = useState(false);
  const [openPropertiesModal, setOpenPropertiesModal] = useState(false);
  const { etch, isLoading } = useGetUniqueEtch(tokenId);

  const propertyModal = () => {
    if (documentName) {
      setOpenPropertiesModal(true);
      const list: string[] | any = activeModals.list;
      const modal = list.find((name: string) => name === etch?.documentName);

      if (!modal) {
        setActiveModals({ list: [...list, etch?.documentName], current: etch?.documentName });
      }
    }
  };
  useEffect(() => {
    console.log(activeModals.list);
  }, [activeModals.list]);

  const props = { etch, isLoading, openPropertiesModal, setOpenPropertiesModal, activeModals, setActiveModals };

  return (
    <>
      {/*------------- Modals & More -------------*/}
      <PropertiesDialog {...props} />
      <MoveDialog openMoveModal={openMoveModal} setOpenMoveModal={setOpenMoveModal} />

      <main
        key={tokenId}
        className="flex h-[44px] w-full cursor-pointer items-center gap-[17px] rounded-lg bg-accent pr-[12px] !font-body"
      >
        <div onClick={propertyModal} className="flex h-full w-10/12 items-center justify-end gap-3 pl-4">
          <div className="flex items-center justify-end">
            <FileLockIcon className="h-[18px] w-6" />
          </div>
          <div className="w-full truncate text-base font-medium text-neutral-500">{documentName}</div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="ml-auto flex h-full w-7 items-center justify-center">
              <Icons.singleBar className="h-5 w-[4.35px] cursor-pointer" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-[194px] w-[209px] px-2.5 py-1.5 shadow-etched-1">
            <DropdownMenuGroup>
              {options.map((item, idx) => {
                return (
                  <DropdownMenuItem
                    key={idx}
                    onClick={() => (idx < 1 ? setOpenMoveModal(true) : idx > 3 ? propertyModal() : null)}
                    className="cursor-default rounded-sm px-2.5 py-1 text-base font-semibold text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {item}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </main>
    </>
  );
};
