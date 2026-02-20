import React from "react"
import type { Metadata, Viewport } from "next";
import { Abril_Fatface, Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://springbankmardan.com"),
  alternates: {
    canonical: "https://springbankmardan.com",
  },
  title:
    "Springbank | 5-Acre Mediterranean Sanctuary in Mardan, South Gippsland - Near Leongatha, Mirboo North & Meeniyan",
  description:
    "Discover Springbank at 30 O'Malleys Rd, Mardan VIC. A master-built Mediterranean sanctuary on 5 acres with sweeping Tarwin Valley views, Robert Boyle-designed gardens, vineyard, and dam. 15 min to Leongatha, Mirboo North and Meeniyan. The ultimate South Gippsland tree change or sea change lifestyle property.",
  keywords: [
    "Springbank Mardan",
    "30 O'Malleys Road Mardan",
    "Mardan property for sale",
    "South Gippsland property",
    "South Gippsland real estate",
    "Leongatha property for sale",
    "Leongatha real estate",
    "Mirboo North property for sale",
    "Mirboo North real estate",
    "Meeniyan property for sale",
    "Meeniyan real estate",
    "lifestyle property South Gippsland",
    "tree change Victoria",
    "tree change South Gippsland",
    "sea change South Gippsland",
    "acreage property Gippsland",
    "Mediterranean home Victoria",
    "luxury rural property Victoria",
    "vineyard property for sale",
    "hobby farm South Gippsland",
    "Tarwin Valley views",
    "sustainable living Victoria",
    "5 acre property Victoria",
    "Wilson Promontory region",
    "Gippsland lifestyle property",
  ],
  openGraph: {
    title: "Springbank | 5-Acre Lifestyle Property in South Gippsland - Near Leongatha",
    description:
      "Master-built Mediterranean sanctuary on 5 acres in Mardan, 15 min to Leongatha, Mirboo North and Meeniyan. Sweeping Tarwin Valley views, Robert Boyle gardens, vineyard, and dam. The ultimate South Gippsland tree change.",
    url: "https://springbankmardan.com",
    siteName: "Springbank Mardan",
    type: "website",
    images: [
      {
        url: "/images/springbank/highlights/springbank-mardan-south-gippsland-lifestyle-property-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Springbank - Mediterranean sanctuary overlooking the Tarwin Valley in Mardan, VIC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Springbank | 5-Acre Lifestyle Property Near Leongatha, South Gippsland",
    description:
      "Mediterranean sanctuary on 5 acres in Mardan. 15 min to Leongatha, Mirboo North and Meeniyan. Tarwin Valley views, vineyard, Robert Boyle gardens.",
    images: ["/images/springbank/highlights/springbank-mardan-south-gippsland-lifestyle-property-hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunitoSans.variable} ${abrilFatface.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
