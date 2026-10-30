# LOOKSMAX - The Healthy Self-Care Index

An educational, frontend-only self-care platform built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide React. No database, authentication or external API is required.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Requires Node.js 18.17 or newer. The fonts (Bricolage Grotesque, Instrument Sans) load through `next/font/google`, so the first build needs internet access.

## Pages

| Route | What it contains |
| --- | --- |
| `/` | Dashboard: hero, live daily progress, category cards, featured guides, daily reminder, latest articles |
| `/face` | Skin type explorer, morning/night routine guide, in-depth topics, common mistakes |
| `/hair` | Hair Type Explorer (all 12 patterns, search and filters) plus porosity, density, scalp, washing, heat, products, cuts |
| `/posture` | Interactive workspace setup guide and 11 ergonomics topics |
| `/movement` | Session planner and 11 movement and recovery topics |
| `/style` | Outfit gallery, colour combinations, style fundamentals |
| `/habits` | Daily checklist with progress bar and reset (saved in this browser only, resets each day) |
| `/guides` | Searchable, filterable library of 16 articles |
| `/guides/[slug]` | Article pages with contents list and related articles |

Also included: global search (Ctrl/Cmd + K), responsive sidebar and mobile drawer, breadcrumbs, page transitions, a loading state and a custom 404 page.

## Structure

```text
app/          routes, layout, template (page transitions), loading, not-found
components/   layout/, dashboard/, face/, hair/, posture/, movement/, style/, habits/, guides/, ui/
data/         all educational content as typed TypeScript modules
lib/          utils, search index, habit state hook
types/        shared TypeScript interfaces
```

To edit or add content, change the files in `data/`. New articles in `data/guides.ts` get their own page automatically.

## Disclaimer

All content is general educational information. It is not medical advice and does not rank or rate appearance.
