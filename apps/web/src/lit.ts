import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { keccak256, toBytes, toHex } from "viem";
import { EncryptToIpfsProps, SymmetricKey, decryptToIpfsProps } from "./utils/litTypes";
import { ipfsClient } from "./ipfs";

const client = new LitJsSdk.LitNodeClient({
  litNetwork: "serrano",

  // only on client
  alertWhenUnauthorized: typeof window !== "undefined" ? true : false,

  // Verbosity of the logging
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

  async encryptToIpfs(props: EncryptToIpfsProps) {
    if (props.string && props.file) throw new Error(`You can't encrypt a file and a string`);
    if (!props.string && !props.file) throw new Error(`File and String are both undefined`);

    await this.connect();
    let encryptedData: Blob = new Blob();
    let symmetricKey: SymmetricKey = "";

    if (props.file) {
      const { encryptedFile, symmetricKey: symKey } = await LitJsSdk.encryptFile({ file: props.file });
      symmetricKey = symKey;
      encryptedData = encryptedFile;
    } else if (props.string) {
      const { encryptedString, symmetricKey: symKey } = await LitJsSdk.encryptString(props.string);
      symmetricKey = symKey;
      encryptedData = encryptedString;
    }

    const encryptedSymmetricKeySaved = await client.saveEncryptionKey({
      accessControlConditions: props.accessControlConditions,
      evmContractConditions: props.evmContractConditions,
      symmetricKey,
      authSig: props.authSig,
      chain: props.chain,
      solRpcConditions: props.solRpcConditions,
      unifiedAccessControlConditions: props.unifiedAccessControlConditions,
      sessionSigs: props.sessionSigs,
    });

    const encryptedSymmetricKey = LitJsSdk.uint8arrayToString(encryptedSymmetricKeySaved, "base16");
    const encryptedDataJson = Buffer.from(await encryptedData.arrayBuffer()).toJSON();

    const res = await ipfsClient.add(
      JSON.stringify({
        [props.file ? "encryptedFile" : "encryptedString"]: encryptedDataJson,
        encryptedSymmetricKeyString: encryptedSymmetricKey,
        accessControlConditions: props.accessControlConditions,
        evmContractConditions: props.evmContractConditions,
        solRpcConditions: props.solRpcConditions,
        unifiedAccessControlConditions: props.unifiedAccessControlConditions,
        chain: props.chain,
        metadata: props.metadata,
      })
    );

    return res.cid.toString();
  }

  async decryptFromIpfs(props: decryptToIpfsProps) {
    await this.connect();

    const ipfsData = await (await fetch(`https://gateway.pinata.cloud/ipfs/${props.ipfsCid}`)).json();

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
    const ipfsData = await (await fetch(`https://gateway.pinata.cloud/ipfs/${ipfsCid}`)).json();

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
