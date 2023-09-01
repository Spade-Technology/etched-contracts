import { env } from "@/env.mjs";

type Contracts = {
  Org: string;
  Team: string;
  Etch: string;
  ENS: string;
};

export const currentNetwork = env.NETWORK;
export const contracts = import(`@/contracts/${currentNetwork}.json`);
