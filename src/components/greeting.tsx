"use client";

import { useHydrated } from "@/lib/use-hydrated";

function greetingFor(hour: number) {
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  return "Good evening";
}

/**
 * Greets by the visitor's local clock. The server cannot know their timezone, so
 * it renders a neutral "Hello" and the real greeting appears once hydrated — the
 * first client render still matches the server, so there is no mismatch.
 */
export function Greeting() {
  const hydrated = useHydrated();

  return (
    <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl">
      {hydrated ? greetingFor(new Date().getHours()) : "Hello"}
    </h1>
  );
}
