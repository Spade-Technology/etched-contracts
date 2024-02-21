import { useClerk } from "@clerk/nextjs";
import { useState } from "react";
import { AddPhone, RemovePhone, VerifyPhone } from "./modals";

export const Phone = () => {
  const { user } = useClerk();

  const [isModal, setIsModal] = useState(false);
  const [verify, setVerify] = useState(false);
  const [removePhone, setRemovePhone] = useState(false);
  const phone = {
    title: "Phone Number",
    value: user?.phoneNumbers[0]?.phoneNumber || "",
    id: user?.phoneNumbers[0]?.id,
    verified: user?.phoneNumbers[0]?.verification?.status === "verified",
  };

  const props = { isModal, setIsModal, removePhone, setRemovePhone, emails: phone, setVerify };
  if (!user) return;
  return (
    <main>
      {/* <---------- modals & more ----------> */}
      <AddPhone {...props} />
      <VerifyPhone isModal={verify} setIsModal={setVerify} />
      <RemovePhone {...props} />

      <header className="mb-5 mt-3 text-xl font-semibold text-foreground">Phone</header>
      <section className="flex flex-col gap-5">
        <div>
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
                setRemovePhone(true);
              }}
              className="flex h-6 w-16 cursor-pointer items-center justify-center gap-1 rounded-full border border-destructive bg-destructive font-body text-sm font-medium text-white "
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
