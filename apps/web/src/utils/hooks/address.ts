import { Wallet } from "@/gql/graphql";

export const shortenAddress = ({ address, chars = 4 }: { address: string; chars?: number }) => {
  return `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`;
};

export const formatUserFromWallet = ({
  user,
  isLoading,
  override,
}: {
  user?: Partial<Wallet> | null | undefined;
  isLoading?: boolean;
  override?: string | null | undefined;
}) => {
  const userENS = user?.etchENS?.[0]?.name ?? undefined;
  const userAddress = user?.id && shortenAddress({ address: user?.id });
  const userFormatted = isLoading ? undefined : override ?? userENS ?? userAddress ?? undefined;

  return userFormatted;
};

export const isEVMAddress = (address: string) => {
  // This regex matches a valid Ethereum address
  const regex = /^(0x)?[0-9a-fA-F]{40}$/;
  return regex.test(address);
};
