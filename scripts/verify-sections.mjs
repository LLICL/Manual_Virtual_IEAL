// Verifica que cada componente de src/sections renderice el mismo DOM que la sección
// original (scripts/.orig/index.html). Uso: node scripts/verify-sections.mjs
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import { JSDOM } from 'jsdom';

const IGNORED_ATTRS = new Set(['onclick', 'onmouseover', 'onmouseout', 'data-nav', 'data-panel']);

const original = new JSDOM(readFileSync(new URL('./.orig/index.html', import.meta.url), 'utf8')).window.document;

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const sections = (await vite.ssrLoadModule('/src/sections/index.js')).default;

function canon(node) {
  if (node.nodeType === 3) {
    const t = node.nodeValue.replace(/\s+/g, ' ').trim();
    return t ? JSON.stringify(t) : null;
  }
  if (node.nodeType !== 1) return null;
  const attrs = [...node.attributes]
    .filter((a) => !IGNORED_ATTRS.has(a.name))
    .map((a) => {
      let v = a.value;
      if (a.name === 'class') v = v.split(/\s+/).filter(Boolean).sort().join(' ');
      if (a.name === 'style') {
        v = v.split(';').map((d) => d.trim().toLowerCase().replace(/\s*:\s*/, ':')).filter(Boolean).sort().join(';');
      }
      return `${a.name}=${JSON.stringify(v)}`;
    })
    .sort()
    .join(' ');
  const inner = [...node.childNodes].map(canon).filter(Boolean).join('');
  return `<${node.localName} ${attrs}>${inner}</${node.localName}>`;
}
const flatText = (n) => n.textContent.replace(/\s+/g, '');

let bad = 0;
for (const [id, Section] of Object.entries(sections)) {
  const orig = original.getElementById(id);
  const html = renderToStaticMarkup(createElement('section', { className: 'section-panel active', id }, createElement(Section)));
  const rendered = new JSDOM(`<body>${html}</body>`).window.document.getElementById(id);

  const sameText = flatText(orig) === flatText(rendered);
  const inner = (n) => [...n.childNodes].map(canon).filter(Boolean).join('');
  const sameTree = inner(orig) === inner(rendered);
  if (!sameText || !sameTree) {
    bad++;
    console.log(`DIFERENTE ${id}: texto=${sameText ? 'ok' : 'DIFIERE'} estructura=${sameTree ? 'ok' : 'DIFIERE'}`);
    if (process.argv.includes('--diff')) {
      const a = inner(orig), b = inner(rendered);
      let i = 0; while (a[i] === b[i]) i++;
      console.log('  orig:', a.slice(Math.max(0, i - 80), i + 160));
      console.log('  new :', b.slice(Math.max(0, i - 80), i + 160));
    }
  }
}
console.log(bad ? `${bad} sección(es) con diferencias` : `Las ${Object.keys(sections).length} secciones coinciden`);
await vite.close();
