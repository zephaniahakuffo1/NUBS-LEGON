/* ==========================================================================
   NUBS LEGON CONTENT: EVENTS
   --------------------------------------------------------------------------
   TO ADD AN EVENT: copy the example below, paste it between the [ ] and
   change the words. When the date passes, the event leaves the site by itself.

   {
    title: "Fellowship Night",
    date: "2026-12-05",        // YYYY-MM-DD
    start: "18:00",            // 24-hour Ghana time (18:00 = 6 PM)
    end: "20:00",
    venue: "Commonwealth Hall Chapel",
    description: "One or two sentences.",
    image: "assets/images/events/fellowship-night.jpg",   // OPTIONAL poster
   },

   Poster: put the picture in  public/assets/images/events/  first. Events with
   no poster get a blue date tile.
   Only know the month so far? Add  dateLabel: "April 2027",  and
   duration: "3 days",  and set date to the first day of that month.

   A WEEK WITH A PROGRAMME (like Freshers' Week): give the event a
   programme  list, one line per day (see Freshers' Week below). Then:
   - set date to the first day; start and end can be left out
   - the card lists every programme item and ticks off the ones that are over
   - the countdown on the home page counts down to each item in turn and
     goes back to the normal weekly meetings when the week is over
   - the card hides itself after the last day
   Each programme item: date, start (24-hour), title. venue and map are
   OPTIONAL. end is OPTIONAL too (2 hours after start if left out).

   THE THREE RULES (they apply to every file in this folder)
   1. Text goes inside "double quotes".
   2. Every item ends with a comma, like the ones already there.
   3. Lines that start with // are notes for you. The website ignores them.
   When you are done, run:  npm run check
   It tells you in plain words if something is wrong.
   ========================================================================== */

NUBS_DATA.events = [
  {
    title: "Freshers' Week 2026",
    date: "2026-11-23",
    venue: "Different venues on campus",
    description:
      "A whole week to welcome our freshers into the family: cells, auxiliaries, worship, games and a thanksgiving service. Empowered for action!",
    image: "assets/images/events/freshers-week-2026-v2.jpg",
    imageAlt: "Freshers' Week 26 programme outline poster",
    programme: [
      { date: "2026-11-23", start: "20:00", end: "21:30", title: "Joint Cell Meeting", venue: "CC Staircase" },
      { date: "2026-11-24", start: "18:30", title: "Introduction of Auxiliaries", venue: "CC Staircase" },
      {
        date: "2026-11-25",
        start: "18:30",
        end: "20:00",
        title: "Midweek Service",
        venue: "Kofi Drah Conference Room",
        map: "https://www.google.com/maps/search/?api=1&query=Kofi+Drah+Conference+Centre+Legon",
      },
      { date: "2026-11-27", start: "19:00", end: "22:00", title: "Game Night", venue: "Lizalex" },
      {
        date: "2026-11-29",
        start: "11:00",
        end: "13:30",
        title: "Thanksgiving Service",
        venue: "Commonwealth Hall Chapel",
        map: "https://www.google.com/maps/search/?api=1&query=Commonwealth+Hall+University+of+Ghana+Legon",
      },
    ],
  },
  {
    title: "NUBS Congress 2027",
    dateLabel: "March 2027",
    date: "2027-03-01",
    duration: "3 days",
    start: "08:00",
    end: "18:00",
    venue: "Ejura Camp",
    description:
      "Our national family gathers for three days of worship, the Word and fellowship. Plan ahead and join us.",
  },
];
