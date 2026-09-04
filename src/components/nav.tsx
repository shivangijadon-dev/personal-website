import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight transition-colors hover:text-accent"
        >
          Shivangi Jadon
        </Link>
        <div className="flex items-center gap-5">
          <div className="flex gap-5 text-sm text-muted">
            <Link href="/#projects" className="transition-colors hover:text-accent">
              Projects
            </Link>
            <Link href="/blog" className="transition-colors hover:text-accent">
              Blog
            </Link>
            <Link href="/#about" className="transition-colors hover:text-accent">
              About
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
