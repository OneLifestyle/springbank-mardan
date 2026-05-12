import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndexPage from "../../page";
import { filterPostsByFacets, getAllTags, toFacetSlug } from "@/lib/blog";
import { DEFAULT_BLOG_DESCRIPTION, SITE_URL } from "@/lib/site-schema";

type BlogTagPageProps = {
  params: Promise<{
    tag: string;
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
  return getAllTags().map((tag) => ({
    tag: toFacetSlug(tag),
  }));
}

export async function generateMetadata({ params }: BlogTagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const label = labelFromSlug(tag);
  const canonical = `${SITE_URL}/blog/tag/${tag}`;

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

export default async function BlogTagPage({ params }: BlogTagPageProps) {
  const { tag } = await params;

  if (filterPostsByFacets(undefined, tag).length === 0) {
    notFound();
  }

  return <BlogIndexPage tagSlug={tag} />;
}
