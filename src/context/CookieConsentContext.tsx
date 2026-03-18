"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

const STORAGE_KEY = "cookie-consent";

export type ConsentState = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

type CookieConsentContextType = {
  consent: ConsentState | null;
  hasConsented: boolean;
  showBanner: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  setCustomConsent: (analytics: boolean, marketing: boolean) => void;
  openSettings: () => void;
  closeSettings: () => void;
  dismissBanner: () => void;
  isSettingsOpen: boolean;
};

const defaultConsent: ConsentState = {
  essential: true,
  analytics: false,
  marketing: false,
  timestamp: "",
};

const CookieConsentContext = createContext<CookieConsentContextType | null>(
  null
);

function loadConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (
      typeof parsed.essential === "boolean" &&
      typeof parsed.analytics === "boolean" &&
      typeof parsed.marketing === "boolean" &&
      typeof parsed.timestamp === "string"
    ) {
      return parsed;
    }
  } catch {
    // ignore
  }
  return null;
}

function saveConsent(state: ConsentState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [forceShowBanner, setForceShowBanner] = useState(false);

  useEffect(() => {
    setConsent(loadConsent());
  }, []);

  const hasConsented = consent !== null;
  const showBanner = !hasConsented || forceShowBanner;

  const hideBanner = useCallback(() => {
    setIsSettingsOpen(false);
    setForceShowBanner(false);
  }, []);

  const acceptAll = useCallback(() => {
    const state: ConsentState = {
      ...defaultConsent,
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    setConsent(state);
    saveConsent(state);
    hideBanner();
  }, [hideBanner]);

  const rejectNonEssential = useCallback(() => {
    const state: ConsentState = {
      ...defaultConsent,
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    setConsent(state);
    saveConsent(state);
    hideBanner();
  }, [hideBanner]);

  const setCustomConsent = useCallback(
    (analytics: boolean, marketing: boolean) => {
      const state: ConsentState = {
        ...defaultConsent,
        essential: true,
        analytics,
        marketing,
        timestamp: new Date().toISOString(),
      };
      setConsent(state);
      saveConsent(state);
      hideBanner();
    },
    [hideBanner]
  );

  const openSettings = useCallback(() => {
    setForceShowBanner(true);
    setIsSettingsOpen(true);
  }, []);
  const closeSettings = useCallback(() => {
    setIsSettingsOpen(false);
  }, []);

  const dismissBanner = useCallback(() => {
    setForceShowBanner(false);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasConsented,
        showBanner,
        acceptAll,
        rejectNonEssential,
        setCustomConsent,
        openSettings,
        closeSettings,
        dismissBanner,
        isSettingsOpen,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
}
