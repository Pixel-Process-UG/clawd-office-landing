"use client";

import { useLang } from "@/context/LangContext";
import { translations as t } from "@/lib/i18n";

export default function Navbar() {
  const { lang, toggle, t: tr } = useLang();

  return (
    <nav className="sticky top-0 z-50 bg-brand-white border-b-3 border-brand-black">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 font-heading font-bold text-xl">
          <div className="w-8 h-8 bg-brand-teal border-2 border-brand-black grid grid-cols-4 grid-rows-4 overflow-hidden">
            <span className="col-start-2 col-end-4 row-start-1 row-end-2 bg-brand-purple" />
            <span className="col-start-1 col-end-2 row-start-2 row-end-3 bg-brand-purple" />
            <span className="col-start-3 col-end-5 row-start-3 row-end-4 bg-brand-yellow" />
          </div>
          Clawd Office
        </a>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Nav links – hidden on mobile */}
          <ul className="hidden md:flex gap-6 font-heading font-medium text-sm">
            <li>
              <a href="#features" className="hover:text-brand-teal transition-colors">
                {tr(t.nav.features)}
              </a>
            </li>
            <li>
              <a href="#tech" className="hover:text-brand-teal transition-colors">
                {tr(t.nav.tech)}
              </a>
            </li>
            <li>
              <a href="#start" className="hover:text-brand-teal transition-colors">
                {tr(t.nav.quickstart)}
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
          </ul>

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="font-heading font-semibold text-xs bg-brand-yellow border-2 border-brand-black px-3 py-1 shadow-neo-sm shadow-neo-sm-hover transition-all cursor-pointer"
            aria-label="Switch language"
          >
            {lang === "de" ? "EN" : "DE"}
          </button>
        </div>
      </div>
    </nav>
  );
}
