import { GoodIcon } from "@/components/icons/good";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import PropertiesDialog from "@/components/ui/properties";
import { Etch } from "@/gql/graphql";
import { useGetUniqueEtch } from "@/utils/hooks/useGetEtchFromUser";
import { useGetEtchesFromUser } from "@/utils/hooks/useGetEtchesFromUser";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";
import { FileLockIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface props {
  sort: string;
  setSort: React.Dispatch<string>;
  filter: string;
  setFilter: React.Dispatch<string>;
  searchValue: string;
  setSearchValue: React.Dispatch<string>;
  files: Etch[];
}

interface fileTypes {
  documentName: string;
  id: string;
}

const options = ["Move to >", "Rename", "Share", "Delete", "Properties"];

export const HeaderDialog = ({ sort, setSort, filter, setFilter, searchValue, setSearchValue }: props) => {
  const [width, setWidth] = useState(0);
  const [FilterWidth, setFilterWidth] = useState(0);

  const sortList = ["Latest first", "File type", "Oldest fist", "Alphabetically"];
  const filterList = ["Private", "Public", "Tom Robins", "Ariana Gordon", "Tom Robins", "Ariana Gordon"];

  const sortRef: React.MutableRefObject<any> = useRef();
  const filterRef: React.MutableRefObject<any> = useRef();

  // <---------- Set popups width ---------->
  useEffect(() => {
    setWidth(sortRef.current?.clientWidth);
    setFilterWidth(filterRef.current?.clientWidth);
    window.addEventListener("resize", () => {
      setFilterWidth(filterRef.current?.clientWidth);
      setWidth(sortRef.current?.clientWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(0);
      });
    };
  }, [sort, filter]);

  return (
    <header className="justify- flex gap-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            ref={sortRef}
            variant={"ghost"}
            className="flex h-[42px] w-fit gap-2 border-none bg-transparent bg-white text-base font-medium text-muted-foreground shadow"
          >
            Sort by:<span className="text-base font-semibold text-foreground">{sort || sortList[0]}</span>
            <Icons.dropdownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent style={{ width: `${width}px` }} className={"px-2 py-2.5"}>
          <DropdownMenuGroup>
            {sortList.map((item, idx) => {
              return (
                <DropdownMenuItem
                  key={idx}
                  onClick={() => setSort(item)}
                  className={`flex cursor-default items-center justify-between gap-[7px] rounded-sm p-2 text-base capitalize text-muted-foreground  hover:bg-accent ${
                    filter === item ? "font-semibold" : "font-medium"
                  }`}
                  textValue="Jim Carlos"
                >
                  {item}
                  <GoodIcon className={sort === item ? "" : "hidden"} />
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            ref={filterRef}
            variant={"ghost"}
            className="flex h-[42px] w-fit gap-2 border-none bg-transparent bg-white text-base font-medium text-muted-foreground shadow"
          >
            Filter:<span className="text-base font-semibold text-foreground">{filter || "All"}</span>
            <Icons.dropdownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          style={{ left: `${-FilterWidth / 2}px` }}
          className={"!absolute !w-[237px] rounded-none px-2 py-2.5"}
        >
          <DropdownMenuGroup>
            {filterList.map(
              (item, idx) =>
                idx < 2 && (
                  <DropdownMenuItem
                    key={idx}
                    onClick={() => setFilter(item)}
                    className={`flex cursor-default items-center justify-between gap-[7px] rounded-sm px-2 py-1 text-base capitalize text-muted-foreground  hover:bg-accent ${
                      filter === item ? "font-semibold" : "font-medium"
                    }`}
                    textValue="Jim Carlos"
                  >
                    {item}
                    <GoodIcon className={filter === item ? "" : "hidden"} />
                  </DropdownMenuItem>
                )
            )}
            <section className={` flex cursor-default items-center justify-between px-2 py-1 text-base  text-muted-foreground`}>
              Shared with {">"}
            </section>
            {filterList.map(
              (item, idx) =>
                idx > 1 && (
                  <DropdownMenuItem
                    key={idx}
                    onClick={() => setFilter(item)}
                    className={`flex cursor-default items-center justify-between gap-[7px] rounded-sm px-2 py-2 text-sm font-medium capitalize  text-muted-foreground hover:bg-accent `}
                    textValue="Jim Carlos"
                  >
                    <div className=" flex items-center justify-center gap-1">
                      <div
                        className={` flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white ${
                          idx % 2 === 0 ? "bg-indigo-400 " : "bg-emerald-300"
                        }`}
                      >
                        {item.substring(0, 1)}
                      </div>
                      {item}
                    </div>
                    <GoodIcon className={filter === item ? "" : "hidden"} />
                  </DropdownMenuItem>
                )
            )}

            <DropdownMenuItem
              className={`flex cursor-pointer items-center justify-between px-2 py-1 text-base font-medium text-primary`}
              textValue="Jim Carlos"
            >
              Clear all filters
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <aside className="ml-auto flex h-[42px] w-6/12 items-center justify-between gap-[13px] bg-white px-[18px] py-[11px] shadow lg:w-[423px]">
        <Icons.search className="h-5 w-5" />
        <input
          type="text"
          value={searchValue}
          onChange={(e: any) => setSearchValue(e.target.value)}
          placeholder="Search by file or folder name"
          className="h-full w-full bg-inherit text-base font-normal tracking-tight text-muted-foreground focus:outline-none"
        />
      </aside>
    </header>
  );
};

export const FilesDialog = ({ files }: props) => {
  console.log(files);
  return (
    <main className="">
      {/* <FileLockIcon /> */}
      <div className="mb-4 text-xl font-bold text-muted-foreground">Files</div>
      <section className="grid grid-cols-3 justify-between gap-5 lg:grid-cols-4 xl:grid-cols-5 ">
        {files.map(({ documentName, tokenId }) => {
          const prop = { documentName, tokenId };
          return <File {...prop} />;
        })}
      </section>
    </main>
  );
};

const File = ({ documentName, tokenId }: Etch) => {
  const [openMoveModal, setOpenMoveModal] = useState(false);
  const [openPropertiesModal, setOpenPropertiesModal] = useState(false);
  const { etch, isLoading, error } = useGetUniqueEtch(tokenId);
  console.log(etch);
  console.log(error);

  const props = { etch, isLoading, openPropertiesModal, setOpenPropertiesModal };

  return (
    <>
      {/*------------- Modals & More -------------*/}
      <PropertiesDialog {...props} />

      <main
        key={tokenId}
        onClick={() => setOpenPropertiesModal(true)}
        className="flex h-[44px] w-full cursor-pointer items-center gap-[17px] rounded-lg bg-accent px-[12px] !font-body"
      >
        <div className="flex items-center justify-end">
          <FileLockIcon className="h-[18px] w-6" />
        </div>
        <div className="w-full truncate text-base font-medium text-neutral-500">{documentName}</div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="ml-auto flex h-full w-7 items-center  justify-center ">
              <Icons.singleBar className="h-5 w-[4.35px] cursor-pointer" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-[194px] w-[209px] px-2.5 py-1.5 shadow-etched-1">
            <DropdownMenuGroup>
              {options.map((item, idx) => {
                return (
                  <DropdownMenuItem
                    key={idx}
                    onClick={() => (idx < 1 ? setOpenMoveModal(true) : idx > 3 ? setOpenPropertiesModal(true) : console.log(""))}
                    className="cursor-default rounded-sm px-2.5 py-1 text-base font-semibold text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {item}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

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
              <section className="mt-[14px] flex flex-col gap-3">
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
              </section>
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
      </main>
    </>
  );
};
