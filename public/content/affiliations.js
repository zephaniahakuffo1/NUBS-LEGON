/* ==========================================================================
   NUBS LEGON CONTENT: AFFILIATIONS (the /affiliations page)
   --------------------------------------------------------------------------
   1. FAMILY     the bodies NUBS Legon belongs to, from the biggest down.
                 Each one is a big card. "url" makes the card open their website.
   2. CAMPUSES   NUBS local unions on other campuses. One tile each.

   A CAMPUS TILE:
     {
       short: "KNUST",                               // big letters on the tile
       name: "NUBS KNUST",
       school: "Kwame Nkrumah University of Science and Technology",
       place: "Kumasi",
       sector: "Middle",          // one of: Northern, Middle, South-Eastern, South-Western
       url: "https://www.nubsknust.org/",            // OPTIONAL. Leave it out or "" if
                                                    // they have no website yet.
     },
   Our own tile has  here: true  so it says "You are here".

   THE THREE RULES (they apply to every file in this folder)
   1. Text goes inside "double quotes".
   2. Every item ends with a comma, like the ones already there.
   3. Lines that start with // are notes for you. The website ignores them.
   When you are done, run:  npm run check
   It tells you in plain words if something is wrong.
   ========================================================================== */

/* 1. FAMILY ---------------------------------------------------------------- */
NUBS_DATA.affiliations = [
  {
    short: "GBC",
    name: "Ghana Baptist Convention",
    role: "Our denomination",
    text: "Baptist work in Ghana began with the First Baptist Church in Kumasi in 1927, and the Convention took its present name in January 1964. Today its local churches are organised into associations across four sectors. The National Union of Baptist Students is one of its auxiliaries, under the Christian Education and Auxiliary Department.",
    facts: ["Since 1964", "About 1,346 churches", "30 associations"],
    url: "https://ghanabaptistconvention.com/",
  },
  {
    short: "NUBS",
    name: "NUBS Ghana",
    role: "Our national union",
    text: "The National Union of Baptist Students, Ghana is a recognised auxiliary of the Ghana Baptist Convention and the link between students, the church and the Convention. Its vision is to fulfil the Great Commission of Jesus Christ in every campus and community.",
    facts: ["50+ local unions", "4 sectors", "15,000+ members"],
    url: "https://www.nubsghana.com/",
  },
  {
    short: "UG",
    name: "NUBS Legon",
    role: "Our local union",
    text: "The NUBS local union at the University of Ghana, Legon: one of the campus families of NUBS Ghana, open to Baptist and non-Baptist students alike.",
    facts: ["University of Ghana", "Legon, Accra", "South-Eastern sector"],
    url: "/about",
  },
];

/* 2. CAMPUSES ---------------------------------------------------------------- */
NUBS_DATA.campusUnions = [
  {
    short: "UG",
    name: "NUBS Legon",
    school: "University of Ghana",
    place: "Legon, Accra",
    sector: "South-Eastern",
    here: true,
  },
  {
    short: "KNUST",
    name: "NUBS KNUST",
    school: "Kwame Nkrumah University of Science and Technology",
    place: "Kumasi",
    sector: "Middle",
    url: "https://www.nubsknust.org/",
  },
  {
    short: "UCC",
    name: "NUBS UCC",
    school: "University of Cape Coast",
    place: "Cape Coast",
    sector: "South-Western",
  },
  {
    short: "UEW",
    name: "NUBS UEW",
    school: "University of Education, Winneba",
    place: "Winneba",
    sector: "South-Western",
  },
  {
    short: "UDS",
    name: "NUBS UDS",
    school: "University for Development Studies",
    place: "Tamale",
    sector: "Northern",
  },
];

/* The four sectors of NUBS Ghana (used for the filter buttons on the page). */
NUBS_DATA.nubsSectors = [
  { name: "Northern", regions: "Tamale, Bolgatanga, Wa and the north" },
  { name: "Middle", regions: "Ashanti and Bono, around Kumasi" },
  { name: "South-Eastern", regions: "Greater Accra, Eastern and Volta" },
  { name: "South-Western", regions: "Central and Western" },
];
