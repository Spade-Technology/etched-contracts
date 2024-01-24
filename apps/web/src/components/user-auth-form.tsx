"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { shortenAddress } from "@/utils/hooks/address";
import { useSignOut, useSignIn } from "@/utils/hooks/useSignIn";
import { SignIn, SignUp, useAuth, useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ConnectWalletModalButtonWrapper } from "./connect-wallet";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { Label } from "./ui/label";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  isSignup?: boolean;
}

export default function AuthenticationPage({ isSignup }: { isSignup: boolean }) {
  const router = useRouter();
  const { signOut } = useSignOut();

  const { status, data: session } = useSession();

  return (
    <>
      <div className="md:hidden">
        <Image src="/examples/auth-light.png" width={1280} height={843} alt="Authentication" className="block dark:hidden" />
        <Image src="/examples/auth-dark.png" width={1280} height={843} alt="Authentication" className="hidden dark:block" />
      </div>
      <div className="container relative  h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-primary" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Icons.logoLong color="white" className="mr-2 h-8 cursor-pointer" onClick={() => router.push("/")} />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This service saved countless hours & headaches by adding simplicity and privacy to the legalities of my
                busines&rdquo;
              </p>
              <footer className="text-sm">John Doe</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {status === "authenticated" ? "You're all set" : "Create or Sign In to Your Account"}
              </h1>
              <p className="text-sm text-muted-foreground">Welcome to Etched!</p>
            </div>
            {status === "authenticated" && session ? (
              <div className="flex w-full flex-col items-center justify-center">
                <Label> Logged in {session?.address && "as " + shortenAddress({ address: session?.address as string })}</Label>
                <Button variant="outline" className="mt-4" onClick={() => router.push("/dashboard")}>
                  Continue to Dashboard
                </Button>
                <Button variant="destructive" className="mt-4" onClick={() => signOut()}>
                  Log Out
                </Button>
              </div>
            ) : (
              <UserAuthForm isSignup={isSignup} />
            )}
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function UserAuthForm({ className, isSignup, ...props }: UserAuthFormProps) {
  const router = useRouter();

  const { isLoaded, userId, sessionId, isSignedIn } = useAuth();
  const { logIn } = useSignIn();

  React.useEffect(() => {
    console.log({ sessionId, userId, isLoaded, isSignedIn });
    if (sessionId && userId && isLoaded && isSignedIn) {
      logIn({
        isPatchWallet: true,
      });
    }
    /*
     * WORK AROUND FOR THIS BUG
     * Clerk: “The <SignUp/> and <SignIn/> components cannot render when a user is already signed in, unless the application allows...
     */
    if (isLoaded && !router.asPath.includes("signup")) router.push("/auth");
  }, [userId, sessionId, isSignedIn, isLoaded, router.asPath]);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {sessionId ? (
        <div className="flex flex-col justify-center gap-4">
          <span className="text-center">{isSignup ? "Creating your account !" : "Logging you in..."}</span>
          <Loader2 className="mx-auto h-6 w-6 animate-spin" />
        </div>
      ) : // if signUp=1, then it will be a sign up form
      isSignup ? (
        <SignUp path="/auth/signup" redirectUrl="/auth" afterSignUpUrl="/auth" signInUrl="/auth" routing="virtual" />
      ) : (
        <SignIn path="/auth" afterSignInUrl="/auth" afterSignUpUrl="/auth/signup" signUpUrl="/auth/signup" routing="virtual" />
      )}
      {!sessionId && !isSignup && (
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
