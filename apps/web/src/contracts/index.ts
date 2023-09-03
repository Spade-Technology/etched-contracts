import { env } from "@/env.mjs";
import { Address } from "wagmi";

type Contracts = {
  Org: Address;
  Team: Address;
  Etch: Address;
  ENS: Address;
};

export const currentNetwork = env.NETWORK;
export const currentNetworkId = env.NETWORK_ID;
export const contracts = require(`@/contracts/${currentNetwork}.json`) as Contracts;
