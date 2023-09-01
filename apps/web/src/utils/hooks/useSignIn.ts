import { getCsrfToken, signIn } from "next-auth/react";
import { useState } from "react";
import { SiweMessage } from "siwe";
import { useAccount, useNetwork, useSignMessage } from "wagmi";

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { signMessageAsync } = useSignMessage();

  const logIn = async () => {
    try {
      setIsLoading(true);

      // Generate the message to be signed

      const message = new SiweMessage({
        domain: window.location.host,
        uri: window.location.origin,
        address: address,
        statement: "Sign in with Ethereum to Etched.",
        version: "1",
        chainId: chain?.id,
        nonce: await getCsrfToken(),
      });

      // Request the signature from the user
      const signature = await signMessageAsync({ message: message.prepareMessage() });

      // Send the signature to the server to be verified, and sign in or sign up the user
      await signIn("credentials", {
        message: JSON.stringify(message),
        signature,
        redirect: false,
      });
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return { isLoading, logIn };
};
