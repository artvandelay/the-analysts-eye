export default {
  id: 'ep07',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE FILE',
      lead: 'You judge how far away a thing is partly by how sharp it looks.',
      body:
        'The sharper the outline, the closer the object. Most of the time this rule of thumb serves you well, and you never notice you are using it.\n\nBut it carries a built-in, systematic error: in poor visibility you overestimate distance, and in unusually good visibility you underestimate it. The shortcut that usually works fails in a predictable direction. The same is true of the shortcuts behind your judgments.',
      cta: 'THE MEMO →',
    },
    {
      type: 'choice',
      phase: 'COMMIT',
      prompt:
        'You are about to sign a memo line: "Most of this bias research uses college volunteers — useful background, not operational for expert judgment." What do you do?',
      options: [
        { id: 'send', label: 'Sign as written' },
        { id: 'hedge', label: 'Sign with a footnote limiting it to lab settings' },
        { id: 'kill', label: 'Strike it and request a sourced rewrite' },
      ],
      lockCta: 'LOCK YOUR CALL →',
      correctId: 'kill',
    },
    {
      type: 'reveal',
      phase: 'REVEAL',
      label: 'THE RESULT',
      correctText:
        'You blocked the dismissal. These errors were mapped in experts working their own trade — not just undergraduates in a lab.',
      wrongText:
        'You were about to file the whole catalog as lab trivia. Most people assume students. The record says otherwise.',
      body:
        'In most of the cited experiments the subjects were experts working their own trade — physicians, stock market analysts, horserace handicappers, chess masters, research directors, and professional psychologists, not undergraduates — and the tasks were usually realistic. Heuer personally re-ran a number of the simpler experiments with military officers at the Naval Postgraduate School. The research tradition runs back to Tversky and Kahneman, "Judgment under Uncertainty" (1974).\n\nOne caveat before you file this: experiments show group tendencies. They are not verdicts on any one individual.',
      cta: 'NAME THE MECHANISM →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'These are not dumb mistakes. They are the cost of thinking fast.',
      body:
        'Heuer: "Cognitive biases are mental errors caused by our simplified information processing strategies." A cognitive bias "does not result from any emotional or intellectual predisposition toward a certain judgment, but rather from subconscious mental procedures for processing information." It is machinery, not motive.\n\nThat is what makes them dangerous. Heuer: "Cognitive biases are similar to optical illusions in that the error remains compelling even when one is fully aware of its nature." You can know the trick and still see the illusion.',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Knowing the bias exists does not switch it off.',
      body:
        'Heuer: "Awareness of the bias, by itself, does not produce a more accurate perception." Reading about a bias is like reading about an optical illusion — the line still looks bent.\n\nWhat actually moves accuracy is procedure: structured habits that do the correcting for you. The rest of this course supplies them.',
      toolItem: 'A known bias is still a live bias — counter it with procedure, not awareness',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
