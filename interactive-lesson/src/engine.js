import { CLASS } from './contract.js';
import { markDone, addTool, logEvent, getTools } from './state.js';
import { pdfHref } from './pdf.js';

const PHASE_ORDER = ['PROVOKE', 'COMMIT', 'REVEAL', 'NAME', 'TOOL'];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function fill(text, runtime) {
  return (text || '')
    .replace(/\{choice\}/g, runtime.choiceLabel || '—')
    .replace(/\{CHOICE\}/g, (runtime.choiceLabel || '—').toUpperCase())
    .replace(/\{answer:([a-zA-Z0-9_-]+)\}/g, (_, key) => runtime.answers?.[key]?.label || '—')
    .replace(/\{ANSWER:([a-zA-Z0-9_-]+)\}/g, (_, key) => (runtime.answers?.[key]?.label || '—').toUpperCase());
}

function appendParagraphs(parent, text, runtime) {
  String(text || '')
    .split(/\n\n+/)
    .forEach((para) => {
      if (para.trim()) parent.appendChild(el('p', CLASS.body, fill(para, runtime)));
    });
}

function appendStimulus(parent, lines) {
  if (!lines || !lines.length) return;
  const box = el('div', 'ae-stimulus');
  lines.forEach((l) => box.appendChild(el('span', null, l)));
  parent.appendChild(box);
}

function appendSvg(parent, svg, blurPx) {
  const stage = el('div', 'ae-svgstage');
  stage.innerHTML = svg;
  const node = stage.querySelector('svg');
  if (node) {
    node.style.filter = `blur(${blurPx}px)`;
    node.style.transition = 'filter 500ms';
  }
  parent.appendChild(stage);
}

function ctaButton(label, onClick) {
  const btn = el('button', CLASS.btn, label);
  btn.type = 'button';
  btn.addEventListener('click', onClick);
  return btn;
}

function phasesFor(episode) {
  if (Array.isArray(episode.phases)) return episode.phases;
  const set = new Set(episode.steps.map((s) => s.phase).filter(Boolean));
  return PHASE_ORDER.filter((p) => set.has(p));
}

function renderStepper(parent, episode, activePhase) {
  if (episode.stepper === false) return;
  const phases = phasesFor(episode);
  if (phases.length < 2) return;
  const stepper = el('div', CLASS.stepper);
  phases.forEach((phase, i) => {
    stepper.appendChild(
      el('span', phase === activePhase ? `${CLASS.phase} ${CLASS.phaseActive}` : CLASS.phase, phase),
    );
    if (i < phases.length - 1) stepper.appendChild(el('span', 'ae-stepper__arrow', '→'));
  });
  parent.appendChild(stepper);
}

function resetForStep(runtime, step) {
  if (step.type === 'choice' || step.type === 'blur') {
    runtime.choiceId = null;
    runtime.choiceLabel = null;
    runtime.wasCorrect = false;
    runtime.blurClicks = 0;
    runtime.blurRevealed = false;
  }
  if (step.type === 'scale') {
    runtime.scaleDrafts[step.key] = null;
  }
  if (step.type === 'wordstudy') {
    runtime.studyStarted = false;
    runtime.timerLeft = 0;
    if (runtime.timerId) {
      clearInterval(runtime.timerId);
      runtime.timerId = null;
    }
    runtime.probeAnswers = {};
    runtime.probes = null;
    runtime.lureSaidYes = false;
  }
  if (step.type === 'matrix') {
    runtime.matrixMarks = {};
  }
}

/* ---------- step renderers ---------- */

function renderProse(screen, step, runtime, advance) {
  if (step.label) screen.appendChild(el('p', 'ae-steplabel', step.label));
  appendStimulus(screen, step.stimulus);
  if (step.svg) appendSvg(screen, step.svg, 0);
  if (step.lead) screen.appendChild(el('p', 'ae-lead', fill(step.lead, runtime)));
  appendParagraphs(screen, step.body, runtime);
  screen.appendChild(ctaButton(step.cta, advance));
}

function renderChoice(screen, step, runtime, advance, rerender) {
  if (step.prompt) screen.appendChild(el('p', 'ae-prompt', step.prompt));
  const opts = el('div', 'ae-options');

  if (step.mode === 'advance') {
    step.options.forEach((opt, i) => {
      const btn = el('button', i === 0 ? `${CLASS.option} ae-option--primary` : CLASS.option, opt.label);
      btn.type = 'button';
      btn.addEventListener('click', () => {
        runtime.choiceId = opt.id;
        runtime.choiceLabel = opt.label;
        logEvent({ type: 'commit', episode: step.episodeId, choice: opt.id });
        advance();
      });
      opts.appendChild(btn);
    });
    screen.appendChild(opts);
    return;
  }

  step.options.forEach((opt) => {
    const btn = el('button', runtime.choiceId === opt.id ? `${CLASS.option} ${CLASS.optionSel}` : CLASS.option, opt.label);
    btn.type = 'button';
    btn.addEventListener('click', () => {
      runtime.choiceId = opt.id;
      runtime.choiceLabel = opt.label;
      rerender();
    });
    opts.appendChild(btn);
  });
  screen.appendChild(opts);

  const lock = el('button', CLASS.btn, step.lockCta);
  lock.type = 'button';
  lock.disabled = !runtime.choiceId;
  lock.addEventListener('click', () => {
    if (!runtime.choiceId) return;
    runtime.wasCorrect = runtime.choiceId === step.correctId;
    logEvent({ type: 'commit', episode: step.episodeId, choice: runtime.choiceId });
    advance();
  });
  screen.appendChild(lock);
}

function renderScale(screen, step, runtime, advance, rerender) {
  if (step.prompt) screen.appendChild(el('p', 'ae-prompt', fill(step.prompt, runtime)));
  if (step.body) appendParagraphs(screen, step.body, runtime);

  const opts = el('div', 'ae-options');
  step.options.forEach((opt) => {
    const draft = runtime.scaleDrafts[step.key];
    const btn = el('button', draft === opt.id ? `${CLASS.option} ${CLASS.optionSel}` : CLASS.option);
    btn.type = 'button';
    btn.appendChild(el('span', 'ae-scale__label', opt.label));
    if (opt.detail) btn.appendChild(el('span', 'ae-scale__detail', opt.detail));
    btn.addEventListener('click', () => {
      runtime.scaleDrafts[step.key] = opt.id;
      rerender();
    });
    opts.appendChild(btn);
  });
  screen.appendChild(opts);

  const lock = el('button', CLASS.btn, step.lockCta);
  lock.type = 'button';
  lock.disabled = !runtime.scaleDrafts[step.key];
  lock.addEventListener('click', () => {
    const picked = step.options.find((opt) => opt.id === runtime.scaleDrafts[step.key]);
    if (!picked) return;
    runtime.answers[step.key] = picked;
    runtime.choiceId = picked.id;
    runtime.choiceLabel = picked.label;
    logEvent({ type: 'commit', episode: step.episodeId, choice: `${step.key}:${picked.id}` });
    advance();
  });
  screen.appendChild(lock);
}

function renderReveal(screen, step, runtime, advance) {
  if (step.label) screen.appendChild(el('p', 'ae-steplabel', step.label));
  appendStimulus(screen, step.stimulus);
  const lead = runtime.wasCorrect ? step.correctText : step.wrongText || step.correctText;
  if (lead) screen.appendChild(el('p', 'ae-lead', fill(lead, runtime)));
  appendParagraphs(screen, step.body, runtime);
  screen.appendChild(ctaButton(step.cta, advance));
}

function renderBlur(screen, step, runtime, advance, rerender) {
  if (step.prompt) screen.appendChild(el('p', 'ae-prompt', step.prompt));
  appendSvg(screen, step.svg, 16);
  const opts = el('div', 'ae-options ae-options--grid');
  step.options.forEach((opt) => {
    const btn = el('button', runtime.choiceId === opt.id ? `${CLASS.option} ${CLASS.optionSel}` : CLASS.option, opt.label);
    btn.type = 'button';
    btn.addEventListener('click', () => {
      runtime.choiceId = opt.id;
      runtime.choiceLabel = opt.label;
      rerender();
    });
    opts.appendChild(btn);
  });
  screen.appendChild(opts);
  const lock = el('button', CLASS.btn, step.lockCta);
  lock.type = 'button';
  lock.disabled = !runtime.choiceId;
  lock.addEventListener('click', () => {
    if (!runtime.choiceId) return;
    runtime.wasCorrect = runtime.choiceId === step.correctId;
    logEvent({ type: 'commit', episode: step.episodeId, choice: runtime.choiceId });
    advance();
  });
  screen.appendChild(lock);
}

function renderBlurReveal(screen, step, runtime, advance, rerender) {
  const px = runtime.blurRevealed ? 0 : Math.max(0, 16 - (runtime.blurClicks / step.sharpenSteps) * 16);
  appendSvg(screen, step.svg, px);

  if (!runtime.blurRevealed) {
    screen.appendChild(el('p', 'ae-steplabel', 'YOUR LOCKED CALL'));
    screen.appendChild(el('p', 'ae-lead ae-lead--answer', (runtime.choiceLabel || '').toUpperCase()));
    appendParagraphs(screen, step.sharpenText, runtime);
    screen.appendChild(
      ctaButton(fill(step.sharpenCta, runtime), () => {
        runtime.blurClicks += 1;
        if (runtime.blurClicks >= step.sharpenSteps) runtime.blurRevealed = true;
        rerender();
      }),
    );
    screen.appendChild(el('p', 'ae-progress', `Sharpen ${runtime.blurClicks} / ${step.sharpenSteps}`));
  } else {
    screen.appendChild(el('p', 'ae-steplabel', step.revealPrefix));
    screen.appendChild(el('p', 'ae-lead ae-lead--answer', step.revealAnswer));
    appendParagraphs(screen, step.revealBody, runtime);
    screen.appendChild(ctaButton(step.cta, advance));
  }
}

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const ss = s % 60;
  return `${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
}

function renderWordStudy(screen, step, runtime, advance, rerender) {
  if (!runtime.studyStarted) {
    appendParagraphs(screen, step.intro, runtime);
    screen.appendChild(
      ctaButton(step.showCta, () => {
        runtime.studyStarted = true;
        runtime.timerLeft = step.seconds;
        runtime.timerId = setInterval(() => {
          runtime.timerLeft -= 1;
          if (runtime.timerLeft <= 0) {
            clearInterval(runtime.timerId);
            runtime.timerId = null;
            advance();
            return;
          }
          rerender();
        }, 1000);
        rerender();
      }),
    );
    return;
  }
  screen.appendChild(el('p', 'ae-steplabel', 'STUDY'));
  screen.appendChild(el('p', CLASS.timer, fmtTime(runtime.timerLeft)));
  const list = el('div', CLASS.wordlist);
  step.words.forEach((w) => list.appendChild(el('span', null, w)));
  screen.appendChild(list);
  screen.appendChild(
    ctaButton("I'M DONE — HIDE IT", () => {
      if (runtime.timerId) {
        clearInterval(runtime.timerId);
        runtime.timerId = null;
      }
      advance();
    }),
  );
}

function renderWordTest(screen, step, runtime, advance, rerender) {
  screen.appendChild(el('p', 'ae-prompt', 'For each word: was it on the list you just saw?'));
  step.probes.forEach((probe) => {
    const row = el('div', 'ae-probe');
    row.appendChild(el('span', 'ae-probe__word', probe.word));
    const btns = el('div', 'ae-probe__btns');
    [['yes', 'Yes'], ['no', 'No']].forEach(([val, lbl]) => {
      const on = runtime.probeAnswers[probe.word] === val;
      const b = el('button', on ? `${CLASS.btn} ae-probe__on` : `${CLASS.btn} ${CLASS.btnGhost}`, lbl);
      b.type = 'button';
      b.addEventListener('click', () => {
        runtime.probeAnswers[probe.word] = val;
        rerender();
      });
      btns.appendChild(b);
    });
    row.appendChild(btns);
    screen.appendChild(row);
  });
  const all = step.probes.every((p) => runtime.probeAnswers[p.word]);
  const submit = el('button', CLASS.btn, step.submitCta);
  submit.type = 'button';
  submit.disabled = !all;
  submit.addEventListener('click', () => {
    runtime.probes = step.probes;
    const lure = step.probes.find((p) => p.lure);
    runtime.lureSaidYes = lure ? runtime.probeAnswers[lure.word] === 'yes' : false;
    logEvent({ type: 'commit', episode: step.episodeId, choice: 'memory-test' });
    advance();
  });
  screen.appendChild(submit);
}

function renderWordReveal(screen, step, runtime, advance) {
  const probes = runtime.probes || step.probes || [];
  screen.appendChild(el('p', 'ae-steplabel', 'THE PLANTED WORD'));
  const lure = probes.find((p) => p.lure);
  const lureWord = lure ? lure.word.toUpperCase() : 'A WORD';
  const body = runtime.lureSaidYes
    ? `You said ${lureWord} was on the list. It never appeared. But every word pointed at it — and your memory filed the theme, then reported it back as a fact.`
    : `${lureWord} was never on the list — yet every other word pointed straight at it. Memory files the theme, and will hand the missing word back as fact the moment you're less careful.`;
  screen.appendChild(el('p', 'ae-lead', body));

  const score = el('div', 'ae-score');
  probes.forEach((p) => {
    const ans = runtime.probeAnswers[p.word];
    const correct = (p.onList && ans === 'yes') || (!p.onList && ans === 'no');
    const rowEl = el('div', 'ae-score__row');
    rowEl.appendChild(el('span', 'ae-score__word', p.word.toUpperCase() + (p.lure ? ' ← LURE' : '')));
    rowEl.appendChild(
      el(
        'span',
        correct ? 'ae-score__verdict ae-score__verdict--ok' : 'ae-score__verdict ae-score__verdict--no',
        `${p.onList ? 'was shown' : 'never shown'} · you said ${ans} ${correct ? '✓' : '✕'}`,
      ),
    );
    score.appendChild(rowEl);
  });
  screen.appendChild(score);
  screen.appendChild(ctaButton(step.cta, advance));
}

function matrixKey(evidenceId, hypothesisId) {
  return `${evidenceId}:${hypothesisId}`;
}

function cycleMatrixMark(current) {
  if (!current) return 'C';
  if (current === 'C') return 'I';
  return 'C';
}

function normalizeMatrixMark(mark) {
  if (mark === 'CC') return 'C';
  if (mark === 'II') return 'I';
  return mark;
}

function countMatrixStrikes(expertMarks) {
  return expertMarks.reduce((sum, mark) => {
    if (mark === 'I') return sum + 1;
    if (mark === 'II') return sum + 2;
    return sum;
  }, 0);
}

function renderMatrix(screen, step, runtime, advance, rerender) {
  if (step.prompt) screen.appendChild(el('p', 'ae-prompt', step.prompt));

  const grid = el('div', 'ae-matrix');
  grid.style.gridTemplateColumns = `minmax(7rem, 1.4fr) repeat(${step.hypotheses.length}, minmax(3rem, 1fr))`;

  grid.appendChild(el('div', 'ae-matrix__head', ''));
  step.hypotheses.forEach((h) => {
    grid.appendChild(el('div', 'ae-matrix__head', h.label));
  });

  step.evidence.forEach((ev) => {
    grid.appendChild(el('div', 'ae-matrix__ev', ev.label));
    step.hypotheses.forEach((h) => {
      const key = matrixKey(ev.id, h.id);
      const mark = runtime.matrixMarks[key] || '?';
      const btn = el('button', 'ae-matrix__cell', mark);
      btn.type = 'button';
      btn.addEventListener('click', () => {
        runtime.matrixMarks[key] = cycleMatrixMark(runtime.matrixMarks[key]);
        rerender();
      });
      grid.appendChild(btn);
    });
  });

  screen.appendChild(grid);
  screen.appendChild(
    el('p', 'ae-matrix__legend', 'C = consistent with the hypothesis · I = inconsistent · tap a cell to mark it'),
  );

  const allSet = step.evidence.every((ev) =>
    step.hypotheses.every((h) => runtime.matrixMarks[matrixKey(ev.id, h.id)]),
  );

  const lock = el('button', CLASS.btn, step.lockCta);
  lock.type = 'button';
  lock.disabled = !allSet;
  lock.addEventListener('click', () => {
    logEvent({ type: 'commit', episode: step.episodeId, choice: 'matrix' });
    advance();
  });
  screen.appendChild(lock);
}

function renderMatrixReveal(screen, step, runtime, advance) {
  if (step.lead) screen.appendChild(el('p', 'ae-lead', fill(step.lead, runtime)));

  const grid = el('div', 'ae-matrix');
  grid.style.gridTemplateColumns = `minmax(7rem, 1.4fr) repeat(${step.hypotheses.length}, minmax(3rem, 1fr))`;

  grid.appendChild(el('div', 'ae-matrix__head', ''));
  step.hypotheses.forEach((h) => {
    grid.appendChild(el('div', 'ae-matrix__head', h.label));
  });

  step.evidence.forEach((ev) => {
    grid.appendChild(el('div', 'ae-matrix__ev', ev.label));
    step.hypotheses.forEach((h, hi) => {
      const key = matrixKey(ev.id, h.id);
      const you = runtime.matrixMarks[key] || '?';
      const heuer = ev.expert[hi];
      const match = normalizeMatrixMark(heuer) === you;
      const cell = el('div', match ? 'ae-matrix__cell ae-matrix__cell--ok' : 'ae-matrix__cell ae-matrix__cell--miss');
      cell.appendChild(el('span', null, `you ${you}`));
      cell.appendChild(el('span', null, `Heuer ${heuer}`));
      grid.appendChild(cell);
    });
    if (ev.note) {
      const note = el('p', 'ae-matrix__note', ev.note);
      note.style.gridColumn = `1 / span ${step.hypotheses.length + 1}`;
      grid.appendChild(note);
    }
  });

  screen.appendChild(grid);

  step.hypotheses.forEach((h, hi) => {
    const expertMarks = step.evidence.map((ev) => ev.expert[hi]);
    const count = countMatrixStrikes(expertMarks);
    screen.appendChild(el('p', 'ae-matrix__tally', `${h.label} — ${count} strike(s) against`));
  });

  appendParagraphs(screen, step.body, runtime);
  screen.appendChild(ctaButton(step.cta, advance));
}

function renderRecap(screen, step, runtime, advance) {
  screen.appendChild(el('p', 'ae-lead', step.lead));
  const tools = getTools();
  if (tools.length === 0) {
    screen.appendChild(el('p', 'ae-toolkit__empty', step.emptyText));
  } else {
    const list = el('ul', 'ae-recap');
    tools.forEach((item) => list.appendChild(el('li', null, item)));
    screen.appendChild(list);
  }
  appendParagraphs(screen, step.body, runtime);
  screen.appendChild(ctaButton(step.cta, advance));
}

function renderTool(screen, step, chapter, episode, onComplete) {
  screen.appendChild(el('p', 'ae-steplabel ae-steplabel--keep', 'KEEP THIS · FEEDS YOUR TOOLKIT'));
  screen.appendChild(el('p', 'ae-lead', step.lead));
  appendParagraphs(screen, step.body, {});

  const link = el('a', 'ae-pdf', `Read ${chapter.chapterRef} in Heuer →`);
  link.href = pdfHref(step.pdfPage || chapter.pdfPage);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.style.display = 'block';
  link.style.margin = '0 0 16px';
  screen.appendChild(link);

  screen.appendChild(
    ctaButton(step.completeCta, () => {
      markDone(episode.id);
      if (step.toolItem) addTool(step.toolItem);
      logEvent({ type: 'complete', episode: episode.id, tool: step.toolItem });
      onComplete();
    }),
  );
}

/* ---------- episode shell ---------- */

export function renderEpisode(host, episode, { chapter, onComplete }) {
  episode.steps.forEach((s) => {
    s.episodeId = episode.id;
  });
  let stepIndex = 0;
  let activeKey = null;
  const runtime = {
    choiceId: null,
    choiceLabel: null,
    wasCorrect: false,
    blurClicks: 0,
    blurRevealed: false,
    studyStarted: false,
    timerLeft: 0,
    timerId: null,
    probeAnswers: {},
    probes: null,
    lureSaidYes: false,
    answers: {},
    scaleDrafts: {},
    matrixMarks: {},
  };

  function stopTimer() {
    if (runtime.timerId) {
      clearInterval(runtime.timerId);
      runtime.timerId = null;
    }
  }

  function advance() {
    stopTimer();
    stepIndex += 1;
    paint();
  }

  function paint() {
    host.innerHTML = '';
    const wrap = el('div', CLASS.app);

    const back = el('button', `${CLASS.btn} ${CLASS.btnGhost} ae-index`, '← INDEX');
    back.type = 'button';
    back.addEventListener('click', () => {
      stopTimer();
      onComplete();
    });
    wrap.appendChild(back);

    const head = el('div', 'ae-case');
    head.appendChild(el('p', 'ae-eyebrow', `CASE FILE · EPISODE ${chapter.num}/${chapter.total || 20} · UNCLASSIFIED`));
    head.appendChild(el('p', 'ae-case__ref', `${chapter.chapterRef.toUpperCase()} · ${chapter.archetype.toUpperCase()}`));
    head.appendChild(el('h1', 'ae-case__title', chapter.title));
    wrap.appendChild(head);

    const step = episode.steps[stepIndex];
    renderStepper(wrap, episode, step.phase);

    const key = `${stepIndex}:${step.type}`;
    if (key !== activeKey) {
      resetForStep(runtime, step);
      activeKey = key;
    }

    const screen = el('div', CLASS.screen);
    const rerender = () => paint();

    if (step.type === 'prose') renderProse(screen, step, runtime, advance);
    else if (step.type === 'choice') renderChoice(screen, step, runtime, advance, rerender);
    else if (step.type === 'scale') renderScale(screen, step, runtime, advance, rerender);
    else if (step.type === 'reveal') renderReveal(screen, step, runtime, advance);
    else if (step.type === 'blur') renderBlur(screen, step, runtime, advance, rerender);
    else if (step.type === 'blurReveal') renderBlurReveal(screen, step, runtime, advance, rerender);
    else if (step.type === 'matrix') renderMatrix(screen, step, runtime, advance, rerender);
    else if (step.type === 'matrixReveal') renderMatrixReveal(screen, step, runtime, advance);
    else if (step.type === 'recap') renderRecap(screen, step, runtime, advance);
    else if (step.type === 'wordstudy') renderWordStudy(screen, step, runtime, advance, rerender);
    else if (step.type === 'wordtest') renderWordTest(screen, step, runtime, advance, rerender);
    else if (step.type === 'wordreveal') renderWordReveal(screen, step, runtime, advance);
    else if (step.type === 'tool') renderTool(screen, step, chapter, episode, onComplete);

    wrap.appendChild(screen);

    const footer = el('div', CLASS.footer);
    footer.appendChild(el('span', 'ae-footer__count', `${stepIndex + 1} / ${episode.steps.length}`));
    const restart = el('button', `${CLASS.btn} ${CLASS.btnGhost}`, 'RESTART EPISODE');
    restart.type = 'button';
    restart.addEventListener('click', () => {
      stopTimer();
      stepIndex = 0;
      activeKey = null;
      paint();
    });
    footer.appendChild(restart);
    wrap.appendChild(footer);

    host.appendChild(wrap);
  }

  paint();
}
