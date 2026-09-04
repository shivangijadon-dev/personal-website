import { Home, Briefcase, PenLine, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const pages = [
  { href: "/", label: "Home", icon: Home, shortcut: "1" },
  { href: "/work", label: "Work", icon: Briefcase, shortcut: "2" },
  { href: "/blog", label: "Writing", icon: PenLine, shortcut: "3" },
];

export const socials = [
  {
    href: "mailto:shivangi.p.jadon@gmail.com",
    label: "Email",
    icon: Mail,
    external: false,
  },
  {
    href: "https://github.com/",
    label: "GitHub",
    icon: GithubIcon,
    external: true,
  },
  {
    href: "https://linkedin.com/",
    label: "LinkedIn",
    icon: LinkedinIcon,
    external: true,
  },
];
