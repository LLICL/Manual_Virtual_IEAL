import { useNavigation } from '../NavigationContext';

// Enlace interno a otra sección del manual.
export default function NavLink({ to, children, ...rest }) {
  const { go } = useNavigation();
  return (
    <a
      {...rest}
      href={`#${to}`}
      onClick={(e) => {
        e.preventDefault();
        go(to);
      }}
    >
      {children}
    </a>
  );
}
