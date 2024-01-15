// import Index from "@/components/pages/community/3d";
import { PageBoilerplate } from "@/components/page-boilerplate";
import { Email, Password, Paymaster, Profile, TwoStep } from "@/components/pages/profile";
import { SelectTheme } from "@/components/pages/profile/personal/select-theme";
import { SidebarDialog } from "@/components/pages/profile/sidebar";
import { useState } from "react";

export default function Community() {
  const [activeTab, setActiveTab] = useState<string>("Personal");

  const tabs = [
    { tab: "Personal", contents: [<Profile />, <Email />, <SelectTheme />] },
    { tab: "Billing", contents: [] },
    { tab: "Security", contents: [<Paymaster />, <Password />, , <TwoStep />] },
    { tab: "Item", contents: [] },
  ];

  const props = { activeTab, setActiveTab };

  return (
    <PageBoilerplate>
      <main className="mt-5 flex w-full gap-7 bg-white px-10 py-8 shadow">
        <SidebarDialog {...props} />
        <section className="ml-6 min-h-screen w-full border-l border-[#E0E0E0] pl-5">
          {tabs.map(
            ({ tab, contents }, idx) =>
              tab == activeTab && (
                <div key={idx} className="flex flex-col gap-7">
                  {contents.map((content) => (
                    <div className="">{content}</div>
                  ))}
                </div>
              )
          )}
        </section>
      </main>
    </PageBoilerplate>
  );
}
