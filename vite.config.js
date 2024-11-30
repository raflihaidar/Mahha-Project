import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import viteCompression from 'vite-plugin-compression'
import Sitemap from 'vite-plugin-sitemap'

const names = ['accommodation', 'experiences', 'dining']

const dynamicRoutes = names.map((name) => `http://localhost:5173/${name}`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), viteCompression(), Sitemap({ dynamicRoutes })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
