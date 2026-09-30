import { useState } from 'react';
import navigation from '../data/navigation';
import { useNavigation } from '../NavigationContext';

const conHijos = (item) => Boolean(item.children?.length);
const dentroDe = (item, current) =>
  item.id === current ||
  Boolean((item.children ?? []).some((c) => c.id === current || dentroDe(c, current)));
// Un item `collapsible` es solo un grupo: su fila despliega, nunca navega.
const esGrupo = (item) => Boolean(item.collapsible && item.children?.length);

// Item con `children`: el caret abre/cierra y el texto navega y despliega.
function NavItem({ data, current, go, toggle, alterna, abrir, nivel = 0 }) {
  const hijos = data.children ?? [];
  const porDefecto = Boolean(hijos.some((c) => dentroDe(c, current)));
  const isOpen = (toggle[data.id] ?? porDefecto) && hijos.length > 0;
  const soloDesplega = esGrupo(data);
  const cambiar = () => alterna(data.id, porDefecto);

  return (
    <>
      <a
        href={`#${data.id}`}
        className={`nav-item${nivel > 0 ? ' nav-item--sub' : ''}${
          nivel > 1 ? ` nav-item--nivel-${nivel}` : ''
        }${data.className ? ` ${data.className}` : ''}${
          current === data.id ? ' active' : ''
        }`}
        data-section={data.id}
        title={data.number ? `${data.number} · ${data.label}` : data.label}
        onClick={(e) => {
          e.preventDefault();
          if (soloDesplega) {
            cambiar();
            return;
          }
          go(data.id);
          if (hijos.length) abrir(data.id);
        }}
      >
        {hijos.length > 0 && (
          <span
            className="nav-caret"
            role="button"
            tabIndex={-1}
            aria-label={isOpen ? 'Contraer' : 'Desplegar'}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              cambiar();
            }}
          >
            {isOpen ? '▼' : '▶'}
          </span>
        )}
        {data.number && <span className="nav-num">{data.number}</span>}
        <span className="nav-label">{data.label}</span>
      </a>

      {isOpen &&
        hijos.map((hijo) => (
          <NavItem
            key={hijo.id}
            data={hijo}
            current={current}
            go={go}
            toggle={toggle}
            alterna={alterna}
            abrir={abrir}
            nivel={nivel + 1}
          />
        ))}
    </>
  );
}

export default function Sidebar({ open }) {
  const { current, go } = useNavigation();
  // Estado manual de apertura; lo que el usuario no tocó se deduce de la sección actual.
  const [toggle, setToggle] = useState({});

  const alterna = (key, porDefecto) =>
    setToggle((prev) => ({ ...prev, [key]: !(prev[key] ?? porDefecto) }));

  const abrir = (key) => setToggle((prev) => ({ ...prev, [key]: true }));

  return (
    <aside className={`sidebar${open ? ' open' : ''}`} id="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-title">Contenido</span>
      </div>

      <nav className="sidebar-nav">
        {navigation.map((group) => {
          if (group.separator) {
            return (
              <div className="nav-bloque" key={group.title}>
                {group.title}
              </div>
            );
          }
          const porDefecto = group.items.some((i) => dentroDe(i, current));
          const isOpen = !group.collapsible || (toggle[group.title] ?? porDefecto);
          return (
            <div className="nav-section" key={group.title}>
              {group.collapsible ? (
                group.id ? (
                  <a
                    href={`#${group.id}`}
                    className={`nav-section-title toggle-title${current === group.id ? ' active' : ''}`}
                    data-section={group.id}
                    onClick={(e) => {
                      e.preventDefault();
                      go(group.id);
                      abrir(group.title);
                    }}
                  >
                    <span
                      className="toggle-icon"
                      role="button"
                      tabIndex={-1}
                      aria-label={isOpen ? 'Contraer' : 'Desplegar'}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        alterna(group.title, porDefecto);
                      }}
                    >
                      {isOpen ? '▼' : '▶'}
                    </span>
                    {group.title}
                  </a>
                ) : (
                  <span
                    className="nav-section-title toggle-title"
                    onClick={() => alterna(group.title, porDefecto)}
                  >
                    <span className="toggle-icon">{isOpen ? '▼' : '▶'}</span>
                    {group.title}
                  </span>
                )
              ) : (
                <span className="nav-section-title">{group.title}</span>
              )}

              {isOpen &&
                group.items.map((i) => (
                  <NavItem
                    key={i.id}
                    data={i}
                    current={current}
                    go={go}
                    toggle={toggle}
                    alterna={alterna}
                    abrir={abrir}
                  />
                ))}
            </div>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <span className="footer-year">IEAL 2026</span>
        <br />
        <a href="https://www.antoniolenis.edu.co/" target="_blank" rel="noreferrer" style={{ color: 'var(--green)' }}>
          www.antoniolenis.edu.co
        </a>
      </div>
    </aside>
  );
}
