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
