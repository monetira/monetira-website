import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // PREVIEW: the site is served at https://monetira.github.io/monetira-website/
  // LAUNCH: when monetira.com is connected, change this to '/'
  base: '/monetira-website/',
  plugins: [react(), tailwindcss()],
})
