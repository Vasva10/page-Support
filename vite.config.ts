import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  server: {
    port: 3000,
    host: true,
    allowedHosts: ['support-page.whitebird.io'],
  },
  plugins: [react()],
})
