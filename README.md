# Monetira Website

React + Vite + TypeScript + Tailwind CSS site for Monetira.

- **Live address:** https://monetira.com (not connected yet)

## What to edit

| To change | Edit this file |
|---|---|
| Audit price, scope, deliverables, turnaround, contact email, Tally links | `src/data/site.ts` |
| Website text (headlines, services, steps, About) | `src/data/content.ts` |
| Brand colors and fonts | `src/styles/index.css` (the `@theme` block) |
| Logo | `public/images/monetira-logo.png` (original kept as `monetira-logo-original.png`) |

Editing a file on GitHub (pencil icon, then "Commit changes") on the `main` branch automatically rebuilds the site on Netlify in about 2 minutes.

## Forms

Forms use Tally. The Contact page embeds the form set in `contactTallyUrl`, and the private /website-vision page embeds the form set in `visionTallyUrl` (both in `src/data/site.ts`). No passwords or API keys are needed or stored in this project.

## Deployment (Netlify)

The code lives in this GitHub repository. Netlify is connected to it and rebuilds the site every time `main` changes. Build settings are in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 22

The custom domain monetira.com is added in Netlify (Domain management), and DNS is set at GoDaddy using the records Netlify shows.

## Search engines

- Page titles and descriptions: `src/data/seo.json`. The build writes them into each page's HTML and generates `sitemap.xml`.
- `public/robots.txt` allows all pages and points to the sitemap.

## Launch

See Deployment above: add monetira.com in Netlify, add the DNS records at GoDaddy, and Netlify provides HTTPS automatically.

## Run on a computer (optional)

Install Node.js 22, then in this folder run `npm install` and `npm run dev`.
