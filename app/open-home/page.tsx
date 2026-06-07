import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { getOpenHomeGalleryHighlights, heroImage } from "@/lib/gallery";
import { springbankSiteConfig } from "@/lib/springbank-config";
import { LISTING_DETAILS } from "@/lib/site-schema";

export const metadata: Metadata = {
  title: "Mardan Open Home Updates | 30 O'Malleys Rd",
  description:
    "Open home updates for this Mardan acreage for sale at 30 O'Malleys Rd. No open homes are currently planned; check back for future inspection windows.",
  alternates: {
    canonical: "https://springbankmardan.com/open-home",
  },
  openGraph: {
    title: "Mardan Open Home Updates | 30 O'Malleys Rd",
    description:
      "No open homes are currently planned for 30 O'Malleys Rd, Mardan. Check back for future inspection windows or contact the agent.",
    url: `${springbankSiteConfig.siteUrl}/open-home`,
    siteName: springbankSiteConfig.siteName,
    type: "website",
    images: [
      {
        url: heroImage.src,
        width: 1200,
        height: 630,
        alt: heroImage.alt,
      },
    ],
  },
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

export default function OpenHomePage() {
  const galleryImages = getOpenHomeGalleryHighlights(6);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://springbankmardan.com" },
          { name: "Open Home Updates", item: "https://springbankmardan.com/open-home" },
        ]}
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
            <p className="text-sm text-muted-foreground">Open home updates</p>
          </div>
        </header>

        <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(190,124,86,0.24),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(57,85,73,0.22),transparent_42%)] py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Open Home Updates
              </p>
              <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
                No open homes are currently planned
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                There are no scheduled open homes for 30 O&apos;Malleys Rd, Mardan at this time.
                Please check back often for the next planned inspection window.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                When a new open home is arranged, this page will be updated with the date, time,
                location details, and any notes for South Gippsland buyers planning a visit.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Status</p>
                  <p className="mt-2 text-sm text-foreground">No open home currently scheduled</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Location</p>
                  <p className="mt-2 text-sm text-foreground">{LISTING_DETAILS.addressLine}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="tel:0431639749" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Call Dean Jones
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <Link href="/">View full listing website</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <a href="mailto:dean@onelifestyle.com.au">Email the agent</a>
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
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  unoptimized
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
                This Tuscan-inspired Mediterranean residence was designed to do more than present
                well on inspection day. The upstairs living areas are fully double glazed, the
                orientation supports passive solar comfort, and the main dwelling sits comfortably
                within sweeping views across the Tarwin Valley toward the Hoddle Range.
              </p>
              <p>
                A future open home will give buyers a direct feel for the key spaces that define the
                property&apos;s value: rare Peppermint Gum flooring, high ceilings, a renovated
                timber-bench kitchen with island, and a substantially upgraded lower level with spa
                bathroom and kitchenette facilities.
              </p>
              <p>
                Outside, the Robert Boyle designed gardens, vineyard, orchard plantings, private
                walking track, and poured-earth studio building reinforce the lifestyle depth that is
                difficult to assess from photos alone.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Property gallery</h2>
            <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
              These photos are from the main Springbank gallery and show the grounds, outdoor living
              zones, and valley setting ahead of any future inspection window.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image) => (
                <article key={image.src} className="overflow-hidden rounded-xl border border-border bg-card">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      unoptimized
                      className="object-cover"
                    />
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
                <h2 className="font-serif text-3xl text-foreground md:text-4xl">What to expect at a future inspection</h2>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  {expectations.map((item) => (
                    <li key={item} className="rounded-lg border border-border bg-card px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="h-fit rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-2xl text-foreground">Current inspection status</h3>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <CalendarDays className="h-4 w-4 mt-0.5 text-primary" />
                    No open home currently scheduled
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
