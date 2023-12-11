import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const fileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  EtchUpload: f({
    image: {
      maxFileCount: 10,
      maxFileSize: "128MB",
    },
    audio: {
      maxFileCount: 10,
      maxFileSize: "128MB",
    },
    video: {
      maxFileCount: 10,
      maxFileSize: "128MB",
    },
    audio: {
      maxFileCount: 10,
      maxFileSize: "128MB",
    },
    video: {
      maxFileCount: 10,
      maxFileSize: "128MB",
    },
    pdf: {
      maxFileCount: 10,
      maxFileSize: "128MB",
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req, res }) => {
      return {};
    })
    .onUploadComplete(async ({ metadata, file }) => {}),
} satisfies FileRouter;

export type fileRouter = typeof fileRouter;
