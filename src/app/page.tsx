import { Sparkles } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { Portrait } from "@/components/portrait";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12 px-6 py-24 sm:flex-row sm:gap-16 sm:py-32">
      <FadeIn>
        <Portrait />
      </FadeIn>

      <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
        <FadeIn delay={0.05}>
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <Sparkles size={14} strokeWidth={2} />
            Hi, I&apos;m
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
            Shivangi Jadon
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="max-w-md text-lg leading-8 text-muted">
            I build software. This is a short line or two about who I am, what
            I care about, and what I&apos;m working on right now.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
