import { Etch } from "@/gql/graphql";
import Image from "next/image";
import { useEffect, useState, useCallback, ComponentType } from "react";
import AddUser from "./components/add-user";
import Comments from "./components/comments";
import Edit from "./components/edit";

import { VideoPlayer } from "@/components/VideoPlayer";
import { PDFViewer } from "@/components/pdf-viewer";
import { Skeleton } from "@/components/ui/skeleton";
import { lit } from "@/lit";
import { useSignIn } from "@/utils/hooks/useSignIn";
import filetype from "magic-bytes.js";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";
import { model_formats } from "@/utils/model-formats";
import { useContractRead } from "wagmi";
import EtchesABI from "@/contracts/abi/Etches.json";

import { useLoggedInAddress } from "@/utils/hooks/useSignIn";

import { contracts } from "@/contracts";
import dynamic from "next/dynamic";

const EtchSection = ({ etch, isLoading }: { etch: Etch; isLoading: boolean }) => {
  const [openAddUser, setOpenAddUser] = useState(false);
  const [etchFile, setEtchFile] = useState("");
  const [fileType, setFileType] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { regenerateAuthSig } = useSignIn();

  const owner = useLoggedInAddress();

  const { data: hasWritePermission } = useContractRead({
    abi: EtchesABI,
    address: contracts.Etch,
    functionName: "hasWritePermission",
    args: [owner, etch?.tokenId],
  });

  const decrypt = async () => {
    await lit.connect();
    if (!lit.client || !etch?.ipfsCid) return;

    const authSig = await regenerateAuthSig();

    const decryptedArrayBuffer = await lit
      .decryptFromIpfs({
        authSig,
        ipfsCid: etch?.ipfsCid, // This is returned from the above encryption
      })
      .catch((e) => {
        console.log(e);
        if (e.errorKind == "Validation") alert("You are not authorized to view this document");
        else alert("Something went wrong");
      });

    if (!decryptedArrayBuffer) return;

    const metadata = await lit.getMetadataFromIpfs(etch?.ipfsCid);
    let fileType = metadata?.type;
    console.log(metadata);

    if (!fileType) fileType = filetype(new Uint8Array(decryptedArrayBuffer as any))[0]?.mime;
    console.log(URL.createObjectURL(new Blob([new Uint8Array(decryptedArrayBuffer as any)])));

    const image = URL.createObjectURL(new Blob([new Uint8Array(decryptedArrayBuffer as any)]));
    setEtchFile(image);
    setFileType(fileType || "");

    return {};
  };

  useEffect(() => {
    if (etch?.ipfsCid) decrypt();
  }, [etch?.ipfsCid]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullScreen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleFullScreen = useCallback(() => {
    setIsFullScreen(!isFullScreen);
  }, [isFullScreen]);
  console.log(fileType);

  let ModelViewer: ComponentType<{ file: string; fileName: string }> = () => <></>;
  if (Object.keys(model_formats).includes(fileType)) {
    ModelViewer = dynamic(() => import("@/components/model-viewer"), {
      loading: (loadingProps) => <p>Loading...</p>,
      ssr: false,
    });
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="my-4 grid grid-cols-3 gap-4">
      {/* FullScreen overlay */}
      {/* <Viewer file={"https://rufus31415.github.io/sandbox/3d-viewer/formats/BVH/models/01_01.bvh"} /> */}
      {isFullScreen && (
        <div
          className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-white bg-opacity-75"
          onClick={toggleFullScreen}
        >
          <ModelViewer file={etchFile} fileName={`model`} />
          <ExitFullScreenIcon className="absolute right-5 top-5 h-6 w-6 cursor-pointer" />
          {etchFile && fileType.startsWith("image/") && (
            <img src={etchFile} alt="Etch image" className="max-h-full max-w-full rounded-sm" />
          )}
        </div>
      )}

      {/* etch section */}
      <div className="col-span-2">
        <AspectRatio ratio={16 / 9}>
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#F3F5F5] ">
            {etchFile ? (
              <>
                {!!fileType.startsWith("image/") && (
                  <>
                    <Image
                      src={etchFile}
                      alt="bgImage"
                      fill
                      className="col-span-2 mx-auto my-auto rounded-2xl"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <EnterFullScreenIcon className="absolute right-5 top-5 h-6 w-6 cursor-pointer" onClick={toggleFullScreen} />
                  </>
                )}

                {!!fileType.startsWith("video/") && <VideoPlayer url={etchFile} />}

                {!!fileType.startsWith("audio/") && (
                  <audio
                    controls
                    className="col-span-2"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  >
                    <source src={etchFile} type={fileType} />
                    Your browser does not support the audio element.
                  </audio>
                )}

                {!!fileType.includes("pdf") && <PDFViewer file={etchFile} navBarPosition="top" />}

                {Object.keys(model_formats).includes(fileType) && (
                  // @ts-ignore
                  <ModelViewer file={etchFile} fileName={`model${model_formats[fileType][0]}`} />
                )}
              </>
            ) : (
              <Skeleton className="h-full w-full rounded-2xl bg-[#097B45]" />
            )}
          </div>
        </AspectRatio>

        <Comments etch={etch || {}} hasWritePermission={hasWritePermission as boolean} />
      </div>
      <div className="col-span-1">
        <Edit
          setOpenAddUser={setOpenAddUser}
          etch={etch}
          isLoading={isLoading}
          hasWritePermission={hasWritePermission as boolean}
        />
        <AddUser show={openAddUser} setShow={setOpenAddUser} etch={etch} />
      </div>
    </div>
  );
};

export default EtchSection;
