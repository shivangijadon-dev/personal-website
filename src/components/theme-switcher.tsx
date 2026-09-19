"use client";

import { useTheme } from "next-themes";
import { useHydrated } from "@/lib/use-hydrated";

const options = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "Auto" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const hydrated = useHydrated();

  return (
    <div className="flex rounded-full border border-border bg-card p-1">
      {options.map((option) => {
        const active = hydrated && theme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            aria-pressed={active}
            className={`flex-1 rounded-full px-2 py-1.5 text-xs transition-colors ${
              active
                ? "bg-accent/15 font-medium text-accent"
                : "text-muted hover:text-foreground"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
