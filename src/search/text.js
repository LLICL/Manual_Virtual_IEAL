// Normaliza texto: quita tildes y minúsculas, para buscar sin acentos.
export function normalize(str) {
  return (str || '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// Mapea posición del texto normalizado -> posición en el texto original.
export function buildIndexMap(str) {
  let normalized = '';
  const map = [];
  for (let i = 0; i < str.length; i++) {
    const n = str[i].normalize('NFD').replace(/[̀-ͯ]/g, '');
    if (n.length === 0) {
      map.push(null);
    } else {
      normalized += n.toLowerCase();
      map.push(i);
    }
  }
  return { text: normalized, map };
}

// Fragmento alrededor de la primera aparición (sin acentos).
export function snippetAround(text, query) {
  let idx = normalize(text).indexOf(normalize(query));
  if (idx === -1) idx = 0;
  const start = Math.max(0, idx - 50);
  const end = Math.min(text.length, idx + query.length + 50);
  return (start > 0 ? '...' : '') + text.substring(start, end) + (end < text.length ? '...' : '');
}

// Bloques de hoja: elementos de texto que no contienen otros bloques.
// Se usa tanto para indexar como para localizar el bloque en el DOM real, así que
// el orden es el mismo en ambos.
export function getLeafBlocks(root) {
  return [...root.querySelectorAll('p, li, blockquote, td, th')].filter(
    (block) =>
      !block.closest('select, option, button') &&
      !block.querySelector('p, li, blockquote, table, td, th, button') &&
      block.textContent.replace(/\s+/g, ' ').trim(),
  );
}
