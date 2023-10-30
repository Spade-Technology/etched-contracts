import { PageBoilerplate } from "@/components/page-boilerplate";
import { FoldersDialog, HeaderDialog } from "@/components/pages/etch-library";
import React, { useState } from "react";

export default function index() {
  const [sort, setSort] = useState("Latest first");
  const [filter, setFilter] = useState("");

  const props = { sort, setSort, filter, setFilter };

  return (
    <PageBoilerplate>
      <section className="mt-[19px]">
        <HeaderDialog {...props} />

        <main className="mt-[19px] bg-white px-6 py-[34px] shadow">
          <FoldersDialog />
        </main>
      </section>
    </PageBoilerplate>
  );
}
