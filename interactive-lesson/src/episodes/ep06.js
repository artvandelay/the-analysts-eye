export default {
  id: 'ep06',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'FLASH CABLE',
      lead: 'Three scraps arrive before the morning note.',
      stimulus: [
        'Interior minister cancels foreign travel.',
        'Armored units restrict leave near the capital.',
        'State television delays a scheduled speech.',
      ],
      body:
        'The editor asks for a one-line assessment in ten minutes. No extra reporting. No clean answer. You have to fill the gaps.',
      cta: 'MAKE THE CALL →',
    },
    {
      type: 'choice',
      phase: 'COMMIT',
      mode: 'lock',
      prompt: 'What is the most likely explanation?',
      options: [
        { id: 'coup', label: 'A coup is being contained' },
        { id: 'health', label: 'A leadership health crisis' },
        { id: 'foreign', label: 'A foreign-policy announcement is being staged' },
        { id: 'routine', label: 'Routine security theater' },
      ],
      correctId: 'routine',
      lockCta: 'LOCK THE ASSESSMENT →',
    },
    {
      type: 'reveal',
      phase: 'REVEAL',
      label: 'THE UNFAIR PART',
      correctText: 'You chose routine security theater. That may be right, but the point is not whether you guessed the hidden answer.',
      wrongText: 'You chose {choice}. That may be wrong, but the point is not the miss.',
      body:
        'With three ambiguous scraps, the mind does not wait for certainty. It imports a strategy.\n\nIf you built a story from the local sequence, you used situational logic. If you matched it to a known regime pattern, you used theory. If it reminded you of a past crisis, you used comparison. If you waited for the pile to "speak," you were still letting an implicit model decide which scraps sounded loud.',
      cta: 'SHOW THE SEARCHLIGHTS →',
    },
    {
      type: 'choice',
      phase: 'COMMIT',
      mode: 'advance',
      prompt: 'Which searchlight probably pulled you first?',
      options: [
        { id: 'situation', label: 'The local story' },
        { id: 'theory', label: 'A general regime pattern' },
        { id: 'comparison', label: 'A historical analogy' },
        { id: 'immersion', label: 'Let the data speak' },
      ],
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'Analytical strategies decide what counts as evidence.',
      body:
        'Heuer names three main ways analysts transcend incomplete information: situational logic, theory, and comparison. Each can generate useful hypotheses. Each can also trap you.\n\nSituational logic can project your own values into another actor. Theory can overpower inconvenient facts. Analogy can make two cases feel equivalent because one feature matches. Data immersion can hide the analyst inside the word "objective." The discipline is not to pick one favorite strategy. It is to notice which one is steering.',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Run more than one searchlight before you settle.',
      body:
        'For any fast judgment, force three one-sentence alternatives: one from the local facts, one from a broader pattern, and one from a historical comparison. Then ask what each strategy made visible and what it made easy to miss.',
      toolItem: 'Run three searchlights: local logic, broader theory, historical comparison',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
