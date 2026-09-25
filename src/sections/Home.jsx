// @manual — el buscador es lógica de React; el resto es el contenido convertido.
import { useMemo, useState } from 'react';
import { AvisoReorganizacion, NavLink } from '../components';
import { useNavigation } from '../NavigationContext';
import { getSearchIndex } from '../search/searchIndex';
import { normalize, snippetAround } from '../search/text';

const MIN_CHARS = 3;
const MAX_PER_SECTION = 6;
const MAX_TOTAL = 40;

function SearchResults({ query, onSelect }) {
  const results = useMemo(() => {
    const q = normalize(query);
    const perSection = {};
    const out = [];
    for (const entry of getSearchIndex()) {
      if (out.length >= MAX_TOTAL) break;
      if (!normalize(entry.text).includes(q)) continue;
      const count = perSection[entry.sectionId] || 0;
      if (count >= MAX_PER_SECTION) continue;
      perSection[entry.sectionId] = count + 1;
      out.push(entry);
    }
    return out;
  }, [query]);

  if (!results.length) {
    return <div className="home-search-no-results">No se encontraron resultados para "{query}"</div>;
  }
  return results.map((r) => (
    <a
      key={`${r.sectionId}-${r.blockIndex}`}
      className="home-search-result-item"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onSelect(r);
      }}
    >
      <span className="home-search-result-section">
        {r.tabLabel ? `${r.sectionName} · ${r.tabLabel}` : r.sectionName}
      </span>
      {snippetAround(r.text, query)}
    </a>
  ));
}

export default function Home() {
  const { go } = useNavigation();
  const [value, setValue] = useState('');
  const query = value.trim();

  const openResult = (r) =>
    go(r.sectionId, {
      skipScroll: true,
      target: { query, blockIndex: r.blockIndex, panels: r.panels },
    });

  return (
    <>
      <div className="home-hero">
        <p className="home-hero-subtitle">
          Institución Educativa Antonio Lenis
        </p>
        <h2 className="home-hero-title">
          Manual de convivencia
        </h2>
        <a href="archives/RESOLUCION_MANUAL_IEANL_2026.pdf" download className="home-hero-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {" "}
          Descargar Manual
          {" "}
        </a>
        {" "}
        <span className="home-hero-info">
          PDF · 7.2 MB
        </span>
      </div>
      <div className="home-search">
        <svg className="home-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input type="text" className="home-search-input" placeholder="Buscar un artículo del manual" autoComplete="off" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div className="home-search-results" style={{ display: query.length >= MIN_CHARS ? "block" : "none" }}>
        {query.length >= MIN_CHARS && <SearchResults query={query} onSelect={openResult} />}
      </div>
      <p className="home-grid-label">
        Accesos rápidos
      </p>
      <div className="home-grid">
        <NavLink to="cap-1" className="home-card">
          <div className="home-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="home-card-title">
            Identificación institucional
          </span>
          {" "}
          <span className="home-card-desc">
            Rector, NIT y correos
          </span>
        </NavLink>
        {" "}
        <NavLink to="cap-13" className="home-card">
          <div className="home-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              <path d="M9 14l2 2 4-4" />
            </svg>
          </div>
          <span className="home-card-title">
            Deberes Académicos
          </span>
          {" "}
          <span className="home-card-desc">
            Deberes del estudiante en la institución
          </span>
        </NavLink>
        {" "}
        <NavLink to="cap-11" className="home-card">
          <div className="home-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              <path d="M9 14l2 2 4-4" />
            </svg>
          </div>
          <span className="home-card-title">
            Matrícula
          </span>
          {" "}
          <span className="home-card-desc">
            Inscripción, matrícula y permanencia
          </span>
        </NavLink>
        {" "}
        <NavLink to="cap-22" className="home-card">
          <div className="home-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <span className="home-card-title">
            Rutas de atención
          </span>
          {" "}
          <span className="home-card-desc">
            Procedimientos de concertación
          </span>
        </NavLink>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
        <NavLink to="cap-55" className="home-directory-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {" "}
          Directorio Telefónico
          {" "}
        </NavLink>
      </div>
      <AvisoReorganizacion />
    </>
  );
}
