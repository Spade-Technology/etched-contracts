import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Form } from "@/components/ui/form";
import { useCreateEtch } from "@/utils/hooks/useEtchBackendOperation";
import { model_formats } from "@/utils/model-formats";
import { refetchContext } from "@/utils/urql";
import dayjs from "dayjs";
import { EditIcon, EyeIcon, FileAudioIcon, FileTextIcon, PauseCircleIcon, PlayCircleIcon, Trash2, VideoIcon } from "lucide-react";
import dynamic from "next/dynamic";
import React, { ComponentType, useContext, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { VideoPlayer } from "./VideoPlayer";
import { PDFViewer } from "./pdf-viewer";
import { TeamSelector } from "./team-selector";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Icons } from "./ui/icons";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
// import ModelViewer from "./model-viewer";

export const CreateEtchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { refetchEtches } = useContext(refetchContext);

  const { onSubmit, isUploading: isLoading, etchCreated, setEtchCreated, uploadProgress } = useCreateEtch();

  const form = useForm<FormData>({});

  const [files, setFiles] = useState<(File & { preview: string; nameOverride?: string; description?: string })[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 10,
    useFsAccessApi: false,

    accept: {
      ...model_formats,
      "image/*": [],
      "audio/*": [],
      "video/*": [],
      "application/pdf": [],
    },

    onDrop: (acceptedFiles: File[], rejections, event) => {
      const newFiles = [
        ...files,
        ...acceptedFiles.map((file) => {
          const type_from_extension = file.name.split(".").pop();

          let _file = file;
          if (file.type.length === 0)
            _file = new File([file], file.name, {
              type:
                type_from_extension !== ""
                  ? Object.entries(model_formats).find(([key, value]) => value.includes("." + type_from_extension))?.[0]
                  : "application/octet-stream",
            });

          return Object.assign(_file, {
            preview: URL.createObjectURL(file),
          });
        }),
      ];

      if (newFiles.length > 10) alert("You cannot bulk upload more than 10 files at a time");
      else {
        setFiles(newFiles);
      }
    },
  });

  useEffect(() => document.addEventListener("create-etch", () => setIsOpen(true)), []);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild>
        <Button
          className="w-fit gap-1.5 px-5 text-base font-semibold !text-primary-foreground shadow-3xl duration-500"
          onClick={() => setIsOpen(true)}
        >
          <Icons.plus color="var(--primary-foreground)" /> Etch Now
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={"max-h-screen max-w-3xl"}>
        <div className="w-full">
          {etchCreated ? (
            <>
              <div className="flex flex-col items-center gap-8">
                <h1 className="text-center text-3xl text-primary">Congratulations on your Etch{files.length && "es"}! 🎉</h1>
                <div className="text-center text-slate-500">
                  {files.length > 1 ? (
                    <>
                      Your <span className="font-semibold text-primary">{etchCreated} Etches</span>
                    </>
                  ) : (
                    "Your Etch"
                  )}{" "}
                  {files.length > 1 ? "have" : "has"} been created. You can view {files.length > 1 ? "them" : "it"} on the
                  dashboard
                </div>
                <div className="flex gap-8">
                  <Button
                    onClick={() => {
                      setEtchCreated(0);
                      setFiles([]);
                    }}
                  >
                    Create a new Etch
                  </Button>
                  <AlertDialogCancel
                    onClick={() => {
                      setEtchCreated(0);
                      setFiles([]);
                      refetchEtches();
                      setIsOpen(false);
                    }}
                  >
                    Back to Dashboard
                  </AlertDialogCancel>
                </div>
              </div>
            </>
          ) : (
            <>
              <AlertDialogHeader>
                <AlertDialogTitle>Create New Etch</AlertDialogTitle>
              </AlertDialogHeader>
              <Form {...form}>
                <form>
                  <div className="mt-8 flex gap-4">
                    <div className="w-1/2 ">
                      <div>
                        <div
                          {...getRootProps()}
                          className="flex h-[33vh] cursor-pointer items-center justify-center rounded-lg border-[1px] border-dashed border-gray-600 bg-muted px-5  text-center text-muted-foreground transition-all hover:border-gray-400 hover:text-muted-foreground"
                        >
                          <input {...getInputProps()} />
                          <p>
                            Drag 'n' drop some files here, or <span className="underline">click to select files</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <Label>Create on Behalf of</Label>
                      <TeamSelector className="w-full " horizontal />

                      <div className="my-3 flex justify-between">
                        <div>
                          {files.length} File{files.length === 1 ? "" : "s"} Selected |{" "}
                          {(files.reduce((acc, file) => acc + file.size, 0) / 1024 / 1024).toFixed(2)} MB total
                        </div>
                        <span
                          className={!isLoading && files.length ? "cursor-pointer hover:underline" : "opacity-50"}
                          onClick={() => setFiles([])}
                        >
                          clear
                        </span>
                      </div>
                      <div className="custom-scrollbar mt-3 grid max-h-40 grid-cols-3 gap-4 overflow-auto pr-2">
                        {files.map((file, index) => (
                          <FilePreviewer file={file} index={index} isLoading={isLoading} setFiles={setFiles} files={files} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <AlertDialogFooter className="mt-4">
                    <AlertDialogCancel disabled={isLoading} onClick={() => setIsOpen(false)}>
                      Cancel
                    </AlertDialogCancel>
                    <Button
                      isLoading={isLoading}
                      disabled={files.length === 0}
                      className="!text-primary-foreground"
                      onClick={(e) => {
                        e.preventDefault();
                        onSubmit(
                          files.map((file) => ({
                            name: file.nameOverride ?? file.name,
                            description: file.description ?? "",
                            file,
                          }))
                        );
                      }}
                    >
                      {isLoading ? uploadProgress + " %" : "Create Etch"}
                    </Button>
                  </AlertDialogFooter>
                </form>
              </Form>
            </>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

type FilePreview = File & {
  preview: string;
  nameOverride?: string | undefined;
  description?: string | undefined;
  path?: string;
};

const FilePreviewer = ({
  file,
  uploadProgress,
  index,
  isLoading,
  files,
  setFiles,
}: {
  file: FilePreview;
  uploadProgress?: number;
  index: number;
  isLoading?: boolean;
  files: FilePreview[];
  setFiles: React.Dispatch<React.SetStateAction<FilePreview[]>>;
}) => {
  const audioPreviewRef = useRef<HTMLAudioElement>(null);
  const [time, setTime] = useState(0);
  const [isModel, setIsModel] = useState(false);

  let ModelViewer: ComponentType<{ file: string; fileName: string }> = () => <></>;
  if (Object.keys(model_formats).includes(file.type) || files.some((file) => Object.keys(model_formats).includes(file.type))) {
    ModelViewer = dynamic(() => import("./model-viewer"), { ssr: false });
  }

  // on audioPreviewRef initialization, update state at timeupdate
  useEffect(() => {
    if (audioPreviewRef?.current) {
      audioPreviewRef.current.addEventListener("timeupdate", () => {
        setTime(audioPreviewRef?.current?.currentTime ?? 0);
      });
    }
  }, [audioPreviewRef?.current]);

  const fileFormat = file.path?.slice(file.path.indexOf(".") + 1);

  const filename = (file.nameOverride ?? file.name).split(".").slice(0, -1).join(".");

  // Check if file is 3d model
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`/formats/${fileFormat?.toUpperCase()}/icon.png`, { method: "HEAD" }).then((res) => setIsModel(res.ok));
    };
    fetchData();
  }, []);

  return (
    <div key={index} className="group relative h-24 w-24">
      {file.type.startsWith("image/") ? (
        <img src={file.preview} alt="Preview" className="rounded-lg object-cover shadow-lg" />
      ) : file.type.startsWith("audio/") ? (
        <div className="flex aspect-square h-full w-full items-center justify-center rounded-lg bg-slate-300">
          <FileAudioIcon className="h-1/2 w-1/2 text-white" />
          <audio className="rounded-lg shadow-lg" ref={audioPreviewRef}>
            <source src={file.preview} type={file.type} />
          </audio>
        </div>
      ) : file.type.startsWith("video/") ? (
        <div className="flex aspect-square h-full w-full items-center justify-center rounded-lg bg-slate-300">
          <VideoIcon className="h-1/2 w-1/2 text-white" />
        </div>
      ) : file.type.includes("pdf") ? (
        <div className="flex aspect-square h-full w-full items-center justify-center rounded-lg bg-slate-300">
          <FileTextIcon className="h-1/2 w-1/2 text-white" />
        </div>
      ) : isModel ? (
        <div className="flex aspect-square h-full w-full items-center justify-center rounded-lg bg-slate-300">
          <img src={`/formats/${fileFormat?.toUpperCase()}/icon.png`} alt="" className="h-1/2 w-1/2 object-contain " />
        </div>
      ) : null}
      <div className="absolute inset-0 flex  flex-col items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
        <span className="mt-7 text-center text-sm text-white">
          {filename.length < 12 ? filename : `${filename.substring(0, 8)}...`}
        </span>
        {isLoading ? (
          <span className="text-white opacity-50"> {uploadProgress}% </span>
        ) : (
          <span className="text-xs text-white opacity-70">
            {(file.nameOverride ?? file.name).split(".").pop()} | {(file.size / 1024 / 1024).toFixed(2)} MB
          </span>
        )}
      </div>

      <Dialog>
        <DialogTrigger className="w-23 absolute left-0 top-0 m-2 flex  rounded-full text-white opacity-0 transition-opacity group-hover:opacity-100">
          <EditIcon className="h-6 w-6" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit {(file.nameOverride ?? file.name).split(".").slice(0, -1).join(".")}</DialogTitle>
            <DialogDescription className="mx-0 mt-4 flex flex-col gap-2 px-0">
              <div>
                <Label>File Name</Label>
                <Input
                  defaultValue={(file.nameOverride ?? file.name).split(".").slice(0, -1).join(".")}
                  onChange={(e) => {
                    setFiles(
                      files.map((el, i) => {
                        if (i === index) {
                          return Object.assign(el, {
                            nameOverride: e.target.value + "." + el.name.split(".").pop(),
                          });
                        }
                        return el;
                      })
                    );
                  }}
                />
              </div>
              <div>
                <Label>Description</Label>
                <Input
                  defaultValue={file.description}
                  onChange={(e) => {
                    setFiles(
                      files.map((el, i) => {
                        if (i === index) {
                          return Object.assign(el, {
                            description: e.target.value,
                          });
                        }
                        return el;
                      })
                    );
                  }}
                />
              </div>
              <div>
                <Label>File Extension</Label>
                <Input defaultValue={(file.nameOverride ?? file.name).split(".").pop()} readOnly />
              </div>
              <div>
                <Label>File Size</Label>
                <Input defaultValue={(file.size / 1024 / 1024).toFixed(2) + " MB"} readOnly />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {file.type.startsWith("audio/") && audioPreviewRef?.current && (
        <div className="w-23 absolute bottom-0 right-0 m-2 flex  cursor-pointer rounded-full p-0 text-white opacity-0 transition-opacity group-hover:opacity-100">
          <span className="mr-2 text-white opacity-50">
            {dayjs()
              .hour(0)
              .minute(0)
              .second(time)
              .format(time >= 3600 ? "HH:mm:ss" : "mm:ss")}
          </span>
          {audioPreviewRef?.current?.paused ? (
            <PlayCircleIcon
              className="h-6 w-6"
              onClick={() => {
                audioPreviewRef?.current?.play();
              }}
            />
          ) : (
            <PauseCircleIcon
              className="h-6 w-6"
              onClick={() => {
                audioPreviewRef?.current?.pause();
              }}
            />
          )}
        </div>
      )}

      {file.type.startsWith("video/") && (
        <Dialog>
          <DialogTrigger className="absolute bottom-0 right-0 m-2 flex cursor-pointer rounded-full p-0 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <EyeIcon className="h-6 w-6" />
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Preview {(file.nameOverride ?? file.name).split(".").slice(0, -1).join(".")}</DialogTitle>
            </DialogHeader>
            <VideoPlayer url={file.preview} />
          </DialogContent>
        </Dialog>
      )}

      {file.type.includes("pdf") && (
        <Dialog>
          <DialogTrigger className="absolute bottom-0 right-0 m-2 flex cursor-pointer rounded-full p-0 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <EyeIcon className="h-6 w-6" />
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Preview {(file.nameOverride ?? file.name).split(".").slice(0, -1).join(".")}</DialogTitle>
            </DialogHeader>
            <PDFViewer file={file} />
          </DialogContent>
        </Dialog>
      )}

      {Object.keys(model_formats).includes(file.type) && (
        <Dialog>
          <DialogTrigger className="absolute bottom-0 right-0 m-2 flex cursor-pointer rounded-full p-0 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <EyeIcon className="h-6 w-6" />
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Preview {(file.nameOverride ?? file.name).split(".").slice(0, -1).join(".")}</DialogTitle>
            </DialogHeader>
            <ModelViewer file={file.preview} fileName={file.name} />
          </DialogContent>
        </Dialog>
      )}

      <div
        className="w-23 absolute right-0 top-0 m-2 flex  cursor-pointer rounded-full p-0 text-white opacity-0 transition-opacity group-hover:opacity-100"
        onClick={() => setFiles(files.filter((_, i) => i !== index))}
      >
        <Trash2 className="h-6 w-6" href="" />
      </div>
    </div>
  );
};
