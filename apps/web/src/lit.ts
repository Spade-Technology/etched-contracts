import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { pinata } from "./ipfs";
import { keccak256, toBytes, toHex } from "viem";
import { EncryptToIpfsProps, SymmetricKey, decryptToIpfsProps } from "./utils/litTypes";
import { env } from "./env.mjs";

const client = new LitJsSdk.LitNodeClient({
  litNetwork: "serrano",

  // only on client
  alertWhenUnauthorized: typeof window !== "undefined" ? true : false,

  // Verbosity of the logging
  debug: false,
});

const ipfsPlublicClientUrl = process.env.NEXT_PUBLIC_IPFS_PUBLIC_GATEWAY + "ipfs/" || "https://gateway.pinata.cloud/ipfs/";

class Lit {
  public client: LitJsSdk.LitNodeClient | undefined;

  async connect() {
    if (this.client) return;

    console.log("connecting to lit node");

    await client.connect();

    console.log("connected to lit node");
    this.client = client;
  }

  async decryptFromIpfs(props: decryptToIpfsProps) {
    await this.connect();

    const ipfsData = await (await fetch(`${ipfsPlublicClientUrl}${props.ipfsCid}`)).json();

    const symmetricKey = await client.getEncryptionKey({
      accessControlConditions: ipfsData.accessControlConditions,
      evmContractConditions: ipfsData.evmContractConditions,
      solRpcConditions: ipfsData.solRpcConditions,
      unifiedAccessControlConditions: ipfsData.unifiedAccessControlConditions,
      toDecrypt: ipfsData.encryptedSymmetricKeyString,
      chain: ipfsData.chain,
      authSig: props.authSig,
      sessionSigs: props.sessionSigs,
    });

    if (ipfsData.encryptedString) {
      const encryptedStringBlob = new Blob([Buffer.from(ipfsData.encryptedString)], { type: "application/octet-stream" });
      return LitJsSdk.decryptString(encryptedStringBlob, symmetricKey);
    } else if (ipfsData.encryptedFile) {
      const encryptedFileBlob = new Blob([Buffer.from(ipfsData.encryptedFile)], {
        type: "application/octet-stream",
      });
      return LitJsSdk.decryptFile({ file: encryptedFileBlob, symmetricKey });
    }
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
