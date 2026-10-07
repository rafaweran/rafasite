import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { routes, SITE_URL } from './src/seo.js'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// After build, write dist/<route>/index.html with that route's title, description, canonical and Open Graph tags.
function prerenderHead() {
  return {
    name: 'prerender-head',
    apply: 'build',
    closeBundle() {
      const base = readFileSync(resolve('dist/index.html'), 'utf8')
      for (const [path, r] of Object.entries(routes)) {
        const url = `${SITE_URL}${path === '/' ? '/' : path}`
        const html = base
          .replace(/<title>.*?<\/title>/, `<title>${esc(r.title)}</title>`)
          .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(r.description)}`)
          .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
          .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
          .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(r.title)}`)
          .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(r.description)}`)
        const dir = resolve('dist', `.${path}`)
        mkdirSync(dir, { recursive: true })
        writeFileSync(resolve(dir, 'index.html'), html)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), prerenderHead()],
})
