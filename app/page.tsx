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
import { springbankPropertyFacts, springbankPropertyPageContent, springbankSiteConfig } from "@/lib/springbank-config";

export const metadata: Metadata = {
  title: springbankPropertyPageContent.metadataTitle,
  description: springbankPropertyPageContent.metadataDescription,
  alternates: {
    canonical: "https://springbankmardan.com",
  },
  keywords: springbankPropertyPageContent.metadataKeywords,
  openGraph: {
    title: springbankPropertyPageContent.metadataTitle,
    description: springbankPropertyPageContent.metadataDescription,
    url: springbankSiteConfig.siteUrl,
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
        <HeroSection content={springbankPropertyPageContent.hero} priceDisplay={springbankPropertyFacts.priceDisplay} />
        <OverviewSection content={springbankPropertyPageContent.overview} />
        <BuyerFitSection content={springbankPropertyPageContent.buyerFit} />
        <FeaturesSection content={springbankPropertyPageContent.features} />
        <GroundsSection content={springbankPropertyPageContent.grounds} />
        <LocationSection content={springbankPropertyPageContent.location} />
        <WhatToKnowSection content={springbankPropertyPageContent.whatToKnow} />
        <FullGallerySection />
        <OpenHomePromoSection />
        <BlogPreviewSection featuredSlugs={springbankPropertyPageContent.featuredGuideSlugs} />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
