# Personal Website

Next.js + Tailwind personal site with a portfolio home page and an MDX-powered blog.

## Structure

- `src/app/page.tsx` — home page (hero, projects, recent posts, about)
- `src/app/blog/` — blog index and post pages
- `src/content/posts/*.mdx` — blog posts, one file per post
- `src/components/` — nav and footer

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

- Update projects in `src/app/page.tsx` (the `projects` array).
- Update the about section and hero copy directly in `src/app/page.tsx`.
- Update social links in `src/components/footer.tsx`.

## Deploy

Easiest option is [Vercel](https://vercel.com/new) — connect the repo and it deploys on push.
