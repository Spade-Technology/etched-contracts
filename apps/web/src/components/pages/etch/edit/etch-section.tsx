import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AddUser from "./components/add-user";
import Comments from "./components/comments";
import Edit from "./components/edit";
import { Etch } from "@/gql/graphql";

import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { useSignIn } from "@/utils/hooks/useSignIn";
import { lit } from "@/lit";
import { Loader2Icon } from "lucide-react";
import filetype from "magic-bytes.js";
import { PDFViewer } from "@/components/pdf-viewer";
import { VideoPlayer } from "@/components/VideoPlayer";

const EtchSection = ({ etch, isLoading }: { etch: Etch; isLoading: boolean }) => {
  const [openAddUser, setOpenAddUser] = useState(false);
  const [etchFile, setEtchFile] = useState("");
  const [fileType, setFileType] = useState("");
  const { regenerateAuthSig } = useSignIn();

  const viewerRef = useRef<HTMLImageElement>(null);

  const decrypt = async () => {
    await lit.connect();

    if (!lit.client || !etch?.ipfsCid) return;

    const authSig = await regenerateAuthSig();

    const decryptedArrayBuffer = await LitJsSdk.decryptFromIpfs({
      authSig,
      ipfsCid: etch?.ipfsCid, // This is returned from the above encryption
      litNodeClient: lit.client as any,
    }).catch((e) => {
      console.log(e);
      if (e.errorKind == "Validation") alert("You are not authorized to view this document");
      else alert("Something went wrong");
    });

    if (!decryptedArrayBuffer) return;

    const fileType = filetype(new Uint8Array(decryptedArrayBuffer as any));

    const image = URL.createObjectURL(new Blob([new Uint8Array(decryptedArrayBuffer as any)]));
    setEtchFile(image);
    setFileType(fileType[0]?.mime || "");

    return {};
  };

  useEffect(() => {
    if (etch?.ipfsCid) decrypt();
  }, [etch?.ipfsCid]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div className="my-4 flex justify-between gap-4">
        <div className="flex w-full basis-2/3 flex-col justify-between rounded-2xl bg-[#F3F5F5] p-4 text-black">
          {etchFile ? (
            <>
              {!!fileType.startsWith("image/") && (
                <Image
                  src={etchFile}
                  height={564}
                  width={684}
                  alt="bgImage"
                  className="col-span-2 mx-auto my-auto"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              )}

              {!!fileType.startsWith("video/") && <VideoPlayer url={etchFile} />}

              {!!fileType.startsWith("audio/") && (
                <audio
                  controls
                  className="col-span-2 mx-auto my-auto"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                >
                  <source src={etchFile} type={fileType} />
                  Your browser does not support the audio element.
                </audio>
              )}

              {!!fileType.includes("pdf") && <PDFViewer file={etchFile} navBarPosition="top" />}
            </>
          ) : (
            <Loader2Icon className="animate-spin" />
          )}
          {/* <div className="flex h-full w-full  justify-center gap-2 pt-4"></div> */}
        </div>
        <Edit setOpenAddUser={setOpenAddUser} etch={etch} isLoading={isLoading} />
      </div>
      <Comments etch={etch || {}} />

      <AddUser show={openAddUser} setShow={setOpenAddUser} etch={etch} />
    </div>
  );
};

export default EtchSection;
