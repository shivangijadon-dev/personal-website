import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { Greeting } from "@/components/greeting";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-8 py-24 sm:py-32">
      <FadeIn>
        <Greeting />
      </FadeIn>

      <FadeIn delay={0.05}>
        <p className="max-w-xl text-lg leading-8">
          I&apos;m <strong className="font-semibold">Shivangi Jadon</strong>, a
          Lead Technical Consulting Engineer at Cisco in Bengaluru.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="flex max-w-xl flex-col gap-4 pt-2 text-lg leading-8 text-muted">
          <p>
            I&apos;ve spent five years building automation, AI/ML tooling, and
            cloud systems — mostly the kind that keeps contact centres running
            for hospitals, police, fire services, and government agencies,
            where downtime is not an abstract problem.
          </p>
          <p>
            Lately I&apos;m most interested in what LLMs can actually be
            trusted with: retrieval over messy internal documents, log analysis
            that gets to root cause faster, and probing where model guardrails
            break. I like solving problems end to end.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="flex flex-wrap gap-3 pt-4">
          <Link
            href="/work"
            className="group flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-soft"
          >
            See my work
            <ArrowUpRight
              size={15}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <a
            href="/shivangi-jadon-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
          >
            <Download size={15} strokeWidth={2} />
            Résumé
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
