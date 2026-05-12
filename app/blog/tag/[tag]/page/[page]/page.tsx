import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndexPage from "../../../../page";
import { BLOG_PAGE_SIZE, filterPostsByFacets, getAllTags, toFacetSlug } from "@/lib/blog";
import { DEFAULT_BLOG_DESCRIPTION, SITE_URL } from "@/lib/site-schema";

type BlogTagPaginationPageProps = {
  params: Promise<{
    tag: string;
    page: string;
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
  return getAllTags().flatMap((tag) => {
    const slug = toFacetSlug(tag);
    const totalPages = Math.max(1, Math.ceil(filterPostsByFacets(undefined, slug).length / BLOG_PAGE_SIZE));

    return Array.from({ length: totalPages }, (_, index) => index + 1)
      .filter((page) => page > 1)
      .map((page) => ({
        tag: slug,
        page: String(page),
      }));
  });
}

export async function generateMetadata({ params }: BlogTagPaginationPageProps): Promise<Metadata> {
  const { tag, page } = await params;
  const pageNumber = Number(page);
  const totalPages = Math.max(1, Math.ceil(filterPostsByFacets(undefined, tag).length / BLOG_PAGE_SIZE));
  const label = labelFromSlug(tag);

  if (!Number.isFinite(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    return {
      title: `${label} Articles | Springbank Journal`,
      description: DEFAULT_BLOG_DESCRIPTION,
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: `${label} Articles | Page ${pageNumber} | Springbank Journal`,
    description: DEFAULT_BLOG_DESCRIPTION,
    alternates: {
      canonical: `${SITE_URL}/blog/tag/${tag}/page/${pageNumber}`,
    },
  };
}

export default async function BlogTagPaginationPage({ params }: BlogTagPaginationPageProps) {
  const { tag, page } = await params;
  const pageNumber = Number(page);
  const totalPages = Math.max(1, Math.ceil(filterPostsByFacets(undefined, tag).length / BLOG_PAGE_SIZE));

  if (!Number.isFinite(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    notFound();
  }

  return <BlogIndexPage tagSlug={tag} pageSlug={page} />;
}
