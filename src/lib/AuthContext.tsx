"use client";

import { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

export default function AuthContext({ children }: PropsWithChildren<{}>) {
  return <SessionProvider>{children}</SessionProvider>;
}
