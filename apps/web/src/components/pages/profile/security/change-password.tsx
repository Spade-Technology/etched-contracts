import { ChangePasword } from "@/components/change-password";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export const Password = () => {
  const { user } = useUser();

  const [isModal, setIsModal] = useState(false);

  const props = { isModal, setIsModal };

  if (!user?.passwordEnabled) return;
  return (
    <main>
      <ChangePasword {...props} />
      <header className="mb-5 text-xl font-semibold text-foreground">Change Password</header>
      <Button onClick={() => setIsModal(true)} className="font-semibold text-white shadow-2xl">
        Change Password
      </Button>
    </main>
  );
};
