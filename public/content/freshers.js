/* ==========================================================================
   NUBS LEGON CONTENT: FRESHERS
   --------------------------------------------------------------------------
   The freshers WhatsApp group link is in site.js (contact.freshersWhatsAppGroup).

   committeeLink       where the "Message the committee" button goes.
   committeeWhatsApp   the number that receives "Ask us anything" questions and
                    "Join the family" forms. International form, no plus,
                    for example "233241234567".
   contacts            people freshers can message. One block per person.
   steps               the numbered welcome steps.
   faqs                the "Quick answers". q is the question, a is the answer.
   PRIVACY: only add a person's name and number here if they have agreed.

   THE THREE RULES (they apply to every file in this folder)
   1. Text goes inside "double quotes".
   2. Every item ends with a comma, like the ones already there.
   3. Lines that start with // are notes for you. The website ignores them.
   When you are done, run:  npm run check
   It tells you in plain words if something is wrong.
   ========================================================================== */

NUBS_DATA.freshers = {
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
};
