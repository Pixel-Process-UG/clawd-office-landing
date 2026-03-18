"use client";

import { useLang } from "@/context/LangContext";
import { translations as t } from "@/lib/i18n";

export default function Quickstart() {
  const { t: tr } = useLang();

  return (
    <section className="py-20 bg-brand-black text-brand-white" id="start">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-heading font-semibold text-xs uppercase tracking-widest text-brand-yellow mb-3">
            {tr(t.quickstart.label)}
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight">
            {tr(t.quickstart.title)}
          </h2>
        </div>

        {/* Terminal box */}
        <div className="max-w-2xl mx-auto border-neo bg-[#111] shadow-neo-lg overflow-hidden">
          {/* Terminal header */}
          <div className="bg-brand-dark px-4 py-3 border-b-2 border-[#333] flex items-center gap-2">
            <span className="w-3 h-3 border border-[#333] bg-[#ff5f57]" />
            <span className="w-3 h-3 border border-[#333] bg-[#ffbd2e]" />
            <span className="w-3 h-3 border border-[#333] bg-[#28c840]" />
            <span className="ml-2 font-heading font-semibold text-xs text-[#888]">
              Terminal
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 font-mono text-sm leading-8 text-[#e0e0e0]">
            <span className="text-[#555]"># Clone &amp; install</span>
            <br />
            <span className="text-brand-teal">$</span> git clone
            https://github.com/fwartner/clawd-office.git
            <br />
            <span className="text-brand-teal">$</span> cd clawd-office &amp;&amp;
            npm install
            <br />
            <br />
            <span className="text-[#555]"># Start dev server</span>
            <br />
            <span className="text-brand-teal">$</span> npm run dev
            <br />
            <br />
            <span className="text-[#555]">{tr(t.quickstart.comment)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
