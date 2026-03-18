"use client";

import { CookieConsentProvider } from "@/context/CookieConsentContext";
import UmamiScript from "./UmamiScript";

export default function RootClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookieConsentProvider>
      {children}
      <UmamiScript />
    </CookieConsentProvider>
  );
}
