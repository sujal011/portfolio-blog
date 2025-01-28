import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/blog/', '/project/', '/about/', '/contact/'],
      disallow: '/private/',
    },
    sitemap: 'https://www.sujalbhavsar.in/sitemap.xml',
  }
}