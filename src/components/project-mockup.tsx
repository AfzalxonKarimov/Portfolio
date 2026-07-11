import { cn } from "@/lib/utils";

/**
 * A stylised phone-frame placeholder standing in for real product screenshots.
 * Built from shapes/gradients (never a stock photo or invented UI text) so it
 * reads as an intentional design artifact rather than a broken image.
 */
export function ProjectMockup({
  gradient,
  className,
}: {
  gradient: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-background",
        className
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", gradient)} />
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:18px_18px]" />

      {/* Phone frame */}
      <div className="relative z-10 h-56 w-32 rounded-[1.4rem] border border-white/10 bg-background-elevated/90 shadow-2xl backdrop-blur sm:h-64 sm:w-36">
        <div className="absolute left-1/2 top-2.5 h-1 w-8 -translate-x-1/2 rounded-full bg-white/10" />
        <div className="flex h-full flex-col gap-2 p-3 pt-6">
          <div className="h-2 w-14 rounded-full bg-white/15" />
          <div className="mt-1 h-16 w-full rounded-lg bg-white/10" />
          <div className="h-2 w-full rounded-full bg-white/10" />
          <div className="h-2 w-3/4 rounded-full bg-white/10" />
          <div className="mt-auto flex gap-2">
            <div className="h-8 flex-1 rounded-lg bg-white/15" />
            <div className="h-8 w-8 rounded-lg bg-white/10" />
          </div>
        </div>
      </div>

      <span className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-widest text-white/40">
        Preview
      </span>
    </div>
  );
}
