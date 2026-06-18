export default {
  id: 'ep08',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE FILE',
      lead: 'You are buying a car.',
      body:
        'You have Consumer Reports repair statistics across thousands of owners. Then you overhear a stranger complaining that his Volvo turned out to be a lemon.\n\nBoth pieces sit on the table — aggregate data and a vivid, personal story.',
      cta: 'FACE THE CHOICE →',
    },
    {
      type: 'choice',
      phase: 'COMMIT',
      prompt: 'You have read the Consumer Reports numbers. You also heard the lemon story. Which one is pulling your decision right now?',
      options: [
        { id: 'stats', label: 'The statistics across thousands of owners' },
        { id: 'story', label: "The stranger's lemon story" },
        { id: 'equal', label: 'Both about equally' },
      ],
      lockCta: 'LOCK IT IN →',
      correctId: 'story',
    },
    {
      type: 'reveal',
      phase: 'REVEAL',
      label: 'THE RESULT',
      correctText: 'You felt the pull. The evidence says the vivid story wins — even when you know better.',
      wrongText: 'You picked {choice}. The vivid story still wins — that is the trap.',
      body:
        'Logically, the anecdote merely "increase[s] by one the sample on which the Consumer Reports statistics were based." Nisbett and Ross call it the "man-who" syndrome: "But I know a man who smoked three packs of cigarettes a day and lived to be ninety-nine."\n\nAmong physicians, smoking tracked vividness of exposure: radiologists who examine lung x-rays daily had the lowest smoking rate. "The probability that a physician continued to smoke was directly related to the distance of the physician\'s specialty from the lungs."',
      cta: 'NAME THE MECHANISM →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'Vividness is a criterion, not a measure of sample size.',
      body:
        'Heuer: "information that is vivid, concrete, and personal has a greater impact on our thinking than pallid, abstract information that may actually have substantially greater value as evidence." He also writes: "Seeing should not always be believing."\n\nAnalysts work almost entirely with secondhand, written information. The rare country visit is memorable — but it samples a narrow slice of the society.',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'An anecdote is one data point, not a population.',
      body:
        'Heuer: "Analysts should give little weight to anecdotes and personal case histories unless they are known to be typical, and perhaps no weight at all if aggregate data based on a more valid sample can be obtained."',
      toolItem: 'Weigh evidence by its sample, not its vividness — an anecdote is one data point',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
