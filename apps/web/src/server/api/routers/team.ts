import { contracts } from "@/contracts";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { publicClient, walletClient } from "@/server/web3";
import EtchABI from "@abis/Etches.json";
import { Address, encodeFunctionData, keccak256 } from "viem";
import { z } from "zod";
import TeamABI from "@/contracts/abi/Teams.json";
import { teamPermissions } from "@/utils/common";

export const teamRouter = createTRPCRouter({
  createTeam: protectedProcedure
    .input(
      z.object({
        teamName: z.string(),
        teamMembers: z.array(
          z.object({
            id: z.string(), // wallet address
            name: z.string(),
            role: z.enum(["none", "read", "readWrite"]),
          })
        ),
        owningOrg: z.string(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { teamName, teamMembers, owningOrg, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        let calldata;
        if (owningOrg === "None")
          calldata = encodeFunctionData({
            abi: TeamABI,
            functionName: "createTeam",
            args: [address, teamName, teamMembers.map(({ id, role }) => ({ user: id, permission: teamPermissions[role] }))],
          });
        else
          calldata = encodeFunctionData({
            abi: TeamABI,
            functionName: "createTeamForOrganisation",
            args: [owningOrg, teamName, teamMembers.map(({ id, role }) => ({ user: id, permission: teamPermissions[role] }))],
          });

        const tx = await walletClient.writeContract({
          address: contracts.Team,
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

  renameTeam: protectedProcedure
    .input(
      z.object({
        teamId: z.number(),
        teamName: z.string(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { teamName, teamId, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: TeamABI,
          functionName: "renameTeam",
          args: [teamId, teamName],
        });

        const tx = await walletClient.writeContract({
          address: contracts.Team,
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
  setPermissionsTeam: protectedProcedure
    .input(
      z.object({
        teamId: z.number(),
        teamMembers: z.array(
          z.object({
            id: z.string(), // wallet address
            name: z.string().optional(),
            role: z.enum(["none", "read", "readWrite"]),
          })
        ),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { teamMembers, teamId, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: TeamABI,
          functionName: "setPermissionBulk",
          args: [teamId, teamMembers.map(({ id, role }) => ({ user: id, permission: teamPermissions[role] }))],
        });

        const tx = await walletClient.writeContract({
          address: contracts.Team,
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

  transferToOrganisation: protectedProcedure
    .input(
      z.object({
        teamId: z.number(),
        orgId: z.number(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { orgId, teamId, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: TeamABI,
          functionName: "transferToOrganisation",
          args: [teamId, orgId],
        });

        const tx = await walletClient.writeContract({
          address: contracts.Team,
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
        teamId: z.number(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { to, from, teamId, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        const calldata = encodeFunctionData({
          abi: TeamABI,
          functionName: "safeTransferFrom",
          args: [from, to, teamId],
        });

        const tx = await walletClient.writeContract({
          address: contracts.Team,
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
