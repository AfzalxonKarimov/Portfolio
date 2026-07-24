"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LedgerField } from "@/components/ledger-field";
import { ConsistencyStrip } from "@/components/consistency-strip";
import { stats, profile } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <LedgerField />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative mx-auto max-w-6xl px-6"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.status}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 max-w-3xl text-balance font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
        >
          Building software that helps people become{" "}
          <span className="ink-accent">more disciplined.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          I&apos;m {profile.name} — a gap-year student from Uzbekistan preparing
          to study Computer Science abroad, and spending this year building
          real products instead of waiting for permission to start.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <Button variant="accent" size="lg" asChild>
            <a href="#projects">
              View Projects
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              Contact Me
              <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </motion.div>

        {/* Signature element: a literal day-by-day consistency curve -- dips
            on a slip, climbs back on recovery -- echoing the exact mechanic
            TheAnchor is built around, rather than a decorative dashboard. */}
        <motion.div variants={item} className="mt-20 border-t border-border pt-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Consistency score — a slip, then a recovery
              </p>
              <ConsistencyStrip className="mt-4 h-14 sm:h-16" />
            </div>

            <dl className="grid grid-cols-2 gap-x-8 gap-y-5 sm:flex sm:gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 flex items-baseline gap-1">
                    <span className="font-display text-xl font-medium tracking-tight text-foreground">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="text-sm text-muted-foreground">{stat.suffix}</span>
                    )}
                  </dd>
                  <span className="text-xs text-muted-foreground">{stat.detail}</span>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
