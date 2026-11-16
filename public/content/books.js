/* ==========================================================================
   NUBS LEGON CONTENT: LIBRARY BOOKS
   --------------------------------------------------------------------------
   TO ADD A BOOK
   1. Put the PDF in  public/assets/books/  (small letters, dashes instead of
     spaces, for example  the-awe-of-god.pdf). Keep it under 20 MB.
   2. Optional: put a cover picture in the same folder.
   3. Copy one block { ... } below and change the words.
   cover can be "" and the book gets a blue title tile instead.
   The first 4 books show straight away, the rest appear under "Show more".

   THE THREE RULES (they apply to every file in this folder)
   1. Text goes inside "double quotes".
   2. Every item ends with a comma, like the ones already there.
   3. Lines that start with // are notes for you. The website ignores them.
   When you are done, run:  npm run check
   It tells you in plain words if something is wrong.
   ========================================================================== */

NUBS_DATA.books = [
  {
    title: "Brokenness",
    author: "Dr D. K. Olukoya",
    file: "assets/books/brokenness.pdf",
    cover: "assets/books/brokenness.jpg",
    description: "Why a surrendered, broken heart is where God does His deepest work in a believer.",
  },
  {
    title: "Good Morning, Holy Spirit",
    author: "Benny Hinn",
    file: "assets/books/good-morning-holy-spirit.pdf",
    cover: "assets/books/good-morning-holy-spirit.jpg",
    description: "Getting to know the Holy Spirit as a daily friend, helper and guide.",
  },
  {
    title: "Principles of Serving God",
    author: "Zac Poonen",
    file: "assets/books/principles-of-serving-god.pdf",
    cover: "",
    description: "Simple, honest principles for serving God with the right heart and motives.",
  },
  {
    title: "The Awe of God",
    author: "John Bevere",
    file: "assets/books/the-awe-of-god.pdf",
    cover: "assets/books/the-awe-of-god.jpg",
    description: "How a healthy fear of God transforms the way we live and love.",
  },
  {
    title: "The Price of Spiritual Power",
    author: "Roberts Liardon",
    file: "assets/books/price-of-spiritual-power.pdf",
    cover: "assets/books/price-of-spiritual-power.jpg",
    description: "What it truly costs to walk in the power of God, and why it is worth it.",
  },
  {
    title: "Understanding the Purpose and Power of Woman",
    author: "Dr Myles Munroe",
    file: "assets/books/purpose-and-power-of-woman.pdf",
    cover: "assets/books/purpose-and-power-of-woman.jpg",
    description: "A book for women, and the men who love them, on who a woman is made to be.",
  },
  {
    title: "Understanding the Purpose and Power of Prayer",
    author: "Dr Myles Munroe",
    file: "assets/books/purpose-and-power-of-prayer.pdf",
    cover: "assets/books/purpose-and-power-of-prayer.jpg",
    description: "Prayer as earthly license for heavenly interference.",
  },
  {
    title: "Welcome, Holy Spirit",
    author: "Benny Hinn",
    file: "assets/books/welcome-holy-spirit.pdf",
    cover: "assets/books/welcome-holy-spirit.jpg",
    description: "How you can experience the dynamic work of the Holy Spirit in your life.",
  },
];
