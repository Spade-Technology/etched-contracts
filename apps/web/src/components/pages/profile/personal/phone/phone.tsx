import React, { useState } from "react";
import { AddEmail, RemoveEmail, VerifyEmail, email } from "../email/modals/add-email";
import { EditEmail } from "../email/modals/edit-email";
import { useClerk } from "@clerk/nextjs";
import { AddPhone, VerifyPhone } from "./modals";

export const Phone = () => {
  const { user } = useClerk();
  console.log("MAMA user?.: ", user?.phoneNumbers);
  // TODO: ADD LOADING
  if (!user) return;

  const [isModal, setIsModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [verify, setVerify] = useState(false);
  const [removeEmail, setRemoveEmail] = useState(false);
  const phone = {
    title: "Phone Number",
    value: user?.phoneNumbers[0]?.phoneNumber || "",
    id: user?.phoneNumbers[0]?.id,
    verified: user?.phoneNumbers[0]?.verification?.status === "verified",
  };

  console.log("MAMA phone: ", phone);
  const props = { isModal, setIsModal, removeEmail, setRemoveEmail, emails: phone, setVerify };
  return (
    <main>
      {/* <---------- modals & more ----------> */}
      <AddPhone {...props} />
      <VerifyPhone isModal={verify} setIsModal={setVerify} />
      {/* <RemoveEmail {...props} /> */}

      <header className="mb-5 mt-3 text-xl font-semibold text-foreground">Phone</header>
      <section className="flex flex-col gap-5">
        <div className="">
          <div className=" text-base font-semibold text-muted-foreground">{phone.title}</div>
          <div
            className={`${
              phone.value ? "flex" : "hidden"
            } h-10 w-80 items-center justify-start rounded border border-muted-foreground bg-muted pl-3 font-body text-base font-medium text-muted-foreground`}
          >
            {phone.value}
          </div>
          <div className={`${phone.value ? "flex" : "hidden"} mt-2 items-center gap-4`}>
            {!phone.verified && (
              <div
                onClick={() => {
                  setVerify(true);
                }}
                className="cursor-pointer font-body text-sm font-medium text-primary"
              >
                Verify
              </div>
            )}
            <div
              onClick={() => {
                setRemoveEmail(true);
              }}
              className="flex h-5 w-16 cursor-pointer items-center justify-center gap-1 rounded-full border border-destructive bg-destructive font-body text-sm font-medium text-white "
            >
              Remove
            </div>
          </div>
        </div>
      </section>

      <div
        onClick={() => setIsModal(true)}
        className={`${
          phone.value ? "hidden" : " flex"
        } mt-5 h-10 w-fit cursor-pointer items-center gap-3 border border-primary px-5 text-base font-semibold text-primary duration-300 hover:bg-primary hover:text-white hover:shadow-2xl`}
      >
        + Add Phone Number
      </div>
    </main>
  );
};
