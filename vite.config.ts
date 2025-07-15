import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import Inspect from 'vite-plugin-inspect';

// https://vite.dev/config/
export default defineConfig(({ command, mode, isPreview }) => {
  console.log(`[vite] mode: ${mode}, command: ${command}, isPreview: ${isPreview}`);

  return {
    plugins: [react(), Inspect()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './tests/setup.ts',
    },

    /* run development server on port 3000 */
    server: {
      port: 3000,
    },

    /* preload package for build */
    optimizeDeps: {
      include: ['react', 'react-dom', 'axios'],
    },

    /* run preview server on port 8080 */
    preview: {
      port: 8080,
      open: true,
    },

    /* source map when build */
    build: {
      sourcemap: false,
    },
  };
});
