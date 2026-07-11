// ---------------------------------------------------------------------------
// Central content store for the portfolio.
// Keeping copy + structured data here keeps components presentational and
// makes it trivial to update information without touching markup.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Afzal",
  fullTagline: "Building software that helps people become more disciplined.",
  location: "Uzbekistan",
  status: "Gap year \u00b7 Preparing for university",
  telegram: "https://t.me/afzalto",
  github: "https://github.com/AfzalxonKarimov",
  linkedin: "https://www.linkedin.com/in/afzalxon-karimov",
  resumeHref: "/resume.pdf",
};

export const stats = [
  { label: "GPA", value: "4.0", suffix: "/4.0", detail: "Unweighted" },
  { label: "SAT", value: "1420", suffix: "", detail: "Superscore" },
  { label: "IELTS", value: "7.5", suffix: "/9", detail: "Academic" },
  { label: "CS50", value: "In Progress", suffix: "", detail: "Self-paced" },
] as const;

export const about = {
  eyebrow: "About",
  heading: "From curiosity to craft.",
  paragraphs: [
    "I'm Afzal, a gap-year student from Uzbekistan spending this year preparing to study Computer Science abroad \u2014 and building real things in the meantime instead of waiting for a classroom to start.",
    "I started programming because I wanted to fix a problem no one else was solving for me: staying disciplined after motivation runs out. That question turned into hundreds of hours of building, breaking, and rebuilding \u2014 first small scripts, then a Telegram bot for IELTS students, and now TheAnchor, a mobile app built on the same idea.",
    "I enjoy problems that sit at the intersection of behavior and engineering \u2014 where a good technical decision and a good human decision are the same decision. Debugging a race condition and figuring out why a habit fails scratch the same itch for me.",
    "My goal is to become a software engineer and, eventually, an entrepreneur \u2014 someone who ships products that quietly make people's lives more workable, not just more entertained.",
  ],
} as const;

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  featured: boolean;
  role: string;
  status: string;
  stack: string[];
  features: string[];
  github?: string;
  demo?: string;
  gradient: string; // Tailwind gradient classes used for the card artwork
};

export const projects: Project[] = [
  {
    slug: "the-anchor",
    name: "TheAnchor",
    tagline: "Recovery-first habit tracking for the days motivation runs out.",
    description:
      "Most habit trackers punish a missed day with a broken streak and a guilt trip. TheAnchor is built around the opposite idea: motivation naturally decays between day 3 and day 14, so the app is designed to help people recover momentum instead of resetting it to zero. A consistency score dips when you slip and recovers as you show up again, difficulty adapts to your recent behavior, and accountability duos keep two people quietly checking in on each other.",
    featured: true,
    role: "Designer & Full-stack developer",
    status: "In active development",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
    features: [
      "Time-based daily check-ins instead of rigid streak counting",
      "A consistency score that dips and recovers rather than resets to zero",
      "Identity-based framing \u2014 habits are tied to who you're becoming",
      "Adaptive difficulty that responds to recent behavior",
      "Accountability duos for quiet, mutual check-ins",
      "Account-wide XP and rank progression, from Spark to Forged",
    ],
    github: "https://github.com/AfzalxonKarimov",
    demo: "#",
    gradient: "from-violet-500/25 via-indigo-500/15 to-transparent",
  },
  {
    slug: "ielts-telegram-bot",
    name: "IELTS Prep Bot",
    tagline: "A Telegram bot that gives IELTS students focused daily practice.",
    description:
      "A Telegram bot built for IELTS students preparing for the exam I was preparing for myself. It delivers structured practice \u2014 vocabulary, writing prompts, and listening drills \u2014 directly in a chat interface students already check every day, removing the friction of a separate app or website.",
    featured: false,
    role: "Solo developer",
    status: "Shipped",
    stack: ["Python", "Telegram Bot API", "PostgreSQL"],
    features: [
      "Daily practice prompts across reading, writing and listening",
      "Progress tracking per student inside the chat",
      "Zero-install distribution through Telegram",
    ],
    github: "https://github.com/AfzalxonKarimov",
    gradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
  },
];

export type TechItem = {
  name: string;
  category: "Frontend" | "Mobile" | "Backend" | "Tooling";
};

export const techStack: TechItem[] = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "Expo", category: "Mobile" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Git", category: "Tooling" },
  { name: "GitHub", category: "Tooling" },
  { name: "VS Code", category: "Tooling" },
];

export type JourneyItem = {
  date: string;
  title: string;
  description: string;
  active?: boolean;
};

export const journey: JourneyItem[] = [
  {
    date: "Year 1",
    title: "Started programming",
    description:
      "Picked up my first language out of curiosity, not obligation \u2014 and kept going long after the tutorial ended.",
  },
  {
    date: "Year 1\u20132",
    title: "Completed CS50",
    description:
      "Worked through Harvard's CS50 end to end, from C to Python to web \u2014 the course that turned curiosity into a real foundation.",
  },
  {
    date: "Year 2",
    title: "Built the IELTS Telegram bot",
    description:
      "Shipped my first real product for real users: a Telegram bot that helped fellow students practice for the exam I was studying for.",
  },
  {
    date: "Now",
    title: "Building TheAnchor",
    description:
      "Designing and building a cross-platform habit app end to end \u2014 product thinking, mobile engineering, and a real backend.",
    active: true,
  },
  {
    date: "Next",
    title: "Preparing for university",
    description:
      "Applying to study Computer Science abroad, with a portfolio of shipped work instead of just a transcript.",
  },
];

export const contactLinks = [
  { label: "Telegram", value: "@afzalto", href: profile.telegram },
  { label: "GitHub", value: "AfzalxonKarimov", href: profile.github },
  { label: "LinkedIn", value: "afzalxon-karimov", href: profile.linkedin },
] as const;
