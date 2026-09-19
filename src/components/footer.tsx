import { ColorBlocks, Monogram } from "@/components/editorial";

export function Footer() {
  return (
    <footer className="mx-8 mt-20 flex items-center justify-between gap-4 border-t border-border py-6 text-xs text-muted">
      <span className="flex items-center gap-3">
        <Monogram letter="S" />
        <span className="font-mono uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Shivangi Jadon
        </span>
      </span>
      <ColorBlocks />
    </footer>
  );
}
