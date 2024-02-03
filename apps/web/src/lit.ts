import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { keccak256, toBytes, toHex } from "viem";
import { decryptToIpfsProps } from "./utils/litTypes";

const client = new LitJsSdk.LitNodeClient({
  // litNetwork: "serrano",
  // litNetwork: "jalapeno",
  litNetwork: process.env.NODE_ENV === "development" ? "cayenne" : "habenro",

  // only on client
  alertWhenUnauthorized: typeof window !== "undefined" ? true : false,

  // Verbosity of the logging
  debug: false,

  // checkNodeAttestation: true,
});

const ipfsPlublicClientUrl = process.env.NEXT_PUBLIC_IPFS_PUBLIC_GATEWAY + "ipfs/" || "https://gateway.pinata.cloud/ipfs/";

class Lit {
  public client: LitJsSdk.LitNodeClient | undefined;
  private connectingLock: Promise<LitJsSdk.LitNodeClient> | undefined;

  async connect() {
    if (this.client) return this.client;

    if (!this.connectingLock) {
      this.connectingLock = new Promise(async (resolve, reject) => {
        console.log("connecting to lit node");

        try {
          await client.connect();
          if (!client) throw new Error(`Lit client is not connected`);

          console.log("connected to lit node");
          console.log(client.config.litNetwork);

          this.client = client;
          resolve(this.client);
        } catch (error) {
          reject(error);
        }
      });
    }

    return this.connectingLock;
  }

  async decryptFromIpfs(props: decryptToIpfsProps) {
    const client = await this.connect();

    const ipfsData = await (await fetch(`${ipfsPlublicClientUrl}${props.ipfsCid}`)).json();

    const data: Parameters<typeof LitJsSdk.decryptToFile>[0] = {
      authSig: props.authSig,
      chain: ipfsData.chain,
      ciphertext: ipfsData.ciphertext,
      dataToEncryptHash: ipfsData.encryptedString || ipfsData.encryptedFile,
      evmContractConditions: ipfsData.evmContractConditions,
      solRpcConditions: ipfsData.solRpcConditions,
      unifiedAccessControlConditions: ipfsData.unifiedAccessControlConditions,
      accessControlConditions: ipfsData.accessControlConditions,
    };

    let decrypted;

    if (ipfsData.encryptedString) decrypted = await LitJsSdk.decryptToString(data, client);
    else if (ipfsData.encryptedFile) decrypted = await LitJsSdk.decryptToFile(data, client);

    return { data: decrypted, metadata: ipfsData.metadata };
  }

  async getMetadataFromIpfs(ipfsCid: string) {
    const ipfsData = await (await fetch(`${ipfsPlublicClientUrl}${ipfsCid}`)).json();

    return ipfsData.metadata;
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
