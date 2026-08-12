# Gray Zone Cheats — Marketing Site

Static Astro 7 site for [grayzonecheats.net](https://grayzonecheats.net). Primary SEO keyword: **Gray Zone Warfare cheats** (secondary: GZW ESP, GZW aimbot, Gray Zone Warfare wallhack).

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Pages deployment with `functions/_middleware.js`
- Brand Studio for local rebranding at `http://localhost:4321/brand-studio/`

## Quick start

```bash
npm install
npm run generate:i18n   # after editing scripts/i18n-data/*
node scripts/generate-blog-posts.mjs
npm run dev
```

Open [http://localhost:4321/](http://localhost:4321/) for the site or [http://localhost:4321/brand-studio/](http://localhost:4321/brand-studio/) to edit brand identity, colors, SEO, and sitemap labels.

## Features (product)

All features are included in one license for **Gray Zone Warfare** on Windows PC:

### ESP

- **PMC and bot ESP** — See players and AI bots through terrain with wallhack-style overlays
- **Loot container ESP** — Highlight stashes, crates, and searchable containers
- **Extract helicopter markers** — Track extraction helos and landing zones on the map
- **Key and quest item highlights** — Filter and glow important keys, quest items, and mission objectives
- **Distance readouts and skeleton ESP** — Range labels and bone/skeleton overlays for threat assessment
- **Toggleable ESP categories** — Turn individual ESP layers on or off mid-session

### Aimbot

- **Aimbot with FOV limit** — Precision aim assist constrained to a configurable field-of-view cone
- **No recoil tuning** — Reduce or eliminate weapon kick for stable follow-up shots
- **Smoothness and bone priority** — Adjustable aim smoothing and target bone selection
- **Hotkeys mid-operation** — Toggle aim features without leaving the game
- **Per-weapon profiles** — Save separate aim and recoil settings per weapon class

### Radar

- **2D radar overlay** — Top-down minimap-style view of nearby threats and loot
- **Adjustable range** — Scale radar distance to match your playstyle
- **PMC operations and bot zones** — Works across open-world PMC missions and bot-heavy areas

### General

- **Stream-proof overlay** — ESP and menu hidden from OBS, Discord, and capture software
- **Cloud-DMA option** — Remote DMA deployment for hardware-level memory access
- **AWS cloud option** — Host Cloud-DMA infrastructure on AWS for low-latency sessions
- **Easy Anti-Cheat maintenance** — Updates published after game or EAC patches
- **Digital delivery** — Instant license delivery after checkout
- **Setup guide and support** — Step-by-step install docs and email support

## SEO landing pages

| Route | Topic |
|-------|-------|
| `/gzw-cheats/` | Gray Zone Warfare cheats (main pillar) |
| `/gzw-esp/` | Gray Zone Warfare ESP |
| `/gzw-aimbot/` | Gray Zone Warfare aimbot |
| `/gzw-wallhack/` | Gray Zone Warfare wallhack |
| `/gzw-radar-hack/` | Radar overlay |
| `/undetected-gzw-cheats/` | Undetected status |
| `/eac-bypass/` | Easy Anti-Cheat notes |
| `/best-gzw-cheats/` | Best GZW cheats comparison |
| `/gzw-cheats-2026/` | 2026 keyword page |
| `/gzw-cheat-download/` | Download / access |
| `/gzw-mod-menu/` | Cheat menu |
| `/gzw-soft-aim/` | Soft aim / aim assist |
| `/gzw-aimbot-hack/` | Aimbot hack SEO |
| `/gzw-esp-hack/` | ESP hack SEO |
| `/gzw-unlock-all/` | Unlock-all SEO |

## Sitemap

Sitemaps are generated at build/dev time (no static file in repo):

| Endpoint | Purpose |
|----------|---------|
| `/sitemap.xml` | Sitemap index |
| `/sitemap-en.xml` | English pages, blog, reviews, FAQ |
| `/sitemap-{locale}.xml` | Per-locale urlsets |
| `/sitemap-i18n.xml` | i18n sitemap index |
| `/sitemap-images.xml` | Image sitemap |

Validate after build:

```bash
npm run validate:sitemaps
```

## Deploy (Cloudflare Pages)

1. Create a Cloudflare Pages project named **grayzonecheats**
2. Build command: `npm run build`, Output directory: `dist`
3. Custom domain: **grayzonecheats.net**
4. Attach Worker from `wrangler.toml` for www → apex redirect

```bash
npm run build:validate
npm run pages:deploy
```

## Brand Studio

During `npm run dev`, open `/brand-studio/` on localhost to edit:

- Brand name, domain, game, anti-cheat, checkout URL
- SEO titles and descriptions (18 templates)
- Hero copy, nav labels, theme colors
- Sitemap image titles and captions

Brand Studio is stripped from production builds and blocked on non-localhost hosts.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with Brand Studio |
| `npm run build` | Production build |
| `npm run sync:brand` | Sync domain to astro.config, robots.txt, manifest |
| `npm run generate:i18n` | Regenerate localized content |
| `npm run optimize:images` | Generate responsive WebP variants |
| `npm run generate:brand` | Regenerate logo/favicon from brand colors |

## License

Proprietary — Gray Zone Cheats marketing site template instance.
