import { PATCH_FACTORY_ABI, PATCH_FACTORY_ADDRESS } from "@/contracts/patchwallet/factory";
import { env } from "@/env.mjs";
import { Address, encodeAbiParameters, encodeFunctionData, keccak256, toBytes } from "viem";

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
  const salt = keccak256(toBytes(patchId + `:kernel-account`));

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

export const getAccessToken = async () => {
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
    string: message,
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
