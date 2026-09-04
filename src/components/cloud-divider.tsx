/**
 * Layered wave band above the footer. Kept to a faint neutral lavender so it
 * reads as a soft edge rather than a colour wash.
 */
export function CloudDivider() {
  return (
    <div aria-hidden="true" className="relative h-14 w-full overflow-hidden">
      <svg
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0 120 Q 90 60 180 100 T 360 96 Q 450 40 560 88 T 780 92 Q 880 44 990 92 T 1200 104 L1200 160 L0 160 Z"
          className="fill-accent opacity-[0.06]"
        />
        <path
          d="M0 134 Q 120 88 240 122 T 470 118 Q 590 74 700 118 T 940 120 Q 1060 86 1200 126 L1200 160 L0 160 Z"
          className="fill-accent opacity-[0.08]"
        />
        <path
          d="M0 148 Q 150 116 300 142 T 620 140 Q 780 108 920 142 T 1200 146 L1200 160 L0 160 Z"
          className="fill-accent opacity-[0.1]"
        />
      </svg>
    </div>
  );
}
