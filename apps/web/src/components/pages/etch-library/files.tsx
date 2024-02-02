import React, { useState } from "react";
import { modal, props } from "./types";
import { File } from "./file";

export const FilesDialog = ({ files, isLoading }: props) => {
  const [activeModals, setActiveModals] = useState<modal>({ current: "", list: [] });

  const skeletons = "Lorem ipsum dolor sit, amet";

  return (
    <main className="">
      <div className="mb-4 text-xl font-bold text-muted-foreground">
        {!isLoading && files.length < 1 ? "Please create a file/Etch" : "Files"}
      </div>
      <div className="grid grid-cols-3 justify-between gap-5 lg:grid-cols-4 xl:grid-cols-5 ">
        {isLoading
          ? skeletons.split("")?.map((item, index) => {
              return (
                <main
                  key={index}
                  className="flex h-[44px] w-full cursor-default items-center gap-[17px] rounded-lg bg-[rgba(0,0,0,.02)] px-[12px] !font-body"
                >
                  {" "}
                  <div className="skeleton flex h-[18px] w-6 items-center justify-end bg-skeleton"></div>
                  <div className="skeleton h-5  w-full truncate bg-skeleton text-base font-medium text-muted-foreground"></div>
                </main>
              );
            })
          : files.map((file) => {
              return <File {...file} key={file.tokenId} activeModals={activeModals} setActiveModals={setActiveModals} />;
            })}
      </div>
    </main>
  );
};
