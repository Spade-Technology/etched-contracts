import { camelCaseNetwork, contracts } from "@/contracts";
import { lit } from "@/lit";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { encryptToIpfs } from "@/server/lit-encrypt";
import { generateServerAuthSig, generateServerSessionSig, publicClient, walletClient } from "@/server/web3";
import { defaultAccessControlConditions, defaultAccessControlConditionsUsingReadableID } from "@/utils/accessControlConditions";
import { teamPermissions } from "@/utils/common";
import { getTagsOfEtchAndOwner } from "@/utils/hooks/useGetTagsOfEtchAndOwner";
import { urqlConfig } from "@/utils/urql";
import EtchABI from "@abis/Etches.json";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
// import * as LitJsSdk from "@lit-protocol/lit-node-client-nodejs";
import { TRPCError } from "@trpc/server";
import { Client, gql } from "urql";
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
        team: z.bigint().optional(),

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

            const ipfsCid = await encryptToIpfs({
              authSig: await generateServerAuthSig(),
              sessionSigs: await generateServerSessionSig(),
              file,
              chain: camelCaseNetwork,
              evmContractConditions: defaultAccessControlConditions({ etchUID: etchUID.toString() }),
              metadata: { type },
            }).catch((err) => {
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

          return { tx: tx1, id: etchId };
        } catch (e) {
          return { tx: tx1, id: undefined };
        }
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
      const ipfsCid = await encryptToIpfs({
        authSig: authSig,
        chain: camelCaseNetwork,
        string: str,
        evmContractConditions: defaultAccessControlConditionsUsingReadableID({ etchId }),
        metadata: { type: "string" },
      });

      return { ipfsCid };
    }),

  updateMetadata: protectedProcedure
    .input(
      z.object({
        fileName: z.string(),
        description: z.string(),
        etchId: z.string(),
        tags: z
          .array(
            z.object({ label: z.string(), value: z.string(), toCreate: z.boolean().optional(), toDelete: z.boolean().optional() })
          )
          .max(5)
          .optional(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { etchId, fileName, description, blockchainSignature, blockchainMessage, tags },
        ctx: {
          session: { address },
        },
      }) => {
        let tagsCalldata: `0x${string}`[] = [];
        if (tags) {
          const { data } = await getTagsOfEtchAndOwner(etchId, address!);

          const _tags = data?.etch?.tagLinks.map((tag: any) => tag.tag);

          if (data?.etch) {
            const actionableTags = [
              // to delete
              ..._tags
                .filter((tag: any) => !(tags.find((newTag: any) => newTag.id === tag.id) && tag.owner.eoa === address))
                .map((tag: any) => ({ label: tag.tag, value: tag.id, toDelete: true, toCreate: false })),

              // to create
              ...tags
                .filter((newTag: any) => !_tags.find((tag: any) => tag.tag === newTag.label))
                .map((tag: any) => ({ label: tag.label, toDelete: false, toCreate: true })),
            ];

            console.debug(
              actionableTags.map((tag) => ({
                functionName: tag.toDelete ? "removeTag" : tag.toCreate ? "addTag" : "addTag",
                args: [etchId, tag.label],
              }))
            );

            tagsCalldata = actionableTags.map((tag) =>
              encodeFunctionData({
                abi: EtchABI,
                functionName: tag.toDelete ? "removeTag" : tag.toCreate ? "addTag" : "addTag",
                args: [etchId, tag.label],
              })
            );
          }
        }

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
            [calldata, ...tagsCalldata],
          ],
          abi: EtchABI,
        });

        await publicClient.waitForTransactionReceipt({
          hash: tx,
        });

        return { tx };
      }
    ),

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

        return { tx };
      }
    ),
});
