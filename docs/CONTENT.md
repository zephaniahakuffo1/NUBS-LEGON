# Updating the website (no coding needed)

Everything you will normally change lives in three places:

| You want to change | Open this |
| --- | --- |
| Words, dates, links, lists | a file in `public/content/` |
| Pictures and PDFs | a folder in `public/assets/` |
| Colours and fonts | `public/css/theme.css` |

## The safe routine (every time)

1. **Edit** the file. Save.
2. **Check**: run `npm run check`. It reads everything and tells you in plain words if something is wrong
   (a missing comma, a wrong date, a picture that does not exist) and where.
3. **Look**: run `npm start` and open http://localhost:3000 to see the site (http://localhost:3000/events for the events page, and so on).
4. **Publish**: `git add .` then `git commit -m "what you changed"` then `git push`.

Cloudflare runs the same check before it publishes. If the check fails, the old working site stays online and
nothing breaks. Fix the mistake and push again.

**Undo a mistake that got published:** `git revert HEAD` then `git push`.

## The three rules of a content file

1. Text goes inside `"double quotes"`.
2. Every item ends with a comma, like the ones already there.
3. Lines that start with `//` are notes for you. The website ignores them.

To add something, **copy a whole block** from `{` to `},` paste it, and change the words. Every file has
instructions at the top.

## Which file holds what

| File in `public/content/` | What is in it | Shown on |
| --- | --- | --- |
| `site.js` | Name, motto, pillars, contact details, social links, and the **theme of the year** (verse, session, theme pictures) | every page (footer), home, about, contact |
| `schedule.js` | Weekly meetings and the countdown | home |
| `auxiliaries.js` | The auxiliaries (ministries) | /auxiliaries |
| `quiz.js` | The "Find your auxiliary" quiz | /auxiliaries |
| `books.js` | Library books | /library |
| `sermons.js` | Sermons and the Telegram channel link | /sermons |
| `freshers.js` | Freshers intro, committee contacts, steps, quick answers | /freshers |
| `events.js` | Upcoming events | /events |
| `notices.js` | Announcements | /events |
| `leaders.js` | Leadership names and photos | /leadership |
| `gallery.js` | Gallery photos | /gallery |
| `affiliations.js` | Ghana Baptist Convention, NUBS Ghana, and NUBS unions on other campuses | /affiliations |

The fixed words on a page (headings, the welcome text) are in that page's file in `public/`, for example
`public/about.html`. The menu and footer are the same on every page: change them only in `public/index.html`,
then run `npm run sync` to copy them to the other pages.

## Common jobs

### Add an event
Open `events.js`, copy the example at the top of the file, paste it between the `[ ]`, change the words.
Poster (optional): put the picture in `public/assets/images/events/` and add its name on the `image` line.
Past events hide themselves.
A week with a daily programme (like Freshers' Week) is one event with a `programme` list, one line per day:
the card lists the programme and ticks off finished items, the home-page countdown goes through the
items one by one during that week, then returns to the weekly meetings. The example is in `events.js`.

### Add an announcement
Open `notices.js`, copy the example at the top, paste it between the `[ ]`. `pinned: true` keeps it on top.

### Add a book
1. Put the PDF in `public/assets/books/` (small letters, dashes instead of spaces, under 20 MB).
2. Optional cover picture in the same folder.
3. Copy a block in `books.js` and change the words. `cover: ""` gives a blue title tile.

### Add a sermon
Copy a block in `sermons.js` and paste it at the **top** of the list. Only the first 20 are shown.

### Add gallery photos
```bash
python3 scripts/add-photos.py "Album name" photo1.jpg photo2.jpg
```
This shrinks the photos, files them (large copy and small copy) and adds them to `gallery.js`. Use an existing
album name to add to that album, or a new name to start a new one. Needs `pip install pillow` once.

### Change a leader, or a leader's photo
Edit `leaders.js`. For a new photo, put it in `public/assets/images/leaders/` with a **new file name**
(`president-2027.jpg`) and type that name on the `image` line.

### Change meeting times
Edit `schedule.js`. Change both `time` (the words on the card) and `calendar` (which drives the countdown).

### New year, new theme
Edit the `yearTheme` part of `site.js`: session, verse, reference and the two theme pictures.

### Change contact details
Edit `contact` in `site.js`. If the email or main phone changes, also change it in the "Organization" block near
the top of `public/index.html`. `npm run check` reminds you if the two do not match.

## Pictures: three things to remember

- **New picture = new file name.** Phones remember pictures for a year. If you replace `president.jpg` with a new
  picture using the same name, visitors keep seeing the old one. Name it `president-2027.jpg` instead.
- **Keep them small** (under about 500 KB). `python3 scripts/optimize-images.py photo.jpg` shrinks one for you.
- **File names:** small letters, no spaces, exact spelling. `Photo.JPG` and `photo.jpg` are different files.
- Only publish a person's photo, name or phone number if they have agreed.

## Colours and fonts

Open `public/css/theme.css`. Part 1 has the three brand colours (blue, navy, gold). Change the code after a
colour's name and the whole site follows. The instructions are at the top of that file. `npm run check` tells you
if a colour code is not valid.

## Words that are not in the content files

The big headings and paragraphs that rarely change (the hero welcome, "About us", mission and vision, section
titles) are written directly in `public/index.html`. To change one: search the file for the sentence, and change
only the words between `>` and `<`. Do not delete anything that says `id="..."`. Then run `npm run check`.

## If something looks wrong

- Run `npm run check` first. It nearly always names the file and line.
- A part of the page is empty: the content file for that part has a typing mistake. The rest of the site keeps
  working while you fix it.
- Not sure what you changed: `git diff` shows it. `git checkout -- public/content/events.js` throws away your
  unsaved changes to that one file.
