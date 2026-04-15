import React from "react"
import type { Metadata, Viewport } from "next";
import { Abril_Fatface, Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { heroImage } from "@/lib/gallery";
import { getGlobalOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/site-schema";
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
  title: "South Gippsland Acreage for Sale | Springbank Mardan",
  description:
    "Acreage for sale in South Gippsland, including Springbank at 30 O'Malleys Rd, Mardan VIC 3953.",
  keywords: [
    "South Gippsland real estate",
    "acreage for sale south gippsland",
    "mardan property for sale",
    "acreage property Gippsland",
  ],
  openGraph: {
    title: "South Gippsland Acreage for Sale | Springbank Mardan",
    description:
      "Acreage for sale in South Gippsland, including Springbank at 30 O'Malleys Rd, Mardan VIC 3953.",
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
  twitter: {
    card: "summary_large_image",
    title: "South Gippsland Acreage for Sale | Springbank Mardan",
    description:
      "Acreage for sale in South Gippsland, including Springbank at 30 O'Malleys Rd, Mardan VIC 3953.",
    images: [heroImage.src],
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
  const websiteJsonLd = getWebsiteJsonLd();
  const organizationJsonLd = getGlobalOrganizationJsonLd();

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunitoSans.variable} ${abrilFatface.variable} font-sans antialiased`}
      >
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17968493350"
        />
        <Script id="google-ads-gtag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4KKB61S7KL');
            gtag('config', 'AW-17968493350');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
