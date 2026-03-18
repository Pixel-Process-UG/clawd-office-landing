"use client";

import { useLang } from "@/context/LangContext";
import { translations as t } from "@/lib/i18n";
import { GitHubIcon } from "./Icons";

export default function CtaSection() {
  const { t: tr } = useLang();

  return (
    <section className="py-20 bg-brand-yellow border-y-3 border-brand-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto">
          {/* P&P logo mark */}
          <div className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wide mb-6">
            <span className="w-6 h-6 bg-brand-black flex items-center justify-center text-brand-yellow text-[10px] font-bold">
              P&P
            </span>
            {t.cta.builtBy}
          </div>

          <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-tight mb-4 whitespace-pre-line">
            {tr(t.cta.title)}
          </h2>

          <p className="text-brand-gray text-lg mb-8 font-light">
            {tr(t.cta.sub)}
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://pixelandprocess.de"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-semibold text-sm px-7 py-3.5 border-neo bg-brand-black text-brand-white shadow-neo shadow-neo-hover transition-all inline-flex items-center gap-2"
            >
              {tr(t.cta.ctaPrimary)} &rarr;
            </a>
            <a
              href="https://github.com/fwartner/clawd-office"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-semibold text-sm px-7 py-3.5 border-neo bg-brand-white shadow-neo shadow-neo-hover transition-all inline-flex items-center gap-2"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
