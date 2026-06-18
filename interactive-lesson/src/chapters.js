/**
 * Episode manifest — display order, § numbers, and book chapters aligned.
 *
 * Hub order: Part I (01–04) → Part II in book order Ch.4–8 (05–09) →
 * Part III Ch.9–13 (10–19) → Part IV (20). §01–§20 increase monotonically.
 * Part I opens with Ch.2 perception before Ch.1 framing — intentional hook.
 *
 * @typedef {Object} Episode
 * @property {string} id            file id for playable episodes (episodes/<id>.js)
 * @property {string} num           two-digit section number shown as §NN
 * @property {string} title
 * @property {string} chapterRef    e.g. 'Ch.2 — Perception'
 * @property {number} bookChapter
 * @property {number} pdfPage
 * @property {string} est           e.g. '4 min'
 * @property {string} archetype     one of ARCHETYPES
 * @property {string} part
 * @property {boolean} feedsToolkit
 * @property {boolean} playable
 */

export const PARTS = [
  'Part I — Our Mental Machinery',
  'Part II — Tools for Thinking',
  'Part III — Cognitive Biases',
  'Part IV — Conclusions',
];

export const ARCHETYPES = [
  'Illusion',
  'Predict & Reveal',
  'Causal Trap',
  'Mind-Set Break',
  'Run the Method',
  'Briefing',
];

/** @type {Episode[]} */
export const EPISODES = [
  // PART I — perception hook, then thinking-about-thinking, then depth
  { id: 'ep01', num: '01', title: "You can't trust your eyes", chapterRef: 'Ch.2 — Perception', bookChapter: 2, pdfPage: 35, est: '4 min', archetype: 'Illusion', part: PARTS[0], feedsToolkit: true, playable: true },
  { id: 'ep02', num: '02', title: 'What you just did has a name', chapterRef: 'Ch.1 — Thinking About Thinking', bookChapter: 1, pdfPage: 29, est: '3 min', archetype: 'Briefing', part: PARTS[0], feedsToolkit: true, playable: true },
  { id: 'ep03', num: '03', title: 'First glance, locked in', chapterRef: 'Ch.2 — Perception', bookChapter: 2, pdfPage: 35, est: '5 min', archetype: 'Predict & Reveal', part: PARTS[0], feedsToolkit: true, playable: true },
  { id: 'ep04', num: '04', title: 'Memory edits the evidence', chapterRef: 'Ch.3 — Memory', bookChapter: 3, pdfPage: 45, est: '5 min', archetype: 'Predict & Reveal', part: PARTS[0], feedsToolkit: true, playable: true },

  // PART II — book order Ch.4 → Ch.8
  { id: 'ep06', num: '05', title: 'How you fill the gaps', chapterRef: 'Ch.4 — Strategies', bookChapter: 4, pdfPage: 59, est: '5 min', archetype: 'Mind-Set Break', part: PARTS[1], feedsToolkit: true, playable: true },
  { id: 'ep05', num: '06', title: 'More data, same answer', chapterRef: 'Ch.5 — Need for Information', bookChapter: 5, pdfPage: 79, est: '6 min', archetype: 'Predict & Reveal', part: PARTS[1], feedsToolkit: true, playable: true },
  { id: 'ep19', num: '07', title: 'Break your own frame', chapterRef: 'Ch.6 — Open Mind', bookChapter: 6, pdfPage: 93, est: '5 min', archetype: 'Mind-Set Break', part: PARTS[1], feedsToolkit: true, playable: true },
  { id: 'ep17', num: '08', title: 'Get it out of your head', chapterRef: 'Ch.7 — Structuring', bookChapter: 7, pdfPage: 113, est: '6 min', archetype: 'Run the Method', part: PARTS[1], feedsToolkit: true, playable: true },
  { id: 'ep18', num: '09', title: 'Argue against everything', chapterRef: 'Ch.8 — Competing Hypotheses', bookChapter: 8, pdfPage: 123, est: '8 min', archetype: 'Run the Method', part: PARTS[1], feedsToolkit: true, playable: true },

  // PART III — book order Ch.9 → Ch.13
  { id: 'ep07', num: '10', title: "These aren't dumb mistakes", chapterRef: 'Ch.9 — Biases', bookChapter: 9, pdfPage: 139, est: '2 min', archetype: 'Briefing', part: PARTS[2], feedsToolkit: true, playable: true },
  { id: 'ep08', num: '11', title: 'Vivid beats true', chapterRef: 'Ch.10 — Evidence', bookChapter: 10, pdfPage: 143, est: '4 min', archetype: 'Predict & Reveal', part: PARTS[2], feedsToolkit: true, playable: true },
  { id: 'ep09', num: '12', title: "The dog that didn't bark", chapterRef: 'Ch.10 — Evidence', bookChapter: 10, pdfPage: 143, est: '4 min', archetype: 'Predict & Reveal', part: PARTS[2], feedsToolkit: true, playable: true },
  { id: 'ep10', num: '13', title: 'Beliefs outlive their proof', chapterRef: 'Ch.10 — Evidence', bookChapter: 10, pdfPage: 143, est: '4 min', archetype: 'Predict & Reveal', part: PARTS[2], feedsToolkit: true, playable: true },
  { id: 'ep11', num: '14', title: 'You invent the cause', chapterRef: 'Ch.11 — Cause & Effect', bookChapter: 11, pdfPage: 155, est: '5 min', archetype: 'Causal Trap', part: PARTS[2], feedsToolkit: true, playable: true },
  { id: 'ep12', num: '15', title: 'The situation, not the person', chapterRef: 'Ch.11 — Cause & Effect', bookChapter: 11, pdfPage: 155, est: '4 min', archetype: 'Causal Trap', part: PARTS[2], feedsToolkit: true, playable: true },
  { id: 'ep13', num: '16', title: 'Anchored', chapterRef: 'Ch.12 — Probability', bookChapter: 12, pdfPage: 175, est: '4 min', archetype: 'Predict & Reveal', part: PARTS[2], feedsToolkit: true, playable: true },
  { id: 'ep14', num: '17', title: "What comes to mind isn't what's likely", chapterRef: 'Ch.12 — Probability', bookChapter: 12, pdfPage: 175, est: '4 min', archetype: 'Predict & Reveal', part: PARTS[2], feedsToolkit: true, playable: true },
  { id: 'ep15', num: '18', title: 'What does "probably" mean?', chapterRef: 'Ch.12 — Probability', bookChapter: 12, pdfPage: 175, est: '5 min', archetype: 'Predict & Reveal', part: PARTS[2], feedsToolkit: true, playable: true },
  { id: 'ep16', num: '19', title: "You knew it all along (you didn't)", chapterRef: 'Ch.13 — Hindsight', bookChapter: 13, pdfPage: 189, est: '5 min', archetype: 'Predict & Reveal', part: PARTS[2], feedsToolkit: true, playable: true },

  // PART IV
  { id: 'ep20', num: '20', title: 'Your toolkit', chapterRef: 'Ch.14 — Improving Analysis', bookChapter: 14, pdfPage: 201, est: '4 min', archetype: 'Briefing', part: PARTS[3], feedsToolkit: true, playable: true },
];
