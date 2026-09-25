import { renderToStaticMarkup } from 'react-dom/server';
import sections from '../sections';
import { getLeafBlocks } from './text';

let cache = null;

// Índice de búsqueda: un resultado potencial por bloque de texto de cada sección.
// Se construye una sola vez renderizando cada sección a HTML estático, de modo que
// el texto del manual vive únicamente en los componentes.
export function getSearchIndex() {
  if (cache) return cache;
  cache = [];
  const parser = new DOMParser();
  for (const [sectionId, Section] of Object.entries(sections)) {
    if (sectionId === 'cap-home') continue;
    const root = parser.parseFromString(
      `<body>${renderToStaticMarkup(<Section />)}</body>`,
      'text/html',
    ).body;
    const sectionName = root.querySelector('.section-title')?.textContent.trim() || sectionId;

    getLeafBlocks(root).forEach((block, blockIndex) => {
      const panels = [];
      for (let p = block.closest('[data-panel]'); p; p = p.parentElement?.closest('[data-panel]')) {
        panels.unshift(p.dataset.panel);
      }
      const tabLabel = panels.length
        ? root.querySelector(`[data-tab="${panels[panels.length - 1]}"]`)?.textContent.trim() || ''
        : '';
      cache.push({
        sectionId,
        sectionName,
        blockIndex,
        panels,
        tabLabel,
        text: block.textContent.replace(/\s+/g, ' ').trim(),
      });
    });
  }
  return cache;
}
