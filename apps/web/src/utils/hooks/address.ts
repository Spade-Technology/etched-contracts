export const shortenAddress = ({
  address,
  chars = 4,
}: {
  address: string;
  chars?: number;
}) => {
  return `${address.substring(0, chars + 2)}...${address.substring(
    42 - chars
  )}`;
};
