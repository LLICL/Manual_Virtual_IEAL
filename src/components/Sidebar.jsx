import { useState } from 'react';
import navigation from '../data/navigation';
import { useNavigation } from '../NavigationContext';

export default function Sidebar({ open }) {
  const { current, go } = useNavigation();
  // Los grupos colapsables empiezan cerrados.
  const [expanded, setExpanded] = useState({});

  const toggle = (title) => setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <aside className={`sidebar${open ? ' open' : ''}`} id="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-title">Contenido</span>
      </div>

      <nav className="sidebar-nav">
        {navigation.map((group) => {
          const isOpen = !group.collapsible || expanded[group.title];
          return (
            <div className="nav-section" key={group.title}>
              {group.collapsible ? (
                <span className="nav-section-title toggle-title" onClick={() => toggle(group.title)}>
                  <span className="toggle-icon">{isOpen ? '▼' : '▶'}</span>
                  {group.title}
                </span>
              ) : (
                <span className="nav-section-title">{group.title}</span>
              )}

              {isOpen &&
                group.items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`nav-item${item.className ? ` ${item.className}` : ''}${
                      current === item.id ? ' active' : ''
                    }`}
                    data-section={item.id}
                    title={item.number ? `${item.number} · ${item.label}` : item.label}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.id);
                    }}
                  >
                    {item.number && <span className="nav-num">{item.number}</span>}
                    <span className="nav-label">{item.label}</span>
                  </a>
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
