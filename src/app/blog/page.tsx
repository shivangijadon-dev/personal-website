import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Shivangi Jadon",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-1"
          >
            <span className="text-xs text-zinc-500">{post.date}</span>
            <span className="font-medium group-hover:underline">
              {post.title}
            </span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
