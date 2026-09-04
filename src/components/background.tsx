/**
 * Ambient pastel orbs — the soft peach/lavender/blush wash behind everything.
 * Fixed and non-interactive so it drifts under content on every page.
 */
export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ opacity: "var(--orb-opacity)" }}
    >
      <div className="absolute -left-32 -top-40 h-[32rem] w-[32rem] rounded-full bg-peach blur-[110px]" />
      <div className="absolute -right-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-accent blur-[120px]" />
      <div className="absolute -bottom-48 left-1/4 h-[30rem] w-[30rem] rounded-full bg-blush blur-[120px]" />
      <div className="absolute -bottom-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-sky blur-[110px]" />
    </div>
  );
}
