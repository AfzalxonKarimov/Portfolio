/**
 * Quiet ambient backdrop: a faint dot grid (a nod to the ledger/graph-paper
 * feel of tracking days) fading toward the page edges, plus one restrained
 * wash of the brass accent low in the frame. No glowing orbs, no motion --
 * the consistency strip carries the hero's energy, this just sets the room.
 */
export function LedgerField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={
        "pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_top,black,transparent_78%)] " +
        (className ?? "")
      }
    >
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(242,239,233,0.05)_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="absolute -top-24 right-[8%] h-[24rem] w-[24rem] rounded-full bg-accent/[0.06] blur-[140px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background)_96%)]" />
    </div>
  );
}
