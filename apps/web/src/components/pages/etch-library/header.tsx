import { GoodIcon } from "@/components/icons/good";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import React, { useEffect, useRef, useState } from "react";
import { props } from "./types";

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
            className="flex h-[42px] w-fit gap-2 border-none bg-background bg-transparent text-base font-medium text-muted-foreground shadow-4xl"
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
            className="flex h-[42px] w-fit gap-2 border-none bg-background bg-transparent text-base font-medium text-muted-foreground shadow-4xl"
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
            <div className={` flex cursor-default items-center justify-between px-2 py-1 text-base  text-muted-foreground`}>
              Shared with {">"}
            </div>
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

      <aside className="ml-auto flex h-[42px] w-6/12 items-center justify-between gap-[13px] bg-background px-[18px] py-[11px] shadow-4xl lg:w-[423px]">
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
