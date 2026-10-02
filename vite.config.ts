import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // host: true deixa abrir o site pelo celular na mesma rede Wi-Fi
  server: { host: true },
})
