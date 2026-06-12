export default {
  id: 'ep17',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'WORKING MEMORY TEST',
      lead: 'Do this in your head. No paper.',
      body:
        'Multiply 46 x 78 mentally. Do not open a calculator. Do not write intermediate numbers. Just hold the parts in mind and make the call.',
      cta: 'I HAVE AN ANSWER →',
    },
    {
      type: 'choice',
      phase: 'COMMIT',
      mode: 'lock',
      prompt: 'Lock your answer.',
      options: [
        { id: '3488', label: '3,488' },
        { id: '3588', label: '3,588' },
        { id: '3688', label: '3,688' },
        { id: '3788', label: '3,788' },
      ],
      correctId: '3588',
      lockCta: 'LOCK THE PRODUCT →',
    },
    {
      type: 'reveal',
      phase: 'REVEAL',
      label: 'ON PAPER',
      stimulus: ['46 x 78', '46 x 80 = 3,680', '46 x 2 = 92', '3,680 - 92 = 3,588'],
      correctText: 'Correct: 3,588. Notice how much easier it is once the pieces stop evaporating.',
      wrongText: 'It is 3,588. Your answer was {choice}. The arithmetic was not hard; holding the moving parts was.',
      body:
        'Heuer uses this exact kind of problem to show the limit. Most people can keep only a handful of items active in working memory. Intelligence problems exceed that limit almost immediately: variables, actors, motives, evidence, assumptions, and relations among all of them.',
      cta: 'NAME THE MECHANISM →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'Complexity grows faster than attention.',
      body:
        'Four variables have six possible pairwise relationships. Five have ten. Six have fifteen. Eight have twenty-eight. You cannot keep that web live in your head and still judge it cleanly.\n\nDecomposition breaks the problem into parts. Externalization puts those parts somewhere stable: a list, table, tree, diagram, matrix, or even a rough scratchpad. The point is not presentation. It is cognition. The paper holds what working memory drops.',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Draw the problem before you decide inside it.',
      body:
        'For a serious judgment, first list the components and the relationships you think matter. Then inspect one part at a time while the whole remains visible. This creates the audit trail needed for the competing-hypotheses matrix in the next method episode.',
      toolItem: 'Decompose and externalize: get the problem out of working memory',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
