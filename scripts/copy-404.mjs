// Runs after the build.
// 1. Copies index.html to 404.html so unknown addresses show the site's own 404 page.
// 2. Gives each real page its own index.html with that page's title, description
//    and canonical address, so search engines and link previews see the right
//    details and each page returns a normal response.
// 3. Writes sitemap.xml from the same list (private pages are left out).
// Page titles and descriptions live in src/data/seo.json.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const seo = JSON.parse(readFileSync('src/data/seo.json', 'utf8'))
const base = readFileSync('dist/index.html', 'utf8')
writeFileSync(
  'dist/404.html',
  base
    .replace(/\s*<link rel="canonical"[^>]*>/, '')
    .replace(/<title>[^<]*<\/title>/, '<title>Page Not Found | Monetira</title>\n    <meta name="robots" content="noindex" />'),
)

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const sitemap = []

for (const [path, page] of Object.entries(seo.pages)) {
  const url = seo.siteUrl + (path === '/' ? '/' : path)
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(page.title)}</title>`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(page.title)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
  if (page.description) {
    html = html
      .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(page.description)}`)
      .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(page.description)}`)
  }
  if (page.noindex) {
    html = html
      .replace(/\s*<link rel="canonical"[^>]*>/, '')
      .replace('</title>', '</title>\n    <meta name="robots" content="noindex, nofollow" />')
  } else {
    sitemap.push(url)
  }
  if (path === '/') {
    writeFileSync('dist/index.html', html)
  } else {
    mkdirSync(`dist${path}`, { recursive: true })
    writeFileSync(`dist${path}/index.html`, html)
  }
}

writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    sitemap.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
    `\n</urlset>\n`,
)
console.log(`Wrote 404.html, ${Object.keys(seo.pages).length} page files and sitemap.xml (${sitemap.length} URLs)`)
