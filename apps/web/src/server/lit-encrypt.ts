import { pinata } from "@/ipfs";
import { lit } from "@/lit";
import { EncryptToIpfsProps } from "@/utils/litTypes";
import * as LitJsSdk from "@lit-protocol/lit-node-client";

export const encryptToIpfs = async (props: EncryptToIpfsProps) => {
  if (props.string && props.file) throw new Error(`You can't encrypt a file and a string`);
  if (!props.string && !props.file) throw new Error(`File and String are both undefined`);

  await lit.connect();
  if (!lit.client) throw new Error(`Lit client is not connected`);

  let encryptionResult;

  if (props.file) encryptionResult = await LitJsSdk.encryptFile({ file: props.file, ...props }, lit.client);
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
