# Afzal — Portfolio

A premium, minimal personal portfolio built with Next.js 15, TypeScript,
Tailwind CSS v4, Framer Motion, and shadcn/ui-style components. Dark mode by
default, fully responsive, and built to ship.

## Stack

- **Next.js 15** (App Router, React 19, Server Components)
- **TypeScript** everywhere
- **Tailwind CSS v4** (CSS-based `@theme` token system in `globals.css`)
- **Framer Motion** for scroll reveals, hover states, and page-load motion
- **shadcn/ui-style primitives** (`Button`, `Badge`, `Card`, `Separator`) built
  on Radix UI, owned directly in `src/components/ui`
- **lucide-react** + **react-icons** for iconography
- Live **GitHub REST API** integration for the GitHub Statistics section

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
src/
  app/
    layout.tsx          # Root layout, fonts, SEO metadata, JSON-LD
    page.tsx             # Assembles all sections
    globals.css           # Design tokens (colors, radii, animations)
    sitemap.ts             # Dynamic sitemap.xml
    robots.ts               # Dynamic robots.txt
    opengraph-image.tsx      # Dynamically generated OG/share image
    not-found.tsx              # Custom 404 page
  components/
    sections/            # One file per homepage section
    ui/                    # Reusable shadcn-style primitives
    reveal.tsx               # Scroll-reveal animation wrapper
    gradient-mesh.tsx         # Ambient hero background
    project-mockup.tsx         # Abstract phone-mockup placeholder
    contribution-graph.tsx      # Illustrative contribution graph
  lib/
    data.ts               # All copy + structured content (single source of truth)
    github.ts               # GitHub REST API fetcher with graceful fallback
    utils.ts                  # `cn()` class-merging helper
public/
  resume.pdf              # Generated resume (see "Customizing" below)
```

## Customizing

Everything content-related lives in **`src/lib/data.ts`** — update your name,
stats, projects, tech stack, timeline and contact links there and the whole
site updates.

1. **GitHub username** — change `GITHUB_USERNAME` in `src/lib/github.ts`.
2. **Resume** — replace `public/resume.pdf` with your own file.
3. **Contact links / email** — edit `profile` and `contactLinks` in `data.ts`.
4. **Colors** — the entire palette is defined as CSS variables at the top of
   `src/app/globals.css` under `:root`. Change `--accent` / `--accent-2` to
   re-theme the whole site (buttons, gradients, glows, links all derive from
   these two tokens).
5. **Site URL** — update `SITE_URL` in `src/app/layout.tsx`,
   `src/app/sitemap.ts`, and `src/app/robots.ts` to your real domain before
   deploying.

## Performance

- Server Components by default; motion/interactive pieces are isolated into
  small `"use client"` leaves.
- Fonts are self-hosted via the `geist` package (no external font requests).
- The GitHub section fetches server-side with a 1 hour revalidation window,
  so it's cached and fast without going stale for long.
- Reduced motion is respected globally (`prefers-reduced-motion`).

## Building for production

```bash
npm run build
npm run start
```

The project has been verified to build cleanly with `tsc --noEmit`,
`eslint`, and `next build` with zero errors or warnings.

## Deploying

This is a standard Next.js 15 app — deploy it to Vercel (zero config), or any
Node host that supports `next start`. No environment variables are required.
