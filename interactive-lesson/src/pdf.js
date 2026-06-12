import { PDF_PATH } from './contract.js';

export function pdfHref(page) {
  return `${PDF_PATH}#page=${page}`;
}
