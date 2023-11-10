"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { useSignIn } from "@/utils/hooks/useSignIn";
import { SignIn, useAuth } from "@clerk/nextjs";
import { ConnectWalletModalButtonWrapper } from "./connect-wallet";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { Loader2 } from "lucide-react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const { isLoaded, userId, sessionId, getToken, isSignedIn } = useAuth();
  const { logIn } = useSignIn();

  React.useEffect(() => {
    if (sessionId && userId && isLoaded && isSignedIn) {
      logIn({
        isPatchWallet: true,
      });
    }
  }, [userId, sessionId, isSignedIn]);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {sessionId ? (
        <div className="flex flex-col justify-center gap-4">
          <span className="text-center">Logging you in...</span>
          <Loader2 className="mx-auto h-6 w-6 animate-spin" />
        </div>
      ) : (
        <SignIn path="/auth" />
      )}
      {!sessionId && (
        <>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <form>
            <div className="grid gap-2">
              <ConnectWalletModalButtonWrapper />
            </div>
          </form>
        </>
      )}
    </div>
  );
}
