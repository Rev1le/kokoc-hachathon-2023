import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  plugins: [svelte({
    preprocess: sveltePreprocess(),
          // we'll extract any component CSS out into
          // a separate file — better for performance
          css: css => {
            css.write('public/bundle.css')
          },
        })]
  // server: {
  //   cors: false
  // }
})
