import { Metadata } from "next";

import { SignIn } from "@clerk/nextjs";
import { env } from "@/env.mjs";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function SignInAuthenticationPage() {
  return (
    <div className="mx-auto w-96">
      <SignIn
        path="/auth"
        afterSignInUrl={`foorier://${env.NODE_ENV === "development" ? "localhost:3000" : "etched.xyz"}/auth`}
        afterSignUpUrl="/auth/signup"
        signUpUrl="/auth/signup"
        routing="virtual"
      />
    </div>
  );
}
