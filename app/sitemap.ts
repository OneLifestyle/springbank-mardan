import type { MetadataRoute } from "next";
import { questionPages } from "@/lib/aeo-questions";
import { getAllBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts();

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
      url: "https://springbankmardan.com/foster",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://springbankmardan.com/fish-creek",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://springbankmardan.com/korumburra",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://springbankmardan.com/inverloch",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://springbankmardan.com/venus-bay",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://springbankmardan.com/sandy-point",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://springbankmardan.com/waratah-bay",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://springbankmardan.com/walkerville",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://springbankmardan.com/open-home",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: "https://springbankmardan.com/gallery",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://springbankmardan.com/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://springbankmardan.com/questions",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const questionRoutes: MetadataRoute.Sitemap = questionPages.map((page) => ({
    url: `https://springbankmardan.com/questions/${page.slug}`,
    lastModified: new Date(page.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

  const blogRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://springbankmardan.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...blogPosts.map((post) => ({
      url: `https://springbankmardan.com/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return [...staticRoutes, ...questionRoutes, ...blogRoutes];
}
