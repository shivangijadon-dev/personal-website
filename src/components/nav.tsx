"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "@/components/nav-items";
import { ThemeSwitcher } from "@/components/theme-switcher";

/** Top bar shown below the sidebar breakpoint. */
export function MobileNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 lg:hidden">
      <div className="flex flex-col gap-3 px-5 pt-4 pb-3">
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="font-display text-base font-extrabold uppercase tracking-wide">
            Shivangi Jadon
          </span>
          <span className="font-serif text-xs italic text-muted">
            Designer · Developer
          </span>
        </Link>
        <nav className="flex items-center gap-5 overflow-x-auto text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pages.map(({ href, label, external }) => {
            if (external) {
              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              );
            }
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`transition-colors ${
                  active ? "text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="px-5 pb-4">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
