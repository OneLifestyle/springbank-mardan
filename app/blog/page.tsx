import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  filterPostsByFacets,
  getAllCategories,
  getAllTags,
  toFacetSlug,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "South Gippsland Property Journal | Springbank Mardan",
  description:
    "Property and lifestyle articles focused on South Gippsland real estate, tree-change living, and regional buyer insights around Mardan, Leongatha, Meeniyan, Mirboo North, and Wilsons Promontory.",
  alternates: {
    canonical: "https://springbankmardan.com/blog",
  },
  openGraph: {
    title: "South Gippsland Property Journal",
    description:
      "Long-form articles on lifestyle property, regional relocation, and South Gippsland buyer context.",
    url: "https://springbankmardan.com/blog",
    siteName: "Springbank Mardan",
    type: "website",
    images: [
      {
        url: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-dam-view.jpg",
        width: 1200,
        height: 630,
        alt: "Springbank and Tarwin Valley setting",
      },
    ],
  },
};

type BlogIndexProps = {
  searchParams?: Promise<{
    category?: string | string[];
    tag?: string | string[];
  }>;
};

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

  const posts = filterPostsByFacets(activeCategory, activeTag);
  const categories = getAllCategories();
  const tags = getAllTags();
  const hasFilter = Boolean(activeCategory || activeTag);

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl">
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
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span>{posts.length} post{posts.length === 1 ? "" : "s"}</span>
            {activeCategory && <span>Category filter: {activeCategory.replace(/-/g, " ")}</span>}
            {activeTag && <span>Tag filter: {activeTag.replace(/-/g, " ")}</span>}
            {hasFilter && (
              <Link href="/blog" className="text-primary underline-offset-4 hover:underline">
                Clear filters
              </Link>
            )}
          </div>
        </header>

        <section className="mt-10 rounded-xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-serif text-2xl text-foreground">Categories</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => {
              const slug = toFacetSlug(category);
              const active = slug === activeCategory;
              return (
                <Link
                  key={category}
                  href={`/blog?category=${slug}`}
                  className={`rounded-full border px-3 py-1 text-sm transition-colors ${
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

          <h2 className="mt-8 font-serif text-2xl text-foreground">Tags</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => {
              const slug = toFacetSlug(tag);
              const active = slug === activeTag;
              return (
                <Link
                  key={tag}
                  href={`/blog?tag=${slug}`}
                  className={`rounded-full border px-3 py-1 text-sm transition-colors ${
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
        </section>

        <section className="mt-10 grid gap-6">
          {posts.map((post) => (
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
        </section>
      </div>
    </main>
  );
}
