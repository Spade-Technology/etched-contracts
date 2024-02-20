import { Metadata } from "next";

import AuthenticationPage from "@/components/user-auth-form";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function SignInAuthenticationPage({}) {
  const router = useRouter();
  const { electron } = router.query;
  return <AuthenticationPage isSignup={false} electron={!!electron} />;
}
