import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'build') {
    // Build for library
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
      build: {
        lib: {
          entry: resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/index.ts'),
          name: 'Vue3JsonViewer',
          fileName: 'index',
          formats: ['es', 'cjs'],
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue',
            },
            assetFileNames: (assetInfo) => {
              if (assetInfo.name === 'style.css') return 'index.css';
              return assetInfo.name;
            },
            exports: 'named',
          },
        },
        cssCodeSplit: false,
      },
    }
  } else {
    // Development and preview
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
      server: {
        port: 3000,
        open: true,
      },
    }
  }
})
