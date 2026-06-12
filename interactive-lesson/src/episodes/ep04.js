export default {
  id: 'ep04',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'wordstudy',
      phase: 'PROVOKE',
      intro:
        "You'll see a list of words for nine seconds. Read them, don't write anything down. Then a memory test.",
      showCta: 'SHOW THE LIST →',
      seconds: 9,
      words: ['bed', 'rest', 'awake', 'tired', 'dream', 'wake', 'snooze', 'blanket', 'doze', 'slumber', 'nap', 'pillow'],
    },
    {
      type: 'wordtest',
      phase: 'COMMIT',
      submitCta: 'SUBMIT TEST →',
      probes: [
        { word: 'tired', onList: true },
        { word: 'coffee', onList: false },
        { word: 'dream', onList: true },
        { word: 'sleep', onList: false, lure: true },
        { word: 'river', onList: false },
        { word: 'pillow', onList: true },
        { word: 'bed', onList: true },
      ],
    },
    {
      type: 'wordreveal',
      phase: 'REVEAL',
      cta: 'WHAT JUST HAPPENED? →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'Memory stores the gist, not the record.',
      body:
        "You don't keep a transcript. You keep a compressed theme and reconstruct the details on demand — which means your mind will confidently hand you things that fit the theme but never occurred. For an analyst this is dangerous twice over: what you \"recall\" from a source may be inference dressed as fact, and a coherent story feels like strong evidence precisely because the gaps got filled in for you.",
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: "Externalise the evidence. Don't trust the copy in your head.",
      body:
        'Write down what was actually said, separate from what you concluded. The moment a judgment leaves your memory and lands on the page, you can see which parts are observation and which are your own reconstruction — the foundation for the structuring tools ahead.',
      toolItem: 'Externalise the evidence — record what was said apart from what you concluded',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
