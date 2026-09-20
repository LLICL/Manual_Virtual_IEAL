/* Puente Capacitor: abre enlaces externos y descargas fuera del WebView.
   En navegador normal no hace nada (guarda window.Capacitor). */
(function () {
  function openExternal(url) {
    try {
      if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Browser) {
        window.Capacitor.Plugins.Browser.open({ url: url });
        return true;
      }
    } catch (e) { /* cae al comportamiento por defecto */ }
    return false;
  }

  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var isExternal = a.getAttribute('target') === '_blank' || a.hasAttribute('download');
    if (!isExternal) return;
    if (/^(https?:)?\/\//i.test(href) || a.hasAttribute('download')) {
      if (openExternal(a.href)) e.preventDefault();
    }
  });
})();
