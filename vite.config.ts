import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {liveDesigner} from '@pinegrow/vite-plugin'
import AutoImportComponents from 'unplugin-vue-components/vite'
import {IonicResolver} from 'unplugin-vue-components/resolvers'
import AutoImportAPIs from 'unplugin-auto-import/vite'
// import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    liveDesigner({
      //...
    }),
    vue(),
    AutoImportComponents({
      // dirs: ['src/components'], // default
      resolvers: [IonicResolver()], // Auto-import using resolvers
      dts: 'components.d.ts',
    }),
    // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
    AutoImportAPIs({
      imports: [
        'vue',
        'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        // '@vueuse/core',
        'pinia',
      ],
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
      dts: 'auto-imports.d.ts',
    }),
    // VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '~~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})
