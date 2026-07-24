"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectMockup } from "@/components/project-mockup";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've shipped."
          description="A small, honest list — what each project is, what it's built with, and how it works."
        />

        <div className="mt-14 space-y-8">
          {/* Featured project -- larger card */}
          <Reveal>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group grid gap-8 rounded-3xl border border-border bg-background-elevated/40 p-6 transition-colors hover:border-border-strong sm:p-8 lg:grid-cols-[1fr_1.2fr]"
            >
              <ProjectMockup gradient={featured.gradient} className="lg:order-2" />

              <div className="flex flex-col lg:order-1">
                <div className="flex items-center gap-2">
                  <Badge variant="accent">Featured</Badge>
                  <Badge variant="mono">{featured.status}</Badge>
                </div>

                <h3 className="mt-4 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                  {featured.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {featured.tagline}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {featured.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  {featured.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={featured.github} target="_blank" rel="noreferrer">
                        <SiGithub />
                        View code
                      </a>
                    </Button>
                  )}
                  {featured.demo && (
                    <Button variant="accent" size="sm" asChild>
                      <a href={featured.demo} target="_blank" rel="noreferrer">
                        Live demo
                        <ExternalLink />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          </Reveal>

          {/* Secondary projects */}
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.slug} delay={0.05 * i}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-full flex-col rounded-2xl border border-border bg-background-elevated/40 p-6 transition-colors hover:border-border-strong"
                >
                  <div className="flex items-center gap-2">
                    <Badge variant="mono">{project.status}</Badge>
                  </div>
                  <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {project.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <SiGithub />
                          View code
                        </a>
                      </Button>
                    )}
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
