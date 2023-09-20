import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useAccount, useConnect } from "wagmi";
import Image from "next/image";
import { useSignIn } from "@/utils/hooks/useSignIn";
import { useIsConnected } from "@/utils/hooks/useIsConnected";
import { shortenAddress } from "@/utils/hooks/address";
import { Label } from "./ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ConnectWallet extends React.HTMLAttributes<HTMLDivElement> {}

const connectorLogo: Record<string, string> = {
  metamask: "/icons/metamask.svg",
};

export function ConnectWalletModalButtonWrapper({ className, ...props }: ConnectWallet) {
  const [open, setOpen] = React.useState(false);
  const { connect, connectors, isLoading: isWalletLoading, pendingConnector } = useConnect({ onSuccess: () => setOpen(false) });
  const isConnected = useIsConnected();
  const { address } = useAccount();
  const { logIn, isLoading: isLoginLoading } = useSignIn();

  const isLoading = isWalletLoading || isLoginLoading;

  return isConnected && address ? (
    <>
      <Button type="button" onClick={() => logIn({ isPatchWallet: false })} isLoading={isLoading}>
        Sign in using {shortenAddress({ address })}
      </Button>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="!border-b-0">
          <AccordionTrigger>Why is there Two messages to Sign-In ?</AccordionTrigger>
          <AccordionContent>
            Two signatures are required for enhanced security and authentication. <br />
            <br />
            The first signature is used to authenticate your identity by signing a message with your private key. This proves that
            you are the owner of the account.
            <br />
            <br />
            The second signature is used to sign a blockchain-specific message. This message contains information about the
            current block number and the node address. <br />
            This messages allows our backend to manage your etches, teams, and organisation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>{" "}
    </>
  ) : (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{props.children || <Button>Sign In with Wallet</Button>}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Using Your Wallet</DialogTitle>
          <DialogDescription>Connect to your wallet to access your profile.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {connectors.map((connector) => (
            <Button disabled={!connector.ready} key={connector.id} onClick={() => connect({ connector })}>
              {connector.name}
              {isLoading && pendingConnector?.id === connector.id && " (connecting)"}
              {connectorLogo[connector.name.toLowerCase()] && (
                <Image
                  src={connectorLogo[connector.name.toLowerCase()] || ""}
                  alt={connector.name}
                  width={16}
                  height={16}
                  className="ml-2"
                />
              )}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
