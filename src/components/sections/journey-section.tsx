"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { journey } from "@/lib/data";
import { cn } from "@/lib/utils";

export function JourneySection() {
  return (
    <section id="journey" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Learning Journey"
          title="How I got here."
          description="A real timeline, not a highlight reel — each step led directly to the next."
        />

        <div className="relative mt-16 pl-8 sm:pl-10">
          {/* Vertical rail with animated fill, standing in for the "recovery"
              momentum idea that runs through TheAnchor itself. */}
          <div className="absolute left-[7px] top-1 bottom-1 w-px bg-border sm:left-[11px]" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[7px] top-1 bottom-1 w-px bg-accent sm:left-[11px]"
          />

          <ol className="space-y-12">
            {journey.map((step) => (
              <Reveal key={step.title} y={14}>
                <li className="relative">
                  <span
                    className={cn(
                      "absolute -left-8 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 sm:-left-10 sm:h-5 sm:w-5",
                      step.active
                        ? "border-accent bg-background"
                        : "border-border-strong bg-background-elevated"
                    )}
                  >
                    {step.active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
                    )}
                  </span>

                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    {step.date}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
