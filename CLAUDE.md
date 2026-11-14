# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static one-page website for NUBS Legon (National Union of Baptist Students, University of Ghana). Plain HTML, CSS
and vanilla JS: no framework, no bundler, no build step, no backend. The maintainers are non-developers, so content
edits are meant to happen in a single data file (see `docs/CONTENT.md`).

## Layout gotcha: everything served lives in `public/`

The site was moved into `public/`, but some files still describe the old root layout:

- `README.md`, `docs/*.md` and `scripts/optimize-images.py` refer to `index.html`, `js/...`, `assets/...` at the
  repo root. Read those as `public/index.html`, `public/js/...`, `public/assets/...`.
- `package.json` scripts still point at the root (`serve .`, `node --check js/main.js`), so they do not work as
  written. Use the commands below instead.
- `netlify.toml` publishes `.`; the active deploy config is `wrangler.jsonc` (Cloudflare, static assets from
  `./public`, `404-page` not-found handling). Response headers come from `public/_headers`.

## Commands

```bash
npx --yes serve public -l 3000                                          # local preview
node --check public/js/main.js && node --check public/js/fellowship-data.js   # syntax check (no tests exist)
npx --yes prettier --write "**/*.{html,css,js,json,md}"                 # format (.prettierrc: width 110, double quotes)
python3 scripts/optimize-images.py photo.jpg                            # resize photo + thumbs/ copy (needs pillow)
```

Opening `index.html` via `file://` breaks some features; always serve it over HTTP.

## Architecture

- `public/js/fellowship-data.js` declares a global `const NUBS_DATA = {...}` holding almost all page content
  (site info, contact, `serviceSchedule`, `auxiliaries`, `quiz`, `books`, `sermons`, `freshers`, `events`,
  `notices`, `leaders`, `gallery`, `forms`). It is heavily commented for non-technical editors; keep that style.
- `public/js/main.js` is one IIFE that reads `NUBS_DATA` by name (not `window.NUBS_DATA`, since `const` globals
  aren't on `window`) and runs a fixed sequence of `render*()` / `setup*()` functions at the bottom. Each renderer
  finds an empty container by id in `index.html` and fills it from the matching data list. The header comment
  is a file map of these functions. `highlightKeywords()` must stay last because it walks the finished DOM.
- `public/index.html` is the skeleton: section order, static copy, empty containers with ids, SEO/OG/JSON-LD meta.
  Script order matters: `fellowship-data.js` must load before `main.js`.
- `public/css/style.css` is a single stylesheet with a table of contents at the top; brand colours are CSS
  variables in `:root` (`--blue`, `--blue-dark`, `--gold`, `--navy`).

## Conventions that matter

- Build DOM with the `h(tag, attrs, ...kids)` helper in `main.js`, which inserts text as text. Never use
  `innerHTML` with data values.
- All times are Ghana time = UTC; date code uses UTC getters/`Date.UTC` deliberately. Dates in data are
  `"YYYY-MM-DD"`, times `"HH:MM"`. Past events hide themselves at render time.
- Forms never POST anywhere: they validate (Ghana phone numbers normalised to digits) and open a prefilled
  WhatsApp link (`waLink`). Empty-string links in the data hide/disable the related button.
- Gallery images need a full-size file plus a `thumbs/` copy; `/assets/*` is served with a one-year immutable
  cache, so replacing an asset should use a new filename (see recent "new preview image filename" commits).
- If the domain changes, update the canonical link and absolute `og:image` in `index.html`, `sitemap.xml`, and
  the `Sitemap:` line in `robots.txt`.
- Contact details appear in two places: `contact` in `fellowship-data.js` and the `Organization` JSON-LD in
  `index.html` (also `docs/DEPLOY.md`'s checklist). Keep them in sync. The site email is
  `nubslegon080@gmail.com`; the old `nubslegon17@gmail.com` is outdated and must not be used anywhere.

## Deployment and SEO

- Live at https://nubslegon.com (and `www.`). Code is on GitHub; every push to `main` triggers a Cloudflare
  Workers (static assets) rebuild. Rollback: `git revert HEAD` + push, or Worker > Deployments in the dashboard.
- Domain bought on Porkbun, nameservers point to Cloudflare, DNS managed in Cloudflare. Custom domains must be
  added from Worker > Settings > Domains (records added by hand aren't Worker-type/proxied and break the site).
- Keep `public/` free of large non-site files: the Cloudflare build fails on assets over its size limit (a stray
  `.git` pack once did this, which is why the site moved to `public/`). `.assetsignore` is the fallback.
- SEO in `index.html`: canonical, Open Graph + Twitter card, `WebSite` + `Organization` JSON-LD (parent org
  NUBS Ghana, `sameAs` Instagram/TikTok). Link preview image is `assets/images/og-image-v2.jpg` (1200x630); a new
  preview image needs a new filename and both `og:image` and `twitter:image` updated. Favicons must be square,
  multiples of 48 px.
- If link previews stop working, Cloudflare's Bot Fight Mode / "Block AI bots" may be blocking crawlers.
- Marketing links use `?s=<channel>` query tags (e.g. `?s=church`) to attribute traffic in Cloudflare Analytics.
  Don't strip or break query-string handling.
- Sitelinks can't be requested from Google. A multi-page version (`/about`, `/events`, `/freshers`, `/library`,
  `/sermons`, `/leadership`, `/gallery`, `/contact`) has been offered for this but not approved or built.

## Project context

- Still-empty social fields in `fellowship-data.js`: `facebook`, `youtube`, `whatsappChannel` (waiting for the
  union to create those accounts).
- Five alternative colour palettes are under consideration; adopting one means changing the `:root` variables in
  `style.css`. The current Royal and Gold palette stays unless the user says otherwise.
- Past bug: an unclosed `/* */` comment in `fellowship-data.js` swallowed the next key and broke several sections.
  Run the syntax check after data edits, and also confirm the affected section still renders.
- Promo videos were recorded with Playwright driving the live site. For automated clicks, use `element.click()`
  through `evaluate` (Playwright's `.click()` fights the sticky header). Wait for `#lightImg` to load before
  screenshotting the lightbox.
- Privacy: the data file publishes leaders' WhatsApp numbers and the freshers group invite link. Don't add
  personal data or photos without the user confirming consent.
- The `tatus` file at the repo root came from a mistyped command and is not part of the site.
