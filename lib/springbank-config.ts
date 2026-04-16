import { heroImage } from "@/lib/gallery";
import type {
  BuyerFit,
  GuideAnswerSummary,
  PropertyEntity,
  PropertyFacts,
  PropertyPageContent,
  SchemaConfig,
  SiteConfig,
} from "@/lib/content-model";

export const springbankSiteConfig: SiteConfig = {
  siteName: "Springbank Mardan",
  siteUrl: "https://springbankmardan.com",
  brandLabel: "Springbank",
  defaultMetaTitle: "Acreage for Sale South Gippsland | 30 O'Malleys Rd, Mardan",
  defaultMetaDescription:
    "5-acre lifestyle property for sale at 30 O'Malleys Rd, Mardan VIC 3953 in South Gippsland. Near Leongatha, Meeniyan and Mirboo North. Inspect or enquire today.",
  defaultShareImage: `${"https://springbankmardan.com"}${heroImage.src}`,
  contactEmail: "dean@onelifestyle.com.au",
  contactPhone: "+61 431 639 749",
  agentName: "Dean Jones",
  agentRole: "Licensed Estate Agent",
  agencyName: "One Lifestyle Real Estate",
  agencyUrl: "https://onelifestylerealestate.com.au",
  gaMeasurementId: "G-4KKB61S7KL",
  adsMeasurementId: "AW-17968493350",
};

export const springbankPropertyEntity: PropertyEntity = {
  slug: "",
  headline: "Acreage for sale in South Gippsland",
  addressLine: "30 O'Malleys Rd, Mardan VIC 3953",
  streetAddress: "30 O'Malleys Road",
  locality: "Mardan",
  region: "VIC",
  postalCode: "3953",
  country: "AU",
  shortDescription:
    "Tuscan-inspired Mediterranean residence on approximately 5 acres in Mardan, South Gippsland.",
  fullDescription:
    "Tuscan-inspired Mediterranean residence on approximately 5 acres in Mardan, South Gippsland. Featuring Tarwin Valley views, fully double glazed main living spaces, passive solar comfort, Robert Boyle-designed gardens, Pinot Noir vineyard, dam, and a poured earth studio with stable year-round temperatures. Located 15 minutes from Leongatha, Mirboo North and Meeniyan.",
  lat: -38.4567,
  lng: 145.8234,
  listingStatus: "for-sale",
  nickname: "Springbank",
};

export const springbankPropertyFacts: PropertyFacts = {
  bedrooms: 5,
  bathrooms: 2,
  numberOfRooms: 8,
  parking: "Double garage, single garage, carport, and studio",
  landSize: 5,
  landUnit: "acres",
  floorArea: 471,
  floorAreaUnit: "sqm",
  priceDisplay: "$1.28m",
  priceNumeric: 1280000,
  featureBullets: [
    "Tuscan-inspired Mediterranean residence on approximately 5 acres",
    "Fully double glazed upstairs living areas with passive solar orientation",
    "Robert Boyle-designed gardens, dam, and valley-facing deck",
    "Separate poured-earth studio and double garage with EV charging",
  ],
  heating: ["Solid fuel heating", "Hydronic support", "Split-system air conditioning"],
  cooling: ["Split-system air conditioning", "Double glazing", "Thermal mass in studio"],
  sustainability: ["Passive solar design", "Solar power", "EV charging"],
};

export const springbankBuyerFit: BuyerFit = {
  bestFor: [
    "Permanent movers who want a private South Gippsland base with enough room to settle into everyday life.",
    "Premium weekender buyers looking for more than a scenic retreat and wanting a home that rewards longer stays.",
    "Households that value separate activity zones, guest accommodation, and a genuinely useful studio building.",
  ],
  lessSuitableFor: [
    "Buyers seeking a low-maintenance compact holding or walk-to-town village convenience.",
    "Anyone wanting a beach-town address ahead of privacy, land, and regional flexibility.",
    "Owners who prefer a simpler lifestyle holding with less garden and land to look after.",
  ],
  primaryUseCases: [
    "Full-time regional living",
    "Premium long-weekend base",
    "Guest-friendly multi-zone living",
  ],
  tradeoffs: [
    "This is an inland South Gippsland holding, so the most useful comparison is with other acreage homes rather than immediate coastal addresses.",
    "The gardens, water, and grounds are part of the property's charm and value, and they suit an owner who enjoys living with a structured landscape.",
    "The split-level layout and separate studio are especially rewarding for buyers who will make regular use of guest space, work space, or multi-zone living.",
  ],
  decisionSummary:
    "This is a genuine regional base rather than a purely scenic holding, with a home, studio, and landscape that work together gracefully over time.",
  fullTimeLivingNotes: ["Leongatha services remain close enough for routine living.", "The layout suits households that need separation between activity zones."],
  weekenderNotes: ["It works for premium weekender use, but only if the buyer wants more than a holiday address."],
};

export const springbankSchemaConfig: SchemaConfig = {
  enableWebsiteSchema: true,
  enableOrganizationSchema: true,
  enableListingSchema: true,
  enableBreadcrumbs: false,
  enableEventSchema: true,
  enableArticleSchema: true,
};

export const springbankPropertyPageContent: PropertyPageContent = {
  metadataTitle: springbankSiteConfig.defaultMetaTitle,
  metadataDescription: springbankSiteConfig.defaultMetaDescription,
  metadataKeywords: [
    "acreage for sale south gippsland",
    "mardan property for sale",
    "30 o'malleys road mardan",
    "acreage for sale leongatha",
    "acreage for sale meeniyan",
    "acreage for sale mirboo north",
    "south gippsland real estate",
    "5 acre property victoria",
  ],
  hero: {
    eyebrow: "30 O'Malleys Rd, Mardan VIC 3953 | South Gippsland",
    title: "Acreage for sale in South Gippsland",
    subtitle:
      "30 O'Malleys Rd, Mardan VIC 3953. A Tuscan-inspired Mediterranean residence overlooking the Tarwin Valley.",
    summary:
      "A 5-acre Mardan holding with valley views, mature Robert Boyle gardens, a separate poured-earth studio, and easy access to Leongatha, Meeniyan, and Mirboo North.",
    answerSummary:
      "Private and beautifully established, the property pairs architectural character with the sort of day-to-day comfort that matters once you are actually living there, from the double-glazed main living areas to the guest-ready lower level and separate studio.",
    answerHighlights: [
      "Tuscan-inspired Mediterranean residence on approximately 5 acres",
      "Double-glazed living zones with passive solar comfort",
      "Poured-earth studio, mature gardens, and dam outlook",
    ],
    stats: [
      { id: "acres", label: "~5 Acres" },
      { id: "beds", label: "5 Beds" },
      { id: "baths", label: "2 Baths" },
      { id: "layout", label: "Split-level home, double garage, carport + studio" },
    ],
    priceGuideHref: "/documents/statement-of-information-30-omalleys-road-mardan.pdf",
  },
  overview: {
    sectionEyebrow: "Property Overview",
    sectionTitle: "Tuscan-Inspired Mediterranean Living in South Gippsland",
    stats: [
      { id: "bedrooms", label: "Bedrooms", value: "5", description: "Flexible accommodation" },
      { id: "bathrooms", label: "Bathrooms", value: "2", description: "Including spa bath" },
      { id: "parking", label: "Parking", value: "4+", description: "Double garage, Single garage & Carport" },
      { id: "land-size", label: "Land Size", value: "~5", unit: "acres", description: "Prime South Gippsland" },
      { id: "gardens", label: "Gardens", value: "Robert Boyle", description: "Landscape designed" },
      { id: "sustainability", label: "Sustainability", value: "Solar + EV", description: "Eco-friendly living" },
    ],
    definitionHeading: "A home designed to be lived in",
    definitionParagraphs: [
      "30 O'Malleys Rd, Mardan is a substantial split-level country residence with a separate poured-earth studio, mature designed grounds, and the quiet assurance of a property that has been carefully developed over time.",
      "It offers presence and outlook, but also the practical depth that matters once inspection day has passed: generous living space, guest flexibility, established landscape, and easy access to the region's key townships.",
    ],
    descriptionParagraphs: [
      "30 O'Malleys Rd, Mardan delivers a Tuscan-inspired Mediterranean residence on approximately 5 acres of prime South Gippsland soil. Known on site as Springbank, the property offers a rare combination of architectural character, rural privacy, and practical long-term liveability just 15 minutes from Leongatha, Mirboo North, and Meeniyan.",
      "Its appeal is not only visual. The upstairs main dwelling is fully double glazed and carefully oriented to work with passive solar principles, which brings a calmer, more settled feel through both summer and winter. The home opens to sweeping views across the Tarwin Valley toward the Hoddle Range, yet still feels intimate and usable in everyday life.",
      "The poured-earth garage and studio building extends that sense of comfort even further, with thick walls that help keep the space temperate on hot days and gentler in winter. Add the Robert Boyle designed gardens, the entertaining outlook, and the reach to South Gippsland's villages and coast, and the result is a property with both beauty and staying power.",
    ],
    quote:
      "The ultimate tree change combining high-end craftsmanship with the raw beauty of the Australian landscape.",
    supportingImageSrc:
      "/images/springbank/highlights/springbank-mardan-south-gippsland-lifestyle-property-kitchen.jpg",
    supportingImageAlt: "Renovated country kitchen with terracotta rangehood and valley views",
  },
  features: {
    sectionEyebrow: "Property Features",
    sectionTitle: "Sophisticated Living Spaces",
    intro:
      "The main residence balances craftsmanship, comfort, and flexibility in a way that feels settled rather than showy.",
    featureItems: [
      {
        id: "passive-solar",
        title: "Passive Solar Design",
        description:
          "The main dwelling is oriented for passive solar performance and supported by fully double glazed upstairs living areas, solar power, and split-system air conditioning for calmer year-round comfort.",
      },
      {
        id: "stable-temperatures",
        title: "Stable Year-Round Temperatures",
        description:
          "Solid fuel heating and a concealed wetback system support winter efficiency, while the poured-earth studio and garage building maintains a notably temperate feel through both summer heat and colder months.",
      },
      {
        id: "kitchen",
        title: "Chef's Kitchen",
        description:
          "Substantially renovated with sleek polished timber benchtops, meticulous joinery including over 30 roll-out drawers, an oversized pantry, and a large island bench.",
      },
      {
        id: "interiors",
        title: "Bespoke Interiors",
        description:
          "An imposing Cherry Oak entrance door opens to soaring high ceilings and striking Peppermint Gum flooring that anchors the living spaces with natural character.",
      },
      {
        id: "lower-level",
        title: "Transformed Lower Level",
        description:
          "A beautifully appointed extension featuring a bedroom-sized guest room, spa bathroom, kitchenette facilities, and a large rumpus room opening to an alfresco deck for guest stays or multi-zone family living.",
      },
      {
        id: "studio",
        title: "Studio & EV Charging",
        description:
          "Architecturally striking poured-earth double garage plus 80+ sqm studio-style space, fully lined with kitchenette, toilet, and Tesla electric vehicle charging station, making it unusually useful well beyond storage alone.",
      },
    ],
    answerPanels: [
      {
        title: "Year-round comfort",
        body: "Double glazing, passive solar orientation, and the thermal mass of the poured-earth studio give the property a steadier, quieter feel across the seasons.",
      },
      {
        title: "Flexible living",
        body: "The split-level plan, lower-level kitchenette zone, and separate studio allow daily life, visiting family, and work or creative use to sit comfortably alongside one another.",
      },
      {
        title: "Life beyond the main house",
        body: "The gardens, dam, deck, orchard plantings, and studio give the property a rhythm beyond the residence itself, making the grounds feel as inviting as the house.",
      },
    ],
    retreatHeading: "Master Retreat",
    retreatBody:
      "The accommodation wing is designed as a private retreat. The master bedroom features a generous walk-in robe and semi-ensuite access to a bathroom with a screenless shower and extended vanity. The upper level also offers an additional room suitable as a study or third bedroom.",
  },
  grounds: {
    sectionEyebrow: "The Grounds",
    sectionTitle: "Grounds, Studio, and Landscape",
    intro:
      "Beyond the house, the grounds feel established and quietly purposeful, with garden structure, water, and ancillary spaces that add richness to daily life.",
    featureItems: [
      {
        id: "vineyard",
        title: "Pinot Noir Vineyard",
        description:
          "A productive vineyard adds character and purpose to the landscape, giving the holding a more resolved estate feel than a generic five-acre parcel.",
      },
      {
        id: "orchard",
        title: "Orchard & Citrus Grove",
        description:
          "Espaliered apple trees, mature olive trees, and citrus plantings reinforce that the land is usable and established, not just open grass around a residence.",
      },
      {
        id: "gardens",
        title: "Robert Boyle Gardens",
        description:
          "Originally designed by renowned landscape architect Robert Boyle and substantially enhanced, the grounds already have the maturity and structure most buyers spend years trying to create.",
      },
      {
        id: "walking-track",
        title: "530m Walking Track",
        description:
          "A private walking and running loop gives the property a day-to-day wellness function that is rarely present on comparable regional listings.",
      },
    ],
    showcaseHeading: "Grounds that reward longer stays",
    showcaseParagraphs: [
      "A new merbau deck and steps overlook the dam, replacing the original structure and giving the landscape a clearer focal point. The park-like grounds include maintained forested areas where cypress canopies have been selectively opened to create lighter, more usable walkways.",
      "The approximately 530-metre walking and running track ranges from 1 metre to 5 metres wide and moves through shaded and open sections of the property. Together with the studio and guest spaces elsewhere on site, it gives the holding a sense of movement and day-to-day usefulness.",
    ],
    showcaseImageSrc:
      "/images/springbank/highlights/springbank-mardan-south-gippsland-property-aerial-grounds-road.jpg",
    showcaseImageAlt:
      "Aerial view of the Mardan property showing white post-and-rail fencing, manicured lawns, dam with merbau deck, mature eucalypts and willows, and the Mediterranean-style residence among established gardens",
    kicker: "A rare lifestyle addition",
  },
  buyerFit: {
    sectionEyebrow: "Living Here",
    sectionTitle: "Where it fits best",
    intro:
      "Springbank is especially compelling for buyers who want a private regional base with enough substance for full-time living, long weekends, or a steady flow of family and guests.",
    bestFor: springbankBuyerFit.bestFor,
    lessSuitableFor: springbankBuyerFit.lessSuitableFor,
    realities: springbankBuyerFit.tradeoffs,
    continuationHeading: "Explore the surrounding towns",
    continuationBody:
      "If you are still weighing service-town practicality against village character and a more private inland setting, these nearby guides provide useful context before you return to the listing.",
    continuationLinks: [
      { label: "Leongatha", href: "/leongatha" },
      { label: "Meeniyan", href: "/meeniyan" },
      { label: "Mirboo North", href: "/mirboo-north" },
    ],
  },
  whatToKnow: {
    sectionEyebrow: "Before You Inspect",
    sectionTitle: "A few practical considerations",
    intro:
      "This is a property to picture yourself in over time. The most useful questions are about rhythm, upkeep, and whether the balance of home, land, and location suits the way you want to live.",
    considerations: [
      {
        title: "Think of it as a regional base",
        body: "Mardan gives you privacy and usable land while keeping Leongatha, Meeniyan, and Mirboo North within easy reach. It is best compared with larger lifestyle holdings rather than village homes within walking distance of a main street.",
      },
      {
        title: "The landscape is part of everyday life",
        body: "The Robert Boyle designed gardens, dam, orchard elements, and structured planting are among the property's great pleasures. They are especially rewarding for an owner who enjoys living with a garden rather than simply looking at one.",
      },
      {
        title: "The layout gives you options",
        body: "The lower-level guest zone and poured-earth studio open up more than one way to live at the property. If you need separated accommodation, creative space, or room for frequent visitors, that flexibility becomes clear very quickly in person.",
      },
    ],
    checksHeading: "If you would like to arrive prepared",
    checksBody:
      "The open-home details, gallery, and acreage guide are a useful place to start before you visit.",
    checkLinks: [
      { label: "Open-home details", href: "/open-home" },
      { label: "Property gallery", href: "/gallery" },
      {
        label: "Buying Acreage in Rural Victoria",
        href: "/blog/buying-acreage-in-rural-victoria-a-practical-checklist-for-lifestyle-property-buyers",
      },
    ],
  },
  location: {
    sectionEyebrow: "Location",
    sectionTitle: "The Heart of South Gippsland",
    intro:
      "Set between Leongatha, Meeniyan, Mirboo North, and the wider Prom Country drive network, Mardan offers privacy and land without feeling cut off from daily services, village life, or the coast.",
    highlights: [
      {
        id: "leongatha",
        title: "15 min to Leongatha",
        description: "South Gippsland's primary service hub with supermarkets, schools, medical, and rail access to Melbourne",
      },
      {
        id: "mirboo-north",
        title: "15 min to Mirboo North",
        description: "Award-winning hilltop village with boutique cafes, breweries, and a thriving creative community",
      },
      {
        id: "meeniyan",
        title: "15 min to Meeniyan",
        description: "Renowned artisan food village with gourmet producers, galleries, and a strong events calendar",
      },
      {
        id: "privacy",
        title: "Absolute Privacy",
        description: "Secluded rural setting on a quiet country road while remaining minutes from three townships",
      },
      {
        id: "tarwin-views",
        title: "Tarwin Valley Views",
        description: "Sweeping panoramic vistas across the rolling valley to the Hoddle Range",
      },
    ],
    additionalTownLinks: [
      { label: "Foster", href: "/foster" },
      { label: "Fish Creek", href: "/fish-creek" },
      { label: "Korumburra", href: "/korumburra" },
      { label: "Inverloch", href: "/inverloch" },
      { label: "Venus Bay", href: "/venus-bay" },
      { label: "Sandy Point", href: "/sandy-point" },
      { label: "Waratah Bay", href: "/waratah-bay" },
      { label: "Walkerville", href: "/walkerville" },
    ],
    townExplorerTitle: "Explore more South Gippsland towns",
    townExplorerBody:
      "Compare coastal, village, and service-town options across the wider district before deciding whether an inland homesite at Mardan is the right long-term fit.",
    buyerReasonsHeading: "Why this setting works so well",
    buyerReasons: [
      {
        title: "Service access without town-centre compromise",
        body: "The property sits close enough to Leongatha for daily practicality, yet far enough away to preserve the privacy and sense of space that town-centre living cannot offer.",
        links: [{ label: "Leongatha", href: "/leongatha" }],
      },
      {
        title: "Village and food-culture reach",
        body: "Access to Meeniyan and Mirboo North places village character, cafes, galleries, and regional events within easy reach without tying everyday life to any one township.",
        links: [
          { label: "Meeniyan", href: "/meeniyan" },
          { label: "Mirboo North", href: "/mirboo-north" },
        ],
      },
      {
        title: "A stronger inland base than a pure holiday address",
        body: "For many people drawn to Prom Country and the wider region, an inland base ultimately offers more flexibility for everyday living than a purely coastal address.",
        links: [
          { label: "South Gippsland", href: "/south-gippsland" },
          { label: "Wilsons Promontory", href: "/wilsons-promontory" },
        ],
      },
    ],
  },
  featuredGuideSlugs: [
    "buying-acreage-in-rural-victoria-a-practical-checklist-for-lifestyle-property-buyers",
    "south-gippsland-real-estate-guide-2026-lifestyle-buyer-priorities",
    "30-omalleys-rd-mardan-7-features-that-make-this-acreage-home-comfortable-well-beyond-summer",
  ],
};

export const springbankGuideAnswerSummaries: Record<string, GuideAnswerSummary> = {
  leongatha: {
    whatItIs:
      "Leongatha is the region's main service town, with supermarkets, schools, healthcare, trades, and rail links that make it a natural reference point for much of South Gippsland.",
    whoItSuits:
      "It often appeals to families, permanent movers, and acreage buyers who want a country setting without giving up the convenience of a well-serviced town.",
    howMardanCompares:
      "Mardan keeps Leongatha's services within easy reach while offering more privacy, a broader outlook, and the scale of a true lifestyle property.",
  },
  meeniyan: {
    whatItIs:
      "Meeniyan is one of South Gippsland's most distinctive villages, known for food culture, local producers, and a main street with genuine character.",
    whoItSuits:
      "It often appeals to weekenders, downsizers, and permanent movers who want a walkable village feel and a strong sense of place.",
    howMardanCompares:
      "Mardan trades Meeniyan's main-street charm for more land, more privacy, and a central position between several of the region's key towns.",
  },
  "mirboo-north": {
    whatItIs:
      "Mirboo North is a greener, hilltop township with a strong village identity, good local hospitality, and easy access to trails and open space.",
    whoItSuits:
      "It often appeals to buyers who value landscape, community texture, and a more scenic everyday setting than the larger service towns provide.",
    howMardanCompares:
      "Mardan is less village-led than Mirboo North, but stronger for buyers who want a central base, larger grounds, and straightforward access to the wider region.",
  },
  "south-gippsland": {
    whatItIs:
      "South Gippsland is a layered region of service towns, villages, farmland, and coast, which is why so many property searches begin at the regional level before narrowing to a single township.",
    whoItSuits:
      "It often appeals to tree-changers, lifestyle-property buyers, and coastal movers who want regional flexibility rather than committing too early to one place.",
    howMardanCompares:
      "Mardan stands out because it sits between some of the region's most searched townships, offering a private inland base with easy reach to services, villages, and Prom Country drives.",
  },
  "wilsons-promontory": {
    whatItIs:
      "Wilsons Promontory is not a residential market in itself, but it shapes the wider region by drawing people toward beaches, walking tracks, and a more nature-led way of spending time.",
    whoItSuits:
      "It matters most to holiday-home buyers, weekenders, and permanent movers who want regular coastal access without necessarily needing to live on the shoreline.",
    howMardanCompares:
      "Mardan works as an inland base rather than a beach address, giving buyers more land, more privacy, and a stronger everyday living setup while still keeping Prom day trips realistic.",
  },
};
