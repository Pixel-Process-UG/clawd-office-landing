"use client";

import { useLang } from "@/context/LangContext";
import { translations as t } from "@/lib/i18n";

const techs = [
  { name: "React 18", color: "bg-[#61dafb]" },
  { name: "TypeScript 5.6", color: "bg-[#3178c6]" },
  { name: "Vite 5", color: "bg-[#646cff]" },
  { name: "Node.js", color: "bg-[#339933]" },
  { name: "PostgreSQL", color: "bg-[#336791]" },
];

export default function TechStack() {
  const { t: tr } = useLang();

  return (
    <section className="py-20" id="tech">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-heading font-semibold text-xs uppercase tracking-widest text-brand-teal mb-3">
            {tr(t.tech.label)}
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight mb-4">
            {tr(t.tech.title)}
          </h2>
          <p className="text-brand-gray font-light">{tr(t.tech.sub)}</p>
        </div>

        <div className="flex justify-center flex-wrap gap-5">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="font-heading font-semibold text-sm px-6 py-3 border-neo bg-brand-white shadow-neo-sm flex items-center gap-2"
            >
              <span className={`w-2.5 h-2.5 ${tech.color}`} />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
