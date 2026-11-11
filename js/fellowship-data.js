/* ==========================================================================
   NUBS LEGON — CONTENT STORE
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to update the website's words,
   times, links, sermons, events and notices. You never have to touch the HTML.

   HOW TO READ THIS FILE
   - { curly braces } hold ONE thing (an object): { title: "Hello", day: "Sunday" }
   - [ square brackets ] hold a LIST of things.
   - Every entry ends with a comma.  Text goes inside "double quotes".
   - Lines that begin with // are notes for you. The website ignores them.

   TIMES: all times on this site are Ghana time (which is the same as UTC).
   DATES: always write them as "YYYY-MM-DD", for example "2026-10-25".
   ========================================================================== */

const NUBS_DATA = {
  /* 1. THE FELLOWSHIP ------------------------------------------------------ */
  site: {
    name: "NUBSLEGON",
    fullName: "National Union of Baptist Students, University of Ghana, Legon",
    theme: "Empowered for Action!",
    motto: "Presenting every man perfect in Christ.",
    mottoReference: "Colossians 1:28",
    pillars: ["Worship", "Fellowship", "Discipleship", "Service", "Missions"],
    nationalUrl: "https://www.nubsghana.com",
    year: 2026,
  },

  /* 2. CONTACT AND SOCIAL LINKS ---------------------------------
     Leave a link as "" (empty) and its button is hidden or switched off.   */
  contact: {
    venue: "Commonwealth Hall Chapel, University of Ghana, Legon",
    directions: "Sunday gathering is held at the Commonwealth Hall Chapel at 11:00 AM.",
    email: "nubslegon17@gmail.com",
    phone: "0536841622",
    phoneWhatsApp: "233536841622",
    prayerWhatsApp: "233598352200",
    freshersWhatsAppGroup: "https://chat.whatsapp.com/LPpJbcf5yqY09IbQ7xRnj1?s=sw&p=i&mlu=4&ilr=4&iam=2", // paste the full invite link: https://chat.whatsapp.com/...
    social: {
      instagram: "https://www.instagram.com/nubs_legon/",
      facebook: "",
      youtube: "",
      tiktok: "https://www.tiktok.com/@nubslegon?_r=1&_t=ZS-9BHh71THOoT",
      whatsappChannel: "",
    },
  },

  /* 3. WORD FOR THE YEAR ----------------------------------------------------
     Shown in the "This week" card. Change the verse and reference when the theme changes. */
  weeklyWord: {
    verse:
      "A little one shall become a thousand, and a small one a strong nation: I the LORD will hasten it in his time.",
    reference: "Isaiah 60:22 (KJV)",
  },

  /* 4. WEEKLY SCHEDULE ------------------------------------------------------ */
  serviceSchedule: [
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
  ],

  /* 5. AUXILIARIES (MINISTRIES) ---------------------------------------------
     id        short code, no spaces. The quiz uses it too.
     image     optional photo, e.g. "assets/images/wings/prayer-force.jpg"
               Leave "" and a styled placeholder shows instead.
     ------------------------------------------------------------------------- */
  auxiliaries: [
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
  ],

  /* 6. FIND YOUR AUXILIARY QUIZ ----------------------------------------------
     Each answer gives points to one or more auxiliary ids.
     The auxiliary with the most points is the result.                      */
  // First question sets the home auxiliary (BYL / BMW). The rest score the service auxiliaries.
  quiz: [
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
  ],

  /* 7. BOOKS AND SERMONS ------------------------------------------------------
     type   "audio" or "video"
     url    link to where the sermon lives (YouTube, Spotify, Google Drive ...)
     audio  OPTIONAL direct link to an .mp3 file; adds a play button on the page
     Newest first. To add a sermon, copy one block and change the words.     */
  // Telegram channel that holds every sermon.
  /* Library. To add a book: put the PDF (and an optional cover picture) in
     assets/books/ and copy one line below. cover can be "" for a blue title tile. */
  books: [
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
  ],

  sermonChannel: { name: "NUBS Legon sermons and paradigm factors", url: "https://t.me/nubslegon" },
  // Order here is the order on the site. Leave date "" when the date is not known.
  sermons: [
    {
      title: "Ecclesia: Understanding the Church, Fellowship & the Need for Constant Fellowship for Growth",
      speaker: "Presi Victor Akande",
      date: "2026-11-05",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Resilience in Trials",
      speaker: "Harry Christian",
      date: "2026-09-06",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Christ Revealed Through Us (Leavers Service)",
      speaker: "Pastor Benjy Amoah",
      date: "2026-08-25",
      scripture: "Matthew 5:14-16",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "The Inward Witness",
      speaker: "Presi Victor Akande",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "The Communion with the Holy Spirit",
      speaker: "Pastor Benji",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "The Price of Servanthood",
      speaker: "Mr. Nana Kwame",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Discipleship",
      speaker: "Rev. Fred Newton",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Living a Life of Love",
      speaker: "Dr. Amofa",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "The Benefit of Kingdom Service",
      speaker: "Dr. Amofa",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Dreams",
      speaker: "Gus Kessie",
      date: "2026-07-18",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Fruitfulness",
      speaker: "Mr. Michael France",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Jesus Christ",
      speaker: "Prophet Kafui",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Revival Day 1: Benjamin's Session",
      speaker: "Pastor Benjamin",
      date: "2026-07-23",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Midweek Service",
      speaker: "Presi Victor Akande",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Prayer Team Retreat",
      speaker: "Kwadwo Arthur Amponsah",
      date: "2026-07-18",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Seeking His Presence",
      speaker: "Pastor Benjamin Amoah",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Financial Wisdom",
      speaker: "Godwin Ocloo",
      date: "2026-07-23",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Service Through Gifts",
      speaker: "Pastor Foli",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Love as the Ultimate Lifestyle",
      speaker: "Chairman Evans",
      date: "2026-08-11",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Winning the Civil War",
      speaker: "",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "A Heart That Longs for Jesus",
      speaker: "Min. Michael France",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Anchored in Christ",
      speaker: "Presi Victor Akande",
      date: "2026-08-09",
      scripture: "Hebrews 6:19, Colossians 2:6-7",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Loyalty in Service",
      speaker: "Min. Victor Akande",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Intimacy",
      speaker: "Rev. Newton",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "The Ministry of the Holy Spirit",
      speaker: "Dr. Nana Baah",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Who Are We Serving",
      speaker: "Minister Michael France",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
    {
      title: "Victory in Christ",
      speaker: "Presi Victor Akande",
      date: "",
      scripture: "",
      type: "audio",
      url: "https://t.me/nubslegon",
    },
  ],

  /* 8. FRESHERS --------------------------------------------------------------
     The group link is set above in contact.freshersWhatsAppGroup.
     committeeWhatsApp  number of the freshers committee in international format
                        with NO plus or spaces, e.g. "233241234567". Leave "" for now.
     contacts           people freshers can message. Add one block per person.        */
  freshers: {
    intro:
      "New at Legon? You do not have to figure it out alone. Join the family group, message the Freshers Committee, or ask us anything.",
    // Where the "Ask us anything" box and "Message the committee" button go.
    committeeLink: "https://wa.me/233277641309",
    committeeWhatsApp: "233277641309",
    contacts: [
      { name: "Comfort", role: "Freshers Committee Chairman", whatsapp: "233277641309" },
      { name: "Arthur", role: "Freshers Committee Vice Chairman", url: "https://wa.me/233543220291" },
    ],
    steps: [
      {
        title: "Join the family group",
        text: "Tap the WhatsApp button. Meet other freshers and get every announcement first.",
      },
      {
        title: "Come to a gathering",
        text: "Join us on Sunday at 11:00 AM. Come as you are, someone will find you and say hello.",
      },
      { title: "Find your auxiliary", text: "Take the quick quiz and see where your gifts fit." },
      { title: "Say hi to the committee", text: "Message us any time. No question is too small." },
    ],
    faqs: [
      {
        q: "Where and when does NUBS Legon meet?",
        a: "We meet every Sunday at 11:00 AM at the Commonwealth Hall Chapel. Come a little early and someone will welcome you.",
      },
      {
        q: "Do I have to be a Baptist to join?",
        a: "Not at all. Everyone is welcome, whatever your church background. Come as you are and grow with us.",
      },
      {
        q: "How do I join an auxiliary?",
        a: "Go to the Auxiliaries section and open the details of the one you like. Press Join this auxiliary, fill in the short form, and we will take it from there.",
      },
      {
        q: "I missed a service. How do I catch up?",
        a: "Every sermon is on our Telegram channel. Press Listen on Telegram in the Sermons section, and it takes you straight there to play them.",
      },
      {
        q: "Can I send a prayer request privately?",
        a: "Yes. Use the Private prayer request form near the bottom of the page. It opens WhatsApp with your request ready to send to our prayer team, and it is never shown on this site.",
      },
      {
        q: "I am new on campus. What should I do?",
        a: "Contact Comfort or Arthur using the numbers below. We will make you feel at home and help you out with anything you need.",
      },
    ],
  },

  /* 9. EVENTS ----------------------------------------------------------------
     date, start, end   Ghana time. Past events hide themselves automatically.
     Add to calendar buttons are built from these three values.              */
  /* Events. To add one, copy a block below and change the words.
     date is YYYY-MM-DD, start and end are 24-hour (18:00 = 6 PM).
     Poster: put the picture in assets/images/events/ and add
         image: "assets/images/events/name.jpg",
     Events with no image get a blue date tile. Once the date passes, the event
     disappears from the site by itself.
     For an event with only a month so far, use  dateLabel: "April 2027"  and  duration: "3 days". */
  events: [
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
  ],

  /* 10. NOTICE BOARD ----------------------------------------------------------
     pinned: true keeps a notice at the top.                                  */
  notices: [
    // No announcements for now. To add one, copy this block between the brackets:
    // { title: "Your title", date: "2026-11-20", category: "Notice", body: "Short message.", pinned: false },
  ],

  /* 11. LEADERSHIP ------------------------------------------------------------
     spotlight: true  shows that person in the large card.
     image            the artwork or photo in assets/images/
     Add more leaders by copying the block and removing "spotlight".         */
  leadersParagraph:
    "This is the prestigious leadership of NUBS Legon: students called to serve, committed to Christ, and empowered for action. Presenting every man perfect in Christ...",
  leaders: [
    {
      role: "President",
      name: "Gus Kessie",
      image: "assets/images/leaders/president.jpg",
      imageAlt: "President of NUBS Legon",
    },
    {
      role: "Vice President",
      name: "Godfred Ofosu",
      image: "assets/images/leaders/vice-president.jpg",
      imageAlt: "Vice President of NUBS Legon",
    },
    {
      role: "General Secretary",
      name: "Tesil Tamakloe",
      image: "assets/images/leaders/general-secretary.jpg",
      imageAlt: "General Secretary of NUBS Legon",
    },
    {
      role: "Financial Secretary",
      name: "Winnie Hammond",
      image: "assets/images/leaders/financial-secretary.jpg",
      imageAlt: "Financial Secretary of NUBS Legon",
    },
    {
      role: "Organizing Secretary",
      name: "James Bervell",
      image: "assets/images/leaders/organizing-secretary.jpg",
      imageAlt: "Organizing Secretary of NUBS Legon",
    },
    {
      role: "Cell Coordinator",
      name: "Fati Nadia Sulemana",
      image: "assets/images/leaders/cell-coordinator.jpg",
      imageAlt: "Cell Coordinator of NUBS Legon",
    },
    {
      role: "Evangelism Secretary",
      name: "Hannah Heidi Dowuonah",
      image: "assets/images/leaders/evangelism-secretary.jpg",
      imageAlt: "Evangelism Secretary of NUBS Legon",
    },
  ],

  /* 12. GALLERY ----------------------------------------------------------------
     An entry with src: "" shows an "Add a photo" tile.                        */
  gallery: [
    {
      src: "assets/images/gallery/half-night-15.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-15.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/thanksgiving-02.jpg",
      thumb: "assets/images/gallery/thumbs/thanksgiving-02.jpg",
      group: "Thanksgiving & Handing-over",
      alt: "Thanksgiving & Handing-over",
      caption: "Thanksgiving & Handing-over",
    },
    {
      src: "assets/images/gallery/half-night-03.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-03.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/bible-quiz-07.jpg",
      thumb: "assets/images/gallery/thumbs/bible-quiz-07.jpg",
      group: "Bible Quiz",
      alt: "Bible Quiz",
      caption: "Bible Quiz",
    },
    {
      src: "assets/images/gallery/half-night-10.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-10.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/bible-quiz-02.jpg",
      thumb: "assets/images/gallery/thumbs/bible-quiz-02.jpg",
      group: "Bible Quiz",
      alt: "Bible Quiz",
      caption: "Bible Quiz",
    },
    {
      src: "assets/images/gallery/half-night-06.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-06.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/more-08.jpg",
      thumb: "assets/images/gallery/thumbs/more-08.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/half-night-11.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-11.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/more-25.jpg",
      thumb: "assets/images/gallery/thumbs/more-25.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/half-night-02.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-02.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/more-09.jpg",
      thumb: "assets/images/gallery/thumbs/more-09.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/half-night-14.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-14.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/more-10.jpg",
      thumb: "assets/images/gallery/thumbs/more-10.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-08.jpg",
      thumb: "assets/images/gallery/thumbs/congress-08.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-20.jpg",
      thumb: "assets/images/gallery/thumbs/more-20.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/bible-quiz-08.jpg",
      thumb: "assets/images/gallery/thumbs/bible-quiz-08.jpg",
      group: "Bible Quiz",
      alt: "Bible Quiz",
      caption: "Bible Quiz",
    },
    {
      src: "assets/images/gallery/half-night-18.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-18.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/more-53.jpg",
      thumb: "assets/images/gallery/thumbs/more-53.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/half-night-04.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-04.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/more-05.jpg",
      thumb: "assets/images/gallery/thumbs/more-05.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-16.jpg",
      thumb: "assets/images/gallery/thumbs/congress-16.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-42.jpg",
      thumb: "assets/images/gallery/thumbs/more-42.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-03.jpg",
      thumb: "assets/images/gallery/thumbs/congress-03.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-43.jpg",
      thumb: "assets/images/gallery/thumbs/more-43.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-17.jpg",
      thumb: "assets/images/gallery/thumbs/congress-17.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-19.jpg",
      thumb: "assets/images/gallery/thumbs/more-19.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-06.jpg",
      thumb: "assets/images/gallery/thumbs/congress-06.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/half-night-07.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-07.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/more-02.jpg",
      thumb: "assets/images/gallery/thumbs/more-02.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-07.jpg",
      thumb: "assets/images/gallery/thumbs/congress-07.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-32.jpg",
      thumb: "assets/images/gallery/thumbs/more-32.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/bible-quiz-01.jpg",
      thumb: "assets/images/gallery/thumbs/bible-quiz-01.jpg",
      group: "Bible Quiz",
      alt: "Bible Quiz",
      caption: "Bible Quiz",
    },
    {
      src: "assets/images/gallery/more-39.jpg",
      thumb: "assets/images/gallery/thumbs/more-39.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/thanksgiving-05.jpg",
      thumb: "assets/images/gallery/thumbs/thanksgiving-05.jpg",
      group: "Thanksgiving & Handing-over",
      alt: "Thanksgiving & Handing-over",
      caption: "Thanksgiving & Handing-over",
    },
    {
      src: "assets/images/gallery/more-55.jpg",
      thumb: "assets/images/gallery/thumbs/more-55.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/thanksgiving-04.jpg",
      thumb: "assets/images/gallery/thumbs/thanksgiving-04.jpg",
      group: "Thanksgiving & Handing-over",
      alt: "Thanksgiving & Handing-over",
      caption: "Thanksgiving & Handing-over",
    },
    {
      src: "assets/images/gallery/bible-quiz-04.jpg",
      thumb: "assets/images/gallery/thumbs/bible-quiz-04.jpg",
      group: "Bible Quiz",
      alt: "Bible Quiz",
      caption: "Bible Quiz",
    },
    {
      src: "assets/images/gallery/more-46.jpg",
      thumb: "assets/images/gallery/thumbs/more-46.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-15.jpg",
      thumb: "assets/images/gallery/thumbs/congress-15.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-01.jpg",
      thumb: "assets/images/gallery/thumbs/more-01.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-01.jpg",
      thumb: "assets/images/gallery/thumbs/congress-01.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-06.jpg",
      thumb: "assets/images/gallery/thumbs/more-06.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-14.jpg",
      thumb: "assets/images/gallery/thumbs/congress-14.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-13.jpg",
      thumb: "assets/images/gallery/thumbs/more-13.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-09.jpg",
      thumb: "assets/images/gallery/thumbs/congress-09.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-22.jpg",
      thumb: "assets/images/gallery/thumbs/more-22.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/thanksgiving-03.jpg",
      thumb: "assets/images/gallery/thumbs/thanksgiving-03.jpg",
      group: "Thanksgiving & Handing-over",
      alt: "Thanksgiving & Handing-over",
      caption: "Thanksgiving & Handing-over",
    },
    {
      src: "assets/images/gallery/more-07.jpg",
      thumb: "assets/images/gallery/thumbs/more-07.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/thanksgiving-01.jpg",
      thumb: "assets/images/gallery/thumbs/thanksgiving-01.jpg",
      group: "Thanksgiving & Handing-over",
      alt: "Thanksgiving & Handing-over",
      caption: "Thanksgiving & Handing-over",
    },
    {
      src: "assets/images/gallery/more-31.jpg",
      thumb: "assets/images/gallery/thumbs/more-31.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/half-night-13.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-13.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/more-37.jpg",
      thumb: "assets/images/gallery/thumbs/more-37.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/half-night-16.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-16.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/more-15.jpg",
      thumb: "assets/images/gallery/thumbs/more-15.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-13.jpg",
      thumb: "assets/images/gallery/thumbs/congress-13.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-35.jpg",
      thumb: "assets/images/gallery/thumbs/more-35.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-04.jpg",
      thumb: "assets/images/gallery/thumbs/congress-04.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-34.jpg",
      thumb: "assets/images/gallery/thumbs/more-34.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-02.jpg",
      thumb: "assets/images/gallery/thumbs/congress-02.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-18.jpg",
      thumb: "assets/images/gallery/thumbs/more-18.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-05.jpg",
      thumb: "assets/images/gallery/thumbs/congress-05.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-16.jpg",
      thumb: "assets/images/gallery/thumbs/more-16.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-12.jpg",
      thumb: "assets/images/gallery/thumbs/congress-12.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-12.jpg",
      thumb: "assets/images/gallery/thumbs/more-12.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-11.jpg",
      thumb: "assets/images/gallery/thumbs/congress-11.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-11.jpg",
      thumb: "assets/images/gallery/thumbs/more-11.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-18.jpg",
      thumb: "assets/images/gallery/thumbs/congress-18.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-23.jpg",
      thumb: "assets/images/gallery/thumbs/more-23.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/half-night-05.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-05.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/more-57.jpg",
      thumb: "assets/images/gallery/thumbs/more-57.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/bible-quiz-03.jpg",
      thumb: "assets/images/gallery/thumbs/bible-quiz-03.jpg",
      group: "Bible Quiz",
      alt: "Bible Quiz",
      caption: "Bible Quiz",
    },
    {
      src: "assets/images/gallery/more-44.jpg",
      thumb: "assets/images/gallery/thumbs/more-44.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/congress-10.jpg",
      thumb: "assets/images/gallery/thumbs/congress-10.jpg",
      group: "NUBS Congress 2026",
      alt: "NUBS Congress 2026",
      caption: "NUBS Congress 2026",
    },
    {
      src: "assets/images/gallery/more-38.jpg",
      thumb: "assets/images/gallery/thumbs/more-38.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/half-night-17.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-17.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/more-29.jpg",
      thumb: "assets/images/gallery/thumbs/more-29.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/half-night-09.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-09.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/more-28.jpg",
      thumb: "assets/images/gallery/thumbs/more-28.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/half-night-08.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-08.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/more-03.jpg",
      thumb: "assets/images/gallery/thumbs/more-03.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-21.jpg",
      thumb: "assets/images/gallery/thumbs/more-21.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-36.jpg",
      thumb: "assets/images/gallery/thumbs/more-36.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-14.jpg",
      thumb: "assets/images/gallery/thumbs/more-14.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/half-night-12.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-12.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/bible-quiz-06.jpg",
      thumb: "assets/images/gallery/thumbs/bible-quiz-06.jpg",
      group: "Bible Quiz",
      alt: "Bible Quiz",
      caption: "Bible Quiz",
    },
    {
      src: "assets/images/gallery/half-night-01.jpg",
      thumb: "assets/images/gallery/thumbs/half-night-01.jpg",
      group: "Half Night & Variety Night",
      alt: "Half Night & Variety Night",
      caption: "Half Night & Variety Night",
    },
    {
      src: "assets/images/gallery/bible-quiz-05.jpg",
      thumb: "assets/images/gallery/thumbs/bible-quiz-05.jpg",
      group: "Bible Quiz",
      alt: "Bible Quiz",
      caption: "Bible Quiz",
    },
    {
      src: "assets/images/gallery/more-52.jpg",
      thumb: "assets/images/gallery/thumbs/more-52.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-24.jpg",
      thumb: "assets/images/gallery/thumbs/more-24.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-51.jpg",
      thumb: "assets/images/gallery/thumbs/more-51.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-26.jpg",
      thumb: "assets/images/gallery/thumbs/more-26.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-50.jpg",
      thumb: "assets/images/gallery/thumbs/more-50.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-47.jpg",
      thumb: "assets/images/gallery/thumbs/more-47.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-56.jpg",
      thumb: "assets/images/gallery/thumbs/more-56.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-54.jpg",
      thumb: "assets/images/gallery/thumbs/more-54.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-58.jpg",
      thumb: "assets/images/gallery/thumbs/more-58.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-49.jpg",
      thumb: "assets/images/gallery/thumbs/more-49.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-48.jpg",
      thumb: "assets/images/gallery/thumbs/more-48.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-41.jpg",
      thumb: "assets/images/gallery/thumbs/more-41.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-04.jpg",
      thumb: "assets/images/gallery/thumbs/more-04.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-33.jpg",
      thumb: "assets/images/gallery/thumbs/more-33.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-40.jpg",
      thumb: "assets/images/gallery/thumbs/more-40.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-17.jpg",
      thumb: "assets/images/gallery/thumbs/more-17.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-45.jpg",
      thumb: "assets/images/gallery/thumbs/more-45.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
    {
      src: "assets/images/gallery/more-27.jpg",
      thumb: "assets/images/gallery/thumbs/more-27.jpg",
      group: "More moments",
      alt: "More moments",
      caption: "More moments",
    },
  ],

  /* 13. FORMS ------------------------------------------------------------------- */
  forms: {
    prayerPrivacyNote:
      "Your request goes straight to our prayer team on WhatsApp and is never shown on this site. Add your name only if you want a reply.",
  },
};
