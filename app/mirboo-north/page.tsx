import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BarChart3,
  ExternalLink,
  Home,
  Mountain,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mirboo North Real Estate & Lifestyle Guide | South Gippsland Property Insights",
  description:
    "Mirboo North real estate and lifestyle guide for buyers comparing village character, regional housing options, and tree-change demand in South Gippsland.",
  keywords: [
    "Mirboo North real estate",
    "Mirboo North property",
    "Mirboo North houses for sale",
    "Mirboo North lifestyle",
    "Mirboo North living",
    "South Gippsland real estate",
  ],
  alternates: {
    canonical: "https://springbankmardan.com/mirboo-north",
  },
  openGraph: {
    title: "Mirboo North Real Estate & Lifestyle Guide",
    description:
      "Understand Mirboo North buyer demand, census profile, and market research pathways for South Gippsland property decisions.",
    url: "https://springbankmardan.com/mirboo-north",
    siteName: "Springbank Mardan",
    type: "article",
    images: [
      {
        url: "/images/wikimedia/mirboo-north-town-hall-2022.jpg",
        width: 1200,
        height: 630,
        alt: "Mirboo North Town Hall",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Mirboo North",
  description:
    "Hilltop township in South Gippsland with community amenities, hospitality culture, and lifestyle property demand.",
  url: "https://springbankmardan.com/mirboo-north",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mirboo North",
    addressRegion: "VIC",
    postalCode: "3871",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.48,
    longitude: 146.05,
  },
};

const statCards = [
  {
    label: "Population (2021 Census)",
    value: "2,263",
    note: "ABS QuickStats SAL21703",
  },
  {
    label: "Median age",
    value: "48",
    note: "ABS QuickStats 2021",
  },
  {
    label: "Median weekly household income",
    value: "$1,232",
    note: "ABS QuickStats 2021",
  },
  {
    label: "Median weekly rent",
    value: "$250",
    note: "ABS QuickStats 2021",
  },
];

export default function MirbooNorthPage() {
  return (
    <>
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

        <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(95,126,169,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(175,114,74,0.24),transparent_42%)] py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Mirboo North VIC 3871</p>
              <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
                Mirboo North real estate and lifestyle guide
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Mirboo North is a hilltop township known for village character and easy access to the Strzelecki Ranges. It suits people who want scenic living without being too far from the service towns of{" "}
                <Link href="/south-gippsland" className="text-primary underline-offset-4 hover:underline">
                  South Gippsland
                </Link>
                .
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a
                    href="https://www.realestate.com.au/buy/in-mirboo+north,+vic+3871/list-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Search className="h-4 w-4" />
                    Browse Mirboo North listings
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <a
                    href="https://www.property.com.au/vic/mirboo-north-3871/"
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
                <Image
                  src="/images/wikimedia/mirboo-north-town-hall-2022.jpg"
                  alt="Mirboo North Town Hall"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-t border-border p-4 text-xs text-muted-foreground">
                Image source: Wikimedia Commons,{" "}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Mirboo_North_Town_Hall_%E2%80%94_March_2022.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Mirboo North Town Hall - March 2022
                </a>{" "}
                by Alison Newman, licensed{" "}
                <a
                  href="https://creativecommons.org/publicdomain/zero/1.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  CC0 1.0
                </a>
                .
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Mirboo North overview</h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Visit Gippsland highlights Mirboo North&apos;s heritage streetscape, town murals, and the former butter factory now known as The ARTSpace. The town sits in the hills where farmland meets bushland, which shapes its slower pace and strong community feel.
                </p>
                <p>
                  The 13 km Grand Ridge Rail Trail begins in Mirboo North and links to Boolarra, while the Lyrebird Forest Walk is a short drive away. These outdoor anchors make the town appealing for people who value daily walks, bike rides, and easy nature access.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-2xl text-foreground">Quick lifestyle notes</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>Heritage streetscape, murals, and local artisan retail.</li>
                  <li>Trail access: Grand Ridge Rail Trail + Lyrebird Forest Walk.</li>
                  <li>Short drive to Leongatha services and local wineries.</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Overview sources:{" "}
              <a
                href="https://www.visitgippsland.com.au/destinations/south-gippsland/mirboo-north"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Visit Gippsland: Mirboo North
              </a>
              {" "}and{" "}
              <a
                href="https://www.visitgippsland.com.au/do-and-see/outdoor-activities/cycling/grand-ridge-rail-trail"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Grand Ridge Rail Trail
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
                <h3 className="font-serif text-xl text-foreground">Grand Ridge Rail Trail</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The Grand Ridge Rail Trail starts in Mirboo North and runs through forested sections, open farmland, and small settlements toward Boolarra. It works well for both short weekday rides and longer weekend outings, so it is not limited to occasional use. For people considering a longer stay, that kind of repeatable low-stress activity is one of the town&apos;s practical lifestyle strengths.
                </p>
                <a
                  href="https://www.visitgippsland.com.au/do-and-see/outdoor-activities/cycling/grand-ridge-rail-trail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Trail guide <ExternalLink className="h-3 w-3" />
                </a>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Lyrebird Forest Walk</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lyrebird Forest Walk offers a cool, fern-lined loop with a rainforest feel and a gradient that suits regular walking. It is close enough to town that you can use it as part of normal weekly routine rather than treating it as a major trip. That everyday nature access is a meaningful differentiator when people compare Mirboo North with larger regional centres.
                </p>
                <a
                  href="https://www.visitgippsland.com.au/do-and-see/outdoor-activities/walking-and-hiking/lyrebird-forest-walk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Walk details <ExternalLink className="h-3 w-3" />
                </a>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Cafes and local produce</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mirboo North&apos;s main street supports a reliable cafe rhythm plus artisan food and specialty retail that feel community-led rather than transient. This gives new residents practical social anchors through the week, not only on peak tourism weekends. Over time, the convenience of having quality local options close to home can matter as much as broader regional attractions.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Day trips to nearby towns</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mirboo North sits in a useful position for nearby day trips, especially when you want to compare different township styles before deciding where to buy. Service-heavy options in{" "}
                  <Link href="/leongatha" className="text-primary underline-offset-4 hover:underline">
                    Leongatha
                  </Link>
                  {" "}can be paired with coast-facing weekends via{" "}
                  <Link href="/wilsons-promontory" className="text-primary underline-offset-4 hover:underline">
                    Wilsons Promontory
                  </Link>
                  . That flexibility helps people assess whether Mirboo North&apos;s village character is the right long-term fit.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">2026 events to plan around</h2>
            <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
              Dates below are published for 2026. Confirm on the source pages before booking.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">28 Feb 2026</p>
                <h3 className="mt-2 font-serif text-xl text-foreground">Mirboo North Market</h3>
                <p className="mt-2 text-sm text-muted-foreground">Mirboo North</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Mirboo North Market brings local produce, handmade goods, and small-scale traders into one easy-to-walk event format. It is useful for visitors who want to understand how active the local maker and food community is outside peak holiday periods. For prospective buyers, the market gives a realistic read on town energy and social connection.
                </p>
                <a
                  href="https://www.visitgippsland.com.au/event/mirboo-north-market"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Event details <ExternalLink className="h-3 w-3" />
                </a>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">28 Feb 2026</p>
                <h3 className="mt-2 font-serif text-xl text-foreground">Preserving Cooking Class</h3>
                <p className="mt-2 text-sm text-muted-foreground">Mirboo North</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  This class focuses on practical preserving skills and regional produce, which aligns well with the area&apos;s food-growing culture. It offers a hands-on way to connect with local routines rather than only spectator-style tourism. Events like this often appeal to tree-change buyers who are looking for useful lifestyle participation, not just scenery.
                </p>
                <a
                  href="https://www.visitgippsland.com.au/event/preserving-cooking-class"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Event details <ExternalLink className="h-3 w-3" />
                </a>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">27 Feb 2026</p>
                <h3 className="mt-2 font-serif text-xl text-foreground">Festival of Small Halls: Foster</h3>
                <p className="mt-2 text-sm text-muted-foreground">Foster</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Festival of Small Halls programs respected touring artists in community venues and draws strong regional attendance. From Mirboo North, Foster is manageable for evening events, making this a practical part of the annual calendar. It helps demonstrate that the broader South Gippsland lifestyle includes regular live culture as well as outdoor access.
                </p>
                <a
                  href="https://www.visitgippsland.com.au/event/festival-of-small-halls-2026-autumn-tour-foster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Event details <ExternalLink className="h-3 w-3" />
                </a>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">28 Feb 2026</p>
                <h3 className="mt-2 font-serif text-xl text-foreground">South Gippsland Garlic Festival</h3>
                <p className="mt-2 text-sm text-muted-foreground">Korumburra</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The Garlic Festival is one of the region&apos;s higher-profile food events and attracts a broad mix of locals and visitors. It combines produce, demonstrations, and community programming that reflect South Gippsland&apos;s agricultural identity. For anyone comparing towns, it is a useful marker of how active the district calendar can be through late summer.
                </p>
                <a
                  href="https://www.visitgippsland.com.au/event/south-gippsland-garlic-festival"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Event details <ExternalLink className="h-3 w-3" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            <article className="rounded-xl border border-border bg-card p-6">
              <Mountain className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl text-foreground">Village character</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Streetscape quality, community feel, and scenic setting are central to the town&apos;s appeal.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <Users className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl text-foreground">Community-led living</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Mirboo North offers active local culture and strong regional social connection.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl text-foreground">Market links</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.domain.com.au/suburb-profile/mirboo-north-vic-3871"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    Domain suburb profile <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.property.com.au/vic/mirboo-north-3871/"
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
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Mirboo North statistics snapshot</h2>
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
                href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL21703"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                ABS QuickStats SAL21703
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
                    href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL21703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    ABS QuickStats: Mirboo North (SAL21703)
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Mirboo_North"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Wikipedia: Mirboo North
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.property.com.au/vic/mirboo-north-3871/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Property.com.au suburb profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.domain.com.au/suburb-profile/mirboo-north-vic-3871"
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
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">How Mirboo North compares in-region</h2>
            <div className="mt-4 max-w-4xl space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Most people assess Mirboo North as part of a multi-town shortlist rather than a standalone decision. The town tends to attract buyers who prioritise streetscape character, local community feel, and easy everyday access to walking and trail infrastructure. That profile is different from larger service centres, so the comparison framework matters.
              </p>
              <p>
                For broader services, buyers usually benchmark against{" "}
                <Link href="/leongatha" className="text-primary underline-offset-4 hover:underline">
                  Leongatha
                </Link>
                . For a smaller food-and-arts village pattern, they often compare with{" "}
                <Link href="/meeniyan" className="text-primary underline-offset-4 hover:underline">
                  Meeniyan
                </Link>
                . To keep the full regional context in view, use the{" "}
                <Link href="/south-gippsland" className="text-primary underline-offset-4 hover:underline">
                  South Gippsland guide
                </Link>
                {" "}before narrowing to a final suburb target.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <h2 className="font-serif text-3xl text-foreground">Compare with a nearby acreage option</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                After reviewing Mirboo North options, compare against{" "}
                <Link href="/" className="text-primary underline-offset-4 hover:underline">
                  Springbank
                </Link>
                {" "}for larger homesite criteria in nearby Mardan.
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
