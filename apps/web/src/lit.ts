import { metadata } from "./pages/dashboard/profiledemo";
import { LitAbility, LitAccessControlConditionResource } from "@lit-protocol/auth-helpers";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { currentNetworkId } from "@/contracts";
import { type AppRouter } from "@/server/api/root";
import { inferRouterOutputs } from "@trpc/server";
import { api } from "./utils/api";
// import * as LitJsSdk from "@lit-protocol/lit-node-client-nodejs";
import { keccak256, toBytes, toHex } from "viem";
import { decryptToIpfsProps } from "./utils/litTypes";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import SuperJSON from "superjson";

import { blobToUint8Array } from "./lib/utils";
import { getEtchContract } from "./utils/contracts.etched";

const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
  transformer: SuperJSON,
});

export const litNetwork = process.env.NODE_ENV === "development" ? "datil-dev" : "datil";

const client = new LitJsSdk.LitNodeClient({
  // litNetwork: "serrano",
  // litNetwork: "jalapeno",
  litNetwork: litNetwork,
  // litNetwork: "localhost",
  // only on client
  alertWhenUnauthorized: typeof window !== "undefined" ? true : false,

  // Verbosity of the logging
  debug: false,

  checkNodeAttestation: process.env.NODE_ENV !== "development",
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

          console.log("connected to lit node: ", client.config.litNetwork);

          this.client = client;
          resolve(this.client);
        } catch (error) {
          reject(error);
        }
      });
    }

    return this.connectingLock;
  }

  async fakeDecryptFromIpfs(props: decryptToIpfsProps & { eoa?: string }) {
    try {
      const ipfsData = await (await fetch(`${ipfsPlublicClientUrl}${props.ipfsCid}`)).json();
      let neverEncryptedFile;
      if (!!ipfsData?.metadata?.originalFileUrl) {
        console.log("********************* fakeDecryptFromIpfs (props) *********************");
        console.dir(props);
        console.log("********************* fakeDecryptFromIpfs (ipfsData) *********************");
        console.dir(ipfsData);
        const etchedContract: any = getEtchContract();
        const hasPermissionToRead = await etchedContract?.read?.hasReadPermissionUID([props?.eoa, ipfsData?.metadata?.etchUID]);
        console.log("********************* fakeDecryptFromIpfs (hasReadPermissionUID) *********************");
        console.log("hasPermissionToRead:", hasPermissionToRead);
        //DETAIL: grab file if ok
        if (hasPermissionToRead === true) {
          neverEncryptedFile = await fetch(ipfsData?.metadata?.originalFileUrl).then((res) => res.blob());
          neverEncryptedFile = neverEncryptedFile ? await blobToUint8Array(neverEncryptedFile) : undefined;
        } else {
          throw new Error(`You do not have permission to access this resource!`);
        }
      }

      return { data: neverEncryptedFile, metadata: ipfsData.metadata };
    } catch (error) {
      console.log("decryptFromIpfs (error):");
      console.dir(error);
      throw error;
    }
  }

  async decryptFromIpfs(props: decryptToIpfsProps) {
    try {
      const client = await this.connect();
      const ipfsData = await (await fetch(`${ipfsPlublicClientUrl}${props.ipfsCid}`)).json();

      const data: Parameters<typeof LitJsSdk.decryptToFile>[0] = {
        // authSig: props.authSig,
        sessionSigs: props.sessionSigs,
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
    } catch (error) {
      console.log("decryptFromIpfs (error):");
      console.dir(error);
      throw error;
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
