import { CLASS } from './contract.js';
import { EPISODES, PARTS, ARCHETYPES } from './chapters.js';
import { isDone, getTools, resetAll, getDoneCount, getCommitCount } from './state.js';
import { pdfHref } from './pdf.js';
import { renderEpisode } from './engine.js';

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function archClass(archetype) {
  return 'ae-arch ae-arch--' + archetype.toLowerCase().replace(/[^a-z]+/g, '-');
}

function renderRow(root, ep) {
  const row = document.createElement('button');
  row.type = 'button';
  row.className = ep.playable ? 'ae-row' : 'ae-row ae-row--locked';

  row.appendChild(el('span', 'ae-row__num', '§' + ep.num));

  const main = el('div', 'ae-row__main');
  main.appendChild(el('h3', 'ae-row__title', ep.title));
  const meta =
    ep.chapterRef.toUpperCase() +
    ' · ' +
    ep.est.toUpperCase() +
    (ep.feedsToolkit ? ' · FEEDS TOOLKIT' : '');
  main.appendChild(el('p', 'ae-row__meta', meta));

  const tags = el('div', 'ae-row__tags');
  tags.appendChild(el('span', archClass(ep.archetype), ep.archetype));
  if (isDone(ep.id)) tags.appendChild(el('span', 'ae-row__done', 'COMPLETE ✓'));

  const pdf = el('a', 'ae-row__pdf', `Read ${ep.chapterRef.split(' — ')[0]} in Heuer →`);
  pdf.href = pdfHref(ep.pdfPage);
  pdf.target = '_blank';
  pdf.rel = 'noopener noreferrer';
  pdf.addEventListener('click', (e) => e.stopPropagation());
  tags.appendChild(pdf);
  main.appendChild(tags);
  row.appendChild(main);

  row.appendChild(el('span', 'ae-row__arrow', ep.playable ? '→' : '🔒'));

  row.addEventListener('click', async () => {
    if (ep.playable) {
      try {
        const mod = await import(`./episodes/${ep.id}.js`);
        renderEpisode(root, mod.default, { chapter: ep, onComplete: () => renderHub(root) });
      } catch (err) {
        console.error(err);
        window.open(pdfHref(ep.pdfPage), '_blank', 'noopener,noreferrer');
      }
    } else {
      window.open(pdfHref(ep.pdfPage), '_blank', 'noopener,noreferrer');
    }
  });

  return row;
}

function renderHub(root) {
  root.innerHTML = '';
  const wrap = el('div', CLASS.app);

  const header = el('div', 'ae-hub__header');
  header.appendChild(
    el('p', 'ae-eyebrow', 'UNCLASSIFIED // FOR PUBLIC RELEASE · A FIELD COURSE IN THINKING'),
  );
  header.appendChild(el('p', 'ae-eyebrow ae-eyebrow--accent', 'AFTER RICHARDS J. HEUER JR. · CIA, 1999'));
  header.appendChild(el('h1', 'ae-hub__title', "The Analyst's Eye"));

  const tagline = el('p', 'ae-tagline');
  tagline.append('A book taught you ');
  tagline.appendChild(el('em', null, 'about'));
  tagline.append(
    ' your blind spots. This catches you in one — then hands you the tool that survives the lesson.',
  );
  header.appendChild(tagline);

  const statement = el('p', 'ae-statement');
  statement.append('You cannot be ');
  const redaction = el('span', 'ae-redaction', 'talked');
  redaction.title = 'Click to declassify';
  redaction.addEventListener('click', () => redaction.classList.add('ae-redaction--open'));
  statement.appendChild(redaction);
  statement.append(
    ' out of a cognitive bias. Heuer knew it. So every episode below makes you commit a judgment first, shows you where it broke, names the mechanism, and leaves you with one reusable move.',
  );
  header.appendChild(statement);

  const learn = el(
    'p',
    'ae-learn',
    'In about an hour you will run Heuer\u2019s own experiments on yourself \u2014 across perception, memory, evidence, causation, probability, and hindsight \u2014 and collect a pocket toolkit of moves that still work once the lesson is over.',
  );
  header.appendChild(learn);

  const status = el('div', 'ae-status');
  status.appendChild(
    el(
      'span',
      'ae-status__text',
      `Your file holds ${getCommitCount()} committed judgments · ${getDoneCount()} episodes complete.`,
    ),
  );
  const resetBtn = el('button', `${CLASS.btn} ${CLASS.btnGhost} ae-status__reset`, 'RESET COURSE');
  resetBtn.type = 'button';
  resetBtn.addEventListener('click', () => {
    if (window.confirm('Clear all progress and toolkit items?')) {
      resetAll();
      renderHub(root);
    }
  });
  status.appendChild(resetBtn);
  header.appendChild(status);
  wrap.appendChild(header);

  PARTS.forEach((part) => {
    const eps = EPISODES.filter((e) => e.part === part);
    if (eps.length === 0) return;
    wrap.appendChild(el('h2', 'ae-part', part));
    const list = el('div', 'ae-rows');
    eps.forEach((ep) => list.appendChild(renderRow(root, ep)));
    wrap.appendChild(list);
  });

  const toolkit = el('div', CLASS.toolkit);
  toolkit.appendChild(el('h3', 'ae-toolkit__title', 'Your toolkit'));
  const tools = getTools();
  if (tools.length === 0) {
    toolkit.appendChild(
      el('p', 'ae-toolkit__empty', 'Finish a playable episode to keep its reusable move here.'),
    );
  } else {
    const ul = document.createElement('ul');
    tools.forEach((t) => {
      const li = document.createElement('li');
      li.textContent = t;
      ul.appendChild(li);
    });
    toolkit.appendChild(ul);
  }
  wrap.appendChild(toolkit);

  const legend = el('div', 'ae-legend');
  legend.appendChild(el('span', 'ae-legend__title', 'EPISODE ARCHETYPES'));
  ARCHETYPES.filter((a) => a !== 'Briefing').forEach((a) => {
    legend.appendChild(el('span', archClass(a), a));
  });
  wrap.appendChild(legend);

  wrap.appendChild(
    el(
      'p',
      'ae-note',
      'All 20 episodes are playable. Each one links to its chapter in Heuer — the episode is the hook; the book is the depth.',
    ),
  );

  const credits = el('div', 'ae-credits');

  const source = el('p', 'ae-credits__line');
  source.append('Source: Richards J. Heuer Jr., ');
  source.appendChild(el('em', null, 'Psychology of Intelligence Analysis'));
  source.append(
    ' (Center for the Study of Intelligence, CIA, 1999) — a public-domain U.S. Government work. This is an independent educational adaptation and is not endorsed by or affiliated with the CIA.',
  );
  credits.appendChild(source);

  const inspiration = el('p', 'ae-credits__line');
  inspiration.append('Built as an explorable explanation, in the spirit of ');
  const ncase = el('a', 'ae-credits__link', 'Nicky Case');
  ncase.href = 'https://ncase.me/';
  ncase.target = '_blank';
  ncase.rel = 'noopener noreferrer';
  inspiration.appendChild(ncase);
  inspiration.append('. Open source — ');
  const repo = el('a', 'ae-credits__link', 'view on GitHub');
  repo.href = 'https://github.com/artvandelay/the-analysts-eye';
  repo.target = '_blank';
  repo.rel = 'noopener noreferrer';
  inspiration.appendChild(repo);
  inspiration.append('.');
  credits.appendChild(inspiration);

  wrap.appendChild(credits);

  root.appendChild(wrap);
}

export function startApp(root) {
  renderHub(root);
}
