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

Editing a file on GitHub (pencil icon, then "Commit changes") on the `main` branch automatically rebuilds the site on GitHub Pages in about 2 minutes.

## Forms

Forms use Tally. The Contact page embeds the form set in `contactTallyUrl`, and the private /website-vision page embeds the form set in `visionTallyUrl` (both in `src/data/site.ts`). No passwords or API keys are needed or stored in this project.

## Deployment (GitHub Pages)

The site is built and published by the GitHub Actions workflow in `.github/workflows/deploy.yml` every time `main` changes.

One-time settings (repository Settings > Pages):
- Source: GitHub Actions
- Custom domain: monetira.com, then Enforce HTTPS once it becomes available

DNS for monetira.com (at the domain's DNS provider):
- A records for monetira.com: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- CNAME record for www: monetira.github.io

The build uses `base: '/'`, so it is meant to be viewed at monetira.com, not at the github.io project address.

## Search engines

- Page titles and descriptions: `src/data/seo.json`. The build writes them into each page's HTML and generates `sitemap.xml`.
- `public/robots.txt` allows all pages and points to the sitemap.

## Launch

See Deployment above: set the custom domain in Settings > Pages, add the DNS records, then turn on Enforce HTTPS.

## Run on a computer (optional)

Install Node.js 22, then in this folder run `npm install` and `npm run dev`.
