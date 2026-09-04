/**
 * Notion templates.
 *
 * Add one entry per published template. `href` should point wherever people get
 * it — a public Notion page, a Gumroad or Lemon Squeezy listing, or the Notion
 * template gallery. Set `price` to "Free" or e.g. "$9".
 *
 * Until an entry has a real `href`, it is treated as coming soon and rendered
 * without a link.
 */
export type Template = {
  name: string;
  description: string;
  href: string;
  price: string;
  tags: string[];
  gradient: string;
};

export const templates: Template[] = [
  {
    name: "Template One",
    description:
      "What this template helps someone do, and who it's for. A sentence or two is plenty.",
    href: "",
    price: "Free",
    tags: ["Productivity"],
    gradient: "from-peach via-blush to-accent",
  },
  {
    name: "Template Two",
    description:
      "What this template helps someone do, and who it's for. A sentence or two is plenty.",
    href: "",
    price: "Free",
    tags: ["Planning"],
    gradient: "from-sky via-accent to-blush",
  },
];
