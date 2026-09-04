import type { Metadata } from "next";
import { Download } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Work — Shivangi Jadon",
};

const projects = [
  {
    name: "TAC 360",
    description:
      "An AI assistant that lets support engineers query cases, product documentation, and escalations in one place, cutting the time it takes to find prior art and respond.",
    tags: ["Gen AI", "RAG", "ElasticSearch"],
    gradient: "from-peach via-blush to-accent",
  },
  {
    name: "Log Analysis Platform",
    description:
      "An internal platform that parses and analyses contact centre and SIP logs, reducing manual troubleshooting effort and getting to root cause faster.",
    tags: ["Python", "Elastic", "Automation"],
    gradient: "from-sky via-accent to-blush",
  },
  {
    name: "LLM Guardrail Games",
    description:
      "Gandalf-style prompt-security games built to probe and strengthen LLM guardrails against adversarial inputs — a practical way to find where models give way.",
    tags: ["LLM Security", "Prompting", "React"],
    gradient: "from-accent via-sky to-sage",
  },
  {
    name: "Hackathons & CTFs",
    description:
      "Multiple hackathon and Capture The Flag wins, which is where most of my appetite for unfamiliar problems and short feedback loops comes from.",
    tags: ["CTF", "Security"],
    gradient: "from-blush via-peach to-sky",
  },
];

const skills = [
  {
    group: "Programming & Development",
    items: ["Python", "JavaScript", "React", "Flask", "Bash"],
  },
  {
    group: "AI/ML & Data",
    items: [
      "Gen AI",
      "MCP",
      "LangGraph",
      "ElasticSearch",
      "MongoDB",
      "SQL",
      "Redis",
      "Informix",
    ],
  },
  {
    group: "DevOps & Cloud",
    items: [
      "Docker",
      "Kubernetes",
      "Ansible",
      "OpenShift",
      "Kafka",
      "Jenkins",
      "GCP",
      "AWS",
      "OpenStack",
      "Splunk",
    ],
  },
  {
    group: "Networking & Systems",
    items: [
      "SIP",
      "VoIP",
      "CTI",
      "JTAPI",
      "VMware",
      "UCCX",
      "UCCE",
      "Linux",
      "SSO",
      "LDAP",
    ],
  },
];

const experience = [
  {
    period: "2020 — Present",
    role: "Lead Technical Consulting Engineer",
    org: "Cisco Systems · Bengaluru",
    points: [
      "Support UCCX and UCCE contact centre deployments, resolving 1,000+ cases a year for government agencies, hospitals, police, and fire services.",
      "Built AI/ML tooling — log analysers, case summarisation, and RAG-based product document search.",
      "Built and optimised CI/CD pipelines for deploying contact centre and AI tooling.",
      "Wrote 20+ technical guides and knowledge base articles, cutting ticket resolution time.",
      "Led critical escalations across software engineering, network operations, and product management.",
      "Delivered 10+ training sessions a year on Linux administration, AI/ML tooling, and CI/CD.",
    ],
  },
  {
    period: "2020",
    role: "Intern",
    org: "Cisco Systems · Bengaluru",
    points: [
      "Built a log parser for SIP and contact centre logs.",
      "Trained on Cisco Collaboration technologies — VoIP, CUCM, Unity, UCCX, UCCE — plus CCNA.",
    ],
  },
  {
    period: "2020",
    role: "Intern",
    org: "Wipro · Bengaluru",
    points: [
      "Built an automation tool to streamline support ticket workflows and cut manual effort.",
    ],
  },
];

const education = [
  {
    period: "2022 — 2024",
    degree: "M.Tech, Data Science & Machine Learning",
    school: "BITS Pilani (WILP)",
  },
  {
    period: "2016 — 2020",
    degree: "B.Tech, Computer Science",
    school: "PES University",
  },
];

const certifications = [
  "AWS Certified Solutions Architect – Associate",
  "VMware Certified Professional – Data Center Virtualization (VCP6-DCV)",
  "Cisco DevNet Associate",
  "Cisco DevOps",
  "CCNA",
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
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-20 px-8 py-20">
      <FadeIn>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-4xl font-semibold tracking-tight">
            Work
          </h1>
          <a
            href="/shivangi-jadon-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
          >
            <Download size={15} strokeWidth={2} />
            Résumé
          </a>
        </div>
      </FadeIn>

      <section id="projects" className="flex flex-col gap-6">
        <FadeIn>
          <SectionLabel>Selected work</SectionLabel>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-soft">
                <div
                  className={`h-24 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-70`}
                />
                <span className="font-display text-lg font-semibold">
                  {project.name}
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
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <p className="text-xs leading-6 text-muted">
            These were built internally at Cisco, so there&apos;s no public
            repository to link to.
          </p>
        </FadeIn>
      </section>

      <section id="skills" className="flex flex-col gap-6">
        <FadeIn>
          <SectionLabel>What I work with</SectionLabel>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <FadeIn key={skill.group} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-5">
                <span className="font-display text-base font-semibold">
                  {skill.group}
                </span>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="experience" className="flex flex-col gap-6">
        <FadeIn>
          <SectionLabel>Experience</SectionLabel>
        </FadeIn>
        <div className="flex flex-col gap-4">
          {experience.map((item, i) => (
            <FadeIn key={`${item.role}-${item.org}`} delay={i * 0.05}>
              <div className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-6">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {item.period}
                  </span>
                  <span className="font-display text-lg font-semibold">
                    {item.role}
                  </span>
                  <span className="text-sm text-muted">{item.org}</span>
                </div>
                <ul className="flex flex-col gap-2 pl-4">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="list-disc text-sm leading-6 text-muted marker:text-accent/50"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="education" className="flex flex-col gap-6">
        <FadeIn>
          <SectionLabel>Education</SectionLabel>
        </FadeIn>
        <div className="flex flex-col divide-y divide-border rounded-3xl border border-border bg-card">
          {education.map((item) => (
            <FadeIn key={item.degree}>
              <div className="flex flex-col gap-1 p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {item.period}
                </span>
                <span className="font-display text-base font-semibold">
                  {item.degree}
                </span>
                <span className="text-sm text-muted">{item.school}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="certifications" className="flex flex-col gap-6">
        <FadeIn>
          <SectionLabel>Certifications</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap gap-2 rounded-3xl border border-border bg-card p-6">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full bg-accent/10 px-3 py-1.5 text-xs text-accent"
              >
                {cert}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
