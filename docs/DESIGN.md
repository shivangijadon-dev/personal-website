# Design direction

The site is clean and minimal: a white page, a single lavender accent, and generous space.
It started from a set of pastel references (see [`design-references/`](./design-references/))
but was deliberately pared back — the ambient gradient wash, the portrait, and the pink tint
were all removed in favour of white.

## Palette

Defined as CSS custom properties in [`src/app/globals.css`](../src/app/globals.css). Change
them there and the whole site follows.

### Light (the primary treatment)

| Token          | Value                | Used for                                     |
| -------------- | -------------------- | -------------------------------------------- |
| `--background` | `#fafafa`            | Off-white page behind the content panel       |
| `--foreground` | `#2f2a3a`            | Body text — near-black with a hint of plum    |
| `--muted`      | `#6f6880`            | Secondary text                                |
| `--accent`     | `#7d6bd0`            | Lavender — links, labels, active nav, hovers  |
| `--card`       | `#ffffff`            | Content panel and card fill                   |
| `--peach`      | `#f6c3a8`            | Project thumbnails and skill rings only       |
| `--blush`      | `#f4b3c8`            | Project thumbnails and skill rings only       |
| `--sky`        | `#a9cbe8`            | Project thumbnails                            |
| `--sage`       | `#b8cfb2`            | Spare accent, currently unused                |

The pastels are deliberately scoped to content — thumbnails, tags, and rings. They are never
used for page or panel backgrounds.

### Dark

A neutral near-black (`#131316`) with a slightly lifted panel (`#1a1a1f`), keeping the same
lavender accent.

## Typography

Two families, loaded via `next/font/google` in
[`src/app/layout.tsx`](../src/app/layout.tsx):

- **Harmattan** (`--font-sans` and `--font-display`) — everything. An SIL humanist sans,
  Arabic-first with a Latin companion, in four static weights (400–700). It has no italic, so
  avoid `italic` — the browser would synthesise a faux oblique.
- **Geist Mono** (`--font-mono`) — small meta labels only (dates, section headers), always
  uppercase with `tracking-[0.2em]`.

## Layout

Modelled on [sj.land](https://www.sj.land/): a fixed left sidebar beside a rounded content
panel that floats on the pastel background.

- [`components/sidebar.tsx`](../src/components/sidebar.tsx) — the desktop sidebar, at `lg:`
  and up. Signature-style italic wordmark, icon nav with a raised pill for the active page,
  a small-caps "Stay in touch" group, and the theme switcher pinned to the bottom. Number
  keys 1–3 jump between pages, ignoring modifiers and typing in form fields.
- [`components/nav.tsx`](../src/components/nav.tsx) — the top bar that replaces the sidebar
  below `lg:`.
- Nav destinations live in one place,
  [`components/nav-items.tsx`](../src/components/nav-items.tsx), so both share them.
- The content panel is defined in [`app/layout.tsx`](../src/app/layout.tsx) — a glass card
  that always fills at least the viewport height, so the footer sits at its bottom edge.

## Recurring patterns

- **Cards** — `rounded-3xl border border-border bg-card`, lifting on hover with
  `.shadow-soft` (a wide, low-opacity purple-tinted shadow).
- **Wave divider** — [`components/cloud-divider.tsx`](../src/components/cloud-divider.tsx)
  sits above the footer: three layered paths in the accent at 6–10% opacity, enough to
  suggest an edge without tinting the page.
- **Motion** — [`components/fade-in.tsx`](../src/components/fade-in.tsx) fades and lifts
  sections into view. It short-circuits to a plain wrapper when the visitor prefers reduced
  motion, so content is never hidden behind an animation.

## Guardrails

The page should read as white. Colour belongs to content — a project thumbnail, a tag, a
skill ring, the active nav pill — never to the page or panel background. When adding
something decorative, ask whether it tints the whole surface; if it does, it does not belong.
