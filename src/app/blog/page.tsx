import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Blog — Shivangi Jadon",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-20">
      <FadeIn>
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Blog
        </h1>
      </FadeIn>
      <div className="flex flex-col gap-4">
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-1.5 rounded-3xl border border-border bg-card p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
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
      </div>
    </div>
  );
}
