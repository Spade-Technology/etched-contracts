export function removeAmpersandAndtransformToCamelCase(input: string): string {
  const withoutAmpersand = input.replace("&", "");

  if (withoutAmpersand.includes(" ")) {
    const words = withoutAmpersand.split(" ");
    const camelCaseString = words
      .map((word, index) => (index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()))
      .join("");
    return camelCaseString;
  }

  return withoutAmpersand;
}
