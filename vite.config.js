// vite.config.js

import { build } from "vite";

export default {
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'mobile-nav': './src/js/mobile-nav.js'
      }
    }
  }
}