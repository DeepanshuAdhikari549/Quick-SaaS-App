import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@clerk/clerk-react': fileURLToPath(new URL('./src/clerkMock.jsx', import.meta.url)),
      'axios': fileURLToPath(new URL('./src/axiosMock.js', import.meta.url))
    }
  }
})
