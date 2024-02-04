// import Index from "@/components/pages/community/3d";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ModelViewer = dynamic(() => import("@/components/ui/model-viewer/Viewer"), {
  suspense: true,
  ssr: false,
});

export default function Community() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ModelViewer />
      </Suspense>
    </div>
  );
}
