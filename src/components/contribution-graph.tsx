const WEEKS = 26;
const DAYS = 7;

/** Deterministic pseudo-random intensity so the graph looks alive but is stable across renders. */
function intensity(week: number, day: number) {
  const seed = Math.sin(week * 12.9898 + day * 78.233) * 43758.5453;
  const frac = seed - Math.floor(seed);
  return Math.floor(frac * 5); // 0 - 4
}

const LEVEL_CLASSES = [
  "bg-background-elevated",
  "bg-accent/25",
  "bg-accent/45",
  "bg-accent/70",
  "bg-accent",
];

export function ContributionGraph() {
  const weeks = Array.from({ length: WEEKS }, (_, w) => w);
  const days = Array.from({ length: DAYS }, (_, d) => d);

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px]" style={{ minWidth: WEEKS * 13 }}>
        {weeks.map((w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {days.map((d) => (
              <div
                key={d}
                className={`h-[10px] w-[10px] rounded-[2px] ${LEVEL_CLASSES[intensity(w, d)]}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted">
        <span>Illustrative activity pattern</span>
        <div className="flex items-center gap-1">
          <span>Less</span>
          {LEVEL_CLASSES.map((c) => (
            <span key={c} className={`h-[10px] w-[10px] rounded-[2px] ${c}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
