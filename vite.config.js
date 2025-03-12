import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css : {
    modules : {
      localsConvention : 'camelCase'
    },
  },
  build: {
    assetsDir: 'assets', // Ensures assets are placed in an 'assets' folder in the dist directory
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
})

