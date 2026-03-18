"use client";

import { useLang } from "@/context/LangContext";
import { translations as t } from "@/lib/i18n";

const colorMap = {
  teal: "bg-brand-teal",
  purple: "bg-brand-purple",
  yellow: "bg-brand-yellow",
} as const;

export default function Features() {
  const { t: tr } = useLang();

  return (
    <section className="py-20 bg-brand-black text-brand-white" id="features">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-heading font-semibold text-xs uppercase tracking-widest text-brand-yellow mb-3">
            {tr(t.features.label)}
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight">
            {tr(t.features.title)}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((item, i) => (
            <div
              key={i}
              className="border-2 border-[#333] bg-brand-dark p-8 transition-all hover:border-brand-teal group"
            >
              {/* Pixel icon */}
              <div
                className={`w-12 h-12 ${colorMap[item.color]} border-2 border-brand-black mb-5`}
              />
              <h3 className="font-heading font-bold text-lg mb-2.5">
                {tr(item.title)}
              </h3>
              <p className="text-sm text-[#999] leading-relaxed font-light">
                {tr(item.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
