import { EtchedENS } from "@/components/ens-button";
import { AlertDialog, AlertDialogContent, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { api } from "@/utils/api";
import { useUploadThing } from "@/utils/uploadthing";
import { useClerk } from "@clerk/nextjs";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const ChangeImage = ({ modal, openModal, reload }: { modal: boolean; openModal: any; reload: any }) => {
  const [file, setFile] = useState<any>();
  const { mutateAsync: setClerkProfileImage, isLoading } = api.user.setClerkProfileImage.useMutation();
  const { startUpload, isUploading } = useUploadThing("EtchUpload");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles[0]) {
      return;
    }

    const newFiles = [
      ...acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    ];

    setFile(newFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/*": [],
    },
  });

  const uploadImage = async () => {
    const uploaded = await startUpload([file]);
    toast({
      title: "Uploading",
      description: "Please Wait",
      variant: "default",
    });

    if (!uploaded || !uploaded[0]?.url) {
      toast({
        title: "Upload failed",
        description: "Please try again",
        variant: "destructive",
      });
      return;
    }
    await setClerkProfileImage({ file: uploaded[0]?.url });

    openModal(false);
    setFile(null);
    toast({
      title: "Success!",
      description: "Your profile picture got updated !",
      variant: "success",
    });
    await reload();
  };
  return (
    <AlertDialog
      open={modal}
      onOpenChange={() => {
        openModal(!modal);
      }}
    >
      <AlertDialogContent className="max-w-[361px]">
        <AlertDialogTitle className="font-body text-base text-primary">Upload a new image</AlertDialogTitle>
        {file ? (
          <img src={file.preview} alt="Preview" className="rounded-lg object-cover shadow-lg" />
        ) : (
          <div
            {...getRootProps()}
            className="bg-primary-foreground-50 flex h-[33vh] cursor-pointer items-center justify-center rounded-lg border-[1px] border-dashed border-gray-600 bg-slate-50 text-slate-600  transition-all hover:border-gray-400 hover:text-slate-900"
          >
            <>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p className="text-center">Drag 'n' drop some files here, or click to select files</p>
              )}
            </>
          </div>
        )}
        <footer className="mt-10 flex items-center justify-end gap-5">
          <Button
            onClick={() => {
              openModal(false);
              setFile(null);
            }}
            disabled={isLoading || isUploading}
            className="bg-destructive text-white !shadow-2xl"
          >
            Cancel
          </Button>
          <div>
            <Button disabled={isLoading || isUploading} onClick={uploadImage}>
              Upload image
            </Button>
          </div>
        </footer>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const Profile = () => {
  const { user } = useClerk();
  const [change, setChange] = useState(false);
  const [imgUrl, setImgUrl] = useState(user?.imageUrl);

  return (
    <main>
      <ChangeImage
        modal={change}
        openModal={setChange}
        reload={async () => {
          const newUser = await user?.reload();
          setImgUrl(newUser?.imageUrl);
        }}
      />
      <header className="mb-5 text-xl font-semibold text-foreground">Personal Profile</header>
      <section className="w-80 overflow-hidden rounded-2xl bg-muted/30 pl-5 pt-5  shadow-etched-2 ">
        <div className="flex justify-center">
          <div className="">
            <img src={imgUrl} alt="" className="h-16 w-16 rounded-full bg-primary" />
            <div
              className=" cursor-pointer text-center font-body text-xs font-medium text-primary"
              onClick={() => setChange(true)}
            >
              Change
            </div>
          </div>
          <div className="ml-auto mt-4 flex h-9 w-56 items-center justify-start rounded-bl-full rounded-tl-full py-2 pl-3 pr-28">
            <div className="font-body text-sm font-bold text-muted-foreground">
              <EtchedENS />
            </div>
          </div>
        </div>
        <div className="ml-auto flex h-8 w-32 items-center justify-center gap-2.5 rounded-bl-full rounded-tl-full bg-primary text-xs font-medium text-white">
          Beta Trial License
        </div>
      </section>
    </main>
  );
};
