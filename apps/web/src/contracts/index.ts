import { env } from "@/env.mjs";
import { Address } from "wagmi";

type Contracts = {
  Org: Address;
  Team: Address;
  Etch: Address;
  ENS: Address;
};

export const currentNode = process.env.NEXT_PUBLIC_ETCHED_NODE_ADDRESS || env.NEXT_PUBLIC_ETCHED_NODE_ADDRESS;
export const currentNetwork = process.env.NEXT_PUBLIC_NETWORK || env.NEXT_PUBLIC_NETWORK; // base-goerli
export const camelCaseNetwork = currentNetwork
  .split("-")
  .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
  .join("");

export const currentNetworkId = Number(process.env.NEXT_PUBLIC_NETWORK_ID || env.NEXT_PUBLIC_NETWORK_ID);
export const contracts = require(`@/contracts/${process.env.NEXT_PUBLIC_NETWORK}.json`) as Contracts;
