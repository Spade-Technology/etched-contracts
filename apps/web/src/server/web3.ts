import { env } from "@/env.mjs";
import { Address, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";

export const walletClient = createWalletClient({
  chain: sepolia,
  transport: http("https://sepolia.infura.io/v3/" + env.INFURA_KEY),
  account: privateKeyToAccount(env.ETCHED_NODE_PRIVATE_KEY as Address),
});
