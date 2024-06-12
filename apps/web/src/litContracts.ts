import { LitContracts } from "@lit-protocol/contracts-sdk";
import { Wallet, providers } from "ethers";

export const walletWithCapacityCredit = new Wallet(
  process.env.LIT_PRIVATE_KEY!,

  // chronicle
  new providers.JsonRpcProvider(process.env.LIT_RPC_PROVIDER)
);

export async function generateContractsClient () {
  let contractClient = new LitContracts({
    signer: walletWithCapacityCredit,
    network: process.env.NODE_ENV === "development" ? "manzano" : "habanero",
    // network: "cayenne",
    // network: "localhost",
  });

  await contractClient.connect();

  return contractClient;
}
