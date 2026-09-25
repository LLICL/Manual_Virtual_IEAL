// Puente Capacitor: abre enlaces externos y descargas fuera del WebView.
// En navegador normal no hace nada (no existe window.Capacitor).
function openExternal(url) {
  try {
    const browser = window.Capacitor?.Plugins?.Browser;
    if (browser) {
      browser.open({ url });
      return true;
    }
  } catch {
    /* cae al comportamiento por defecto */
  }
  return false;
}

document.addEventListener('click', (e) => {
  const a = e.target?.closest?.('a[href]');
  if (!a) return;
  const href = a.getAttribute('href') || '';
  const isExternal = a.getAttribute('target') === '_blank' || a.hasAttribute('download');
  if (!isExternal) return;
  if (/^(https?:)?\/\//i.test(href) || a.hasAttribute('download')) {
    if (openExternal(a.href)) e.preventDefault();
  }
});
