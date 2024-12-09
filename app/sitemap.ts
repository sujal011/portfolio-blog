import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.sujalbhavsar.in',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.sujalbhavsar.in/project',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.sujalbhavsar.in/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.sujalbhavsar.in/project/ai-powered-whiteboard',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.sujalbhavsar.in/blog/first-blog',
      lastModified: new Date(),
      priority: 0.5,
    },
  ]
}