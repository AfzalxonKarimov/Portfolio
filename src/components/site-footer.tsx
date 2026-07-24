import { profile } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p className="font-mono text-xs">
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js
          &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          Available for opportunities
        </div>
      </div>
    </footer>
  );
}
