import { create } from "ipfs-http-client";

const authorization =
  "Basic " + Buffer.from(`${process.env.NEXT_PUBLIC_INFURA_ID}:${process.env.INFURA_API_SECRET}`).toString("base64");

export const ipfsClient = create({
  url: "https://ipfs.infura.io:5001/api/v0",
  headers: {
    authorization,
  },
});
