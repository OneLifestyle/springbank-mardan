import type { BlogPost } from "@/lib/blog";
import { heroImage } from "@/lib/gallery";

export const SITE_URL = "https://springbankmardan.com";
export const SITE_NAME = "Springbank Mardan";
export const SITE_DESCRIPTION =
  "Acreage for sale in South Gippsland at 30 O'Malleys Rd, Mardan VIC 3953. Tuscan-inspired Mediterranean residence on 5 acres near Leongatha, Meeniyan and Mirboo North.";
export const DEFAULT_SHARE_IMAGE =
  `${SITE_URL}${heroImage.src}`;
export const BLOG_URL = `${SITE_URL}/blog`;
export const BLOG_NAME = "Springbank Journal";
export const DEFAULT_BLOG_DESCRIPTION =
  "Buyer-focused South Gippsland real estate blog with guides on acreage for sale, township comparisons, and lifestyle-property inspection strategy.";

export const LISTING_PUBLISHER = {
  name: "One Lifestyle Real Estate",
  url: "https://onelifestylerealestate.com.au",
  email: "dean@onelifestyle.com.au",
  telephone: "+61 431 639 749",
};

export const DEFAULT_BLOG_AUTHOR = {
  name: "Dean Jones",
  role: "Licensed Estate Agent",
};

export const LISTING_DETAILS = {
  name: "30 O'Malleys Rd, Mardan - Tuscan-Inspired Mediterranean Residence on 5 Acres",
  addressLine: "30 O'Malleys Rd, Mardan VIC 3953",
  streetAddress: "30 O'Malleys Road",
  locality: "Mardan",
  region: "VIC",
  postalCode: "3953",
  country: "AU",
  description:
    "Tuscan-inspired Mediterranean residence on approximately 5 acres in Mardan, South Gippsland. Featuring Tarwin Valley views, fully double glazed main living spaces, passive solar comfort, Robert Boyle-designed gardens, Pinot Noir vineyard, dam, and a poured earth studio with stable year-round temperatures. Located 15 minutes from Leongatha, Mirboo North and Meeniyan.",
  listingUrl: SITE_URL,
  image: DEFAULT_SHARE_IMAGE,
  datePosted: "2026-01-27",
  priceCurrency: "AUD",
  price: "1280000",
  latitude: -38.4567,
  longitude: 145.8234,
  numberOfRooms: 8,
  numberOfBedrooms: 5,
  numberOfBathroomsTotal: 2,
  floorSizeSqm: 471,
  lotSizeHectares: 2,
};

export const OPEN_HOME_EVENT = {
  name: "Open Home - Springbank Mediterranean Sanctuary",
  startDate: "2026-04-18T11:00:00+10:00",
  endDate: "2026-04-18T12:00:00+10:00",
  displayDate: "Saturday 18 April 2026",
  displayTime: "11:00am to 12:00pm",
  teaserTime: "Saturday 18 April, 11am to 12pm",
  url: `${SITE_URL}/open-home`,
  image: DEFAULT_SHARE_IMAGE,
  description:
    "Open Home at 30 O'Malleys Rd, Mardan VIC 3953. Saturday 18 April 2026, 11am to 12pm.",
};

type BlogAuthor = {
  name: string;
  role?: string;
};

type BlogPublisher = {
  name: string;
  url?: string;
};

function getBlogAuthor(post: BlogPost): BlogAuthor {
  return post.author ?? DEFAULT_BLOG_AUTHOR;
}

function getBlogPublisher(post: BlogPost): BlogPublisher {
  return post.publisher ?? {
    name: LISTING_PUBLISHER.name,
    url: LISTING_PUBLISHER.url,
  };
}

function getBlogImage(post: BlogPost): string {
  return post.heroImage?.src
    ? `${SITE_URL}${post.heroImage.src}`
    : DEFAULT_SHARE_IMAGE;
}

export function getGlobalOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#publisher`,
    name: LISTING_PUBLISHER.name,
    url: LISTING_PUBLISHER.url,
    email: LISTING_PUBLISHER.email,
    telephone: LISTING_PUBLISHER.telephone,
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#publisher`,
    },
  };
}

export function getRealEstateListingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": `${SITE_URL}/#listing`,
    name: LISTING_DETAILS.name,
    description: LISTING_DETAILS.description,
    url: LISTING_DETAILS.listingUrl,
    mainEntityOfPage: SITE_URL,
    image: LISTING_DETAILS.image,
    datePosted: LISTING_DETAILS.datePosted,
    offers: {
      "@type": "Offer",
      priceCurrency: LISTING_DETAILS.priceCurrency,
      price: LISTING_DETAILS.price,
      url: LISTING_DETAILS.listingUrl,
    },
    about: {
      "@type": "SingleFamilyResidence",
      name: "Springbank",
      address: {
        "@type": "PostalAddress",
        streetAddress: LISTING_DETAILS.streetAddress,
        addressLocality: LISTING_DETAILS.locality,
        addressRegion: LISTING_DETAILS.region,
        postalCode: LISTING_DETAILS.postalCode,
        addressCountry: LISTING_DETAILS.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: LISTING_DETAILS.latitude,
        longitude: LISTING_DETAILS.longitude,
      },
      numberOfRooms: LISTING_DETAILS.numberOfRooms,
      numberOfBedrooms: LISTING_DETAILS.numberOfBedrooms,
      numberOfBathroomsTotal: LISTING_DETAILS.numberOfBathroomsTotal,
      floorSize: {
        "@type": "QuantitativeValue",
        value: LISTING_DETAILS.floorSizeSqm,
        unitCode: "SQM",
      },
      lotSize: {
        "@type": "QuantitativeValue",
        value: LISTING_DETAILS.lotSizeHectares,
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
      "@id": `${SITE_URL}/#publisher`,
      name: LISTING_PUBLISHER.name,
      url: LISTING_PUBLISHER.url,
      telephone: LISTING_PUBLISHER.telephone,
      email: LISTING_PUBLISHER.email,
      employee: {
        "@type": "Person",
        name: DEFAULT_BLOG_AUTHOR.name,
        telephone: LISTING_PUBLISHER.telephone,
        email: LISTING_PUBLISHER.email,
        jobTitle: DEFAULT_BLOG_AUTHOR.role,
      },
    },
  };
}

export function getOpenHomeEventJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${OPEN_HOME_EVENT.url}#event`,
    name: OPEN_HOME_EVENT.name,
    startDate: OPEN_HOME_EVENT.startDate,
    endDate: OPEN_HOME_EVENT.endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Springbank",
      address: {
        "@type": "PostalAddress",
        streetAddress: "30 O'Malleys Rd",
        addressLocality: "Mardan",
        addressRegion: "VIC",
        postalCode: "3953",
        addressCountry: "AU",
      },
    },
    organizer: {
      "@id": `${SITE_URL}/#publisher`,
    },
    image: [OPEN_HOME_EVENT.image],
    url: OPEN_HOME_EVENT.url,
    description: OPEN_HOME_EVENT.description,
  };
}

export function getBlogCollectionPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BLOG_URL}#collection`,
    name: BLOG_NAME,
    url: BLOG_URL,
    description: DEFAULT_BLOG_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#publisher`,
    },
    mainEntity: {
      "@type": "CreativeWorkSeries",
      name: BLOG_NAME,
      url: BLOG_URL,
    },
  };
}

export function getBlogPostingJsonLd(post: BlogPost) {
  const author = getBlogAuthor(post);
  const publisher = getBlogPublisher(post);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    isPartOf: {
      "@type": "CollectionPage",
      "@id": `${BLOG_URL}#collection`,
      name: BLOG_NAME,
      url: BLOG_URL,
    },
    articleSection: post.categories,
    keywords: post.tags.join(", "),
    image: [getBlogImage(post)],
    author: {
      "@type": "Person",
      name: author.name,
      ...(author.role ? { jobTitle: author.role } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: publisher.name,
      url: publisher.url ?? LISTING_PUBLISHER.url,
    },
    ...(post.sourceUrl ? { citation: post.sourceUrl } : {}),
  };
}
