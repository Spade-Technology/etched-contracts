import { Address } from "viem";

const clientID = "demo-user-external";
const clientSecret = "k^yf57yg27MKo2SnuzwX";
const baseUrl = "https://paymagicapi.com/v1";

/**
 * Get the base account address for a user.
 *
 * @param {string} baseProvider - The base wallet provider (e.g., "patchwallets").
 * @param {string} userId - The user's unique identifier (e.g., "example@email.com").
 * @returns {Promise<Address>} - A promise that resolves to the user's base account address.
 */
export async function getBaseAccountAddress(baseProvider: string, userId: string): Promise<Address> {
  const result = await fetch(`${baseUrl}/resolver`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientID,
      client_secret: clientSecret,
      userIds: baseProvider + ":" + userId,
    }),
  });

  if (result.status !== 200) throw new Error(`Failed to get base account address for user ${userId}`);

  const { data } = await result.json();

  return data.users[0].accountAddress;
}
