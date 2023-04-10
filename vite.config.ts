import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      fileName: 'index',
      name: 'Lcomment',
      formats: ['umd']
    }
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      }
    })
  ]
});
