export default {
  id: 'ep13',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE FILE',
      lead: 'A quick estimation task.',
      body:
        'What percentage of United Nations member countries are located in Africa?\n\nCommit an estimate before you read on.',
      cta: 'MAKE YOUR ESTIMATE →',
    },
    {
      type: 'scale',
      phase: 'COMMIT',
      key: 'est',
      prompt: 'What percentage of United Nations member countries are in Africa?',
      options: [
        { id: 'a', label: 'Around 10–15%' },
        { id: 'b', label: 'Around 25%' },
        { id: 'c', label: 'Around 35%' },
        { id: 'd', label: '45% or more' },
      ],
      lockCta: 'LOCK YOUR ESTIMATE →',
    },
    {
      type: 'prose',
      phase: 'REVEAL',
      label: 'THE RESULT',
      lead: 'You landed on {answer:est}.',
      body:
        'In Tversky and Kahneman\'s classroom exercise, half the students were told to start from 10 percent and averaged 25 percent. Half started from 65 percent and averaged 45 percent. The arbitrary starting number dragged both groups.\n\nHeuer: "the starting point serves as an anchor or drag that reduces the amount of adjustment, so the final estimate remains closer to the starting point than it ought to be."',
      cta: 'NAME THE MECHANISM →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'Analysts anchor on prior judgments — and rarely adjust enough.',
      body:
        'You inherit a predecessor\'s estimate. You revise your own numbers but not enough. Experiments using a 98-percent confidence range found the true value fell outside the range 40 to 50 percent of the time.\n\n"There is some evidence that awareness of the anchoring problem is not an adequate antidote."',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Do not adjust the last number. Rethink from scratch.',
      body:
        'Heuer\'s remedy: "weigh anchor" — consciously avoid any prior judgment as a starting point. He admits there is no experimental proof this works, "but it seems worth trying."',
      toolItem: 'Weigh anchor: rethink from scratch instead of adjusting the last estimate',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
