import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { RelatedBuyerGuidesSection } from "@/components/related-buyer-guides-section";
import { GuideEventsSection } from "@/components/guide-events-section";
import { guideEvents } from "@/lib/town-guides";
import {
  ArrowLeft,
  BarChart3,
  Clock3,
  ExternalLink,
  Home,
  Search,
  TrendingUp,
  Wheat,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Meeniyan Real Estate Guide | Property and Houses for Sale",
  description:
    "Meeniyan real estate guide for buyers comparing property and houses for sale, with South Gippsland market context and nearby acreage options.",
  keywords: [
    "Meeniyan real estate",
    "Meeniyan property",
    "Meeniyan houses for sale",
    "acreage for sale meeniyan",
    "Meeniyan lifestyle",
    "Meeniyan living",
    "South Gippsland real estate",
  ],
  alternates: {
    canonical: "https://springbankmardan.com/meeniyan",
  },
  openGraph: {
    title: "Meeniyan Real Estate Guide | Property and Houses for Sale",
    description:
      "Understand Meeniyan buyer demand, village profile, and real estate research pathways in South Gippsland.",
    url: "https://springbankmardan.com/meeniyan",
    siteName: "Springbank Mardan",
    type: "article",
    images: [
      {
        url: "/images/wikimedia/meeniyan-national-bank-old-gippstown.jpg",
        width: 1200,
        height: 630,
        alt: "Historic Meeniyan building",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Meeniyan",
  description:
    "Village in South Gippsland known for food culture, local producers, and lifestyle-oriented property demand.",
  url: "https://springbankmardan.com/meeniyan",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Meeniyan",
    addressRegion: "VIC",
    postalCode: "3956",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.35,
    longitude: 146.15,
  },
};

const statCards = [
  {
    label: "Population (2021 Census)",
    value: "840",
    note: "ABS QuickStats SAL21637",
  },
  {
    label: "Median age",
    value: "42",
    note: "ABS QuickStats 2021",
  },
  {
    label: "Median weekly household income",
    value: "$1,326",
    note: "ABS QuickStats 2021",
  },
  {
    label: "Median weekly rent",
    value: "$250",
    note: "ABS QuickStats 2021",
  },
];

export default function MeeniyanPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://springbankmardan.com" },
          { name: "Meeniyan", item: "https://springbankmardan.com/meeniyan" },
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
            <p className="text-sm text-muted-foreground">
              Approx. 15 min from{" "}
              <Link href="/" className="text-primary underline-offset-4 hover:underline">
                Springbank
              </Link>
            </p>
          </div>
        </header>

        <section className="border-b border-border bg-[radial-gradient(circle_at_top_right,rgba(181,113,72,0.24),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(73,105,88,0.2),transparent_40%)] py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Meeniyan VIC 3956</p>
              <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
                Meeniyan real estate and village property guide
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Meeniyan is a compact village with a strong food and arts scene, set among the Strzelecki Ranges. It appeals to people who want a quieter township feel while staying connected to the wider{" "}
                <Link href="/south-gippsland" className="text-primary underline-offset-4 hover:underline">
                  South Gippsland
                </Link>{" "}
                region.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/" className="gap-2">
                    <Home className="h-4 w-4" />
                    View Mardan property for sale
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <a
                    href="https://www.realestate.com.au/buy/in-meeniyan,+vic+3956/list-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Search className="h-4 w-4" />
                    Browse Meeniyan listings
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <a
                    href="https://www.property.com.au/vic/meeniyan-3956/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <TrendingUp className="h-4 w-4" />
                    Open suburb data
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Buyer intent check: if you are researching Meeniyan property for sale and houses for
                sale near Meeniyan, compare with nearby acreage options in{" "}
                <Link href="/" className="text-primary underline-offset-4 hover:underline">
                  Mardan
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative aspect-[16/7] w-full">
                <Image
                  src="/images/wikimedia/meeniyan-national-bank-old-gippstown.jpg"
                  alt="Historic Meeniyan National Bank of Australasia building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-t border-border p-4 text-xs text-muted-foreground">
                Image source: Wikimedia Commons,{" "}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Meeniyan_National_Bank_of_Australasia,_Old_Gippstown.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Meeniyan National Bank of Australasia, Old Gippstown
                </a>{" "}
                by Gippslander2012, licensed{" "}
                <a
                  href="https://creativecommons.org/licenses/by-sa/3.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  CC BY-SA 3.0
                </a>
                .
              </div>
            </div>
          </div>
        </section>

        <section className="py-4 md:py-6">
          <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="font-serif text-2xl text-foreground">What Meeniyan is for buyers</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Meeniyan is a village-character search. Buyers usually land here when they value
                atmosphere, food culture, and a smaller-town feel more than full service-town scale.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="font-serif text-2xl text-foreground">Who it suits best</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                It tends to suit weekender buyers, downsizers, and permanent movers who want
                walkable village life with strong identity, not just a rural address.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="font-serif text-2xl text-foreground">How Mardan compares</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Mardan gives up Meeniyan&apos;s walkable main street, but gains more acreage, more
                privacy, and easier positioning between multiple South Gippsland townships.
              </p>
            </div>
          </div>
        </section>

        <RelatedBuyerGuidesSection
          title="Meeniyan-area buyer guides"
          description="Meeniyan draws strong village-interest searches, but the next question is usually how that appeal compares with surrounding acreage, service access, and nearby lifestyle-property options."
          slugs={[
            "leongatha-vs-meeniyan-vs-mirboo-north-which-town-fits-your-lifestyle-property-plan",
            "south-gippsland-weekender-holiday-home-guide-what-buyers-should-check",
            "buying-acreage-in-rural-victoria-a-practical-checklist-for-lifestyle-property-buyers",
          ]}
        />

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Meeniyan overview</h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Visit Gippsland highlights Meeniyan&apos;s artisan shopping, cafes, and the Meeniyan Town Hall performance space. The town is small, walkable, and known for food and local produce, with a relaxed pace that suits longer stays.
                </p>
                <p>
                  The surrounding Strzelecki Ranges provide scenic drives and a cooler, greener setting. Many people compare Meeniyan with{" "}
                  <Link href="/leongatha" className="text-primary underline-offset-4 hover:underline">
                    Leongatha
                  </Link>{" "}
                  for services and{" "}
                  <Link href="/mirboo-north" className="text-primary underline-offset-4 hover:underline">
                    Mirboo North
                  </Link>{" "}
                  for village character.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-2xl text-foreground">Quick lifestyle notes</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>Walkable main street, galleries, and artisan retail.</li>
                  <li>Strong food culture and local produce focus.</li>
                  <li>Easy day trips to South Gippsland coast.</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Overview source:{" "}
              <a
                href="https://www.visitgippsland.com.au/destinations/south-gippsland/meeniyan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Visit Gippsland: Meeniyan
              </a>
              .
            </p>
          </div>
        </section>

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Things to do that suit a long-stay lifestyle</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Food culture and local produce</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Meeniyan&apos;s main street is compact, so you can move between cafes, specialty food shops, and local produce with minimal planning. That walkable format is particularly useful for people who want a slower lifestyle and regular local routines. Over time, these small daily conveniences can matter as much as headline attractions.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Meeniyan Town Hall performances</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Meeniyan Town Hall draws touring music and arts programs that are uncommon for a village of this size. The venue gives residents access to high-quality live events without regular trips back to Melbourne. For people relocating, this helps keep cultural life active through the year.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Strzelecki Ranges drives</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The surrounding Strzelecki Ranges provide scenic local drives that are easy to fit into a half-day or weekend window. These routes connect small villages and farm landscapes in a way that makes the broader district feel accessible. It is a practical feature for people assessing long-term liveability, not just holiday appeal.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Coast access</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Day trips to beaches and{" "}
                  <Link href="/wilsons-promontory" className="text-primary underline-offset-4 hover:underline">
                    Wilsons Promontory
                  </Link>{" "}
                  keep the lifestyle mix balanced. You can maintain village-scale daily living while still reaching major coastal destinations on weekends. That inland-coast flexibility is a recurring reason people shortlist this part of South Gippsland.
                </p>
              </article>
            </div>
          </div>
        </section>

        <GuideEventsSection
          description="These Meeniyan events have current published 2026 dates. Confirm on the source pages before booking."
          events={guideEvents.meeniyan}
        />

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            <article className="rounded-xl border border-border bg-card p-6">
              <Wheat className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl text-foreground">Village-scale lifestyle</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Meeniyan is often chosen for local identity, producer culture, and a slower lifestyle tempo.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <Clock3 className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl text-foreground">Smaller-town housing mix</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Compared with larger centres, available homes can be fewer at any one time, so regular monitoring helps.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl text-foreground">Market links</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.domain.com.au/suburb-profile/meeniyan-vic-3956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    Domain suburb profile <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.property.com.au/vic/meeniyan-3956/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    Property.com.au profile <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Meeniyan statistics snapshot</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {statCards.map((card) => (
                <article key={card.label} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm text-muted-foreground">{card.label}</p>
                  <p className="mt-2 font-serif text-3xl text-foreground">{card.value}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{card.note}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Source:{" "}
              <a
                href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL21637"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                ABS QuickStats SAL21637
              </a>
              .
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="font-serif text-3xl text-foreground">Sources and deeper research</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL21637"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    ABS QuickStats: Meeniyan (SAL21637)
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Meeniyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Wikipedia: Meeniyan
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.visitgippsland.com.au/destinations/south-gippsland/meeniyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Visit Gippsland: Meeniyan
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.property.com.au/vic/meeniyan-3956/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Property.com.au suburb profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.domain.com.au/suburb-profile/meeniyan-vic-3956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Domain suburb profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">How Meeniyan compares in-region</h2>
            <div className="mt-4 max-w-4xl space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Meeniyan usually appeals to people who want a smaller village atmosphere with strong food, arts, and community identity. It offers a different pace from larger service towns, which can be a clear advantage if walkability and local character matter more than broad retail depth. That distinction is often the core reason it enters a shortlist.
              </p>
              <p>
                People then compare service access in{" "}
                <Link href="/leongatha" className="text-primary underline-offset-4 hover:underline">
                  Leongatha
                </Link>
                , village style in{" "}
                <Link href="/mirboo-north" className="text-primary underline-offset-4 hover:underline">
                  Mirboo North
                </Link>
                , and regional context through the{" "}
                <Link href="/south-gippsland" className="text-primary underline-offset-4 hover:underline">
                  South Gippsland guide
                </Link>
                . This cross-town comparison helps clarify whether Meeniyan&apos;s scale is the right long-term fit.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <h2 className="font-serif text-3xl text-foreground">Compare against acreage options nearby</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Once you explore village options in Meeniyan, compare with{" "}
                <Link href="/" className="text-primary underline-offset-4 hover:underline">
                  Springbank
                </Link>
                {" "}for a larger homesite option in Mardan.
              </p>
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
