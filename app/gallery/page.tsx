import type { Metadata } from "next";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = {
  title: "Springbank Full Gallery | Mardan Lifestyle Property",
  description:
    "Browse the full Springbank gallery with interiors, exteriors, grounds, valley views, and plans.",
  alternates: {
    canonical: "https://springbankmardan.com/gallery",
  },
  openGraph: {
    title: "Springbank Full Gallery",
    description:
      "Full photo library for Springbank at 30 O'Malleys Rd, Mardan VIC 3953.",
    url: "https://springbankmardan.com/gallery",
    siteName: "Springbank Mardan",
    type: "website",
    images: [
      {
        url: "/images/gallery-dam-view.jpeg",
        width: 1200,
        height: 630,
        alt: "Springbank full gallery preview",
      },
    ],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
