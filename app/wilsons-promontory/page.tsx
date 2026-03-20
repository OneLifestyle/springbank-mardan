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
  Compass,
  ExternalLink,
  Home,
  MapPinned,
  Search,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Property Near Wilsons Promontory | Real Estate Access Guide",
  description:
    "Wilsons Promontory lifestyle and real estate access guide for buyers researching coastal proximity, holiday demand, and nearby property markets in South Gippsland.",
  keywords: [
    "Wilsons Promontory real estate",
    "acreage for sale prom country",
    "Wilsons Promontory lifestyle",
    "Wilsons Promontory holiday homes",
    "property near Wilsons Promontory",
    "houses near Wilsons Prom",
    "South Gippsland coastal lifestyle",
    "Yanakie real estate",
  ],
  alternates: {
    canonical: "https://springbankmardan.com/wilsons-promontory",
  },
  openGraph: {
    title: "Property Near Wilsons Promontory | Real Estate Access Guide",
    description:
      "Understand how Wilsons Promontory drives lifestyle demand and surrounding property searches in South Gippsland.",
    url: "https://springbankmardan.com/wilsons-promontory",
    siteName: "Springbank Mardan",
    type: "article",
    images: [
      {
        url: "/images/wikimedia/wilsons-prom-darby-beach.jpg",
        width: 1200,
        height: 630,
        alt: "Darby Beach at Wilsons Promontory National Park",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Wilsons Promontory National Park",
  description:
    "Major coastal national park in Victoria and a key lifestyle driver for surrounding South Gippsland property markets.",
  url: "https://springbankmardan.com/wilsons-promontory",
  geo: {
    "@type": "GeoCoordinates",
    latitude: -39.03,
    longitude: 146.32,
  },
};

const statCards = [
  {
    label: "Park area",
    value: "~50,500 ha",
    note: "Parks Victoria / Wikipedia",
  },
  {
    label: "Approx. drive from Melbourne",
    value: "~3 hours",
    note: "Parks Victoria",
  },
  {
    label: "Established",
    value: "1898",
    note: "Wikipedia",
  },
  {
    label: "Mainland distinction",
    value: "Southernmost point",
    note: "Parks Victoria",
  },
];

export default function WilsonsPromontoryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://springbankmardan.com" },
          {
            name: "Wilsons Promontory",
            item: "https://springbankmardan.com/wilsons-promontory",
          },
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
              Approx. 30-45 min from{" "}
              <Link href="/" className="text-primary underline-offset-4 hover:underline">
                Springbank
              </Link>
            </p>
          </div>
        </header>

        <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(65,115,132,0.2),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(162,116,84,0.2),transparent_42%)] py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Wilsons Promontory National Park
              </p>
              <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
                Wilsons Promontory lifestyle and nearby real estate guide
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Wilsons Promontory National Park is a major lifestyle drawcard for South Gippsland. There is no private housing inside the park, so most people stay in nearby towns such as Yanakie or Foster and use the region as a base for hikes, beaches, and wildlife.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/" className="gap-2">
                    <Home className="h-4 w-4" />
                    View Mardan acreage for sale
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
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
                  <a
                    href="https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Compass className="h-4 w-4" />
                    Parks Victoria guide
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
                  src="/images/wikimedia/wilsons-prom-darby-beach.jpg"
                  alt="Darby Beach at Wilsons Promontory National Park"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-t border-border p-4 text-xs text-muted-foreground">
                Image source: Wikimedia Commons,{" "}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Darby_Beach_Wilson%27s_Promontory.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Darby Beach Wilson&apos;s Promontory
                </a>{" "}
                by J27shaw, licensed{" "}
                <a
                  href="https://creativecommons.org/licenses/by-sa/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  CC BY-SA 4.0
                </a>
                .
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Wilsons Promontory overview</h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Visit Gippsland describes The Prom as a coastline of turquoise bays, iconic beaches, and walking tracks that range from easy scenic loops to multi-day hikes. Highlights include Squeaky Beach, the Mt Oberon Summit Walk, and wildlife sightings around Tidal River.
                </p>
                <p>
                  For people planning property access, the practical story is about living within reach of the park. Towns like Yanakie and Foster become the base for weekend hikes and visitors, while{" "}
                  <Link href="/south-gippsland" className="text-primary underline-offset-4 hover:underline">
                    South Gippsland
                  </Link>{" "}
                  townships provide the residential base.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-2xl text-foreground">Quick lifestyle notes</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>World-class beaches like Squeaky Beach and Norman Bay.</li>
                  <li>Signature walks: Mt Oberon and Tidal River to Squeaky Beach.</li>
                  <li>Wildlife sightings common around Tidal River and the Airfield.</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Overview sources:{" "}
              <a
                href="https://www.visitgippsland.com.au/destinations/south-gippsland/wilsons-promontory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Visit Gippsland: Wilsons Promontory
              </a>
              {" "}and{" "}
              <a
                href="https://www.visitgippsland.com.au/do-and-see/outdoor-activities/walking-and-hiking/mt-oberon-summit-walk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Mt Oberon Summit Walk
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
                <h3 className="font-serif text-xl text-foreground">Beach days and short walks</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Squeaky Beach, Norman Bay, and Whisky Bay are realistic day-trip options when you are based in nearby South Gippsland towns. Each offers a different experience, from iconic sand and surf to calmer shoreline stops suitable for multi-generation visits. For long-stay planning, this variety is useful because it supports repeat weekend use instead of one-off sightseeing.
                </p>
                <a
                  href="https://www.visitgippsland.com.au/do-and-see/nature-and-wildlife/beaches/squeaky-beach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Squeaky Beach <ExternalLink className="h-3 w-3" />
                </a>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Signature hikes</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mt Oberon Summit Walk and the Tidal River to Squeaky Beach route are two of the park&apos;s most recognisable day hikes. They offer different effort levels and views, which makes them suitable for repeat use across seasons and fitness levels. If outdoor access is part of your property criteria, these tracks are central to the local lifestyle proposition.
                </p>
                <a
                  href="https://www.visitgippsland.com.au/do-and-see/outdoor-activities/walking-and-hiking/tidal-river-to-squeaky-beach-walk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Tidal River walk <ExternalLink className="h-3 w-3" />
                </a>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Wildlife viewing</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kangaroos, wombats, emus, and coastal birdlife are common in and around Tidal River and open plains areas. Wildlife access is one of the reasons The Prom remains active outside peak summer, supporting year-round day trips from nearby towns. For buyers comparing locations, this adds depth beyond beaches alone and helps explain sustained visitation.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Base towns for The Prom</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Because private housing is not available inside the national park, Yanakie and Foster become practical base towns for regular access. They provide accommodation, services, and event activity while keeping travel times to park entry manageable. This base-town model is usually how long-stay buyers compare the Prom lifestyle against everyday liveability.
                </p>
                <a
                  href="https://www.visitgippsland.com.au/destinations/south-gippsland/yanakie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Yanakie guide <ExternalLink className="h-3 w-3" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <GuideEventsSection
          description="These events are in nearby South Gippsland towns commonly used as bases for The Prom. Confirm dates on the source pages before booking."
          events={guideEvents.wilsonsPromontory}
        />

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            <article className="rounded-xl border border-border bg-card p-6">
              <Waves className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl text-foreground">Coastal lifestyle anchor</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The park is one of Victoria&apos;s strongest nature drawcards and helps shape how people compare nearby towns.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <MapPinned className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl text-foreground">Access and location context</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                There is no private housing inside park boundaries, so nearby town comparison is the practical path.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl text-foreground">Nearby town links</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.realestate.com.au/buy/in-fish+creek,+vic+3959/list-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    Fish Creek listings <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.realestate.com.au/buy/in-yanakie,+vic+3960/list-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    Yanakie listings <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Wilsons Promontory statistics snapshot</h2>
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
              Sources:{" "}
              <a
                href="https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Parks Victoria
              </a>
              {" "}and{" "}
              <a
                href="https://en.wikipedia.org/wiki/Wilsons_Promontory_National_Park"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Wikipedia
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
                    href="https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Parks Victoria: Wilsons Promontory National Park
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.visitvictoria.com/regions/gippsland/see-and-do/nature-and-wildlife/national-parks/wilsons-promontory-national-park"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Visit Victoria: Wilsons Promontory guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Wilsons_Promontory_National_Park"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Wikipedia: Wilsons Promontory National Park
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

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">Next step for regional comparisons</h2>
              <div className="mt-4 max-w-4xl space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Most people treat Wilsons Promontory as a lifestyle filter first, then choose a nearby town that fits their practical housing criteria. Because there is no private housing inside the park, the real decision usually sits between service access, village scale, and travel time to Prom entry points. This makes cross-town comparison essential rather than optional.
                </p>
                <p>
                  Start with the{" "}
                  <Link href="/south-gippsland" className="text-primary underline-offset-4 hover:underline">
                    South Gippsland guide
                  </Link>
                  {" "}to benchmark nearby township options, then compare with{" "}
                  <Link href="/" className="text-primary underline-offset-4 hover:underline">
                    Springbank
                  </Link>
                  {" "}if a larger homesite with garden scale is part of your shortlist.
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
        </section>
      </main>
    </>
  );
}
