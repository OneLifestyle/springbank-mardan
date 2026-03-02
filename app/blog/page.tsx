import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import {
  filterPostsByFacets,
  getAllCategories,
  getAllTags,
  toFacetSlug,
} from "@/lib/blog";

type BlogIndexProps = {
  searchParams?: Promise<{
    category?: string | string[];
    tag?: string | string[];
    page?: string | string[];
  }>;
};

export async function generateMetadata({ searchParams }: BlogIndexProps): Promise<Metadata> {
  const params = await searchParams;
  const activeCategory = firstParam(params?.category)?.toLowerCase();
  const activeTag = firstParam(params?.tag)?.toLowerCase();

  return {
    title: "South Gippsland Real Estate Blog | Buyer Guides and Insights",
    description:
      "Buyer-focused South Gippsland real estate blog with guides on acreage for sale, township comparisons, and lifestyle-property inspection strategy.",
    alternates: {
      canonical: "https://springbankmardan.com/blog",
    },
    robots:
      activeCategory || activeTag
        ? {
            index: false,
            follow: true,
          }
        : undefined,
    openGraph: {
      title: "South Gippsland Real Estate Blog | Buyer Guides and Insights",
      description:
        "Buyer-focused South Gippsland real estate insights with practical guides for acreage and lifestyle-property searches.",
      url: "https://springbankmardan.com/blog",
      siteName: "Springbank Mardan",
      type: "website",
      images: [
        {
          url: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-dam-view.jpg",
          width: 1200,
          height: 630,
          alt: "South Gippsland real estate blog",
        },
      ],
    },
  };
}

function firstParam(value?: string | string[]): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export default async function BlogIndexPage({ searchParams }: BlogIndexProps) {
  const params = await searchParams;
  const activeCategory = firstParam(params?.category)?.toLowerCase();
  const activeTag = firstParam(params?.tag)?.toLowerCase();
  const requestedPage = Number(firstParam(params?.page) ?? "1");

  const posts = filterPostsByFacets(activeCategory, activeTag);
  const pageSize = 5;
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const currentPage =
    Number.isFinite(requestedPage) && requestedPage > 0
      ? Math.min(Math.floor(requestedPage), totalPages)
      : 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedPosts = posts.slice(startIndex, startIndex + pageSize);
  const categories = getAllCategories();
  const tags = getAllTags();
  const hasFilter = Boolean(activeCategory || activeTag);

  function buildBlogHref(page: number): string {
    const query = new URLSearchParams();
    if (activeCategory) query.set("category", activeCategory);
    if (activeTag) query.set("tag", activeTag);
    if (!activeCategory && !activeTag) {
      return page > 1 ? `/blog/page/${page}` : "/blog";
    }
    if (page > 1) query.set("page", String(page));
    const qs = query.toString();
    return qs ? `/blog?${qs}` : "/blog";
  }

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://springbankmardan.com" },
          { name: "Blog", item: "https://springbankmardan.com/blog" },
        ]}
      />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to main listing
          </Link>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Springbank Journal
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            South Gippsland property and lifestyle articles
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A long-form blog covering lifestyle property in South Gippsland, with practical context
            for buyers comparing town access, land, gardens, and long-stay liveability.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Start with{" "}
            <Link href="/" className="text-primary underline-offset-4 hover:underline">
              this Mardan lifestyle property for sale
            </Link>
            , view{" "}
            <Link href="/open-home" className="text-primary underline-offset-4 hover:underline">
              open-home details
            </Link>
            , or{" "}
            <Link href="/#contact" className="text-primary underline-offset-4 hover:underline">
              contact the agent
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span>{posts.length} post{posts.length === 1 ? "" : "s"}</span>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            {activeCategory && <span>Category filter: {activeCategory.replace(/-/g, " ")}</span>}
            {activeTag && <span>Tag filter: {activeTag.replace(/-/g, " ")}</span>}
            {hasFilter && (
              <Link href="/blog" className="text-primary underline-offset-4 hover:underline">
                Clear filters
              </Link>
            )}
          </div>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr),280px]">
          <section className="grid gap-6">
            {!activeCategory && !activeTag && currentPage === 1 && (
              <article className="rounded-xl border border-border bg-card p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.14em] text-primary">Property spotlight</p>
                <h2 className="mt-2 font-serif text-2xl text-foreground">
                  Start with listing-focused Springbank guides
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/blog/escape-to-springbank-master-built-mediterranean-sanctuary"
                    className="rounded-lg border border-border px-4 py-3 text-sm text-foreground hover:border-primary"
                  >
                    Mardan Property for Sale: Springbank&apos;s 5-Acre Mediterranean Sanctuary
                  </Link>
                  <Link
                    href="/blog/springbank-inspection-notes-five-details-buyers-notice-first-at-30-omalleys-road"
                    className="rounded-lg border border-border px-4 py-3 text-sm text-foreground hover:border-primary"
                  >
                    South Gippsland Lifestyle Property for Sale: 5 Springbank Inspection Highlights
                  </Link>
                </div>
              </article>
            )}

            {paginatedPosts.map((post) => (
              <article key={post.slug} className="overflow-hidden rounded-xl border border-border bg-card">
                <div className="grid gap-0 md:grid-cols-[1.05fr,1fr]">
                  <div className="relative min-h-[280px]">
                    <Image src={post.heroImage.src} alt={post.heroImage.alt} fill className="object-cover" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>{post.readingTimeMinutes} min read</span>
                    </div>

                    <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-4 text-muted-foreground">{post.excerpt}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.categories.map((category) => (
                        <Link
                          key={category}
                          href={`/blog?category=${toFacetSlug(category)}`}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:border-primary hover:text-foreground"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        Read article
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {posts.length === 0 && (
              <article className="rounded-xl border border-border bg-card p-8">
                <h2 className="font-serif text-2xl text-foreground">No posts match this filter</h2>
                <p className="mt-3 text-muted-foreground">
                  Clear the selected category or tag and all available articles will appear again.
                </p>
                <Link href="/blog" className="mt-5 inline-flex text-primary underline-offset-4 hover:underline">
                  Return to all posts
                </Link>
              </article>
            )}

            {posts.length > 0 && totalPages > 1 && (
              <nav
                aria-label="Blog pagination"
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-4"
              >
                <Link
                  href={buildBlogHref(currentPage - 1)}
                  aria-disabled={currentPage <= 1}
                  className={`rounded-md border px-3 py-2 text-sm transition-colors ${
                    currentPage <= 1
                      ? "pointer-events-none border-border text-muted-foreground/60"
                      : "border-border text-foreground hover:border-primary"
                  }`}
                >
                  Previous
                </Link>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) =>
                    pageNumber === currentPage ? (
                      <span
                        key={pageNumber}
                        aria-current="page"
                        className="rounded-md border border-primary bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
                      >
                        {pageNumber}
                      </span>
                    ) : (
                      <Link
                        key={pageNumber}
                        href={buildBlogHref(pageNumber)}
                        className="rounded-md border border-border px-3 py-2 text-sm text-foreground transition-colors hover:border-primary"
                      >
                        {pageNumber}
                      </Link>
                    )
                  )}
                </div>
                <Link
                  href={buildBlogHref(currentPage + 1)}
                  aria-disabled={currentPage >= totalPages}
                  className={`rounded-md border px-3 py-2 text-sm transition-colors ${
                    currentPage >= totalPages
                      ? "pointer-events-none border-border text-muted-foreground/60"
                      : "border-border text-foreground hover:border-primary"
                  }`}
                >
                  Next
                </Link>
              </nav>
            )}
          </section>

          <aside className="h-fit rounded-xl border border-border bg-card p-5 lg:sticky lg:top-24">
            <h2 className="font-serif text-2xl text-foreground">Filter posts</h2>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Categories
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((category) => {
                const slug = toFacetSlug(category);
                const active = slug === activeCategory;
                return (
                  <Link
                    key={category}
                    href={`/blog?category=${slug}`}
                    className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                    }`}
                  >
                    {category}
                  </Link>
                );
              })}
            </div>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Tags
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => {
                const slug = toFacetSlug(tag);
                const active = slug === activeTag;
                return (
                  <Link
                    key={tag}
                    href={`/blog?tag=${slug}`}
                    className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                    }`}
                  >
                    {tag}
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
