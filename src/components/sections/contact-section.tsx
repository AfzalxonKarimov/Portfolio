import { FileDown, ArrowUpRight } from "lucide-react";
import { SiGithub, SiTelegram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { LedgerField } from "@/components/ledger-field";
import { profile, contactLinks } from "@/lib/data";

const ICONS = {
  Telegram: SiTelegram,
  GitHub: SiGithub,
  LinkedIn: FaLinkedin,
} as const;

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-24 sm:py-32">
      <LedgerField className="opacity-70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth shipping."
          description="Open to internships, collaborations, and conversations about software, discipline, and everything in between."
        />

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = ICONS[link.label as keyof typeof ICONS];
            return (
              <RevealItem key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-background-elevated/40 p-5 transition-colors hover:border-border-strong hover:bg-background-elevated"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="text-sm font-medium text-foreground">{link.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </a>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-8 flex flex-col items-center gap-5 rounded-2xl border border-border bg-background-elevated/40 p-8 text-center sm:p-10">
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Prefer a document? Grab a copy of my resume with my full academic
            and project background.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href={profile.resumeHref} download>
              <FileDown />
              Download resume
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
