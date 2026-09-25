import { buildIndexMap, getLeafBlocks, normalize } from './text';

const NAME = 'search-highlight';

export function clearHighlights() {
  if (typeof CSS !== 'undefined' && CSS.highlights) CSS.highlights.delete(NAME);
}

// Resalta todas las apariciones (sin acentos) de `query` dentro de `section`, usando
// la CSS Custom Highlight API para no tocar el DOM que gestiona React.
// Devuelve el elemento al que hacer scroll (el primer resultado, o el bloque indicado).
export function highlightIn(section, query, blockIndex) {
  clearHighlights();
  const fallback = getLeafBlocks(section)[blockIndex] || null;
  const q = normalize(query);
  if (!q || typeof CSS === 'undefined' || !CSS.highlights) return fallback;

  const ranges = [];
  const walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const { text, map } = buildIndexMap(node.nodeValue);
    let pos = 0;
    for (;;) {
      const found = text.indexOf(q, pos);
      if (found === -1) break;
      const start = map[found];
      const last = found + q.length - 1;
      const end = last < map.length ? map[last] + 1 : node.nodeValue.length;
      if (start != null && start < end) {
        const range = new Range();
        range.setStart(node, start);
        range.setEnd(node, end);
        ranges.push(range);
      }
      pos = found + q.length;
    }
  }
  if (ranges.length) CSS.highlights.set(NAME, new Highlight(...ranges));
  return ranges[0]?.startContainer.parentElement || fallback;
}
