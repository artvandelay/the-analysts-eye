export default {
  id: 'ep01',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      body: "Read this once, naturally — the way you'd read a sign.",
      stimulus: ['PARIS', 'IN THE', 'THE SPRING'],
      cta: "I'VE READ IT →",
    },
    {
      type: 'choice',
      phase: 'COMMIT',
      mode: 'lock',
      prompt: 'No looking back. How many times does the word THE appear in that phrase?',
      options: [
        { id: '1', label: '1' },
        { id: '2', label: '2' },
        { id: '3', label: '3' },
      ],
      correctId: '2',
      lockCta: 'LOCK MY ANSWER →',
    },
    {
      type: 'reveal',
      phase: 'REVEAL',
      stimulus: ['PARIS', 'IN THE', 'THE SPRING'],
      correctText:
        'It says "Paris in the the spring." The word THE appears twice. You caught it — most people don\'t.',
      wrongText:
        'It says "Paris in the the spring." The word THE appears twice — you said {choice}. Most people miss it, exactly as you just did.',
      body:
        "Your eyes didn't scan letter by letter. Your mind already knew the phrase and delivered it — duplicate and all, invisible.",
      cta: 'WHAT JUST HAPPENED? →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'Perception is expectation, not reception.',
      body:
        "We don't record reality and then interpret it. We predict what's probably there and perceive the prediction. Most of the time that shortcut is right and fast. When it's wrong, the error is invisible from the inside — you don't see a gap, you see a coherent, confident, mistaken picture. Heuer's point: an analyst's first read of a situation is built the same way.",
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Your first reading is a hypothesis — not an observation.',
      body:
        'Hold it that way: as one candidate among others, open to being wrong. That habit is the whole game; the rest of the course sharpens it.',
      toolItem: 'Treat your first reading as a hypothesis, not an observation',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
