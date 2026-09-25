import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigation } from '../NavigationContext';

const TabsContext = createContext({ active: null, setActive: () => {} });

const cx = (...c) => c.filter(Boolean).join(' ');

// Grupo de pestañas: sin DOM propio, solo comparte la pestaña activa con
// TabButton y TabPanel. Si se llega desde la búsqueda, abre la pestaña que contiene el resultado.
export function Tabs({ ids, initial, children }) {
  const { target } = useNavigation();
  const [active, setActive] = useState(
    () => ids.find((id) => target?.panels?.includes(id)) ?? initial,
  );
  const value = useMemo(() => ({ active, setActive }), [active]);
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
}

export function TabButton({ tab, className, children, ...rest }) {
  const { active, setActive } = useContext(TabsContext);
  return (
    <button
      {...rest}
      data-tab={tab}
      className={cx(className, active === tab && 'active')}
      onClick={() => setActive(tab)}
    >
      {children}
    </button>
  );
}

export function TabPanel({ id, className, children, ...rest }) {
  const { active } = useContext(TabsContext);
  return (
    <div {...rest} id={id} data-panel={id} className={cx(className, active === id && 'active')}>
      {children}
    </div>
  );
}
