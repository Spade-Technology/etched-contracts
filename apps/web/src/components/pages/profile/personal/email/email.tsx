import React, { useState } from "react";
import { AddEmail, RemoveEmail, email } from "./email-modals";

export const Email = () => {
  const [isModal, setIsModal] = useState(false);
  const [removeEmail, setRemoveEmail] = useState(false);
  const [emails, setEmails] = useState<email[]>([
    { title: "Primary Email Address", value: "jimc.carlos1965@gmail.com" },
    { title: "Secondary Email Address", value: "" },
  ]);

  const props = { isModal, setIsModal, removeEmail, setRemoveEmail, emails };
  return (
    <main>
      {/* <---------- modals & more ----------> */}
      <AddEmail {...props} />
      <RemoveEmail {...props} />

      <header className="mb-5 mt-3 text-xl font-semibold text-foreground">Email</header>
      <section className="flex flex-col gap-5">
        {emails.map(({ title, value }, idx) => (
          <div key={idx} className="">
            <div className=" text-base font-semibold text-muted-foreground">{title}</div>
            <div
              className={`${
                value ? "flex" : "hidden"
              } h-10 w-80 items-center justify-start rounded border border-muted-foreground bg-muted pl-3 font-body text-base font-medium text-muted-foreground`}
            >
              {value}
            </div>
            <div className={`${idx == 1 && value ? "flex" : "hidden"} mt-2 items-center gap-4`}>
              <div className="cursor-pointer font-body text-sm font-medium text-primary">Edit</div>
              <div onClick={() => setRemoveEmail(true)} className="flex h-5 w-16 cursor-pointer items-center justify-center gap-1 rounded-full border border-destructive bg-destructive font-body text-sm font-medium text-white ">
                Remove
              </div>
            </div>
          </div>
        ))}
      </section>
      <div
        onClick={() => setIsModal(true)}
        className={`${
          emails[1]?.value ? "hidden" : " flex"
        } mt-5 h-10 w-fit cursor-pointer items-center gap-3 border border-primary px-5 text-base font-semibold text-primary duration-300 hover:bg-primary hover:text-white hover:shadow-2xl`}
      >
        + Add secondary email
      </div>
    </main>
  );
};
