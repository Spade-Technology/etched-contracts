import { PageBoilerplate } from "@/components/page-boilerplate";
import { FilesDialog, HeaderDialog } from "@/components/pages/etch-library";
import { useGetEtchesFromUser } from "@/utils/hooks/useGetEtchesFromUser";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";
import { useState } from "react";

export default function index() {
  const [sort, setSort] = useState("Latest first");
  const [filter, setFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const loggedInAddress = useLoggedInAddress();
  const { isLoading, etches, error } = useGetEtchesFromUser(loggedInAddress.toLowerCase());
  console.log(etches);

  const files = etches.filter(({ documentName }) => documentName.toLowerCase().includes(searchValue.toLowerCase()));

  const props = { sort, setSort, filter, setFilter, searchValue, setSearchValue, files, isLoading };

  return (
    <PageBoilerplate>
      <div className="mt-[19px]">
        <HeaderDialog {...props} />
        <main className="my-5 flex flex-col gap-4 bg-background px-6 py-[34px] shadow-4xl">
          <FilesDialog {...props} />
          {/* <FoldersDialog /> */}
        </main>
      </div>
    </PageBoilerplate>
  );
}
