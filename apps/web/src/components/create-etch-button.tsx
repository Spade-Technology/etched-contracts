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
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

import { useCreateEtch } from "@/utils/hooks/useEtchBackendOperation";
import { refetchContext } from "@/utils/urql";
import { EditIcon, Trash2 } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { TeamSelector } from "./team-selector";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";

const previewFileTypes = ["pdf", "docx", "doc", "txt", "png", "jpg", "docx", "jpeg", "gif", "svg", "mp4", "mp3", "wav", "mpeg"];

const formSchema = z.object({
  etchTitle: z.string(),
  etchDescription: z.string(),
  etchFile: z.any(),
  etchVisibility: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

export const CreateEtchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { refetchEtches } = useContext(refetchContext);

  const { onSubmit, isUploading: isLoading, etchCreated, setEtchCreated, uploadProgress } = useCreateEtch();

  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      etchTitle: "",
      etchDescription: "",
      etchFile: null,
      etchVisibility: false,
    },
  });

  const [files, setFiles] = useState<(File & { preview: string; nameOverride?: string; description?: string })[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  useEffect(() => {
    document.addEventListener("create-etch", () => {
      setIsOpen(true);
    });
  }, []);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild>
        <Button className="w-fit px-5 font-medium text-white duration-500 hover:shadow-etched-1" onClick={() => setIsOpen(true)}>
          + Create Etch
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        className={`${etchCreated ? "max-w-[720px]" : "max-w-[686px] lg:max-w-[686px]"} max-h-screen py-8 font-body`}
      >
        <div className="w-full">
          {etchCreated ? (
            <>
              <img
                onClick={() => setIsOpen(false)}
                src="/icons/customModal/closeIcon.svg"
                className="absolute right-7 top-7 h-6 w-6 cursor-pointer"
                alt=""
              />
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
                    className="font-base border-2 border-primary px-5 py-[11px] font-semibold text-primary hover:bg-primary hover:text-white"
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
                      <section>
                        <div
                          {...getRootProps()}
                          className="bg-primary-foreground-50 flex h-[33vh] cursor-pointer items-center justify-center rounded-lg border-[1px] border-dashed border-gray-600 bg-slate-50 text-slate-600  transition-all hover:border-gray-400 hover:text-slate-900"
                        >
                          <input {...getInputProps()} />
                          <p>
                            Drag 'n' drop some files here, or <span className="underline">click to select files</span>
                          </p>
                        </div>
                      </section>
                    </div>
                    <div className="h-[33vh] w-1/2 overflow-scroll">
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
                      <div className="mt-3 grid grid-cols-3 gap-4 overflow-scroll">
                        {files.map((file, index) => (
                          <div key={index} className="aspect-w-1 aspect-h-1 group relative">
                            <img src={file.preview} alt="Preview" className="rounded-lg object-cover shadow-lg" />
                            <div className="absolute inset-0 flex  flex-col items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                              <span className="text-center text-sm text-white">
                                {(file.nameOverride ?? file.name).split(".").slice(0, -1).join(".")}
                              </span>
                              {isLoading ? (
                                <span className="text-white opacity-50"> {uploadProgress}% </span>
                              ) : (
                                <span className="text-white opacity-50">
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
                                  <DialogTitle>
                                    Edit {(file.nameOverride ?? file.name).split(".").slice(0, -1).join(".")}
                                  </DialogTitle>
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

                            <div
                              className="w-23 absolute right-0 top-0 m-2 flex  cursor-pointer rounded-full p-0 text-white opacity-0 transition-opacity group-hover:opacity-100"
                              onClick={() => setFiles(files.filter((_, i) => i !== index))}
                            >
                              <Trash2 className="h-6 w-6" href="" />
                            </div>
                          </div>
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
                      onClick={() =>
                        onSubmit(
                          files.map((file) => ({
                            name: file.nameOverride ?? file.name,
                            description: file.description ?? "",
                            file,
                          }))
                        )
                      }
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
