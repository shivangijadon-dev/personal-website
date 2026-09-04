import {
  Home,
  Briefcase,
  LayoutTemplate,
  PenLine,
  Mail,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const pages = [
  { href: "/", label: "Home", icon: Home, shortcut: "1" },
  { href: "/work", label: "Work", icon: Briefcase, shortcut: "2" },
  { href: "/templates", label: "Templates", icon: LayoutTemplate, shortcut: "3" },
  { href: "/blog", label: "Writing", icon: PenLine, shortcut: "4" },
];

export const socials = [
  {
    href: "mailto:shivangijadon@zohomail.in",
    label: "Email",
    icon: Mail,
    external: false,
  },
  {
    href: "https://github.com/shivangijadon-dev",
    label: "GitHub",
    icon: GithubIcon,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/shivangi-j-9a23b8321/",
    label: "LinkedIn",
    icon: LinkedinIcon,
    external: true,
  },
  {
    href: "/shivangi-jadon-resume.pdf",
    label: "Résumé",
    icon: FileText,
    external: true,
  },
];
