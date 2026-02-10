import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BarChart3,
  Compass,
  ExternalLink,
  Home,
  MapPin,
  Search,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "South Gippsland Real Estate & Lifestyle Guide | Living in Regional Victoria",
  description:
    "South Gippsland real estate and lifestyle guide for buyers researching regional Victoria. Explore market context, key townships, census data, and high-intent property search pathways.",
  keywords: [
    "South Gippsland real estate",
    "South Gippsland lifestyle",
    "South Gippsland living",
    "South Gippsland holiday homes",
    "South Gippsland property",
    "regional Victoria real estate",
    "Leongatha real estate",
    "Mirboo North real estate",
    "Meeniyan real estate",
    "Wilsons Promontory lifestyle",
  ],
  alternates: {
    canonical: "https://springbankmardan.com/south-gippsland",
  },
  openGraph: {
    title: "South Gippsland Real Estate & Lifestyle Guide",
    description:
      "Research South Gippsland real estate, regional lifestyle drivers, township differences, and trusted data sources before you buy.",
    url: "https://springbankmardan.com/south-gippsland",
    siteName: "Springbank Mardan",
    type: "article",
    images: [
      {
        url: "/images/wikimedia/south-gippsland-cricklewood.jpg",
        width: 1200,
        height: 630,
        alt: "South Gippsland rural landscape",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "South Gippsland, Victoria",
  description:
    "Regional area in Victoria known for lifestyle properties, agricultural land, and coastal access via Wilsons Promontory.",
  url: "https://springbankmardan.com/south-gippsland",
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Victoria, Australia",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.5,
    longitude: 145.9,
  },
};

const statCards = [
  {
    label: "Population (2021 Census)",
    value: "30,577",
    note: "ABS QuickStats, South Gippsland LGA",
  },
  {
    label: "Median age",
    value: "49",
    note: "ABS QuickStats 2021",
  },
  {
    label: "Median weekly household income",
    value: "$1,266",
    note: "ABS QuickStats 2021",
  },
  {
    label: "Private dwellings",
    value: "17,114",
    note: "ABS QuickStats 2021",
  },
];

const townshipCards = [
  {
    title: "Leongatha real estate",
    href: "/leongatha",
    description:
      "Service-centre strengths: schools, health, retail, and commuter practicality.",
  },
  {
    title: "Mirboo North real estate",
    href: "/mirboo-north",
    description:
      "Hilltop village character with scenic setting and strong local community.",
  },
  {
    title: "Meeniyan real estate",
    href: "/meeniyan",
    description:
      "Boutique village profile with food culture, walkable scale, and local identity.",
  },
  {
    title: "Wilsons Promontory lifestyle",
    href: "/wilsons-promontory",
    description:
      "Nature access that shapes travel patterns and nearby township interest.",
  },
];

export default function SouthGippslandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              View Springbank property
            </Link>
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary">
              Springbank listing
            </Link>
          </div>
        </header>

        <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(178,111,72,0.28),transparent_44%),radial-gradient(circle_at_bottom_right,rgba(73,106,86,0.2),transparent_40%)] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                South Gippsland, Victoria
              </p>
              <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
                South Gippsland real estate and lifestyle guide
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                South Gippsland blends rolling hinterland, village life, and a coastline anchored by Wilsons Promontory. This guide covers the region&apos;s character, day-to-day lifestyle, and the key townships people commonly compare.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" asChild>
                  <a
                    href="https://www.realestate.com.au/buy/in-gippsland_south-vic/list-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Search className="h-4 w-4" />
                    Browse Gippsland South listings
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <a href="#township-guides" className="gap-2">
                    <MapPin className="h-4 w-4" />
                    Explore key townships
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                If you are also comparing specific high-amenity acreage options, view{" "}
                <Link href="/" className="text-primary underline-offset-4 hover:underline">
                  Springbank
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative aspect-[16/7] w-full">
                <Image
                  src="/images/wikimedia/south-gippsland-cricklewood.jpg"
                  alt="South Gippsland rural outlook with rolling hills and farmland"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-t border-border p-4 text-xs text-muted-foreground">
                Image source: Wikimedia Commons,{" "}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Views_from_Cricklewood.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Views from Cricklewood
                </a>{" "}
                by Andy &amp; Anna Kelk, licensed{" "}
                <a
                  href="https://creativecommons.org/licenses/by/2.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  CC BY 2.0
                </a>
                .
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                South Gippsland overview
              </h2>
              <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Visit Gippsland describes South Gippsland as a region of lush hills, gourmet food, and a coastline that ranges from calm inlets to dramatic beaches. The region is anchored by Wilsons Promontory and a string of village towns connected by scenic drives and rail trails.
                  </p>
                  <p>
                    For long-stay planning, the decision is usually about the balance between coastal access and practical services. Towns like{" "}
                <Link href="/leongatha" className="text-primary underline-offset-4 hover:underline">
                  Leongatha
                </Link>
                {" "}and{" "}
                <Link href="/mirboo-north" className="text-primary underline-offset-4 hover:underline">
                  Mirboo North
                </Link>
                {" "}bring services and community, while the coastal belt around{" "}
                <Link href="/wilsons-promontory" className="text-primary underline-offset-4 hover:underline">
                  Wilsons Promontory
                </Link>{" "}
                provides the weekend escape factor.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-serif text-2xl text-foreground">Quick lifestyle notes</h3>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <li>Coastal access plus inland villages with strong food culture.</li>
                    <li>Signature drives and trails connect townships and beaches.</li>
                    <li>Mix of service towns and boutique villages for different lifestyle priorities.</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Overview source:{" "}
                <a
                  href="https://www.visitgippsland.com.au/destinations/south-gippsland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Visit Gippsland: South Gippsland
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">Things to do that suit a long-stay lifestyle</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <article className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-serif text-xl text-foreground">Great Southern Rail Trail</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The Great Southern Rail Trail runs for more than 130 km and connects multiple South Gippsland towns through farmland and bushland edges. It supports both casual short outings and longer ride itineraries, which is useful for people planning to spend extended time in the region. As a lifestyle feature, it gives residents consistent low-friction access to outdoor activity without needing major travel.
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
                  <h3 className="font-serif text-xl text-foreground">South Gippsland Drink Trail</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The South Gippsland Drink Trail links cellar doors, breweries, and distillery stops across the hills in a format that works well for staged weekend exploration. It gives visitors and potential buyers a practical way to test local food-and-drink culture beyond a single town centre. That broader network is important when assessing whether the region offers enough variety for long-term living.
                  </p>
                  <a
                    href="https://www.visitgippsland.com.au/eat-and-drink/wine-beer-trails/south-gippsland-drink-trail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Drink trail <ExternalLink className="h-3 w-3" />
                  </a>
                </article>
                <article className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-serif text-xl text-foreground">Coastal day trips</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    South Gippsland&apos;s coastline supports frequent day trips to places like Walkerville, Sandy Point, and the beaches near Wilsons Promontory. This gives inland residents direct access to a different pace on weekends without committing to full holiday travel. For many tree-change buyers, this inland-plus-coast pattern is a core reason the region remains on the shortlist.
                  </p>
                  <a
                    href="https://www.visitgippsland.com.au/do-and-see/nature-and-wildlife/beaches/south-gippsland-beaches"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Beach guide <ExternalLink className="h-3 w-3" />
                  </a>
                </article>
                <article className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-serif text-xl text-foreground">Signature drives</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Scenic routes such as the Great Southern Drive and Tarwin Valley Drive connect villages, farming landscapes, and coastline access points in one network. These drives are useful for newcomers because they reveal how each township relates to the others in day-to-day terms. Over time, they also make it easier to compare where you want to live versus where you want to spend leisure time.
                  </p>
                  <a
                    href="https://www.visitgippsland.com.au/do-and-see/drives/great-southern-drive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Great Southern Drive <ExternalLink className="h-3 w-3" />
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">2026 events to plan around</h2>
              <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
                These are South Gippsland events with published 2026 dates. Confirm on the source pages before booking.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <article className="rounded-xl border border-border bg-card p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">14 Feb 2026</p>
                  <h3 className="mt-2 font-serif text-xl text-foreground">Fish Creek Summer Produce Market</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Fish Creek</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    This produce market is a useful snapshot of South Gippsland&apos;s grower and artisan food economy in one place. It attracts a mix of locals, weekend visitors, and longer-stay property researchers, which gives it practical regional relevance. Events like this help buyers test whether the district&apos;s food culture aligns with their day-to-day lifestyle expectations.
                  </p>
                  <a
                    href="https://www.visitgippsland.com.au/event/fish-creek-summer-produce-market"
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
                    The Garlic Festival is one of the region&apos;s standout annual food events and draws broad attendance from across Gippsland and Melbourne visitors. It combines producers, demonstrations, and community activity in a format that reflects the local agricultural base. For relocation decisions, that consistency of regional event programming can be as relevant as listing supply data.
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
                <article className="rounded-xl border border-border bg-card p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">28 Mar 2026</p>
                  <h3 className="mt-2 font-serif text-xl text-foreground">Inverloch Running Festival</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Inverloch</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Inverloch Running Festival brings a fitness-led audience to the coast and shows another side of the regional events mix. Its accessible format and established location make it practical for both participation and spectator weekends. This kind of recurring coastal activation reinforces why many buyers value proximity between inland towns and beach destinations.
                  </p>
                  <a
                    href="https://www.visitgippsland.com.au/event/inverloch-running-festival"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Event details <ExternalLink className="h-3 w-3" />
                  </a>
                </article>
                <article className="rounded-xl border border-border bg-card p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">16 May 2026</p>
                  <h3 className="mt-2 font-serif text-xl text-foreground">Fish Creek Tea Cosy Festival</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Fish Creek</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    The Tea Cosy Festival is a distinctive local event with a strong community and craft identity. It attracts people interested in village-scale culture and helps highlight the social texture of South Gippsland towns. For buyers doing suburb-level comparisons, that local character is often an important complement to property metrics.
                  </p>
                  <a
                    href="https://www.visitgippsland.com.au/event/fish-creek-tea-cosy-festival"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Event details <ExternalLink className="h-3 w-3" />
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              <article className="rounded-xl border border-border bg-card p-6">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-serif text-xl text-foreground">Property research</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Use multiple portals for a balanced picture of listings, price guides, and current listing trends.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-primary">
                  <li>
                    <a
                      href="https://www.property.com.au/vic/leongatha-3953/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      Property.com.au suburb data <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.domain.com.au/suburb-profile/leongatha-vic-3953"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      Domain suburb profile <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </article>

              <article className="rounded-xl border border-border bg-card p-6">
                <Compass className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-serif text-xl text-foreground">Township filter</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Compare service-centre towns, boutique villages, and coastal access before narrowing your preferred area.
                </p>
              </article>

              <article className="rounded-xl border border-border bg-card p-6">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-serif text-xl text-foreground">Start with data, then inspect</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Start with census and council data, then validate with active listing pipelines and local agent commentary.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                South Gippsland statistics snapshot
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {statCards.map((item) => (
                  <article key={item.label} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="mt-2 font-serif text-3xl text-foreground">{item.value}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{item.note}</p>
                  </article>
                ))}
              </div>
              <div className="mt-6 text-sm text-muted-foreground">
                Sources:{" "}
                <a
                  href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/LGA27350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  ABS QuickStats (LGA27350)
                </a>
                .
              </div>
            </div>
          </div>
        </section>

        <section id="township-guides" className="bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                Drill down by location
              </h2>
              <p className="mt-3 max-w-3xl text-muted-foreground">
                These four guides help visitors compare choices across the same region, from service towns to lifestyle villages.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {townshipCards.map((town) => (
                  <article key={town.title} className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-serif text-2xl text-foreground">{town.title}</h3>
                    <p className="mt-2 text-muted-foreground">{town.description}</p>
                    <Link
                      href={town.href}
                      className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      Open guide <ExternalLink className="h-3 w-3" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl rounded-xl border border-border bg-card p-8">
              <h2 className="font-serif text-3xl text-foreground">Sources and deeper research</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/LGA27350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    ABS QuickStats: South Gippsland LGA
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.visitvictoria.com/regions/gippsland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Visit Victoria: Gippsland regional guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.realestate.com.au/buy/in-gippsland_south-vic/list-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    realestate.com.au: Gippsland South listings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-8 text-center">
              <h2 className="font-serif text-3xl text-foreground">Ready to compare with a live listing?</h2>
              <div className="mx-auto mt-4 max-w-2xl space-y-4 text-muted-foreground">
                <p>
                  After researching South Gippsland, many buyers move from regional exploration into specific listing comparison. That next step usually combines location fit, homesite scale, and access to the towns they plan to use most often.
                </p>
                <p>
                  Compare your shortlist against{" "}
                  <Link href="/" className="text-primary underline-offset-4 hover:underline">
                    Springbank
                  </Link>
                  , a 5-acre lifestyle property in Mardan positioned between{" "}
                  <Link href="/leongatha" className="text-primary underline-offset-4 hover:underline">
                    Leongatha
                  </Link>
                  ,{" "}
                  <Link href="/mirboo-north" className="text-primary underline-offset-4 hover:underline">
                    Mirboo North
                  </Link>
                  , and{" "}
                  <Link href="/meeniyan" className="text-primary underline-offset-4 hover:underline">
                    Meeniyan
                  </Link>
                  .
                </p>
              </div>
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
