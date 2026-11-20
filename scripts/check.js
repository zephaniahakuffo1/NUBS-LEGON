#!/usr/bin/env node
/* ==========================================================================
   NUBS LEGON SITE CHECK
   --------------------------------------------------------------------------
   Run:  npm run check        (or: node scripts/check.js)

   Reads the content files, the theme and the page, and reports mistakes in
   plain words BEFORE they reach the live site: missing commas, wrong dates,
   pictures or PDFs that do not exist, bad phone numbers, and so on.

   PROBLEMS stop the site from being published. NOTES are only advice.
   Cloudflare runs this same check before every publish (see wrangler.jsonc),
   so a broken edit never replaces the working site.

   No packages to install. To check a new kind of content, add a block to
   the "CONTENT RULES" part below (docs/ADDING-FEATURES.md explains how).
   ========================================================================== */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { pages, block, BLOCKS } = require("./sync-pages.js");

const ROOT = path.join(__dirname, "..");
const PUB = path.join(ROOT, "public");
const KB = 1024;
const MB = 1024 * KB;
const MAX_FILE = 20 * MB; // Cloudflare refuses files over 25 MB; stay well under
const BIG_PICTURE = 700 * KB;
const OLD_EMAIL = "nubslegon17@gmail.com";

const problems = [];
const notes = [];
const problem = (where, msg) => problems.push(`${where}\n      ${msg}`);
const note = (where, msg) => notes.push(`${where}\n      ${msg}`);
const read = (rel) => fs.readFileSync(path.join(PUB, rel), "utf8");

/* ---------- Small helpers --------------------------------------------------- */

const isText = (v) => typeof v === "string";
const filled = (v) => isText(v) && v.trim() !== "";
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const TIME = /^([01]\d|2[0-3]):[0-5]\d$/;

function realDate(s) {
  if (!isText(s) || !DATE.test(s)) return false;
  const [y, m, d] = s.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d;
}

// Every file under public/, as "assets/images/logo.png" (forward slashes, exact capital letters).
function listFiles(dir, base = "") {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) out = out.concat(listFiles(path.join(dir, e.name), rel));
    else out.push(rel);
  }
  return out;
}
const ALL_FILES = listFiles(PUB);
const FILE_SET = new Set(ALL_FILES);
const LOWER = new Map(ALL_FILES.map((f) => [f.toLowerCase(), f]));
const used = new Set(); // files the site refers to

// A picture or PDF named in the content must exist, with the same capital letters.
function needFile(where, field, rel, { maxSize = MAX_FILE, picture = false } = {}) {
  if (!filled(rel)) return problem(where, `"${field}" is empty. Type the file's path, for example "assets/images/name.jpg".`);
  if (/^https?:/.test(rel)) return true;
  const clean = rel.replace(/^\//, "");
  if (!FILE_SET.has(clean)) {
    const near = LOWER.get(clean.toLowerCase());
    problem(
      where,
      near
        ? `"${field}" says "${rel}" but the file is named "${near}". Capital letters must match exactly.`
        : `"${field}" says "${rel}" but there is no such file in the public folder. Check the spelling, or add the file.`
    );
    return false;
  }
  used.add(clean);
  const size = fs.statSync(path.join(PUB, clean)).size;
  if (size > maxSize) problem(where, `"${rel}" is ${(size / MB).toFixed(1)} MB. That is too big to publish. Make it smaller.`);
  else if (picture && size > BIG_PICTURE)
    note(where, `"${rel}" is ${Math.round(size / KB)} KB. Pictures over 700 KB load slowly on mobile data. Shrink it with scripts/optimize-images.py.`);
  return true;
}

function needText(where, item, ...fields) {
  for (const f of fields)
    if (!filled(item[f])) problem(where, `"${f}" is missing or empty. Add some words inside the quotes.`);
}
function optionalText(where, item, ...fields) {
  for (const f of fields)
    if (item[f] !== undefined && !isText(item[f])) problem(where, `"${f}" must be text inside "double quotes".`);
}
function needLink(where, field, v, { optional = true } = {}) {
  if (v === "" || v === undefined) {
    if (!optional) problem(where, `"${field}" is empty. Paste the full link, starting with https://`);
    return;
  }
  if (!isText(v) || !/^https:\/\/\S+$/.test(v))
    problem(where, `"${field}" must be a full link starting with https:// and with no spaces. It says: ${JSON.stringify(v)}`);
}
function needWhatsApp(where, field, v, { optional = false } = {}) {
  if ((v === "" || v === undefined) && optional) return;
  if (!isText(v) || !/^233[235]\d{8}$/.test(v))
    problem(
      where,
      `"${field}" must be a Ghana number written like "233241234567" (233, then the number without its first 0, no plus, no spaces). It says: ${JSON.stringify(v)}`
    );
}
// Catches typing slips such as "tittle" instead of "title".
function knownKeys(where, item, allowed) {
  for (const k of Object.keys(item))
    if (!allowed.includes(k)) note(where, `"${k}" is not a name the website knows, so it is ignored. The known names are: ${allowed.join(", ")}.`);
}
function needList(file, key, v) {
  if (Array.isArray(v)) return true;
  if (v !== undefined) problem(file, `"${key}" should be a list inside [ square brackets ].`);
  return false;
}
function needObject(file, key, v) {
  if (v && typeof v === "object" && !Array.isArray(v)) return true;
  if (v !== undefined) problem(file, `"${key}" should be a group inside { curly braces }.`);
  return false;
}
const label = (file, list, i, name) => `content/${file} > ${list}, item ${i + 1}${filled(name) ? ` ("${name}")` : ""}`;

/* ---------- 1. Load the content files ------------------------------------------ */

const D = {};
const indexHtml = read("index.html");
const loadedByPage = [...indexHtml.matchAll(/<script src="content\/([\w-]+\.js)"><\/script>/g)].map((m) => m[1]);
const inFolder = fs.existsSync(path.join(PUB, "content"))
  ? fs.readdirSync(path.join(PUB, "content")).filter((f) => f.endsWith(".js"))
  : [];

for (const f of inFolder)
  if (!loadedByPage.includes(f))
    problem(`content/${f}`, `This file exists but the page never loads it. Add  <script src="content/${f}"></script>  near the bottom of index.html, above main.js.`);
for (const f of loadedByPage)
  if (!inFolder.includes(f)) problem("index.html", `The page loads content/${f} but that file does not exist.`);
if (!/<script>\s*window\.NUBS_DATA\s*=\s*\{\};?\s*<\/script>/.test(indexHtml))
  problem("index.html", "The line  <script>window.NUBS_DATA = {};</script>  is missing. It must come before the content files.");

const sandbox = vm.createContext({ NUBS_DATA: D });
const broken = new Set();
for (const f of inFolder) {
  const rel = `content/${f}`;
  used.add(rel);
  try {
    new vm.Script(read(rel), { filename: rel }).runInContext(sandbox);
  } catch (err) {
    broken.add(f);
    const line = (String(err.stack).match(new RegExp(f.replace(".", "\\.") + ":(\\d+)")) || [])[1];
    problem(
      `${rel}${line ? `, around line ${line}` : ""}`,
      `This file has a typing mistake, so the website cannot read it (${err.message}).\n` +
        `      Look on that line and the line above for: a missing comma, a missing or extra "quote",\n` +
        `      a missing } or ], or a note that starts with /* and never ends with */.`
    );
  }
}

// Each content name and the file it normally lives in. A missing one is only reported when its file loaded.
const HOME = {
  site: "site.js",
  contact: "site.js",
  yearTheme: "site.js",
  forms: "site.js",
  serviceSchedule: "schedule.js",
  auxiliaries: "auxiliaries.js",
  quiz: "quiz.js",
  books: "books.js",
  sermonChannel: "sermons.js",
  sermons: "sermons.js",
  freshers: "freshers.js",
  events: "events.js",
  notices: "notices.js",
  leadersParagraph: "leaders.js",
  leaders: "leaders.js",
  affiliations: "affiliations.js",
  campusUnions: "affiliations.js",
  nubsSectors: "affiliations.js",
  motherChurch: "affiliations.js",
  gallery: "gallery.js",
};
for (const [key, file] of Object.entries(HOME))
  if (D[key] === undefined && !broken.has(file))
    problem(`content/${file}`, `"NUBS_DATA.${key}" is missing. It may have been deleted or renamed by accident.`);

/* ---------- 2. CONTENT RULES --------------------------------------------------- */

const today = new Date().toISOString().slice(0, 10);

if (needObject("content/site.js", "site", D.site)) {
  const w = "content/site.js > site";
  needText(w, D.site, "name", "fullName", "theme", "motto", "mottoReference");
  needLink(w, "nationalUrl", D.site.nationalUrl, { optional: false });
  if (!Array.isArray(D.site.pillars) || !D.site.pillars.every(filled)) problem(w, `"pillars" should be a list of words, like ["Worship", "Fellowship"].`);
  if (!Number.isInteger(D.site.year)) problem(w, `"year" should be a number with no quotes, like 2026.`);
}

if (needObject("content/site.js", "contact", D.contact)) {
  const w = "content/site.js > contact";
  const c = D.contact;
  needText(w, c, "venue", "directions");
  if (filled(c.email) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) problem(w, `"email" does not look like an email address: ${JSON.stringify(c.email)}`);
  if (filled(c.phone)) {
    if (!/^0[235]\d{8}$/.test(c.phone)) problem(w, `"phone" should be a 10 digit Ghana number like "0241234567". It says: ${JSON.stringify(c.phone)}`);
    needWhatsApp(w, "phoneWhatsApp", c.phoneWhatsApp);
  }
  needWhatsApp(w, "prayerWhatsApp", c.prayerWhatsApp);
  needLink(w, "freshersWhatsAppGroup", c.freshersWhatsAppGroup);
  needLink(w, "familyWhatsAppGroup", c.familyWhatsAppGroup);
  if (needObject(w, "social", c.social)) {
    knownKeys(`${w} > social`, c.social, ["instagram", "facebook", "youtube", "tiktok", "whatsappChannel"]);
    for (const [k, v] of Object.entries(c.social)) needLink(`${w} > social`, k, v);
  }
}

if (needObject("content/site.js", "yearTheme", D.yearTheme)) {
  const w = "content/site.js > yearTheme";
  needText(w, D.yearTheme, "session", "verse", "reference");
  needFile(w, "wideImage", D.yearTheme.wideImage, { picture: true });
  needFile(w, "squareImage", D.yearTheme.squareImage, { picture: true });
}

if (needObject("content/site.js", "forms", D.forms)) needText("content/site.js > forms", D.forms, "prayerPrivacyNote");

if (needList("content/schedule.js", "serviceSchedule", D.serviceSchedule)) {
  D.serviceSchedule.forEach((s, i) => {
    const w = label("schedule.js", "serviceSchedule", i, s.title);
    knownKeys(w, s, ["title", "day", "time", "venue", "note", "map", "calendar"]);
    needText(w, s, "title", "day", "time", "venue", "note");
    needLink(w, "map", s.map);
    if (s.calendar !== undefined) {
      const c = s.calendar || {};
      if (!["MO", "TU", "WE", "TH", "FR", "SA", "SU"].includes(c.weekday)) problem(w, `calendar "weekday" must be one of MO TU WE TH FR SA SU. It says: ${JSON.stringify(c.weekday)}`);
      if (!TIME.test(c.start) || !TIME.test(c.end)) problem(w, `calendar "start" and "end" must be 24-hour times like "18:30".`);
      else if (c.end <= c.start) problem(w, `calendar "end" (${c.end}) must be later than "start" (${c.start}).`);
    }
  });
  if (!D.serviceSchedule.some((s) => s.calendar)) note("content/schedule.js", "No meeting has a calendar line, so the countdown at the top of the page stays empty.");
}

const auxIds = new Set();
if (needList("content/auxiliaries.js", "auxiliaries", D.auxiliaries)) {
  D.auxiliaries.forEach((a, i) => {
    const w = label("auxiliaries.js", "auxiliaries", i, a.name);
    knownKeys(w, a, ["id", "name", "short", "tagline", "description", "verse", "image", "fit"]);
    needText(w, a, "id", "name", "short", "tagline", "description");
    if (filled(a.id)) {
      if (!/^[a-z0-9-]+$/.test(a.id)) problem(w, `"id" may only use small letters, numbers and dashes, with no spaces. It says: "${a.id}"`);
      if (auxIds.has(a.id)) problem(w, `The id "${a.id}" is used by two auxiliaries. Each one needs its own id.`);
      auxIds.add(a.id);
    }
    if (filled(a.image)) needFile(w, "image", a.image, { picture: true });
    if (a.fit !== undefined && a.fit !== "contain") problem(w, `"fit" can only be "contain". Remove the line if you do not need it.`);
  });
}

if (needList("content/quiz.js", "quiz", D.quiz) && !broken.has("auxiliaries.js")) {
  D.quiz.forEach((q, i) => {
    const w = label("quiz.js", "quiz", i, q.question);
    needText(w, q, "question");
    if (!Array.isArray(q.answers) || q.answers.length < 2) return problem(w, `A question needs at least two answers in its "answers" list.`);
    q.answers.forEach((a) => {
      const wa = `${w} > answer "${a.text || "?"}"`;
      needText(wa, a, "text");
      if (a.home === undefined && a.points === undefined) problem(wa, `An answer needs  points: { id: 2 }  (or  home: "byl"  in the first question).`);
      if (a.home !== undefined && !auxIds.has(a.home)) problem(wa, `home: "${a.home}" does not match any id in auxiliaries.js.`);
      for (const [id, pts] of Object.entries(a.points || {})) {
        if (!auxIds.has(id)) problem(wa, `It gives points to "${id}", but no auxiliary in auxiliaries.js has that id.`);
        if (typeof pts !== "number") problem(wa, `The points for "${id}" must be a number with no quotes.`);
      }
    });
  });
}

if (needList("content/books.js", "books", D.books)) {
  const seen = new Set();
  D.books.forEach((b, i) => {
    const w = label("books.js", "books", i, b.title);
    knownKeys(w, b, ["title", "author", "file", "cover", "description"]);
    needText(w, b, "title", "author");
    optionalText(w, b, "description");
    if (needFile(w, "file", b.file) && filled(b.file) && !/\.pdf$/i.test(b.file)) note(w, `"${b.file}" is not a PDF. Phones open PDFs most reliably.`);
    if (filled(b.cover)) needFile(w, "cover", b.cover, { picture: true });
    if (seen.has(b.file)) note(w, "This book's file is listed twice.");
    seen.add(b.file);
  });
}

if (needObject("content/sermons.js", "sermonChannel", D.sermonChannel)) needLink("content/sermons.js > sermonChannel", "url", D.sermonChannel.url, { optional: false });
if (needList("content/sermons.js", "sermons", D.sermons)) {
  D.sermons.forEach((s, i) => {
    const w = label("sermons.js", "sermons", i, s.title);
    knownKeys(w, s, ["title", "speaker", "date", "scripture", "url"]);
    needText(w, s, "title");
    optionalText(w, s, "speaker", "scripture");
    if (s.date !== "" && s.date !== undefined && !realDate(s.date)) problem(w, `"date" must look like "2026-10-25" (year-month-day) or be "" when unknown. It says: ${JSON.stringify(s.date)}`);
    needLink(w, "url", s.url);
  });
  if (D.sermons.length > 20) note("content/sermons.js", `There are ${D.sermons.length} sermons. The page shows the first 20, so the last ${D.sermons.length - 20} in the list are not visible.`);
}

if (needObject("content/freshers.js", "freshers", D.freshers)) {
  const F = D.freshers;
  const w = "content/freshers.js > freshers";
  needText(w, F, "intro");
  needLink(w, "committeeLink", F.committeeLink);
  needWhatsApp(w, "committeeWhatsApp", F.committeeWhatsApp);
  if (needList(w, "contacts", F.contacts))
    F.contacts.forEach((c, i) => {
      const wc = label("freshers.js", "contacts", i, c.name);
      knownKeys(wc, c, ["name", "role", "whatsapp", "url"]);
      needText(wc, c, "name", "role");
      needWhatsApp(wc, "whatsapp", c.whatsapp, { optional: true });
      needLink(wc, "url", c.url);
    });
  if (needList(w, "steps", F.steps)) F.steps.forEach((s, i) => needText(label("freshers.js", "steps", i, s.title), s, "title", "text"));
  if (needList(w, "faqs", F.faqs)) F.faqs.forEach((q, i) => needText(label("freshers.js", "faqs", i, q.q), q, "q", "a"));
}

if (needList("content/events.js", "events", D.events)) {
  D.events.forEach((e, i) => {
    const w = label("events.js", "events", i, e.title);
    knownKeys(w, e, [
      "title",
      "date",
      "dateLabel",
      "duration",
      "start",
      "end",
      "venue",
      "description",
      "image",
      "imageAlt",
      "programme",
    ]);
    needText(w, e, "title", "venue");
    optionalText(w, e, "description", "dateLabel", "duration", "imageAlt");
    // A week with a programme (Freshers' Week): each item has its own date and time.
    const prog = e.programme;
    const hasProg = prog !== undefined;
    let last = e.date;
    if (hasProg && (!Array.isArray(prog) || !prog.length))
      problem(w, `"programme" should be a list inside [ square brackets ] with at least one item.`);
    else if (hasProg)
      prog.forEach((p, j) => {
        const pw = `${w} > programme, item ${j + 1}${filled(p && p.title) ? ` ("${p.title}")` : ""}`;
        if (!p || typeof p !== "object")
          return problem(pw, `Each programme item should be a group inside { curly braces }.`);
        knownKeys(pw, p, ["date", "start", "end", "title", "venue", "map"]);
        needText(pw, p, "title");
        optionalText(pw, p, "venue");
        needLink(pw, "map", p.map);
        if (!realDate(p.date))
          problem(
            pw,
            `"date" must be a real date written like "2026-11-23". It says: ${JSON.stringify(p.date)}`
          );
        else {
          if (realDate(e.date) && p.date < e.date)
            problem(
              pw,
              `This item (${p.date}) is before the event's own date (${e.date}). Set the event's date to the first day.`
            );
          if (p.date > last) last = p.date;
        }
        if (!TIME.test(p.start))
          problem(pw, `"start" must be a 24-hour time like "18:30". It says: ${JSON.stringify(p.start)}`);
        if (p.end !== undefined) {
          if (!TIME.test(p.end))
            problem(
              pw,
              `"end" must be a 24-hour time like "20:00", or leave it out. It says: ${JSON.stringify(p.end)}`
            );
          else if (TIME.test(p.start) && p.end <= p.start)
            problem(pw, `"end" (${p.end}) must be later than "start" (${p.start}).`);
        }
      });
    if (!realDate(e.date))
      problem(
        w,
        `"date" must be a real date written like "2026-12-05" (year-month-day). It says: ${JSON.stringify(e.date)}`
      );
    else if (last < today)
      note(
        w,
        `This event's ${hasProg ? "last day" : "date"} (${last}) has passed, so it is hidden. You can delete it.`
      );
    if (hasProg && e.start === undefined && e.end === undefined) {
      // start and end are not needed: the programme items have their own times.
    } else if (!TIME.test(e.start) || !TIME.test(e.end))
      problem(w, `"start" and "end" must be 24-hour times like "18:00".`);
    else if (e.end <= e.start) problem(w, `"end" (${e.end}) must be later than "start" (${e.start}).`);
    if (filled(e.dateLabel) && !filled(e.duration))
      note(
        w,
        `It has a dateLabel but no duration. Add  duration: "3 days",  so the card shows how long it lasts.`
      );
    if (filled(e.image)) needFile(w, "image", e.image, { picture: true });
  });
}

if (needList("content/notices.js", "notices", D.notices)) {
  D.notices.forEach((n, i) => {
    const w = label("notices.js", "notices", i, n.title);
    knownKeys(w, n, ["title", "date", "category", "body", "pinned"]);
    needText(w, n, "title", "category", "body");
    if (!realDate(n.date)) problem(w, `"date" must be a real date written like "2026-11-20" (year-month-day). It says: ${JSON.stringify(n.date)}`);
    if (n.pinned !== undefined && typeof n.pinned !== "boolean") problem(w, `"pinned" must be true or false, with no quotes.`);
  });
}

if (D.leadersParagraph !== undefined && !filled(D.leadersParagraph)) problem("content/leaders.js", `"leadersParagraph" should be a sentence inside quotes.`);
if (needList("content/leaders.js", "leaders", D.leaders)) {
  D.leaders.forEach((l, i) => {
    const w = label("leaders.js", "leaders", i, l.role);
    knownKeys(w, l, ["role", "name", "image", "imageAlt"]);
    needText(w, l, "role");
    optionalText(w, l, "name", "imageAlt");
    needFile(w, "image", l.image, { picture: true });
  });
}

if (needObject("content/affiliations.js", "motherChurch", D.motherChurch)) {
  const m = D.motherChurch;
  const w = "content/affiliations.js > motherChurch";
  knownKeys(w, m, ["short", "name", "text", "details", "url"]);
  needText(w, m, "short", "name", "text");
  if (m.details !== undefined && (!Array.isArray(m.details) || !m.details.every((d) => d && filled(d.label) && filled(d.value))))
    problem(w, `"details" should be a list like [{ label: "Where", value: "Staff Village, Legon" }].`);
  needLink(w, "url", m.url);
}
if (needList("content/affiliations.js", "affiliations", D.affiliations)) {
  D.affiliations.forEach((a, i) => {
    const w = label("affiliations.js", "affiliations", i, a.name);
    knownKeys(w, a, ["short", "name", "role", "text", "facts", "url"]);
    needText(w, a, "short", "name", "role", "text");
    if (a.facts !== undefined && (!Array.isArray(a.facts) || !a.facts.every(filled)))
      problem(w, `"facts" should be a list of short words, like ["Since 1964", "30 associations"].`);
    if (filled(a.url) && !a.url.startsWith("/")) needLink(w, "url", a.url);
  });
}
const SECTORS = Array.isArray(D.nubsSectors) ? D.nubsSectors.map((s) => s && s.name) : [];
if (needList("content/affiliations.js", "nubsSectors", D.nubsSectors))
  D.nubsSectors.forEach((s, i) => {
    const w = label("affiliations.js", "nubsSectors", i, s.name);
    knownKeys(w, s, ["name", "regions"]);
    needText(w, s, "name", "regions");
  });
if (needList("content/affiliations.js", "campusUnions", D.campusUnions)) {
  D.campusUnions.forEach((c, i) => {
    const w = label("affiliations.js", "campusUnions", i, c.name);
    knownKeys(w, c, ["short", "name", "school", "place", "sector", "url", "here"]);
    needText(w, c, "short", "name", "school", "place", "sector");
    if (filled(c.sector) && SECTORS.length && !SECTORS.includes(c.sector))
      problem(w, `"sector" says "${c.sector}". It must be one of: ${SECTORS.join(", ")}.`);
    needLink(w, "url", c.url);
  });
}

if (needList("content/gallery.js", "gallery", D.gallery)) {
  const seen = new Set();
  D.gallery.forEach((g, i) => {
    const w = label("gallery.js", "gallery", i, g.file);
    knownKeys(w, g, ["file", "album", "caption", "alt"]);
    needText(w, g, "file", "album");
    if (!filled(g.file)) return;
    if (g.file.includes("/")) return problem(w, `"file" should be only the file name, like "congress-01.jpg", with no folders.`);
    needFile(w, "file", `assets/images/gallery/${g.file}`, { picture: true });
    if (!FILE_SET.has(`assets/images/gallery/thumbs/${g.file}`))
      problem(w, `The small copy is missing: public/assets/images/gallery/thumbs/${g.file}. Every gallery photo needs one (scripts/add-photos.py makes it for you).`);
    else used.add(`assets/images/gallery/thumbs/${g.file}`);
    if (seen.has(g.file)) note(w, "This photo is listed twice.");
    seen.add(g.file);
  });
}

/* ---------- 3. The theme (css/theme.css) ----------------------------------------- */

const theme = {};
for (const m of read("css/theme.css").matchAll(/^\s*(--[\w-]+)\s*:\s*([^;]+);/gm)) theme[m[1]] = m[2].trim();
const styleCss = read("css/style.css");
// var(--name) with no fallback value must be defined in theme.css (or set by style.css / main.js itself).
const setElsewhere = styleCss + read("js/main.js");
for (const name of new Set([...styleCss.matchAll(/var\((--[\w-]+)\)/g)].map((m) => m[1]))) {
  const local = new RegExp(`${name}\\s*:`).test(setElsewhere);
  if (!theme[name] && !local) problem("css/theme.css", `"${name}" is missing. The site uses it, so its line must stay. Undo the change or add it back.`);
}
const HEX = /^#[0-9a-f]{6}$/i;
for (const c of ["blue", "navy", "gold"]) {
  const hex = theme[`--${c}`];
  const rgb = theme[`--${c}-rgb`];
  if (!hex || !rgb) continue;
  if (!HEX.test(hex)) {
    problem("css/theme.css", `"--${c}" must be a 6 digit HEX colour like #2860e0. It says: ${hex}`);
    continue;
  }
  const want = [1, 3, 5].map((p) => parseInt(hex.slice(p, p + 2), 16)).join(", ");
  if (rgb.replace(/\s+/g, "") !== want.replace(/\s+/g, ""))
    problem("css/theme.css", `"--${c}" is ${hex}, so "--${c}-rgb" must be  ${want}  (it says ${rgb}). Copy those three numbers in.`);
}
for (const [name, v] of Object.entries(theme))
  if (/^#/.test(v) && !/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v)) problem("css/theme.css", `"${name}" is not a valid colour code: ${v}. A code is # followed by 6 letters or digits.`);

/* ---------- 4. The pages (index.html, about.html, ...) and main.js ------------------ */

try {
  new vm.Script(read("js/main.js"), { filename: "js/main.js" });
} catch (err) {
  problem("js/main.js", `This script has a mistake and will not run: ${err.message}`);
}

// Every page of the site (index.html, about.html, ...). The shared parts come from index.html.
const PAGE_FILES = pages();
const idSet = new Set();
for (const f of PAGE_FILES) {
  const ids = [...read(f).matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  ids.forEach((id) => idSet.add(id));
  new Set(ids.filter((id, i) => ids.indexOf(id) !== i)).forEach((id) => problem(f, `The id "${id}" is used twice. Every id must be used only once on a page.`));
}
const mainJs = read("js/main.js");
for (const id of new Set([...mainJs.matchAll(/["'`]#([A-Za-z][\w-]*)(?=["'` ])/g)].map((m) => m[1])))
  if (!idSet.has(id)) problem("index.html", `main.js looks for an element with id="${id}" but no page has one. It may have been deleted or renamed.`);

// The shared parts (menu, footer, pop-ups, scripts) must be the same on every page.
for (const name of BLOCKS) {
  const want = block(indexHtml, name);
  if (!want) {
    problem("index.html", `The ${name} part is missing. Put back its <!-- ${name}: --> and <!-- /${name} --> lines.`);
    continue;
  }
  for (const f of PAGE_FILES.filter((p) => p !== "index.html")) {
    const got = block(read(f), name);
    if (!got) problem(f, `The ${name} part is missing. Copy it from index.html, then run  npm run sync`);
    else if (got !== want) problem(f, `The ${name} part is different from index.html. Make the change in index.html, then run  npm run sync`);
  }
}

// Each page needs its own title, description and address for search engines, and a line in sitemap.xml.
const sitemap = read("sitemap.xml");
const seen = { title: new Map(), description: new Map() };
for (const f of PAGE_FILES) {
  const html = read(f);
  const url = `https://nubslegon.com/${f === "index.html" ? "" : f.replace(/\.html$/, "")}`;
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  const desc = (html.match(/<meta name="description" content="([^"]*)">/) || [])[1];
  const canon = (html.match(/<link rel="canonical" href="([^"]*)">/) || [])[1];
  if (!filled(title)) problem(f, "The page has no <title>. Search engines show it as the headline.");
  if (!filled(desc)) problem(f, 'The page has no <meta name="description">. Search engines show it under the headline.');
  else if (desc.length > 170) note(f, `The description is ${desc.length} characters. Google cuts it off after about 160.`);
  if (canon !== url) problem(f, `The canonical link must be  ${url}  (it says ${canon || "nothing"}).`);
  if (!sitemap.includes(`<loc>${url}</loc>`)) problem("sitemap.xml", `${f} is missing. Add  <url><loc>${url}</loc></url>`);
  for (const [k, v] of [["title", title], ["description", desc]]) {
    if (!filled(v)) continue;
    if (seen[k].has(v)) problem(f, `It has the same ${k} as ${seen[k].get(v)}. Every page needs its own.`);
    else seen[k].set(v, f);
  }
  // Links to other pages, like href="/events", must lead to a page that exists.
  for (const m of html.matchAll(/href="\/([a-z-]*)(?:[?#][^"]*)?"/g))
    if (m[1] && !FILE_SET.has(`${m[1]}.html`)) problem(f, `It links to "/${m[1]}" but there is no ${m[1]}.html page.`);
}
for (const m of sitemap.matchAll(/<loc>https:\/\/nubslegon\.com\/([a-z-]*)<\/loc>/g))
  if (!PAGE_FILES.includes(`${m[1] || "index"}.html`)) problem("sitemap.xml", `It lists /${m[1]} but there is no such page.`);

// Files the pages refer to directly.
for (const f of [...PAGE_FILES, "404.html", "css/style.css", "css/theme.css", "js/main.js"]) {
  for (const m of read(f).matchAll(/(?:src|href|content)="(?:https:\/\/nubslegon\.com)?\/?((?:assets|css|js|content)\/[^"?#]+)"|url\(["']?(?:\.\.\/)?(assets\/[^"')]+)["']?\)|"(assets\/[^"]+\.\w+)"/g)) {
    const rel = m[1] || m[2] || m[3];
    if (FILE_SET.has(rel)) used.add(rel);
    else problem(f, `It points to "${rel}" but there is no such file in the public folder.`);
  }
}

// Contact details are repeated in the search-engine block at the top of index.html.
const ld = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!ld) note("index.html", "The search-engine block (application/ld+json) is missing.");
else {
  try {
    const org = (JSON.parse(ld[1])["@graph"] || []).find((x) => x["@type"] === "Organization") || {};
    const c = D.contact || {};
    if (filled(c.email) && org.email !== c.email)
      problem("index.html", `The email in the "Organization" block near the top is "${org.email}" but content/site.js says "${c.email}". Make them the same.`);
    if (filled(c.phoneWhatsApp) && org.telephone !== `+${c.phoneWhatsApp}`)
      problem("index.html", `The telephone in the "Organization" block near the top is "${org.telephone}" but content/site.js says "+${c.phoneWhatsApp}". Make them the same.`);
  } catch (err) {
    problem("index.html", `The search-engine block near the top (application/ld+json) has a typing mistake: ${err.message}`);
  }
}

/* ---------- 5. Housekeeping --------------------------------------------------------- */

const TEXT = /\.(html|css|js|txt|xml|json|md)$/;
const SITE_FILE = /\.(html|css|js|txt|xml|json|ico|png|jpe?g|webp|svg|gif|pdf|mp3|woff2?)$/i;
for (const f of ALL_FILES) {
  const size = fs.statSync(path.join(PUB, f)).size;
  const name = path.basename(f);
  if (size > MAX_FILE) problem(f, `This file is ${(size / MB).toFixed(1)} MB. Files over 20 MB cannot be published. Make it smaller or remove it.`);
  if (name !== "_headers" && !SITE_FILE.test(name)) problem(f, "This does not look like a website file. Everything in public/ gets published, so move it out of that folder.");
  if (TEXT.test(f) && read(f).includes(OLD_EMAIL)) problem(f, `It contains the old email ${OLD_EMAIL}. Use nubslegon080@gmail.com.`);
  if (/\s/.test(f) && /^assets\//.test(f)) note(f, "The file name has a space in it. Rename it with dashes (my-photo.jpg) to avoid broken links.");
}
const leftover = ALL_FILES.filter((f) => /^assets\//.test(f) && !used.has(f) && !/favicon/.test(f));
if (leftover.length)
  note("Files that nothing on the site uses (safe to delete, or add them to a content file)", leftover.map((f) => `public/${f}`).join("\n      "));

/* ---------- Report -------------------------------------------------------------------- */

const count = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
if (notes.length) {
  console.log(`\nNOTES (${notes.length}): advice only, these do not stop the site\n`);
  notes.forEach((n) => console.log(`  - ${n}\n`));
}
if (problems.length) {
  console.log(`\nPROBLEMS (${problems.length}): fix these before publishing\n`);
  problems.forEach((p, i) => console.log(`  ${i + 1}. ${p}\n`));
  console.log(`Check failed: ${count(problems.length, "problem")}. The live site has NOT been changed.\n`);
  process.exit(1);
}
const size = (key) => (Array.isArray(D[key]) ? D[key].length : 0);
console.log(
  `\nAll good. ${count(size("events"), "event")}, ${count(size("notices"), "notice")}, ${count(size("books"), "book")}, ` +
    `${count(size("sermons"), "sermon")}, ${count(size("leaders"), "leader")}, ${count(size("gallery"), "photo")}. Safe to publish.\n`
);
