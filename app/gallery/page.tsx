import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { heroImage } from "@/lib/gallery";
import { springbankSiteConfig } from "@/lib/springbank-config";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = {
  title: "Mardan Property for Sale Gallery | Springbank Photos",
  description:
    "Browse the full gallery for this Mardan property for sale, including interiors, grounds, valley views, and plans before inspection.",
  alternates: {
    canonical: "https://springbankmardan.com/gallery",
  },
  openGraph: {
    title: "Mardan Property for Sale Gallery | Springbank Photos",
    description:
      "Full photo library for Springbank at 30 O'Malleys Rd, Mardan VIC 3953.",
    url: `${springbankSiteConfig.siteUrl}/gallery`,
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

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://springbankmardan.com" },
          { name: "Gallery", item: "https://springbankmardan.com/gallery" },
        ]}
      />
      <GalleryClient />
    </>
  );
}
