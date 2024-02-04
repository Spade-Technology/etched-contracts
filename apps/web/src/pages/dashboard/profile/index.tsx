// import Index from "@/components/pages/community/3d";
import { PageBoilerplate } from "@/components/page-boilerplate";
import { BackUpCodes, Email, Password, Paymaster, Profile, TwoStep } from "@/components/pages/profile";
import { Phone } from "@/components/pages/profile/personal/phone/phone";
import { SelectTheme } from "@/components/pages/profile/personal/select-theme";
import { SidebarDialog } from "@/components/pages/profile/sidebar";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function Community() {
  const { isSignedIn } = useUser();

  const [activeTab, setActiveTab] = useState<string>("Personal");

  const tabs = [
    { tab: "Personal", contents: [<Profile />, <Email />, <Phone />, <SelectTheme />] },
    { tab: "Billing", contents: [] },
    { tab: "Security", contents: [<Paymaster />, <Password />, <TwoStep />, <BackUpCodes />] },
    { tab: "Item", contents: [] },
  ];

  const props = { activeTab, setActiveTab };
  if (!isSignedIn) return;
  return (
    <PageBoilerplate>
      <main className="mt-5 flex w-full gap-7 bg-background px-10 py-8 shadow-4xl">
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
