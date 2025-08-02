import { MetadataRoute } from 'next'
 
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stovamedia.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/consultation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
