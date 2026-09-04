import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const projects = [
  {
    name: "Project One",
    description: "A short description of what this project does and why it exists.",
    href: "https://github.com/",
  },
  {
    name: "Project Two",
    description: "A short description of what this project does and why it exists.",
    href: "https://github.com/",
  },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-24 px-6 py-16">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">Shivangi Jadon</h1>
        <p className="max-w-lg text-lg leading-7 text-zinc-600 dark:text-zinc-400">
          I build software. This is where I share what I&apos;m working on and
          write about things I&apos;m learning.
        </p>
      </section>

      <section id="projects" className="flex flex-col gap-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          Projects
        </h2>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 rounded-lg border border-black/[.08] p-5 transition-colors hover:border-black/[.16] dark:border-white/[.12] dark:hover:border-white/[.24]"
            >
              <span className="font-medium group-hover:underline">
                {project.name}
              </span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </span>
            </a>
          ))}
        </div>
      </section>

      {posts.length > 0 && (
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
              Recent writing
            </h2>
            <Link
              href="/blog"
              className="text-sm text-zinc-500 hover:text-foreground transition-colors"
            >
              View all
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1"
              >
                <span className="font-medium group-hover:underline">
                  {post.title}
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section id="about" className="flex flex-col gap-4">
        <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          About
        </h2>
        <p className="max-w-lg leading-7 text-zinc-600 dark:text-zinc-400">
          A bit more about who I am, what I do, and what I care about goes
          here.
        </p>
      </section>
    </div>
  );
}
