import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Open Home Saturday 28 February | Springbank Mardan",
  description:
    "Open Home at Springbank, 30 O'Malleys Rd Mardan VIC 3953. Saturday 28 February 2026, 12pm to 1pm.",
  alternates: {
    canonical: "https://springbankmardan.com/open-home",
  },
  openGraph: {
    title: "Open Home | Springbank Mardan",
    description:
      "Inspect Springbank on Saturday 28 February 2026 from 12pm to 1pm.",
    url: "https://springbankmardan.com/open-home",
    siteName: "Springbank Mardan",
    type: "website",
    images: [
      {
        url: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-dam-view.jpg",
        width: 1200,
        height: 630,
        alt: "Springbank open home in Mardan",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Open Home - Springbank Mediterranean Sanctuary",
  startDate: "2026-02-28T12:00:00+11:00",
  endDate: "2026-02-28T13:00:00+11:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Springbank",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30 O'Malleys Rd",
      addressLocality: "Mardan",
      addressRegion: "VIC",
      postalCode: "3953",
      addressCountry: "AU",
    },
  },
  organizer: {
    "@type": "RealEstateAgent",
    name: "One Lifestyle Real Estate",
    url: "https://onelifestylerealestate.com.au",
  },
  image: ["https://springbankmardan.com/images/springbank/highlights/springbank-mardan-south-gippsland-property-dam-view.jpg"],
  url: "https://springbankmardan.com/open-home",
  description:
    "Open Home at Springbank, 30 O'Malleys Rd Mardan VIC 3953. Saturday 28 February 2026, 12pm to 1pm.",
};

const expectations = [
  "Master-built residence situated on 5 acres of prime soil.",
  "Rare Peppermint Gum flooring and soaring high ceilings.",
  "Renovated kitchen with polished timber benchtops and large island.",
  "Substantially upgraded lower level with spa bathroom and kitchenette facilities.",
  "Separate studio-style space with EV charging.",
  "Passive solar design, double glazing, solar power, wood heater and split system air conditioning for year-round comfort.",
  "Robert Boyle designed gardens featuring vineyard and orchard plantings.",
  "Private 530-metre walking and running track encircling the grounds.",
];

const galleryImages = [
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-dam-view.jpg",
    alt: "Springbank from the dam with merbau deck, sweeping lawns and established gardens",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-terrace-view.jpg",
    alt: "Outdoor terrace with panoramic valley views",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-olive-path.jpg",
    alt: "Olive tree-lined pathway through the grounds",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-main-residence-studio.jpg",
    alt: "Main residence and poured earth studio",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-robert-boyle-gardens.jpg",
    alt: "Robert Boyle designed gardens with mature trees",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-tarwin-valley-views.jpg",
    alt: "Sweeping Tarwin Valley views from the property",
  },
];

export default function OpenHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
            <p className="text-sm text-muted-foreground">Open Home Saturday 28 February, 12pm to 1pm</p>
          </div>
        </header>

        <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(190,124,86,0.24),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(57,85,73,0.22),transparent_42%)] py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Open Home Event
              </p>
              <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
                Springbank Mediterranean Sanctuary
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Discover Springbank, a master-built Mediterranean-inspired sanctuary offering sustainable comfort and breathtaking views across the Tarwin Valley.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Date</p>
                  <p className="mt-2 text-sm text-foreground">Saturday 28 February 2026</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Time</p>
                  <p className="mt-2 text-sm text-foreground">12:00pm to 1:00pm</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Location</p>
                  <p className="mt-2 text-sm text-foreground">30 O&apos;Malleys Rd, Mardan VIC 3953</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a
                    href="https://www.facebook.com/events/25736775532617953"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    Open Facebook event
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <Link href="/">View full listing website</Link>
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
                  src="/images/springbank/highlights/springbank-mardan-south-gippsland-property-dam-view.jpg"
                  alt="Springbank residence and grounds during open home season"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Springbank property overview</h2>
            <div className="mt-5 max-w-4xl space-y-4 text-muted-foreground">
              <p>
                In a marketplace often dominated by traditional colonial homesteads, Springbank stands apart as a Mediterranean-inspired residence designed for sustainable comfort, visual impact, and practical long-term liveability. The home was master-built with orientation and environmental performance in mind, capturing sweeping views across the Tarwin Valley toward the Hoddle Range.
              </p>
              <p>
                The open home gives buyers a direct feel for key spaces that define the property&apos;s appeal: rare Peppermint Gum flooring, high ceilings, a renovated timber-bench kitchen with island, and a substantially upgraded lower level with spa bathroom and kitchenette facilities. Outside, the Robert Boyle designed gardens, vineyard, orchard plantings, and private walking track reinforce the lifestyle depth that is difficult to assess from photos alone.
              </p>
              <p>
                Located in Mardan with straightforward access to Leongatha, Mirboo North, and Meeniyan, Springbank combines rural privacy with practical regional connection. For buyers searching tree-change property in South Gippsland, this inspection is designed to show both craftsmanship and day-to-day usability in the one visit window.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Property gallery</h2>
            <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
              These photos are from the main Springbank gallery and show the grounds, outdoor living zones, and valley setting ahead of inspection.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image) => (
                <article key={image.src} className="overflow-hidden rounded-xl border border-border bg-card">
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                  </div>
                  <p className="border-t border-border p-3 text-xs text-muted-foreground">{image.alt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
              <div>
                <h2 className="font-serif text-3xl text-foreground md:text-4xl">What to expect</h2>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  {expectations.map((item) => (
                    <li key={item} className="rounded-lg border border-border bg-card px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="h-fit rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-2xl text-foreground">Inspection details</h3>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <CalendarDays className="h-4 w-4 mt-0.5 text-primary" />
                    Saturday 28 February 2026
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock3 className="h-4 w-4 mt-0.5 text-primary" />
                    12:00pm to 1:00pm
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                    30 O&apos;Malleys Rd, Mardan VIC 3953
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href="tel:0431639749"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
                  >
                    <Phone className="h-4 w-4" />
                    Dean Jones 0431 639 749
                  </a>
                  <a
                    href="https://www.facebook.com/events/25736775532617953"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/50"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Facebook event details
                  </a>
                  <a
                    href="mailto:dean@onelifestyle.com.au"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/50"
                  >
                    <Mail className="h-4 w-4" />
                    dean@onelifestyle.com.au
                  </a>
                  <Button size="lg" variant="outline" asChild className="w-full bg-transparent">
                    <Link href="/">View full listing website</Link>
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
