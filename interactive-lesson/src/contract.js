export const PDF_PATH = '../Psychology_of_Intelligence_Analysis.pdf';
export const STORAGE_KEY = 'analysts-eye-v1';

export const PHASES = ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'];

export const CLASS = {
  app: 'ae-app',
  hub: 'ae-hub',
  card: 'ae-card',
  cardLocked: 'ae-card--locked',
  stepper: 'ae-stepper',
  phase: 'ae-phase',
  phaseActive: 'ae-phase--active',
  screen: 'ae-screen',
  heading: 'ae-heading',
  body: 'ae-body',
  btn: 'ae-btn',
  btnGhost: 'ae-btn--ghost',
  option: 'ae-option',
  optionSel: 'ae-option--selected',
  locked: 'ae-locked',
  reveal: 'ae-reveal',
  quote: 'ae-quote',
  cite: 'ae-cite',
  pdfLink: 'ae-pdf',
  toolkit: 'ae-toolkit',
  check: 'ae-check',
  blurStage: 'ae-blur',
  wordlist: 'ae-wordlist',
  timer: 'ae-timer',
  footer: 'ae-footer',
};

/**
 * @typedef {Object} Chapter
 * @property {string} id
 * @property {number} n
 * @property {string} part
 * @property {string} title
 * @property {string} idea
 * @property {string} archetype
 * @property {string} est
 * @property {boolean} playable
 * @property {number} pdfPage
 */

/**
 * @typedef {Object} Episode
 * @property {string} id
 * @property {Step[]} steps
 */

/**
 * @typedef {Object} ProseStep
 * @property {'prose'} type
 * @property {string} phase
 * @property {string} heading
 * @property {string} body
 * @property {string} cta
 */

/**
 * @typedef {Object} ChoiceOption
 * @property {string} id
 * @property {string} label
 */

/**
 * @typedef {Object} ChoiceStep
 * @property {'choice'} type
 * @property {'COMMIT'} phase
 * @property {string} prompt
 * @property {ChoiceOption[]} options
 * @property {string} lockCta
 * @property {string} correctId
 */

/**
 * @typedef {Object} RevealStep
 * @property {'reveal'} type
 * @property {'REVEAL'} phase
 * @property {string} heading
 * @property {string} body
 * @property {string} cta
 */

/**
 * @typedef {Object} BlurStep
 * @property {'blur'} type
 * @property {'COMMIT'} phase
 * @property {string} glyph
 * @property {string} prompt
 * @property {ChoiceOption[]} options
 * @property {string} lockCta
 * @property {string} sharpenCta
 * @property {string} correctId
 * @property {number} sharpenSteps
 * @property {string} revealHeading
 * @property {string} revealBody
 */

/**
 * @typedef {Object} WordProbe
 * @property {string} word
 * @property {boolean} onList
 */

/**
 * @typedef {Object} WordlistStep
 * @property {'wordlist'} type
 * @property {'PROVOKE'} phase
 * @property {string[]} words
 * @property {number} seconds
 * @property {WordProbe[]} probes
 * @property {string} submitCta
 * @property {string} revealHeading
 * @property {string} revealBody
 */

/**
 * @typedef {Object} ToolQuote
 * @property {string} text
 * @property {string} cite
 */

/**
 * @typedef {Object} ToolStep
 * @property {'tool'} type
 * @property {'TOOL'} phase
 * @property {string} heading
 * @property {string} body
 * @property {string} toolItem
 * @property {ToolQuote} quote
 * @property {number} pdfPage
 * @property {string} completeCta
 */

/**
 * @typedef {Object} MatrixHypothesis
 * @property {string} id
 * @property {string} label
 */

/**
 * @typedef {Object} MatrixEvidence
 * @property {string} id
 * @property {string} label
 */

/**
 * @typedef {Object} MatrixStep
 * @property {'matrix'} type
 * @property {'COMMIT'} phase
 * @property {string} prompt
 * @property {MatrixHypothesis[]} hypotheses
 * @property {MatrixEvidence[]} evidence
 * @property {string} lockCta
 */

/**
 * @typedef {Object} MatrixRevealEvidence
 * @property {string} id
 * @property {string} label
 * @property {('C'|'I'|'CC'|'II')[]} expert
 * @property {string} [note]
 */

/**
 * @typedef {Object} MatrixRevealStep
 * @property {'matrixReveal'} type
 * @property {'REVEAL'} phase
 * @property {string} lead
 * @property {MatrixHypothesis[]} hypotheses
 * @property {MatrixRevealEvidence[]} evidence
 * @property {string} body
 * @property {string} cta
 */

/**
 * @typedef {Object} RecapStep
 * @property {'recap'} type
 * @property {string} phase
 * @property {string} lead
 * @property {string} emptyText
 * @property {string} body
 * @property {string} cta
 */

/** @typedef {ProseStep|ChoiceStep|RevealStep|BlurStep|WordlistStep|ToolStep|MatrixStep|MatrixRevealStep|RecapStep} Step */
