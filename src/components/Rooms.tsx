"use client";

import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/i18n";

export default function Rooms() {
  const { t } = useLang();

  return (
    <section id="rooms" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight mb-4">
            {t(translations.rooms.title)}
          </h2>
          <p className="text-brand-gray">
            {t(translations.rooms.sub)}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {translations.rooms.items.map((room, i) => (
            <div
              key={i}
              className="border-neo shadow-neo-sm bg-white text-center p-4 hover:shadow-neo-sm-hover transition-all"
            >
              <div className="text-2xl mb-2">{room.icon}</div>
              <div className="font-bold text-sm">{t(room.name)}</div>
              <div className="text-xs text-brand-gray">{t(room.team)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
