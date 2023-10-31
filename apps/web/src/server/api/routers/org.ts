import { contracts } from "@/contracts";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { publicClient, walletClient } from "@/server/web3";
import EtchABI from "@abis/Etches.json";
import { TRPCError } from "@trpc/server";
import { Address, decodeEventLog, encodeFunctionData, keccak256 } from "viem";
import { z } from "zod";
import OrgABI from "@/contracts/abi/Organisations.json";

export const orgRouter = createTRPCRouter({
  createOrg: protectedProcedure
    .input(
      z.object({
        orgName: z.string(),
        orgMembers: z.array(z.string()),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { orgName, orgMembers, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: OrgABI,
          functionName: "createOrganisation",
          args: [address, orgName, orgMembers],
        });

        const tx = await walletClient.writeContract({
          address: contracts.Org,
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

  renameOrg: protectedProcedure
    .input(
      z.object({
        orgId: z.number(),
        orgName: z.string(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { orgName, orgId, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: OrgABI,
          functionName: "renameOrganisation",
          args: [orgId, orgName],
        });

        const tx = await walletClient.writeContract({
          address: contracts.Org,
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
