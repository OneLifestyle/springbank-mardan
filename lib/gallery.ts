export type GalleryCategory =
  | "Exterior"
  | "Interiors"
  | "Grounds"
  | "Views"
  | "Plans";

export type PropertyImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
  useInHomepage?: boolean;
  useInOpenHome?: boolean;
  useAsHero?: boolean;
};

const listingGalleryImages: PropertyImage[] = [
  {
    src: "/images/springbank/gallery-full/mardan-acreage-home-dam-overview-001.jpg",
    alt: "Broad view across the dam toward the main residence and outbuilding on the 5-acre holding",
    category: "Views",
    useAsHero: true,
    useInHomepage: true,
    useInOpenHome: true,
  },
  {
    src: "/images/springbank/gallery-full/mardan-lifestyle-property-front-elevation-001.jpg",
    alt: "Dusk front elevation of the Mardan residence with studio building and gravel arrival court",
    category: "Exterior",
    useInHomepage: true,
    useInOpenHome: true,
  },
  {
    src: "/images/springbank/gallery-full/mardan-terrace-valley-view-001.jpg",
    alt: "Covered terrace framed by the residence with panoramic valley views beyond",
    category: "Views",
    useInHomepage: true,
    useInOpenHome: true,
  },
  {
    src: "/images/springbank/gallery-full/mardan-kitchen-island-dining-001.jpg",
    alt: "Main kitchen with large island bench opening into the dining area",
    category: "Interiors",
    useInHomepage: true,
    useInOpenHome: true,
  },
  {
    src: "/images/springbank/gallery-full/mardan-kitchen-valley-view-001.jpg",
    alt: "Kitchen and dining room with broad valley outlook through the main windows",
    category: "Interiors",
    useInHomepage: true,
  },
  {
    src: "/images/springbank/gallery-full/mardan-living-room-fireplace-001.jpg",
    alt: "Main living room with sculpted fireplace, timber floors, and tall ceilings",
    category: "Interiors",
  },
  {
    src: "/images/springbank/gallery-full/mardan-dam-residence-outlook-001.jpg",
    alt: "Dam, lawns, and landscaped grounds leading up to the residence and studio",
    category: "Views",
    useInHomepage: true,
    useInOpenHome: true,
  },
  {
    src: "/images/springbank/gallery-full/south-gippsland-lily-pond-gardens-001.jpg",
    alt: "Elevated view over the lily pond and established South Gippsland gardens",
    category: "Grounds",
  },
  {
    src: "/images/springbank/gallery-full/mardan-lily-pond-gardens-002.jpg",
    alt: "Garden pond with lilies, clipped hedges, and open lawns around the home",
    category: "Grounds",
  },
  {
    src: "/images/springbank/gallery-full/mardan-hedge-walkway-001.jpg",
    alt: "Hedge-lined walkway and pergola structure within the formal garden areas",
    category: "Grounds",
  },
  {
    src: "/images/springbank/gallery-full/mardan-tree-lined-drive-001.jpg",
    alt: "Birch-lined drive and lawns leading toward the residence and garden rooms",
    category: "Grounds",
  },
  {
    src: "/images/springbank/gallery-full/mardan-entry-drive-gardens-001.jpg",
    alt: "Front approach to the residence framed by mature trees and the gravel court",
    category: "Exterior",
    useInHomepage: true,
  },
  {
    src: "/images/springbank/gallery-full/south-gippsland-gardens-water-view-001.jpg",
    alt: "Expansive lawns, trees, and water feature within the South Gippsland setting",
    category: "Grounds",
  },
  {
    src: "/images/springbank/gallery-full/mardan-open-lawns-orchard-001.jpg",
    alt: "Open lawns and orchard-style planting across the wider grounds",
    category: "Grounds",
  },
  {
    src: "/images/springbank/gallery-full/mardan-tree-lined-drive-002.jpg",
    alt: "Tree-lined track through the grounds with lawn edges and established planting",
    category: "Grounds",
  },
  {
    src: "/images/springbank/gallery-full/mardan-kitchen-sink-valley-view-001.jpg",
    alt: "Kitchen sink window looking across the terrace, lawns, and valley backdrop",
    category: "Interiors",
    useInHomepage: true,
  },
  {
    src: "/images/springbank/gallery-full/mardan-terrace-from-living-room-001.jpg",
    alt: "View from the living area through to the terrace and valley outlook",
    category: "Interiors",
  },
  {
    src: "/images/springbank/gallery-full/mardan-bedroom-feature-wall-001.jpg",
    alt: "Bedroom with rich feature wall and soft natural light",
    category: "Interiors",
  },
  {
    src: "/images/springbank/gallery-full/mardan-lower-level-guest-suite-001.jpg",
    alt: "Large lower-level guest suite with bed, bench seating, and flexible floor area",
    category: "Interiors",
    useInHomepage: true,
  },
  {
    src: "/images/springbank/gallery-full/mardan-lower-level-open-living-001.jpg",
    alt: "Open lower-level living area showing the scale and flexibility of the upgraded space",
    category: "Interiors",
  },
  {
    src: "/images/springbank/gallery-full/mardan-lower-level-kitchenette-001.jpg",
    alt: "Lower-level multipurpose room with kitchenette wall and dining zone",
    category: "Interiors",
    useInHomepage: true,
    useInOpenHome: true,
  },
  {
    src: "/images/springbank/gallery-full/mardan-lower-level-breakfast-bench-001.jpg",
    alt: "Lower-level kitchenette and breakfast bench opening into the adjoining sitting area",
    category: "Interiors",
  },
  {
    src: "/images/springbank/gallery-full/mardan-side-elevation-gardens-001.jpg",
    alt: "Side elevation of the residence and studio beside the lawned dam edge",
    category: "Exterior",
  },
  {
    src: "/images/springbank/gallery-full/mardan-driveway-gardens-view-001.jpg",
    alt: "Driveway and front gardens viewed from the covered outdoor edge",
    category: "Exterior",
  },
  {
    src: "/images/springbank/gallery-full/mardan-entry-hall-valley-view-001.jpg",
    alt: "Columned entry hall drawing the eye through to the terrace and valley beyond",
    category: "Interiors",
  },
];

const listingPlans: PropertyImage[] = [
  {
    src: "/images/springbank/plans/mardan-property-floorplan-001.png",
    alt: "Floor plan showing the upper and lower residence layout plus the separate studio and garage",
    category: "Plans",
  },
  {
    src: "/images/springbank/plans/mardan-property-site-plan-001.jpg",
    alt: "Site plan showing the full 5-acre property layout and surrounding grounds",
    category: "Plans",
  },
];

export const heroImage =
  listingGalleryImages.find((image) => image.useAsHero) ?? listingGalleryImages[0];

export const propertyFilm = {
  title: "Springbank Feature Video",
  description:
    "A guided video walkthrough of the residence, gardens, and Tarwin Valley setting.",
  youtubeUrl: "https://youtu.be/rFPWAy40BEg",
  fallbackImage: heroImage.src,
};

export const propertyImages: PropertyImage[] = [...listingGalleryImages, ...listingPlans];

export const homepageHighlightImages: PropertyImage[] = listingGalleryImages.filter(
  (image) => image.useInHomepage
);

export const openHomeGalleryImages: PropertyImage[] = listingGalleryImages.filter(
  (image) => image.useInOpenHome
);

export const galleryCategories: GalleryCategory[] = [
  "Exterior",
  "Interiors",
  "Grounds",
  "Views",
  "Plans",
];

export function getHomepageGalleryHighlights(max = 10): PropertyImage[] {
  return homepageHighlightImages.slice(0, max);
}

export function getOpenHomeGalleryHighlights(max = 6): PropertyImage[] {
  return openHomeGalleryImages.slice(0, max);
}

export function getEmbedVideoUrl(youtubeUrl: string): string | null {
  if (!youtubeUrl) {
    return null;
  }

  const shortMatch = youtubeUrl.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/);
  const watchMatch = youtubeUrl.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
  const id = shortMatch?.[1] ?? watchMatch?.[1];

  if (!id) {
    return null;
  }

  return `https://www.youtube.com/embed/${id}`;
}
