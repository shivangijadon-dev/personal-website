/**
 * Layered pastel cloud band — the soft transition motif from the reference
 * designs, kept low-contrast so it reads as atmosphere rather than decoration.
 */
export function CloudDivider() {
  return (
    <div aria-hidden="true" className="relative h-20 w-full overflow-hidden">
      <svg
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0 120 Q 90 60 180 100 T 360 96 Q 450 40 560 88 T 780 92 Q 880 44 990 92 T 1200 104 L1200 160 L0 160 Z"
          className="fill-peach opacity-35"
        />
        <path
          d="M0 134 Q 120 88 240 122 T 470 118 Q 590 74 700 118 T 940 120 Q 1060 86 1200 126 L1200 160 L0 160 Z"
          className="fill-blush opacity-30"
        />
        <path
          d="M0 148 Q 150 116 300 142 T 620 140 Q 780 108 920 142 T 1200 146 L1200 160 L0 160 Z"
          className="fill-accent opacity-20"
        />
      </svg>
    </div>
  );
}
