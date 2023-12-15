import { pinata } from "@/ipfs";
import { lit } from "@/lit";
import { EncryptToIpfsProps, SymmetricKey } from "@/utils/litTypes";
import * as LitJsSdk from "@lit-protocol/lit-node-client";

export const encryptToIpfs = async (props: EncryptToIpfsProps) => {
  if (props.string && props.file) throw new Error(`You can't encrypt a file and a string`);
  if (!props.string && !props.file) throw new Error(`File and String are both undefined`);

  await lit.connect();
  if (!lit.client) throw new Error(`Lit client is not connected`);

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

  const encryptedSymmetricKeySaved = await lit.client.saveEncryptionKey({
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

  const res = await pinata.pinJSONToIPFS({
    [props.file ? "encryptedFile" : "encryptedString"]: encryptedDataJson,
    encryptedSymmetricKeyString: encryptedSymmetricKey,
    accessControlConditions: props.accessControlConditions,
    evmContractConditions: props.evmContractConditions,
    solRpcConditions: props.solRpcConditions,
    unifiedAccessControlConditions: props.unifiedAccessControlConditions,
    chain: props.chain,
    metadata: props.metadata,
  });

  return res.IpfsHash.toString();
};
