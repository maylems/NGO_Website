# ACHDR Website

Website for the **Association pour l’Action Humanitaire et le Développement Durable (ACHDR)**, an NGO based in Chad. The site presents the organisation’s domains of intervention, field actions, publications, participation opportunities and contact information in French.

Built with Next.js App Router, React, TypeScript and Tailwind CSS. There is no CMS and no database: page content lives in React components and local data files.

## Stack

- Next.js `16.4.6` with the App Router and Turbopack
- React `19.3.0`
- TypeScript `5`
- Tailwind CSS `4` via `@tailwindcss/turbopack`
- Archivo font loaded with `next/font/google`
- Local images optimised by `next/image`

No environment variables are required.

## Requirements

- Node.js `>=20.9.0`
- npm

## Getting Started

```bash
npm install
npm run dev
```

Open the URL printed by Next.js, usually [http://localhost:3000](http://localhost:3000). If port 3000 is already in use, Next.js selects the next available port.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimised production build and run TypeScript checks |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Run a standalone TypeScript check |

There is currently no automated test suite.

## Routes

| Route | Description |
| --- | --- |
| `/` | Home page: hero, latest publications, domains of intervention, field actions/news, participation section, community banner |
| `/publications` | Publications archive built from `src/lib/publications.ts` |
| `/mentions-legales` | Legal notice and privacy policy |

The global header and footer are shared by all routes.

## Project Structure

```text
src/
  app/
    layout.tsx                 Root layout, metadata and global footer
    page.tsx                   Home page composition
    publications/page.tsx      Publications archive
    mentions-legales/page.tsx  Legal notice and privacy policy
    globals.css                Tailwind import, brand tokens and base styles
  components/
    site-header.tsx            Desktop and mobile navigation
    hero.tsx                   Home hero
    publications-section.tsx   Latest publications section and reusable grid
    work-section.tsx           Domains of intervention
    region-section.tsx         Field actions and latest news
    participation-section.tsx  “Participer” section
    community-banner.tsx       “Rejoignez notre communauté” banner
    site-footer.tsx            Site-wide footer
    logo.tsx                   ACHDR wordmark
    icons.tsx                  Shared line icons
  lib/
    publications.ts            Publication data and external article links
public/
  images/                      Local photography
  images/CREDITS.md            Image sources and licences
```

## Content and Design

- The site is written in French. Keep French accents, punctuation and organisation names intact.
- Brand tokens are defined in `src/app/globals.css`:
  - Accent: `#00a9e0`
  - Accent dark: `#008fc0`
- The design uses a white background, dark neutral type, light grey section separators and a strong cyan accent. Avoid introducing gradients, decorative cards or heavy shadows.
- Home page section order is defined in `src/app/page.tsx`.
- The footer is rendered once in `src/app/layout.tsx`, so it appears on every route.
- Metadata is defined in `src/app/layout.tsx`; page-specific metadata is defined in each route file.

### Publications

Edit `src/lib/publications.ts` to update the publication cards. Each entry includes an ISO date, display date, title, description, image, image alt text and external article URL.

The publication archive uses the reusable `PublicationsGrid` component from `src/components/publications-section.tsx`.

### Contact and External Links

- General contact: `achdr015@gmail.com`
- Verified ACHDR profile: [https://peacebyafrica.com/achdr-fr/](https://peacebyafrica.com/achdr-fr/)
- Footer links to the verified profile for the “À propos” and “Nos partenaires” entries.
- No verified official ACHDR social media accounts were available. Social icons are intentionally omitted; “Suivez-nous” links to the site’s news section instead. Do not add invented social URLs.

### Images

Images in `public/images/` come from ACHDR archives or free-licence image banks. See `public/images/CREDITS.md` before replacing or reusing them. When adding images, update the credits file and provide meaningful alt text unless the image is purely decorative.

### Legal Page

The legal and privacy copy is intentionally minimal and factual. It states that the site has no data-collection forms, analytics or advertising trackers. Review the page with ACHDR before publishing so that the publisher, hosting and data-protection details are complete.

## Known Follow-ups

- Header navigation still needs final destinations for `Qui sommes-nous`, `Nos actions` and `Publications`. `Qui sommes-nous` and `Publications` currently use `#`, and `#nos-actions` has no matching section.
- The header search and language controls are presentational only.
- No automated tests are configured; use lint, TypeScript and a production build for validation.
- Legal copy should be reviewed before production deployment.

## Deployment

The project can be deployed to any platform that supports Next.js. Vercel is the simplest option:

1. Import the repository into Vercel.
2. Keep the default build command: `npm run build`.
3. No environment variables are required.

For a local production check:

```bash
npm run build
npm run start
```
