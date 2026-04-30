import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Home, Mail } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { Button } from "@/components/ui/button";
import { buildQuestionMetadata, getQuestionPage, questionPages } from "@/lib/aeo-questions";
import { SITE_URL, getArticleJsonLd, getFaqPageJsonLd } from "@/lib/site-schema";

type QuestionRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return questionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: QuestionRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getQuestionPage(slug);

  if (!page) {
    return {};
  }

  return buildQuestionMetadata(page);
}

export default async function QuestionPage({ params }: QuestionRouteProps) {
  const { slug } = await params;
  const page = getQuestionPage(slug);

  if (!page) {
    notFound();
  }

  const canonical = `${SITE_URL}/questions/${page.slug}`;
  const articleJsonLd = getArticleJsonLd({
    url: canonical,
    title: page.question,
    description: page.metaDescription,
    dateModified: page.lastUpdated,
    section: page.primaryCluster,
  });
  const faqJsonLd = getFaqPageJsonLd(page.faqs, `${canonical}#faq`);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: SITE_URL },
          { name: "Buyer Questions", item: `${SITE_URL}/questions` },
          { name: page.question, item: canonical },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/questions"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Buyer questions
            </Link>
            <Link href="/#contact" className="text-sm text-primary underline-offset-4 hover:underline">
              Contact Dean Jones
            </Link>
          </div>
        </header>

        <article>
          <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(181,113,72,0.24),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(73,105,88,0.18),transparent_40%)] py-16 md:py-24">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {page.primaryCluster}
                </p>
                <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
                  {page.question}
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{page.answer}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  Updated {page.lastUpdated}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <Link href="/" className="gap-2">
                      <Home className="h-4 w-4" />
                      View Springbank
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

          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[minmax(0,1fr),320px] lg:px-8">
            <div className="space-y-12">
              {page.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-3xl text-foreground md:text-4xl">{section.heading}</h2>
                  <p className="mt-4 border-l-2 border-primary pl-4 text-base leading-relaxed text-foreground">
                    {section.capsule}
                  </p>
                  <div className="mt-5 space-y-4 text-muted-foreground">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.table && (
                    <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-card">
                      <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                        <caption className="sr-only">{section.table.caption}</caption>
                        <thead className="bg-secondary/70 text-foreground">
                          <tr>
                            {section.table.headers.map((header) => (
                              <th key={header} scope="col" className="px-4 py-3 font-semibold">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {section.table.rows.map((row) => (
                            <tr key={row.join("|")}>
                              {row.map((cell) => (
                                <td key={cell} className="px-4 py-3 text-muted-foreground">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}

              <section id="faq" className="rounded-xl border border-border bg-card p-6 md:p-8">
                <h2 className="font-serif text-3xl text-foreground md:text-4xl">FAQs</h2>
                <div className="mt-6 divide-y divide-border">
                  {page.faqs.map((faq) => (
                    <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                      <h3 className="font-serif text-xl text-foreground">{faq.question}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="h-fit space-y-6 lg:sticky lg:top-24">
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-serif text-2xl text-foreground">Related questions</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {page.relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex items-start gap-2 text-primary underline-offset-4 hover:underline"
                      >
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-secondary/40 p-6">
                <h2 className="font-serif text-2xl text-foreground">Next step</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  If the location, property style and buyer-fit notes make sense, inspect the full Springbank listing and speak with Dean Jones about current availability.
                </p>
                <Button className="mt-5 w-full" asChild>
                  <Link href="/#contact">Enquire about Springbank</Link>
                </Button>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}
