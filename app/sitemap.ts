import type { MetadataRoute } from 'next'

export default function Sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.sujalbhavsar.in/",
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: "https://www.sujalbhavsar.in/project/ai-powered-whiteboard",
            lastModified: new Date(),
            priority: 0.7,
            images: ['/ai-powered-whiteboard.png']
        },
        {
            url: "https://www.sujalbhavsar.in/project/livepaste",
            lastModified: new Date(),
            priority: 0.7,
            images: ['/livepaste-project.png']
        },
        {
            url: "https://www.sujalbhavsar.in/project/market-mitra",
            lastModified: new Date(),
            priority: 0.7,
            images: ['/market-mitra-project.png']
        },
        {
            url: "https://www.sujalbhavsar.in/blog/welcome-to-my-blog",
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: "https://www.sujalbhavsar.in/blog/How-to-dockerize-fast-api-python-code",
            lastModified: new Date(),
            priority: 0.8,
        },
    ]
}
