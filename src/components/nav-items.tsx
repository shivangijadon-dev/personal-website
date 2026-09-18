import {
  Home,
  Briefcase,
  LayoutTemplate,
  ShoppingBag,
  PenLine,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { shop } from "@/lib/templates";

export const pages = [
  { href: "/", label: "Home", icon: Home, shortcut: "1", external: false },
  { href: "/work", label: "Work", icon: Briefcase, shortcut: "2", external: false },
  { href: "/templates", label: "Templates", icon: LayoutTemplate, shortcut: "3", external: false },
  // The Absolair store is a separate site, so this tab opens in a new tab.
  { href: shop.href, label: "Shop", icon: ShoppingBag, shortcut: "4", external: true },
  { href: "/blog", label: "Writing", icon: PenLine, shortcut: "5", external: false },
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
];
