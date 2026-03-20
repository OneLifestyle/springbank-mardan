import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { GuideEventsSection } from "@/components/guide-events-section";
import { guideEvents } from "@/lib/town-guides";
import {
  ArrowLeft,
  BarChart3,
  Clock3,
  Compass,
  ExternalLink,
  Home,
  Search,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Leongatha Real Estate Guide | Houses and Acreage for Sale",
  description:
    "Leongatha real estate guide for buyers comparing houses and acreage for sale, with practical links to nearby South Gippsland listing opportunities.",
  keywords: [
    "Leongatha real estate",
    "Leongatha property",
    "Leongatha houses for sale",
    "acreage for sale leongatha",
    "Leongatha lifestyle",
    "Leongatha living",
    "South Gippsland real estate",
  ],
  alternates: {
    canonical: "https://springbankmardan.com/leongatha",
  },
  openGraph: {
    title: "Leongatha Real Estate Guide | Houses and Acreage for Sale",
    description:
      "Understand Leongatha buyer demand, census profile, and practical search pathways before you inspect.",
    url: "https://springbankmardan.com/leongatha",
    siteName: "Springbank Mardan",
    type: "article",
    images: [
      {
        url: "/images/wikimedia/leongatha-mccartin-street.jpg",
        width: 1200,
        height: 630,
        alt: "Leongatha town centre streetscape",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Leongatha",
  description:
    "Regional township in South Gippsland with major services, schools, health access, and active real estate demand.",
  url: "https://springbankmardan.com/leongatha",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Leongatha",
    addressRegion: "VIC",
    postalCode: "3953",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.5,
    longitude: 145.95,
  },
};

const statCards = [
  {
    label: "Population (2021 Census)",
    value: "5,618",
    note: "ABS QuickStats UCL214015",
  },
  {
    label: "Median age",
    value: "45",
    note: "ABS QuickStats 2021",
  },
  {
    label: "Median weekly household income",
    value: "$1,175",
    note: "ABS QuickStats 2021",
  },
  {
    label: "Median weekly rent",
    value: "$270",
    note: "ABS QuickStats 2021",
  },
];

export default function LeongathaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://springbankmardan.com" },
          { name: "Leongatha", item: "https://springbankmardan.com/leongatha" },
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
              Back to main listing
            </Link>
            <p className="text-sm text-muted-foreground">
              Approx. 15 min from{" "}
              <Link href="/" className="text-primary underline-offset-4 hover:underline">
                Springbank
              </Link>
            </p>
          </div>
        </header>

        <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(198,128,88,0.22),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(64,90,77,0.2),transparent_42%)] py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Leongatha VIC 3953</p>
              <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
                Leongatha real estate guide for house and acreage buyers
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Leongatha is the service heart of{" "}
                <Link href="/south-gippsland" className="text-primary underline-offset-4 hover:underline">
                  South Gippsland
                </Link>
                , combining everyday convenience with access to countryside, coastal day trips, and the Strzelecki Ranges. It is a practical base for people who want a regional lifestyle without sacrificing access to schools, health services, and retail.
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
                    href="https://www.realestate.com.au/buy/in-leongatha,+vic+3953/list-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Search className="h-4 w-4" />
                    Browse Leongatha listings
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <a
                    href="https://www.property.com.au/vic/leongatha-3953/"
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
                If you want acreage near Leongatha, compare active listings including{" "}
                <Link href="/" className="text-primary underline-offset-4 hover:underline">
                  this Mardan opportunity
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
                  src="/images/wikimedia/leongatha-mccartin-street.jpg"
                  alt="Leongatha town centre streetscape"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-t border-border p-4 text-xs text-muted-foreground">
                Image source: Wikimedia Commons,{" "}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Leongatha_McCartin_Street.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Leongatha McCartin Street
                </a>{" "}
                by Melburnian, licensed{" "}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  CC BY 3.0
                </a>
                .
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Leongatha overview</h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Visit Gippsland describes Leongatha as a lively town in the foothills of the Strzelecki Ranges with a strong cafe and retail scene. It also marks the start of the Great Southern Rail Trail, which threads through villages like{" "}
                  <Link href="/meeniyan" className="text-primary underline-offset-4 hover:underline">
                    Meeniyan
                  </Link>
                  {" "}and Fish Creek on its way toward Port Welshpool.
                </p>
                <p>
                  This mix of services, open countryside, and easy day trips to South Gippsland beaches makes Leongatha a practical base for people planning a longer-term move. For regional comparisons, many visitors also look at{" "}
                  <Link href="/mirboo-north" className="text-primary underline-offset-4 hover:underline">
                    Mirboo North
                  </Link>{" "}
                  or{" "}
                  <Link href="/wilsons-promontory" className="text-primary underline-offset-4 hover:underline">
                    Wilsons Promontory
                  </Link>{" "}
                  access.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-2xl text-foreground">Quick lifestyle notes</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>Service town with supermarkets, schools, and health care access.</li>
                  <li>Gateway to the Great Southern Rail Trail and Strzelecki Ranges drives.</li>
                  <li>Under an hour to South Gippsland beaches and The Prom entry points.</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Overview sources:{" "}
              <a
                href="https://www.visitgippsland.com.au/destinations/south-gippsland/leongatha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Visit Gippsland: Leongatha
              </a>
              {" "}and{" "}
              <a
                href="https://www.visitgippsland.com.au/do-and-see/outdoor-activities/cycling/great-southern-rail-trail"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Great Southern Rail Trail
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
                <h3 className="font-serif text-xl text-foreground">Great Southern Rail Trail</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The Great Southern Rail Trail starts right in Leongatha and gives you a practical way to explore the district without committing to a full-day drive. You can take short sections for easy morning walks or longer rides through farmland and small villages like Koonwarra and Meeniyan. For many people considering a move, this is the kind of everyday lifestyle feature that keeps weekends active without leaving the region.
                </p>
                <a
                  href="https://www.visitgippsland.com.au/do-and-see/outdoor-activities/cycling/great-southern-rail-trail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Trail guide <ExternalLink className="h-3 w-3" />
                </a>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Mossvale Park and Strzelecki drives</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mossvale Park is an easy local outing with established trees, open grassed areas, and space for relaxed picnics with family or visitors. The surrounding Strzelecki roads are ideal for slower scenic drives and help you understand the broader landscape around Leongatha. It is useful for people testing whether the district feels right for long-term living, not just short holidays.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">South Gippsland beaches day trips</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Leongatha is close enough to make regular beach day trips realistic, including Walkerville, Sandy Point, and Yanakie. That means you can keep a practical town base while still having quick access to coastal walks, calmer beach time, and visitor-friendly weekends. For many regional movers, that inland-plus-coast balance is one of Leongatha&apos;s strongest advantages.
                </p>
                <a
                  href="https://www.visitgippsland.com.au/do-and-see/nature-and-wildlife/beaches/south-gippsland-beaches"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  South Gippsland beaches <ExternalLink className="h-3 w-3" />
                </a>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Food, cafes, and cellar doors</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The local cafe scene gives Leongatha a genuine town-centre rhythm rather than a purely functional service feel. Nearby cellar doors and breweries on the South Gippsland Drink Trail add variety for long weekends and when friends or adult children visit. Over time, this mix of practical amenities and social options can make the town feel easier to settle into.
                </p>
                <a
                  href="https://www.visitgippsland.com.au/eat-and-drink/wine-beer-trails/south-gippsland-drink-trail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Drink trail guide <ExternalLink className="h-3 w-3" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <GuideEventsSection
          description="These are nearby South Gippsland events with current published 2026 dates. Always confirm timing on the source page before booking travel."
          events={guideEvents.leongatha}
        />

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            <article className="rounded-xl border border-border bg-card p-6">
              <Clock3 className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl text-foreground">Everyday convenience</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Leongatha functions as South Gippsland&apos;s core services town, with day-to-day essentials in one place.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <Compass className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl text-foreground">Regional location</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Leongatha is a practical anchor point, with easy access to nearby lifestyle villages and coast-facing day trips.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl text-foreground">Planning links</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.domain.com.au/suburb-profile/leongatha-vic-3953"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    Domain suburb profile <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.property.com.au/vic/leongatha-3953/"
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
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Leongatha statistics snapshot</h2>
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
              Source: {" "}
              <a
                href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/UCL214015"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                ABS QuickStats UCL214015
              </a>
              . For current listing activity, use{" "}
              <a
                href="https://www.realestate.com.au/buy/in-leongatha,+vic+3953/list-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                realestate.com.au search results
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
                    href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/UCL214015"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    ABS QuickStats: Leongatha (UCL214015)
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Leongatha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Wikipedia: Leongatha
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.visitgippsland.com.au/destinations/south-gippsland/leongatha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Visit Gippsland: Leongatha
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.property.com.au/vic/leongatha-3953/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Property.com.au suburb profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.domain.com.au/suburb-profile/leongatha-vic-3953"
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
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">How Leongatha compares across the region</h2>
            <div className="mt-4 max-w-4xl space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Leongatha usually sits at the practical end of a South Gippsland comparison because it has stronger day-to-day services than many smaller towns. It is often where people start when they want schools, healthcare access, and easier retail options in one location. That service depth can reduce compromise for full-time living.
              </p>
              <p>
                From there, people often compare character and pace in{" "}
                <Link href="/mirboo-north" className="text-primary underline-offset-4 hover:underline">
                  Mirboo North
                </Link>{" "}
                and{" "}
                <Link href="/meeniyan" className="text-primary underline-offset-4 hover:underline">
                  Meeniyan
                </Link>
                , while keeping recreational access to{" "}
                <Link href="/wilsons-promontory" className="text-primary underline-offset-4 hover:underline">
                  Wilsons Promontory
                </Link>{" "}
                in view. For broader context across towns and travel patterns, return to the{" "}
                <Link href="/south-gippsland" className="text-primary underline-offset-4 hover:underline">
                  South Gippsland guide
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <h2 className="font-serif text-3xl text-foreground">Compare with a nearby acreage option</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                If you are comparing larger homesites and garden-scale properties, compare Leongatha options against{" "}
                <Link href="/" className="text-primary underline-offset-4 hover:underline">
                  Springbank
                </Link>
                .
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
