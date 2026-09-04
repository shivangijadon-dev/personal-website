import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-2xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-medium tracking-tight transition-colors hover:text-accent"
        >
          Shivangi Jadon
        </Link>
        <div className="flex items-center gap-6">
          <div className="flex gap-6 text-sm text-muted">
            <Link href="/#projects" className="transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground">
              Blog
            </Link>
            <Link href="/#about" className="transition-colors hover:text-foreground">
              About
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
