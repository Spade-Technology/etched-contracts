import { contracts } from "@/contracts";
import OrgABI from "@/contracts/abi/Organisations.json";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { publicClient, walletClient } from "@/server/web3";
import EtchABI from "@abis/Etches.json";
import { Address, encodeFunctionData, keccak256 } from "viem";
import { z } from "zod";

const userPermissions = {
  none: 0,
  member: 1,
  admin: 2,
};

export const orgRouter = createTRPCRouter({
  createOrg: protectedProcedure
    .input(
      z.object({
        orgName: z.string(),
        orgMembers: z.array(
          z.object({
            id: z.string(), // wallet address
            name: z.string(),
            role: z.enum(["none", "member", "admin"]),
          })
        ),
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
          args: [address, orgName, orgMembers.map(({ id, role }) => ({ user: id, permission: userPermissions[role] }))],
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
  setPermissionsOrg: protectedProcedure
    .input(
      z.object({
        orgId: z.number(),
        orgMembers: z.array(
          z.object({
            id: z.string(), // wallet address
            name: z.string().optional(),
            role: z.enum(["none", "member", "admin"]),
          })
        ),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { orgMembers, orgId, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: OrgABI,
          functionName: "setPermissionBulk",
          args: [orgId, orgMembers.map(({ id, role }) => ({ user: id, permission: userPermissions[role] }))],
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
  transferOwnership: protectedProcedure
    .input(
      z.object({
        to: z.string(),
        from: z.string(),
        orgId: z.number(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { orgId, from, to, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: OrgABI,
          functionName: "safeTransferFrom",
          args: [from, to, orgId],
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
