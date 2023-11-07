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
