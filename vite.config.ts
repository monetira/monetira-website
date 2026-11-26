import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Hosted on GitHub Pages with the custom domain monetira.com, which serves
  // the site from the root.
  base: '/',
  plugins: [react(), tailwindcss()],
})
