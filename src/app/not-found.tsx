import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
        The link might be broken, or the page may have moved. Let&apos;s get
        you back on track.
      </p>
      <Button variant="accent" size="lg" className="mt-8" asChild>
        <Link href="/">Back to homepage</Link>
      </Button>
    </div>
  );
}
