"use client";

import { useLang } from "@/context/LangContext";
import { translations as t } from "@/lib/i18n";
import { GitHubIcon } from "./Icons";

export default function Hero() {
  const { t: tr } = useLang();

  return (
    <section className="py-16 md:py-20 relative overflow-hidden pixel-grid">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="md:text-left text-center">
          <div className="inline-flex items-center gap-2 font-heading font-semibold text-xs uppercase tracking-wider text-brand-teal mb-5">
            <span className="w-2 h-2 bg-brand-teal animate-blink" />
            {tr(t.hero.badge)}
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-5">
            {tr(t.hero.title1)}{" "}
            <span className="bg-brand-yellow px-2 border-2 border-brand-black inline-block">
              {tr(t.hero.titleHighlight)}
            </span>{" "}
            <span className="whitespace-pre-line">{tr(t.hero.title2)}</span>
          </h1>

          <p className="text-lg text-brand-gray max-w-md mb-8 font-light md:mx-0 mx-auto">
            {tr(t.hero.sub)}
          </p>

          <div className="flex gap-4 flex-wrap md:justify-start justify-center">
            <a
              href="https://pixelandprocess.de"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-semibold text-sm px-7 py-3.5 border-neo bg-brand-purple shadow-neo shadow-neo-hover transition-all inline-flex items-center gap-2"
            >
              {tr(t.hero.ctaPrimary)} &rarr;
            </a>
            <a
              href="https://github.com/fwartner/clawd-office"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-semibold text-sm px-7 py-3.5 border-neo bg-brand-white shadow-neo shadow-neo-hover transition-all inline-flex items-center gap-2"
            >
              <GitHubIcon className="w-4.5 h-4.5" />
              GitHub
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          {/* Floating label top */}
          <div className="absolute -top-3 -right-2 z-10 bg-brand-white border-2 border-brand-black px-3.5 py-2 font-heading font-semibold text-xs shadow-neo-sm flex items-center gap-1.5 hidden md:flex">
            <span className="w-2 h-2 bg-green-500" />
            {tr(t.hero.floatTop)}
          </div>

          {/* Screenshot frame */}
          <div className="border-neo shadow-neo-lg bg-brand-black overflow-hidden">
            {/* Pixel scene placeholder */}
            <div className="aspect-[16/10] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative">
              {/* Floor */}
              <div className="absolute bottom-0 w-full h-2/5 pixel-floor" />

              {/* Agents */}
              <div className="absolute bottom-[42%] left-[25%] w-6 h-8 bg-brand-teal border-2 border-brand-black animate-float">
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-500 border border-brand-black" />
              </div>
              <div className="absolute bottom-[42%] left-[55%] w-6 h-8 bg-brand-purple border-2 border-brand-black animate-float-delay-1">
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-purple border border-brand-black" />
              </div>
              <div className="absolute bottom-[42%] left-[75%] w-6 h-8 bg-brand-yellow border-2 border-brand-black animate-float-delay-2">
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-yellow border border-brand-black" />
              </div>

              {/* Desk blocks */}
              <div className="absolute bottom-[30%] left-[22%] w-14 h-4 bg-[#2a2a4a] border border-[#444]" />
              <div className="absolute bottom-[30%] left-[52%] w-14 h-4 bg-[#2a2a4a] border border-[#444]" />
              <div className="absolute bottom-[30%] left-[72%] w-14 h-4 bg-[#2a2a4a] border border-[#444]" />
            </div>
          </div>

          {/* Floating label bottom */}
          <div className="absolute -bottom-3 -left-2 z-10 bg-brand-white border-2 border-brand-black px-3.5 py-2 font-heading font-semibold text-xs shadow-neo-sm hidden md:flex items-center gap-1.5">
            {tr(t.hero.floatBottom)}
          </div>
        </div>
      </div>
    </section>
  );
}
