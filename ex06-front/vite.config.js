import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const apiOrigin = process.env.API_ORIGIN || 'http://localhost:8080'
const proxy = {
  '/members': { target: apiOrigin, changeOrigin: true },
  '/products': { target: apiOrigin, changeOrigin: true },
}

export default defineConfig({
  plugins: [react()],
  server: { proxy },
  preview: { proxy },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
})
