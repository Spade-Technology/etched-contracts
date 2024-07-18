import { pinata } from "@/ipfs";
import { lit } from "@/lit";

import * as LitJsSdk from "@lit-protocol/lit-node-client";
// import * as LitJsSdk from "@lit-protocol/lit-node-client-nodejs";
type ParameterType = Omit<Parameters<typeof LitJsSdk.encryptFile>[0], "file">;

export const fakeEncryptToIpfs = async (props: ParameterType & { string?: string; file?: File | Blob; metadata: any }) => {
  console.log("****************** fakeEncryptToIpfs (props )***********************");
  console.dir(props);
  if (props.string && props.file) throw new Error(`You can't encrypt a file and a string`);
  if (!props.string && !props.file) throw new Error(`File and String are both undefined`);

  // await lit.connect();
  // if (!lit.client) throw new Error(`Lit client is not connected`);
  // let encryptionResult;

  // file
  // if (props?.file !== undefined) {
  //   const encryptionProps = { ...props, file: props.file }; // Ensure file is not undefined
  //   encryptionResult = await LitJsSdk.encryptFile(encryptionProps, lit.client);
  // }
  // string
  // else if (props.string) encryptionResult = await LitJsSdk.encryptString({ dataToEncrypt: props.string, ...props }, lit.client);

  // if (!encryptionResult) throw new Error(`Encryption failed`);

  // const { ciphertext, dataToEncryptHash } = encryptionResult;

  const res = await pinata.pinJSONToIPFS({
    [props.file ? "encryptedFile" : "encryptedString"]: "FAKE_ENCRYPT",
    ciphertext: "FAKE_CYPHER",
    accessControlConditions: props.accessControlConditions,
    evmContractConditions: props.evmContractConditions,
    solRpcConditions: props.solRpcConditions,
    unifiedAccessControlConditions: props.unifiedAccessControlConditions,
    chain: props.chain,
    metadata: props.metadata, //should include original url
  });

  return res.IpfsHash.toString();
};

export const encryptToIpfs = async (props: ParameterType & { string?: string; file?: File | Blob; metadata: any }) => {
  if (props.string && props.file) throw new Error(`You can't encrypt a file and a string`);
  if (!props.string && !props.file) throw new Error(`File and String are both undefined`);

  await lit.connect();
  if (!lit.client) throw new Error(`Lit client is not connected`);

  let encryptionResult;

  // file
  if (props?.file !== undefined) {
    const encryptionProps = { ...props, file: props.file }; // Ensure file is not undefined
    encryptionResult = await LitJsSdk.encryptFile(encryptionProps, lit.client);
  }
  // string
  else if (props.string) encryptionResult = await LitJsSdk.encryptString({ dataToEncrypt: props.string, ...props }, lit.client);

  if (!encryptionResult) throw new Error(`Encryption failed`);

  const { ciphertext, dataToEncryptHash } = encryptionResult;

  const res = await pinata.pinJSONToIPFS({
    [props.file ? "encryptedFile" : "encryptedString"]: dataToEncryptHash,
    ciphertext: ciphertext,
    accessControlConditions: props.accessControlConditions,
    evmContractConditions: props.evmContractConditions,
    solRpcConditions: props.solRpcConditions,
    unifiedAccessControlConditions: props.unifiedAccessControlConditions,
    chain: props.chain,
    metadata: props.metadata,
  });

  return res.IpfsHash.toString();
};
