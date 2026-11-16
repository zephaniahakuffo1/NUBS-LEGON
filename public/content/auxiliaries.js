/* ==========================================================================
   NUBS LEGON CONTENT: AUXILIARIES (MINISTRIES)
   --------------------------------------------------------------------------
   One block per auxiliary. To add one, copy a whole block { ... }, and change
   the words.

   id           short code, small letters, no spaces. Never change the id of an
             existing auxiliary: the quiz (quiz.js) uses it.
   short        the abbreviation shown on the picture.
   image        picture in assets/images/auxiliaries/. Leave "" for a plain tile.
   fit          OPTIONAL. Add  fit: "contain",  when a logo is being cut off.
   verse        OPTIONAL Bible reference shown on the picture.

   THE THREE RULES (they apply to every file in this folder)
   1. Text goes inside "double quotes".
   2. Every item ends with a comma, like the ones already there.
   3. Lines that start with // are notes for you. The website ignores them.
   When you are done, run:  npm run check
   It tells you in plain words if something is wrong.
   ========================================================================== */

NUBS_DATA.auxiliaries = [
  {
    id: "byl",
    name: "Baptist Young Ladies",
    short: "BYL",
    tagline: "From darkness to light",
    description: "The Baptist Young Ladies (BYL) is an auxiliary group dedicated to nurturing young ladies in Christ, building their faith, and encouraging them to live godly lives. Through Bible studies, prayer meetings, fellowship, and spiritual mentorship, we grow together in faith and wisdom. We promote love, unity, discipline, and sisterhood among young ladies in the church. Our ultimate purpose is to raise godly, confident, and responsible young women who serve God faithfully and positively impact their families, church, and society.",
    verse: "1 Peter 2:9",
    image: "assets/images/auxiliaries/byl.jpg",
  },
  {
    id: "ced",
    name: "Christian Education Department",
    short: "CED",
    tagline: "Study to show yourself approved",
    description: "The Christian Education Department is committed to promoting spiritual growth and biblical understanding among members of the Union. Through Bible studies, quizzes, conferences and other educational activities, the department seeks to deepen members' knowledge of God's Word. It also encourages personal Bible study, sound Christian doctrine and the practical application of Scripture in daily life. Ultimately, it aims to equip members to live out their faith confidently and impact their generation for Christ.",
    verse: "",
    image: "assets/images/auxiliaries/ced.jpg",
  },
  {
    id: "bmw",
    name: "Baptist Men's Wing",
    short: "BMW",
    tagline: "As far as the man goes, so goes the world",
    description: "The Baptist Men's Wing exists to nurture, disciple, and equip young men with the timeless principles and values of Christian manhood. Guided by the conviction that the spiritual state of a man profoundly shapes the world around him, the department is dedicated to building strong, faith-driven leaders. Through spiritual mentorship, vibrant fellowship, and structured discipleship, it fosters an environment where young men can ignite and sustain their prayer lives. By developing moral strength, spiritual maturity, and strong Christian character, the auxiliary prepares men to lead purposefully in their families, churches, and broader communities.",
    verse: "",
    image: "assets/images/auxiliaries/bmw.jpg",
  },
  {
    id: "stewards",
    name: "Stewards of Praise",
    short: "STW",
    tagline: "Praise on",
    description: "Our department exists to glorify God through passionate worship, excellent music ministry, and Christ centred service. Through rehearsals, worship services, outreach programmes, and discipleship, we aim to lead people into God's presence and proclaim His love to the world.",
    verse: "",
    image: "assets/images/auxiliaries/stewards.jpg",
  },
  {
    id: "prayer",
    name: "Prayer Committee",
    short: "PC",
    tagline: "More prayer!!",
    description: "The prayer committee serves to stand in the gap in prayer and fasting as far as the spiritual wellbeing of the church is concerned. We aim to first equip ourselves as a committee and also the entire church as a whole.",
    verse: "",
    image: "assets/images/auxiliaries/prayer.jpg",
  },
  {
    id: "rocs",
    name: "Royal Choreographers",
    short: "ROCS",
    tagline: "We rock the gospel",
    description: "ROCS is dedicated to advancing the Gospel through vibrant spoken word poetry, drama, and contemporary choreography. Our ministry centers on flagship programs like our annual ROCS Retreat, our high-energy Unstoppable Praise ministrations, the semester Carols Service, and weekly Sunday and midweek worship sessions. Beyond regular services, we conduct specialized drama training for our poets and choreograph dynamic dance routines across breakdance and urban styles. We also actively collaborate on creative video productions with the publicity team and organize external ministration exchanges with other Baptist churches. Through intensive stagecraft, dedicated team recreational days, and spirit-filled creative arts, we aim to inspire, edify, and impact the entire body of Christ.",
    verse: "",
    image: "assets/images/auxiliaries/rocs.jpg",
  },
  {
    id: "ushering",
    name: "Ushering Department",
    short: "USH",
    tagline: "The welcoming arm of the church",
    description: "The Ushering Department is the welcoming arm of the Church. Its purpose is to greet and guide worshippers to their seats while being at their beck and call. During services, the department maintains order, assists with offering collection and supports the Minister as needed.",
    verse: "",
    image: "assets/images/auxiliaries/ushering.jpg",
    fit: "contain",
  },
  {
    id: "technical",
    name: "Technical Team",
    short: "TECH",
    tagline: "Sound, screens and everything behind the scenes",
    description: "Keeps every service running smoothly with sound, projection, live streaming and equipment, so the Word and worship reach every ear and eye.",
    verse: "",
    image: "assets/images/auxiliaries/technical.jpg",
    fit: "contain",
  },
  {
    id: "publicity",
    name: "Publicity",
    short: "PUB",
    tagline: "Telling our story",
    description: "Tells the story of NUBS Legon through graphics, photography, video and social media, and invites the campus to every programme.",
    verse: "",
    image: "assets/images/auxiliaries/publicity.jpg",
    fit: "contain",
  },
  {
    id: "evangelism",
    name: "Evangelism and Follow-up Team",
    short: "EFT",
    tagline: "Reaching the nations",
    description: "Takes the gospel to students on campus and follows up new believers and first-time visitors so that no one walks alone.",
    verse: "",
    image: "assets/images/auxiliaries/evangelism.jpg",
  },
  {
    id: "jnubs",
    name: "Junior NUBS",
    short: "JNUBS",
    tagline: "Impacting our generation",
    description: "Junior NUBS nurtures young people in the faith and prepares them to grow into the leaders of tomorrow.",
    verse: "",
    image: "assets/images/auxiliaries/jnubs.jpg",
  },
];
