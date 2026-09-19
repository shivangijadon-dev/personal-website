import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { getExternalPosts, platforms } from "@/lib/feeds";
import { FadeIn } from "@/components/fade-in";
import { PartHeading } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Writing — Shivangi Jadon",
};

// Re-check the external feeds hourly.
export const revalidate = 3600;

export default async function BlogIndex() {
  const posts = getAllPosts();
  const external = await getExternalPosts();

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-8 py-20">
      <FadeIn>
        <h1 className="font-display text-5xl font-extrabold uppercase tracking-tight sm:text-6xl">
          Writing
        </h1>
      </FadeIn>

      <section className="flex flex-col gap-4">
        <FadeIn>
          <PartHeading n={1} title="On this site" />
        </FadeIn>
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-1.5 rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 font-display text-lg font-semibold">
                {post.title}
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </span>
              <span className="text-sm leading-6 text-muted">
                {post.excerpt}
              </span>
            </Link>
          </FadeIn>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <FadeIn>
          <PartHeading n={2} title="Elsewhere" />
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="grid gap-3 sm:grid-cols-2">
            {platforms.map(({ name, icon: Icon, profile }) => (
              <a
                key={name}
                href={profile}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-sm border border-border bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-soft"
              >
                <Icon size={18} />
                <span className="flex-1 text-sm font-medium">{name}</span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      {external.length > 0 && (
        <section className="flex flex-col gap-4">
          <FadeIn>
            <PartHeading n={3} title="Latest from around the web" />
          </FadeIn>
          <div className="flex flex-col divide-y divide-border rounded-sm border border-border bg-card">
            {external.map((post, i) => (
              <FadeIn key={post.link} delay={i * 0.03}>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline gap-4 p-5 transition-colors hover:bg-foreground/[0.03]"
                >
                  <span className="w-20 shrink-0 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {post.source}
                  </span>
                  <span className="flex-1 text-sm leading-6 transition-colors group-hover:text-accent">
                    {post.title}
                  </span>
                  {post.date && (
                    <span className="hidden shrink-0 font-mono text-[10px] text-muted sm:block">
                      {post.date}
                    </span>
                  )}
                </a>
              </FadeIn>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
