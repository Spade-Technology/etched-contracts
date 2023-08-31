import type { NextApiRequest, NextApiResponse } from "next";

import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";

const f = createUploadthing();

const auth = (req: NextApiRequest, res: NextApiResponse) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const fileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  EtchUpload: f(["video", "image", "pdf", "audio", "application/zip", "text"])
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req, res }) => {
      return {};
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url);
    }),
} satisfies FileRouter;

export type fileRouter = typeof fileRouter;
