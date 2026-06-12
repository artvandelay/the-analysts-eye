export default {
  id: 'ep15',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE FILE',
      lead: 'A report crosses your desk.',
      body:
        'An attack on the embassy is "a serious possibility." You have to decide how much to do about it.\n\nWhat probability did the writer mean?',
      cta: 'LOCK YOUR READING →',
    },
    {
      type: 'scale',
      phase: 'COMMIT',
      key: 'read',
      prompt: 'What probability did the writer mean by "a serious possibility"?',
      options: [
        { id: 'p10', label: 'Under 20%' },
        { id: 'p30', label: '20–40%' },
        { id: 'p50', label: '40–60%' },
        { id: 'p70', label: '60–80%' },
        { id: 'p90', label: 'Over 80%' },
      ],
      lockCta: 'LOCK YOUR READING →',
    },
    {
      type: 'prose',
      phase: 'REVEAL',
      label: 'THE RESULT',
      lead: 'You read it as {answer:read}. Other readers walked away with numbers across the whole dial.',
      body:
        'In the cease-fire experiment, the author meant about a 30-percent chance the cease-fire would be broken; his co-author thought about 80 percent — and while drafting "both analysts had believed they were in agreement about what could happen."\n\nSherman Kent, first director of CIA\'s Office of National Estimates, "was first jolted by how policymakers interpreted the term \'serious possibility\' in a national estimate." In a NATO experiment, 23 officers given identical sentences differing only in the probability word showed broad consensus only on "better than even" — wide disparity on everything else.',
      cta: 'NAME THE MECHANISM →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'The words are empty shells.',
      body:
        'Heuer: "By themselves, these expressions have no clear meaning. They are empty shells. The reader or listener fills them with meaning through the context in which they are used and what is already in the reader\'s or listener\'s mind about that context."\n\n"When intelligence conclusions are couched in ambiguous terms, a reader\'s interpretation of the conclusions will be biased in favor of consistency with what the reader already believes." A Cairo report of "little chance" of attack supports both the ambassador who does nothing and the one who does quite a bit. "To say that something could happen or is possible may refer to anything from a 1-percent to a 99-percent probability."',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Put a number after every "probably."',
      body:
        'Heuer: communicate uncertainty with numerical probability or odds — put it in parentheses after the phrase, "an odds ratio (less than a one-in-four chance) or a percentage range (5 to 20 percent)." Odds are often preferable.',
      toolItem: 'Put a number after every "probably" — an odds ratio or a percentage range',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
