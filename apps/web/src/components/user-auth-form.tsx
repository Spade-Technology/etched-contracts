"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { useSignIn } from "@/utils/hooks/useSignIn";
import { useAuth } from "@clerk/nextjs";
import { ConnectWalletModalButtonWrapper } from "./connect-wallet";

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
      <form>
        <div className="grid gap-2">
          <ConnectWalletModalButtonWrapper />
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      {/* <SignIn /> */}
      {/* <Button onClick={() => logIn({ isPatchWallet: true })} variant="default" className="w-full"> */}
      {/* <Icons.logoLong className="mr-2 h-8" />
        <span>Continue with Patch</span>
      </Button> */}
    </div>
  );
}
