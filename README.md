# Personal Website

Next.js + Tailwind personal site with a portfolio home page and an MDX-powered blog.

## Structure

- `src/app/page.tsx` — home page: name and short bio only
- `src/app/work/page.tsx` — projects, skill rings, and experience timeline
- `src/app/blog/` — blog index and post pages
- `src/content/posts/*.mdx` — blog posts, one file per post
- `src/components/` — nav, footer, portrait, and the shared visual pieces

See [`docs/DESIGN.md`](./docs/DESIGN.md) for the palette, fonts, and design direction.

## Adding a blog post

Create a new `.mdx` file in `src/content/posts/` with frontmatter:

```md
---
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "One-sentence summary shown on the blog index and home page."
---

Post content in Markdown/MDX goes here.
```

It will automatically show up on `/blog` and `/blog/<filename-without-extension>`.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

- **Bio** — the intro copy lives in `src/app/page.tsx`.
- **Projects, skills, experience** — the `projects`, `skills`, and `experience` arrays at the
  top of `src/app/work/page.tsx`.
- **Social links** — `src/components/footer.tsx`.

## Deploy

Easiest option is [Vercel](https://vercel.com/new) — connect the repo and it deploys on push.
