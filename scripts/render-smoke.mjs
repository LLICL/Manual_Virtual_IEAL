// Prueba de humo: renderiza cada seccion registrada y verifica que no revienta
// ni quede vacia. Usa el servidor de Vite para resolver los .jsx.
// Uso: node scripts/render-smoke.mjs
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const sections = (await vite.ssrLoadModule('/src/sections/index.js')).default;

let vacias = [], errores = [];
for (const [id, Section] of Object.entries(sections)) {
  try {
    const html = renderToStaticMarkup(createElement(Section));
    const texto = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    if (texto.length === 0) vacias.push(id);
  } catch (e) {
    errores.push(`${id}: ${e.message.split('\n')[0]}`);
  }
}
await vite.close();

console.log(`secciones renderizadas: ${Object.keys(sections).length}`);
if (errores.length) { console.log(`\nERRORES DE RENDER (${errores.length}):`); errores.forEach((e) => console.log(`  x ${e}`)); }
if (vacias.length) { console.log(`\nSECCIONES VACIAS (${vacias.length}):`); vacias.forEach((v) => console.log(`  x ${v}`)); }
if (errores.length || vacias.length) process.exit(1);
console.log('Todas las secciones renderizan contenido.');