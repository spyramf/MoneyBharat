
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
    // Aggressive bundle optimization for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Critical vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          // UI components in separate chunks
          'ui-core': [
            '@radix-ui/react-accordion', 
            '@radix-ui/react-dialog',
            '@radix-ui/react-popover',
            '@radix-ui/react-slider'
          ],
          'ui-form': [
            '@radix-ui/react-radio-group',
            'react-hook-form'
          ],
          'icons': ['lucide-react']
        },
        // Optimize chunk names for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId;
          const fileName = facadeModuleId 
            ? facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '') || 'chunk'
            : 'chunk';
          return `assets/${fileName}-[hash].js`;
        },
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 300,
    // Disable source maps in production for smaller bundles
    sourcemap: false,
    // Enable aggressive minification
    minify: 'esbuild',
    // Remove CSS code splitting to reduce requests
    cssCodeSplit: false,
    // Enable compression
    reportCompressedSize: false, // Disable to speed up build
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Enable tree shaking
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      'react-hook-form'
    ],
    exclude: [
      'framer-motion' // Large animation library
    ]
  },
  // Enable CSS optimization
  css: {
    devSourcemap: false,
    // Inline small CSS files
    postcss: {
      plugins: []
    }
  },
  // Performance optimizations
  esbuild: {
    // Remove console logs in production
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  }
}));
