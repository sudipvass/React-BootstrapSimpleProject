import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import inject from '@rollup/plugin-inject';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

  ],
  
})

export default {
  build: {
    rollupOptions: {
      external: ['react-owl-carousel/dist/owl.carousel']
    }
  }
}

