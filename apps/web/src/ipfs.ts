import pinataSDK from "@pinata/sdk";
import { env } from "./env.mjs";

export const pinata = new pinataSDK({ pinataJWTKey: env.PINATA_API_JWT });
