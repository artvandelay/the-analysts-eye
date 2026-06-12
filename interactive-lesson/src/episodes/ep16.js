export default {
  id: 'ep16',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE FILE',
      lead: 'India, 1814. The British confront the Gurkhas of Nepal.',
      body:
        'For some years the British East India Company had been expanding across the Indian subcontinent. To the north, the kingdom of Nepal — defended by the formidable Gurkhas — pressed its own claims along the frontier. In 1814 the two collided.\n\nOn paper the British had the larger army, heavier artillery, and deeper supplies. But the Gurkhas knew the ground: steep, forested hill country where roads were few, the monsoon turned tracks to mud, and small bands could hold a ridge against far greater numbers. British commanders were divided over how hard to push.\n\nFour possible outcomes were defined: (1) British victory, (2) Gurkha victory, (3) stalemate with no peace settlement, (4) stalemate with a peace settlement. You are reading the dispatches before the campaign was decided — do not assume you know how it ended.',
      cta: 'RATE OUTCOME 1 →',
    },
    {
      type: 'scale',
      phase: 'COMMIT',
      key: 'est',
      prompt: 'How likely was outcome 1, a British victory?',
      options: [
        { id: 'p10', label: 'Around 10%' },
        { id: 'p25', label: 'Around 25%' },
        { id: 'p33', label: 'Around a third' },
        { id: 'p55', label: 'Better than even' },
        { id: 'p75', label: 'Around 75%' },
      ],
      lockCta: 'LOCK YOUR ESTIMATE →',
    },
    {
      type: 'prose',
      phase: 'REVEAL',
      label: 'THE RESULT',
      lead: 'You said {answer:est}. Now watch what outcome knowledge does.',
      body:
        'Groups given no outcome judged British victory at 33.8 percent on average. Groups told it had happened judged the same evidence at 57.2 percent. Across six sub-experiments — 2,188 estimates by 547 subjects — knowing an outcome roughly doubles its perceived probability in hindsight. Subjects instructed to ignore the outcome performed little different.\n\nHeuer: "Once the bell has rung, it cannot be unrung."',
      cta: 'NAME THE MECHANISM →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'Three hindsight positions, one distortion.',
      body:
        'The analyst: in Fischhoff and Beyth\'s Nixon-trips study, 119 subjects assigned probabilities to 15 outcomes per trip — and three to six months later 84 percent remembered their own forecasts as better than they were. The consumer: "I knew it all along." The overseer: postmortems judge events more readily foreseeable than they were.\n\nWohlstetter, quoted by Heuer: "After the event, of course, a signal is always crystal clear... before the event it is obscure and pregnant with conflicting meanings."',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Run the opposite-outcome test before you call it foreseeable.',
      body:
        'Heuer\'s remedy for analysts: ask "If the opposite outcome had occurred, would I have been surprised?" Consumers ask whether they would have believed the opposite report. Overseers ask whether the opposite would have been predictable given what was available.',
      toolItem: 'Ask: if the opposite had happened, would I have been surprised?',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
