const CAT_SVG = `<svg viewBox="0 0 240 220" width="100%" aria-hidden="true" style="max-width:280px"><g fill="hsl(28 18% 16%)"><polygon points="55,70 40,18 95,55"></polygon><polygon points="185,70 200,18 145,55"></polygon><ellipse cx="120" cy="120" rx="78" ry="70"></ellipse></g><g fill="hsl(41 36% 92%)"><ellipse cx="92" cy="108" rx="15" ry="20"></ellipse><ellipse cx="148" cy="108" rx="15" ry="20"></ellipse></g><g fill="hsl(28 18% 12%)"><ellipse cx="94" cy="110" rx="6" ry="11"></ellipse><ellipse cx="146" cy="110" rx="6" ry="11"></ellipse><polygon points="120,128 112,138 128,138"></polygon></g><g stroke="hsl(41 36% 92%)" stroke-width="2.5" stroke-linecap="round"><line x1="118" y1="144" x2="62" y2="136"></line><line x1="118" y1="150" x2="60" y2="152"></line><line x1="122" y1="144" x2="178" y2="136"></line><line x1="122" y1="150" x2="180" y2="152"></line></g></svg>`;

export default {
  id: 'ep03',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      body:
        "An image is buried under heavy blur. The moment you feel you know what it is — that's the moment to catch.",
      cta: 'I HAVE A HUNCH →',
    },
    {
      type: 'blur',
      phase: 'COMMIT',
      svg: CAT_SVG,
      prompt: 'Commit. What is it?',
      options: [
        { id: 'owl', label: 'Owl' },
        { id: 'fox', label: 'Fox' },
        { id: 'cat', label: 'Cat' },
        { id: 'rabbit', label: 'Rabbit' },
      ],
      correctId: 'cat',
      lockCta: 'LOCK IT IN →',
    },
    {
      type: 'blurReveal',
      phase: 'REVEAL',
      svg: CAT_SVG,
      sharpenText:
        "It's sharpening. Most people, having committed, keep their first call all the way down — even when it's slipping.",
      sharpenCta: 'SHARPEN, KEEP {CHOICE} →',
      sharpenSteps: 4,
      revealPrefix: 'IT WAS',
      revealAnswer: 'CAT',
      revealBody:
        "You locked on {choice} and rode it down the blur.\n\nHeuer cites the experiment directly: people first shown a heavily blurred image take longer to recognise it when it clears than people shown a milder blur. The early guess doesn't fade — it becomes the filter new evidence has to fight through.",
      cta: 'WHAT JUST HAPPENED? →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: "First impressions don't fade. They filter.",
      body:
        'Once you commit to an interpretation, you stop testing it and start defending it. New information gets read in its light — confirming bits feel significant, contradicting bits feel like noise. The more ambiguous the situation when you first formed the view, the harder it locks. Getting in early with a strong opinion is a liability, not a head start.',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Form impressions late, and hold them loosely.',
      body:
        'Delay commitment while a picture is still forming, and when you must commit, keep a live note of what would make you drop it. That "what would change my mind" list is the seed of the competing-hypotheses method in §09.',
      toolItem: 'Form impressions late, and hold them loosely',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
