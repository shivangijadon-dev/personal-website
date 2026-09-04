import { Sparkles } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 px-8 py-28 sm:py-36">
      <FadeIn>
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <Sparkles size={14} strokeWidth={2} />
          Hi, I&apos;m
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
          Shivangi Jadon
        </h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="max-w-lg text-lg leading-8 text-muted">
          I build software. This is a short line or two about who I am, what I
          care about, and what I&apos;m working on right now.
        </p>
      </FadeIn>
    </div>
  );
}
