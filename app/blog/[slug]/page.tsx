import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts, getBlogPostBySlug, toFacetSlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article not found | Springbank Journal",
      description: "The requested article could not be found.",
    };
  }

  const canonical = `https://springbankmardan.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Springbank Journal`,
    description: post.excerpt,
    keywords: [...post.tags, ...post.categories],
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      siteName: "Springbank Mardan",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      tags: post.tags,
      images: [
        {
          url: post.heroImage.src,
          width: 1200,
          height: 630,
          alt: post.heroImage.alt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: `https://springbankmardan.com/blog/${post.slug}`,
    articleSection: post.categories,
    keywords: post.tags.join(", "),
    image: [`https://springbankmardan.com${post.heroImage.src}`],
    author: {
      "@type": "Organization",
      name: "One Lifestyle Real Estate",
      url: "https://onelifestylerealestate.com.au",
    },
    publisher: {
      "@type": "Organization",
      name: "One Lifestyle Real Estate",
      url: "https://onelifestylerealestate.com.au",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="min-h-screen bg-background py-16 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to journal
          </Link>

          <article className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
            <header className="p-6 md:p-10">
              <div className="flex flex-wrap gap-2">
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

              <h1 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                {post.title}
              </h1>

              <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {post.readingTimeMinutes} min read
                </span>
              </div>
            </header>

            <figure className="relative aspect-[16/8] w-full">
              <Image src={post.heroImage.src} alt={post.heroImage.alt} fill className="object-cover" priority />
            </figure>
            {post.heroImage.caption && (
              <p className="border-t border-border px-6 py-4 text-sm text-muted-foreground md:px-10">
                {post.heroImage.caption}
              </p>
            )}

            <div className="space-y-10 px-6 py-8 md:px-10 md:py-12">
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                {post.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {post.sections.map((section) => (
                <section key={section.heading} className="space-y-5">
                  <h2 className="font-serif text-3xl text-foreground">{section.heading}</h2>
                  <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.image && (
                    <figure className="overflow-hidden rounded-xl border border-border">
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {section.image.caption && (
                        <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                          {section.image.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </section>
              ))}

              <section className="space-y-5">
                <h2 className="font-serif text-3xl text-foreground">{post.featureListTitle}</h2>
                <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
                  {post.featureList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="space-y-5">
                <h2 className="font-serif text-3xl text-foreground">{post.galleryTitle}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {post.gallery.map((image) => (
                    <figure key={image.src} className="overflow-hidden rounded-xl border border-border">
                      <div className="relative aspect-[4/3] w-full">
                        <Image src={image.src} alt={image.alt} fill className="object-cover" />
                      </div>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-border bg-secondary/30 p-6 md:p-8">
                <h2 className="font-serif text-3xl text-foreground">{post.ctaTitle}</h2>
                <p className="mt-4 text-muted-foreground">{post.ctaBody}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="tel:0431639749" className="gap-2">
                      <Phone className="h-4 w-4" />
                      Call Dean Jones
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="bg-transparent">
                    <a href="mailto:dean@onelifestyle.com.au">Email dean@onelifestyle.com.au</a>
                  </Button>
                  <Button variant="outline" asChild className="bg-transparent">
                    <Link href="/">View Springbank listing</Link>
                  </Button>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground">Tags</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${toFacetSlug(tag)}`}
                      className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground hover:border-primary hover:text-foreground"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </section>

              {post.imageCredits && post.imageCredits.length > 0 && (
                <section>
                  <h2 className="font-serif text-2xl text-foreground">Image sources and licenses</h2>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    {post.imageCredits.map((credit) => (
                      <li key={credit.sourceUrl}>
                        <a
                          href={credit.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline-offset-4 hover:underline"
                        >
                          {credit.label}
                        </a>{" "}
                        by {credit.author}, licensed{" "}
                        <a
                          href={credit.licenseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline-offset-4 hover:underline"
                        >
                          {credit.licenseName}
                        </a>
                        .
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
