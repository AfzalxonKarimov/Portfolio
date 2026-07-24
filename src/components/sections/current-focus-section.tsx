import { Anchor, GraduationCap, Braces } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { currentFocus } from "@/lib/data";

const ICONS = [Anchor, GraduationCap, Braces];

export function CurrentFocusSection() {
  return (
    <section
      id="focus"
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Right now"
          title="What I'm focused on."
          description="No fixed job, no fixed classroom this year — just three things I'm actually spending my time on."
        />

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-3">
          {currentFocus.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <RevealItem
                key={item.title}
                className="flex flex-col rounded-2xl border border-border bg-background-elevated/40 p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-accent">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-medium tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
