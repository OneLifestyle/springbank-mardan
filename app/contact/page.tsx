import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { ContactSection } from "@/components/contact-section";
import { SITE_NAME, SITE_URL, getRealEstateAgentJsonLd } from "@/lib/site-schema";

export const metadata: Metadata = {
  title: "Contact Dean Jones | Springbank Mardan Enquiries",
  description:
    "Contact Dean Jones at One Lifestyle Real Estate about Springbank Mardan, 30 O'Malleys Road, Mardan VIC 3953.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Dean Jones | Springbank Mardan Enquiries",
    description:
      "Enquire about Springbank Mardan, arrange an inspection or ask for property details.",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function ContactPage() {
  const realEstateAgentJsonLd = getRealEstateAgentJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: SITE_URL },
          { name: "Contact", item: `${SITE_URL}/contact` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentJsonLd) }}
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
            <p className="text-sm text-muted-foreground">30 O&apos;Malleys Road, Mardan VIC 3953</p>
          </div>
        </header>
        <section className="border-b border-border bg-secondary/30 py-12">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl text-foreground md:text-6xl">Contact the Springbank agent</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Dean Jones at One Lifestyle Real Estate can confirm current availability, inspection options and property documents for Springbank Mardan.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
    </>
  );
}
