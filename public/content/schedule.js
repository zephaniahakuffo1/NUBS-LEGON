/* ==========================================================================
   NUBS LEGON CONTENT: WEEKLY MEETINGS
   --------------------------------------------------------------------------
   The meeting cards under "When and where we meet", and the countdown at
   the top of the page.

   day, time, venue   the words shown on the card.
   map                OPTIONAL Google Maps link. Adds the "Find the venue" button.
   calendar           drives the countdown. Leave it out for meetings with no
                   fixed time (like departmental meetings).
                     weekday  one of  MO TU WE TH FR SA SU
                     start, end   24-hour Ghana time, "18:30" = 6:30 PM
   If you change a meeting time, change BOTH "time" (the words) and "calendar".

   THE THREE RULES (they apply to every file in this folder)
   1. Text goes inside "double quotes".
   2. Every item ends with a comma, like the ones already there.
   3. Lines that start with // are notes for you. The website ignores them.
   When you are done, run:  npm run check
   It tells you in plain words if something is wrong.
   ========================================================================== */

NUBS_DATA.serviceSchedule = [
  {
    title: "Sunday Divine Gathering",
    day: "Sunday",
    time: "11:00 AM",
    venue: "Commonwealth Hall Chapel",
    note: "Worship, the Word and fellowship. Come as you are.",
    map: "https://www.google.com/maps/search/?api=1&query=Commonwealth+Hall+University+of+Ghana+Legon",
    calendar: { weekday: "SU", start: "11:00", end: "13:30" },
  },
  {
    title: "Cell Meetings",
    day: "Monday",
    time: "8:00 PM",
    venue: "Your cell group",
    note: "Small groups where you grow, pray and build friendships close to where you live.",
    calendar: { weekday: "MO", start: "20:00", end: "21:30" },
  },
  {
    title: "Midweek Service",
    day: "Wednesday",
    time: "6:30 PM",
    venue: "Kofi Drah Conference Centre",
    note: "A midweek time to worship, pray and be refreshed in the Word.",
    map: "https://www.google.com/maps/search/?api=1&query=Kofi+Drah+Conference+Centre+Legon",
    calendar: { weekday: "WE", start: "18:30", end: "20:00" },
  },
  {
    title: "Departmental Meetings",
    day: "Varies",
    time: "Varies",
    venue: "Your department",
    note: "Each department meets at its own time. Ask in the freshers group to find yours.",
  },
];
