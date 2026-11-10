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

Editing a file on GitHub (pencil icon, then "Commit changes") automatically rebuilds the site in about 2 minutes.

## Forms

Forms use Tally. The Free Snapshot page embeds the Tally form set in `snapshotTallyUrl`. When the Tally Contact form is ready, paste its link into `contactTallyUrl`. No passwords or API keys are needed or stored in this project.

## Deployment

Every change to the `main` branch runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repository settings, **Pages > Build and deployment > Source** must be set to **GitHub Actions**.

## At launch (only after approval)

1. In `vite.config.ts`, change `base: '/monetira-website/'` to `base: '/'`.
2. In `index.html`, delete the line `<meta name="robots" content="noindex, nofollow" />`.
3. Add a file `public/CNAME` containing `monetira.com`.
4. Connect the domain in GitHub Pages settings, then update DNS.

## Run on a computer (optional)

Install Node.js 22, then in this folder run `npm install` and `npm run dev`.
