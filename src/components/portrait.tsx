import Image from "next/image";

/**
 * To use your own photo: drop the file into `public/` (for example
 * `public/me.jpg`), then set PORTRAIT_SRC to "/me.jpg".
 * Leave it null to keep the pastel placeholder.
 */
const PORTRAIT_SRC: string | null = null;

export function Portrait() {
  return (
    <div className="relative shrink-0">
      {/* Soft halo behind the portrait */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-full bg-gradient-to-br from-peach via-blush to-accent opacity-40 blur-2xl"
      />
      <div className="relative h-52 w-52 overflow-hidden rounded-full border border-border shadow-soft sm:h-60 sm:w-60">
        {PORTRAIT_SRC ? (
          <Image
            src={PORTRAIT_SRC}
            alt="Shivangi Jadon"
            fill
            sizes="240px"
            className="object-cover"
            priority
          />
        ) : (
          <PortraitPlaceholder />
        )}
      </div>
    </div>
  );
}

function PortraitPlaceholder() {
  return (
    <svg
      viewBox="0 0 240 240"
      className="h-full w-full"
      role="img"
      aria-label="Portrait placeholder"
    >
      <defs>
        <linearGradient id="portrait-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--peach)" />
          <stop offset="55%" stopColor="var(--blush)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <rect width="240" height="240" fill="url(#portrait-bg)" />
      <circle cx="120" cy="96" r="38" fill="white" fillOpacity="0.6" />
      <path
        d="M50 226c0-40 31-68 70-68s70 28 70 68z"
        fill="white"
        fillOpacity="0.6"
      />
    </svg>
  );
}
