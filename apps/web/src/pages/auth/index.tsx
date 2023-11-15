import { Metadata } from "next";

import AuthenticationPage from "@/components/user-auth-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function SignInAuthenticationPage({}) {
  return <AuthenticationPage isSignup={false} />;
}
