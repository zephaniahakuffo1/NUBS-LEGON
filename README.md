# NUBS Legon website

Official website of **NUBS Legon**, the National Union of Baptist Students at the University of Ghana, Legon.
It is a fast static site: plain HTML, CSS and JavaScript. No framework, no build step, no database, no monthly
server bill. Nearly all the words on the page live in one file, `js/fellowship-data.js`, so the fellowship can
update times, events and books without touching code.

## What the site does

One page, in this order (the menu links to each part):

| Section | What the visitor gets | Where the content comes from |
| --- | --- | --- |
| Hero | Welcome, "Discover our fellowship" and "Join the family" buttons | `site` |
| This week | Live countdown to the next meeting (cycles through Sunday service, cell meetings and midweek service), a "Find the venue" Google Maps link, and the word for the year | `serviceSchedule`, `weeklyWord` |
| About and identity | Who we are, mission, motto, theme, pillars | `site`, `index.html` |
| Weekly rhythm | Cards for every regular meeting with day, time and venue | `serviceSchedule` |
| Auxiliaries | The ministries, a "Find your auxiliary" quiz, and a join form per auxiliary | `auxiliaries`, `quiz` |
| Library | Books with **Read** (opens the PDF in a new tab) and **Download**, search, "Show more" | `books`, `assets/books/` |
| Sermons | Link to the Telegram channel, recent sermons, search | `sermonChannel`, `sermons` |
| Freshers | Group link, committee contacts, step-by-step welcome, FAQs, "ask us" form | `freshers` |
| Events | Upcoming events as cards with Add to Google Calendar / .ics. Past events hide themselves | `events` |
| Announcements | Notice board (shows "No announcements right now" when empty) | `notices` |
| Leadership | Leadership cards | `leaders`, `leadersParagraph` |
| Gallery | Photo grid with filters and a full-screen viewer | `gallery` |
| Contact | Email, WhatsApp, social links, prayer request form | `contact` |

Forms never send data to a server. They validate the input (Ghana phone numbers accept digits only) and open
WhatsApp with a ready-made message to the right person.

Also included: scroll up/down buttons, a help desk pop-up, responsive layout from 320 px to wide desktops,
keyboard and screen-reader friendly markup, and `prefers-reduced-motion` support.

## Folder map

```
index.html                page skeleton and section order
404.html                  "page not found" page
css/style.css             all styling (table of contents at the top; brand colours in :root)
js/fellowship-data.js     ALL content: words, times, links, events, books, sermons, leaders, gallery
js/main.js                builds the page from the data; countdown, quiz, forms, library, gallery
assets/images/            logo, hero, leaders, auxiliaries, gallery (full size + thumbs/)
assets/books/             book PDFs and cover pictures
scripts/optimize-images.py  shrinks photos before you add them
docs/CONTENT.md           how to update every kind of content
docs/DEPLOY.md            how to go live (GitHub, Cloudflare Pages / Netlify, Porkbun domain)
_headers, netlify.toml    caching and security headers for the host
robots.txt                lets search engines index the site and points to sitemap.xml
```

## Run it on your computer

1. Install [VS Code](https://code.visualstudio.com/) and the **Live Server** extension.
2. File > Open Folder > choose this folder.
3. Right-click `index.html` > **Open with Live Server**. Edits show up when you save.

Do not just double-click `index.html`: some browsers block features when a page is opened as a file. Live Server
(or `npm start`) avoids that.

## Everyday changes

See `docs/CONTENT.md`. In short: open `js/fellowship-data.js`, copy an existing block, change the words, save.
If the page goes blank after an edit, a comma or quote is missing. Undo and try again. Run `npm run check` to
catch syntax mistakes.

## Going live

See `docs/DEPLOY.md` for the full walkthrough.

## Tech notes

- Colours: `--blue #2860e0`, `--blue-dark #1d4bb8`, `--gold #e9b514`, `--navy #1a2456`. Fonts: Montserrat and Poppins (Google Fonts).
- All times are Ghana time (equal to UTC), so no time-zone maths is needed.
- Page content is built with a safe element builder (`h()`), never `innerHTML` with data, so text in the data file cannot inject code.
- Performance: first load about 320 KB, lazy-loaded images, thumbnails in the gallery, long-cache headers on `/assets`.
