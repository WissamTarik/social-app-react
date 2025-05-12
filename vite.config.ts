import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   // Alias paths
   resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@router': '/src/router',
      '@context': '/src/context',
      '@hooks': '/src/hooks',
      '@redux': '/src/Libraries/Redux',
      '@layout': '/src/layout',
      '@customTypes': '/src/sharedData',
      '@validation': '/src/Validation',
      '@axiosGlobal': '/src/Libraries/axios',
      '@interfaces': '/src/interfaces',
      '@feedback': '/src/Feedback',
      
    },
  }
})
