import type { BlogPost } from "@/lib/blog";
import { heroImage, propertyFilm, propertyImages } from "@/lib/gallery";
import { springbankPropertyEntity, springbankPropertyFacts, springbankSiteConfig } from "@/lib/springbank-config";

export const SITE_URL = springbankSiteConfig.siteUrl;
export const SITE_NAME = springbankSiteConfig.siteName;
export const SITE_DESCRIPTION = springbankSiteConfig.defaultMetaDescription;
export const DEFAULT_SHARE_IMAGE = springbankSiteConfig.defaultShareImage;
export const BLOG_URL = `${SITE_URL}/blog`;
export const BLOG_NAME = "Springbank Journal";
export const DEFAULT_BLOG_DESCRIPTION =
  "Buyer-focused South Gippsland real estate blog with guides on acreage for sale, township comparisons, and lifestyle-property inspection strategy.";

const IDS = {
  website: `${SITE_URL}/#website`,
  publisher: `${SITE_URL}/#publisher`,
  realEstateAgent: `${SITE_URL}/#real-estate-agent`,
  agentPerson: `${SITE_URL}/#dean-jones`,
  property: `${SITE_URL}/#property`,
  listing: `${SITE_URL}/#listing`,
  offer: `${SITE_URL}/#offer`,
  homepage: `${SITE_URL}/#webpage`,
  galleryPage: `${SITE_URL}/gallery#webpage`,
  gallery: `${SITE_URL}/gallery#gallery`,
  propertyFilm: `${SITE_URL}/gallery#property-film`,
} as const;

function absoluteUrl(value: string) {
  return value.startsWith("http") ? value : `${SITE_URL}${value}`;
}

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
  startDate: "2026-06-06T13:00:00+10:00",
  endDate: "2026-06-06T14:00:00+10:00",
  displayDate: "Saturday 6 June 2026",
  displayTime: "1:00pm to 2:00pm",
  teaserTime: "King's Birthday weekend, Saturday 6 June, 1pm to 2pm",
  url: `${SITE_URL}/open-home`,
  image: DEFAULT_SHARE_IMAGE,
  description:
    `Open Home at ${springbankPropertyEntity.addressLine}. King's Birthday weekend, Saturday 6 June 2026, 1pm to 2pm.`,
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
    ? absoluteUrl(post.heroImage.src)
    : DEFAULT_SHARE_IMAGE;
}

export function getGlobalOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": IDS.publisher,
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
    "@id": IDS.website,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@id": IDS.publisher,
    },
  };
}

export function getRealEstateAgentJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": IDS.realEstateAgent,
    name: LISTING_PUBLISHER.name,
    url: LISTING_PUBLISHER.url,
    email: LISTING_PUBLISHER.email,
    telephone: LISTING_PUBLISHER.telephone,
    areaServed: [
      "Mardan",
      "Leongatha",
      "Meeniyan",
      "Mirboo North",
      "South Gippsland",
    ],
    employee: {
      "@type": "Person",
      "@id": IDS.agentPerson,
      name: DEFAULT_BLOG_AUTHOR.name,
      jobTitle: DEFAULT_BLOG_AUTHOR.role,
      telephone: LISTING_PUBLISHER.telephone,
      email: LISTING_PUBLISHER.email,
      worksFor: {
        "@id": IDS.realEstateAgent,
      },
    },
  };
}

export function getFaqPageJsonLd(
  faqs: Array<{ question: string; answer: string }>,
  id: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getArticleJsonLd(input: {
  url: string;
  title: string;
  description: string;
  dateModified: string;
  datePublished?: string;
  section?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${input.url}#article`,
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished ?? input.dateModified,
    dateModified: input.dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
    articleSection: input.section,
    author: {
      "@type": "Person",
      "@id": IDS.agentPerson,
      name: DEFAULT_BLOG_AUTHOR.name,
      jobTitle: DEFAULT_BLOG_AUTHOR.role,
    },
    publisher: {
      "@type": "Organization",
      "@id": IDS.publisher,
      name: LISTING_PUBLISHER.name,
      url: LISTING_PUBLISHER.url,
    },
  };
}

function getPropertyResidenceJsonLd() {
  return {
    "@type": "SingleFamilyResidence",
    "@id": IDS.property,
    name: "Springbank",
    description: LISTING_DETAILS.description,
    url: LISTING_DETAILS.listingUrl,
    image: absoluteUrl(heroImage.src),
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
  };
}

export function getRealEstateListingJsonLd() {
  const primaryImage = {
    "@type": "ImageObject",
    "@id": `${absoluteUrl(heroImage.src)}#image`,
    contentUrl: absoluteUrl(heroImage.src),
    url: absoluteUrl(heroImage.src),
    caption: heroImage.caption ?? heroImage.alt,
    description: heroImage.alt,
    representativeOfPage: true,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": IDS.homepage,
        url: SITE_URL,
        name: springbankSiteConfig.defaultMetaTitle,
        description: springbankSiteConfig.defaultMetaDescription,
        isPartOf: { "@id": IDS.website },
        primaryImageOfPage: { "@id": primaryImage["@id"] },
        mainEntity: { "@id": IDS.listing },
        about: { "@id": IDS.property },
      },
      primaryImage,
      {
        "@type": "RealEstateListing",
        "@id": IDS.listing,
        name: LISTING_DETAILS.name,
        description: LISTING_DETAILS.description,
        url: LISTING_DETAILS.listingUrl,
        mainEntityOfPage: { "@id": IDS.homepage },
        image: absoluteUrl(heroImage.src),
        datePosted: LISTING_DETAILS.datePosted,
        about: { "@id": IDS.property },
        offers: { "@id": IDS.offer },
        broker: { "@id": IDS.realEstateAgent },
      },
      {
        "@type": "Offer",
        "@id": IDS.offer,
        priceCurrency: LISTING_DETAILS.priceCurrency,
        price: LISTING_DETAILS.price,
        url: LISTING_DETAILS.listingUrl,
        itemOffered: { "@id": IDS.property },
        seller: { "@id": IDS.realEstateAgent },
      },
      getPropertyResidenceJsonLd(),
    ],
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
      "@id": IDS.realEstateAgent,
    },
    image: [OPEN_HOME_EVENT.image],
    url: OPEN_HOME_EVENT.url,
    description: OPEN_HOME_EVENT.description,
  };
}

function getPropertyImageObjects() {
  return propertyImages.map((image, index) => ({
    "@type": "ImageObject",
    "@id": `${absoluteUrl(image.src)}#image`,
    contentUrl: absoluteUrl(image.src),
    url: absoluteUrl(image.src),
    caption: image.caption ?? image.alt,
    description: image.alt,
    position: index + 1,
    representativeOfPage: image.src === heroImage.src,
  }));
}

function getPropertyFilmEmbedUrl() {
  const shortMatch = propertyFilm.youtubeUrl.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/);
  const watchMatch = propertyFilm.youtubeUrl.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
  const id = shortMatch?.[1] ?? watchMatch?.[1];

  return id ? `https://www.youtube.com/embed/${id}` : propertyFilm.youtubeUrl;
}

export function getGalleryPageJsonLd() {
  const imageObjects = getPropertyImageObjects();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": IDS.galleryPage,
        url: `${SITE_URL}/gallery`,
        name: "Springbank property gallery: interiors, grounds and plans",
        description:
          "Full image and video gallery for Springbank at 30 O'Malleys Rd, Mardan VIC 3953.",
        isPartOf: { "@id": IDS.website },
        about: { "@id": IDS.property },
        mainEntity: { "@id": IDS.gallery },
        primaryImageOfPage: { "@id": `${absoluteUrl(heroImage.src)}#image` },
      },
      {
        "@type": "ImageGallery",
        "@id": IDS.gallery,
        name: "Springbank Property Gallery",
        url: `${SITE_URL}/gallery`,
        about: { "@id": IDS.property },
        associatedMedia: imageObjects.map((image) => ({ "@id": image["@id"] })),
        video: { "@id": IDS.propertyFilm },
      },
      {
        "@type": "VideoObject",
        "@id": IDS.propertyFilm,
        name: propertyFilm.title,
        description: propertyFilm.description,
        thumbnailUrl: [absoluteUrl(propertyFilm.fallbackImage)],
        embedUrl: getPropertyFilmEmbedUrl(),
        url: propertyFilm.youtubeUrl,
        about: { "@id": IDS.property },
      },
      ...imageObjects,
    ],
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
      "@id": IDS.publisher,
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
      "@id": IDS.agentPerson,
      name: author.name,
      ...(author.role ? { jobTitle: author.role } : {}),
      affiliation: {
        "@id": IDS.realEstateAgent,
      },
    },
    publisher: {
      "@type": "Organization",
      "@id": IDS.publisher,
      name: publisher.name,
      url: publisher.url ?? LISTING_PUBLISHER.url,
    },
    ...(post.sourceUrl ? { citation: post.sourceUrl } : {}),
  };
}
