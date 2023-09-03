import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useQuery } from "@/gqty";
import { api } from "@/utils/api";
import { shortenAddress } from "@/utils/hooks/address";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";

export const EtchedENS = () => {
  const { etchENSs } = useQuery({});
  const [etched, setEtched] = useState("");
  const { mutate, isLoading } = api.ens.requestEtchedENS.useMutation();
  const { data: session } = useSession();
  const [copiedState, setCopiedState] = useState(false);
  const toast = useToast();

  const ens = etchENSs({
    where: {
      owner: session?.address,
    },
    first: 1,
  })[0];

  const copy = () => {
    navigator.clipboard.writeText(ens?.name || "");
    toast.toast({
      title: "Copied!",
      description: "Your ENS has been copied to your clipboard.",
      variant: "default",
    });
    setCopiedState(true);
    setTimeout(() => {
      setCopiedState(false);
    }, 1000);
  };

  return ens?.name || isLoading ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex cursor-pointer items-center gap-2 rounded-md border-[1.5px] px-4 py-2" onClick={copy}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path
                d="M20.4937 12.6071H16.3704C14.8564 12.6062 13.6292 11.3799 13.6283 9.86592C13.6283 8.35192 14.8564 7.12568 16.3704 7.12476H20.4937"
                stroke="#9C9C9C"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.8373 9.80322H16.5195"
                stroke="#9C9C9C"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.34495 1H15.1486C18.1005 1 20.4936 3.39307 20.4936 6.34495V13.655C20.4936 16.6069 18.1005 19 15.1486 19H6.34495C3.39307 19 1 16.6069 1 13.655V6.34495C1 3.39307 3.39307 1 6.34495 1Z"
                stroke="#9C9C9C"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.62012 5.62207H11.1192"
                stroke="#9C9C9C"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium text-primary opacity-0">{ens?.name}</span>

            <div className="group/etched relative flex items-center justify-center">
              <span
                className={
                  "absolute -translate-x-1/2 text-sm font-medium text-primary transition-opacity group-hover/etched:opacity-0 " +
                  (copiedState && "!opacity-0")
                }
              >
                {ens?.name}
              </span>
              <span
                className={
                  "absolute -translate-x-1/2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover/etched:opacity-100 " +
                  (copiedState && "!opacity-0")
                }
              >
                {session?.address && shortenAddress({ address: session?.address })}
              </span>
              <span
                className={
                  "absolute -translate-x-1/2 text-sm font-medium text-primary opacity-0 transition-opacity " +
                  (copiedState && "!opacity-100")
                }
              >
                Copied
              </span>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="flex items-center gap-2 rounded-md border-[1.5px] px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
            <path
              d="M20.4937 12.6071H16.3704C14.8564 12.6062 13.6292 11.3799 13.6283 9.86592C13.6283 8.35192 14.8564 7.12568 16.3704 7.12476H20.4937"
              stroke="#9C9C9C"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M16.8373 9.80322H16.5195" stroke="#9C9C9C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.34495 1H15.1486C18.1005 1 20.4936 3.39307 20.4936 6.34495V13.655C20.4936 16.6069 18.1005 19 15.1486 19H6.34495C3.39307 19 1 16.6069 1 13.655V6.34495C1 3.39307 3.39307 1 6.34495 1Z"
              stroke="#9C9C9C"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M5.62012 5.62207H11.1192" stroke="#9C9C9C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <span className="text-sm font-medium text-primary">Claim ENS</span>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Claim your Etched ENS !</AlertDialogTitle>
          <AlertDialogDescription>You can only do this once, so make sure your ENS is the one you want!</AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          <Label htmlFor="username">Etched ENS</Label>
          <div className="flex items-center gap-2">
            <Input onChange={(event) => setEtched(event.target.value)} placeholder="lance1" /> .etched
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button isLoading={isLoading} onClick={async () => mutate({ ens: etched + ".etched" })}>
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
