import { env } from "@/env.mjs";
import { currentChain } from "@/utils/wagmi";
import { SiweMessage } from "siwe";
import { Address, createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { SessionSigsMap } from '@lit-protocol/types';
import { LitAbility, LitAccessControlConditionResource, createSiweMessage, createSiweMessageWithRecaps } from "@lit-protocol/auth-helpers";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
// import * as LitJsSdk from "@lit-protocol/lit-node-client-nodejs";
import { currentNetworkId } from "@/contracts";

export const publicClient = createPublicClient({
  chain: currentChain,
  transport: http(env.NEXT_PUBLIC_INFURA_RPC + env.INFURA_KEY),
});

const client = new LitJsSdk.LitNodeClient({
  // litNetwork: "serrano",
  // litNetwork: "jalapeno",
  // litNetwork: "habanero",
  litNetwork: process.env.NODE_ENV === "development" ? "datil-dev" : "habanero",
  // litNetwork: "localhost",
  // only on client
  alertWhenUnauthorized: typeof window !== "undefined" ? true : false,

  // Verbosity of the logging
  debug: false,

  checkNodeAttestation: process.env.NODE_ENV !== "development",
});

export const walletClient = createWalletClient({
  chain: currentChain,
  transport: http(env.NEXT_PUBLIC_INFURA_RPC + env.INFURA_KEY),
  account: privateKeyToAccount(env.ETCHED_NODE_PRIVATE_KEY as Address),
});

export const generateServerAuthSig = async () => {
  try {
    const expiration_time = 60 * 60 * 24 * 7; // 7 days
    const expiration_date = new Date(Date.now() + expiration_time * 1000);
    const expiration = expiration_date.toISOString();

    // const preparedMessage = {
    //   address: walletClient.account.address,
    //   version: "1",
    //   chainId: 1,
    //   expirationTime: expiration,
    //   domain: env.DOMAIN, // TODO: change this to env.NEXTAUTH_URL + "/"
    //   uri: "https://" + env.DOMAIN + "/",
    // };
    // const message = new SiweMessage(preparedMessage);
    // const body = message.prepareMessage();

    const litResourceCondition = new LitAccessControlConditionResource('*')
    const preparedMessage = {
      uri: "https://" + env.DOMAIN + "/",
      chainId: 1,
      expiration,
      resources: [{
        resource: litResourceCondition,
        ability: LitAbility.AccessControlConditionDecryption,
      },
      {
        resource: litResourceCondition,
        ability: LitAbility.AccessControlConditionSigning,
      }],
      domain: env.DOMAIN, // TODO: change this to env.NEXTAUTH_URL + "/"
      // resources: callbackParams.resourceAbilityRequests,
      // address: walletClient.account.address,
      walletAddress: walletClient.account.address,
      nonce: await client.getLatestBlockhash(),
      litNodeClient: client,
    };
    const body = await createSiweMessage(preparedMessage);

    const signedResult = await walletClient.signMessage({ message: body });

    if (!signedResult) throw new Error("Unable to sign message");

    let authSig = {
      sig: signedResult,
      derivedVia: "web3.eth.personal.sign",
      signedMessage: body,
      address: walletClient.account.address,
    };

    return authSig;
  } catch (error) {
    console.log(error)
    throw error
  }
};


export const generateServerSessionSig = async () => {
  const authNeededCallback = async (params: any) => {
    //ignoring params because we're simply gonna pass authSig from existing function
    console.log(params)
    return await generateServerAuthSig()
  }

  // const authSig = await generateServerAuthSig()
  const litResource = new LitAccessControlConditionResource('*')
  // Get the session signatures
  const sessionSigs = await client.getSessionSigs({
    chain: currentNetworkId.toString(),
    resourceAbilityRequests: [
      {
        resource: litResource,
        ability: LitAbility.AccessControlConditionDecryption,
      },
      {
        resource: litResource,
        ability: LitAbility.AccessControlConditionSigning,
      }
    ],
    authNeededCallback
    // capacityDelegationAuthSig,
  });

  return sessionSigs;
}
