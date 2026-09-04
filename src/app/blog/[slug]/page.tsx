import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: `${post.title} — Shivangi Jadon` };
  } catch {
    return {};
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-6 py-20">
      <Link
        href="/blog"
        className="group flex w-fit items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft
          size={14}
          strokeWidth={2}
          className="transition-transform group-hover:-translate-x-0.5"
        />
        Blog
      </Link>
      <header className="flex flex-col gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {post.date}
        </span>
        <h1 className="text-3xl font-semibold tracking-tight">
          {post.title}
        </h1>
      </header>
      <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
