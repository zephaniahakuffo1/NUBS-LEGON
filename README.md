# NUBS Legon website

Official website of **NUBS Legon**, the National Union of Baptist Students at the University of Ghana, Legon.
Live at https://nubslegon.com.

It is a fast static site: plain HTML, CSS and JavaScript. No framework, no build step, no database, no monthly
server bill. The words, pictures and colours are kept apart from the code so the fellowship can update the site
without programming.

## Where things are

```
public/                  everything that gets published
  index.html             page skeleton, fixed headings, search-engine details
  404.html               "page not found" page
  content/               THE CONTENT: one small file per topic (events, books, sermons, leaders ...)
  css/theme.css          THE THEME: colours, fonts, corner roundness
  css/style.css          layout and styling
  js/main.js             builds the page from the content files
  assets/images/         logo, hero, leaders, auxiliaries, gallery (large + thumbs/)
  assets/books/          book PDFs and covers
scripts/
  check.js               safety check: finds mistakes before they are published
  add-photos.py          adds gallery photos in one step
  optimize-images.py     shrinks a single picture
docs/
  CONTENT.md             how to update anything (start here)
  ADDING-FEATURES.md     how to build a new section
  DEPLOY.md              hosting, domain, undoing a publish
wrangler.jsonc           Cloudflare settings (publishes public/, runs the check first)
```

## The four commands

```bash
npm run check    # is everything correct? plain-English report
npm start        # preview at http://localhost:3000
git add . && git commit -m "what changed" && git push    # publish
git revert HEAD && git push                              # undo the last publish
```

Needs [Node.js](https://nodejs.org) (any recent version). Nothing to install.

Do not open `index.html` by double-clicking it: some features only work through `npm start` (or the VS Code
Live Server extension, opened on the `public` folder).

## Safety net

A mistake in a content file cannot take the site down:

1. `npm run check` catches it on your computer and says where it is.
2. GitHub runs the same check on every push and shows a red X.
3. Cloudflare runs it again before publishing and keeps the previous site online if it fails.
4. Even if a broken file got through, only its own section would be empty. The rest of the page keeps working.

## Guides

- Changing words, pictures, books, events, colours: [docs/CONTENT.md](docs/CONTENT.md)
- Building new features: [docs/ADDING-FEATURES.md](docs/ADDING-FEATURES.md)
- Hosting and domain: [docs/DEPLOY.md](docs/DEPLOY.md)
