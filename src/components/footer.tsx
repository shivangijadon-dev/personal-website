import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { CloudDivider } from "@/components/cloud-divider";

const links = [
  { label: "Email", href: "mailto:shivangi.p.jadon@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer>
      <CloudDivider />
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 pb-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Shivangi Jadon</p>
        <div className="flex gap-2">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card backdrop-blur-md transition-all hover:-translate-y-0.5 hover:text-accent hover:shadow-soft"
            >
              <Icon size={16} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
