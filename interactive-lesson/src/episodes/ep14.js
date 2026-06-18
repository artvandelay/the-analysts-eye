export default {
  id: 'ep14',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE FILE',
      lead: 'You and a colleague assess the same question.',
      body:
        'The risk that an insider is betraying the service. You personally knew Aldrich Ames. Your colleague never has.\n\nSame institution. Same evidence base. Different lived experience.',
      cta: 'WHO RATES IT HIGHER →',
    },
    {
      type: 'choice',
      phase: 'COMMIT',
      prompt: 'Who rates the risk higher?',
      options: [
        { id: 'you', label: 'You — you knew Ames' },
        { id: 'colleague', label: 'Your colleague' },
        { id: 'same', label: 'No difference; same evidence' },
      ],
      lockCta: 'LOCK YOUR ANSWER →',
      correctId: 'you',
    },
    {
      type: 'reveal',
      phase: 'REVEAL',
      label: 'THE RESULT',
      correctText: 'You predicted the pull on yourself. Officers who knew Ames rate it higher.',
      wrongText: 'You locked in {choice}. Officers who knew Ames still rate it higher — even when the evidence base is the same.',
      body:
        'People judge probability by "the ease with which they can imagine relevant instances of the event and the number or frequency of such events that they can easily remember." One smoker whose father died of lung cancer perceives greater risk, "even though one more case of lung cancer is statistically insignificant when weighing such risk."\n\nHeuer: "Although this often works well, people are frequently led astray when the ease with which things come to mind is influenced by factors unrelated to their probability."',
      cta: 'NAME THE MECHANISM →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'Scenario construction runs on availability, not frequency.',
      body:
        '"It was difficult to imagine the breakup of the Soviet Union because such an event was so foreign to our experience of the previous 50 years." Vietnam policymakers leaned on the two ready-made scenarios — appeasement before World War II and success in Korea.\n\n"The act of constructing a detailed scenario for a possible future event makes that event more readily imaginable and, therefore, increases its perceived probability."',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Ease of recall is not probability.',
      body:
        'Recognizing you are using the availability rule "should raise a caution flag." Serious probability analysis requires identifying and assessing the variables that determine the outcome.',
      toolItem: 'When an answer comes easily, flag it — ease of recall is not probability',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
