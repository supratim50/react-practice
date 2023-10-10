import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // impoetand for standardisation
  server: {
    proxy: {
      "/api": 'http://localhost:3000'
    }
  },
  plugins: [react()],
})
