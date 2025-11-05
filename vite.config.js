// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Root-relative paths for proper deployment
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 5000,
  },
  // Ensure proper handling of assets
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.mp3'],
  optimizeDeps: {
    include: ['three']
  }
});
