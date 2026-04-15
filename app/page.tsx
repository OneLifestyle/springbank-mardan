import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { OpenHomePromoSection } from "@/components/open-home-promo-section";
import { OverviewSection } from "@/components/overview-section";
import { BuyerFitSection } from "@/components/buyer-fit-section";
import { FeaturesSection } from "@/components/features-section";
import { FullGallerySection } from "@/components/full-gallery-section";
import { GroundsSection } from "@/components/grounds-section";
import { LocationSection } from "@/components/location-section";
import { BlogPreviewSection } from "@/components/blog-preview-section";
import { ContactSection } from "@/components/contact-section";
import { WhatToKnowSection } from "@/components/what-to-know-section";
import { Footer } from "@/components/footer";
import { heroImage } from "@/lib/gallery";
import { getRealEstateListingJsonLd } from "@/lib/site-schema";

export const metadata: Metadata = {
  title: "Acreage for Sale South Gippsland | 30 O'Malleys Rd, Mardan",
  description:
    "5-acre lifestyle property for sale at 30 O'Malleys Rd, Mardan VIC 3953 in South Gippsland. Near Leongatha, Meeniyan and Mirboo North. Inspect or enquire today.",
  alternates: {
    canonical: "https://springbankmardan.com",
  },
  keywords: [
    "acreage for sale south gippsland",
    "mardan property for sale",
    "30 o'malleys road mardan",
    "acreage for sale leongatha",
    "acreage for sale meeniyan",
    "acreage for sale mirboo north",
    "south gippsland real estate",
    "5 acre property victoria",
  ],
  openGraph: {
    title: "Acreage for Sale South Gippsland | 30 O'Malleys Rd, Mardan",
    description:
      "5-acre lifestyle property for sale in Mardan, South Gippsland, with valley views, studio, gardens, and open-home details.",
    url: "https://springbankmardan.com",
    siteName: "Springbank Mardan",
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

export default function SpringbankPropertyPage() {
  const listingJsonLd = getRealEstateListingJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }}
      />
      <main>
        <Navigation />
        <HeroSection />
        <OpenHomePromoSection />
        <OverviewSection />
        <BuyerFitSection />
        <FeaturesSection />
        <WhatToKnowSection />
        <FullGallerySection />
        <GroundsSection />
        <LocationSection />
        <BlogPreviewSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
