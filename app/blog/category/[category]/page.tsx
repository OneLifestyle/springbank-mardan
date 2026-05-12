import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndexPage from "../../page";
import { filterPostsByFacets, getAllCategories, toFacetSlug } from "@/lib/blog";
import { DEFAULT_BLOG_DESCRIPTION, SITE_URL } from "@/lib/site-schema";

type BlogCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

function labelFromSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category: toFacetSlug(category),
  }));
}

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const label = labelFromSlug(category);
  const canonical = `${SITE_URL}/blog/category/${category}`;

  return {
    title: `${label} Articles | Springbank Journal`,
    description: DEFAULT_BLOG_DESCRIPTION,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${label} Articles | Springbank Journal`,
      description: DEFAULT_BLOG_DESCRIPTION,
      url: canonical,
      type: "website",
    },
  };
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { category } = await params;

  if (filterPostsByFacets(category).length === 0) {
    notFound();
  }

  return <BlogIndexPage categorySlug={category} />;
}
