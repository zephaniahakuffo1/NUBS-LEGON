# Hosting and publishing

## How it is set up

- **GitHub** keeps the code and its history.
- **Cloudflare Workers** (static assets) hosts the site for free. Every push to the `main` branch publishes.
- **Porkbun** is where the domain `nubslegon.com` was bought. Its nameservers point to Cloudflare, and DNS is
  managed in Cloudflare.

The only cost is the domain.

## What happens when you push

1. Cloudflare downloads the code.
2. It runs `node scripts/check.js` (set in `wrangler.jsonc`).
3. If the check passes, the `public/` folder goes live, usually within a minute.
4. If the check fails, nothing is published and the previous site stays online. The reason is in Cloudflare
   under Workers & Pages > nubs-legon > Deployments (open the failed build), and you get the same report by
   running `npm run check` on your computer.

Visitors may see changed words up to 5 minutes later, and changed layout or colours up to an hour later,
because browsers keep copies. Pictures and PDFs are kept for a year, which is why a changed picture needs a new
file name.

## Undo a publish

- `git revert HEAD` then `git push`, or
- Cloudflare > Workers & Pages > nubs-legon > Deployments > pick the previous one > Rollback.

Nothing is ever lost: every version is in the git history.

## Rules for the domain

- Add custom domains only from Worker > Settings > Domains. DNS records added by hand are not connected to the
  Worker and break the site.
- If the domain ever changes, update: the canonical link, `og:url`, `og:image`, `twitter:image` and the JSON-LD
  block in `public/index.html`; `public/sitemap.xml`; and the `Sitemap:` line in `public/robots.txt`.
- If link previews (WhatsApp, Facebook) stop working, check that Cloudflare's Bot Fight Mode or "Block AI bots"
  is not blocking them.

## The link preview picture

It is `public/assets/images/og-image-v2.jpg` (1200 x 630). To change it, save the new picture under a new name
(`og-image-v3.jpg`) and update both `og:image` and `twitter:image` in `index.html`.

## Keep `public/` clean

Everything inside `public/` is published, and Cloudflare refuses files over 25 MB. Keep working files, originals
and design documents outside it. The check stops a publish if it finds something that does not belong.

## Checklist after a big change

- [ ] `npm run check` says "All good"
- [ ] Page looks right on a phone and on a laptop (`npm start`)
- [ ] WhatsApp buttons open the right chat
- [ ] Books open and download
- [ ] The live site shows the change after a few minutes
