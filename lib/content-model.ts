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
  numberOfRooms?: number;
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

export type LinkTarget = {
  label: string;
  href: string;
};

export type PropertyStatItem = {
  id: string;
  label: string;
  value: string;
  unit?: string;
  description: string;
};

export type PropertyFeatureItem = {
  id: string;
  title: string;
  description: string;
};

export type AnswerPanel = {
  title: string;
  body: string;
  links?: LinkTarget[];
};

export type HeroStatItem = {
  id: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  answerLabel?: string;
  answerSummary: string;
  answerHighlights: string[];
  stats: HeroStatItem[];
  priceGuideHref: string;
};

export type OverviewContent = {
  sectionEyebrow: string;
  sectionTitle: string;
  introNote?: string;
  stats: PropertyStatItem[];
  definitionHeading: string;
  definitionParagraphs: string[];
  descriptionParagraphs: string[];
  quote: string;
  supportingImageSrc: string;
  supportingImageAlt: string;
};

export type BuyerFitContent = {
  sectionEyebrow: string;
  sectionTitle: string;
  intro: string;
  bestFor: string[];
  lessSuitableFor: string[];
  realities: string[];
  continuationHeading: string;
  continuationBody: string;
  continuationLinks: LinkTarget[];
};

export type WhatToKnowContent = {
  sectionEyebrow: string;
  sectionTitle: string;
  intro: string;
  considerations: AnswerPanel[];
  checksHeading: string;
  checksBody: string;
  checkLinks: LinkTarget[];
};

export type LocationSectionContent = {
  sectionEyebrow: string;
  sectionTitle: string;
  intro: string;
  highlights: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  additionalTownLinks: LinkTarget[];
  townExplorerTitle: string;
  townExplorerBody: string;
  buyerReasonsHeading: string;
  buyerReasons: AnswerPanel[];
};

export type GroundsContent = {
  sectionEyebrow: string;
  sectionTitle: string;
  intro: string;
  featureItems: PropertyFeatureItem[];
  showcaseHeading: string;
  showcaseParagraphs: string[];
  showcaseImageSrc: string;
  showcaseImageAlt: string;
  kicker: string;
};

export type PropertyPageContent = {
  metadataTitle: string;
  metadataDescription: string;
  metadataKeywords: string[];
  hero: HeroContent;
  overview: OverviewContent;
  features: {
    sectionEyebrow: string;
    sectionTitle: string;
    intro: string;
    featureItems: PropertyFeatureItem[];
    answerPanels: AnswerPanel[];
    retreatHeading: string;
    retreatBody: string;
  };
  grounds: GroundsContent;
  buyerFit: BuyerFitContent;
  whatToKnow: WhatToKnowContent;
  location: LocationSectionContent;
  featuredGuideSlugs: string[];
};

export type GuideAnswerSummary = {
  whatItIs: string;
  whoItSuits: string;
  howMardanCompares: string;
};
