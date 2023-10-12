import * as LitJsSdk from "@lit-protocol/lit-node-client";

const client = new LitJsSdk.LitNodeClient({});

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
