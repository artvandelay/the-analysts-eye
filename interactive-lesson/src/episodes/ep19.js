const NINE_DOTS = `<svg viewBox="-20 -20 260 260" width="220" height="220" role="img" aria-label="Nine dots in a three by three grid">
  <g fill="currentColor">
    <circle cx="60" cy="60" r="7"/><circle cx="130" cy="60" r="7"/><circle cx="200" cy="60" r="7"/>
    <circle cx="60" cy="130" r="7"/><circle cx="130" cy="130" r="7"/><circle cx="200" cy="130" r="7"/>
    <circle cx="60" cy="200" r="7"/><circle cx="130" cy="200" r="7"/><circle cx="200" cy="200" r="7"/>
  </g>
</svg>`;

const SOLUTION = `<svg viewBox="-20 -20 260 260" width="220" height="220" role="img" aria-label="Nine dots in a three by three grid">
  <g fill="currentColor">
    <circle cx="60" cy="60" r="7"/><circle cx="130" cy="60" r="7"/><circle cx="200" cy="60" r="7"/>
    <circle cx="60" cy="130" r="7"/><circle cx="130" cy="130" r="7"/><circle cx="200" cy="130" r="7"/>
    <circle cx="60" cy="200" r="7"/><circle cx="130" cy="200" r="7"/><circle cx="200" cy="200" r="7"/>
  </g>
  <path d="M 60 60 L 200 200 L 200 -10 L -10 200 L 200 200" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" opacity="0.85"/>
</svg>`;

export default {
  id: 'ep19',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE PUZZLE',
      svg: NINE_DOTS,
      lead: 'Try this before you read on.',
      body:
        'Without lifting pencil from paper, draw no more than four straight lines that will cross through all nine dots.\n\nGenuinely try — on paper or in your head — before going on.',
      cta: 'I TRIED IT →',
    },
    {
      type: 'choice',
      phase: 'COMMIT',
      mode: 'advance',
      prompt: 'How did it go?',
      options: [
        { id: 'solved', label: 'I cracked it' },
        { id: 'stuck', label: 'I kept running out of lines' },
      ],
    },
    {
      type: 'prose',
      phase: 'REVEAL',
      label: 'THE CAGE',
      svg: SOLUTION,
      lead: 'The solution leaves the square.',
      body:
        'The square was never in the rules: "This unconscious constraint exists only in the mind of the problem-solver; it is not specified in the definition of the problem." Drop the through-the-center assumption and three lines suffice. Roll the paper into a cylinder and one line spirals through all nine dots.\n\nHeuer credits James L. Adams, Conceptual Blockbusting.',
      cta: 'NAME THE MECHANISM →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'Mental ruts are unavoidable — and intelligence judgments live in them.',
      body:
        'A mind-set "is neither good nor bad. It is unavoidable." Memory works like "a massive, multidimensional spider web." "Once they start thinking along certain channels, they tend to continue thinking the same way and the path may become a rut."\n\nIn 1977, evidence of a South African nuclear test site was dismissed because "Pretoria would not want a nuclear weapon, because there is no enemy they could effectively use it on." Analysis is too often limited by similar unconscious, self-imposed constraints — "cages of the mind."',
      cta: 'THE CROWBARS →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE CROWBARS',
      lead: 'Four ways to break the frame.',
      body:
        'Sensitivity-test your linchpin assumptions by trying to DISPROVE them. Thinking backwards: assume the surprise happened and explain how. The crystal ball: a perfect source says your key assumption is wrong — can you write the scenario? Devil\'s advocate: assign someone to plan the attack instead of reviewing the defenses.\n\nHeuer opens the chapter with the line: "Minds are like parachutes. They only function when they are open."',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'The constraint you added is never in the problem statement.',
      body:
        'Heuer: "Major intelligence failures are usually caused by failures of analysis, not failures of collection." Hunt for the frame you imposed before you hunt for new data.',
      toolItem: 'Hunt for the constraint you added yourself — it is never in the problem statement',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
