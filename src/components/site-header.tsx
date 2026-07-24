"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#focus", label: "Focus" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#journey", label: "Journey" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-colors duration-300 sm:px-5",
          scrolled
            ? "border-border bg-background/70 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.03)]"
            : "border-transparent bg-transparent"
        )}
      >
        <a
          href="#top"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground font-mono text-sm font-semibold text-background"
        >
          AZ
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm" variant="outline">
          <a href="#contact">Contact me</a>
        </Button>
      </div>
    </motion.header>
  );
}
