export function removeDuplicatesByField(arr: any[], field: string): any[] {
  const uniqueIds = new Set<number>();
  const uniqueObjects: any[] = [];

  for (const obj of arr) {
    if (!uniqueIds.has(obj[field])) {
      uniqueIds.add(obj[field]);
      uniqueObjects.push(obj);
    }
  }

  return uniqueObjects;
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const teamPermissions = {
  none: 0,
  read: 1,
  readWrite: 2,
};

export const shortenAddress = (address: string, prefixLength: number = 6, suffixLength: number = 5): string => {
  if (!address) {
    return "";
  }

  const length = address.length;

  if (length !== 42 || !address.startsWith("0x")) {
    return address;
  }

  const prefix = address.slice(0, prefixLength + 2);
  const suffix = address.slice(length - suffixLength);

  const shortenedAddress = `${prefix}...${suffix}`;

  return shortenedAddress;
};

export const isValidEthereumAddress = (address: string): boolean => {
  const regex = /^0x[a-fA-F0-9]{40}$/;
  return regex.test(address);
};
