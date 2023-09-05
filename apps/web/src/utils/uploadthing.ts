import { generateReactHelpers } from "@uploadthing/react/hooks";

import { generateComponents } from "@uploadthing/react";

import type { fileRouter } from "@/server/uploadthing";

export const { UploadButton, UploadDropzone, Uploader } = generateComponents<fileRouter>();

export const { useUploadThing, uploadFiles } = generateReactHelpers<fileRouter>();
