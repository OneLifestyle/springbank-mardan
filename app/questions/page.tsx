import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, Mail } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { Button } from "@/components/ui/button";
import { questionPages } from "@/lib/aeo-questions";
import { SITE_NAME, SITE_URL, getArticleJsonLd } from "@/lib/site-schema";

export const metadata: Metadata = {
  title: "Springbank Mardan Buyer Questions | South Gippsland Property Guide",
  description:
    "Clear answers to buyer questions about Springbank Mardan, Mardan Victoria, South Gippsland acreage, nearby towns and lifestyle-property due diligence.",
  alternates: {
    canonical: `${SITE_URL}/questions`,
  },
  openGraph: {
    title: "Springbank Mardan Buyer Questions | South Gippsland Property Guide",
    description:
      "Question-led buyer guides for Springbank Mardan, Mardan and South Gippsland lifestyle acreage.",
    url: `${SITE_URL}/questions`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const clusters = ["Property", "Location", "Rural lifestyle buying", "Buyer decision support"] as const;

export default function QuestionsIndexPage() {
  const articleJsonLd = getArticleJsonLd({
    url: `${SITE_URL}/questions`,
    title: "Springbank Mardan Buyer Questions",
    description:
      "Question-led buyer guides for Springbank Mardan, Mardan and South Gippsland lifestyle acreage.",
    dateModified: "2026-04-30",
    section: "Buyer questions",
  });

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: SITE_URL },
          { name: "Buyer Questions", item: `${SITE_URL}/questions` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Springbank
            </Link>
            <Link href="/#contact" className="text-sm text-primary underline-offset-4 hover:underline">
              Contact Dean Jones
            </Link>
          </div>
        </header>

        <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(181,113,72,0.24),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(73,105,88,0.18),transparent_40%)] py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Buyer questions
              </p>
              <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
                Springbank Mardan buyer questions answered
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                This section answers the practical questions buyers ask before inspecting Springbank Mardan: what the property is, where Mardan sits, how nearby towns compare, and what to consider before buying rural lifestyle acreage in South Gippsland.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/" className="gap-2">
                    <Home className="h-4 w-4" />
                    View the property
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <Link href="/#contact" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Ask the agent
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8">
              {clusters.map((cluster) => {
                const pages = questionPages.filter((page) => page.primaryCluster === cluster);

                return (
                  <section key={cluster} aria-labelledby={`${cluster}-heading`}>
                    <h2 id={`${cluster}-heading`} className="font-serif text-3xl text-foreground md:text-4xl">
                      {cluster}
                    </h2>
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      {pages.map((page) => (
                        <article key={page.slug} className="rounded-xl border border-border bg-card p-6">
                          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                            Updated {page.lastUpdated}
                          </p>
                          <h3 className="mt-3 font-serif text-2xl text-foreground">
                            <Link href={`/questions/${page.slug}`} className="hover:text-primary">
                              {page.question}
                            </Link>
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{page.answer}</p>
                          <Link
                            href={`/questions/${page.slug}`}
                            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                          >
                            Read answer <ArrowRight className="h-4 w-4" />
                          </Link>
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
