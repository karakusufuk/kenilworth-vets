// Kenilworth Vets — demo data, copied word for word from the board scripts (SPEC §7).
// Paths are relative to the site root; page scripts prefix them with their own depth (`rel`).

export const IMG = {
  ear: 'images/ear.webp', juno: 'images/juno.webp', dental: 'images/dental.webp', biscuit: 'images/biscuit.webp',
  luna: 'images/luna.webp', park: 'images/park.webp', sofa: 'images/sofa.webp', miso: 'images/miso.webp',
  tina: 'images/tina.webp', pip: 'images/pip.webp'
};

/* ---------- home: "What brings you in?" (board Main: defs) ---------- */
export const QUESTIONS = [
  { id: 'wrong', title: "Something's not right", img: IMG.ear, pos: '55% 30%', desc: 'Off their food, limping, or just not themselves? We keep slots free every day for this.',
    opts: [['Book for today', 'book/'], ['Can it wait till morning?', 'emergency/'], ['WhatsApp us a photo', 'https://wa.me/353864960000']] },
  { id: 'new', title: 'A new arrival', img: IMG.juno, pos: '50% 30%', desc: 'Puppy, kitten or rescue — the first visit sets them up for the year ahead.',
    opts: [['Book a first visit', 'book/'], ['The first-year guide', 'new-pet/'], ['Register with us', '#register']] },
  { id: 'check', title: 'A check-up or jab', img: IMG.dental, pos: '55% 35%', desc: 'Boosters, health checks, nails and worming — the routine stuff.',
    opts: [['Book a check-up', 'book/'], ['Book a nurse clinic', 'book/'], ['See our prices', 'services/']] },
  { id: 'weight', title: 'Weight and diet', img: IMG.biscuit, pos: '45% 50%', desc: "We don't sell pet food, so you'll get an honest answer.",
    opts: [['Book a weight clinic', 'book/'], ['Drop in for a weigh', 'contact/'], ['Ask a nurse', 'contact/']] },
  { id: 'older', title: 'Getting on a bit', img: IMG.luna, pos: '35% 70%', desc: "Slower walks and stiff mornings. We'll help keep them comfortable.",
    opts: [['Book a senior check', 'book/'], ['Pain and arthritis care', 'services/'], ["When it's time", 'people-we-trust/']] },
  { id: 'holiday', title: 'Going away', img: IMG.park, pos: '45% 60%', desc: 'Leaving them at home in Dublin, or bringing them with you?',
    opts: [['Kennels and sitters', 'people-we-trust/'], ['Boarding with us', 'services/'], ['Pet passports', 'services/']] }
];

/* ---------- home: the rotating founder line (board Main: L) ---------- */
export const FOUNDER_LINES = [['', '17 years', ' on Kenilworth Square'], ['We know ', '2,400 pets', ' by name'], ['', 'Same vet,', ' every visit']];

/* ---------- home: Noticeboard slider (board Main: stories) ---------- */
export const HOME_STORIES = [
  { id: 'bobby', tag: 'Birthday', tagClass: 'tag-b', title: 'Bobby turned four', body: "Four years since a very small, very loud Jack Russell cross came in for his first jab. He's still loud. Teeth were spotless at his check-up last week.", date: '12 Oct 2026', cta: "Read Bobby's story", img: IMG.sofa, alt: 'Bobby asleep on the sofa' },
  { id: 'miso', tag: 'On the mend', tagClass: 'tag-r', title: "Miso's home", body: "Miso had a lump removed in September — nothing sinister, thankfully. The fur's nearly grown back and, we're told, so has the attitude.", date: '3 Oct 2026', cta: 'Read more', img: IMG.miso, alt: 'Miso the tabby asleep on a bed' },
  { id: 'luna', tag: 'Thirteen', tagClass: 'tag-b', title: 'Luna, still going strong', body: "Our oldest regular. A bit slower on the stairs since spring, on a joint plan that's working, and still first to the bowl every evening.", date: '27 Sep 2026', cta: 'Read more', img: IMG.luna, alt: 'Luna the old Labrador lying by her bowl' },
  { id: 'tina', tag: 'Needs a home', tagClass: 'tag-h', title: "Tina's looking for a sofa", body: "A retired racing greyhound, five, gentle and a bit shy at first. Grand with cats, less so with squirrels. Ask Gráinne if you'd like to meet her.", date: '20 Sep 2026', cta: 'Meet Tina', img: IMG.tina, alt: 'Tina the brindle greyhound' }
];

/* ---------- home: People we trust moments (board Main: MO) — index = kvMoment ---------- */
export const MOMENTS = [
  { t: 'Going away', img: IMG.park, alt: 'A dog out on a walk in the park', pos: '45% 60%' },
  { t: 'Working all day', img: IMG.sofa, alt: 'A dog snoozing on the sofa at home', pos: '50% 50%' },
  { t: 'A new puppy', img: IMG.biscuit, alt: 'A puppy on the clinic scales', pos: '45% 50%' },
  { t: 'Moving abroad', img: IMG.juno, alt: 'A beagle looking up', pos: '50% 30%' },
  { t: 'Saying goodbye', img: IMG.luna, alt: 'An old Labrador resting at home', pos: '35% 70%' },
  { t: 'Sorting insurance', img: IMG.dental, alt: 'A terrier at the vet', pos: '55% 35%' }
];

/* ---------- opening hours (board Main/Contact: hrs) ---------- */
export const HOURS_ROWS = [['Monday', '8:30 – 7pm'], ['Tuesday', '8:30 – 7pm'], ['Wednesday', '8:30 – 7pm'], ['Thursday', '8:30 – 7pm'], ['Friday', '8:30 – 7pm'], ['Saturday', '9 – 2pm'], ['Sunday', 'Closed']];

/* ---------- services (board Services: data) — [title, line, price, steps] ---------- */
export const SERVICES = [
  { name: 'Prevention', blurb: 'Keeping them well', items: [
    ['Annual booster & health check', 'A proper nose-to-tail check, a weigh and their yearly vaccine.', '€72', ["A weigh and a chat about how the year's been", 'Eyes, ears, heart, teeth and joints checked', 'The booster itself — a couple of seconds', "Their card updated and next year's reminder set"]],
    ['Puppy & kitten course', 'Two vaccines, a microchip check, worming and a flea plan.', '€140', ['First visit at eight or nine weeks', 'Second vaccine three or four weeks later', 'Microchip checked and registered to you', 'A plan for neutering and boosters']],
    ['Microchipping', 'The law for dogs in Ireland, and a very good idea for cats.', '€35', ["A quick scan in case they're already chipped", 'Chip placed under the scruff — like a jab', 'Scanned again to make sure it reads', 'Registered in your name on the Fido database']],
    ['Nurse clinic', 'Nails, worming, anal glands and flea and tick plans.', '€25', ['Fifteen minutes with one of our nurses', 'Whatever needs doing, done on the table', 'Weight noted on their file', 'Tips for keeping on top of it at home']] ] },
  { name: 'Seeing a vet', blurb: "When something's not right", items: [
    ['Consultation', 'Fifteen minutes with a vet. Same-day slots every weekday.', '€65', ["You tell us what you've noticed", 'The vet examines them and explains what they find', 'Options and costs before any tests', 'Medicine, a plan, or a follow-up booked']],
    ['Blood tests', 'Run in our own lab — most results in about 20 minutes.', '€95', ['A small sample from the leg or neck', 'Run here while you wait', 'The vet talks you through the results', 'A copy sent to My Pet']],
    ['X-ray & ultrasound', 'Done here, usually with a light sedative.', '€180', ['Drop them in first thing', 'Sedation if needed, then the imaging', 'The vet looks over the images', 'Collect in the afternoon and we go through it']] ] },
  { name: 'Surgery & dental', blurb: 'Planned and explained', items: [
    ['Neutering', 'Dogs and cats, as a day patient. Check-up afterwards included.', '€210', ['A pre-op check and fasting advice', 'Drop off at 8:30, surgery that morning', "We ring you when they're awake", 'Home that evening, check on day three']],
    ['Dental scale & polish', 'Under anaesthetic. We ring before any extractions.', '€260', ['Teeth looked at in a consult first', 'Cleaned, polished and charted', 'A call before anything comes out', 'Before and after photos for you']],
    ['Lump removal', 'Quoted after a consult. Lab results within the week.', '€240', ['A consult and a quick needle sample', 'Surgery as a day patient', 'The lump sent off to the lab', 'A call with results, stitches out at ten days']] ] },
  { name: 'Medical boarding', blurb: 'When they need a vet nearby', items: [
    ['Medical boarding', 'For pets on medication, diabetics, or anyone just out of surgery.', '€45', ['A visit first to meet them and plan their care', 'Meds and checks done on a written chart', 'A photo every day on WhatsApp', 'A full handover when you collect them']] ] }
];

/* ---------- new pet guide (board NewPet: D) — [age, ageSub, title, line, price] ---------- */
export const NEW_PET = {
  Puppy: [
    ['8 weeks', 'or the day they come home', 'First visit and jab', 'A good look over, a weigh, their first vaccine — and plenty of time for questions about food, sleep and toilet training.', '€75'],
    ['10–12 weeks', 'three or four weeks later', 'Second jab', 'That finishes the course. A week after this they can go out on walks and meet other dogs.', '€55'],
    ['12 weeks', 'at the same visit', 'Microchip in your name', "It's the law for dogs. Most breeders chip them — we'll check it scans and is registered to you.", '€15'],
    ['Every month', 'until six months', 'Worming and fleas', 'A nurse sets up a plan and adjusts the dose as they grow. No guessing in the pet shop.', '€12'],
    ['6 months', 'a chat, not a booking', 'Neutering — when?', "Timing depends on breed and size. We'll talk it through and explain why.", 'Free'],
    ['12 months', 'their first birthday', 'First booster', "Teeth, joints, weight and the booster. After that it's once a year.", '€72']],
  Kitten: [
    ['9 weeks', 'or the day they come home', 'First visit and jab', 'A good look over, a weigh, their first vaccine, and advice on litter trays and scratching.', '€75'],
    ['12 weeks', 'three weeks later', 'Second jab', 'That finishes the course. They can head outdoors about a week after.', '€55'],
    ['12 weeks', 'at the same visit', 'Microchip', 'Strongly recommended — indoor cats escape too. Scanned and registered to you.', '€35'],
    ['Every month', 'until six months', 'Worming and fleas', "A nurse sets it up by weight. Spot-on or tablet — whichever you'll actually manage.", '€10'],
    ['4–5 months', 'before they go out', 'Neutering', 'Earlier for cats than dogs. A day patient, home that evening.', '€120'],
    ['12 months', 'their first birthday', 'First booster', "Teeth, weight and the booster. Then it's once a year.", '€72']]
};
export const NEW_PET_TOTAL = {
  Puppy: 'The whole first year comes to roughly €330 plus worming. Neutering is quoted separately.',
  Kitten: 'The whole first year comes to roughly €400, neutering and worming included.'
};
