import { Star, GitFork, BookMarked } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { ContributionGraph } from "@/components/contribution-graph";
import { getGithubData, GITHUB_USERNAME } from "@/lib/github";

export async function GithubSection() {
  const { profile, repos } = await getGithubData();

  const statCards = [
    {
      label: "Public repositories",
      value: profile?.public_repos ?? "\u2014",
      icon: BookMarked,
    },
    { label: "Followers", value: profile?.followers ?? "\u2014", icon: Star },
    { label: "Following", value: profile?.following ?? "\u2014", icon: GitFork },
  ];

  return (
    <section id="github" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="GitHub"
            title="Open-source footprint."
            description="Live stats pulled directly from GitHub."
          />
          <Button variant="outline" size="sm" asChild>
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer">
              <SiGithub />
              @{GITHUB_USERNAME}
            </a>
          </Button>
        </div>

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-3">
          {statCards.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-background-elevated/40 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-medium tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-6 rounded-2xl border border-border bg-background-elevated/40 p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
            Contribution activity
          </p>
          <div className="mt-5">
            <ContributionGraph />
          </div>
        </Reveal>

        {repos.length > 0 && (
          <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.slice(0, 6).map((repo) => (
              <RevealItem key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-background-elevated/40 p-5 transition-colors hover:border-border-strong hover:bg-background-elevated"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="truncate text-sm font-medium text-foreground group-hover:text-accent">
                      {repo.name}
                    </h3>
                    <span className="flex shrink-0 items-center gap-1 font-mono text-xs text-muted-foreground">
                      <Star className="h-3 w-3" />
                      {repo.stargazers_count}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {repo.description ?? "No description provided."}
                  </p>
                  {repo.language && (
                    <span className="mt-4 inline-flex w-fit items-center gap-1.5 font-mono text-[11px] text-muted">
                      <span className="h-2 w-2 rounded-full bg-accent-2" />
                      {repo.language}
                    </span>
                  )}
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        )}
      </div>
    </section>
  );
}
