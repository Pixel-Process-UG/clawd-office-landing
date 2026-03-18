"use client";

import { useLang } from "@/context/LangContext";
import { translations as t } from "@/lib/i18n";

export default function Footer() {
  const { t: tr } = useLang();

  return (
    <footer className="bg-brand-black text-[#888] py-10 border-t-3 border-brand-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
        <span className="font-heading font-semibold text-sm text-brand-white">
          {tr(t.footer.copy)}
        </span>
        <ul className="flex gap-6 text-sm">
          <li>
            <a
              href="https://pixelandprocess.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal transition-colors"
            >
              pixelandprocess.de
            </a>
          </li>
          <li>
            <a
              href="https://github.com/fwartner/clawd-office"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://pixelandprocess.de/impressum"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal transition-colors"
            >
              {tr(t.footer.imprint)}
            </a>
          </li>
          <li>
            <a
              href="https://pixelandprocess.de/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal transition-colors"
            >
              {tr(t.footer.privacy)}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
