export default {
  id: 'ep02',
  stepper: false,
  steps: [
    {
      type: 'choice',
      phase: 'COMMIT',
      mode: 'advance',
      prompt:
        'Before the last episode, would you have bet money that you could read three short words without missing one?',
      options: [
        { id: 'yes', label: 'Yes, obviously' },
        { id: 'hes', label: "I'd have hesitated" },
      ],
    },
    {
      type: 'prose',
      phase: 'NAME',
      body:
        "That confidence is the thing to notice. You weren't careless. You were running a mind-set — a stored model of how the world usually reads — and it ran so smoothly you never felt it engage.\n\nHeuer's central claim: analysts fail less from missing information than from the invisible models they bring to it. A mind-set is unavoidable and mostly useful — you can't reason without one. The danger is that it's invisible from the inside, and it quietly decides what you even notice.",
      cta: 'SO WHAT DO I DO ABOUT IT? →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: "You can't switch off your mind-set. You can make it visible — and testable.",
      body:
        "That's the move the whole toolkit is built around: drag the assumptions out of your head where you can challenge them. Everything ahead is a way to practice that.",
      toolItem: 'Make your mind-set visible and testable — drag assumptions into the open',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
