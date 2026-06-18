/**
 * Headless structural + content verification (no browser required).
 * Exit 0 = all checks pass.
 */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { EPISODES, PARTS } from './src/chapters.js';

const root = dirname(fileURLToPath(import.meta.url));

const failures = [];

function fail(msg) {
  failures.push(msg);
}

// § sequence
const nums = EPISODES.map((e) => +e.num);
for (let i = 1; i < nums.length; i++) {
  if (nums[i] !== nums[i - 1] + 1) fail(`§ jump: ${nums[i - 1]} → ${nums[i]}`);
}

// Part II book order
const p2 = EPISODES.filter((e) => e.part === PARTS[1]);
const ch = p2.map((e) => e.bookChapter);
if (JSON.stringify(ch) !== JSON.stringify([4, 5, 6, 7, 8])) {
  fail(`Part II chapters ${ch.join(',')} != 4,5,6,7,8`);
}

// feedsToolkit
for (const ep of EPISODES) {
  const mod = (await import(`./src/episodes/${ep.id}.js`)).default;
  const hasTool = mod.steps.some((s) => s.type === 'tool' && s.toolItem);
  if (hasTool !== ep.feedsToolkit) fail(`${ep.id} feedsToolkit=${ep.feedsToolkit} vs toolItem=${hasTool}`);
}

// ep06 no correctId on first lock choice
const ep06 = (await import('./src/episodes/ep06.js')).default;
const ep06Choice = ep06.steps.find((s) => s.type === 'choice' && s.mode !== 'advance');
if (ep06Choice?.correctId) fail(`ep06 still has correctId ${ep06Choice.correctId}`);

// ep13 provoke
const ep13 = (await import('./src/episodes/ep13.js')).default;
const provoke = ep13.steps.find((s) => s.phase === 'PROVOKE');
if (provoke?.body?.includes('Start from 10 percent')) fail('ep13 PROVOKE telegraphs anchor');

// ep05 no scale detail
const ep05 = (await import('./src/episodes/ep05.js')).default;
if (JSON.stringify(ep05).includes('"detail"')) fail('ep05 still has scale detail hints');

// engine stepper fallback
const engine = readFileSync(join(root, 'src/engine.js'), 'utf8');
if (!engine.includes('episodeHasPhaseRegression')) fail('engine missing stepper fallback');

console.log(JSON.stringify({ pass: failures.length === 0, failures, sectionNums: EPISODES.map((e) => e.num), part2Titles: p2.map((e) => `§${e.num} ${e.title}`) }, null, 2));
process.exit(failures.length ? 1 : 0);
