"use client";

import Script from "next/script";
import { useCookieConsent } from "@/context/CookieConsentContext";

const UMAMI_SRC = "https://analytics.pixelandprocess.de/script.js";
const UMAMI_WEBSITE_ID = "d29214eb-ae23-4389-90ed-0f33d09358a8";

export default function UmamiScript() {
  const { consent } = useCookieConsent();

  if (!consent?.analytics) return null;

  return (
    <Script
      src={UMAMI_SRC}
      data-website-id={UMAMI_WEBSITE_ID}
      strategy="afterInteractive"
    />
  );
}
