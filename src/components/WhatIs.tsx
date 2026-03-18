"use client";

import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/i18n";
import Image from "next/image";

export default function WhatIs() {
  const { t } = useLang();

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <span className="inline-block font-heading font-semibold text-xs uppercase tracking-widest text-brand-teal mb-3">
              {t(translations.about.label)}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight mb-5">
              {t(translations.about.title)}
            </h2>
            <p className="text-lg text-brand-gray leading-relaxed">
              {t(translations.about.text)}
            </p>
          </div>

          {/* Right column - Screenshot */}
          <div className="border-neo shadow-neo-lg overflow-hidden">
            <Image
              src="https://raw.githubusercontent.com/fwartner/agent-office/main/assets/readme/virtual-office-screenshot.jpg"
              alt="Agent Office Screenshot"
              width={800}
              height={500}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
