# Design direction

The site follows a soft, dreamy pastel aesthetic — warm and a little whimsical, but still
refined. It is deliberately not the stark black-and-white developer-portfolio look.

Visual references live in [`design-references/`](./design-references/).

## Palette

Defined as CSS custom properties in [`src/app/globals.css`](../src/app/globals.css). Change
them there and the whole site follows.

### Light (the primary treatment)

| Token          | Value                    | Used for                                  |
| -------------- | ------------------------ | ----------------------------------------- |
| `--background` | `#fdf8f4`                | Warm cream base, never pure white         |
| `--foreground` | `#443a58`                | Deep plum body text, never pure black     |
| `--muted`      | `#6f6480`                | Secondary text                            |
| `--accent`     | `#7d6bd0`                | Lavender — links, labels, hover states    |
| `--card`       | `rgba(255,255,255,0.62)` | Glass card fill, paired with backdrop blur |
| `--peach`      | `#f6c3a8`                | Ambient orb + cloud divider               |
| `--blush`      | `#f4b3c8`                | Ambient orb + cloud divider               |
| `--sky`        | `#a9cbe8`                | Ambient orb                               |
| `--sage`       | `#b8cfb2`                | Spare accent, currently unused            |

### Dark

A dusky purple night sky rather than a neutral black, echoing the rocket reference.
`--background` is `#16121f`, and `--orb-opacity` drops to `0.22` so the gradients read as
atmosphere instead of haze.

## Typography

Three families, loaded via `next/font/google` in
[`src/app/layout.tsx`](../src/app/layout.tsx):

- **Fraunces** (`--font-display`) — headings and card titles. A soft, high-contrast serif
  with `SOFT`, `WONK`, and `opsz` axes enabled. Applied automatically to `h1`/`h2`/`h3`, or
  explicitly with `.font-display`.
- **Nunito** (`--font-sans`) — body copy. Rounded terminals keep it warm.
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

- **Ambient orbs** — [`components/background.tsx`](../src/components/background.tsx) renders
  four large blurred pastel circles, fixed behind all content.
- **Glass cards** — `rounded-3xl border border-border bg-card backdrop-blur-md`, lifting on
  hover with `.shadow-soft` (a wide, low-opacity purple-tinted shadow).
- **Cloud divider** — [`components/cloud-divider.tsx`](../src/components/cloud-divider.tsx)
  sits above the footer, three layered pastel wave paths at low opacity.
- **Motion** — [`components/fade-in.tsx`](../src/components/fade-in.tsx) fades and lifts
  sections into view. It short-circuits to a plain wrapper when the visitor prefers reduced
  motion, so content is never hidden behind an animation.

## Guardrails

Keep the whimsy atmospheric rather than literal. Orbs, clouds, and sparkles should sit at low
opacity behind or beside content — the moment they compete with the text for attention, the
page reads as childish instead of dreamy.
