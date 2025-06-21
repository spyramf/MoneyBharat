
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
    // Plugin to serve XML sitemap with correct headers
    {
      name: 'xml-sitemap',
      configureServer(server) {
        server.middlewares.use('/sitemap.xml', (req, res, next) => {
          res.setHeader('Content-Type', 'application/xml');
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use('/sitemap.xml', (req, res, next) => {
          res.setHeader('Content-Type', 'application/xml');
          next();
        });
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize bundle size and splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          charts: ['recharts'],
          animations: ['framer-motion'],
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          icons: ['lucide-react']
        }
      }
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
    // Enable source maps for better debugging
    sourcemap: mode === 'development',
    // Enable minification in production
    minify: mode === 'production' ? 'esbuild' : false,
    // Copy XML sitemap to build output
    assetsInclude: ['**/*.xml']
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react'
    ]
  },
  // Ensure XML files are served correctly
  publicDir: 'public'
}));
