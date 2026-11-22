# Monetira Website

React + Vite + TypeScript + Tailwind CSS site for Monetira.

- **Preview address:** https://monetira.github.io/monetira-website/
- **Future live address:** https://monetira.com (not connected yet)

## What to edit

| To change | Edit this file |
|---|---|
| Audit price, scope, deliverables, turnaround, contact email, Tally links | `src/data/site.ts` |
| Website text (headlines, services, steps, About) | `src/data/content.ts` |
| Brand colors and fonts | `src/styles/index.css` (the `@theme` block) |
| Logo | `public/images/monetira-logo.png` (original kept as `monetira-logo-original.png`) |

Editing a file on GitHub (pencil icon, then "Commit changes") automatically rebuilds the site on Cloudflare Pages in about 2 minutes.

## Forms

Forms use Tally. The Contact page embeds the form set in `contactTallyUrl`, and the private /website-vision page embeds the form set in `visionTallyUrl` (both in `src/data/site.ts`). No passwords or API keys are needed or stored in this project.

## Deployment (Cloudflare Pages)

The code lives in this GitHub repository. Cloudflare Pages is connected to it and rebuilds the site on every change to `main`.

Cloudflare Pages settings:
- Framework preset: Vite (or None)
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION` = `22`

## Search engines

- Page titles and descriptions: `src/data/seo.json`. The build writes them into each page's HTML and generates `sitemap.xml`.
- `public/robots.txt` allows all pages and points to the sitemap.
- `/website-vision` is marked noindex and left out of the sitemap.

## Launch

In Cloudflare Pages, add the custom domain monetira.com (and www), then update DNS as Cloudflare instructs.

## Run on a computer (optional)

Install Node.js 22, then in this folder run `npm install` and `npm run dev`.
