export default {
  id: 'ep10',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE FILE',
      lead: 'You are judging which suicide notes are real and which are fake.',
      body:
        'After each note you get scored feedback. What you do not know: the scores are random. You are told you are doing far better than average.\n\nThen the experimenter debriefs you fully. The scores were preordained, unrelated to your performance.',
      cta: 'AFTER THE DEBRIEF →',
    },
    {
      type: 'choice',
      phase: 'COMMIT',
      prompt: 'After that full debriefing, what happened to your belief about how good you are at this task?',
      options: [
        { id: 'reset', label: 'Beliefs snapped back to neutral' },
        { id: 'partial', label: 'Beliefs partly corrected' },
        { id: 'persisted', label: 'The false impression survived essentially intact' },
      ],
      lockCta: 'LOCK YOUR ANSWER →',
      correctId: 'persisted',
    },
    {
      type: 'reveal',
      phase: 'REVEAL',
      label: 'THE RESULT',
      correctText: 'You predicted the persistence. Your false confidence survived the debrief.',
      wrongText: 'Your false confidence survived the debrief. Most people expect a reset.',
      body:
        'Ross, Lepper, and Hubbard (1975): erroneous impressions persisted after full debriefing — and the same perseverance showed up among observers of the experiment. One subject credited her "success" to an empathetic personality and insights from a novelist who committed suicide — and kept that story after learning the score was fake.\n\nHeuer: "Impressions tend to persist even after the evidence that created those impressions has been fully discredited." Colloquially: "once information rings a bell, the bell cannot be unrung."',
      cta: 'NAME THE MECHANISM →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'We seek causal explanations — then the explanation outlives the evidence.',
      body:
        'You learn a long-trusted clandestine source was under hostile control. It is easy to keep the impressions his reporting built — by telling yourself the information was true anyway, or by doubting the discrediting report.\n\nHeuer: "the perseverance of the impression may itself affect evaluation of the evidence that supposedly discredits the impression."',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Heuer offers a warning here, not a procedure.',
      body:
        'There is no explicit corrective in this section of the book. The practical translation for analysis: track which judgments rest on which sources — so a dead source must take its conclusions with it.',
      toolItem: 'Track which judgments rest on which sources — a dead source must take its conclusions with it',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
