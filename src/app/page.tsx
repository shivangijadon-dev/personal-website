import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { FadeIn } from "@/components/fade-in";

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
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-28 px-6 py-20">
      <section className="flex flex-col gap-5">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Hi, I&apos;m
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Shivangi Jadon
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="max-w-lg text-lg leading-7 text-muted">
            I build software. This is where I share what I&apos;m working on
            and write about things I&apos;m learning.
          </p>
        </FadeIn>
      </section>

      <section id="projects" className="flex flex-col gap-6">
        <FadeIn>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            Projects
          </h2>
        </FadeIn>
        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.05}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1.5 rounded-xl border border-border p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]"
              >
                <span className="flex items-center gap-1.5 font-medium">
                  {project.name}
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    className="text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </span>
                <span className="text-sm leading-6 text-muted">
                  {project.description}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {posts.length > 0 && (
        <section className="flex flex-col gap-6">
          <FadeIn className="flex items-center justify-between">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
              Recent writing
            </h2>
            <Link
              href="/blog"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              View all
            </Link>
          </FadeIn>
          <div className="flex flex-col gap-6">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    {post.title}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2}
                      className="text-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100"
                    />
                  </span>
                  <span className="text-sm leading-6 text-muted">
                    {post.excerpt}
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      <section id="about" className="flex flex-col gap-4">
        <FadeIn>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            About
          </h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="max-w-lg leading-7 text-muted">
            A bit more about who I am, what I do, and what I care about goes
            here.
          </p>
        </FadeIn>
      </section>
    </div>
  );
}
