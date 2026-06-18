# The Analyst's Eye

An interactive field course in thinking, after Richards J. Heuer Jr.'s *Psychology of Intelligence Analysis* (CIA, 1999).

A book can teach you *about* your blind spots. It cannot make you feel one close. **The Analyst's Eye** catches you in a cognitive bias first — then names the mechanism and hands you one reusable move that survives the lesson.

> You cannot be talked out of a cognitive bias. Heuer knew it. So every episode makes you commit a judgment first, shows you where it broke, names the mechanism, and leaves you with one reusable move.

## Why it works this way

Heuer's central, inconvenient finding is that **awareness of a bias does not switch it off** — "the error remains compelling even when one is fully aware of its nature." Reading about anchoring does not stop you anchoring.

So this course never just *tells*. Every episode runs the same five-beat loop:

```
PROVOKE  →  COMMIT  →  REVEAL  →  NAME  →  TOOL
```

You read a case, **commit a judgment** (lock an answer, allocate cases, mark a matrix), then watch the reveal catch you — often using the exact experiment Heuer cites, run *on you*. Then the mechanism gets named, and a one-line tool drops into your **toolkit**, which accumulates across the whole course.

## The course

20 episodes across Heuer's four movements. Each links back to its source chapter in the bundled PDF — the episode is the hook, the book is the depth.

| Part | Episodes |
| --- | --- |
| **I — Our Mental Machinery** | Perception, thinking about thinking, first-glance lock-in, memory |
| **II — Tools for Thinking** | Need for information, strategies, structuring, Analysis of Competing Hypotheses, keeping an open mind |
| **III — Cognitive Biases** | Biases as machinery, vivid-beats-true, the dog that didn't bark, persistence of discredited beliefs, inventing causes, situation-vs-person, anchoring, availability, "probably", hindsight |
| **IV — Conclusions** | Your toolkit + Heuer's closing checklist |

Highlights:
- **§09 Argue against everything** — a live 3×3 Analysis of Competing Hypotheses matrix you fill and score against Heuer's worked Iraq example.
- **§07 Break your own frame** — the nine-dots puzzle, rendered and solved on-screen.
- **§12 The dog that didn't bark** — you allocate 100 stalled cars across a fault tree, then learn three branches were hidden from you.
- **§14 You invent the cause** — you pick where to move your family during the London Blitz, then meet Feller's finding that the bombing was statistically random.

## Run it locally

The lesson is plain HTML, CSS, and ES modules — no build step, no dependencies. Because it uses native ES module imports, it must be served over HTTP (not opened as a `file://` path).

```bash
# from the repository root
python3 -m http.server 8000
```

Then open: **http://localhost:8000/interactive-lesson/**

Any static server works (`npx serve`, etc.). Progress and your toolkit are saved in `localStorage`; use **RESET COURSE** on the hub to start fresh.

## Project structure

```
.
├── Psychology_of_Intelligence_Analysis.pdf   # the public-domain source book
└── interactive-lesson/
    ├── index.html                            # entry point
    ├── the-analysts-eye.html                 # original single-file prototype
    └── src/
        ├── router.js        # hub + episode loading
        ├── engine.js        # data-driven step renderer
        ├── chapters.js      # episode manifest (titles, chapters, PDF pages)
        ├── contract.js      # shared constants + step type docs
        ├── state.js         # progress + toolkit (localStorage)
        ├── styles.css       # the declassified-case-file look
        └── episodes/        # ep01–ep20, one data file per episode
```

Episodes are pure data: each `epNN.js` exports an array of steps (`prose`, `choice`, `scale`, `reveal`, `matrix`, `matrixReveal`, `recap`, `tool`, …) that the engine renders. Adding or editing an episode means editing one data file — no engine changes.

## Faithfulness to the source

The course content was checked line-by-line against the source book: experiments, figures, names, dates, and direct quotations are kept faithful to Heuer's text, with each episode citing its chapter. Where a scenario dramatizes an experiment, it uses the study Heuer actually cites. Illustrative material (for example, the ACH matrix evidence) is flagged as illustrative in-episode, matching the book's own caveat.

## Credits & license

- Source: Richards J. Heuer Jr., *Psychology of Intelligence Analysis*, Center for the Study of Intelligence, CIA, 1999 — a U.S. Government work in the public domain.
- Interaction design inspired by explorable explanations in the spirit of Nicky Case.
- Code and original course writing: MIT licensed (see [LICENSE](LICENSE)).

This is an independent educational adaptation and is not endorsed by or affiliated with the Central Intelligence Agency.
