import { useClerk } from "@clerk/nextjs";
import GoogleAuth from "./google-auth";
import TextMsgAuth from "./text-msg-auth";

export interface form {
  email?: string;
  password?: string;
  status?: boolean;
}

export const TwoStep = () => {
  const { user } = useClerk();

  return (
    <main>
      <header className="mb-2 text-xl font-semibold text-foreground">2 Step Authentication</header>
      <div className="mb-5 text-sm font-semibold text-muted-foreground">
        You can enable Two-step authentication for enhanced security
      </div>
      <TextMsgAuth disabled={!user?.primaryPhoneNumber} />
      <GoogleAuth />
    </main>
  );
};
