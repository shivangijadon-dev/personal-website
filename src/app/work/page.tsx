import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SkillRing } from "@/components/skill-ring";

export const metadata: Metadata = {
  title: "Work — Shivangi Jadon",
};

const projects = [
  {
    name: "Project One",
    description: "A short description of what this project does and why it exists.",
    href: "https://github.com/",
    tags: ["Next.js", "TypeScript"],
    gradient: "from-peach via-blush to-accent",
  },
  {
    name: "Project Two",
    description: "A short description of what this project does and why it exists.",
    href: "https://github.com/",
    tags: ["React", "Design"],
    gradient: "from-sky via-accent to-blush",
  },
];

const skills = [
  { label: "Frontend", value: 90, color: "var(--accent)" },
  { label: "Backend", value: 75, color: "var(--blush)" },
  { label: "Design", value: 60, color: "var(--peach)" },
];

const experience = [
  { year: "2025", role: "Your Role Here", org: "Company or project name" },
  { year: "2024", role: "Your Previous Role", org: "Company or project name" },
  { year: "2023", role: "Where It Started", org: "Company or project name" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
      {children}
    </h2>
  );
}

export default function Work() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-20 px-6 py-20">
      <FadeIn>
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Work
        </h1>
      </FadeIn>

      <section id="projects" className="flex flex-col gap-6">
        <FadeIn>
          <SectionLabel>Projects</SectionLabel>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.05}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-5 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <div
                  className={`h-24 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-70 transition-opacity group-hover:opacity-90`}
                />
                <span className="flex items-center gap-1.5 font-display text-lg font-semibold">
                  {project.name}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </span>
                <span className="text-sm leading-6 text-muted">
                  {project.description}
                </span>
                <div className="mt-auto flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="skills" className="flex flex-col gap-6">
        <FadeIn>
          <SectionLabel>What I work with</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="grid gap-8 rounded-3xl border border-border bg-card p-8 backdrop-blur-md sm:grid-cols-3">
            {skills.map((skill) => (
              <SkillRing key={skill.label} {...skill} />
            ))}
          </div>
        </FadeIn>
      </section>

      <section id="experience" className="flex flex-col gap-6">
        <FadeIn>
          <SectionLabel>Experience</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="flex flex-col divide-y divide-border rounded-3xl border border-border bg-card backdrop-blur-md">
            {experience.map((item) => (
              <div key={item.year} className="flex items-center gap-4 p-5">
                <span className="flex h-12 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 font-mono text-xs tracking-wider text-accent">
                  {item.year}
                </span>
                <div className="flex flex-col">
                  <span className="font-display text-base font-semibold">
                    {item.role}
                  </span>
                  <span className="text-sm text-muted">{item.org}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
