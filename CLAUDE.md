# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static one-page website for NUBS Legon (National Union of Baptist Students, University of Ghana). Plain HTML, CSS
and vanilla JS: no framework, no bundler, no build step, no backend. The maintainers are non-developers, so
content, pictures and theme are kept apart from the code: content in `public/content/`, colours and fonts in
`public/css/theme.css` (see `docs/CONTENT.md`). New sections follow the recipe in `docs/ADDING-FEATURES.md`.

Everything served lives in `public/`. The deploy config is `wrangler.jsonc` (Cloudflare, static assets from
`./public`, `404-page` not-found handling, `build.command` runs the site check). Response headers come from
`public/_headers`.

## Commands

```bash
npm run check                                   # scripts/check.js: validates content, theme, files, ids (no tests exist)
npm start                                       # local preview: serve public/ on port 3000
npm run format                                  # prettier (.prettierrc: width 110, double quotes); index.html is not formatted
python3 scripts/add-photos.py "Album" a.jpg     # gallery: resize + thumbs/ copy + line in content/gallery.js (needs pillow)
python3 scripts/optimize-images.py photo.jpg    # shrink one non-gallery picture
```

Opening `index.html` via `file://` breaks some features; always serve it over HTTP. Run `npm run check` after
every content, theme or id change, and also confirm the affected section still renders.

## Architecture

- `public/index.html` is the skeleton: section order, static copy, empty containers with ids, SEO/OG/JSON-LD meta.
  At the bottom an inline script creates `window.NUBS_DATA = {}`, then each `content/*.js` file assigns its own
  keys (`NUBS_DATA.events = [...]`), then `js/main.js` runs. Content files are independent: a syntax error in one
  leaves only its own key missing.
- `public/content/*.js`: `site.js` (`site`, `contact`, `yearTheme`, `forms`), `schedule.js` (`serviceSchedule`),
  `auxiliaries.js`, `quiz.js`, `books.js`, `sermons.js` (`sermonChannel`, `sermons`), `freshers.js`, `events.js`,
  `notices.js`, `leaders.js` (`leadersParagraph`, `leaders`), `gallery.js`. Each starts with a plain-English
  banner for non-technical editors; keep that style.
- `public/js/main.js` is one IIFE that reads `window.NUBS_DATA`, defaults missing lists to `[]`, and runs a fixed
  list of `render*()` / `setup*()` functions at the bottom, each inside try/catch so one failure cannot stop the
  rest. Each renderer finds an empty container by id and fills it from the matching data. The header comment is
  a file map. `highlightKeywords` must stay last because it walks the finished DOM.
- `public/css/theme.css` holds every `:root` variable (brand colours `--blue`, `--navy`, `--gold` with matching
  `-rgb` triplets, shades, fonts, radius). `public/css/style.css` is the single stylesheet (table of contents at
  the top) and must use those variables, not raw brand colour codes. Pale blue tints in `style.css` are still
  hardcoded.
- `scripts/check.js` (Node, no dependencies) is the safety gate, run locally, by `.github/workflows/check.yml`
  and by Cloudflare before deploy. When adding a content type, add its rules there.

## Conventions that matter

- Build DOM with the `h(tag, attrs, ...kids)` helper in `main.js`, which inserts text as text. Never use
  `innerHTML` with data values.
- All times are Ghana time = UTC; date code uses UTC getters/`Date.UTC` deliberately. Dates in data are
  `"YYYY-MM-DD"`, times `"HH:MM"`. Past events hide themselves at render time.
- Forms never POST anywhere: they validate (Ghana phone numbers normalised to digits) and open a prefilled
  WhatsApp link (`waLink`). Empty-string links in the data hide/disable the related button.
- Gallery entries are `{ file, album, caption? }`; the full-size file and its `thumbs/` copy share one file name
  under `assets/images/gallery/`. `/assets/*` is served with a one-year immutable cache, so replacing an asset
  should use a new filename.
- If the domain changes, update the canonical link and absolute `og:image` in `index.html`, `sitemap.xml`, and
  the `Sitemap:` line in `robots.txt`.
- Contact details appear in two places: `contact` in `content/site.js` and the `Organization` JSON-LD in
  `index.html`. Keep them in sync (the check enforces email and phone). The site email is
  `nubslegon080@gmail.com`; the old `nubslegon17@gmail.com` is outdated and must not be used anywhere.

## Deployment and SEO

- Live at https://nubslegon.com (and `www.`). Code is on GitHub; every push to `main` triggers a Cloudflare
  Workers (static assets) rebuild. Rollback: `git revert HEAD` + push, or Worker > Deployments in the dashboard.
- Domain bought on Porkbun, nameservers point to Cloudflare, DNS managed in Cloudflare. Custom domains must be
  added from Worker > Settings > Domains (records added by hand aren't Worker-type/proxied and break the site).
- Keep `public/` free of large non-site files: the Cloudflare build fails on assets over its size limit (a stray
  `.git` pack once did this, which is why the site moved to `public/`). The check fails on non-site files in `public/`.
- SEO in `index.html`: canonical, Open Graph + Twitter card, `WebSite` + `Organization` JSON-LD (parent org
  NUBS Ghana, `sameAs` Instagram/TikTok/WhatsApp channel). Link preview image is `assets/images/og-image-v2.jpg` (1200x630); a new
  preview image needs a new filename and both `og:image` and `twitter:image` updated. Favicons must be square,
  multiples of 48 px.
- If link previews stop working, Cloudflare's Bot Fight Mode / "Block AI bots" may be blocking crawlers.
- Marketing links use `?s=<channel>` query tags (e.g. `?s=church`) to attribute traffic in Cloudflare Analytics.
  Don't strip or break query-string handling.
- Sitelinks can't be requested from Google. A multi-page version (`/about`, `/events`, `/freshers`, `/library`,
  `/sermons`, `/leadership`, `/gallery`, `/contact`) has been offered for this but not approved or built.

## Project context

- Still-empty social fields in `content/site.js`: `facebook`, `youtube` (waiting for the
  union to create those accounts).
- Five alternative colour palettes are under consideration; adopting one means changing the variables in
  `css/theme.css`. The current Royal and Gold palette stays unless the user says otherwise.
- Past bug: an unclosed `/* */` comment in the old single data file swallowed the next key and broke several
  sections. That is why content is now split per topic and checked before deploy.
- Promo videos were recorded with Playwright driving the live site. For automated clicks, use `element.click()`
  through `evaluate` (Playwright's `.click()` fights the sticky header). Wait for `#lightImg` to load before
  screenshotting the lightbox.
- Privacy: the content files publish leaders' WhatsApp numbers and the freshers group invite link. Don't add
  personal data or photos without the user confirming consent.
