import React, { useEffect, useState } from "react";

export interface form {
  email?: string;
  password?: string;
  status?: boolean;
}

export const TwoStep = () => {
  return (
    <main>
      <header className="mb-2 text-xl font-semibold text-foreground">Backup codes</header>
      <div className="mb-5 text-sm font-semibold text-muted-foreground">
        You can enable Two-step authentication for enhanced security
      </div>
    </main>
  );
};
