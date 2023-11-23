import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { keccak256, toBytes, toHex } from "viem";

const client = new LitJsSdk.LitNodeClient({
  litNetwork: "serrano",

  // only on client
  alertWhenUnauthorized: typeof window !== "undefined" ? true : false,
  debug: false,
});

class Lit {
  public client: LitJsSdk.LitNodeClient | undefined;

  async connect() {
    if (this.client) return;

    console.log("connecting to lit node");

    await client.connect();

    console.log("connected to lit node");
    this.client = client;
  }
}

export const lit = new Lit();

// TODO: remove this when lit fixed the issue
export const hashMessageForLit = (message: string): `0x${string}` => {
  // From rust code
  const hexMessage = toBytes(toHex(toBytes(message)).slice(2).toLowerCase());
  const hash = keccak256(hexMessage);

  return hash;
};
