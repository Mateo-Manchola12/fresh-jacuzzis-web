import type { APIRoute } from 'astro'
import { DOMAIN_NAME, INDEXABLE } from '@/constants/static_paths'

console.log('robots', DOMAIN_NAME, INDEXABLE)

const getRobotsTxt = (sitemapURL: URL): string => {
  if (!INDEXABLE) {
    return `
User-agent: *
Disallow: /
`
  }

  return `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`
}

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site)
  const body = getRobotsTxt(sitemapURL)

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
