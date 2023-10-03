import { contracts } from "@/contracts";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { publicClient, walletClient } from "@/server/web3";
import EtchABI from "@abis/Etches.json";
import { TRPCError } from "@trpc/server";
import { Address, decodeEventLog, encodeFunctionData, keccak256 } from "viem";
import { z } from "zod";
import TeamABI from "@/contracts/abi/Teams.json";

export const teamRouter = createTRPCRouter({
  mintEtch: protectedProcedure
    .input(
      z.object({
        teamName: z.string(),
        teamMembers: z.string(),
        blockchainSignature: z.string(),
        blockchainMessage: z.string(),
      })
    )
    .mutation(
      async ({
        input: { teamName, teamMembers, blockchainMessage, blockchainSignature },
        ctx: {
          session: { address },
        },
      }) => {
        // we need to send two calls, one to create the etch and get the etch id, and then another to set Metadata
        const calldata = encodeFunctionData({
          abi: TeamABI,
          functionName: "createTeam",
          args: [address, teamName],
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
