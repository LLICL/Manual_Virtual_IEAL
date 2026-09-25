import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' para que los recursos carguen también dentro del WebView de Capacitor.
export default defineConfig({
  base: './',
  plugins: [react()],
});
