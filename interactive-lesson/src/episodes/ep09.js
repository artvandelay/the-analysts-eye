export default {
  id: 'ep09',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE FILE',
      lead: 'A car won\'t start. Here is the fault tree.',
      body:
        'Four branches account for the failure: insufficient battery charge, a defective ignition system, a defective fuel system, and all other problems.\n\nImagine 100 cars that refuse to start. You are about to spread them across these four branches.',
      cta: 'ALLOCATE THE CASES →',
    },
    {
      type: 'scale',
      phase: 'COMMIT',
      key: 'other',
      prompt: 'Of those 100 stalled cars, how many land in "all other problems"?',
      options: [
        { id: 'a', label: 'About 5' },
        { id: 'b', label: 'About 10' },
        { id: 'c', label: 'About 25' },
        { id: 'd', label: 'About 50' },
      ],
      lockCta: 'LOCK YOUR ALLOCATION →',
    },
    {
      type: 'prose',
      phase: 'REVEAL',
      label: 'THE RESULT',
      lead: 'Your call: {answer:other} of the 100 went to "all other problems."',
      body:
        'Here is what you were not told: the tree you just used had three major branches removed before it reached you — the starting system, mischievous acts and vandalism, and other engine problems. Every car that truly belonged to those causes had nowhere to go but "all other problems."\n\nSo that branch should have swelled. It almost certainly didn\'t in your head. When experienced mechanics were shown this same pruned tree, "the \'Other Problems\' category was increased only half as much as it should have been" (Fischhoff, Slovic, and Lichtenstein, 1977). With non-mechanics the effect of the missing branches was much greater.\n\nHeuer: "Experiments suggest that \'out of sight, out of mind\' is a better description of the impact of gaps in the evidence."',
      cta: 'NAME THE MECHANISM →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'Intelligence problems are worse than fault trees.',
      body:
        'Missing data is normal. Problems get picked for importance to consumers, not for availability of information. In his ACH chapter Heuer invokes the dog that did not bark in the night — the absence of evidence is itself evidence to be weighed.\n\nWhenever you are tempted to write "there is no evidence that X," ask: "If this hypothesis is true, can I realistically expect to see evidence of it?"',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Name what is missing before you treat silence as proof.',
      body:
        'Heuer\'s antidote: identify explicitly the relevant variables on which information is lacking; consider alternative hypotheses about their status; adjust judgment and especially confidence; and "consider whether the absence of information is normal or is itself an indicator of unusual activity or inactivity."',
      toolItem: 'List the evidence you would expect to see but don\'t — then ask if the silence is itself a signal',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
