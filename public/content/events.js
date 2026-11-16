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

   THE THREE RULES (they apply to every file in this folder)
   1. Text goes inside "double quotes".
   2. Every item ends with a comma, like the ones already there.
   3. Lines that start with // are notes for you. The website ignores them.
   When you are done, run:  npm run check
   It tells you in plain words if something is wrong.
   ========================================================================== */

NUBS_DATA.events = [
  {
    title: "NUBS Congress 2027",
    dateLabel: "April 2027",
    date: "2027-04-01",
    duration: "3 days",
    start: "08:00",
    end: "18:00",
    venue: "Ejura Camp",
    description:
      "Our national family gathers for three days of worship, the Word and fellowship. Plan ahead and join us.",
  },
];
