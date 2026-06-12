import { STORAGE_KEY } from './contract.js';

const EMPTY = { done: {}, tools: [], log: [] };

function readRaw() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY, done: {}, tools: [], log: [] };
    const parsed = JSON.parse(raw);
    return {
      done: parsed.done && typeof parsed.done === 'object' ? parsed.done : {},
      tools: Array.isArray(parsed.tools) ? parsed.tools : [],
      log: Array.isArray(parsed.log) ? parsed.log : [],
    };
  } catch {
    return { done: {}, tools: [], log: [] };
  }
}

export function loadState() {
  return readRaw();
}

export function saveState(s) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* blocked storage */
  }
}

export function isDone(id) {
  return Boolean(loadState().done[id]);
}

export function markDone(id) {
  const s = loadState();
  s.done[id] = true;
  saveState(s);
}

export function getTools() {
  return [...loadState().tools];
}

export function addTool(item) {
  const s = loadState();
  if (!s.tools.includes(item)) {
    s.tools.push(item);
    saveState(s);
  }
}

export function getLog() {
  return [...loadState().log];
}

export function getDoneCount() {
  return Object.keys(loadState().done).length;
}

export function getCommitCount() {
  return loadState().log.filter((e) => e && e.type === 'commit').length;
}

export function logEvent(evt) {
  const s = loadState();
  s.log.push({ ...evt, at: Date.now() });
  saveState(s);
}

export function resetAll() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* blocked storage */
  }
}
