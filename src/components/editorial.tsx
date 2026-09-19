/**
 * Building blocks of the editorial theme, taken from the reference deck:
 * numbered "Part." headings, a letter monogram cut by a thin diagonal line,
 * and flat colour blocks used as small accents.
 */

export const blockColors = ["bg-blue", "bg-green", "bg-mustard", "bg-orange"] as const;

/** "Part. 01" — a big numeral with a small label beside it. */
export function PartHeading({ n, title }: { n: number; title: string }) {
  return (
    <div className="flex items-end gap-4 border-b border-border pb-3">
      <span className="flex items-baseline gap-1.5">
        <span className="font-display text-sm font-bold">Part.</span>
        <span className="font-display text-5xl font-extrabold leading-none tracking-tight">
          {String(n).padStart(2, "0")}
        </span>
      </span>
      <h2 className="pb-1 font-serif text-lg italic text-muted">{title}</h2>
    </div>
  );
}

/** A single letter with a thin diagonal hairline through its corner. */
export function Monogram({ letter }: { letter: string }) {
  return (
    <span aria-hidden="true" className="relative inline-block h-7 w-7">
      <span className="absolute left-0 top-0 font-display text-sm font-bold leading-none">
        {letter}
      </span>
      <span className="absolute bottom-1 left-0 h-px w-8 origin-left -rotate-45 bg-foreground/50" />
    </span>
  );
}

/** A row of the four accent colours as small flat blocks. */
export function ColorBlocks({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`flex gap-1.5 ${className}`}>
      {blockColors.map((color) => (
        <span key={color} className={`h-3 w-5 ${color}`} />
      ))}
    </span>
  );
}
