import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import Sidebar from './components/Sidebar';
import { NavigationContext } from './NavigationContext';
import sections from './sections';
import { clearHighlights, highlightIn } from './search/highlight';

const HEADER_HEIGHT = 72; // header fijo
const MOBILE_MAX_WIDTH = 768;

export default function App() {
  const [current, setCurrent] = useState('cap-home');
  const [target, setTarget] = useState(null); // { query, blockIndex, panels } al llegar desde la búsqueda
  const [scroll, setScroll] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const go = useCallback((id, { skipScroll = false, target = null } = {}) => {
    setCurrent(id);
    setTarget(target);
    setScroll(!skipScroll);
    if (window.innerWidth <= MOBILE_MAX_WIDTH) setSidebarOpen(false);
  }, []);

  // Bloquea el scroll de fondo mientras el menú está abierto.
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
  }, [sidebarOpen]);

  // Tras montar la sección: scroll a su inicio, o resaltado del resultado de búsqueda.
  useLayoutEffect(() => {
    const panel = document.getElementById(current);
    clearHighlights();
    if (!panel) return;
    if (target) {
      const el = highlightIn(panel, target.query, target.blockIndex);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (scroll) {
      const top = panel.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [current, target, scroll]);

  const nav = useMemo(() => ({ current, target, go }), [current, target, go]);
  const Section = sections[current];

  return (
    <NavigationContext.Provider value={nav}>
      <header className="header">
        <button className="menu-btn" title="Abrir menú" onClick={() => setSidebarOpen((o) => !o)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        <div className="header-content">
          <img src="images/escudo_ieal.jpeg" alt="Escudo" className="header-logo" />
          <div className="header-text">
            <span className="header-type">Institución Educativa</span>
            <h1 className="header-title">Antonio Lenis</h1>
          </div>
        </div>

        <div className="header-spacer" />
        <button
          className="aviso-header-btn"
          type="button"
          title="Ver aviso de reorganización estructural"
          aria-label="Ver aviso de reorganización estructural"
          onClick={() => {
            try {
              window.localStorage?.removeItem('ieal_aviso_reorg_no_mostrar');
            } catch {
              /* sin storage: igual reabre en la sesión */
            }
            go('cap-home');
            window.setTimeout(() => {
              window.dispatchEvent(new CustomEvent('ieal:mostrar-aviso'));
            }, 100);
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </button>
      </header>

      <div className="main-container">
        <Sidebar open={sidebarOpen} />
        <div
          className={`sidebar-overlay${sidebarOpen ? ' show' : ''}`}
          onClick={() => setSidebarOpen(false)}
        />

        <main className="content">
          <section className="section-panel active" id={current}>
            <Section />
          </section>
        </main>

        <button
          className={`home-fab${current !== 'cap-home' ? ' visible' : ''}`}
          title="Volver al inicio"
          onClick={() => go('cap-home')}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </button>
      </div>
    </NavigationContext.Provider>
  );
}
