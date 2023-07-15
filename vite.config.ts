import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: [{
        axios: [
          ['default', 'axios'],
        ],
      }],
      dirs: ['./src/utils'],
    }),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
