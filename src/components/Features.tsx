"use client";

import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/i18n";

const colorMap = {
  teal: "bg-brand-teal",
  purple: "bg-brand-purple",
  yellow: "bg-brand-yellow",
} as const;

export default function Features() {
  const { t } = useLang();

  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight">
            {t(translations.features.title)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {translations.features.items.map((item, i) => (
            <div
              key={i}
              className="border-neo shadow-neo bg-white p-5 hover:shadow-neo-hover transition-all"
            >
              <div
                className={`w-4 h-4 border-2 border-brand-black mb-3 ${colorMap[item.color]}`}
              />
              <h3 className="font-bold mb-1">{t(item.title)}</h3>
              <p className="text-sm text-brand-gray">{t(item.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
