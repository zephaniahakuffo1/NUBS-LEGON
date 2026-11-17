#!/usr/bin/env node
/* ==========================================================================
   NUBS LEGON PAGE SYNC
   --------------------------------------------------------------------------
   Run:  npm run sync

   Every page (index.html, about.html, events.html, ...) has three shared
   parts: SHARED HEAD (icons, fonts, styles), SHARED TOP (menu) and SHARED
   BOTTOM (footer, pop-ups, scripts). Edit them ONLY in index.html, then run
   this. It copies them into every other page so all pages stay the same.

   npm run check fails if a page's shared part is different from index.html.
   ========================================================================== */
"use strict";

const fs = require("fs");
const path = require("path");

const PUB = path.join(__dirname, "..", "public");
const BLOCKS = ["SHARED HEAD", "SHARED TOP", "SHARED BOTTOM"];

// Every page of the site, except the "page not found" page.
function pages() {
  return fs
    .readdirSync(PUB)
    .filter((f) => f.endsWith(".html") && f !== "404.html")
    .sort((a, b) => (a === "index.html" ? -1 : b === "index.html" ? 1 : a.localeCompare(b)));
}

// The text of one shared part, from its start comment to its end comment, or null.
function block(html, name) {
  const m = html.match(new RegExp(`[ \\t]*<!-- ${name}:[\\s\\S]*?<!-- /${name} -->`));
  return m ? m[0] : null;
}

module.exports = { PUB, BLOCKS, pages, block };

if (require.main === module) {
  const index = fs.readFileSync(path.join(PUB, "index.html"), "utf8");
  let changed = 0;
  for (const f of pages().filter((p) => p !== "index.html")) {
    const file = path.join(PUB, f);
    let html = fs.readFileSync(file, "utf8");
    const before = html;
    for (const name of BLOCKS) {
      const want = block(index, name);
      if (!want) {
        console.error(`index.html has no ${name} part. Put back its <!-- ${name}: --> and <!-- /${name} --> lines.`);
        process.exit(1);
      }
      if (!block(html, name)) {
        console.error(`${f} has no ${name} part. Copy one from index.html by hand once, then run this again.`);
        process.exit(1);
      }
      html = html.replace(block(html, name), () => want);
    }
    if (html !== before) {
      fs.writeFileSync(file, html);
      changed++;
      console.log(`updated ${f}`);
    }
  }
  console.log(changed ? `Done. ${changed} page(s) updated. Now run: npm run check` : "All pages already match index.html.");
}
