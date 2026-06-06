# eduardodadalt.com

My personal site — a bilingual (🇧🇷 / 🇺🇸) developer portfolio that doubles as a
printable résumé. The same page that you browse on the web exports to a clean,
ATS-friendly PDF straight from the browser's **Print → Save as PDF** dialog.

🔗 **Live:** [eduardodadalt.com](https://eduardodadalt.com)

## Highlights

- **One source, two outputs** — a dev/terminal-themed interactive site on screen,
  and a clean light résumé when printed. Print styles flip the palette, freeze every
  animation on its final frame and swap the hero for a compact résumé header.
- **Internationalized** — English and Portuguese, with UI copy separated from résumé
  content. Dates are stored once as ISO values and formatted per-locale with `Intl`.
- **Subtle, accessible motion** — scroll-reveal, a hero typewriter and animated skill
  bars, all honoring `prefers-reduced-motion` and disabled for print.
- **Dark / light / system** themes.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack) + [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) primitives
- [next-themes](https://github.com/pacocoursey/next-themes) for theming

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). A locale prefix (`/en` or `/pt`)
is added automatically based on your `Accept-Language` header.

```bash
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # eslint (flat config)
```

## Project structure

```
src/
├─ app/[locale]/      # App Router pages, layout, OG image
├─ components/        # UI, sections, animation primitives (Reveal, Typing, …)
├─ content/resume.ts  # single source of truth for résumé data (localized)
├─ i18n/              # UI message catalogs + getMessages()
├─ constants/         # supported locales
├─ lib/               # date formatting, localized helper, utils
├─ proxy.ts           # locale-negotiation redirect (Next 16 proxy)
└─ styles/globals.css # design tokens + print styles
```

To update the résumé, edit [`src/content/resume.ts`](src/content/resume.ts) (data) and
[`src/i18n/`](src/i18n) (UI strings).
