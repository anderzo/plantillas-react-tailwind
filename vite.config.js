import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // <--- 1. Importa el plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  
})
