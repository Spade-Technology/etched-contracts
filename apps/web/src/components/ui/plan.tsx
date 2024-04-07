import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./dialog";
import { Icons } from "./icons";
import { plan } from "../pages/etch-library/types";

export default function Plan({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<boolean> }) {
  const [selectPlan, setSelectPlan] = useState("");

  return (
    <Dialog
      open={isOpen}
      // onOpenChange={() => setIsOpen(false)}
    >
      <DialogContent className={"max-w-3xl p-5 font-body"}>
        <DialogDescription>
          <DialogTitle className="mb-1 font-semibold text-primary">Renew your subscription</DialogTitle>
          <header className="text-xs font-medium leading-4">Select a plan that suits your needs</header>
          <section className="mt-7 flex items-center gap-2">
            <div className="text-base font-semibold leading-5 text-foreground">Choose Plan</div>
            <div className="flex overflow-hidden rounded-md bg-foreground/10 text-xs font-semibold">
              <div className="flex h-8 items-center justify-center px-5">Monthly</div>
              <div className="flex h-8 items-center justify-center gap-1 bg-success-foreground px-3">
                Yearly <span className="rounded-sm bg-primary px-1 py-0.5 text-white">-20%</span>
              </div>
            </div>
          </section>
          <main className="mt-6 grid grid-cols-12 gap-5">
            {plans.map(({ price, title, subtitle, features, period, recommended }: plan) => (
              <article key={title} className={`col-span-4 rounded-xl border p-4 shadow duration-300`}>
                <div className="mb-1 text-base font-semibold leading-6 text-foreground">
                  {title}{" "}
                  <span
                    className={
                      recommended ? "rounded bg-success-foreground px-1 py-0.5 text-xs font-semibold text-primary" : "hidden"
                    }
                  >
                    Recommended
                  </span>
                </div>
                <div className="text-xs font-medium leading-4">{subtitle}</div>
                <>
                  <div className="mt-5 text-4xl font-semibold text-foreground/80">{price}</div>
                  <div className="text-xs font-medium leading-4">{period}</div>
                  <div className="my-4 flex w-full cursor-pointer items-center justify-center rounded bg-primary py-1 text-sm font-semibold text-white shadow-3xl">
                    Get Started
                  </div>
                </>

                <section className="flex flex-col gap-2">
                  {features?.map((text, idx) => (
                    <div key={`${idx}-${text}`} className="flex gap-3">
                      <div>
                        <Icons.checked className="mt-0.5" />
                      </div>
                      <div className="text-xs font-medium leading-4">{text}</div>
                    </div>
                  ))}
                </section>
              </article>
            ))}
          </main>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

const plans = [
  {
    price: "$49.99/m",
    title: "Creative",
    subtitle: "Suitable for individual artists, limited personal work",
    period: "Billed annually",
    features: [
      "1 wallet",
      "Unlimited Etches",
      "Standard Dashboard",
      "Copyright Etch",
      "Use of platform",
      "Registration (GCR)",
      "Access and visibility",
      "ZK Verification security",
    ],
  },
  {
    price: "$250/m",
    title: "Creative Pro",
    subtitle: "Suitable for 2-5 person organisations, studios and groups.",
    period: "Billed annually",
    features: [
      "3 Creative accounts",
      "Unlimited Etches",
      "Client Dashboard",
      "Copyright Etch",
      "Registration (GCR)",
      "ZK Verification security",
      "Add more admins at $20/admin and $50/extra creative account",
    ],
    recommended: true,
  },
  {
    price: "$1000",
    title: "Enterprise Plus",
    subtitle: "Suitable for large cross-functional teams and organiztions .",
    period: "Billed annually",
    features: [
      "Includes 5 Admins and 5 Creative accounts",
      "Unlimited Etches",
      "Client Dashboard",
      "Copyright Etch",
      "Registration (GCR)",
      "ZK Verification security",
      "Account manager",
      "Add more admins at $10/admin and $30/extra creative account",
    ],
  },
];
