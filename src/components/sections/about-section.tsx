import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { about, stats } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow={about.eyebrow} title={about.heading} />
            <div className="mt-8 space-y-5">
              {about.paragraphs.map((paragraph, i) => (
                <Reveal key={paragraph.slice(0, 24)} delay={0.05 * i}>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-background-elevated/60 p-7">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                Quick facts
              </p>
              <RevealGroup className="mt-5 divide-y divide-border">
                {stats.map((stat) => (
                  <RevealItem key={stat.label} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
                    <span className="text-sm text-muted-foreground">{stat.detail}</span>
                    <span className="font-mono text-sm font-medium text-foreground">
                      {stat.value}
                      {stat.suffix}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>

              <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                Currently based in{" "}
                <span className="text-foreground">Uzbekistan</span>, spending
                a gap year building before starting a Computer Science
                degree abroad.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
