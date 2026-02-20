import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { OpenHomePromoSection } from "@/components/open-home-promo-section";
import { OverviewSection } from "@/components/overview-section";
import { FeaturesSection } from "@/components/features-section";
import { FullGallerySection } from "@/components/full-gallery-section";
import { GroundsSection } from "@/components/grounds-section";
import { LocationSection } from "@/components/location-section";
import { BlogPreviewSection } from "@/components/blog-preview-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Springbank - Mediterranean Sanctuary on 5 Acres",
  description:
    "A master-built Mediterranean-inspired sanctuary on approximately 5 acres in Mardan, South Gippsland. Featuring sweeping Tarwin Valley views, Robert Boyle-designed gardens, Pinot Noir vineyard, dam, poured earth studio, and EV charging. Located 15 minutes from Leongatha, Mirboo North and Meeniyan.",
  url: "https://springbankmardan.com",
  image: "https://springbankmardan.com/images/hero.jpeg",
  datePosted: "2026-01-27",
  offers: {
    "@type": "Offer",
    priceCurrency: "AUD",
    price: "1500000",
    url: "https://springbankmardan.com",
  },
  about: {
    "@type": "SingleFamilyResidence",
    name: "Springbank",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30 O'Malleys Road",
      addressLocality: "Mardan",
      addressRegion: "VIC",
      postalCode: "3953",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -38.4567,
      longitude: 145.8234,
    },
    numberOfRooms: 8,
    numberOfBedrooms: 5,
    numberOfBathroomsTotal: 2,
    floorSize: {
      "@type": "QuantitativeValue",
      value: 471,
      unitCode: "SQM",
    },
    lotSize: {
      "@type": "QuantitativeValue",
      value: 2,
      unitCode: "HAR",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Pinot Noir vineyard" },
      { "@type": "LocationFeatureSpecification", name: "Robert Boyle-designed gardens" },
      { "@type": "LocationFeatureSpecification", name: "530m private walking track" },
      { "@type": "LocationFeatureSpecification", name: "Poured earth studio with EV charging" },
      { "@type": "LocationFeatureSpecification", name: "Dam with merbau deck" },
      { "@type": "LocationFeatureSpecification", name: "Passive solar design" },
      { "@type": "LocationFeatureSpecification", name: "Hydronic heating" },
      { "@type": "LocationFeatureSpecification", name: "Double garage and carport" },
    ],
  },
  broker: {
    "@type": "RealEstateAgent",
    name: "One Lifestyle Real Estate",
    url: "https://onelifestyle.com.au",
    employee: {
      "@type": "Person",
      name: "Dean Jones",
      telephone: "+61 438 079 904",
      jobTitle: "Licensed Estate Agent / Director",
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Springbank, Mardan",
  description:
    "Luxury lifestyle property on 5 acres in Mardan, South Gippsland, Victoria. Centrally located between Leongatha, Mirboo North, and Meeniyan in the heart of the Tarwin Valley. Ideal for tree changers and sea changers seeking premium country living near Wilsons Promontory.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 O'Malleys Road",
    addressLocality: "Mardan",
    addressRegion: "VIC",
    postalCode: "3953",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.4567,
    longitude: 145.8234,
  },
  containedInPlace: [
    { "@type": "AdministrativeArea", name: "South Gippsland" },
    { "@type": "AdministrativeArea", name: "Gippsland, Victoria" },
  ],
};

export default function SpringbankPropertyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <main>
        <Navigation />
        <HeroSection />
        <OpenHomePromoSection />
        <OverviewSection />
        <FeaturesSection />
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
