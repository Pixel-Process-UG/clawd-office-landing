"use client";

import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/i18n";

const techs = [
  { name: "React 18", color: "#61dafb" },
  { name: "TypeScript 5.6", color: "#3178c6" },
  { name: "Vite 5", color: "#646cff" },
  { name: "Node.js", color: "#68a063" },
  { name: "PostgreSQL", color: "#336791" },
];

export default function TechStack() {
  const { t } = useLang();

  return (
    <section id="tech" className="bg-brand-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight">
            {t(translations.tech.title)}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="border-2 border-gray-700 px-4 py-2 text-sm text-white flex items-center gap-2"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: tech.color }}
              />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
