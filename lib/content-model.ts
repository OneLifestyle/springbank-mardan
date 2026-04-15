export type SiteConfig = {
  siteName: string;
  siteUrl: string;
  brandLabel: string;
  defaultMetaTitle: string;
  defaultMetaDescription: string;
  defaultShareImage: string;
  contactEmail: string;
  contactPhone: string;
  agentName: string;
  agentRole: string;
  agencyName: string;
  agencyUrl: string;
  gaMeasurementId?: string;
  adsMeasurementId?: string;
};

export type PropertyEntity = {
  slug: string;
  headline: string;
  addressLine: string;
  streetAddress: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
  shortDescription: string;
  fullDescription: string;
  lat: number;
  lng: number;
  listingStatus: "for-sale" | "under-offer" | "sold";
  nickname?: string;
  videoUrl?: string;
};

export type PropertyFacts = {
  bedrooms: number;
  bathrooms: number;
  parking: string;
  landSize: number;
  landUnit: string;
  floorArea?: number;
  floorAreaUnit?: string;
  priceDisplay: string;
  priceNumeric: number;
  featureBullets: string[];
  heating?: string[];
  cooling?: string[];
  sustainability?: string[];
};

export type BuyerFit = {
  bestFor: string[];
  lessSuitableFor: string[];
  primaryUseCases: string[];
  tradeoffs: string[];
  decisionSummary: string;
  fullTimeLivingNotes?: string[];
  weekenderNotes?: string[];
};

export type AreaEntity = {
  slug: string;
  name: string;
  type: "region" | "town" | "destination";
  metadataTitle: string;
  metadataDescription: string;
  schemaDescription: string;
  intro: string;
  proximityNote?: string;
  postalCode?: string;
  lat?: number;
  lng?: number;
};

export type ComparisonTarget = {
  label: string;
  href: string;
  comparisonAngle: string;
  whyDifferent?: string;
};

export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: string;
  usage: Array<"hero" | "homepage" | "gallery" | "open-home" | "blog" | "og">;
  sourceUrl?: string;
  license?: string;
};

export type InternalLinkGraph = {
  primaryLinksIn: string[];
  primaryLinksOut: string[];
  anchorVariants: string[];
  avoidAnchors?: string[];
  lateralLinks?: string[];
};

export type SchemaConfig = {
  enableWebsiteSchema: boolean;
  enableOrganizationSchema: boolean;
  enableListingSchema: boolean;
  enableBreadcrumbs: boolean;
  enableEventSchema?: boolean;
  enableArticleSchema?: boolean;
};
