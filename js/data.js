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

/* ---------- emergency page (board Emergency: now / later / raw) ---------- */
export const EMERGENCY_NOW = [
  { t: 'Trouble breathing', d: 'Breathing with their mouth open (especially cats), pale or blue gums, choking.' },
  { t: 'Collapse or a fit', d: "Can't stand, is shaking or fitting, or won't respond to you." },
  { t: 'Heavy bleeding', d: 'Still bleeding after five minutes of firm pressure.' },
  { t: 'Poisoning', d: 'Chocolate, grapes, raisins, lilies (for cats), sugar-free gum, rat bait, painkillers.' },
  { t: 'Swollen, tight belly', d: 'Especially in big dogs, retching with nothing coming up.' },
  { t: 'A blocked cat', d: 'Straining in the litter tray with little or nothing coming out.' }
];
export const EMERGENCY_LATER = [
  { t: 'A slight limp', d: 'Still putting weight on it, eating and otherwise themselves.' },
  { t: 'Sick once', d: 'One go, bright afterwards, and keeping water down.' },
  { t: 'A small cut', d: "Stops bleeding with pressure and isn't gaping." },
  { t: 'Scratching an ear', d: 'Head shaking or a smell, but no tilt or wobble.' },
  { t: 'Off their food', d: 'For a day, but drinking and normal. Two days — ring us.' },
  { t: 'A runny eye', d: "Clear and the eye's open. Squinting or cloudy — ring us." }
];
export const EMERGENCY_STEPS = [
  ['Ring ahead', "Even two minutes' warning means a vet is free and a room is ready."],
  ['Bring the packet', 'If they ate something — a wrapper, a plant, a tablet box — bring it or take a photo.'],
  ['Keep them still and warm', "A towel or a blanket. Carry them if they can't walk. Don't give food or water."],
  ['Carrier for cats, lead for dogs', 'Even the calm ones. Pain makes everyone unpredictable.'],
  ['Pull up at the door', "The two spaces outside are kept free. Ring the side bell and we'll come out to you."]
];
// the Contact page's hours table spells Sunday out (board Contact: hrs)
export const CONTACT_HOURS = HOURS_ROWS.map(h => h[0] === 'Sunday' ? ['Sunday', 'Closed — ring for emergencies'] : h);

/* ---------- the Noticeboard (board Noticeboard: all) — ids in SPEC §2.2 order ---------- */
export const NOTICEBOARD = [
  { id: 'bobby', k: 'Birthdays', tagClass: 'tag-b', tag: 'Birthday', title: 'Bobby turned four', body: 'Four years since a very small, very loud Jack Russell cross came in for his first jab. Still loud. Teeth spotless at his check-up, and he walked straight past the scales like he owns the place.', date: '12 Oct 2026', who: 'Written by Ciarán', cta: "Read Bobby's story", img: IMG.sofa, alt: 'Bobby asleep on the sofa' },
  { id: 'miso', k: 'Recoveries', tagClass: 'tag-r', tag: 'On the mend', title: "Miso's home", body: 'Miso had a lump taken off her side in September — nothing sinister, thank God. The shaved patch is nearly gone and, according to her family, so is her patience with the cone.', date: '3 Oct 2026', who: 'Written by Aoife', cta: 'Read more', img: IMG.miso, alt: 'Miso the tabby asleep on a bed' },
  { id: 'pip', k: 'Recoveries', tagClass: 'tag-r', tag: 'Teeth sorted', title: 'Pip can crunch again', body: "Rabbit teeth never stop growing, and Pip's had grown into a problem. A dental under a light anaesthetic, a week of soft greens, and he's back on the carrots.", date: '29 Sep 2026', who: 'Written by Niamh', cta: 'Read more', img: IMG.pip, alt: 'Pip the rabbit on a towel' },
  { id: 'luna', k: 'Birthdays', tagClass: 'tag-b', tag: 'Thirteen', title: 'Luna, still going strong', body: "Our oldest regular. Slower on the stairs since the spring, on a joint plan that's working, and still first to the bowl every evening.", date: '27 Sep 2026', who: 'Written by Niamh', cta: 'Read more', img: IMG.luna, alt: 'Luna the old Labrador lying by her bowl' },
  { id: 'biscuit', k: 'Birthdays', tagClass: 'tag-b', tag: 'First visit', title: 'Biscuit on the scales', body: "Two kilos of cockapoo who wouldn't stay on the scales for more than half a second. First jab done, second one booked for November.", date: '22 Sep 2026', who: 'Written by Gráinne', cta: 'Read more', img: IMG.biscuit, alt: 'Biscuit the puppy on the scales' },
  { id: 'tina', k: 'Needs a home', tagClass: 'tag-h', tag: 'Needs a home', title: "Tina's looking for a sofa", body: "A retired racing greyhound, five, gentle and a bit shy with new people. Grand with cats, not so much with squirrels. She's staying with Tomasz until the right family comes along.", date: '20 Sep 2026', who: 'Ask Gráinne on the desk', cta: 'Ask about Tina', img: IMG.tina, alt: 'Tina the brindle greyhound' }
];
export const NOTICEBOARD_FILTERS = ['Everything', 'Birthdays', 'Recoveries', 'Needs a home'];

/* ---------- story pages (board Story for Bobby; the other five written from their card facts only) ---------- */
const TEAM_IMG = { ciaran: ['images/t_ciaran.webp', '45% 20%'], aoife: ['images/t_aoife.webp', '55% 30%'], niamh: ['images/t_niamh.webp', '40% 30%'], grainne: ['images/t_grainne.webp', '45% 30%'] };
export const STORIES = {
  bobby: { tagClass: 'tag-b', tag: 'Birthday', date: '12 October 2026', title: 'Bobby turned four',
    photos: [[IMG.sofa, 'Bobby asleep on the sofa', 'Birthday morning, on sofa duty'], [IMG.dental, 'Bobby having his teeth checked', 'His yearly check — teeth spotless'], [IMG.park, 'Bobby on a lead in the park', 'Kenilworth Square, straight after']],
    body: ['Bobby first came in at nine weeks old, small enough to sit in one hand and already the loudest thing in the waiting room. Gráinne still does the impression.',
      "He's a Jack Russell cross with strong opinions — mostly about the scales, which he walks around rather than onto. We got a weight out of him anyway at his yearly check last week, had a look at his teeth (spotless — his family actually brushes them, fair play) and gave him his booster.",
      "Four years, no operations, and one sock incident in 2024 that we've all agreed not to talk about. Happy birthday, Bobby."],
    author: { name: 'Dr Ciarán Doyle', sub: "Bobby's vet since 2022 · shared with his family's permission", img: TEAM_IMG.ciaran } },
  miso: { tagClass: 'tag-r', tag: 'On the mend', date: '3 October 2026', title: "Miso's home",
    photos: [[IMG.miso, 'Miso the tabby asleep on a bed']],
    body: ['Miso came in to us in September with a lump on her side. We took it off and had it checked, and the answer was the one we were all hoping for — nothing sinister, thank God.',
      "She has spent the weeks since in a cone, and she has not been shy about what she thinks of it. The shaved patch on her side is nearly gone now and, according to her family, so is her patience with the cone.",
      "The fur's nearly grown back and, we're told, so has the attitude. That is exactly what we like to hear. Good girl, Miso."],
    author: { name: 'Aoife Brennan', sub: "Veterinary nurse · shared with her family's permission", img: TEAM_IMG.aoife } },
  pip: { tagClass: 'tag-r', tag: 'Teeth sorted', date: '29 September 2026', title: 'Pip can crunch again',
    photos: [[IMG.pip, 'Pip the rabbit on a towel']],
    body: ["Rabbit teeth never stop growing, and Pip's had grown into a problem. So he came in to us for a dental.",
      'We did it under a light anaesthetic, tidied the teeth up and sent him home with orders for a week of soft greens.',
      "A week on, he's back on the carrots and crunching away like nothing happened. Fair play, Pip."],
    author: { name: 'Dr Niamh Kearney', sub: "Founder · shared with his family's permission", img: TEAM_IMG.niamh } },
  luna: { tagClass: 'tag-b', tag: 'Thirteen', date: '27 September 2026', title: 'Luna, still going strong',
    photos: [[IMG.luna, 'Luna the old Labrador lying by her bowl']],
    body: ['Luna has turned thirteen, which makes her our oldest regular — and she wears it well.',
      "She has been a bit slower on the stairs since the spring, so we put her on a joint plan. It's working, and she is still first to the bowl every evening.",
      'Happy birthday, Luna. Thirteen suits you.'],
    author: { name: 'Dr Niamh Kearney', sub: "Founder · shared with her family's permission", img: TEAM_IMG.niamh } },
  biscuit: { tagClass: 'tag-b', tag: 'First visit', date: '22 September 2026', title: 'Biscuit on the scales',
    photos: [[IMG.biscuit, 'Biscuit the puppy on the scales']],
    body: ["Biscuit came in for a first visit: two kilos of cockapoo who wouldn't stay on the scales for more than half a second. We got a weight in the end.",
      "First jab done. The second one is booked for November, so we'll be seeing Biscuit again soon.",
      'Welcome to the practice, Biscuit. We have a feeling the scales are going to get used to you.'],
    author: { name: 'Gráinne Ryan', sub: "Front desk · shared with the family's permission", img: TEAM_IMG.grainne } },
  tina: { tagClass: 'tag-h', tag: 'Needs a home', date: '20 September 2026', title: "Tina's looking for a sofa",
    photos: [[IMG.tina, 'Tina the brindle greyhound']],
    body: ["Tina is a retired racing greyhound, five years old, gentle and a bit shy with new people until she has decided you're grand.",
      "She's good with cats and not so sure about squirrels. For now she is staying with Tomasz, one of our nurses, until the right family comes along.",
      "If you think that family might be yours, ask Gráinne on the desk. She'll tell you all about Tina and sort out a time to meet her."],
    author: { name: 'Gráinne Ryan', sub: 'On the desk · ask her about meeting Tina', img: TEAM_IMG.grainne },
    cta: { t: 'Ask about Tina', href: 'contact/' } }
};
export const STORY_ORDER = ['bobby', 'miso', 'pip', 'luna', 'biscuit', 'tina'];

/* ---------- booking (board Book: R, names, dd, full, times) ---------- */
export const BOOK_REASONS = [['A jab or booster', 'With a quick health check', '15 min', '€72'], ["Something's not right", 'Off food, limping, sick', '15 min', '€65'], ['A follow-up', 'After surgery or treatment', '10 min', '€35'], ['A senior check', 'Bloods, joints, blood pressure', '30 min', '€110'], ['Nurse clinic', 'Nails, worming, a weigh', '15 min', '€25'], ['A travel check', 'Passport, rabies, tapeworm', '20 min', '€60']];
export const BOOK_STEPS = ['Pet', 'Reason', 'Time', 'Details'];
export const BOOK_SPECIES = ['Dog', 'Cat', 'Rabbit', 'Something else'];
export const BOOK_VETS = ["Whoever's free", 'Dr Niamh Kearney', 'Dr Ciarán Doyle'];
export const BOOK_DAYS = [['Mon', '26'], ['Tue', '27'], ['Wed', '28'], ['Thu', '29'], ['Fri', '30'], ['Sat', '31']];
export const BOOK_DAYS_FULL = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const BOOK_FREE = [5, 8, 3, 9, 6, 2];
export const BOOK_TIMES = ['9:00', '9:20', '9:40', '10:20', '11:00', '11:40', '12:20', '2:00', '2:40', '3:40', '4:20', '5:40'];

/* ---------- My Pet demo (board MyPet) ---------- */
export const MYPET = {
  facts: [['Born', '2 Mar 2023 · 3 yrs'], ['Microchip', '372 1410 0028 5531'], ['Pet passport', 'IE 0147 2209'], ['Insured with', 'Allianz Pet'], ['Usual vet', 'Dr Ciarán Doyle']],
  meds: [{ t: 'Milbemax (worming)', d: 'One tablet with food', when: 'Due today', cls: 'tag-h' }, { t: 'Bravecto (fleas & ticks)', d: 'Every 12 weeks', when: '9 Dec', cls: 'tag-blue' }, { t: 'Weight clinic check', d: 'With Aoife, 10 mins', when: '18 Nov', cls: 'tag-blue' }],
  vax: [{ t: 'Puppy 1', d: 'Apr 2023' }, { t: 'Puppy 2', d: 'May 2023' }, { t: 'Booster', d: 'Nov 2024' }, { t: 'Booster', d: 'Nov 2025' }, { t: 'Booster', d: 'Due 11 Nov', due: true }],
  visits: [{ date: '14 Oct 2026', t: 'Weight clinic', note: 'Down another 0.4 kg. Keep going — same food, smaller breakfast.', who: 'Aoife, nurse' }, { date: '2 Aug 2026', t: 'Ear infection', note: 'Left ear. Drops for seven days, rechecked and clear.', who: 'Dr Ciarán Doyle' }, { date: '12 May 2026', t: 'Weight clinic — first visit', note: '15.1 kg. Aiming for 13 kg by Christmas.', who: 'Aoife, nurse' }, { date: '10 Nov 2025', t: 'Yearly booster', note: "All good. A bit of tartar — brush if she'll let you.", who: 'Dr Niamh Kearney' }],
  reminders: [{ id: 'booster', t: 'Jab due', d: 'A week before, then on the day' }, { id: 'worming', t: 'Worming and fleas', d: "Monthly, the morning it's due" }, { id: 'appt', t: 'Appointment reminder', d: 'The evening before, at 6pm' }, { id: 'results', t: 'Test results back', d: 'As soon as the vet has looked at them' }],
  channels: ['Email', 'Text', 'Call'],
  defaults: { booster: 'Text', worming: 'Email', appt: 'Text', results: 'Call' },
  msgs: {
    booster: "Hi Sinéad, Juno's yearly booster is due on 11 Nov. Reply BOOK and we'll hold 9:40am on Tue 11th for her, or book online. — Kenilworth Vets",
    worming: "Morning! Juno's worming tablet is due today — one Milbemax, with her breakfast. — Kenilworth Vets",
    appt: "Just a reminder: Juno's seeing Dr Doyle tomorrow at 9:40am. Reply C if you need to cancel. — Kenilworth Vets",
    results: "Good news — Juno's bloods are back and all normal. Dr Kearney's notes are in My Pet. — Kenilworth Vets"
  },
  second: { off: 'Add a partner or housemate so they get the same reminders', on: 'Darragh Murphy · 086 555 0410 gets jab and appointment texts too' }
};

/* ---------- People we trust (board Partners: M) — [name, kind, area, why, link] ---------- */
export const PARTNERS = [
  { name: 'Going away', intro: "For pets staying in Dublin while you're gone. If they're on medication or just out of surgery, ask us about boarding with us instead.", biz: [['Ardmore Kennels', 'Kennels & cattery', 'Rathfarnham', "A separate cat wing, a photo every day, and they'll collect from Rathmines on Fridays.", 'ardmorekennels.ie'], ['Sit Stay Rathmines', 'House sitters', 'Rathmines', 'Vetted sitters who stay in your house. Great for older pets who hate a change of scene.', '087 555 2240'], ['The Cat House', 'Cattery', 'Terenure', 'Small, quiet and heated. Our nurses board their own cats here.', 'thecathouse.ie']] },
  { name: 'Working all day', intro: "Dogs need a break in the middle of a long day. These are people who'll walk them properly and tell you how it went.", biz: [['Square Walks', 'Dog walker', 'Rathmines', 'Small groups of four, round Kenilworth Square and Bushy Park. Sends you the route afterwards.', '085 555 7781'], ['Barking Mad Daycare', 'Doggy daycare', "Harold's Cross", 'Indoor space and a garden, grouped by size. They insist on a trial day first.', 'barkingmad.ie']] },
  { name: 'Bringing home a puppy', intro: 'The first few weeks shape the next fifteen years. This is who we send new owners to.', biz: [['Good Dog Dublin', 'Puppy classes', 'Ranelagh', 'A six-week course on Saturday mornings. Small classes, kind trainers, all reward-based.', 'gooddogdublin.ie'], ['Rathmines Pet Supplies', 'Pet shop', 'Rathmines', "Independent and honest about crates and food. They'll tell you when not to buy something.", '01 555 0390'], ['Fluff & Tumble', 'Groomer', 'Rathgar', 'Gentle first grooms for puppies — no rushing, plenty of treats.', 'fluffandtumble.ie']] },
  { name: 'Moving abroad', intro: "The rules change from country to country and they're strict. Start about three months out — we'll look after the vet side.", biz: [['PetAir Ireland', 'Pet relocation', 'Dublin Airport', 'Crates, flights and customs. They work with us on the paperwork.', 'petair.ie'], ['Kenilworth Vets', 'Travel health check', 'Here', 'Passport, rabies jab, tapeworm treatment and export certificates for outside the EU.', 'services/']] },
  { name: 'Saying goodbye', intro: 'When the time comes, we can do it here in our quiet room or at home. These are the people who help with what comes after.', biz: [['Faithful Friends', 'Pet cremation', 'Kilmacud', "Individual cremation, with ashes back within the week. They collect from us, so you don't have to.", 'faithfulfriends.ie'], ['Home Goodbyes', 'Home visits', 'South Dublin', "A vet who comes to you. We share notes, so you won't have to explain anything.", '087 555 6602']] },
  { name: 'Sorting insurance', intro: "We don't sell it and we're not paid to recommend it. These are the ones our clients claim from most easily.", biz: [['Allianz Pet', 'Lifetime cover', 'Nationwide', "Pays us directly for most claims, so you're not left out of pocket waiting.", 'allianz.ie'], ['PetSure Ireland', 'Lifetime cover', 'Nationwide', 'Good for older pets — no upper age limit for starting a policy.', 'petsure.ie']] },
  { name: 'Seeing a specialist', intro: 'Some things need a specialist. We refer, send over the history and stay in the loop.', biz: [['UCD Veterinary Hospital', 'Referral hospital', 'Belfield', 'Orthopaedics, oncology and neurology, with 24-hour intensive care.', 'ucd.ie'], ['Southside Out-of-Hours Vets', 'Nights & weekends', 'Terenure', 'Our out-of-hours partner. They send us their notes every morning.', '01 490 1100']] }
];

/* ---------- the team (board Team) ---------- */
export const TEAM = [
  { img: 'images/t_niamh.webp', pos: '40% 30%', name: 'Dr Niamh Kearney', role: 'Vet · founder', bio: "Opened the practice in 2009 after twelve years at a big hospital in Cork. Still does most of the senior checks, because she's known half those dogs since they were puppies.", facts: [['With us since', '2009'], ['Qualified', 'UCD, 1997'], ['Ask her about', 'Older dogs, arthritis, nutrition'], ['At home', 'Maeve, a 12-year-old collie']] },
  { img: 'images/t_ciaran.webp', pos: '45% 25%', name: 'Dr Ciarán Doyle', role: 'Vet', bio: "Does most of our surgery and dentals. Will happily draw you a diagram of your dog's knee whether you asked for one or not.", facts: [['With us since', '2016'], ['Qualified', 'UCD, 2008'], ['Ask him about', 'Surgery, teeth, cats who hate vets'], ['At home', 'Two cats, Fig and Biscuit']] },
  { img: 'images/t_aoife.webp', pos: '55% 30%', name: 'Aoife Brennan', role: 'Veterinary nurse', bio: 'Runs the weight clinic and the nurse clinics. The reason your cat eventually came out of the carrier. Has a real soft spot for rabbits.', facts: [['With us since', '2014'], ['Qualified', 'RVN, 2011'], ['Ask her about', 'Weight, diet, rabbits'], ['At home', 'Rua, a retired greyhound']] },
  { img: 'images/t_tomasz.webp', pos: '50% 35%', name: 'Tomasz Nowak', role: 'Veterinary nurse', bio: "Looks after anaesthetics, recovery and the phone calls after surgery. Grew up on a farm outside Kraków and hasn't met an animal he can't calm down.", facts: [['With us since', '2018'], ['Qualified', 'RVN, 2012'], ['Ask him about', 'Recovery after surgery, nervous dogs'], ['At home', "Tina, for now — she's looking for a family"]] },
  { img: 'images/t_grainne.webp', pos: '45% 30%', name: 'Gráinne Ryan', role: 'Front desk', bio: "Has been on the desk since the day we opened. Knows every patient by name and most of them by bark. If you're not sure what to book, ring and ask her.", facts: [['With us since', '2009'], ['Before that', 'Twenty years in a Rathmines pharmacy'], ['Ask her about', 'Anything at all'], ['At home', 'Dill, a very nosy tabby']] }
];
