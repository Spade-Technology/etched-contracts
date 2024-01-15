import { DisableTwoStepAuth } from "@/components/disable-two-step-auth";
import { EnableTwoStepAuth } from "@/components/enable-two-step-auth";

import React, { useEffect, useState } from "react";
import TextMsgAuth from "./text-msg-auth";
import GoogleAuth from "./google-auth";

export interface form {
  email?: string;
  password?: string;
  status?: boolean;
}

export const TwoStep = () => {
  return (
    <main>
      <header className="mb-2 text-xl font-semibold text-foreground">2 Step Authentication</header>
      <div className="mb-5 text-sm font-semibold text-muted-foreground">
        You can enable Two-step authentication for enhanced security
      </div>
      <TextMsgAuth />
      <GoogleAuth />
    </main>
  );
};
