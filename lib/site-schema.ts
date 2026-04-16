import type { BlogPost } from "@/lib/blog";
import { springbankPropertyEntity, springbankPropertyFacts, springbankSiteConfig } from "@/lib/springbank-config";

export const SITE_URL = springbankSiteConfig.siteUrl;
export const SITE_NAME = springbankSiteConfig.siteName;
export const SITE_DESCRIPTION = springbankSiteConfig.defaultMetaDescription;
export const DEFAULT_SHARE_IMAGE = springbankSiteConfig.defaultShareImage;
export const BLOG_URL = `${SITE_URL}/blog`;
export const BLOG_NAME = "Springbank Journal";
export const DEFAULT_BLOG_DESCRIPTION =
  "Buyer-focused South Gippsland real estate blog with guides on acreage for sale, township comparisons, and lifestyle-property inspection strategy.";

function getLotSizeHectares() {
  const { landSize, landUnit } = springbankPropertyFacts;
  const normalizedUnit = landUnit.trim().toLowerCase();

  if (normalizedUnit === "hectares" || normalizedUnit === "hectare" || normalizedUnit === "ha") {
    return landSize;
  }

  if (normalizedUnit === "acres" || normalizedUnit === "acre") {
    return Number((landSize * 0.40468564224).toFixed(3));
  }

  return undefined;
}

export const LISTING_PUBLISHER = {
  name: springbankSiteConfig.agencyName,
  url: springbankSiteConfig.agencyUrl,
  email: springbankSiteConfig.contactEmail,
  telephone: springbankSiteConfig.contactPhone,
};

export const DEFAULT_BLOG_AUTHOR = {
  name: springbankSiteConfig.agentName,
  role: springbankSiteConfig.agentRole,
};

export const LISTING_DETAILS = {
  name: `${springbankPropertyEntity.addressLine} - Tuscan-Inspired Mediterranean Residence on 5 Acres`,
  addressLine: springbankPropertyEntity.addressLine,
  streetAddress: springbankPropertyEntity.streetAddress,
  locality: springbankPropertyEntity.locality,
  region: springbankPropertyEntity.region,
  postalCode: springbankPropertyEntity.postalCode,
  country: springbankPropertyEntity.country,
  description: springbankPropertyEntity.fullDescription,
  listingUrl: SITE_URL,
  image: DEFAULT_SHARE_IMAGE,
  datePosted: "2026-01-27",
  priceCurrency: "AUD",
  price: String(springbankPropertyFacts.priceNumeric),
  latitude: springbankPropertyEntity.lat,
  longitude: springbankPropertyEntity.lng,
  numberOfRooms: springbankPropertyFacts.numberOfRooms ?? springbankPropertyFacts.bedrooms,
  numberOfBedrooms: springbankPropertyFacts.bedrooms,
  numberOfBathroomsTotal: springbankPropertyFacts.bathrooms,
  floorSizeSqm: springbankPropertyFacts.floorArea ?? 471,
  lotSizeHectares: getLotSizeHectares(),
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
    `Open Home at ${springbankPropertyEntity.addressLine}. Saturday 18 April 2026, 11am to 12pm.`,
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
      ...(LISTING_DETAILS.lotSizeHectares
        ? {
            lotSize: {
              "@type": "QuantitativeValue",
              value: LISTING_DETAILS.lotSizeHectares,
              unitCode: "HAR",
            },
          }
        : {}),
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
