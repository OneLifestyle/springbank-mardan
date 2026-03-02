import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndexPage from "../../page";

type BlogPaginationPageProps = {
  params: Promise<{
    page: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPaginationPageProps): Promise<Metadata> {
  const { page } = await params;
  const pageNumber = Number(page);

  if (!Number.isFinite(pageNumber) || pageNumber < 2) {
    return {
      title: "South Gippsland Real Estate Blog | Buyer Guides and Insights",
      description:
        "Buyer-focused South Gippsland real estate blog with guides on acreage for sale and lifestyle-property strategy.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: `South Gippsland Real Estate Blog | Page ${pageNumber}`,
    description:
      "Browse buyer-focused South Gippsland real estate blog posts, including acreage and lifestyle-property search guidance.",
    alternates: {
      canonical: `https://springbankmardan.com/blog/page/${pageNumber}`,
    },
  };
}

export default async function BlogPaginationPage({
  params,
}: BlogPaginationPageProps) {
  const { page } = await params;
  const pageNumber = Number(page);

  if (!Number.isFinite(pageNumber) || pageNumber < 2) {
    notFound();
  }

  return <BlogIndexPage searchParams={Promise.resolve({ page })} />;
}
