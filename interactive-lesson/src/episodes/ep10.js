export default {
  id: 'ep10',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE FILE',
      lead: 'Subjects judge which suicide notes are real and which are fictitious.',
      body:
        'They get scored feedback as they go. What they do not know: the feedback is random. One group is told they are doing far better than average. The other is told they are doing far worse.\n\nThen the experimenters debrief everyone fully. The scores were preordained, unrelated to performance.',
      cta: 'AFTER THE DEBRIEF →',
    },
    {
      type: 'choice',
      phase: 'COMMIT',
      prompt: 'After that full debriefing, what happened to subjects\' beliefs about how good they actually are at this task?',
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
      correctText: 'You predicted the persistence. The impression survived the debrief.',
      wrongText: 'The impression survived the debrief. Most people expect a reset.',
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
