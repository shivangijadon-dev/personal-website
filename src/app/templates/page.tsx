import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { ShoppingBag } from "lucide-react";
import { templates, shop, type Template } from "@/lib/templates";

export const metadata: Metadata = {
  title: "Templates — Shivangi Jadon",
  description: "Notion templates by Shivangi Jadon.",
};

function TemplateCard({ template }: { template: Template }) {
  const published = Boolean(template.href);

  const inner = (
    <>
      <div className={`flex h-28 items-end justify-end rounded-sm p-3 ${template.color}`}>
        <span className="h-px w-10 -rotate-45 bg-white/70" />
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-1.5 font-display text-lg font-semibold">
          {template.name}
          {published && (
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            />
          )}
        </span>
        <span className="shrink-0 rounded-sm bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
          {published ? template.price : "Soon"}
        </span>
      </div>
      <span className="text-sm leading-6 text-muted">{template.description}</span>
      <div className="mt-auto flex flex-wrap gap-2 pt-1">
        {template.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col gap-3 rounded-sm border border-border bg-card p-5 transition-all";

  if (!published) {
    return <div className={`${className} opacity-70`}>{inner}</div>;
  }

  return (
    <a
      href={template.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft`}
    >
      {inner}
    </a>
  );
}

export default function Templates() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-8 py-20">
      <FadeIn>
        <div className="flex flex-col gap-3">
          <h1 className="font-display text-5xl font-extrabold uppercase tracking-tight sm:text-6xl">
            Templates
          </h1>
          <p className="max-w-xl leading-7 text-muted">
            Notion templates I&apos;ve built — mostly things I made for myself
            first and then cleaned up enough to share.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <a
          href={shop.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-sm border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-blue text-white">
            <ShoppingBag size={18} strokeWidth={1.75} />
          </span>
          <span className="flex flex-1 flex-col gap-0.5">
            <span className="font-display text-lg font-semibold">
              {shop.name}
            </span>
            <span className="text-sm leading-6 text-muted">{shop.blurb}</span>
          </span>
          <ArrowUpRight
            size={18}
            strokeWidth={2}
            className="shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-2">
        {templates.map((template, i) => (
          <FadeIn key={template.name} delay={i * 0.05}>
            <TemplateCard template={template} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
