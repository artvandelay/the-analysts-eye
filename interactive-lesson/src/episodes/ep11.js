export default {
  id: 'ep11',
  phases: ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'],
  steps: [
    {
      type: 'prose',
      phase: 'PROVOKE',
      label: 'THE FILE',
      lead: 'London, 1940. The bombs are falling — and tonight you decide where to move your family.',
      body:
        'Plot the hits so far. The East End and the docks have been hammered, night after night. A wide band of northwest districts has been spared almost entirely. One wealthy borough has taken nothing at all.\n\nNeighbours trade theories: the Germans are working east to west; they are sparing districts thick with sympathizers; they are saving the rich boroughs for last. You have one night to choose.',
      cta: 'MAKE THE CALL →',
    },
    {
      type: 'choice',
      phase: 'COMMIT',
      prompt: 'Which reading do you act on?',
      options: [
        { id: 'east', label: 'Deliberate east-to-west targeting — flee west tonight' },
        { id: 'spared', label: 'The spared districts are protected for a reason — move into one' },
        { id: 'chance', label: 'I cannot rule out chance — the clusters may just be noise' },
      ],
      lockCta: 'LOCK YOUR CALL →',
      correctId: 'chance',
    },
    {
      type: 'reveal',
      phase: 'REVEAL',
      label: 'THE RESULT',
      correctText: 'Rare. Almost everyone — Londoners then, analysts now — reaches for a purpose first.',
      wrongText: 'You just did what wartime London did: you read intent into noise.',
      body:
        'Feller\'s postwar finding: the Germans intended purposes, but purposes changed and were not always achieved — the hits netted out close to random. Londoners, like you, fixed on the few clusters that fit a theory and ignored the many that did not.\n\nSix coin flips can give six heads; of 32 possible sequences, few look "random." Randomness is a property of the generating process, not the visible output. A paleobiology simulation driven by random numbers produced patterns paleobiologists had been trying to explain.',
      cta: 'NAME THE MECHANISM →',
    },
    {
      type: 'prose',
      phase: 'NAME',
      label: 'THE MECHANISM',
      lead: 'Coherence becomes the criterion of truth.',
      body:
        'Heuer: "Because of a need to impose order on their environment, people seek and often believe they find causes for what are actually random phenomena." Jervis: ". . .most people are slow to perceive accidents, unintended consequences, coincidences, and small causes leading to large effects. Instead, coordinated actions, plans and conspiracies are seen."\n\nAnalysts overestimate how coherent, rational, and goal-driven other governments are — so weak leadership, bargaining, and blunder get read as duplicity and "Machiavellian maneuvers."',
      cta: 'THE TAKEAWAY →',
    },
    {
      type: 'tool',
      phase: 'TOOL',
      lead: 'Before you name a cause, name what chance would look like.',
      body:
        'If weak leadership, bargaining, or blunder would produce the same surface pattern as a conspiracy, you cannot infer the conspiracy from the pattern alone.',
      toolItem: 'Before naming a cause, ask what chance, blunder, or bargaining would look like — often identical',
      completeCta: 'MARK COMPLETE →',
    },
  ],
};
