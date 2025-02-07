import { camelCaseNetwork, contracts } from "@/contracts";
import { lit } from "@/lit";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { deductCreditsFromUser, userHasSufficientCredits } from "@/server/etched-credit-management";
import { encryptToIpfs, fakeEncryptToIpfs } from "@/server/lit-encrypt";
import { generateServerAuthSig, generateServerSessionSig, publicClient, walletClient } from "@/server/web3";
import { defaultAccessControlConditions, defaultAccessControlConditionsUsingReadableID } from "@/utils/accessControlConditions";
import { EVMAddressType, teamPermissions } from "@/utils/common";
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
          session: { address, isAdmin },
        },
      }) => {
        // uint256(keccak256(_msgSender())) + (random uint 48)
        //NOTE: THIS IS THE FAKE VERSION . . .WE ONLY CONNECT TO LIT BEFORE THE REAL VERSINO BELOW.

        let ipfsCids: string[] = [];
        let etchUIDs: string[] = [];
        let callDatas: string[] = [];

        //SECURITY:  Make sure user has enough credits to continue . . . Admins get a pass!
        if (!isAdmin && !(await userHasSufficientCredits(address as EVMAddressType, 1))) {
          throw new Error("User lacks sufficient credits to continue!")
        }


        await Promise.all(
          files.map(async ({ url, name, type }) => {
            const etchUID = BigInt(keccak256(encodePacked(["address"], [address as Address]))) + random(48);
            etchUIDs.push(etchUID);

            const file = await fetch(url).then((res) => res.blob());

            //FIXME: Return to `encryptToIpfs` once LIT gets their act together
            const ipfsCid = await fakeEncryptToIpfs({
              authSig: {} as any,
              sessionSigs: {} as any,
              file,
              chain: camelCaseNetwork,
              evmContractConditions: defaultAccessControlConditions({ etchUID: etchUID.toString() }),
              //FIXME: Remove `originalFileUrl` once LIT gets their act together
              metadata: { type, originalFileUrl: url, etchUID: etchUID.toString() },
            }).catch((err) => {
              console.log(err);
              console.log(err.stack);
              throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to upload to IPFS (fakeEncryption)" });
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

        // await lit.connect();
        // await Promise.all(
        //   files.map(async ({ url, name, type }) => {
        //     console.log(`bulkMintEtch 4.insidePromise`)
        //     const etchUID = BigInt(keccak256(encodePacked(["address"], [address as Address]))) + random(48);
        //     etchUIDs.push(etchUID);
        //     console.log(`bulkMintEtch 5.insidePromise`)
        //     const file = await fetch(url).then((res) => res.blob());
        //     console.log(`bulkMintEtch 6.insidePromise`)
        //     const ipfsCid = await encryptToIpfs({
        //       authSig: await generateServerAuthSig(),
        //       file,
        //       chain: camelCaseNetwork,
        //       evmContractConditions: defaultAccessControlConditions({ etchUID: etchUID.toString() }),
        //       // metadata: { type },
        //       //FIXME: Remove `originalFileUrl` once LIT gets their act together
        //       metadata: { type, originalFileUrl: url, etchUID: etchUID.toString() },
        //     }).catch((err) => {
        //       console.log(err);
        //       console.log(err.stack);
        //       throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to upload to IPFS" });
        //     });
        //     console.log(`bulkMintEtch 7.insidePromise`)
        //     ipfsCids.push(ipfsCid);

        //     const functionName = team ? "safeMintForTeam" : "safeMint";
        //     const args = team ? [etchUID, team, name, ipfsCid] : [etchUID, address, name, ipfsCid];
        //     console.log(`bulkMintEtch 8.insidePromise`)
        //     const calldata = encodeFunctionData({
        //       abi: EtchABI,
        //       functionName: functionName,
        //       args: args,
        //     });
        //     console.log(`bulkMintEtch 9.insidePromise`)
        //     callDatas.push(calldata);
        //   })
        // );
        console.log(`bulkMintEtch 10`)

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

          //NOTE: Finally deduct from credits . . .  Admins get pass
          if (!isAdmin) {
            const tmpRemainingCredits = await deductCreditsFromUser(address as EVMAddressType)
            console.log('REMAINING CREDITS: ', tmpRemainingCredits)
          }
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
            z.object({
              label: z.string(),
              value: z.string(),
              toCreate: z.boolean().optional(),
              toDelete: z.boolean().optional()
            })
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

          if (data?.etch) {
            // Transform existing tags into the same shape as input tags for comparison
            const existingTags = data.etch.tagLinks.map((tagLink: any) => ({
              label: tagLink.tag.label,
              value: tagLink.tag.id,
              originalLabel: tagLink.tag.label // Keep original label for deletion
            }))

            // Find tags to delete (exist in DB but not in new tags)
            const tagsToDelete = existingTags
              .filter((existingTag: any) => !tags.find(newTag => newTag.value === existingTag.value))
              .map((tag: any) => ({
                label: tag.originalLabel, // Use the original label for deletion
                value: tag.value,
                toDelete: true,
                toCreate: false
              }));

            // Find tags to create (exist in new tags but not in DB)
            const tagsToCreate = tags
              .filter(newTag => !existingTags.find((existingTag: any) => existingTag.value === newTag.value))
              .map(tag => ({
                label: tag.label,
                value: tag.value,
                toDelete: false,
                toCreate: true
              }));

            console.log('EXISTING TAGS:', existingTags);
            console.log('NEW TAGS:', tags);
            console.log('ACTIONABLE:', {
              toDelete: tagsToDelete,
              toCreate: tagsToCreate
            });

            const actionableTags = [...tagsToDelete, ...tagsToCreate];

            // Only create calldata for tags with valid labels
            tagsCalldata = actionableTags
              .filter(tag => tag.label && typeof tag.label === 'string')
              .map((tag) =>
                encodeFunctionData({
                  abi: EtchABI,
                  functionName: tag.toDelete ? "removeTag" : "addTag",
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
