import { PageBoilerplate } from "@/components/page-boilerplate";
import EtchSection from "@/components/pages/etch/edit/etch-section";
import { useGetEtchesFromUser } from "@/utils/hooks/useGetEtchesFromUser";
import { useSession } from "next-auth/react";

export default function EditEtch() {
  const { data: session } = useSession();
  const { $state, isLoading, etchToDisplay } = useGetEtchesFromUser(session?.address?.toLowerCase());

  return (
    <PageBoilerplate>
      <div className="my-4 items-center px-6 py-6 shadow-etched-1">
        <div>
          Client 2 Etch Folder {">"} Blueprints {">"} Chip designs {">"} S2 Chip {">"} Etch file name
        </div>

        <EtchSection />
      </div>
    </PageBoilerplate>
  );
}
