import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
      port: 5174, // Change the port to your desired port number
      host: 'localhost', // Change the host if needed
      open: '/', // Specify the URL path to open in the browser, e.g., '/myapp'
    },
})
