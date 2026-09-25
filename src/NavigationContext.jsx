import { createContext, useContext } from 'react';

// go(sectionId, { skipScroll, target }) navega; `target` (búsqueda) trae
// { query, blockIndex, panels } para abrir pestañas internas y resaltar.
export const NavigationContext = createContext({
  current: null,
  target: null,
  go: () => {},
});

export const useNavigation = () => useContext(NavigationContext);
