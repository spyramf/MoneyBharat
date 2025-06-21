
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Aggressive bundle optimization
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
          icons: ['lucide-react']
        }
      }
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 500,
    // Enable source maps only in development
    sourcemap: mode === 'development',
    // Enable aggressive minification
    minify: 'esbuild',
    // Remove CSS code splitting to reduce requests
    cssCodeSplit: false,
    // Enable compression
    reportCompressedSize: true,
    // Target modern browsers for smaller bundles
    target: 'es2020'
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react'
    ],
    exclude: [
      'framer-motion',
      'recharts',
      'embla-carousel-react'
    ]
  },
  // Enable CSS optimization
  css: {
    devSourcemap: mode === 'development'
  }
}));
