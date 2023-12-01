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

export const isValidEthereumAddress = (address: string): boolean => {
  const regex = /^0x[a-fA-F0-9]{40}$/;
  return regex.test(address);
};
