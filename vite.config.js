import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // Customize your Vite configuration here.
  build: {
    // Output directory for production build
    outDir: 'dist',
  },
  server: {
    // Development server port
    port: 5173,
  },
  resolve: {
    // Alias for importing modules
    alias: {
      '@': '/src',
    },
  },
});
