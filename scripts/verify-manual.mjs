// Verifica la coherencia del manual contra el registro de React.
// No depende de scripts/.orig, asi que corre en cualquier equipo y en CI.
// Uso: npm run verify
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sectionsDir = join(root, 'src', 'sections');
const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const read = (p) => readFileSync(join(root, p), 'utf8');

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

// ---------------------------------------------------------------- navigation.js
const { default: navigation } = await import('../src/data/navigation.js');

// --------------------------------------------------- registro src/sections/index.js
const idxSrc = read('src/sections/index.js');
const imports = [...idxSrc.matchAll(/import\s+(\w+)\s+from\s+'\.\/([^']+)'/g)].map((m) => ({
  name: m[1],
  file: m[2],
}));
const entries = [...idxSrc.matchAll(/'([a-z0-9-]+)':\s*(\w+)/g)].map((m) => ({ id: m[1], comp: m[2] }));
const registered = new Map(entries.map((e) => [e.comp, e.id]));
const registeredIds = new Set(entries.map((e) => e.id));
const fileOf = new Map(imports.map((i) => [i.name, i.file]));

// ------------------------------------------------------- 1. correspondencia registro <-> archivos
for (const im of imports) {
  if (!existsSync(join(sectionsDir, `${im.file}.jsx`))) fail(`import sin archivo: ./${im.file}.jsx (${im.name})`);
  if (!registered.has(im.name)) fail(`componente importado y nunca registrado: ${im.name}`);
}
for (const [comp, id] of registered) {
  if (!imports.some((i) => i.name === comp)) fail(`clave '${id}' registrada sin import: ${comp}`);
}
const onDisk = readdirSync(sectionsDir).filter((f) => f.endsWith('.jsx')).map((f) => f.replace(/\.jsx$/, ''));
const imported = new Set(imports.map((i) => i.file));
for (const f of onDisk) if (!imported.has(f)) fail(`archivo huerfano (nunca importado): src/sections/${f}.jsx`);

// ------------------------------------------------------- 2. ids y numeros unicos
const seenIds = new Map();
const seenNums = new Map();
const groups = [];
const walkNode = (node, depth, groupTitle) => {
  if (node.separator) { groups.push({ title: node.title, kind: 'separator' }); return; }
  if (node.id !== undefined && !seenIds.has(node.id)) seenIds.set(node.id, node);
  else if (node.id !== undefined) fail(`id duplicado en navigation.js: '${node.id}'`);
  if (node.number) {
    if (seenNums.has(node.number)) fail(`numero duplicado: '${node.number}' (${node.id} y ${seenNums.get(node.number)})`);
    else seenNums.set(node.number, node.id);
  }
  if (node.title && depth === 0) groups.push({ title: node.title, id: node.id ?? null, collapsible: !!node.collapsible, kind: 'grupo' });
  for (const c of [...(node.items ?? []), ...(node.children ?? [])]) walkNode(c, depth + 1, node.title);
};
for (const g of navigation ?? []) walkNode(g, 0, null);

// ------------------------------------------------------- 3. navegacion <-> registro
const navIds = [...seenIds.keys()];
for (const id of navIds) {
  if (id !== 'cap-home' && !entries.some((e) => e.id === id)) {
    const node = seenIds.get(id);
    const isGrupo = !!node.collapsible && (node.children?.length ?? 0) > 0;
    (isGrupo ? warn : fail)(`id de navegacion sin componente: '${id}'${isGrupo ? ' (grupo desplegable, no navega)' : ''}`);
  }
}
for (const e of entries) {
  if (e.id !== 'cap-home' && !seenIds.has(e.id)) fail(`componente registrado y no navegable: '${e.id}' -> ${e.comp}`);
}

// ------------------------------------------------------- 4. destinos de navegacion existentes
const code = walk(join(root, 'src')).filter((f) => /\.(jsx|js|css)$/.test(f)).map((f) => readFileSync(f, 'utf8')).join('\n');
const targets = new Set([
  ...[...code.matchAll(/<NavLink\s+to="([^"]+)"/g)].map((m) => m[1]),
  ...[...code.matchAll(/\bgo\('([^']+)'\)/g)].map((m) => m[1]),
]);
for (const t of targets) if (!registeredIds.has(t)) fail(`destino de navegacion inexistente: '${t}'`);

// ------------------------------------------------------- 5. assets locales referenciados existen
const assetRefs = new Set([
  ...[...`${code}\n${read('index.html')}`.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((m) => m[1]),
]);
for (const a of assetRefs) {
  if (/^(\/|#|https?:|mailto:|tel:|data:)/.test(a)) continue;
  const rel = decodeURIComponent(a.split(/[?#]/)[0]);
  if (rel && !existsSync(join(root, 'public', rel))) {
    fail(`asset referenciado inexistente: '${a}' (se esperaba en public/${rel})`);
  }
}

// ------------------------------------------------------- 6. componentes que no renderizan nada
for (const [comp, id] of registered) {
  const file = fileOf.get(comp);
  if (!file) continue;
  const body = readFileSync(join(sectionsDir, `${file}.jsx`), 'utf8');
  if (/^\s*return\s+null\s*;?\s*$/m.test(body)) fail(`'${id}' esta registrado pero renderiza null (ruta vacia)`);
}

// ------------------------------------------------------- 7. section-num coherente con navigation
for (const [comp, id] of registered) {
  const file = fileOf.get(comp);
  if (!file) continue;
  const body = readFileSync(join(sectionsDir, `${file}.jsx`), 'utf8');
  const num = /section-num">\s*([\s\S]*?)\s*<\/span>/.exec(body)?.[1]?.trim();
  const expected = seenIds.get(id)?.number;
  if (!expected) continue;
  if (!num) warn(`'${id}' (${expected}) no declara section-num`);
  else if (num !== expected) fail(`'${id}' declara section-num '${num}' pero navigation.js dice '${expected}'`);
}

// ------------------------------------------------------- 8. clases CSS muertas
const css = read('src/styles.css');
const DYNAMIC = new Set(['nav-item--nivel-2', 'nav-item--nivel-3', 'nav-item--nivel-4', 'googleapis', 'w3']);
const stripUrl = (s) => s.replace(/url\((?:[^()]|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')*\)/gi, 'url()');
const jsxCode = walk(join(root, 'src')).filter((f) => /\.(jsx|js)$/.test(f)).map((f) => readFileSync(f, 'utf8')).join('\n');
const cssClasses = [...new Set([...stripUrl(css).matchAll(/\.(-?[a-zA-Z_][\w-]*)/g)].map((m) => m[1]))];
for (const c of cssClasses) {
  if (DYNAMIC.has(c)) continue;
  if (!new RegExp(`(?<![\\w-])${esc(c)}(?![\\w-])`).test(jsxCode)) fail(`clase CSS sin uso: .${c}`);
}
for (const c of [...new Set([...stripUrl(jsxCode).matchAll(/className="([^"]+)"/g)].flatMap((m) => m[1].split(/\s+/)))]) {
  if (c && !cssClasses.includes(c)) warn(`clase usada en JSX sin regla CSS: .${c}`);
}

// ------------------------------------------------------- 9. balance del CSS
const bal = (s, a, b) => [...s].reduce((n, c) => n + (c === a ? 1 : c === b ? -1 : 0), 0);
if (bal(css, '{', '}') !== 0) fail(`styles.css desbalanceado: llaves = ${bal(css, '{', '}')}`);
for (const v of new Set([...css.matchAll(/var\((--[\w-]+)/g)].map((m) => m[1]))) {
  if (!new RegExp(`${esc(v)}\\s*:`).test(css)) fail(`variable CSS usada y no definida: ${v}`);
}

// ------------------------------------------------------- informe
console.log(`secciones registradas : ${entries.length}`);
console.log(`ids en navigation.js  : ${navIds.length}`);
console.log(`grupos de primer nivel: ${groups.filter((g) => g.kind === 'grupo').length}`);
console.log(`archivos .jsx en disco: ${onDisk.length}`);
console.log('');

if (warnings.length) {
  console.log(`AVISOS (${warnings.length}):`);
  for (const w of warnings) console.log(`  ~ ${w}`);
  console.log('');
}
if (errors.length) {
  console.log(`ERRORES (${errors.length}):`);
  for (const e of errors) console.log(`  x ${e}`);
  process.exit(1);
}
console.log('Todo coherente.');