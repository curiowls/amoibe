import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'index-v2-draft': resolve(__dirname, 'index-v2-draft.html'),
        'color-exploration': resolve(__dirname, 'color-exploration.html'),
        'design-system': resolve(__dirname, 'design-system.html'),
      }
    }
  }
})
