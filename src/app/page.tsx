import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { Greeting } from "@/components/greeting";

const destinations = [
  { href: "/work", label: "Work", blurb: "Projects, experience, and what I build with." },
  { href: "/templates", label: "Templates", blurb: "Notion templates I've made and published." },
  { href: "/blog", label: "Writing", blurb: "Posts here and on Medium, Substack, and dev.to." },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-8 py-24 sm:py-32">
      <FadeIn>
        <Greeting />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="grid gap-3 sm:grid-cols-3">
          {destinations.map(({ href, label, blurb }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-1.5 rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
            >
              <span className="flex items-center gap-1.5 font-display text-lg font-semibold">
                {label}
                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </span>
              <span className="text-sm leading-6 text-muted">{blurb}</span>
            </Link>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <a
          href="/shivangi-jadon-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-fit items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
        >
          <Download size={15} strokeWidth={2} />
          Résumé
        </a>
      </FadeIn>
    </div>
  );
}
