import { GoodIcon } from "@/components/icons/good";
import { LogoAnimated } from "@/components/icons/logo-long-animated";
import { Button } from "@/components/ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandList, CommandSeparator } from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetEtchesFromUser } from "@/utils/hooks/useGetEtchesFromUser";
import { useSearchGQL } from "@/utils/hooks/useSearchGQL";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";
import { ChevronRightIcon, FileIcon } from "@radix-ui/react-icons";
import { FileLockIcon, HashIcon, Loader2Icon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface props {
  sort: string;
  setSort: React.Dispatch<string>;
  filter: string;
  setFilter: React.Dispatch<string>;
}

interface Folder {
  title: string;
  idx: number;
}

const options = ["Move to >", "Rename", "Share", "Delete"];

export const HeaderDialog = ({ sort, setSort, filter, setFilter }: props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [width, setWidth] = useState(0);
  const [FilterWidth, setFilterWidth] = useState(0);
  const currentSearch = useState("");
  const { isLoading, etches } = useSearchGQL(currentSearch[0]);

  const loggedInAddress = useLoggedInAddress();
  // const { isLoading, etches, error } = useGetEtchesFromUser(loggedInAddress.toLowerCase());
  console.log(etches);

  const sortList = ["Latest first", "File type", "Oldest fist", "Alphabetically"];
  const filterList = ["Private", "Public", "Tom Robins", "Ariana Gordon", "Tom Robins", "Ariana Gordon"];

  const ref: React.MutableRefObject<any> = useRef();
  const filterRef: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    setWidth(ref.current?.clientWidth);
    setFilterWidth(filterRef.current?.clientWidth);
    window.addEventListener("resize", () => {
      setFilterWidth(filterRef.current?.clientWidth);
      setWidth(ref.current?.clientWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(0);
      });
    };
  }, [sort, filter]);

  // dirty fix to refresh the search once the data is loaded
  useEffect(() => {
    if (!isLoading) currentSearch[1](currentSearch[0]);
  });

  return (
    <header className="justify- flex gap-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            ref={ref}
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

      <aside
        onClick={() => setOpenSearch(true)}
        className="ml-auto flex h-[42px] w-6/12 cursor-pointer items-center justify-between gap-[13px] bg-white px-[18px] py-[11px] shadow lg:w-[423px]"
      >
        <Icons.search className="h-5 w-5" />
        <input
          type="text"
          placeholder="Search by file or folder name"
          className="h-full w-full bg-inherit text-base font-normal tracking-tight text-muted-foreground focus:outline-none"
        />
      </aside>

      <CommandDialog open={openSearch} onOpenChange={setOpenSearch}>
        <CommandInput
          placeholder="Type a command or search..."
          onValueChange={(value) => currentSearch[1](value)}
          value={currentSearch[0]}
        />
        <CommandList className="max-h-[400px]">
          {isLoading ? (
            <>
              <Loader2Icon className="mx-auto my-4 animate-spin" />
              <CommandSeparator />
            </>
          ) : (
            <div className='p-3'>
              {currentSearch[0] && etches.length > 0 &&
                etches.map(({ tokenId, documentName }) => {
                  return (
                    <Link
                      className="group flex w-full items-center gap-3 rounded-md bg-muted px-3 py-2.5 text-muted-foreground duration-300 mb-4 hover:bg-primary hover:text-white"
                      href={`/dashboard/etches/${tokenId}`}
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-md border-[1px] border-muted-foreground bg-white  group-hover:border-white group-hover:bg-transparent">
                        <HashIcon className="h-4 w-4" />
                      </div>
                      <div className="text-lg ">{documentName}</div>
                      <ChevronRightIcon className="ml-auto text-xl" />
                    </Link>
                  );
                })}
            </div>
          )}
          {currentSearch[0] && etches.length < 1 && !isLoading ? <>
          <CommandEmpty>No results found.</CommandEmpty>
          </> : ''}
          
        </CommandList>
        <div className={currentSearch[0] ? "mt-5 h-[1px] w-full  bg-muted " : "hidden"} />

        <footer className="flex items-center justify-end gap-3 p-5">
          <div className=" text-sm text-muted-foreground">Search by</div>
          <LogoAnimated className="max-w-[100px]" />
        </footer>
      </CommandDialog>
    </header>
  );
};

export const FilesDialog = () => {
  const files =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus modi non. Molestiae amet nostrum quae vel aliquam voluptatum, cumque esse ducimus ex labore sunt. Nisi fuga rem quam quisquam.";

  return (
    <main className="">
      {/* <FileLockIcon /> */}
      <div className="mb-4 text-xl font-bold text-muted-foreground">Files</div>
      <section className="grid grid-cols-3 justify-between gap-5 lg:grid-cols-4 xl:grid-cols-5 ">
        {files.split("").map((item, idx) => {
          const prop = { title: "Client custom", idx };
          if (idx < 10) {
            return <File {...prop} />;
          }
        })}
      </section>
    </main>
  );
};

const File = ({ title, idx }: Folder) => {
  return (
    <main key={idx} className="flex h-[44px] w-full items-center gap-[17px] rounded-lg bg-accent px-[12px]">
      <div className="flex items-center justify-center">
        <FileLockIcon className="h-[18px] w-6" />
      </div>
      <div className="truncate text-base font-medium text-neutral-500">{title}</div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="ml-auto flex items-center justify-center">
            <Icons.singleBar className="h-5 w-[4.35px] cursor-pointer" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-[194px] w-[209px] px-2.5 py-1.5 shadow-etched-1">
          <DropdownMenuGroup>
            {options.map((item, idx) => {
              return (
                <DropdownMenuItem
                  key={idx}
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
  );
};

export const FoldersDialog = () => {
  const folders =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus modi non. Molestiae amet nostrum quae vel aliquam voluptatum, cumque esse ducimus ex labore sunt. Nisi fuga rem quam quisquam.";
  return (
    <main className="">
      <div className="mb-4 text-xl font-bold text-muted-foreground">Folders</div>
      <section className="grid grid-cols-3 justify-between gap-5 lg:grid-cols-4 xl:grid-cols-5 ">
        {folders.split("").map((item, idx) => {
          const prop = { title: "Client custom", idx };
          if (idx < 10) {
            return <Folder {...prop} />;
          }
        })}
      </section>
    </main>
  );
};

const Folder = ({ title, idx }: Folder) => {
  return (
    <main key={idx} className="flex h-[44px] w-full items-center gap-[17px] rounded-lg bg-accent px-[12px]">
      <div className="flex items-center justify-center">
        <Icons.folder className="h-[18px] w-6" />
      </div>
      <div className=" truncate text-base font-medium text-neutral-500">{title}</div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="ml-auto flex items-center justify-center">
            <Icons.singleBar className="h-5 w-[4.35px] cursor-pointer" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-[194px] w-[209px] px-2.5 py-1.5 shadow-etched-1">
          <DropdownMenuGroup>
            {options.map((item, idx) => {
              return (
                <DropdownMenuItem
                  key={idx}
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
  );
};
