import { env } from "@/env.mjs";
import { currentChain } from "@/utils/wagmi";
import { SiweMessage } from "siwe";
import { Address, createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";

export const publicClient = createPublicClient({
  chain: currentChain,
  transport: http(env.NEXT_PUBLIC_INFURA_RPC + env.INFURA_KEY),
});

export const walletClient = createWalletClient({
  chain: currentChain,
  transport: http(env.NEXT_PUBLIC_INFURA_RPC + env.INFURA_KEY),
  account: privateKeyToAccount(env.ETCHED_NODE_PRIVATE_KEY as Address),
});

export const generateServerAuthSig = async () => {
  const expiration_time = 60 * 60 * 24 * 7; // 7 days
  const expiration_date = new Date(Date.now() + expiration_time * 1000);
  const expiration = expiration_date.toISOString();

  console.log("azeaze");

  const preparedMessage = {
    address: walletClient.account.address,
    version: "1",
    chainId: 1,
    expirationTime: expiration,
    domain: env.DOMAIN, // TODO: change this to env.NEXTAUTH_URL + "/"
    uri: "https://" + env.DOMAIN + "/",
  };

  console.count();

  const message = new SiweMessage(preparedMessage);

  console.count();

  const body = message.prepareMessage();

  console.count();

  const signedResult = await walletClient.signMessage({ message: body });

  console.count();

  if (!signedResult) throw new Error("Unable to sign message");

  console.count();

  let authSig = {
    sig: signedResult,
    derivedVia: "web3.eth.personal.sign",
    signedMessage: body,
    address: walletClient.account.address,
  };

  console.count();

  console.log(authSig);

  return authSig;
};
