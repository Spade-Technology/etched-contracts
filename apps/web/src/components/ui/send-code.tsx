import React, { useState } from "react";
import { DialogDescription } from "./dialog";
import { Label } from "./label";
import { form } from "../pages/profile";
import { Button } from "./button";
import { Icons } from "./icons";
import { country_codes } from "@/lib/mock-data";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { GoodIcon } from "../icons/good";
import { regrex } from "@/lib/utils";

export default function SendCode({
  form,
  setForm,
  setSendCode,
}: {
  form: form;
  setForm: React.Dispatch<form>;
  setSendCode: React.Dispatch<boolean>;
}) {
  const [country, setCountry] = useState<{ name?: string; dial_code?: string; code?: string }>({ code: "US" });
  const [inputVal, setInputVal] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+1");

  const countries = country_codes.filter(({ name }) => name.toLowerCase().includes(inputVal.toLowerCase()));

  const onChange = (e: any) => {
    if (e.target.value === "" || regrex.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSendCode(true);
    setPhoneNumber("");
  };

  return (
    <section className="px-3">
      <div className="mb-5 font-body text-sm font-medium text-muted-foreground">
        We’ll send a verification code to this mobile number whenever you sign into this account.
      </div>
      <form onSubmit={handleSubmit}>
        <Label className="font-body text-base font-semibold">Phone number</Label>
        <div className="flex h-10 w-full items-center gap-3 rounded border border-muted-foreground px-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex cursor-pointer items-center gap-2 font-body text-base font-semibold text-muted-foreground">
                {country.code} <Icons.dropdown className="h-2 w-3" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-48 items-start p-2">
              <DropdownMenuGroup>
                <div className="mb-1 flex h-10 items-center gap-1 rounded border px-2">
                  <input
                    autoFocus
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    type="text"
                    placeholder="Search..."
                    className="h-full w-full border-none capitalize focus:outline-none"
                  />
                  <Icons.search className=" cursor-pointer" />
                </div>
                {countries.map(({ name, code, dial_code }, idx) => {
                  if (idx < 5) {
                    return (
                      <DropdownMenuItem
                        key={idx}
                        onClick={() => {
                          setPhoneNumber(dial_code);
                          setCountry({ name, code, dial_code });
                        }}
                        className={`flex cursor-default items-center justify-between gap-[7px] rounded-sm px-2 py-2 text-sm capitalize text-accent-foreground hover:bg-accent`}
                        textValue="Jim Carlos"
                      >
                        {name}
                        <GoodIcon className={country.code === code ? "" : "hidden"} />
                      </DropdownMenuItem>
                    );
                  }
                })}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <input
            value={phoneNumber}
            required
            autoFocus
            onChange={onChange}
            maxLength={11}
            type="text"
            placeholder="+29038204083"
            className="h-full text-base font-body font-medium w-full border-none focus:outline-none"
          />
        </div>

        <footer className="mt-10 flex items-center justify-end gap-5">
          <div
            onClick={() => {
              setForm({ ...form, status: false });
            }}
            className="cursor-pointer text-sm font-semibold hover:text-foreground"
          >
            Cancel
          </div>
          <div>
            <Button type="submit">Verify</Button>
          </div>
        </footer>
      </form>
    </section>
  );
}
