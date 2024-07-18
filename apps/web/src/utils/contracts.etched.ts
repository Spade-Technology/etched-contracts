import { getContract, createPublicClient, http } from "viem";
import { polygon, mainnet } from "viem/chains";
import { contracts } from "@/contracts";
import abiEtches from "@/contracts/abi/Etches.json";

export function getPublicClient() {
  const publicClient = createPublicClient({
    chain: polygon,
    transport: http(),
  });
  return publicClient;
}

export function getEtchContract() {
  const contract = getContract({
    abi: abiEtches,
    address: contracts.Etch,
    publicClient: getPublicClient(),
  });

  return contract;
}
