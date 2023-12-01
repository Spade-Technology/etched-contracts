import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "@/server/api/trpc";

import { TRPCError } from "@trpc/server";
import { readContract, waitForTransaction } from "@wagmi/core";
import { contracts, currentNetwork, currentNetworkId } from "@/contracts";
import ENSAbi from "@/contracts/abi/EtchENS.json";

import { walletClient } from "@/server/web3";
import { formatError } from "../nodeErrorFormatter";

import { currentChain } from "@/utils/wagmi";

export const ensRouter = createTRPCRouter({
  requestEtchedENS: protectedProcedure.input(z.object({ ens: z.string() })).mutation(
    async ({
      input: { ens },
      ctx: {
        session: { address },
      },
    }) => {
      // make sure ens is alphanumeric or _, and ends with .etched
      if (!ens.match(/^[a-zA-Z0-9_]+\.etched$/)) throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid ENS name" });

      const namesOfUser: any = await readContract({
        address: contracts.ENS,
        abi: ENSAbi,
        functionName: "getENS",
        args: [address],
      });

      if (!namesOfUser || namesOfUser.length > 0)
        throw new TRPCError({ code: "FORBIDDEN", message: "You already have an ENS name" });

      const tx = await walletClient
        .writeContract({
          address: contracts.ENS,
          abi: ENSAbi,
          chain: currentChain,
          functionName: "safeMint",
          args: [address, ens],
        })
        .catch(formatError);

      console.log(tx);

      if (typeof tx === "object" && "error" in tx) {
        console.error("Error tx: ", tx);
        console.error("Error _error: ", tx._error);
        throw new TRPCError({ code: "BAD_REQUEST", message: tx.message });
      }

      await waitForTransaction({
        hash: tx,
      });

      return tx;
    }
  ),
});
