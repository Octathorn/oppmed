import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    },
    // Optimize for SEO and performance
    minify: 'esbuild',
    target: 'es2015',
    sourcemap: false,
    // Remove console logs in production
    esbuild: {
      drop: ['console', 'debugger']
    }
  },
  server: {
    port: 3000
  },
  preview: {
    port: 4173
  },
  // Optimize for performance
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
