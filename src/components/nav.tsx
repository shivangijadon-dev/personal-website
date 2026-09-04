"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "@/components/nav-items";
import { ThemeSwitcher } from "@/components/theme-switcher";

/** Top bar shown below the sidebar breakpoint. */
export function MobileNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl lg:hidden">
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
        >
          Shivangi Jadon
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          {pages.map(({ href, label }) => {
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
