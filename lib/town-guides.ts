import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site-schema";

export type GuideEvent = {
  date: string;
  title: string;
  place: string;
  description: string;
  href: string;
  ctaLabel?: string;
};

export type GuideLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type GuideStat = {
  label: string;
  value: string;
  note: string;
};

export type GuideImage = {
  src: string;
  alt: string;
  sourceLabel: string;
  sourceUrl: string;
  author: string;
  licenseName: string;
  licenseUrl: string;
};

export type GuideThingToDo = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export type GuideInfoCard = {
  icon: "clock" | "map" | "bar-chart" | "waves" | "mountain" | "users" | "wheat" | "compass";
  title: string;
  description: string;
  links?: GuideLink[];
};

export type RelatedGuide = {
  title: string;
  href: string;
  description: string;
};

export type TownGuideData = {
  slug: string;
  locationLabel: string;
  metadataTitle: string;
  metadataDescription: string;
  keywords: string[];
  schemaDescription: string;
  addressLocality: string;
  postalCode: string;
  title: string;
  intro: string;
  proximityNote: string;
  browseListingsUrl: string;
  suburbDataUrl: string;
  heroImage: GuideImage;
  overviewParagraphs: string[];
  overviewSourceLinks: GuideLink[];
  quickLifestyleNotes: string[];
  thingsToDo: GuideThingToDo[];
  eventsDescription: string;
  events: GuideEvent[];
  infoCards: GuideInfoCard[];
  statsTitle: string;
  statCards?: GuideStat[];
  statSource?: GuideLink;
  sources: GuideLink[];
  comparisonTitle: string;
  comparisonParagraphs: string[];
  relatedGuides: RelatedGuide[];
  ctaTitle: string;
  ctaBody: string;
  latitude?: number;
  longitude?: number;
};

function toAbsoluteImageUrl(src: string) {
  return src.startsWith("http") ? src : `${SITE_URL}${src}`;
}

export function buildTownGuideMetadata(guide: TownGuideData): Metadata {
  const canonical = `${SITE_URL}/${guide.slug}`;

  return {
    title: guide.metadataTitle,
    description: guide.metadataDescription,
    keywords: guide.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: guide.metadataTitle,
      description: guide.metadataDescription,
      url: canonical,
      siteName: SITE_NAME,
      type: "article",
      images: [
        {
          url: toAbsoluteImageUrl(guide.heroImage.src),
          width: 1200,
          height: 630,
          alt: guide.heroImage.alt,
        },
      ],
    },
  };
}

export function buildTownGuideJsonLd(guide: TownGuideData) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: guide.addressLocality,
    description: guide.schemaDescription,
    url: `${SITE_URL}/${guide.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: guide.addressLocality,
      addressRegion: "VIC",
      postalCode: guide.postalCode,
      addressCountry: "AU",
    },
    ...(guide.latitude !== undefined && guide.longitude !== undefined
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: guide.latitude,
            longitude: guide.longitude,
          },
        }
      : {}),
  };
}

const inverlochEquinoxFestival: GuideEvent = {
  date: "20 to 22 Mar 2026",
  title: "Inverloch Equinox Festival",
  place: "Inverloch",
  description:
    "This late-March festival gives buyers a useful read on how the coast feels outside peak summer. It blends wellbeing, local business activity, and visitor traffic in a way that is more relevant to long-stay lifestyle planning than a one-off holiday surge.",
  href: "https://www.visitinverloch.co/events/inverloch-equinox-festival",
};

const inverlochWellbeingExpo: GuideEvent = {
  date: "20 to 29 Mar 2026",
  title: "Inverloch Equinox Wellbeing Expo",
  place: "Inverloch",
  description:
    "The wellbeing expo extends the Equinox period into a longer run of workshops and local programming. For relocation-minded visitors, that kind of calendar depth is useful because it reflects how the area supports repeat weekend use rather than one-off tourism.",
  href: "https://www.visitinverloch.co/events/inverloch-equinox-wellbeing-expo26",
};

const runningFestival: GuideEvent = {
  date: "28 to 29 Mar 2026",
  title: "Running Festival Inverloch",
  place: "Inverloch",
  description:
    "A fitness-led weekend like this shows how the South Gippsland coast operates as an active lifestyle destination rather than a purely passive beach market. It is close enough from inland towns to be genuinely usable, which matters when buyers compare regional bases.",
  href: "https://www.visitinverloch.co/events/running-festival-inverloch",
};

const easterArtShow: GuideEvent = {
  date: "2 to 5 Apr 2026",
  title: "Easter Art Show",
  place: "Inverloch",
  description:
    "The Easter Art Show broadens the holiday-weekend appeal beyond beaches and hiking. For buyers, it is a practical signal that the district carries arts and community programming through the key visitor periods that usually matter most to family and guest use.",
  href: "https://www.basscoasthealth.org.au/events/easter-art-show/",
};

const anzacDayService: GuideEvent = {
  date: "25 Apr 2026",
  title: "Anzac Day Commemorative Service",
  place: "Inverloch",
  description:
    "This local service is a reminder that the Bass Coast-South Gippsland interface has a functioning year-round community calendar, not just tourism peaks. For prospective movers, that everyday civic rhythm matters as much as headline attractions.",
  href: "https://www.basscoast.vic.gov.au/events/anzac-day-commemorative-service",
};

const meeniyanJoshPyke: GuideEvent = {
  date: "19 Apr 2026",
  title: "Josh Pyke",
  place: "Meeniyan Town Hall",
  description:
    "A recognised touring act in Meeniyan Town Hall reinforces the town's reputation for serious regional programming. It shows that small scale does not mean thin cultural depth, which is often a deciding factor in village-based lifestyle searches.",
  href: "https://lyrebirdartscouncil.oztix.com.au/",
  ctaLabel: "Ticket and event listings",
};

const meeniyanHistoricalOpenDay: GuideEvent = {
  date: "25 Apr 2026",
  title: "Meeniyan and District Historical Society Open Day",
  place: "Meeniyan Community Hub",
  description:
    "Community-history events like this are not about tourism volume; they are about local participation and continuity. Buyers often underestimate how much these smaller community markers shape long-term fit once they stop visiting and start living in a district.",
  href: "https://www.meeniyan.org.au/",
  ctaLabel: "Town events and updates",
};

const meeniyanMajorZulu: GuideEvent = {
  date: "2 May 2026",
  title: "Major Zulu",
  place: "Meeniyan Town Hall",
  description:
    "This kind of live-music programming shows how Meeniyan continues to draw visitors beyond the summer shoulder season. It is useful in property terms because it signals year-round village energy rather than a short tourist spike.",
  href: "https://lyrebirdartscouncil.oztix.com.au/",
  ctaLabel: "Ticket and event listings",
};

const meeniyanRuthieFoster: GuideEvent = {
  date: "10 May 2026",
  title: "Lyrebird Presents: Ruthie Foster & Band",
  place: "Meeniyan Town Hall",
  description:
    "Ruthie Foster's May date reinforces that the Meeniyan calendar stays active well after the late-summer run. That matters for buyers because it points to a village with stronger off-peak cultural depth than its population size alone would suggest.",
  href: "https://www.visitvictoria.com/regions/gippsland/whats-on/music/lyrebird-presents-at-meeniyan---ruthie-foster-usa",
};

const fishCreekTeaCosy: GuideEvent = {
  date: "16 May 2026",
  title: "Fish Creek Tea Cosy Festival",
  place: "Fish Creek",
  description:
    "Fish Creek's Tea Cosy Festival is a good example of how village character translates into a distinctive, community-scale event. For buyers comparing towns, it offers a more realistic sense of local social texture than generic tourism copy ever can.",
  href: "https://www.visitinverloch.co/events/tea-cosy-fish-creek",
};

export const guideEvents = {
  leongatha: [inverlochEquinoxFestival, runningFestival, easterArtShow, fishCreekTeaCosy],
  meeniyan: [meeniyanJoshPyke, meeniyanHistoricalOpenDay, meeniyanMajorZulu, meeniyanRuthieFoster],
  mirbooNorth: [inverlochEquinoxFestival, runningFestival, meeniyanMajorZulu, meeniyanRuthieFoster],
  southGippsland: [inverlochEquinoxFestival, runningFestival, easterArtShow, fishCreekTeaCosy],
  wilsonsPromontory: [runningFestival, easterArtShow, anzacDayService, fishCreekTeaCosy],
};

const southGippslandLandscape: GuideImage = {
  src: "/images/wikimedia/south-gippsland-cricklewood.jpg",
  alt: "South Gippsland rural landscape with rolling hills and farmland",
  sourceLabel: "Views from Cricklewood",
  sourceUrl: "https://commons.wikimedia.org/wiki/File:Views_from_Cricklewood.jpg",
  author: "Andy & Anna Kelk",
  licenseName: "CC BY 2.0",
  licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
};

const fishCreekImage: GuideImage = {
  src: "https://commons.wikimedia.org/wiki/Special:FilePath/Fish_Creek_sign_Stevage.jpg",
  alt: "Fish Creek township sign and village approach",
  sourceLabel: "Fish Creek sign Stevage",
  sourceUrl: "https://commons.wikimedia.org/wiki/File:Fish_Creek_sign_Stevage.jpg",
  author: "Stevage",
  licenseName: "CC BY-SA 3.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
};

const inverlochImage: GuideImage = {
  src: "https://commons.wikimedia.org/wiki/Special:FilePath/Eagles_Nest_Inverloch.jpg",
  alt: "Eagles Nest rock formation near Inverloch",
  sourceLabel: "Eagles Nest Inverloch",
  sourceUrl: "https://commons.wikimedia.org/wiki/File:Eagles_Nest_Inverloch.jpg",
  author: "MattSullivan17",
  licenseName: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
};

const walkervilleImage: GuideImage = {
  src: "https://commons.wikimedia.org/wiki/Special:FilePath/Limestone_kiln_ruins_viewed_from_Limeburners_track_at_Walkerville%2C_Victoria%2C_Australia.jpg",
  alt: "Historic limestone kiln ruins at Walkerville",
  sourceLabel: "Limestone kiln ruins viewed from Limeburners track at Walkerville, Victoria, Australia",
  sourceUrl:
    "https://commons.wikimedia.org/wiki/File:Limestone_kiln_ruins_viewed_from_Limeburners_track_at_Walkerville%2C_Victoria%2C_Australia.jpg",
  author: "Damien Frawley",
  licenseName: "CC BY-SA 3.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
};

const waratahBayImage: GuideImage = {
  src: "https://commons.wikimedia.org/wiki/Special:FilePath/Limestone_kiln_ruins_viewed_from_Limeburners_track_at_Walkerville%2C_Victoria%2C_Australia.jpg",
  alt: "Coastal landscape near Waratah Bay and Walkerville",
  sourceLabel: "Limestone kiln ruins viewed from Limeburners track at Walkerville, Victoria, Australia",
  sourceUrl:
    "https://commons.wikimedia.org/wiki/File:Limestone_kiln_ruins_viewed_from_Limeburners_track_at_Walkerville%2C_Victoria%2C_Australia.jpg",
  author: "Damien Frawley",
  licenseName: "CC BY-SA 3.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
};

export const townGuides: Record<string, TownGuideData> = {
  foster: {
    slug: "foster",
    locationLabel: "Foster VIC 3960",
    metadataTitle: "Foster Real Estate Guide | Prom Access and Lifestyle Property",
    metadataDescription:
      "Foster real estate guide for buyers comparing Prom access, services, and lifestyle property options in South Gippsland.",
    keywords: [
      "Foster real estate",
      "Foster property",
      "Foster houses for sale",
      "Prom Country real estate",
      "property near Wilsons Promontory",
      "South Gippsland real estate",
    ],
    schemaDescription:
      "South Gippsland township commonly used as a service base for Wilsons Promontory access and nearby lifestyle property searches.",
    addressLocality: "Foster",
    postalCode: "3960",
    title: "Foster real estate guide for Prom access and longer-stay living",
    intro:
      "Foster is one of the practical bases for buyers who want everyday services within reach of Prom Country and the South Gippsland coast. It tends to appeal to people who want regional utility first, then layer in beaches, park access, and weekend drives.",
    proximityNote: "Approx. 30 min from Springbank",
    browseListingsUrl: "https://www.realestate.com.au/buy/in-foster,+vic+3960/list-1",
    suburbDataUrl: "https://www.property.com.au/vic/foster-3960/",
    heroImage: southGippslandLandscape,
    overviewParagraphs: [
      "Foster functions as a practical gateway town for the Prom Country side of South Gippsland. Buyers often use it as a benchmark when they want supermarkets, health services, schools, and easier access to Yanakie and Wilsons Promontory without committing to a smaller coastal settlement.",
      "In property terms, Foster suits people who want a working town feel rather than a pure holiday atmosphere. That can make it a useful comparison point against inland holdings like Mardan, especially when you are weighing privacy and land size against service proximity.",
    ],
    overviewSourceLinks: [
      {
        label: "Visit Gippsland: Foster",
        href: "https://www.visitgippsland.com.au/destinations/south-gippsland/foster",
      },
      {
        label: "Parks Victoria: Wilsons Promontory National Park",
        href: "https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park",
      },
    ],
    quickLifestyleNotes: [
      "Useful service base for Prom Country and Yanakie trips.",
      "Balances day-to-day convenience with access to beaches and park walks.",
      "Often compared with inland acreage options by buyers who want more land for the same broader region.",
    ],
    thingsToDo: [
      {
        title: "Prom day trips from a practical base",
        description:
          "Foster works well for people who want regular access to Wilsons Promontory without staying directly on the coastal fringe. That keeps hiking, beaches, and wildlife viewing realistic while preserving a stronger service-town routine through the week.",
        href: "https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park",
        linkLabel: "Prom planning guide",
      },
      {
        title: "Prom Country drives and food stops",
        description:
          "The broader Foster-Fish Creek-Yanakie circuit suits repeat weekend use because it combines scenic drives with produce stops and village-scale hospitality. For buyers, that gives the area more depth than a single destination-led coastal search.",
        href: "https://www.visitgippsland.com.au/do-and-see/drives/great-southern-drive",
        linkLabel: "Great Southern Drive",
      },
      {
        title: "Coastal flexibility without coastal pricing pressure",
        description:
          "Many buyers explore Foster when they want reliable access to Walkerville, Sandy Point, Waratah Bay, and The Prom while avoiding some of the tighter supply patterns in smaller beach settlements.",
      },
      {
        title: "A useful benchmark for inland comparisons",
        description:
          "If you are comparing Prom-side practicality with inland privacy, Foster is a strong benchmark against larger homesites around Mardan and the Tarwin Valley corridor.",
      },
    ],
    eventsDescription:
      "These published 2026 events help show how Foster fits into the broader Prom Country and South Gippsland calendar. Confirm details on the source pages before travelling.",
    events: [runningFestival, easterArtShow, meeniyanMajorZulu, fishCreekTeaCosy],
    infoCards: [
      {
        icon: "clock",
        title: "Prom Country practicality",
        description:
          "Foster tends to suit buyers who want a usable service base rather than a purely tourism-led address.",
      },
      {
        icon: "map",
        title: "Regional position",
        description:
          "It sits in a strong comparison zone with Fish Creek, Yanakie, and inland acreage around Mardan.",
      },
      {
        icon: "bar-chart",
        title: "Research links",
        description: "Use both market portals and tourism context before deciding whether Foster is the right fit.",
        links: [
          { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/foster-3960/" },
          { label: "realestate.com.au Foster listings", href: "https://www.realestate.com.au/buy/in-foster,+vic+3960/list-1" },
        ],
      },
    ],
    statsTitle: "Foster statistics snapshot",
    statCards: undefined,
    sources: [
      { label: "Visit Gippsland: Foster", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/foster" },
      { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/foster-3960/" },
      { label: "realestate.com.au Foster listings", href: "https://www.realestate.com.au/buy/in-foster,+vic+3960/list-1" },
      { label: "Parks Victoria: Wilsons Promontory National Park", href: "https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park" },
    ],
    comparisonTitle: "How Foster compares in-region",
    comparisonParagraphs: [
      "Foster usually attracts buyers who want stronger practical services than very small coastal settlements while staying on the Prom side of South Gippsland. It can therefore be a logical comparison if your shortlist includes Fish Creek, Yanakie, Sandy Point, or Waratah Bay.",
      "If larger homesites, privacy, and garden scale matter more than being based closer to Prom entry points, it is worth comparing Foster-town convenience against the active acreage listing in Mardan.",
    ],
    relatedGuides: [
      { title: "Fish Creek", href: "/fish-creek", description: "Village character and arts-led Prom Country appeal." },
      { title: "Wilsons Promontory", href: "/wilsons-promontory", description: "Lifestyle filter for coastal access and day-trip planning." },
      { title: "Waratah Bay", href: "/waratah-bay", description: "Low-key beach setting for long weekends and guest use." },
      { title: "Walkerville", href: "/walkerville", description: "Historic lime-kiln coastline and quieter beach rhythm." },
    ],
    ctaTitle: "Compare Foster with a larger South Gippsland homesite",
    ctaBody:
      "If Foster's Prom-side practicality appeals but you also want more land, greater privacy, and a stronger garden-and-guest setup, compare it with the active Mardan listing at 30 O'Malleys Rd.",
    latitude: -38.652,
    longitude: 146.201,
  },
  "fish-creek": {
    slug: "fish-creek",
    locationLabel: "Fish Creek VIC 3959",
    metadataTitle: "Fish Creek Property Guide | Village Character and Prom Country Appeal",
    metadataDescription:
      "Fish Creek property guide for buyers comparing village character, Prom Country access, and nearby lifestyle listings in South Gippsland.",
    keywords: [
      "Fish Creek property",
      "Fish Creek real estate",
      "Fish Creek houses for sale",
      "Prom Country real estate",
      "Fish Creek lifestyle",
      "South Gippsland real estate",
    ],
    schemaDescription:
      "Village in South Gippsland known for arts culture, food appeal, and strong lifestyle interest from Prom Country buyers.",
    addressLocality: "Fish Creek",
    postalCode: "3959",
    title: "Fish Creek property guide for village character and Prom Country buyers",
    intro:
      "Fish Creek attracts buyers who are looking for a recognisable village identity rather than a larger service-town pattern. Its arts reputation, produce culture, and proximity to Prom Country give it a different buyer profile from towns like Leongatha or Foster.",
    proximityNote: "Approx. 30 min from Springbank",
    browseListingsUrl: "https://www.realestate.com.au/buy/in-fish+creek,+vic+3959/list-1",
    suburbDataUrl: "https://www.property.com.au/vic/fish-creek-3959/",
    heroImage: fishCreekImage,
    overviewParagraphs: [
      "Fish Creek works best for buyers who want village atmosphere, a strong creative and food identity, and easier access to Prom Country day trips. It is not the highest-service option in the region, but that is rarely why it enters the shortlist.",
      "In practical terms, it is a comparison town for people balancing local character against service convenience. Many then contrast Fish Creek's village feel with acreage opportunities closer to Mardan, where land scale and privacy come more strongly into play.",
    ],
    overviewSourceLinks: [
      { label: "Visit Gippsland: Fish Creek", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/fish-creek" },
      { label: "Great Southern Drive", href: "https://www.visitgippsland.com.au/do-and-see/drives/great-southern-drive" },
    ],
    quickLifestyleNotes: [
      "Arts-led village identity with strong food and local-maker appeal.",
      "Useful for Prom Country access without feeling like a pure holiday strip.",
      "Often compared with Foster for services and with inland acreage for land size and privacy.",
    ],
    thingsToDo: [
      {
        title: "Village hospitality and local maker culture",
        description:
          "Fish Creek's appeal is strongest when you experience it on foot. Cafes, local produce, galleries, and small creative businesses combine into a village pattern that suits repeat use, not just a one-off drive-through.",
      },
      {
        title: "Prom Country day-trip reach",
        description:
          "You can use Fish Creek as a base for Wilsons Promontory access, coastal drives, and beach weekends while still retaining the social texture of a village centre.",
        href: "https://www.visitgippsland.com.au/do-and-see/drives/great-southern-drive",
        linkLabel: "Prom Country drive ideas",
      },
      {
        title: "Community-scale events that reveal town texture",
        description:
          "Events in and around Fish Creek are useful because they show the town's real social rhythm. Buyers often learn more from a market or festival weekend than they do from static listing data.",
      },
      {
        title: "Compare with inland holdings",
        description:
          "If you like Fish Creek's character but want more land and more separation, compare it with Mardan properties that sit between the main inland service towns.",
      },
    ],
    eventsDescription:
      "These published 2026 events help explain why Fish Creek and its surrounding villages remain active beyond peak-holiday weeks. Confirm details on the source pages before travelling.",
    events: [runningFestival, easterArtShow, meeniyanRuthieFoster, fishCreekTeaCosy],
    infoCards: [
      {
        icon: "users",
        title: "Village social texture",
        description:
          "Fish Creek tends to appeal where creative identity, local food, and recognisable village rhythm matter more than scale.",
      },
      {
        icon: "compass",
        title: "Prom Country reach",
        description:
          "It remains well placed for Wilsons Promontory, coastal drives, and visitor weekends.",
      },
      {
        icon: "bar-chart",
        title: "Market links",
        description: "Use listing portals and village context together before narrowing your shortlist.",
        links: [
          { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/fish-creek-3959/" },
          { label: "realestate.com.au Fish Creek listings", href: "https://www.realestate.com.au/buy/in-fish+creek,+vic+3959/list-1" },
        ],
      },
    ],
    statsTitle: "Fish Creek statistics snapshot",
    statCards: [
      { label: "Population (2021 Census)", value: "858", note: "ABS QuickStats SAL20921" },
      { label: "Median age", value: "51", note: "ABS QuickStats 2021" },
      { label: "Median weekly household income", value: "$1,281", note: "ABS QuickStats 2021" },
      { label: "Median weekly rent", value: "$235", note: "ABS QuickStats 2021" },
    ],
    statSource: {
      label: "ABS QuickStats SAL20921",
      href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL20921",
    },
    sources: [
      { label: "ABS QuickStats: Fish Creek", href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL20921" },
      { label: "Visit Gippsland: Fish Creek", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/fish-creek" },
      { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/fish-creek-3959/" },
      { label: "realestate.com.au Fish Creek listings", href: "https://www.realestate.com.au/buy/in-fish+creek,+vic+3959/list-1" },
    ],
    comparisonTitle: "How Fish Creek compares in-region",
    comparisonParagraphs: [
      "Fish Creek typically wins on village feel and Prom Country atmosphere, not on service depth. Buyers therefore tend to compare it directly with Foster for practicality and with inland holdings for land size and privacy.",
      "If your search is moving from village character toward a larger long-stay base, compare Fish Creek's appeal against the active acreage listing in Mardan.",
    ],
    relatedGuides: [
      { title: "Foster", href: "/foster", description: "Prom-side services and a more practical regional base." },
      { title: "Wilsons Promontory", href: "/wilsons-promontory", description: "The park access driver behind much of the area's demand." },
      { title: "Waratah Bay", href: "/waratah-bay", description: "Low-key coastal option for quieter beach use." },
      { title: "South Gippsland", href: "/south-gippsland", description: "Broader region comparison before narrowing town fit." },
    ],
    ctaTitle: "Compare Fish Creek with an inland acreage alternative",
    ctaBody:
      "If Fish Creek's village identity appeals but you want more land, more privacy, and a stronger homesite setup, compare it directly with the current Mardan listing.",
    latitude: -38.697,
    longitude: 146.083,
  },
  korumburra: {
    slug: "korumburra",
    locationLabel: "Korumburra VIC 3950",
    metadataTitle: "Korumburra Real Estate Guide | South Gippsland Service Town Comparison",
    metadataDescription:
      "Korumburra real estate guide for buyers comparing service-town convenience, South Gippsland access, and acreage alternatives nearby.",
    keywords: [
      "Korumburra real estate",
      "Korumburra property",
      "Korumburra houses for sale",
      "South Gippsland real estate",
      "Korumburra lifestyle",
      "acreage near Korumburra",
    ],
    schemaDescription:
      "South Gippsland town with practical services, rail access, and a useful benchmark role in regional property comparisons.",
    addressLocality: "Korumburra",
    postalCode: "3950",
    title: "Korumburra real estate guide for practical South Gippsland buyers",
    intro:
      "Korumburra is often considered by buyers who want practical town services, a recognisable main street, and a straightforward comparison point between Bass Coast and South Gippsland. It is less lifestyle-branded than some neighbouring villages, but that can be part of its appeal.",
    proximityNote: "Approx. 30 min from Springbank",
    browseListingsUrl: "https://www.realestate.com.au/buy/in-korumburra,+vic+3950/list-1",
    suburbDataUrl: "https://www.property.com.au/vic/korumburra-3950/",
    heroImage: southGippslandLandscape,
    overviewParagraphs: [
      "For many buyers, Korumburra is a practicality benchmark. It offers rail history, everyday retail, and direct access toward both Bass Coast and inland South Gippsland, which makes it useful in early-stage filtering.",
      "Compared with more village-led destinations, Korumburra is about workable routines first. That means it often ends up being weighed against larger-acreage holdings elsewhere in the district when buyers decide whether they want town utility or more separation.",
    ],
    overviewSourceLinks: [
      { label: "Visit Gippsland: Korumburra", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/korumburra" },
      { label: "Great Southern Drive", href: "https://www.visitgippsland.com.au/do-and-see/drives/great-southern-drive" },
    ],
    quickLifestyleNotes: [
      "Useful benchmark for service-town convenience and regional connections.",
      "Closer to the Bass Coast interface than some inland South Gippsland villages.",
      "Can be a sensible comparison if your shortlist is drifting between services and acreage.",
    ],
    thingsToDo: [
      {
        title: "Coal Creek and industrial heritage context",
        description:
          "Korumburra carries more historical industry weight than some of the food-and-arts villages nearby. That gives it a different identity and often a more practical, less tourism-led atmosphere.",
      },
      {
        title: "Regional positioning toward coast and hills",
        description:
          "The town is useful because it sits in a transition zone between Bass Coast access and the inland South Gippsland network. That helps buyers compare whether they prefer town convenience or a more rural homesite model.",
        href: "https://www.visitgippsland.com.au/do-and-see/drives/great-southern-drive",
        linkLabel: "Regional drive guide",
      },
      {
        title: "Good for first-pass shortlisting",
        description:
          "Korumburra may not be the final choice for every buyer, but it is often one of the clearest early comparison points for people trying to define how much service access they really need.",
      },
      {
        title: "Compare against rural privacy",
        description:
          "If you like the district but want more land and a more self-contained lifestyle setup, compare Korumburra-town living with current acreage stock in Mardan.",
      },
    ],
    eventsDescription:
      "These published 2026 events give a useful read on the broader South Gippsland calendar when comparing Korumburra with surrounding towns. Confirm details on the source pages before travelling.",
    events: [inverlochEquinoxFestival, runningFestival, meeniyanMajorZulu, fishCreekTeaCosy],
    infoCards: [
      {
        icon: "clock",
        title: "Service-town logic",
        description:
          "Korumburra is usually shortlisted for practicality and regional access more than for boutique village branding.",
      },
      {
        icon: "map",
        title: "Comparison value",
        description:
          "It is a useful benchmark when deciding whether you want a town base or a larger homesite elsewhere in South Gippsland.",
      },
      {
        icon: "bar-chart",
        title: "Market links",
        description: "Use town data and listing supply together before you commit to a service-town strategy.",
        links: [
          { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/korumburra-3950/" },
          { label: "realestate.com.au Korumburra listings", href: "https://www.realestate.com.au/buy/in-korumburra,+vic+3950/list-1" },
        ],
      },
    ],
    statsTitle: "Korumburra statistics snapshot",
    statCards: [
      { label: "Population (2021 Census)", value: "4,749", note: "ABS QuickStats SAL21399" },
      { label: "Median age", value: "47", note: "ABS QuickStats 2021" },
      { label: "Median weekly household income", value: "$1,175", note: "ABS QuickStats 2021" },
      { label: "Median weekly rent", value: "$270", note: "ABS QuickStats 2021" },
    ],
    statSource: {
      label: "ABS QuickStats SAL21399",
      href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL21399",
    },
    sources: [
      { label: "ABS QuickStats: Korumburra", href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL21399" },
      { label: "Visit Gippsland: Korumburra", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/korumburra" },
      { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/korumburra-3950/" },
      { label: "realestate.com.au Korumburra listings", href: "https://www.realestate.com.au/buy/in-korumburra,+vic+3950/list-1" },
    ],
    comparisonTitle: "How Korumburra compares in-region",
    comparisonParagraphs: [
      "Korumburra generally sits at the practical end of the shortlist. Buyers often compare it with Leongatha for services, with the coast for recreation, and with inland acreage when they start wanting more privacy or larger homesites.",
      "If you want the region without centring the search on town living, it is worth comparing Korumburra's convenience against the live Mardan acreage listing.",
    ],
    relatedGuides: [
      { title: "South Gippsland", href: "/south-gippsland", description: "Broader region context before narrowing town fit." },
      { title: "Leongatha", href: "/leongatha", description: "Higher-profile service hub comparison." },
      { title: "Inverloch", href: "/inverloch", description: "Coastal alternative with stronger holiday-home feel." },
      { title: "Mardan listing", href: "/", description: "Compare town convenience with a larger inland homesite." },
    ],
    ctaTitle: "Compare Korumburra with a higher-amenity acreage option",
    ctaBody:
      "If Korumburra is on your shortlist for practical regional living, compare it against the active 30 O'Malleys Rd listing to see how more land, more privacy, and a more complete lifestyle setup change the equation.",
    latitude: -38.431,
    longitude: 145.822,
  },
  inverloch: {
    slug: "inverloch",
    locationLabel: "Inverloch VIC 3996",
    metadataTitle: "Inverloch Real Estate Guide | Coastal Living and Property Comparison",
    metadataDescription:
      "Inverloch real estate guide for buyers comparing coastal living, holiday-home demand, and South Gippsland lifestyle property options.",
    keywords: [
      "Inverloch real estate",
      "Inverloch property",
      "Inverloch houses for sale",
      "holiday home Inverloch",
      "Bass Coast real estate",
      "South Gippsland property",
    ],
    schemaDescription:
      "Bass Coast-South Gippsland coastal town with strong buyer appeal for permanent living, holiday homes, and beach access.",
    addressLocality: "Inverloch",
    postalCode: "3996",
    title: "Inverloch real estate guide for coastal living and holiday-home buyers",
    intro:
      "Inverloch sits on the Bass Coast side of many South Gippsland search journeys, but it remains highly relevant to buyers comparing coastal lifestyle against inland acreage and town-based living. It tends to attract both permanent movers and higher-frequency holiday-home buyers.",
    proximityNote: "Approx. 35 min from Springbank",
    browseListingsUrl: "https://www.realestate.com.au/buy/in-inverloch,+vic+3996/list-1",
    suburbDataUrl: "https://www.property.com.au/vic/inverloch-3996/",
    heroImage: inverlochImage,
    overviewParagraphs: [
      "Inverloch is often the coastal control point in broader South Gippsland comparisons. Buyers use it to test whether they want direct beach-town living, a holiday-home profile, or a quieter inland base with more land and lower friction around privacy.",
      "It has stronger town scale and more established tourism infrastructure than some smaller coastal settlements. That makes it useful for buyers who want beach access without losing too much everyday convenience.",
    ],
    overviewSourceLinks: [
      { label: "Visit Gippsland: Inverloch", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/inverloch" },
      { label: "Visit Inverloch events", href: "https://www.visitinverloch.co/events" },
    ],
    quickLifestyleNotes: [
      "Coastal town with a stronger permanent-living base than some smaller beach settlements.",
      "Supports both holiday-home demand and full-time use.",
      "Useful benchmark against inland acreage if you are deciding between beach access and privacy.",
    ],
    thingsToDo: [
      {
        title: "Foreshore and inlet lifestyle",
        description:
          "Inverloch offers a beach-and-inlet pattern that suits both short walks and longer weekend use. That matters for buyers because it makes the town more usable through the year rather than purely summer-led.",
        href: "https://www.visitgippsland.com.au/destinations/south-gippsland/inverloch",
        linkLabel: "Inverloch guide",
      },
      {
        title: "Event calendar depth",
        description:
          "The Equinox Festival, Running Festival, and Easter programming give Inverloch a visibly broader calendar than many coastal towns. For property searches, that supports both lifestyle and guest-use appeal.",
        href: "https://www.visitinverloch.co/events",
        linkLabel: "Current event calendar",
      },
      {
        title: "Holiday-home demand benchmark",
        description:
          "If you are trying to understand how much holiday-home demand matters to your search, Inverloch is one of the clearest comparison points in the district.",
      },
      {
        title: "Compare with inland alternatives",
        description:
          "If the coast appeals but you want more land and a more self-contained base, compare Inverloch demand with larger homesite options inland around Mardan.",
      },
    ],
    eventsDescription:
      "These current 2026 events are part of the reason Inverloch remains prominent in coastal buyer searches. Confirm details on the source pages before travelling.",
    events: [inverlochEquinoxFestival, inverlochWellbeingExpo, runningFestival, easterArtShow, anzacDayService],
    infoCards: [
      {
        icon: "waves",
        title: "Coastal demand benchmark",
        description:
          "Inverloch is a useful check on how much direct beach-town living matters to your search.",
      },
      {
        icon: "map",
        title: "Town-scale convenience",
        description:
          "It offers more everyday utility than the smallest coastal settlements while keeping beach access immediate.",
      },
      {
        icon: "bar-chart",
        title: "Market links",
        description: "Use coastal listing data and event-season context together before deciding on fit.",
        links: [
          { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/inverloch-3996/" },
          { label: "realestate.com.au Inverloch listings", href: "https://www.realestate.com.au/buy/in-inverloch,+vic+3996/list-1" },
        ],
      },
    ],
    statsTitle: "Inverloch statistics snapshot",
    statCards: [
      { label: "Population (2021 Census)", value: "6,046", note: "ABS QuickStats UCL214010" },
      { label: "Median age", value: "55", note: "ABS QuickStats 2021" },
      { label: "Median weekly household income", value: "$1,253", note: "ABS QuickStats 2021" },
      { label: "Median weekly rent", value: "$350", note: "ABS QuickStats 2021" },
    ],
    statSource: {
      label: "ABS QuickStats UCL214010",
      href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/UCL214010",
    },
    sources: [
      { label: "ABS QuickStats: Inverloch", href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/UCL214010" },
      { label: "Visit Gippsland: Inverloch", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/inverloch" },
      { label: "Visit Inverloch events", href: "https://www.visitinverloch.co/events" },
      { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/inverloch-3996/" },
    ],
    comparisonTitle: "How Inverloch compares in-region",
    comparisonParagraphs: [
      "Inverloch usually sits on the coastal side of the shortlist. Buyers compare it with smaller beach settlements when they want more town infrastructure, and with inland properties when they start prioritising privacy, gardens, or a larger home-and-studio setup.",
      "If you want South Gippsland reach without fully centring the search on a beach-town market, it is worth contrasting Inverloch with the active acreage listing in Mardan.",
    ],
    relatedGuides: [
      { title: "Venus Bay", href: "/venus-bay", description: "Smaller beach-town rhythm and lower-key holiday feel." },
      { title: "Sandy Point", href: "/sandy-point", description: "Prom-side beach access and lower-density coastal pattern." },
      { title: "South Gippsland", href: "/south-gippsland", description: "Broader region context for inland vs coast comparisons." },
      { title: "Mardan listing", href: "/", description: "Benchmark the coast against a larger inland homesite." },
    ],
    ctaTitle: "Compare Inverloch with an inland lifestyle property",
    ctaBody:
      "If Inverloch is setting your coastal benchmark, compare it with the live Mardan listing to see what more land, more privacy, and a stronger year-round homesite can look like inland.",
    latitude: -38.633,
    longitude: 145.728,
  },
  "venus-bay": {
    slug: "venus-bay",
    locationLabel: "Venus Bay VIC 3956",
    metadataTitle: "Venus Bay Property Guide | Beachside Living and South Gippsland Comparisons",
    metadataDescription:
      "Venus Bay property guide for buyers comparing beachside living, holiday-home demand, and inland South Gippsland alternatives.",
    keywords: [
      "Venus Bay property",
      "Venus Bay real estate",
      "Venus Bay houses for sale",
      "holiday home Venus Bay",
      "South Gippsland coastal property",
      "beach house Victoria",
    ],
    schemaDescription:
      "Coastal settlement on the South Gippsland-Bass Coast edge known for beaches, holiday-home appeal, and lower-density coastal living.",
    addressLocality: "Venus Bay",
    postalCode: "3956",
    title: "Venus Bay property guide for beachside living and holiday-home buyers",
    intro:
      "Venus Bay attracts a different buyer type to inland South Gippsland towns. It is more clearly a beach-and-holiday settlement, which makes it highly relevant if your search is leaning toward a weekender, short-stay base, or a simpler coastal routine.",
    proximityNote: "Approx. 35 min from Springbank",
    browseListingsUrl: "https://www.realestate.com.au/buy/in-venus+bay,+vic+3956/list-1",
    suburbDataUrl: "https://www.property.com.au/vic/venus-bay-3956/",
    heroImage: southGippslandLandscape,
    overviewParagraphs: [
      "Venus Bay works well as a benchmark if your search is moving toward direct beach access and a more holiday-oriented ownership pattern. It is not trying to be a large service centre; the appeal is lower-density coastal living and easier repeat access to sand and surf.",
      "That makes it a useful contrast against inland homesites like Mardan, where the lifestyle value is more about privacy, land usability, gardens, and broader regional reach than immediate beach frontage.",
    ],
    overviewSourceLinks: [
      { label: "Visit Gippsland: Venus Bay", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/venus-bay" },
      { label: "South Gippsland beaches guide", href: "https://www.visitgippsland.com.au/do-and-see/nature-and-wildlife/beaches/south-gippsland-beaches" },
    ],
    quickLifestyleNotes: [
      "Stronger holiday-home profile than inland South Gippsland towns.",
      "Useful if direct beach use matters more than service-town scale.",
      "Best compared with inland options once you decide how often you would realistically use the coast.",
    ],
    thingsToDo: [
      {
        title: "Beach-driven daily routine",
        description:
          "Venus Bay is really about whether you want easy shoreline access to shape regular use. If that answer is yes, the settlement makes sense. If not, inland properties often offer more flexibility for the same broader region.",
      },
      {
        title: "Holiday-home and guest-use logic",
        description:
          "The town is relevant for buyers who expect visitors or want a simpler short-stay pattern. That makes it a useful contrast with larger inland homesites built for longer stays and broader entertaining.",
      },
      {
        title: "Shortlist test for coast versus land",
        description:
          "A Venus Bay comparison helps clarify whether your search is really about direct beach access or about the South Gippsland lifestyle more broadly.",
      },
      {
        title: "Connect the coast back to the region",
        description:
          "Even beach-led buyers should still compare town services, driving patterns, and longer-term practicality across the broader South Gippsland network.",
        href: "https://www.visitgippsland.com.au/do-and-see/nature-and-wildlife/beaches/south-gippsland-beaches",
        linkLabel: "Regional beach guide",
      },
    ],
    eventsDescription:
      "These published 2026 events are relevant to Venus Bay buyers because they show what the broader coast-and-hinterland calendar looks like after summer. Confirm details on the source pages before travelling.",
    events: [inverlochEquinoxFestival, runningFestival, easterArtShow, anzacDayService],
    infoCards: [
      {
        icon: "waves",
        title: "Beach-first search profile",
        description:
          "Venus Bay usually enters the shortlist when direct beach use matters more than town services.",
      },
      {
        icon: "compass",
        title: "Holiday-home relevance",
        description:
          "It is a strong test case for whether your search is leaning toward a weekender or a full-time base.",
      },
      {
        icon: "bar-chart",
        title: "Market links",
        description: "Use coastal listing supply and regional context together before committing to a beach-town strategy.",
        links: [
          { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/venus-bay-3956/" },
          { label: "realestate.com.au Venus Bay listings", href: "https://www.realestate.com.au/buy/in-venus+bay,+vic+3956/list-1" },
        ],
      },
    ],
    statsTitle: "Venus Bay statistics snapshot",
    statCards: [
      { label: "Population (2021 Census)", value: "904", note: "ABS QuickStats SAL22626" },
      { label: "Median age", value: "58", note: "ABS QuickStats 2021" },
      { label: "All private dwellings", value: "1,829", note: "ABS QuickStats 2021" },
      { label: "Average people per household", value: "1.8", note: "ABS QuickStats 2021" },
    ],
    statSource: {
      label: "ABS QuickStats SAL22626",
      href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL22626",
    },
    sources: [
      { label: "ABS QuickStats: Venus Bay", href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL22626" },
      { label: "Visit Gippsland: Venus Bay", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/venus-bay" },
      { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/venus-bay-3956/" },
      { label: "realestate.com.au Venus Bay listings", href: "https://www.realestate.com.au/buy/in-venus+bay,+vic+3956/list-1" },
    ],
    comparisonTitle: "How Venus Bay compares in-region",
    comparisonParagraphs: [
      "Venus Bay tends to be a beach-led decision rather than a service-led one. That makes it a useful contrast with both Inverloch and inland South Gippsland property when you are trying to clarify whether your real objective is coastal use or a broader long-term lifestyle base.",
      "If the latter is becoming more important, compare Venus Bay's appeal with the active acreage listing in Mardan.",
    ],
    relatedGuides: [
      { title: "Inverloch", href: "/inverloch", description: "Larger coastal benchmark with more town-scale activity." },
      { title: "Sandy Point", href: "/sandy-point", description: "Prom-side coastal alternative with a quieter rhythm." },
      { title: "South Gippsland", href: "/south-gippsland", description: "Broader inland and township guide to the wider region." },
      { title: "Mardan listing", href: "/", description: "See how a 5-acre inland base compares with beach-town living." },
    ],
    ctaTitle: "Compare Venus Bay with a larger inland base",
    ctaBody:
      "If Venus Bay is on your shortlist, compare it directly with the active Mardan listing to decide whether direct beach access or a more versatile inland homesite is the better long-term match.",
    latitude: -38.683,
    longitude: 145.822,
  },
  "sandy-point": {
    slug: "sandy-point",
    locationLabel: "Sandy Point VIC 3959",
    metadataTitle: "Sandy Point Property Guide | Prom-Side Beach Living Comparison",
    metadataDescription:
      "Sandy Point property guide for buyers comparing Prom-side beach living, holiday-home demand, and inland South Gippsland alternatives.",
    keywords: [
      "Sandy Point property",
      "Sandy Point real estate",
      "Sandy Point houses for sale",
      "holiday home Sandy Point",
      "Prom Country beach house",
      "South Gippsland coastal property",
    ],
    schemaDescription:
      "Prom-side coastal settlement in South Gippsland known for beach access, lower-density housing, and holiday-home appeal.",
    addressLocality: "Sandy Point",
    postalCode: "3959",
    title: "Sandy Point property guide for Prom-side beach living",
    intro:
      "Sandy Point is relevant when buyers want a quieter coastal setting close to Prom Country rather than a busier beach-town environment. It often comes into the search when the objective is low-key beach access and a simpler holiday pattern.",
    proximityNote: "Approx. 35 min from Springbank",
    browseListingsUrl: "https://www.realestate.com.au/buy/in-sandy+point,+vic+3959/list-1",
    suburbDataUrl: "https://www.property.com.au/vic/sandy-point-3959/",
    heroImage: waratahBayImage,
    overviewParagraphs: [
      "Sandy Point tends to suit buyers who are less interested in town-centre activity and more interested in beach routine, Prom-side access, and a quieter ownership pattern. In that sense, it is a specific coastal lifestyle choice rather than a general South Gippsland base.",
      "That makes it useful to compare against inland options like Mardan when you want to test whether your real priority is direct coastal access or a broader long-stay property with more land and flexibility.",
    ],
    overviewSourceLinks: [
      { label: "Visit Gippsland: Sandy Point", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/sandy-point" },
      { label: "South Gippsland beaches guide", href: "https://www.visitgippsland.com.au/do-and-see/nature-and-wildlife/beaches/south-gippsland-beaches" },
    ],
    quickLifestyleNotes: [
      "Low-key coastal settlement with strong holiday-home relevance.",
      "Useful when Prom-side beach access matters more than town services.",
      "Best contrasted with inland homesites if you are unsure how much direct coastal living you really need.",
    ],
    thingsToDo: [
      {
        title: "Prom-side beach routine",
        description:
          "Sandy Point makes most sense for buyers who will use the beach frequently enough to justify a more coastal ownership pattern. That practical usage question is more important than generic holiday imagery.",
      },
      {
        title: "Quieter alternative to larger coastal towns",
        description:
          "Compared with more active centres, Sandy Point can appeal because it strips the experience back to coastline, simplicity, and guest-friendly long weekends.",
      },
      {
        title: "Regional event access still matters",
        description:
          "Even a beach-led shortlist should be tested against the broader South Gippsland events calendar because long-term enjoyment often depends on more than the sand alone.",
        href: "https://www.visitgippsland.com.au/do-and-see/nature-and-wildlife/beaches/south-gippsland-beaches",
        linkLabel: "Regional beach guide",
      },
      {
        title: "Compare beach use against land use",
        description:
          "If your lifestyle goals are widening to entertaining, gardens, guest space, and year-round practicality, compare Sandy Point with inland acreage before you commit.",
      },
    ],
    eventsDescription:
      "These published 2026 events are relevant to Sandy Point searches because they show how the broader Prom Country and Bass Coast calendar runs beyond summer. Confirm details on the source pages before travelling.",
    events: [runningFestival, easterArtShow, anzacDayService, fishCreekTeaCosy],
    infoCards: [
      {
        icon: "waves",
        title: "Quieter coastal pattern",
        description:
          "Sandy Point tends to attract buyers seeking a calmer beach rhythm rather than a busier town-centre setting.",
      },
      {
        icon: "compass",
        title: "Prom-side relevance",
        description:
          "It matters most when Wilsons Promontory access and recurring beach use are part of the ownership plan.",
      },
      {
        icon: "bar-chart",
        title: "Market links",
        description: "Use coastal listing supply and regional planning context together.",
        links: [
          { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/sandy-point-3959/" },
          { label: "realestate.com.au Sandy Point listings", href: "https://www.realestate.com.au/buy/in-sandy+point,+vic+3959/list-1" },
        ],
      },
    ],
    statsTitle: "Sandy Point statistics snapshot",
    statCards: [
      { label: "Population (2021 Census)", value: "312", note: "ABS QuickStats SAL22236" },
      { label: "Median age", value: "58", note: "ABS QuickStats 2021" },
      { label: "All private dwellings", value: "726", note: "ABS QuickStats 2021" },
      { label: "Average people per household", value: "2.1", note: "ABS QuickStats 2021" },
    ],
    statSource: {
      label: "ABS QuickStats SAL22236",
      href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL22236",
    },
    sources: [
      { label: "ABS QuickStats: Sandy Point", href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL22236" },
      { label: "Visit Gippsland: Sandy Point", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/sandy-point" },
      { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/sandy-point-3959/" },
      { label: "realestate.com.au Sandy Point listings", href: "https://www.realestate.com.au/buy/in-sandy+point,+vic+3959/list-1" },
    ],
    comparisonTitle: "How Sandy Point compares in-region",
    comparisonParagraphs: [
      "Sandy Point is a beach-led decision, and it usually makes sense only when repeated coastal use is central to the plan. If you need broader services or want a larger entertaining-and-guest setup, the comparison should quickly widen to nearby towns and inland homesites.",
      "That is why it is worth contrasting Sandy Point with the current Mardan acreage listing before you narrow the shortlist too far.",
    ],
    relatedGuides: [
      { title: "Waratah Bay", href: "/waratah-bay", description: "Neighbouring beach setting with a similarly quiet rhythm." },
      { title: "Walkerville", href: "/walkerville", description: "Historic coastal setting and lime-kiln landscape." },
      { title: "Wilsons Promontory", href: "/wilsons-promontory", description: "Park-access context that drives regional demand." },
      { title: "Mardan listing", href: "/", description: "Compare the coast with a larger inland homesite." },
    ],
    ctaTitle: "Compare Sandy Point with an inland long-stay property",
    ctaBody:
      "If Sandy Point is surfacing in your search, compare it against the live Mardan listing to see whether your long-term fit is really beach-first or better served by a more versatile inland base.",
    latitude: -38.823,
    longitude: 146.122,
  },
  "waratah-bay": {
    slug: "waratah-bay",
    locationLabel: "Waratah Bay VIC 3959",
    metadataTitle: "Waratah Bay Property Guide | Quiet Coastal Living in South Gippsland",
    metadataDescription:
      "Waratah Bay property guide for buyers comparing quiet coastal living, holiday-home demand, and Prom Country alternatives in South Gippsland.",
    keywords: [
      "Waratah Bay property",
      "Waratah Bay real estate",
      "Waratah Bay houses for sale",
      "holiday home Waratah Bay",
      "South Gippsland coastal property",
      "Prom Country beach house",
    ],
    schemaDescription:
      "Quiet South Gippsland coastal settlement known for beach access, holiday-home demand, and comparison with nearby Prom Country towns.",
    addressLocality: "Waratah Bay",
    postalCode: "3959",
    title: "Waratah Bay property guide for quieter coastal living",
    intro:
      "Waratah Bay matters when the search is moving away from larger town patterns and toward a quieter beachside ownership model. It is a useful comparison for buyers who want lower-density coastal access without centring everything on a bigger holiday hub.",
    proximityNote: "Approx. 35 min from Springbank",
    browseListingsUrl: "https://www.realestate.com.au/buy/in-waratah+bay,+vic+3959/list-1",
    suburbDataUrl: "https://www.property.com.au/vic/waratah-bay-3959/",
    heroImage: waratahBayImage,
    overviewParagraphs: [
      "Waratah Bay is a slower, quieter coastal proposition. It tends to appeal when buyers want direct shoreline access and a simpler holiday or semi-permanent pattern rather than town-scale services or stronger commercial activity.",
      "That makes it valuable in comparison terms. It can clarify very quickly whether your search is really about quiet beach use or whether you would be better served by a more flexible inland base with more land and easier day-to-day practicality.",
    ],
    overviewSourceLinks: [
      { label: "Visit Gippsland: Waratah Bay", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/waratah-bay" },
      { label: "South Gippsland beaches guide", href: "https://www.visitgippsland.com.au/do-and-see/nature-and-wildlife/beaches/south-gippsland-beaches" },
    ],
    quickLifestyleNotes: [
      "Quiet coastal option with a clearer holiday-home profile than inland towns.",
      "Works as a comparison if privacy is important but you still want direct beach access.",
      "Best weighed against both nearby coastal towns and larger inland homesites.",
    ],
    thingsToDo: [
      {
        title: "Beach access without larger-town noise",
        description:
          "Waratah Bay's appeal is that it strips the coastal decision back to the essentials: beach, scenery, and a quieter ownership pattern. That can be exactly right for some buyers and too narrow for others.",
      },
      {
        title: "Prom Country day-trip compatibility",
        description:
          "The broader region remains accessible, so you still benefit from nearby village events and Prom Country trips even if you choose a quieter settlement base.",
      },
      {
        title: "A good test for simplicity versus versatility",
        description:
          "If you want to understand whether your shortlist needs more town infrastructure or more homesite flexibility, Waratah Bay is a useful comparison point.",
      },
      {
        title: "Connect the coast back to the regional network",
        description:
          "Even buyers drawn to a quiet coast should compare travel patterns, event access, and long-term holding practicality across the wider South Gippsland network.",
        href: "https://www.visitgippsland.com.au/do-and-see/nature-and-wildlife/beaches/south-gippsland-beaches",
        linkLabel: "Regional beach guide",
      },
    ],
    eventsDescription:
      "These published 2026 events are relevant to Waratah Bay buyers because they show what the broader district offers beyond the shoreline itself. Confirm details on the source pages before travelling.",
    events: [runningFestival, meeniyanMajorZulu, meeniyanRuthieFoster, fishCreekTeaCosy],
    infoCards: [
      {
        icon: "waves",
        title: "Quiet-coast shortlist",
        description:
          "Waratah Bay usually appeals when buyers want a lower-key beach pattern rather than town-scale activity.",
      },
      {
        icon: "compass",
        title: "Regional access still matters",
        description:
          "The broader Prom Country and South Gippsland network shapes the long-term livability of quiet coastal addresses.",
      },
      {
        icon: "bar-chart",
        title: "Market links",
        description: "Use listing supply, beach-use logic, and regional context together.",
        links: [
          { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/waratah-bay-3959/" },
          { label: "realestate.com.au Waratah Bay listings", href: "https://www.realestate.com.au/buy/in-waratah+bay,+vic+3959/list-1" },
        ],
      },
    ],
    statsTitle: "Waratah Bay statistics snapshot",
    statCards: [
      { label: "Population (2021 Census)", value: "48", note: "ABS QuickStats SAL22688" },
      { label: "Median age", value: "59", note: "ABS QuickStats 2021" },
      { label: "All private dwellings", value: "131", note: "ABS QuickStats 2021" },
      { label: "Average people per household", value: "2.0", note: "ABS QuickStats 2021" },
    ],
    statSource: {
      label: "ABS QuickStats SAL22688",
      href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL22688",
    },
    sources: [
      { label: "ABS QuickStats: Waratah Bay", href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL22688" },
      { label: "Visit Gippsland: Waratah Bay", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/waratah-bay" },
      { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/waratah-bay-3959/" },
      { label: "realestate.com.au Waratah Bay listings", href: "https://www.realestate.com.au/buy/in-waratah+bay,+vic+3959/list-1" },
    ],
    comparisonTitle: "How Waratah Bay compares in-region",
    comparisonParagraphs: [
      "Waratah Bay generally makes sense only when direct quiet-coast living is the priority. Buyers who need more flexibility, more guest capacity, or a stronger everyday-use property often end up widening the search back toward inland South Gippsland.",
      "That is why it is worth comparing Waratah Bay with the live Mardan acreage listing before you lock into a beach-only framework.",
    ],
    relatedGuides: [
      { title: "Sandy Point", href: "/sandy-point", description: "Another Prom-side beach option with a similar low-key rhythm." },
      { title: "Walkerville", href: "/walkerville", description: "Historic coastal setting and a different landscape feel." },
      { title: "Foster", href: "/foster", description: "Prom-side service base for broader practicality." },
      { title: "Mardan listing", href: "/", description: "Compare coastal simplicity with a larger inland homesite." },
    ],
    ctaTitle: "Compare Waratah Bay with a more versatile inland base",
    ctaBody:
      "If Waratah Bay is surfacing because of the coastline, compare it with the active Mardan listing to decide whether your long-term fit is quiet-beach simplicity or a more adaptable inland lifestyle property.",
    latitude: -38.808,
    longitude: 146.070,
  },
  walkerville: {
    slug: "walkerville",
    locationLabel: "Walkerville VIC 3956",
    metadataTitle: "Walkerville Property Guide | Historic Coastline and Lifestyle Comparison",
    metadataDescription:
      "Walkerville property guide for buyers comparing historic coastline appeal, quiet beach access, and inland South Gippsland alternatives.",
    keywords: [
      "Walkerville property",
      "Walkerville real estate",
      "Walkerville houses for sale",
      "Walkerville beach house",
      "South Gippsland coastal property",
      "Cape Liptrap property",
    ],
    schemaDescription:
      "South Gippsland coastal settlement known for limestone-kiln history, scenic shoreline, and quiet beach-use appeal.",
    addressLocality: "Walkerville",
    postalCode: "3956",
    title: "Walkerville property guide for quiet coastline buyers",
    intro:
      "Walkerville is one of the clearest examples of a buyer choosing coastline and landscape character first, then fitting property around that decision. It appeals when the search is less about town infrastructure and more about a particular kind of coastal atmosphere.",
    proximityNote: "Approx. 35 min from Springbank",
    browseListingsUrl: "https://www.realestate.com.au/buy/in-walkerville,+vic+3956/list-1",
    suburbDataUrl: "https://www.property.com.au/vic/walkerville-3956/",
    heroImage: walkervilleImage,
    overviewParagraphs: [
      "Walkerville's historic lime-kiln ruins and rugged coastal setting give it a more distinctive landscape identity than many beach settlements. For some buyers, that kind of place-specific character is exactly the point of the search.",
      "It also means Walkerville is best used as a comparison against more versatile inland properties. If your needs include guest space, year-round comfort, and a larger homesite, it is worth testing how much coastline you really need against what you gain inland.",
    ],
    overviewSourceLinks: [
      { label: "Visit Gippsland: Walkerville", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/walkerville" },
      { label: "South Gippsland beaches guide", href: "https://www.visitgippsland.com.au/do-and-see/nature-and-wildlife/beaches/south-gippsland-beaches" },
    ],
    quickLifestyleNotes: [
      "Historic limestone-kiln coastline with a strong sense of place.",
      "Quieter and more landscape-led than most town-based searches.",
      "Useful as a contrast if you are deciding between coastline atmosphere and inland versatility.",
    ],
    thingsToDo: [
      {
        title: "Walkerville's heritage coastal setting",
        description:
          "The lime kilns and headland setting give Walkerville a more place-specific identity than a generic surf or bay town. Buyers who respond to it tend to do so strongly, which is why it can quickly clarify the shortlist.",
      },
      {
        title: "Beach access without a bigger-town overlay",
        description:
          "Walkerville is relevant when you want the coast without a busier town-centre frame around it. That can be compelling, but it also makes it important to compare long-term practicality elsewhere.",
      },
      {
        title: "Regional event access still supports the lifestyle",
        description:
          "Even a quiet coastline address benefits from the broader South Gippsland events calendar. That surrounding network often shapes long-term satisfaction more than buyers expect.",
      },
      {
        title: "Use Walkerville as a shortlist test",
        description:
          "If Walkerville appeals visually but you need more year-round living depth, compare it with inland properties before committing to a coastline-first decision.",
      },
    ],
    eventsDescription:
      "These published 2026 events are relevant to Walkerville buyers because they show what the broader district offers beyond the immediate coastline. Confirm details on the source pages before travelling.",
    events: [runningFestival, easterArtShow, meeniyanRuthieFoster, fishCreekTeaCosy],
    infoCards: [
      {
        icon: "mountain",
        title: "Landscape-led appeal",
        description:
          "Walkerville tends to appeal when coastline character and setting are central to the decision.",
      },
      {
        icon: "compass",
        title: "Quiet-coast comparison",
        description:
          "It is best assessed alongside Waratah Bay, Sandy Point, and inland alternatives rather than in isolation.",
      },
      {
        icon: "bar-chart",
        title: "Market links",
        description: "Use quiet-coast listings and broader regional context together.",
        links: [
          { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/walkerville-3956/" },
          { label: "realestate.com.au Walkerville listings", href: "https://www.realestate.com.au/buy/in-walkerville,+vic+3956/list-1" },
        ],
      },
    ],
    statsTitle: "Walkerville statistics snapshot",
    statCards: [
      { label: "Population (2021 Census)", value: "130", note: "ABS QuickStats SAL22653" },
      { label: "Median age", value: "57", note: "ABS QuickStats 2021" },
      { label: "All private dwellings", value: "223", note: "ABS QuickStats 2021" },
      { label: "Average people per household", value: "2.0", note: "ABS QuickStats 2021" },
    ],
    statSource: {
      label: "ABS QuickStats SAL22653",
      href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL22653",
    },
    sources: [
      { label: "ABS QuickStats: Walkerville", href: "https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL22653" },
      { label: "Visit Gippsland: Walkerville", href: "https://www.visitgippsland.com.au/destinations/south-gippsland/walkerville" },
      { label: "Property.com.au suburb profile", href: "https://www.property.com.au/vic/walkerville-3956/" },
      { label: "realestate.com.au Walkerville listings", href: "https://www.realestate.com.au/buy/in-walkerville,+vic+3956/list-1" },
    ],
    comparisonTitle: "How Walkerville compares in-region",
    comparisonParagraphs: [
      "Walkerville is usually a place-led decision rather than a services-led one. Buyers who fall for it often do so because of the coastline itself, which is why it is worth pairing the emotional response with a colder comparison against inland practicalities.",
      "If you need more year-round comfort, garden scale, guest flexibility, or broader town access, compare Walkerville with the live Mardan acreage listing before deciding.",
    ],
    relatedGuides: [
      { title: "Waratah Bay", href: "/waratah-bay", description: "Neighbouring quiet-coast alternative." },
      { title: "Sandy Point", href: "/sandy-point", description: "Prom-side beach option with a similar low-density feel." },
      { title: "South Gippsland", href: "/south-gippsland", description: "Broader region context for coast-vs-inland decisions." },
      { title: "Mardan listing", href: "/", description: "Benchmark the quiet coast against a larger inland homesite." },
    ],
    ctaTitle: "Compare Walkerville with a year-round inland base",
    ctaBody:
      "If Walkerville has entered your shortlist because of its coastline and character, compare it with the live Mardan listing to decide whether your best long-term fit is quiet coast or a more flexible inland homesite.",
    latitude: -38.857,
    longitude: 145.998,
  },
};
