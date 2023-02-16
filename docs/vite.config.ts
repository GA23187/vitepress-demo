import { defineConfig } from 'vite'
import { resolve } from 'path'
// import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig((app) => {
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, '.'),
      },
    },
    plugins: [],
  }
})
