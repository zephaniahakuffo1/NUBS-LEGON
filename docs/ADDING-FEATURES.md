# Adding a new feature or section

For whoever builds new parts of the site (a developer, or Claude Code). Content editors do not need this page;
they use `docs/CONTENT.md`.

## How the site is put together

```
public/index.html      the skeleton: section order, fixed words, empty containers with ids
public/content/*.js    the content: each file fills one part of NUBS_DATA
public/js/main.js      the builder: one render function per section turns content into HTML
public/css/theme.css   colours, fonts, corner roundness (CSS variables)
public/css/style.css   all layout and styling; uses the theme variables
scripts/check.js       the safety check, run by hand, by GitHub and by Cloudflare before publishing
```

No framework, no bundler, no build step. What is in `public/` is exactly what gets published.

## The recipe for a new section

Example: a "Testimonies" section.

1. **Content file.** Create `public/content/testimonies.js`. Start with the same comment banner as the other
   files (what it is, how to add one, the three rules), then:
   ```js
   NUBS_DATA.testimonies = [
     { name: "Ama", text: "..." },
   ];
   ```
2. **Load it.** In `index.html`, add `<script src="content/testimonies.js"></script>` with the other content
   files, above `main.js`.
3. **Container.** Add the `<section>` to `index.html` where it belongs, with an empty container that has an id
   (`<div id="testimonyList"></div>`), plus a nav link if it needs one.
4. **Renderer.** In `main.js`, write `renderTestimonies()` and add it to the list at the bottom of the file
   (anywhere before `highlightKeywords`, which must stay last). Add the name to the `LISTS` line near the top so
   an unreadable file becomes an empty list instead of an error, and add it to the file map comment.
5. **Style.** Add the CSS to the end of `style.css` under its own heading comment. Use `var(--blue)`,
   `var(--gold)` and the other theme variables, never a raw colour code, so theme changes reach it.
6. **Check rule.** In `scripts/check.js`, add the file to `HOME` and a block under "CONTENT RULES" that checks
   the fields editors will type (required text, dates, links, files).
7. **Guide.** Add one row to the table in `docs/CONTENT.md`.
8. **Test.** `npm run check`, then `npm start` and look at it on a phone-sized window and a desktop one.

## Rules that keep the site unbreakable

- Build HTML with the `h(tag, attrs, ...children)` helper. Never put content values into `innerHTML`.
- A renderer must cope with an empty list (hide the section or show an "empty" message).
- All times are Ghana time, which equals UTC. Use `Date.UTC` and the UTC getters. Dates are `"YYYY-MM-DD"`,
  times `"HH:MM"`.
- Forms never send data to a server. They validate and open a prefilled WhatsApp link (`waLink`).
- An empty link `""` in the content must hide or disable its button, not break it.
- Files under `/assets/` are cached for a year. A changed picture needs a new file name.
- Do not rename or remove an `id` in `index.html` without changing `main.js` too. The check catches this.
- Keep `public/` free of anything that is not part of the site. Everything in it is published.

## Working on something big

Do it on a branch so the live site is untouched until it is ready:

```bash
git checkout -b testimonies      # start
# ...work, npm run check, npm start...
git push -u origin testimonies   # GitHub runs the check; open a pull request
```

Merging the pull request into `main` publishes it. `git revert` undoes it.
