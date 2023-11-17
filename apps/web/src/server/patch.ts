import { PATCH_FACTORY_ABI, PATCH_FACTORY_ADDRESS } from "@/contracts/patchwallet/factory";
import { env } from "@/env.mjs";
import {
  Address,
  concat,
  encodeAbiParameters,
  encodeFunctionData,
  getContract,
  hashMessage,
  keccak256,
  parseAbiParameters,
  toBytes,
} from "viem";
import { publicClient } from "./web3";

export const getBaseAccountAddress = async ({
  baseProvider,
  userId,
  access_token,
}: {
  baseProvider: string;
  userId: string;
  access_token: string;
}) => {
  const patchId = baseProvider + ":" + userId;

  const result = await fetch(`${env.PATCHWALLET_BASE_URL}/resolver`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({
      userIds: patchId,
    }),
  });

  if (result.status !== 200) throw new Error(`Failed to get base account address for user ${userId}`);

  const data = await result.json();

  return data.users[0].accountAddress;
};

let access_token: { token: string; expiry: string } | undefined;

export const getAccessToken = async () => {
  if (access_token && new Date(access_token.expiry) > new Date()) return access_token.token;

  const result = await fetch(`${env.PATCHWALLET_BASE_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: env.PATCHWALLET_CLIENT_ID,
      client_secret: env.PATCHWALLET_CLIENT_SECRET,
    }),
  });

  if (result.status !== 200) throw new Error(`Failed to get an access token`);

  const data = await result.json();

  access_token = {
    token: data.access_token,
    expiry: new Date(new Date().getTime() + 3600000).toISOString(),
  };

  return data.access_token;
};

export const signMessageUsingPatchWallet = async ({
  access_token,
  baseProvider,
  userId,
  message,
  erc6492 = false,
}: {
  access_token: string;
  baseProvider: string;
  userId: string;
  message: string;
  erc6492?: boolean;
}) => {
  const body = JSON.stringify({
    userId: baseProvider + ":" + userId,
    string: message.startsWith("0x") ? undefined : message,
    hash: message.startsWith("0x") ? message : undefined,
  });

  const result = await fetch(`${env.PATCHWALLET_BASE_URL}/kernel/sign`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    body,
    redirect: "follow",
  });

  const _signature = await result.json();

  if (result.status !== 200) throw new Error(`Failed to sign message for user ${userId}`);

  if (erc6492)
    return createERC6492Signature({
      baseProvider,
      userId,
      _signature,
    });
  else return _signature;
};

export const createERC6492Signature = async ({
  baseProvider,
  userId,
  _signature,
}: {
  baseProvider: string;
  userId: string;
  _signature: {
    hash: string;
    signature: string;
  };
}) => {
  // check signature validity

  // THIS WON'T WORK Because the signature hasn't been wrapped by EIP6492

  const patchId = baseProvider + ":" + userId;
  const salt = keccak256(toBytes(patchId + `:kernel-account`));

  console.log("Encoding function data...");
  const factoryCreationCalldata = encodeFunctionData({
    functionName: "createAccount",
    abi: PATCH_FACTORY_ABI,
    args: [salt],
  }) as `0x${string}`;

  const signature_6492_account_not_created =
    encodeAbiParameters(
      [
        { type: "address", name: "create2Factory" },
        { type: "bytes", name: "factoryCalldata" },
        { type: "bytes", name: "signature" },
      ],
      [PATCH_FACTORY_ADDRESS, factoryCreationCalldata, _signature.signature as `0x${string}`]
      // the "MagicBytes" are used to detect 6492 signatures. They consist of 64 Characters (32 bytes) that say "6492"
    ) + "6492".repeat(16);

  return { hash: _signature.hash as Address, signature: signature_6492_account_not_created as Address };
};

export const verifyEIP1271Signature = async ({
  address,
  hash,
  signature,
}: {
  address: Address;
  hash: Address;
  signature: Address;
}) => {
  const onChainVerify = await getContract({
    abi: [
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        name: "isValidSignature",
        outputs: [
          {
            internalType: "bytes4",
            name: "magicValue",
            type: "bytes4",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    address,
    publicClient,
  }).read.isValidSignature([hash, signature]);

  console.log("MAMA onChainVerify: ", onChainVerify);

  // Magic Value means True
  return onChainVerify === "0x1626ba7e";
};
