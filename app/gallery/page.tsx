import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
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
    url: "https://springbankmardan.com/gallery",
    siteName: "Springbank Mardan",
    type: "website",
    images: [
      {
        url: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-dam-view.jpg",
        width: 1200,
        height: 630,
        alt: "Springbank full gallery preview",
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
