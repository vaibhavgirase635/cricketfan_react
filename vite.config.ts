import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';

// Plugin to handle SPA routing in preview mode
const spaFallbackPlugin = (): Plugin => ({
  name: 'spa-fallback',
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      // If the request is for a route (not a file), serve index.html
      const url = (req as any).url;
      if (url && !url.includes('.') && url !== '/') {
        (req as any).url = '/';
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spaFallbackPlugin()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    port: 5173,
    strictPort: false,
    open: false,
  },
});
