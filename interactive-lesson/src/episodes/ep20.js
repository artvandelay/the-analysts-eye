export default {
  id: 'ep20',
  phases: ['PROVOKE', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE DEBRIEF',
      lead: 'The course caught you in illusions, planted memories, anchors, and hindsight.',
      body:
        'None of those biases are gone — that was Heuer\'s point from the start. Awareness alone does not switch them off.\n\nWhat remains is the procedure you collected along the way.',
      cta: 'YOUR TOOLKIT →',
    },
    {
      type: 'recap',
      phase: 'NAME',
      lead: 'Everything you kept along the way.',
      emptyText: 'Your toolkit is empty — play the earlier episodes to collect the moves.',
      body:
        'These lines are the course\'s compression of Heuer\'s prescriptions. The book closes with a master checklist — the deep version of what you have been building.',
      cta: 'THE CHECKLIST →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE SIX STEPS',
      lead: 'Heuer\'s closing checklist, compressed.',
      body:
        'Define the problem — make sure the right question is being asked. Generate hypotheses — all plausible ones, including deception; do not screen out for lack of evidence. Collect information to evaluate ALL hypotheses, not the favorite; ask what would cause you to change your mind. Evaluate — argue AGAINST each hypothesis; volume of support proves little. Select — the one with the least evidence against it; report the others too, with numbers in parentheses. Monitor — conclusions stay tentative; "Pay particular attention to any feeling of surprise when new information does not fit your prior understanding."',
      cta: 'CLOSE THE COURSE →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Heuer\'s bottom line: "Analysis can be improved!"',
      body:
        'The book is the deep version. The toolkit is the daily version.',
      toolItem: "Run Heuer's six steps: define, hypothesize, collect, evaluate, select, monitor",
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
