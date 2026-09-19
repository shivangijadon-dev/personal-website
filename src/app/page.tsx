import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { Greeting } from "@/components/greeting";
import { blockColors } from "@/components/editorial";
import { shop } from "@/lib/templates";

const destinations = [
  { href: "/work", label: "Work", blurb: "Projects, experience, and what I build with.", external: false },
  { href: "/templates", label: "Templates", blurb: "Notion templates I've made and published.", external: false },
  { href: shop.href, label: "Shop", blurb: "Absolair — my Notion template store.", external: true },
  { href: "/blog", label: "Writing", blurb: "Posts here and on Medium, Substack, and dev.to.", external: false },
];

export default function Home() {
  return (
    <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-14 px-8 py-24 sm:py-28 md:pr-24">
      {/* Sideways title and a cobalt block, like the reference cover. */}
      <div aria-hidden="true" className="absolute right-8 top-24 hidden flex-col items-center gap-6 md:flex">
        <span className="vertical-label font-display text-sm font-bold">
          Designer · Developer
        </span>
        <span className="h-8 w-10 bg-blue" />
      </div>

      <FadeIn>
        <div className="flex flex-col gap-4">
          <p className="font-serif text-lg italic text-muted">Welcome in —</p>
          <Greeting />
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="grid gap-4 sm:grid-cols-2">
          {destinations.map(({ href, label, blurb, external }, i) => {
            const body = (
              <>
                <div className="flex items-start justify-between">
                  <span className={`h-3 w-8 ${blockColors[i % blockColors.length]}`} />
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  />
                </div>
                <span className="flex items-baseline gap-2 pt-4">
                  <span className="font-display text-3xl font-extrabold leading-none tracking-tight">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-bold uppercase tracking-wide">
                    {label}
                  </span>
                </span>
                <span className="text-sm leading-6 text-muted">{blurb}</span>
              </>
            );
            const className =
              "group flex flex-col gap-1.5 rounded-sm border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-soft";
            return external ? (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {body}
              </a>
            ) : (
              <Link key={href} href={href} className={className}>
                {body}
              </Link>
            );
          })}
        </div>
      </FadeIn>
    </div>
  );
}
