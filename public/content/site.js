/* ==========================================================================
   NUBS LEGON CONTENT: THE FELLOWSHIP, CONTACT DETAILS AND YEARLY THEME
   --------------------------------------------------------------------------
   This file holds the name, motto, contact details, social links, the word
   for the year and the theme of the year.

   THE THREE RULES (they apply to every file in this folder)
   1. Text goes inside "double quotes".
   2. Every item ends with a comma, like the ones already there.
   3. Lines that start with // are notes for you. The website ignores them.
   When you are done, run:  npm run check
   It tells you in plain words if something is wrong.
   ========================================================================== */

/* 1. THE FELLOWSHIP ------------------------------------------------------- */
NUBS_DATA.site = {
  name: "NUBSLEGON",
  fullName: "National Union of Baptist Students, University of Ghana, Legon",
  theme: "Empowered for Action!",
  motto: "Presenting every man perfect in Christ.",
  mottoReference: "Colossians 1:28",
  pillars: ["Worship", "Fellowship", "Discipleship", "Service", "Missions"],
  nationalUrl: "https://www.nubsghana.com",
  year: 2026,
};

/* 2. CONTACT AND SOCIAL LINKS ------------------------------------------------
   Leave a link as "" (empty) and its button is hidden or switched off.
   WhatsApp numbers: international form with NO plus, spaces or leading zero,
   for example "233241234567".
   IMPORTANT: if you change the email or phone here, also change them in the
   "Organization" block near the top of index.html (npm run check reminds you). */
NUBS_DATA.contact = {
  venue: "Commonwealth Hall Chapel, University of Ghana, Legon",
  directions: "Sunday gathering is held at the Commonwealth Hall Chapel at 11:00 AM.",
  email: "nubslegon080@gmail.com",
  phone: "0536841622",
  phoneWhatsApp: "233536841622",
  prayerWhatsApp: "233598352200",
  freshersWhatsAppGroup: "https://chat.whatsapp.com/LPpJbcf5yqY09IbQ7xRnj1?s=sw&p=i&mlu=4&ilr=4&iam=2",
  social: {
    instagram: "https://www.instagram.com/nubs_legon/",
    facebook: "",
    youtube: "",
    tiktok: "https://www.tiktok.com/@nubslegon?_r=1&_t=ZS-9BHh71THOoT",
    whatsappChannel: "https://whatsapp.com/channel/0029Vb92eiDDJ6H8ZewOwh2a",
  },
};

/* 3. THEME OF THE YEAR ---------------------------------------------------------
   Change this once a year when the new theme is announced.
   session       shown beside "Word for the year" and under the theme pictures.
   verse         the word for the year, shown in the "This week" card.
   reference     where the verse is found.
   wideImage     the theme picture on the About page.
   wideAlt       a few words describing the picture (for blind visitors).
   To change a picture: put the new file in public/assets/images/ with a NEW
   name (for example theme_wide_2027.jpg) and type that name here. */
NUBS_DATA.yearTheme = {
  session: "2026/2027",
  verse:
    "A little one shall become a thousand, and a small one a strong nation: I the LORD will hasten it in his time.",
  reference: "Isaiah 60:22 (KJV)",
  wideImage: "assets/images/theme_wide.jpg",
  wideAlt: "Theme of the year: Oikodomeo, a people strengthened onto good works",
};

/* 4. SMALL NOTES ON FORMS ------------------------------------------------------ */
NUBS_DATA.forms = {
  prayerPrivacyNote:
    "Your request goes straight to our prayer team on WhatsApp and is never shown on this site. Add your name only if you want a reply.",
};
