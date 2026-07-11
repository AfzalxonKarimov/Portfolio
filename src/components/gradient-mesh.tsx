export function GradientMesh({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={
        "pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)] " +
        (className ?? "")
      }
    >
      <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] animate-float rounded-full bg-accent/25 blur-[120px]" />
      <div
        className="absolute -top-24 left-[10%] h-[28rem] w-[28rem] animate-float rounded-full bg-accent-2/20 blur-[110px]"
        style={{ animationDelay: "-4s" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background)_95%)]" />
    </div>
  );
}
