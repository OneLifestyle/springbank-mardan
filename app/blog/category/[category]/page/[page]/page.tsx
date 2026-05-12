import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndexPage from "../../../../page";
import { BLOG_PAGE_SIZE, filterPostsByFacets, getAllCategories, toFacetSlug } from "@/lib/blog";
import { DEFAULT_BLOG_DESCRIPTION, SITE_URL } from "@/lib/site-schema";

type BlogCategoryPaginationPageProps = {
  params: Promise<{
    category: string;
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
  return getAllCategories().flatMap((category) => {
    const slug = toFacetSlug(category);
    const totalPages = Math.max(1, Math.ceil(filterPostsByFacets(slug).length / BLOG_PAGE_SIZE));

    return Array.from({ length: totalPages }, (_, index) => index + 1)
      .filter((page) => page > 1)
      .map((page) => ({
        category: slug,
        page: String(page),
      }));
  });
}

export async function generateMetadata({
  params,
}: BlogCategoryPaginationPageProps): Promise<Metadata> {
  const { category, page } = await params;
  const pageNumber = Number(page);
  const totalPages = Math.max(1, Math.ceil(filterPostsByFacets(category).length / BLOG_PAGE_SIZE));
  const label = labelFromSlug(category);

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
      canonical: `${SITE_URL}/blog/category/${category}/page/${pageNumber}`,
    },
  };
}

export default async function BlogCategoryPaginationPage({
  params,
}: BlogCategoryPaginationPageProps) {
  const { category, page } = await params;
  const pageNumber = Number(page);
  const totalPages = Math.max(1, Math.ceil(filterPostsByFacets(category).length / BLOG_PAGE_SIZE));

  if (!Number.isFinite(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    notFound();
  }

  return <BlogIndexPage categorySlug={category} pageSlug={page} />;
}
