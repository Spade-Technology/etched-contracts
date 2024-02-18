import { generateContractsClient, walletWithCapacityCredit } from "@/litContracts";
import { prisma } from "./db";

export const regenerateCapacityCredits = async (address_override?: string) => {
  const contractClient = await generateContractsClient();

  const requestsPerKilosecond = 1000;
  const daysUntilUTCMidnightExpiration = 7;

  // WARNING: Is this the correct way to get the UTC midnight time???
  const dateTimeUTCMidnightExpiration = new Date(
    Date.UTC(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate() + daysUntilUTCMidnightExpiration,
      0,
      0,
      0
    )
  );

  // this identifier will be used in delegation requests.
  const { capacityTokenIdStr } = await contractClient.mintCapacityCreditsNFT({
    requestsPerKilosecond,
    daysUntilUTCMidnightExpiration,
  });

  if (address_override && address_override.toLowerCase() !== walletWithCapacityCredit.address.toLowerCase()) {
    contractClient.rateLimitNftContractUtils.write.transfer({
      fromAddress: walletWithCapacityCredit.address,
      toAddress: address_override,
      RLITokenAddress: capacityTokenIdStr,
    });

    await prisma.user.update({
      where: { address: address_override },
      data: {
        capacityCredits: {
          create: {
            capacityTokenId: capacityTokenIdStr,
            creditAmountPerKilosecond: requestsPerKilosecond,
            expiration: dateTimeUTCMidnightExpiration,
          },
        },
      },
    });
  } else
    await prisma.capacityCredit.create({
      data: {
        capacityTokenId: capacityTokenIdStr,
        creditAmountPerKilosecond: requestsPerKilosecond,
        expiration: dateTimeUTCMidnightExpiration,
      },
    });

  console.log(`Regenerated capacity credits for ${walletWithCapacityCredit.address}`);

  return { capacityTokenIdStr };
};
