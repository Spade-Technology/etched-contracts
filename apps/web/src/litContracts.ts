import { LitContracts } from "@lit-protocol/contracts-sdk";
import { Wallet, providers } from "ethers";

export const litNetwork = process.env.NODE_ENV === "development" ? "datil-dev" : "datil";

export const walletWithCapacityCredit = new Wallet(
  process.env.LIT_PRIVATE_KEY!,

  // chronicle
  new providers.JsonRpcProvider("https://chain-rpc.litprotocol.com/http")
);

export async function generateContractsClient() {
  let contractClient = new LitContracts({
    signer: walletWithCapacityCredit,
    network: litNetwork,
  });

  await contractClient.connect();

  return contractClient;
}
