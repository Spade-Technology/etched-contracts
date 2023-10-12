import { contracts, currentNetwork, currentNode } from "@/contracts";
import { lit } from "@/lit";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { publicClient, walletClient } from "@/server/web3";
import EtchABI from "@abis/Etches.json";
import { TRPCError } from "@trpc/server";
import {
  Address,
  decodeEventLog,
  decodeFunctionResult,
  encodeFunctionData,
  encodePacked,
  hashMessage,
  keccak256,
  recoverAddress,
} from "viem";
import { z, infer } from "zod";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { defaultAccessControlConditions } from "@/utils/accessControlConditions";
import { env } from "@/env.mjs";

const accessControlConditions = [
  {
    contractAddress: "",
    standardContractType: "",
    chain: currentNetwork,
    method: "eth_getBalance",
    parameters: [":userAddress", "latest"],
    returnValueTest: {
      comparator: ">=",
      value: "1", // 0.000001 ETH
    },
  },
];

export const etchRouter = createTRPCRouter({
  mintEtch: protectedProcedure
    .input(
      z.object({
        fileName: z.string(),
        fileDescription: z.string(),
        team: z.string().optional(),
        blockchainMessage: z.string(),
        blockchainSignature: z.string(),
      })
    )
    .mutation(
      async ({
        input: { fileName, fileDescription, team, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        // we need to send two calls, one to create the etch and get the etch id, and then another to set Metadata

        const functionName = team ? "safeMintForTeam" : "safeMint";
        const args = team ? [team, fileName, ""] : [address, fileName, ""];

        const calldata = encodeFunctionData({
          abi: EtchABI,
          functionName: functionName,
          args: args,
        });

        const tx1 = await walletClient.writeContract({
          address: contracts.Etch,
          functionName: "delegateCallsToSelf",
          args: [
            [
              blockchainMessage as Address,
              keccak256(blockchainMessage as Address),
              blockchainSignature as Address,
              address as Address,
            ],
            [calldata],
          ],
          abi: EtchABI,
        });

        const transactionResult = await publicClient.waitForTransactionReceipt({
          hash: tx1,
        });
        console.log({ tx1 }, { transactionResult });
        if (!transactionResult.logs[0]) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Transaction failed" });

        const transferEvent = decodeEventLog({
          abi: EtchABI,
          eventName: "Transfer",
          data: transactionResult.logs[0].data,
          topics: transactionResult.logs[0].topics,
        });

        const etchId = (transferEvent.args as any).tokenId;

        return etchId;
      }
    ),

  setMetadata: protectedProcedure
    .input(
      z.object({
        fileName: z.string(),
        etchId: z.string(),
        ipfsCid: z.string(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { etchId, fileName, ipfsCid, blockchainSignature, blockchainMessage },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: EtchABI,
          functionName: "setMetadata",
          args: [etchId, fileName, ipfsCid],
        });

        const tx = await walletClient.writeContract({
          address: contracts.Etch,
          functionName: "delegateCallsToSelf",
          args: [
            [
              blockchainMessage as Address,
              keccak256(blockchainMessage as Address),
              blockchainSignature as Address,
              address as Address,
            ],
            [calldata],
          ],
          abi: EtchABI,
        });

        await publicClient.waitForTransactionReceipt({
          hash: tx,
        });

        return { tx };
      }
    ),

  uploadAndEncrypt: protectedProcedure
    .input(
      z.object({
        fileUrl: z.string(),
        etchId: z.string(),
        authSig: z.any(),
      })
    )
    .mutation(
      async ({
        input: { fileUrl, etchId, authSig },
        ctx: {
          session: { address },
        },
      }) => {
        await lit.connect();

        const file = await fetch(fileUrl).then((res) => res.blob());

        const ipfsCid = await LitJsSdk.encryptToIpfs({
          authSig,
          file,
          chain: currentNetwork,
          infuraId: process.env.NEXT_PUBLIC_INFURA_ID as string,
          infuraSecretKey: process.env.INFURA_API_SECRET as string,
          litNodeClient: lit.client as any,
          accessControlConditions,
          // evmContractConditions: defaultAccessControlConditions({ etchId }),
        });

        return { ipfsCid };
      }
    ),
});
