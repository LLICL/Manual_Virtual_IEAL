// Migración única: convierte las secciones de la versión estática (scripts/.orig/index.html)
// en componentes React (src/sections/*.jsx) y genera src/data/navigation.js.
// Requiere scripts/.orig/index.html (git show main:index.html > scripts/.orig/index.html).
// Uso: node scripts/convert-sections.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { parse } from 'parse5';

const SRC = new URL('./.orig/index.html', import.meta.url);
const OUT_DIR = new URL('../src/sections/', import.meta.url);
const NAV_OUT = new URL('../src/data/navigation.js', import.meta.url);

const doc = parse(readFileSync(SRC, 'utf8'));

// ---------- utilidades DOM ----------
const isEl = (n) => n.tagName !== undefined;
const isText = (n) => n.nodeName === '#text';
const attr = (n, name) => n.attrs?.find((a) => a.name === name)?.value;
const hasClass = (n, c) => (attr(n, 'class') || '').split(/\s+/).includes(c);
const kids = (n) => n.childNodes || [];

function find(node, pred, out = []) {
  if (isEl(node) && pred(node)) out.push(node);
  for (const c of kids(node)) find(c, pred, out);
  return out;
}
function textOf(node) {
  if (isText(node)) return node.value;
  return kids(node).map(textOf).join('');
}

// ---------- conversión a JSX ----------
const VOID = new Set(['br', 'img', 'input', 'hr', 'source', 'meta', 'link', 'col', 'wbr']);
const INLINE = new Set([
  'a', 'span', 'strong', 'b', 'em', 'i', 'u', 'small', 'sup', 'sub', 'code', 'mark',
  'label', 'img', 'svg', 'abbr', 'cite', 'q', 's', 'button',
]);
const ATTR_MAP = {
  class: 'className', for: 'htmlFor', colspan: 'colSpan', rowspan: 'rowSpan',
  tabindex: 'tabIndex', autocomplete: 'autoComplete', cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing', srcset: 'srcSet', maxlength: 'maxLength', readonly: 'readOnly',
  crossorigin: 'crossOrigin', allowfullscreen: 'allowFullScreen', frameborder: 'frameBorder',
  contenteditable: 'contentEditable', viewbox: 'viewBox',
};

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

function attrName(name) {
  if (ATTR_MAP[name]) return ATTR_MAP[name];
  if (name.startsWith('data-') || name.startsWith('aria-')) return name;
  if (name.includes('-')) return camel(name);
  return name;
}

function jsxString(v) {
  // Atributo string: literal si es seguro, expresión JSON si no.
  return /^[^"&{}\\\n\r<>]*$/.test(v) ? `"${v}"` : `{${JSON.stringify(v)}}`;
}

function styleObject(css) {
  const props = [];
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const k = decl.slice(0, i).trim();
    const v = decl.slice(i + 1).trim();
    if (!k) continue;
    const key = k.startsWith('--') ? JSON.stringify(k) : camel(k.replace(/^-ms-/, 'ms-'));
    props.push(`${key}: ${JSON.stringify(v)}`);
  }
  return `{{ ${props.join(', ')} }}`;
}

const used = new Set();

function findTabGroup(el) {
  // Botones de pestaña: hijos directos, o hijos de un hijo directo con clase *-tabs-bar.
  const btns = [];
  for (const c of kids(el)) {
    if (!isEl(c)) continue;
    if (c.tagName === 'button' && attr(c, 'data-tab')) btns.push(c);
    else if (/-tabs-bar\b/.test(attr(c, 'class') || '')) {
      for (const b of kids(c)) if (isEl(b) && b.tagName === 'button' && attr(b, 'data-tab')) btns.push(b);
    }
  }
  if (!btns.length) return null;
  const ids = btns.map((b) => attr(b, 'data-tab'));
  const active = btns.filter((b) => hasClass(b, 'active'));
  if (active.length !== 1) throw new Error(`Grupo de pestañas sin un único activo: ${ids}`);
  // La barra de botones por sí sola no es un grupo: los paneles deben estar dentro del contenedor.
  const found = ids.map((id) => find(el, (n) => attr(n, 'id') === id));
  if (found.every((f) => f.length === 0)) return null;
  found.forEach((f, i) => {
    if (f.length !== 1 || f[0].tagName !== 'div') throw new Error(`Panel inválido: ${ids[i]}`);
  });
  return { ids, initial: attr(active[0], 'data-tab') };
}

function emitAttrs(el, ctx, skip = []) {
  const out = [];
  for (const { name, value } of el.attrs) {
    if (skip.includes(name)) continue;
    let n = attrName(name);
    if (name === 'style') { out.push(`style=${styleObject(value)}`); continue; }
    if (name === 'onmouseover' || name === 'onmouseout') {
      const props = [...value.matchAll(/this\.style\.(\w+)\s*=\s*'([^']*)'/g)].map((m) => `${m[1]}: ${JSON.stringify(m[2])}`);
      if (!props.length) throw new Error(`Handler no soportado: ${value}`);
      out.push(`${name === 'onmouseover' ? 'onMouseOver' : 'onMouseOut'}={(e) => Object.assign(e.currentTarget.style, { ${props.join(', ')} })}`);
      continue;
    }
    if (name === 'onclick') {
      const call = value.replace(/;$/, '');
      out.push(`onClick={() => ${call}}`);
      continue;
    }
    if (n === 'className') {
      // Las pestañas activas las gestiona TabButton/TabPanel
      const inTab = ctx.tabIds.has(attr(el, 'data-tab')) || ctx.tabIds.has(attr(el, 'id'));
      const cls = inTab ? value.split(/\s+/).filter((c) => c && c !== 'active').join(' ') : value;
      out.push(`className=${jsxString(cls)}`);
      continue;
    }
    if (value === '') out.push(n);
    else out.push(`${n}=${jsxString(value)}`);
  }
  return out;
}

function convertChildren(el, ctx, depth) {
  const lines = [];
  const list = kids(el).filter((c) => c.nodeName !== '#comment');
  const parentInline = INLINE.has(el.tagName);
  list.forEach((c, i) => {
    const ind = '  '.repeat(depth);
    if (isText(c)) {
      let t = c.value.replace(/[ \t\r\n\f]+/g, ' ');
      const prev = list[i - 1];
      const next = list[i + 1];
      if (t === ' ') {
        const pOk = prev && (isText(prev) || (isEl(prev) && INLINE.has(prev.tagName)));
        const nOk = next && (isText(next) || (isEl(next) && INLINE.has(next.tagName)));
        if (pOk && nOk) lines.push(`${ind}{" "}`);
        return;
      }
      if (!parentInline) {
        if (!prev || (isEl(prev) && !INLINE.has(prev.tagName))) t = t.replace(/^ /, '');
        if (!next || (isEl(next) && !INLINE.has(next.tagName))) t = t.replace(/ $/, '');
      }
      const lead = t.startsWith(' ');
      const trail = t.endsWith(' ');
      const core = t.trim();
      if (lead) lines.push(`${ind}{" "}`);
      if (core) {
        lines.push(/^[^{}<>&\\]*$/.test(core) ? `${ind}${core}` : `${ind}{${JSON.stringify(core)}}`);
      }
      if (trail) lines.push(`${ind}{" "}`);
    } else if (isEl(c)) {
      lines.push(convertEl(c, ctx, depth));
    }
  });
  return lines;
}

function convertEl(el, ctx, depth) {
  const ind = '  '.repeat(depth);
  let tag = el.tagName;
  let attrs;
  let skip = [];
  const id = attr(el, 'id');
  const dataTab = attr(el, 'data-tab');

  if (tag === 'button' && dataTab && ctx.tabIds.has(dataTab)) {
    tag = 'TabButton'; used.add('TabButton');
    attrs = [`tab=${jsxString(dataTab)}`, ...emitAttrs(el, ctx, ['data-tab'])];
  } else if (id && ctx.tabIds.has(id) && tag === 'div') {
    tag = 'TabPanel'; used.add('TabPanel');
    attrs = emitAttrs(el, ctx);
  } else if (tag === 'a' && attr(el, 'data-nav')) {
    tag = 'NavLink'; used.add('NavLink');
    attrs = [`to=${jsxString(attr(el, 'data-nav'))}`, ...emitAttrs(el, ctx, ['data-nav', 'href'])];
  } else {
    attrs = emitAttrs(el, ctx, skip);
  }

  const open = attrs.length ? `${tag} ${attrs.join(' ')}` : tag;
  if (VOID.has(el.tagName)) return `${ind}<${open} />`;

  // ¿Este elemento es contenedor de un grupo de pestañas?
  const group = findTabGroup(el);
  let childCtx = ctx;
  let inner;
  if (group) {
    used.add('Tabs');
    childCtx = { tabIds: new Set([...ctx.tabIds, ...group.ids]) };
    const body = convertChildren(el, childCtx, depth + 2);
    inner = [
      `${ind}  <Tabs ids={${JSON.stringify(group.ids)}} initial=${jsxString(group.initial)}>`,
      ...body,
      `${ind}  </Tabs>`,
    ];
  } else {
    inner = convertChildren(el, ctx, depth + 1);
  }
  if (!inner.length) return `${ind}<${open} />`;
  return [`${ind}<${open}>`, ...inner, `${ind}</${tag}>`].join('\n');
}

// ---------- secciones ----------
const main = find(doc, (n) => n.tagName === 'main' && hasClass(n, 'content'))[0];
const sections = kids(main).filter((n) => isEl(n) && n.tagName === 'section');

const compName = (id) => (id === 'cap-home' ? 'Home' : 'Cap' + id.replace('cap-', ''));

mkdirSync(OUT_DIR, { recursive: true });
const registry = [];

for (const sec of sections) {
  const id = attr(sec, 'id');
  used.clear();
  const group = findTabGroup(sec);
  let ctx = { tabIds: new Set() };
  let body;
  if (group) {
    used.add('Tabs');
    ctx = { tabIds: new Set(group.ids) };
    body = [
      `      <Tabs ids={${JSON.stringify(group.ids)}} initial=${jsxString(group.initial)}>`,
      ...convertChildren(sec, ctx, 4),
      `      </Tabs>`,
    ];
  } else {
    body = convertChildren(sec, ctx, 3);
  }
  const imports = [...used].sort();
  const name = compName(id);
  const file =
    (imports.length ? `import { ${imports.join(', ')} } from '../components';\n\n` : '') +
    `export default function ${name}() {\n  return (\n    <>\n${body.join('\n')}\n    </>\n  );\n}\n`;
  // Los componentes editados a mano (marcados con `// @manual`) no se sobrescriben.
  const target = new URL(`${name}.jsx`, OUT_DIR);
  if (existsSync(target) && readFileSync(target, 'utf8').includes('// @manual')) {
    console.log(`  (omitido, editado a mano: ${name})`);
  } else {
    writeFileSync(target, file);
  }
  registry.push({ id, name });
}

// Registro de secciones
const reg =
  registry.map((r) => `import ${r.name} from './${r.name}';`).join('\n') +
  `\n\nconst sections = {\n${registry.map((r) => `  '${r.id}': ${r.name},`).join('\n')}\n};\n\nexport default sections;\n`;
writeFileSync(new URL('index.js', OUT_DIR), reg);

// ---------- navegación ----------
mkdirSync(new URL('../src/data/', import.meta.url), { recursive: true });
const nav = find(doc, (n) => n.tagName === 'nav' && hasClass(n, 'sidebar-nav'))[0];
const groups = find(nav, (n) => hasClass(n, 'nav-section')).map((g) => {
  const title = find(g, (n) => hasClass(n, 'nav-section-title'))[0];
  return {
    title: textOf(title).replace(/[▼▶]/g, '').replace(/\s+/g, ' ').trim(),
    collapsible: hasClass(title, 'toggle-title'),
    items: find(g, (n) => hasClass(n, 'nav-item')).map((a) => {
      const cls = (attr(a, 'class') || '').split(/\s+/).filter((c) => c && c !== 'nav-item' && c !== 'active');
      const item = {
        id: attr(a, 'data-section'),
        label: textOf(find(a, (n) => hasClass(n, 'nav-label'))[0]).trim(),
      };
      if (cls.length) item.className = cls.join(' ');
      return item;
    }),
  };
});
writeFileSync(
  NAV_OUT,
  `// Estructura del menú lateral (generada desde la versión estática).\nconst navigation = ${JSON.stringify(groups, null, 2)};\n\nexport default navigation;\n`,
);
console.log(`OK: ${sections.length} secciones, ${groups.length} grupos de navegación`);
