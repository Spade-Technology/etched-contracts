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
    <main className="lg:flex">
      <aside className="hidden h-screen w-7/12 items-center bg-[url('/images/login/Bg.svg')] bg-cover bg-center bg-no-repeat font-body text-white lg:flex">
        <div className="mx-auto w-96">
          <Icons.brightLogo className="h-9 cursor-pointer" onClick={() => router.push("/")} />
          <div className="tracking-lighter my-5 text-base font-medium">The leading blockchain trademarking platform</div>
          <div className="flex h-10 w-32 cursor-pointer items-center justify-center border-2 border-white text-base font-semibold shadow">
            Learn more
          </div>
        </div>
      </aside>
      <div className="bg-green500 mx-auto flex w-4/6 flex-col items-center justify-center py-10">
        <div className="w-full sm:w-80">
          <div className={`font-poppins text-2xl font-bold tracking-tight ${status === "authenticated" ? "text-center" : ""}`}>
            {status === "authenticated" ? "You're all set" : isSignup ? "Create your account" : "Hello Again!"}
          </div>
          <p className={`text-sm text-muted-foreground ${status === "authenticated" ? "text-center" : ""}`}>
            {isSignup ? "Create your account" : "Welcome to Etched!"}
          </p>
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
          {/* <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p> */}
        </div>
      </div>
    </main>
  );
}

export function UserAuthForm({ className, isSignup, ...props }: UserAuthFormProps) {
  const router = useRouter();

  const { isLoaded, userId, sessionId, isSignedIn } = useAuth();
  const { logIn } = useSignIn();

  const icons = [<Icons.twitterBrand />, <img src="/images/login/image 451.svg" />, <Icons.facebook />];

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
    <div className={cn("grid gap-5", className)} {...props}>
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
          <span className="my-3 text-center font-body text-base font-normal text-muted-foreground">OR</span>
          <form>
            <div className="grid gap-2">
              <ConnectWalletModalButtonWrapper />
            </div>
          </form>
          {/* <section className="flex justify-center gap-7">
            {icons.map((icon) => (
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-muted">
                {icon}
              </div>
            ))}
          </section> */}
        </>
      )}
    </div>
  );
}
