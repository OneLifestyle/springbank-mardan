import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Clock3,
  Compass,
  ExternalLink,
  Home,
  MapPin,
  Mountain,
  Search,
  TrendingUp,
  Users,
  Waves,
  Wheat,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { GuideEventsSection } from "@/components/guide-events-section";
import { buildTownGuideJsonLd, type GuideInfoCard, type TownGuideData } from "@/lib/town-guides";

const iconMap = {
  clock: Clock3,
  map: MapPin,
  "bar-chart": BarChart3,
  waves: Waves,
  mountain: Mountain,
  users: Users,
  wheat: Wheat,
  compass: Compass,
} satisfies Record<GuideInfoCard["icon"], typeof Clock3>;

function TownGuideHeroImage({ guide }: { guide: TownGuideData }) {
  if (guide.heroImage.src.startsWith("http")) {
    return <img src={guide.heroImage.src} alt={guide.heroImage.alt} className="h-full w-full object-cover" />;
  }

  return <Image src={guide.heroImage.src} alt={guide.heroImage.alt} fill className="object-cover" />;
}

export function TownGuidePage({ guide }: { guide: TownGuideData }) {
  const jsonLd = buildTownGuideJsonLd(guide);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://springbankmardan.com" },
          { name: guide.addressLocality, item: `https://springbankmardan.com/${guide.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              View Springbank property
            </Link>
            <p className="text-sm text-muted-foreground">{guide.proximityNote}</p>
          </div>
        </header>

        <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(181,113,72,0.24),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(73,105,88,0.18),transparent_40%)] py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                {guide.locationLabel}
              </p>
              <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
                {guide.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{guide.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/" className="gap-2">
                    <Home className="h-4 w-4" />
                    View Mardan property for sale
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <a
                    href={guide.browseListingsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Search className="h-4 w-4" />
                    Browse {guide.addressLocality} listings
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <a
                    href={guide.suburbDataUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <TrendingUp className="h-4 w-4" />
                    Open suburb data
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative aspect-[16/7] w-full">
                <TownGuideHeroImage guide={guide} />
              </div>
              <div className="border-t border-border p-4 text-xs text-muted-foreground">
                Image source: Wikimedia Commons,{" "}
                <a
                  href={guide.heroImage.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {guide.heroImage.sourceLabel}
                </a>{" "}
                by {guide.heroImage.author}, licensed{" "}
                <a
                  href={guide.heroImage.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {guide.heroImage.licenseName}
                </a>
                .
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">{guide.addressLocality} overview</h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-4 text-muted-foreground">
                {guide.overviewParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-2xl text-foreground">Quick lifestyle notes</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {guide.quickLifestyleNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Overview sources:{" "}
              {guide.overviewSourceLinks.map((link, index) => (
                <span key={link.href}>
                  {index > 0 ? ", " : ""}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
              .
            </p>
          </div>
        </section>

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Things to do that suit a long-stay lifestyle
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {guide.thingsToDo.map((item) => (
                <article key={item.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      {item.linkLabel ?? "More details"} <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <GuideEventsSection description={guide.eventsDescription} events={guide.events} />

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {guide.infoCards.map((card) => {
              const Icon = iconMap[card.icon];

              return (
                <article key={card.title} className="rounded-xl border border-border bg-card p-6">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 font-serif text-xl text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  {card.links && (
                    <ul className="mt-4 space-y-2 text-sm">
                      {card.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            {link.label} <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {guide.statCards && (
          <section className="py-12 md:py-16">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">{guide.statsTitle}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {guide.statCards.map((card) => (
                  <article key={card.label} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-sm text-muted-foreground">{card.label}</p>
                    <p className="mt-2 font-serif text-3xl text-foreground">{card.value}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{card.note}</p>
                  </article>
                ))}
              </div>
              {guide.statSource && (
                <p className="mt-6 text-sm text-muted-foreground">
                  Source:{" "}
                  <a
                    href={guide.statSource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {guide.statSource.label}
                  </a>
                  .
                </p>
              )}
            </div>
          </section>
        )}

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="font-serif text-3xl text-foreground">Sources and deeper research</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {guide.sources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">{guide.comparisonTitle}</h2>
            <div className="mt-4 max-w-4xl space-y-4 leading-relaxed text-muted-foreground">
              {guide.comparisonParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Compare nearby South Gippsland locations
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {guide.relatedGuides.map((item) => (
                <article key={`${guide.slug}-${item.href}`} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Open guide <ExternalLink className="h-3 w-3" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <h2 className="font-serif text-3xl text-foreground">{guide.ctaTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{guide.ctaBody}</p>
              <div className="mt-7">
                <Link href="/">
                  <Button size="lg" className="gap-2">
                    <Home className="h-5 w-5" />
                    View Springbank listing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
