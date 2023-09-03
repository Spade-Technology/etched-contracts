import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "@/server/api/trpc";

import { TRPCError } from "@trpc/server";
import { readContract } from "@wagmi/core";
import { contracts, currentNetwork, currentNetworkId } from "@/contracts";
import ENSAbi from "@/contracts/abi/EtchENS.json";
import { config, publicClient } from "@/utils/wagmi";

import { Address, createClient, writeContract } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { env } from "@/env.mjs";
import { walletClient } from "@/server/web3";

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

      console.log("AUTHORIZE ENS", ens, address, ".. sending transaction");

      const tx = await walletClient.writeContract({
        address: contracts.ENS,
        abi: ENSAbi,
        functionName: "safeMint",
        args: [address, ens],
      });

      console.log(tx);
    }
  ),
});
