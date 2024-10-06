import { Etch } from "@/gql/graphql";
import Image from "next/image";
import { ComponentType, useCallback, useEffect, useMemo, useState } from "react";
import AddUser from "./components/add-user";
import Comments from "./components/comments";
import Edit from "./components/edit";

import { VideoPlayer } from "@/components/VideoPlayer";
import { PDFViewer } from "@/components/pdf-viewer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import EtchesABI from "@/contracts/abi/Etches.json";
import { lit } from "@/lit";
import { useSignIn } from "@/utils/hooks/useSignIn";
import { model_formats } from "@/utils/model-formats";
import { EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";
import filetype from "magic-bytes.js";
import { useContractRead } from "wagmi";

import { useLoggedInAddress } from "@/utils/hooks/useSignIn";

import { contracts } from "@/contracts";
import dynamic from "next/dynamic";

import { useAuth } from "@clerk/nextjs";
import { api } from "@/utils/api";

import { useGetServerSigs } from "@/utils/hooks/useEtchBackendOperation";

const EtchSection = ({ etch, isLoading }: { etch: Etch; isLoading: boolean }) => {
  const { userId: _userId } = useAuth();
  const userId = _userId?.toLowerCase();
  const { mutateAsync: getUserFromId } = api.patch.getUser.useMutation();

  const [openAddUser, setOpenAddUser] = useState(false);
  const [etchFile, setEtchFile] = useState("");
  const [fileType, setFileType] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { regenerateAuthSig, generateSessionSig } = useSignIn();
  const { serverSideSigs } = useGetServerSigs();
  const owner = useLoggedInAddress();

  const { data: hasWritePermission } = useContractRead({
    abi: EtchesABI,
    address: contracts.Etch,
    functionName: "hasWritePermission",
    args: [owner, etch?.tokenId],
  });

  const decrypt = async () => {
    try {
      // await lit.connect();
      // if (!etch?.ipfsCid) return;
      // const authSig = await regenerateAuthSig();
      // const sessionSigs = await generateSessionSig();
      // const sessionSigs = await regenerateSessionSig();
      // const decrypted = await lit.decryptFromIpfs({ sessionSigs, authSig, ipfsCid: etch.ipfsCid }).catch((e) => alert(e.message));
      //FIXME: (START) Undo once LIT gets their junk together
      const patchUserInfo = await getUserFromId({
        userId: userId!,
        baseProvider: process.env.NEXT_PUBLIC_PATCHWALLET_KERNEL_NAME,
      });
      console.log("********************* fake decryption (patchUserInfo) *********************");
      console.log(patchUserInfo);
      console.log({
        fromUserId: userId!,
        baseProvider: process.env.NEXT_PUBLIC_PATCHWALLET_KERNEL_NAME,
      });
      const decrypted = await lit
        .fakeDecryptFromIpfs({ eoa: patchUserInfo?.eoa, ipfsCid: etch.ipfsCid })
        .catch((e) => alert(e.message));
      //FIXME: (END) Undo once LIT gets their junk together
      if (!decrypted?.data) return;
      const metadata = decrypted.metadata;
      const detectedFileType =
        metadata?.type || (typeof decrypted.data === "string" ? "string" : filetype(decrypted.data)[0]?.mime);
      const image = typeof decrypted.data === "string" ? "" : URL.createObjectURL(new Blob([decrypted.data]));
      setEtchFile(image);
      setFileType(detectedFileType || "");
    } catch (e: any) {
      console.error(e);
      alert(e.errorKind === "Validation" ? "You are not authorized to view this document" : e.message || "Something went wrong");
    }
  };

  // async function decrypt() {
  //   try {
  //     await lit.connect();
  //     if (!etch?.ipfsCid) return;

  //     const ssSigs = await serverSideSigs();
  //     console.log("SERVER SIDE SIGS: ", ssSigs);
  //     const authSig = ssSigs.authSig;
  //     const sessionSigs = ssSigs.sessionSig;
  //     // const authSig = await regenerateAuthSig();
  //     // const sessionSigs = await generateSessionSig();
  //     const decrypted = await lit.decryptFromIpfs({ authSig, sessionSigs, ipfsCid: etch.ipfsCid }).catch((e) => alert(e.message));
  //     if (!decrypted?.data) return;
  //     const metadata = decrypted.metadata;
  //     const detectedFileType =
  //       metadata?.type || (typeof decrypted.data === "string" ? "string" : filetype(decrypted.data)[0]?.mime);
  //     const image = typeof decrypted.data === "string" ? "" : URL.createObjectURL(new Blob([decrypted.data]));
  //     setEtchFile(image);
  //     setFileType(detectedFileType || "");
  //   } catch (e: any) {
  //     console.error(e);
  //     alert(e.errorKind === "Validation" ? "You are not authorized to view this document" : e.message || "Something went wrong");
  //   }
  // }

  useEffect(() => {
    if (etch?.ipfsCid) decrypt();
  }, [etch?.ipfsCid]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsFullScreen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleFullScreen = useCallback(() => setIsFullScreen((prevState) => !prevState), []);

  const ModelViewer = useMemo(() => {
    return Object.keys(model_formats).includes(fileType)
      ? dynamic(() => import("@/components/model-viewer"), { loading: () => <p>Loading...</p>, ssr: false })
      : () => <></>;
  }, [fileType]);

  if (isLoading) return <div>Loading...</div>;

  const renderMedia = () => {
    if (!etchFile) return <Skeleton className="h-full w-full rounded-2xl bg-[#097B45]" />;
    const isImage = fileType.startsWith("image/");
    const isVideo = fileType.startsWith("video/");
    const isAudio = fileType.startsWith("audio/");
    const isPDF = fileType.includes("pdf");
    const isModel = Object.keys(model_formats).includes(fileType);

    return (
      <>
        {isImage && (
          <>
            <Image
              src={etchFile}
              alt="Etch image"
              fill
              className="rounded-2xl"
              onError={(event) => (event.currentTarget.style.display = "none")}
            />
            <EnterFullScreenIcon className="absolute right-5 top-5 h-6 w-6 cursor-pointer" onClick={toggleFullScreen} />
          </>
        )}
        {isVideo && <VideoPlayer url={etchFile} />}
        {isAudio && (
          <audio controls onError={(event) => (event.currentTarget.style.display = "none")}>
            <source src={etchFile} type={fileType} />
            Your browser does not support the audio element.
          </audio>
        )}
        {isPDF && <PDFViewer file={etchFile} navBarPosition="top" />}
        {isModel && (
          <ModelViewer file={etchFile} fileName={`model${model_formats[fileType as keyof typeof model_formats][0] || ""}`} />
        )}
      </>
    );
  };

  return (
    <div className="my-4 grid grid-cols-3 gap-4">
      {isFullScreen && (
        <div
          className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-background bg-opacity-75"
          onClick={toggleFullScreen}
        >
          <ModelViewer file={etchFile} fileName={`model`} />
          <ExitFullScreenIcon className="absolute right-5 top-5 h-6 w-6 cursor-pointer" />
          {etchFile && fileType.startsWith("image/") && (
            <img src={etchFile} alt="Etch image" className="max-h-full max-w-full rounded-sm" />
          )}
        </div>
      )}

      <div className="col-span-2">
        <AspectRatio ratio={16 / 9}>
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-background">{renderMedia()}</div>
        </AspectRatio>
        <Comments etch={etch || {}} hasWritePermission={!!hasWritePermission} />
      </div>
      <div className="col-span-1">
        <Edit setOpenAddUser={setOpenAddUser} etch={etch} isLoading={isLoading} hasWritePermission={!!hasWritePermission} />
        <AddUser show={openAddUser} setShow={setOpenAddUser} etch={etch} />
      </div>
    </div>
  );
};

export default EtchSection;
