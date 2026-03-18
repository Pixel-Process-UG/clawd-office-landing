"use client";

import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/i18n";

const presenceColors = [
  "var(--color-presence-active)",
  "var(--color-presence-available)",
  "var(--color-presence-meeting)",
  "var(--color-presence-paused)",
  "var(--color-presence-blocked)",
  "var(--color-presence-off)",
];

export default function PresenceStates() {
  const { t } = useLang();

  return (
    <section className="bg-brand-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight mb-4">
            {t(translations.presence.title)}
          </h2>
          <p className="text-gray-400">
            {t(translations.presence.sub)}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {translations.presence.states.map((state, i) => (
            <div
              key={i}
              className="bg-brand-card-dark p-4 border-l-[3px]"
              style={{ borderColor: presenceColors[i] }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: presenceColors[i] }}
                />
                <span
                  className="font-bold text-sm"
                  style={{ color: presenceColors[i] }}
                >
                  {t(state.name)}
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                {t(state.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
