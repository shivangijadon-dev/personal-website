import { XMLParser } from "fast-xml-parser";
import {
  MediumIcon,
  SubstackIcon,
  HashnodeIcon,
  DevToIcon,
} from "@/components/icons";

/**
 * External writing platforms.
 *
 * Set `feed` to the platform's RSS URL to pull recent posts in automatically.
 * Leave it empty and the platform still shows as a link — it is just skipped
 * when fetching posts.
 *
 *   Medium    https://medium.com/feed/@your-handle
 *   Substack  https://your-handle.substack.com/feed
 *   Hashnode  https://your-handle.hashnode.dev/rss.xml
 *   dev.to    https://dev.to/feed/your-handle
 */
export const platforms = [
  {
    name: "Medium",
    icon: MediumIcon,
    profile: "https://medium.com/@shivangijadon",
    feed: "https://medium.com/feed/@shivangijadon",
  },
  {
    name: "Substack",
    icon: SubstackIcon,
    profile: "https://shivangijadon.substack.com",
    feed: "https://shivangijadon.substack.com/feed",
  },
  {
    name: "Hashnode",
    icon: HashnodeIcon,
    profile: "https://hashnode.com/@shivangijadon",
    // Hashnode only serves RSS from a publication, and none exists yet. Once a
    // blog is created, set this to https://<blog>.hashnode.dev/rss.xml
    feed: "",
  },
  {
    name: "dev.to",
    icon: DevToIcon,
    profile: "https://dev.to/shivangijadon",
    // dev.to returns 404 for this until the first article is published.
    feed: "https://dev.to/feed/shivangijadon",
  },
];

export type ExternalPost = {
  title: string;
  link: string;
  date: string;
  source: string;
};

const parser = new XMLParser({ ignoreAttributes: false });

function textOf(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (value && typeof value === "object" && "#text" in value) {
    return String((value as { "#text": unknown })["#text"]);
  }
  return "";
}

function linkOf(value: unknown): string {
  // RSS uses a plain <link>; Atom uses <link href="...">.
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return linkOf(value[0]);
  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    if (obj["@_href"]) return String(obj["@_href"]);
    if (obj["#text"]) return String(obj["#text"]);
  }
  return "";
}

async function fetchFeed(
  source: string,
  url: string,
): Promise<ExternalPost[]> {
  const res = await fetch(url, {
    // Re-check each feed at most once an hour.
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(8000),
    headers: { "user-agent": "shivangijadon.dev feed reader" },
  });

  if (!res.ok) throw new Error(`${source} feed responded ${res.status}`);

  const parsed = parser.parse(await res.text());
  const items = parsed?.rss?.channel?.item ?? parsed?.feed?.entry ?? [];
  const list = Array.isArray(items) ? items : [items];

  return list
    .map((item): ExternalPost => {
      const raw =
        textOf(item?.pubDate) || textOf(item?.published) || textOf(item?.updated);
      const parsedDate = new Date(raw);

      return {
        title: textOf(item?.title).trim(),
        link: linkOf(item?.link),
        date: Number.isNaN(parsedDate.valueOf())
          ? ""
          : parsedDate.toISOString().slice(0, 10),
        source,
      };
    })
    .filter((post) => post.title && post.link);
}

/**
 * Recent posts across every configured platform, newest first.
 *
 * A platform that is unconfigured, unreachable, or serving something
 * unparseable is skipped rather than allowed to fail the page — external
 * services must never be able to break the site or its build.
 */
export async function getExternalPosts(limit = 6): Promise<ExternalPost[]> {
  const configured = platforms.filter((p) => p.feed);

  const results = await Promise.allSettled(
    configured.map((p) => fetchFeed(p.name, p.feed)),
  );

  const posts = results.flatMap((result, i) => {
    if (result.status === "fulfilled") return result.value;
    console.warn(
      `Skipped ${configured[i].name} feed:`,
      result.reason instanceof Error ? result.reason.message : result.reason,
    );
    return [];
  });

  return posts
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}
