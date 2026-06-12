export default {
  id: 'ep18',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE CASE',
      lead: '1993: the US bombs Iraqi intelligence headquarters.',
      body:
        'The retaliation is for the plot against former President Bush. The question on every desk: will Iraq retaliate?\n\nThe satisficing trap: pick the likely answer, collect support, "See, I knew it all along." Most supporting evidence is also consistent with unrefuted rivals.',
      cta: 'THE METHOD →',
    },
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE METHOD',
      lead: 'You cannot prove a hypothesis with consistent evidence.',
      body:
        'One solid inconsistency can kill one. Hypotheses across the top, evidence down the side. Mark each cell consistent (C) or inconsistent (I). Include assumptions and logical deductions as evidence.\n\nThe labels below are paraphrased from Heuer\'s worked example. The evidence is illustrative, not actual Community judgments.',
      cta: 'OPEN THE MATRIX →',
    },
    {
      type: 'matrix',
      phase: 'COMMIT',
      prompt: 'Mark every cell: is this evidence consistent or inconsistent with each hypothesis?',
      hypotheses: [
        { id: 'h1', label: 'No retaliation' },
        { id: 'h2', label: 'Minor terror action' },
        { id: 'h3', label: 'Major attack' },
      ],
      evidence: [
        { id: 'e1', label: 'Saddam publicly vows revenge' },
        { id: 'e2', label: 'Increased Iraqi agent radio traffic' },
        { id: 'e3', label: 'Saddam must show his people a response' },
      ],
      lockCta: 'LOCK THE MATRIX →',
    },
    {
      type: 'matrixReveal',
      phase: 'REVEAL',
      lead: 'Here is how the method scores it.',
      hypotheses: [
        { id: 'h1', label: 'No retaliation' },
        { id: 'h2', label: 'Minor terror action' },
        { id: 'h3', label: 'Major attack' },
      ],
      evidence: [
        {
          id: 'e1',
          label: 'Saddam publicly vows revenge',
          expert: ['C', 'C', 'C'],
          note:
            'Consistent with every hypothesis — "He might say he will not retaliate but then do so, or state that he will retaliate and then not do it." Zero diagnostic value.',
        },
        {
          id: 'e2',
          label: 'Increased Iraqi agent radio traffic',
          expert: ['I', 'C', 'C'],
          note:
            'More likely to be observed if retaliation is being planned than if it is not — this one discriminates.',
        },
        {
          id: 'e3',
          label: 'Saddam must show his people a response',
          expert: ['II', 'C', 'C'],
          note:
            'A linchpin assumption — a very strong argument against H1; it drives the conclusion toward H2 or H3.',
        },
      ],
      body:
        'The hypotheses with the fewest minuses is probably the most likely one. "You, not the matrix, must make the decision." The matrix is an audit trail.\n\n"The most probable hypothesis is usually the one with the least evidence against it, not the one with the most evidence for it." In India 1998 the Community reported "no indication the Indians would test in the near term" — confusing unproven with disproved.',
      cta: 'NAME THE METHOD →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE PROCEDURE',
      lead: 'Eight steps, compressed.',
      body:
        'Identify hypotheses with analysts of different perspectives. List evidence and arguments, including absences. Build the matrix and ask which items are diagnostic — like a fever that says "sick" but not which illness. Refine. Try to DISPROVE each hypothesis. Sensitivity-check the few critical items. Report all hypotheses\' likelihoods, not just the winner. Set milestones for future observation.\n\n"Proceed by trying to disprove the hypotheses rather than prove them." "Identify milestones for future observation."',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Rank by evidence against, not evidence for.',
      body:
        'Heuer: "Doubt is not a pleasant state, but certainty is a ridiculous one." The matrix holds the argument. You make the call.',
      toolItem: 'Rank hypotheses by the evidence against them — disprove, don\'t confirm',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
