import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Hosted on Cloudflare Pages, which serves the site from the root
  // (both the *.pages.dev preview address and monetira.com).
  base: '/',
  plugins: [react(), tailwindcss()],
})
