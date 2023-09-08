import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/user-auth-form";
import { Icons } from "@/components/ui/icons";
import { useAccount } from "wagmi";
import { useIsConnected } from "@/utils/hooks/useIsConnected";
import { shortenAddress } from "@/utils/hooks/address";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  const router = useRouter();
  const isConnected = useIsConnected();
  const { address } = useAccount();
  const { status } = useSession();

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-primary" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Icons.logoLong color="white" className="mr-2 h-8" />
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
            {status === "authenticated" && address ? (
              <div className="flex w-full flex-col items-center justify-center">
                <Label> Logged in as {shortenAddress({ address })}</Label>
                <Button variant="outline" className="mt-4" onClick={() => router.push("/dashboard")}>
                  Continue to Dashboard
                </Button>
              </div>
            ) : (
              <UserAuthForm />
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
