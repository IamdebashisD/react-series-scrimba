import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all network interfaces
    strictPort: true,
    port: 5173, // Your Vite port (usually 5173)
    allowedHosts: [
      'd62f5d6dfd86.ngrok-free.app', // Your ngrok URL
      '.ngrok-free.app' // Wildcard for all ngrok URLs
    ]
  }
})
