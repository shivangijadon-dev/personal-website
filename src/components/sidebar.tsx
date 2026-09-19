"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { pages, socials } from "@/components/nav-items";
import { ThemeSwitcher } from "@/components/theme-switcher";

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-3 pb-2 pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
      {children}
    </p>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  // Number-key shortcuts, like the reference site.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
      ) {
        return;
      }

      const match = pages.find((page) => page.shortcut === event.key);
      if (match) {
        event.preventDefault();
        if (match.external) {
          window.open(match.href, "_blank", "noopener,noreferrer");
        } else {
          router.push(match.href);
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col border-r border-border bg-background/50 px-3 py-6 lg:flex">
      <Link
        href="/"
        className="group flex flex-col gap-2 px-3 pb-6 transition-colors hover:text-accent"
      >
        <span className="font-display text-lg font-extrabold uppercase leading-tight tracking-wide">
          Shivangi
          <br />
          Jadon
        </span>
        <span className="font-serif text-sm italic text-muted">
          Designer · Developer
        </span>
      </Link>

      <nav className="flex flex-col">
        {pages.map(({ href, label, icon: Icon, shortcut, external }) => {
          if (external) {
            return (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-sm border border-transparent px-3 py-2 text-sm text-muted transition-all hover:text-foreground"
              >
                <Icon size={16} strokeWidth={1.75} />
                <span className="flex-1">{label}</span>
                <span className="flex items-center gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="font-mono text-[10px] text-muted">{shortcut}</span>
                  <ArrowUpRight size={13} strokeWidth={2} className="text-muted" />
                </span>
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
              className={`group flex items-center gap-3 rounded-sm px-3 py-2 text-sm transition-all ${
                active
                  ? "border border-border bg-card font-semibold text-foreground"
                  : "border border-transparent text-muted hover:text-foreground"
              }`}
            >
              <Icon
                size={16}
                strokeWidth={1.75}
                className={active ? "text-accent" : ""}
              />
              <span className="flex-1">{label}</span>
              <span className="font-mono text-[10px] text-muted opacity-0 transition-opacity group-hover:opacity-100">
                {shortcut}
              </span>
            </Link>
          );
        })}

        <GroupLabel>Stay in touch</GroupLabel>

        {socials.map(({ href, label, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-3 rounded-sm border border-transparent px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <Icon size={16} strokeWidth={1.75} />
            <span className="flex-1">{label}</span>
            {external && (
              <ArrowUpRight
                size={13}
                strokeWidth={2}
                className="text-muted opacity-0 transition-opacity group-hover:opacity-100"
              />
            )}
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-6">
        <ThemeSwitcher />
      </div>
    </aside>
  );
}
