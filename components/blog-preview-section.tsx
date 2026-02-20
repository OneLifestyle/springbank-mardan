import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts } from "@/lib/blog";

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function BlogPreviewSection() {
  const latestPost = getAllBlogPosts()[0];

  if (!latestPost) {
    return null;
  }

  return (
    <section id="journal" className="bg-secondary/30 py-14 md:py-18">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr,1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Springbank Journal
              </p>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                Long-form property and lifestyle insights
              </h2>
              <p className="text-muted-foreground">
                Explore in-depth articles built for buyers researching South Gippsland lifestyle
                property, regional living, and real estate context across Leongatha, Meeniyan,
                Mirboo North, and Mardan.
              </p>

              <article className="rounded-lg border border-border p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Latest article | {formatDate(latestPost.publishedAt)}
                </p>
                <h3 className="mt-2 font-serif text-2xl leading-tight text-foreground">
                  {latestPost.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {latestPost.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {latestPost.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href={`/blog/${latestPost.slug}`}>Read article</Link>
                  </Button>
                  <Button variant="outline" asChild className="bg-transparent">
                    <Link href="/blog" className="gap-2">
                      View all articles
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-border">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={latestPost.heroImage.src}
                  alt={latestPost.heroImage.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
