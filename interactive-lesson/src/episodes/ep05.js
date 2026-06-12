export default {
  id: 'ep05',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE FILE',
      lead: 'You are rating a horse race from five variables.',
      body:
        'You get only the five factors the handicapper said mattered most: recent finish, jockey record, carried weight, days since last race, and track condition.\n\nYour task is not to pick the horse. The pick has already been made. Your task is to say how confident you would be in that pick.',
      cta: 'SHOW THE FIRST FILE →',
    },
    {
      type: 'scale',
      phase: 'COMMIT',
      key: 'first',
      prompt: 'With five high-value variables, how confident would you be in the forecast?',
      options: [
        { id: 'low', label: 'Low confidence', detail: 'The file is too thin.' },
        { id: 'medium', label: 'Moderate confidence', detail: 'Enough to make a call.' },
        { id: 'high', label: 'High confidence', detail: 'The key factors are covered.' },
      ],
      lockCta: 'LOCK FIRST CONFIDENCE →',
    },
    {
      type: 'prose',
      phase: 'REVEAL',
      label: 'INTAKE ADDENDUM',
      lead: 'Now collection sends more.',
      body:
        'You receive 35 additional variables: post position, sire history, trainer habits, seasonal performance, track bias, gate behavior, prior class, workout pattern, and pages of comparable detail.\n\nNothing here changes the five factors you already treated as central. It just makes the file feel thick.',
      cta: 'RATE THE THICK FILE →',
    },
    {
      type: 'scale',
      phase: 'COMMIT',
      key: 'second',
      prompt: 'Same forecast, much more information. Now how confident are you?',
      options: [
        { id: 'low', label: 'Low confidence', detail: 'More paper is not more proof.' },
        { id: 'medium', label: 'Moderate confidence', detail: 'Slightly reassured.' },
        { id: 'high', label: 'High confidence', detail: 'The pattern feels solid now.' },
      ],
      lockCta: 'LOCK SECOND CONFIDENCE →',
    },
    {
      type: 'prose',
      phase: 'REVEAL',
      label: 'THE RESULT',
      lead: 'You moved from {answer:first} to {answer:second}.',
      body:
        "In Heuer's horse-race experiment, more variables did not improve average accuracy. Some experts got worse. But confidence rose steadily for all of them.\n\nThat is the trap: added detail often supports the feeling of analysis without changing the machinery of the judgment. The file gets heavier. The answer does not get better.",
      cta: 'NAME THE MECHANISM →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'Information has types. Only some types move accuracy.',
      body:
        'Extra detail about variables already inside your model mostly raises confidence. Accuracy moves when new information changes the value of a critical variable, reveals a missing variable, or changes your model of how the variables relate.\n\nHeuer is not arguing against collection. He is arguing against worshipping volume. The question is not "Do we have more?" It is "What would this new report force us to revise?"',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Before asking for more reporting, name what kind would change the judgment.',
      body:
        'Write the collection request as a test: "If X is true, I reduce confidence; if Y is true, I change hypotheses." If the new information can only decorate your current view, treat it as confidence fuel, not accuracy fuel.',
      toolItem: 'Ask what new information would change the model, not just thicken the file',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
