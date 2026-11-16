/* ==========================================================================
   NUBS LEGON CONTENT: THE "FIND YOUR AUXILIARY" QUIZ
   --------------------------------------------------------------------------
   The first question sets the home auxiliary (ladies: byl, men: bmw).
   Every other answer gives points to one or more auxiliaries. The auxiliary
   with the most points is the result.

   points: { prayer: 2 }   gives 2 points to the auxiliary whose id is "prayer".
   The ids must match the ids in auxiliaries.js exactly.

   THE THREE RULES (they apply to every file in this folder)
   1. Text goes inside "double quotes".
   2. Every item ends with a comma, like the ones already there.
   3. Lines that start with // are notes for you. The website ignores them.
   When you are done, run:  npm run check
   It tells you in plain words if something is wrong.
   ========================================================================== */

NUBS_DATA.quiz = [
  {
    question: "I am a...",
    answers: [
      { text: "Young lady", home: "byl" },
      { text: "Young man", home: "bmw" },
    ],
  },
  {
    question: "It is a free Saturday afternoon. What do you reach for?",
    answers: [
      { text: "Pray with a few friends", points: { prayer: 2 } },
      { text: "Practise a song or an instrument", points: { stewards: 2 } },
      { text: "Fix or set up sound, cameras or gadgets", points: { technical: 2 } },
      { text: "Spend time with younger ones, teaching or playing", points: { jnubs: 2 } },
    ],
  },
  {
    question: "What energises you most in fellowship?",
    answers: [
      { text: "Sharing my faith with people who have not heard", points: { evangelism: 2 } },
      { text: "Studying a passage and discussing it", points: { ced: 2 } },
      { text: "Telling the message through drama, dance or spoken word", points: { rocs: 2 } },
      { text: "Praying for people and their needs", points: { prayer: 2 } },
    ],
  },
  {
    question: "A big programme is coming up. Where would you be?",
    answers: [
      { text: "At the door, greeting and seating people", points: { ushering: 2 } },
      { text: "Taking photos and posting the highlights", points: { publicity: 2 } },
      { text: "Behind the sound desk, projector or livestream", points: { technical: 2 } },
      { text: "Leading the worship", points: { stewards: 2 } },
    ],
  },
  {
    question: "Which would you rather prepare?",
    answers: [
      { text: "A Bible study outline", points: { ced: 2 } },
      { text: "A short skit or poem", points: { rocs: 2 } },
      { text: "A checklist and schedule for an event", points: { ushering: 2 } },
      { text: "A poster or short video", points: { publicity: 2 } },
    ],
  },
  {
    question: "Friends would describe you as...",
    answers: [
      { text: "Bold and talkative", points: { evangelism: 2 } },
      { text: "Musical", points: { stewards: 2 } },
      { text: "Patient and good with young people", points: { jnubs: 2 } },
      { text: "Creative, with an eye for design", points: { publicity: 2 } },
    ],
  },
  {
    question: "Which sounds most like you?",
    answers: [
      { text: "I love figuring out how equipment works", points: { technical: 2 } },
      { text: "I notice anyone who is new or alone and welcome them", points: { ushering: 2 } },
      { text: "I love explaining the Bible in a simple way", points: { ced: 2 } },
      { text: "I stay praying long after others leave", points: { prayer: 2 } },
    ],
  },
  {
    question: "What would you hate to miss?",
    answers: [
      { text: "Watching a student give their life to Christ", points: { evangelism: 2 } },
      { text: "A stage ministration with dance, drama and poetry", points: { rocs: 2 } },
      { text: "Seeing teens and children grow in their faith", points: { jnubs: 2 } },
      { text: "Worship rehearsal with the band", points: { stewards: 1, technical: 1 } },
    ],
  },
];
