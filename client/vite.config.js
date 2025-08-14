import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(
      
    )
  ],
  server: {
    allowedHosts :['routes-es-fa-emma.trycloudflare.com']
  }
})
