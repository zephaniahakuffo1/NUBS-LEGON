/* ==========================================================================
   NUBS LEGON CONTENT: PHOTO GALLERY
   --------------------------------------------------------------------------
   One line per photo. The order here is the order on the site.

   EASIEST WAY TO ADD PHOTOS (it shrinks them, files them and adds the lines):
    python3 scripts/add-photos.py "Album name" photo1.jpg photo2.jpg

   BY HAND: every photo needs TWO files with the same name:
    public/assets/images/gallery/NAME.jpg          (large, max 1600 px wide)
    public/assets/images/gallery/thumbs/NAME.jpg   (small, max 480 px wide)
   then add a line:   { file: "NAME.jpg", album: "Album name" },

   album     photos with the same album name share one filter button.
   caption   OPTIONAL. Add  caption: "Your words",  to show different words
          under one photo. Without it the album name is shown.

   THE THREE RULES (they apply to every file in this folder)
   1. Text goes inside "double quotes".
   2. Every item ends with a comma, like the ones already there.
   3. Lines that start with // are notes for you. The website ignores them.
   When you are done, run:  npm run check
   It tells you in plain words if something is wrong.
   ========================================================================== */

NUBS_DATA.gallery = [
  { file: "half-night-15.jpg", album: "Half Night & Variety Night" },
  { file: "thanksgiving-02.jpg", album: "Thanksgiving & Handing-over" },
  { file: "half-night-03.jpg", album: "Half Night & Variety Night" },
  { file: "bible-quiz-07.jpg", album: "Bible Quiz" },
  { file: "half-night-10.jpg", album: "Half Night & Variety Night" },
  { file: "bible-quiz-02.jpg", album: "Bible Quiz" },
  { file: "half-night-06.jpg", album: "Half Night & Variety Night" },
  { file: "more-08.jpg", album: "More moments" },
  { file: "half-night-11.jpg", album: "Half Night & Variety Night" },
  { file: "more-25.jpg", album: "More moments" },
  { file: "half-night-02.jpg", album: "Half Night & Variety Night" },
  { file: "more-09.jpg", album: "More moments" },
  { file: "half-night-14.jpg", album: "Half Night & Variety Night" },
  { file: "more-10.jpg", album: "More moments" },
  { file: "congress-08.jpg", album: "NUBS Congress 2026" },
  { file: "more-20.jpg", album: "More moments" },
  { file: "bible-quiz-08.jpg", album: "Bible Quiz" },
  { file: "half-night-18.jpg", album: "Half Night & Variety Night" },
  { file: "more-53.jpg", album: "More moments" },
  { file: "half-night-04.jpg", album: "Half Night & Variety Night" },
  { file: "more-05.jpg", album: "More moments" },
  { file: "congress-16.jpg", album: "NUBS Congress 2026" },
  { file: "more-42.jpg", album: "More moments" },
  { file: "congress-03.jpg", album: "NUBS Congress 2026" },
  { file: "more-43.jpg", album: "More moments" },
  { file: "congress-17.jpg", album: "NUBS Congress 2026" },
  { file: "more-19.jpg", album: "More moments" },
  { file: "congress-06.jpg", album: "NUBS Congress 2026" },
  { file: "half-night-07.jpg", album: "Half Night & Variety Night" },
  { file: "more-02.jpg", album: "More moments" },
  { file: "congress-07.jpg", album: "NUBS Congress 2026" },
  { file: "more-32.jpg", album: "More moments" },
  { file: "bible-quiz-01.jpg", album: "Bible Quiz" },
  { file: "more-39.jpg", album: "More moments" },
  { file: "thanksgiving-05.jpg", album: "Thanksgiving & Handing-over" },
  { file: "more-55.jpg", album: "More moments" },
  { file: "thanksgiving-04.jpg", album: "Thanksgiving & Handing-over" },
  { file: "bible-quiz-04.jpg", album: "Bible Quiz" },
  { file: "more-46.jpg", album: "More moments" },
  { file: "congress-15.jpg", album: "NUBS Congress 2026" },
  { file: "more-01.jpg", album: "More moments" },
  { file: "congress-01.jpg", album: "NUBS Congress 2026" },
  { file: "more-06.jpg", album: "More moments" },
  { file: "congress-14.jpg", album: "NUBS Congress 2026" },
  { file: "more-13.jpg", album: "More moments" },
  { file: "congress-09.jpg", album: "NUBS Congress 2026" },
  { file: "more-22.jpg", album: "More moments" },
  { file: "thanksgiving-03.jpg", album: "Thanksgiving & Handing-over" },
  { file: "more-07.jpg", album: "More moments" },
  { file: "thanksgiving-01.jpg", album: "Thanksgiving & Handing-over" },
  { file: "more-31.jpg", album: "More moments" },
  { file: "half-night-13.jpg", album: "Half Night & Variety Night" },
  { file: "more-37.jpg", album: "More moments" },
  { file: "half-night-16.jpg", album: "Half Night & Variety Night" },
  { file: "more-15.jpg", album: "More moments" },
  { file: "congress-13.jpg", album: "NUBS Congress 2026" },
  { file: "more-35.jpg", album: "More moments" },
  { file: "congress-04.jpg", album: "NUBS Congress 2026" },
  { file: "more-34.jpg", album: "More moments" },
  { file: "congress-02.jpg", album: "NUBS Congress 2026" },
  { file: "more-18.jpg", album: "More moments" },
  { file: "congress-05.jpg", album: "NUBS Congress 2026" },
  { file: "more-16.jpg", album: "More moments" },
  { file: "congress-12.jpg", album: "NUBS Congress 2026" },
  { file: "more-12.jpg", album: "More moments" },
  { file: "congress-11.jpg", album: "NUBS Congress 2026" },
  { file: "more-11.jpg", album: "More moments" },
  { file: "congress-18.jpg", album: "NUBS Congress 2026" },
  { file: "more-23.jpg", album: "More moments" },
  { file: "half-night-05.jpg", album: "Half Night & Variety Night" },
  { file: "more-57.jpg", album: "More moments" },
  { file: "bible-quiz-03.jpg", album: "Bible Quiz" },
  { file: "more-44.jpg", album: "More moments" },
  { file: "congress-10.jpg", album: "NUBS Congress 2026" },
  { file: "more-38.jpg", album: "More moments" },
  { file: "half-night-17.jpg", album: "Half Night & Variety Night" },
  { file: "more-29.jpg", album: "More moments" },
  { file: "half-night-09.jpg", album: "Half Night & Variety Night" },
  { file: "more-28.jpg", album: "More moments" },
  { file: "half-night-08.jpg", album: "Half Night & Variety Night" },
  { file: "more-03.jpg", album: "More moments" },
  { file: "more-21.jpg", album: "More moments" },
  { file: "more-36.jpg", album: "More moments" },
  { file: "more-14.jpg", album: "More moments" },
  { file: "half-night-12.jpg", album: "Half Night & Variety Night" },
  { file: "bible-quiz-06.jpg", album: "Bible Quiz" },
  { file: "half-night-01.jpg", album: "Half Night & Variety Night" },
  { file: "bible-quiz-05.jpg", album: "Bible Quiz" },
  { file: "more-52.jpg", album: "More moments" },
  { file: "more-24.jpg", album: "More moments" },
  { file: "more-51.jpg", album: "More moments" },
  { file: "more-26.jpg", album: "More moments" },
  { file: "more-50.jpg", album: "More moments" },
  { file: "more-47.jpg", album: "More moments" },
  { file: "more-56.jpg", album: "More moments" },
  { file: "more-54.jpg", album: "More moments" },
  { file: "more-58.jpg", album: "More moments" },
  { file: "more-49.jpg", album: "More moments" },
  { file: "more-48.jpg", album: "More moments" },
  { file: "more-41.jpg", album: "More moments" },
  { file: "more-04.jpg", album: "More moments" },
  { file: "more-33.jpg", album: "More moments" },
  { file: "more-40.jpg", album: "More moments" },
  { file: "more-17.jpg", album: "More moments" },
  { file: "more-45.jpg", album: "More moments" },
  { file: "more-27.jpg", album: "More moments" },
];
