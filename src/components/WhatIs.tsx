"use client";

import { useLang } from "@/context/LangContext";
import { translations as t } from "@/lib/i18n";

export default function WhatIs() {
  const { t: tr } = useLang();

  return (
    <section className="py-20" id="about">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-heading font-semibold text-xs uppercase tracking-widest text-brand-teal mb-3">
            {tr(t.whatIs.label)}
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight">
            {tr(t.whatIs.title)}
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-lg leading-relaxed space-y-4">
            <p>{tr(t.whatIs.p1)}</p>
            <p>{tr(t.whatIs.p2)}</p>
          </div>
          <div className="border-neo shadow-neo-lg overflow-hidden bg-[#111]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://raw.githubusercontent.com/fwartner/clawd-office/main/assets/readme/virtual-office-screenshot.jpg"
              alt="Clawd Office Screenshot"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
