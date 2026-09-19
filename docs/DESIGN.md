# Design direction

An editorial "zine" theme, shared with the Absolair store (`absolair.shivangijadon.com`):
warm cream paper, ink text, bold geometric uppercase display type, a classic serif for
kickers, and flat saturated colour blocks used sparingly as accents. It comes from an
editorial presentation deck ("ORIGINALITY" / Maly Design) chosen in September 2026, after
earlier pastel and plain-white versions. See [`design-references/`](./design-references/).

## Palette

Defined as CSS custom properties in [`src/app/globals.css`](../src/app/globals.css).

| Token          | Light     | Used for                                            |
| -------------- | --------- | --------------------------------------------------- |
| `--background` | `#f5efe1` | Warm cream paper                                    |
| `--card`       | `#fbf7ec` | Content panel and cards, a shade lighter            |
| `--foreground` | `#1c1a17` | Ink text                                            |
| `--muted`      | `#6b645a` | Secondary text                                      |
| `--accent`     | `#1f6fbf` | Cobalt — links, the active accent, the hero block   |
| `--blue` `--green` `--mustard` `--orange` | | Flat accent blocks, always in that order |

Dark mode is ink paper (`#151412`) with cream text and slightly brighter accents. Colour
blocks are always flat — never gradients — and small: corner squares, bars on cards, and
project covers.

## Typography

Loaded via `next/font/google` in [`src/app/layout.tsx`](../src/app/layout.tsx):

- **Montserrat** (`--font-display`) — headlines in extrabold uppercase, big section
  numerals, and small bold uppercase labels. `--font-mono` also points at it, so every
  `font-mono` label is bold Montserrat.
- **Playfair Display** (`--font-serif`) — italic kickers and subtitles, e.g. "Welcome in —"
  and "Designer · Developer".
- **DM Sans** (`--font-sans`) — body copy.

## Layout

Modelled on [sj.land](https://www.sj.land/): a fixed left sidebar beside a content panel
that sits on the cream page.

- [`components/sidebar.tsx`](../src/components/sidebar.tsx) — the desktop sidebar, at `lg:`
  and up. Bold uppercase wordmark stacked on two lines with a serif italic subtitle, icon nav
  with a bordered highlight for the active page,
  a small-caps "Stay in touch" group, and the theme switcher pinned to the bottom. Number
  keys 1–3 jump between pages, ignoring modifiers and typing in form fields.
- [`components/nav.tsx`](../src/components/nav.tsx) — the top bar that replaces the sidebar
  below `lg:`.
- Nav destinations live in one place,
  [`components/nav-items.tsx`](../src/components/nav-items.tsx), so both share them.
- The content panel is defined in [`app/layout.tsx`](../src/app/layout.tsx) — a square-cornered
  card that always fills at least the viewport height, so the footer sits at its bottom edge.

## Recurring patterns

All in [`components/editorial.tsx`](../src/components/editorial.tsx):

- **`PartHeading`** — "Part. 01" section headings: a big numeral, a small label, and a rule.
- **`Monogram`** — a letter cut by a thin diagonal hairline ("S" here, "A" on the store).
- **`ColorBlocks`** — the four accent colours as a row of small blocks, used in the footer.
- **`.vertical-label`** (in `globals.css`) — sideways, widely tracked uppercase text, like
  the vertical titles in the reference deck.

Cards are square-cornered (`rounded-sm`) with a thin border and a light lift on hover.
[`components/fade-in.tsx`](../src/components/fade-in.tsx) still fades sections in and
skips the animation for visitors who prefer reduced motion.

## Guardrails

Colour belongs to small blocks and content — a corner square, a card bar, a project cover —
never to the page background, which stays cream. Keep display type bold and uppercase but
short; long text such as post titles stays in normal case so it remains readable.
