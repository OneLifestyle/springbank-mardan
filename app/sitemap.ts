import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://springbankmardan.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://springbankmardan.com/south-gippsland",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://springbankmardan.com/leongatha",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://springbankmardan.com/meeniyan",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://springbankmardan.com/mirboo-north",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://springbankmardan.com/wilsons-promontory",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://springbankmardan.com/open-home",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://springbankmardan.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...getAllBlogPosts().map((post) => ({
      url: `https://springbankmardan.com/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return [...staticRoutes, ...blogRoutes];
}
