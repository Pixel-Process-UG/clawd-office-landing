"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Lang } from "@/lib/i18n";

type LangContextType = {
  lang: Lang;
  toggle: () => void;
  t: (obj: Record<string, string>) => string;
};

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("de");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "de" ? "en" : "de"));
  }, []);

  const t = useCallback(
    (obj: Record<string, string>) => obj[lang] ?? obj.de ?? "",
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
