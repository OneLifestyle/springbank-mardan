import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBlogPostBySlug } from "@/lib/blog";

type RelatedBuyerGuidesSectionProps = {
  title: string;
  description: string;
  slugs: string[];
};

export function RelatedBuyerGuidesSection({
  title,
  description,
  slugs,
}: RelatedBuyerGuidesSectionProps) {
  const posts = slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Buyer Guides
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">{title}</h2>
            <p className="mt-4 text-muted-foreground">{description}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/40"
              >
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {post.categories.slice(0, 2).map((category) => (
                    <span key={category}>{category}</span>
                  ))}
                </div>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-foreground">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Read buyer guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              View all South Gippsland buyer guides
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
