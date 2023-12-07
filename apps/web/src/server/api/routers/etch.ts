import { camelCaseNetwork, contracts } from "@/contracts";
import { lit } from "@/lit";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { generateServerAuthSig, publicClient, walletClient } from "@/server/web3";
import { defaultAccessControlConditions, defaultAccessControlConditionsUsingReadableID } from "@/utils/accessControlConditions";
import { teamPermissions } from "@/utils/common";
import EtchABI from "@abis/Etches.json";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { TRPCError } from "@trpc/server";
import { Address, decodeEventLog, encodeFunctionData, encodePacked, keccak256 } from "viem";
import { z } from "zod";
const random = require("random-bigint");

export const etchRouter = createTRPCRouter({
  bulkMintEtch: protectedProcedure
    .input(
      z.object({
        files: z.array(
          z.object({
            name: z.string(),
            description: z.string(),
            url: z.string(),
            type: z.string(),
          })
        ),
        team: z.string().optional(),

        blockchainMessage: z.string(),
        authSig: z.any(),
        blockchainSignature: z.string(),
      })
    )
    .mutation(
      async ({
        input: { files, authSig, team, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        // uint256(keccak256(_msgSender())) + (random uint 48)

        await lit.connect();

        let ipfsCids: string[] = [];
        let etchUIDs: string[] = [];
        let callDatas: string[] = [];

        await Promise.all(
          files.map(async ({ url, name, type }) => {
            const etchUID = BigInt(keccak256(encodePacked(["address"], [address as Address]))) + random(48);
            etchUIDs.push(etchUID);

            const file = await fetch(url).then((res) => res.blob());

            const ipfsCid = await lit
              .encryptToIpfs({
                // authSig: authSig,
                authSig: await generateServerAuthSig(),
                file,
                chain: camelCaseNetwork,
                evmContractConditions: defaultAccessControlConditions({ etchUID: etchUID.toString() }),
                metadata: { type },
              })
              .catch((err) => {
                console.log(err);
                console.log(err.stack);
                throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to upload to IPFS" });
              });

            ipfsCids.push(ipfsCid);

            const functionName = team ? "safeMintForTeam" : "safeMint";
            const args = team ? [etchUID, team, name, ipfsCid] : [etchUID, address, name, ipfsCid];

            const calldata = encodeFunctionData({
              abi: EtchABI,
              functionName: functionName,
              args: args,
            });

            callDatas.push(calldata);
          })
        );

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
            callDatas,
          ],
          abi: EtchABI,
        });

        try {
          const transactionResult = await publicClient.waitForTransactionReceipt({
            hash: tx1,
          });

          if (!transactionResult.logs[0]) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Transaction failed" });

          const transferEvent = decodeEventLog({
            abi: EtchABI,
            eventName: "Transfer",
            data: transactionResult.logs[0].data,
            topics: transactionResult.logs[0].topics,
          });

          const etchId = (transferEvent.args as any).tokenId;

          return etchId;
        } catch (e) {
          return 0;
        }
      }
    ),

  setMetadata: protectedProcedure
    .input(
      z.object({
        fileName: z.string(),
        description: z.string(),
        etchId: z.string(),
        ipfsCid: z.string(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { etchId, fileName, ipfsCid, description, blockchainSignature, blockchainMessage },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: EtchABI,
          functionName: "setMetadata",
          args: [etchId, fileName, description, ipfsCid],
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

  updateMetadata: protectedProcedure
    .input(
      z.object({
        fileName: z.string(),
        description: z.string(),
        etchId: z.string(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { etchId, fileName, description, blockchainSignature, blockchainMessage },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: EtchABI,
          functionName: "updateMetadata",
          args: [etchId, fileName, description],
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

  uploadAndEncryptString: protectedProcedure
    .input(
      z.object({
        str: z.string(),
        etchId: z.string(),
        authSig: z.any(),
      })
    )
    .mutation(async ({ input: { str, etchId, authSig } }) => {
      await lit.connect();

      const ipfsCid = await LitJsSdk.encryptToIpfs({
        authSig,
        string: str,
        chain: camelCaseNetwork,

        infuraId: process.env.NEXT_PUBLIC_INFURA_ID as string,
        infuraSecretKey: process.env.INFURA_API_SECRET as string,

        litNodeClient: lit.client as any,

        evmContractConditions: defaultAccessControlConditionsUsingReadableID({ etchId }),
      }).catch((err) => {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to upload to IPFS" });
      });

      return { ipfsCid };
    }),

  commentOnEtch: protectedProcedure
    .input(
      z.object({
        ipfsCid: z.string(),
        etchId: z.string(),
        owner: z.string(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { etchId, owner, ipfsCid, blockchainSignature, blockchainMessage },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: EtchABI,
          functionName: "commentOnEtch",
          args: [etchId, ipfsCid, owner],
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

  transferToTeam: protectedProcedure
    .input(
      z.object({
        teamId: z.number(),
        tokenId: z.number(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { tokenId, teamId, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: EtchABI,
          functionName: "transferToTeam",
          args: [tokenId, teamId],
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

  transferToIndividual: protectedProcedure
    .input(
      z.object({
        to: z.string(),
        from: z.string().optional(),
        tokenId: z.number(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { to, from, tokenId, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: EtchABI,
          functionName: "safeTransferFrom",
          args: [from, to, tokenId],
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
  setIndividualPermissionsBulk: protectedProcedure
    .input(
      z.object({
        etchId: z.number(),
        users: z.array(
          z.object({
            id: z.string(), // wallet address
            name: z.string(),
            role: z.enum(["none", "read", "readWrite"]),
          })
        ),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { users, etchId, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: EtchABI,
          functionName: "setIndividualPermissionsBulk",
          args: [etchId, users.map(({ id, role }) => ({ user: id, permission: teamPermissions[role] }))],
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
  setTeamPermissionsBulk: protectedProcedure
    .input(
      z.object({
        etchId: z.number(),
        teams: z.array(
          z.object({
            teamId: z.string(),
            role: z.enum(["none", "read", "readWrite"]),
          })
        ),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { teams, etchId, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: EtchABI,
          functionName: "setTeamPermissionsBulk",
          args: [etchId, teams.map(({ teamId, role }) => ({ teamId, permission: teamPermissions[role] }))],
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
});
