import Link from "next/link";

export function Nav() {
  return (
    <header className="border-b border-black/[.08] dark:border-white/[.12]">
      <nav className="mx-auto flex w-full max-w-2xl items-center justify-between px-6 py-6">
        <Link href="/" className="font-medium tracking-tight">
          Shivangi Jadon
        </Link>
        <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/#projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/#about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
