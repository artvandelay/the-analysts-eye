export default {
  id: 'ep12',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE FILE',
      lead: 'A rival government does something that damages your country\'s interests.',
      body:
        'You have one second. What explanation arrives first?',
      cta: 'YOUR FIRST READ →',
    },
    {
      type: 'choice',
      phase: 'COMMIT',
      mode: 'advance',
      prompt: 'A rival government does something that damages your country\'s interests. What explanation arrives first?',
      options: [
        { id: 'nature', label: 'That is who they are' },
        { id: 'situation', label: 'Something in their situation must have forced this' },
      ],
    },
    {
      type: 'prose',
      phase: 'REVEAL',
      label: 'THE RESULT',
      lead: 'You reached for: {choice}.',
      body:
        'Heuer: "It is the behavior of others that people tend to attribute to the nature of the actor, whereas they see their own behavior as conditioned almost entirely by the situation in which they find themselves." The fundamental error is to overestimate internal factors and underestimate external ones in others\' behavior.\n\nSoviet leaders saw their Afghanistan invasion as a reaction to situational imperatives; American observers attributed it to "the aggressive and expansionist nature of the Soviet regime." In the 1969 Sino-Soviet border clashes, USSR specialists called the Chinese provocative; China specialists called the Russians high-handed.',
      cta: 'NAME THE MECHANISM →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'You know your own situational history. You only see their act.',
      body:
        'The actor knows his history across situations. The observer lacks it and compares the person to other people. Personal involvement makes it worse.\n\nHeuer: "As a general rule, biased attribution of causality helps sow the seeds of mistrust and misunderstanding between people and between governments."',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Start from their situation, not their character.',
      body:
        'With relatively complete information on the situational constraints as the other side perceives them, analysts can judge more accurately. Ask how the actor sees its own situation before you reach for who they are.',
      toolItem: "Explain the other side's move from inside their situation before reaching for their character",
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
