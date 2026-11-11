# Updating the website's content

Everything below is done in **`js/fellowship-data.js`**. Open it in VS Code, find the section (they are numbered
and have banner comments), copy an existing block, change the words, save. Text goes in "double quotes" and every
item ends with a comma.

## Events
Copy a block inside `events`:
```js
{
  title: "Fellowship Night",
  date: "2026-12-05",      // YYYY-MM-DD. After this day the event hides itself.
  start: "18:00",          // 24-hour, Ghana time
  end: "20:00",
  venue: "Commonwealth Hall Chapel",
  description: "One or two sentences.",
  image: "assets/images/events/night.jpg",   // optional poster
}
```
If only the month is known, use `dateLabel: "April 2027"` and `duration: "3 days"` (no calendar button is shown).

## Announcements
Add inside `notices`: `{ title: "...", date: "2026-11-20", category: "Notice", body: "...", pinned: false }`.
`pinned: true` keeps it on top. An empty list shows "No announcements right now".

## Books
1. Put the PDF in `assets/books/` (keep it under about 8 MB).
2. Optional cover picture in the same folder.
3. Add a block in `books` with `title`, `author`, `file`, `cover` (or `""`), `description`.

## Sermons
Add a block at the top of `sermons` (newest first) with `type` ("audio" or "video"), `url`, and an optional `audio` mp3 link.

## Meeting times
Edit `serviceSchedule`. `calendar: { weekday: "SU", start: "11:00", end: "13:00" }` drives the countdown
(weekdays: MO TU WE TH FR SA SU). Add `map: "<google maps link>"` to show "Find the venue".

## Contacts, links, email
Edit `contact` (email, phone numbers, social links, WhatsApp channel/group) and `freshers` (committee numbers).
WhatsApp numbers use international form without a plus or zero, for example `233277641309`.

## Leaders, auxiliaries, quiz, FAQs
Same pattern: `leaders`, `auxiliaries`, `quiz`, `freshers.faqs`.

## Gallery photos
1. Resize first: `python3 scripts/optimize-images.py my-photo.jpg` (needs `pip install pillow`).
2. Put the full image in `assets/images/gallery/` and the small copy in `assets/images/gallery/thumbs/`, same file name.
3. Add the entry in `gallery` with the `group` it belongs to.

## Before you save and publish
- `npm run check` (or just look at the page in Live Server) for mistakes.
- Keep photos under about 300 KB each. Big files make the site slow for students on mobile data.
