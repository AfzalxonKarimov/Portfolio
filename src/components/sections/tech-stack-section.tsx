"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiExpo,
  SiSupabase,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { techStack } from "@/lib/data";

const ICONS: Record<string, IconType> = {
  React: SiReact,
  "React Native": SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Expo: SiExpo,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": VscVscode,
};

export function TechStackSection() {
  return (
    <section id="stack" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I build with."
          description="The languages, frameworks and tools behind everything on this page."
        />

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {techStack.map((tech) => {
            const Icon = ICONS[tech.name];
            return (
              <RevealItem key={tech.name}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-background-elevated/40 px-4 py-7 text-center transition-colors hover:border-border-strong hover:bg-background-elevated"
                >
                  <Icon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{tech.name}</p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                      {tech.category}
                    </p>
                  </div>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
