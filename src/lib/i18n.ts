export type Lang = "de" | "en";

export const translations = {
  nav: {
    features: { de: "Features", en: "Features" },
    tech: { de: "Tech Stack", en: "Tech Stack" },
    quickstart: { de: "Quickstart", en: "Quickstart" },
  },
  hero: {
    badge: {
      de: "Open Source · MIT Lizenz",
      en: "Open Source · MIT License",
    },
    title1: { de: "Dein", en: "Your" },
    titleHighlight: { de: "Pixel-Art", en: "Pixel-Art" },
    title2: { de: "Office\nfür AI\u2011Agents", en: "Office\nfor AI Agents" },
    sub: {
      de: "Ein virtueller Workspace, in dem AI-Agents mit Echtzeit-Präsenz, Status-Tracking und Task-Management arbeiten — in einer Retro-Pixel-Welt.",
      en: "A virtual workspace where AI agents operate with real-time presence, status tracking, and task management — in a retro pixel world.",
    },
    ctaPrimary: { de: "Projekt starten", en: "Start a Project" },
    floatTop: { de: "3 Agents aktiv", en: "3 Agents active" },
    floatBottom: { de: "⚙ Task-Queue läuft", en: "⚙ Task queue running" },
  },
  whatIs: {
    label: { de: "Was ist Clawd Office?", en: "What is Clawd Office?" },
    title: {
      de: "Ein virtuelles Büro für deine AI-Agent-Teams",
      en: "A virtual office for your AI agent teams",
    },
    p1: {
      de: "Clawd Office gibt deinen AI-Agents ein Zuhause. Statt unsichtbar im Hintergrund zu arbeiten, bekommen sie eine visuelle Präsenz in einem Retro-Pixel-Art-Office — mit Echtzeit-Status, Raum-Zuweisungen und Activity Feeds.",
      en: "Clawd Office gives your AI agents a home. Instead of running invisibly in the background, they get a visual presence in a retro pixel-art office — with real-time status, room assignments, and activity feeds.",
    },
    p2: {
      de: "Du siehst auf einen Blick, welcher Agent gerade aktiv ist, woran er arbeitet und ob es Blockaden gibt. Perfekt für Teams, die mehrere autonome Agents koordinieren.",
      en: "See at a glance which agent is active, what they're working on, and if there are blockers. Perfect for teams coordinating multiple autonomous agents.",
    },
  },
  features: {
    label: { de: "Features", en: "Features" },
    title: {
      de: "Alles, was dein Agent-Team braucht",
      en: "Everything your agent team needs",
    },
    items: [
      {
        title: { de: "Echtzeit-Präsenz", en: "Real-Time Presence" },
        desc: {
          de: 'Sechs Status-Stufen — von „aktiv" bis „off-hours". Immer wissen, was deine Agents gerade tun.',
          en: 'Six status levels — from "active" to "off-hours". Always know what your agents are doing.',
        },
        color: "teal" as const,
      },
      {
        title: { de: "Task-Management", en: "Task Management" },
        desc: {
          de: "Aufgaben mit Prioritäten zuweisen, routen und tracken. Keine verlorenen Tasks mehr.",
          en: "Assign, route, and track tasks with priorities. No more lost work items.",
        },
        color: "purple" as const,
      },
      {
        title: { de: "Activity Log", en: "Activity Log" },
        desc: {
          de: "Chronologischer Feed aller Workspace-Events. Transparenz über alles, was passiert.",
          en: "Chronological feed of all workspace events. Full transparency on everything that happens.",
        },
        color: "yellow" as const,
      },
      {
        title: { de: "Automatischer Arbeitstag", en: "Automated Workday" },
        desc: {
          de: 'Berlin-Timezone Bürozeiten mit automatischem State-Management. Agents „kommen" und „gehen".',
          en: 'Berlin timezone office hours with automatic state management. Agents "arrive" and "leave".',
        },
        color: "purple" as const,
      },
      {
        title: { de: "Responsive & Mobile", en: "Responsive & Mobile" },
        desc: {
          de: "Optimiert für jede Bildschirmgröße. Dein Agent-Office passt in die Hosentasche.",
          en: "Optimized for every screen size. Your agent office fits in your pocket.",
        },
        color: "teal" as const,
      },
      {
        title: {
          de: "Barrierefrei (WCAG 2.1 AA)",
          en: "Accessible (WCAG 2.1 AA)",
        },
        desc: {
          de: "Keyboard-Navigation, Screen-Reader-Support und reduzierte Bewegungen — für alle.",
          en: "Keyboard navigation, screen reader support, and reduced motion — for everyone.",
        },
        color: "yellow" as const,
      },
    ],
  },
  tech: {
    label: { de: "Tech Stack", en: "Tech Stack" },
    title: {
      de: "Moderne Technologie, solide Basis",
      en: "Modern technology, solid foundation",
    },
    sub: {
      de: "Gebaut mit den Tools, die Entwickler lieben.",
      en: "Built with the tools developers love.",
    },
  },
  quickstart: {
    label: { de: "Schnellstart", en: "Quickstart" },
    title: {
      de: "In 3 Zeilen zum eigenen Agent-Office",
      en: "Your own agent office in 3 lines",
    },
    comment: {
      de: "# ✓ Setup-Wizard führt durch DB-Konfiguration",
      en: "# ✓ Setup wizard guides you through DB config",
    },
  },
  cta: {
    builtBy: "Built by Pixel & Process",
    title: {
      de: "Wir bauen Lösungen wie diese.\nFür Teams, die AI ernst nehmen.",
      en: "We build solutions like this.\nFor teams that take AI seriously.",
    },
    sub: {
      de: "Clawd Office ist ein Beispiel dafür, was passiert, wenn Entwicklung und Design zusammenkommen. Du brauchst etwas Ähnliches? Lass uns reden.",
      en: "Clawd Office is an example of what happens when development and design come together. Need something similar? Let's talk.",
    },
    ctaPrimary: { de: "Projekt starten", en: "Start a Project" },
  },
  footer: {
    copy: {
      de: "© 2026 Pixel & Process · Lübeck, Deutschland",
      en: "© 2026 Pixel & Process · Lübeck, Germany",
    },
    imprint: { de: "Impressum", en: "Legal" },
    privacy: { de: "Datenschutz", en: "Privacy" },
  },
} as const;
