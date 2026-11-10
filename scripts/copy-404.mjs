// GitHub Pages serves 404.html for unknown paths. Copying index.html there
// lets direct links like monetira.com/about load the app, which then shows
// the right page (or the site's own 404 page for truly unknown addresses).
import { copyFileSync } from 'node:fs'
copyFileSync('dist/index.html', 'dist/404.html')
console.log('Copied dist/index.html to dist/404.html')
