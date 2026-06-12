export default {
  id: 'ep14',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE FILE',
      lead: 'Two CIA officers assess the same question.',
      body:
        'The risk that an insider is betraying the service. One of them personally knew Aldrich Ames. The other has never known a traitor.\n\nSame institution. Same evidence base. Different lived experience.',
      cta: 'WHO RATES IT HIGHER →',
    },
    {
      type: 'choice',
      phase: 'COMMIT',
      prompt: 'Who rates the risk higher?',
      options: [
        { id: 'knew', label: 'The one who knew Ames' },
        { id: 'never', label: 'The one who never knew a traitor' },
        { id: 'same', label: 'No difference; both have the same evidence' },
      ],
      lockCta: 'LOCK YOUR ANSWER →',
      correctId: 'knew',
    },
    {
      type: 'reveal',
      phase: 'REVEAL',
      label: 'THE RESULT',
      correctText: 'You predicted the availability pull. The officer who knew Ames rates it higher.',
      wrongText: 'The officer who knew Ames rates it higher — even when the evidence base is the same.',
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
