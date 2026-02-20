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
};

export const propertyFilm = {
  title: "Springbank Property Film",
  description:
    "A guided video walkthrough of the residence, gardens, and Tarwin Valley setting.",
  youtubeUrl: "https://youtu.be/rFPWAy40BEg",
  fallbackImage:
    "/images/springbank/highlights/springbank-mardan-south-gippsland-lifestyle-property-hero.jpg",
};

export const highlightImages: PropertyImage[] = [
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-dam-view.jpg",
    alt: "Springbank from the dam with merbau deck, sweeping lawns and established gardens",
    category: "Grounds",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-entrance.jpg",
    alt: "Grand Cherry Oak entrance with columns and valley views",
    category: "Interiors",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-lifestyle-property-kitchen.jpg",
    alt: "Renovated country kitchen with terracotta rangehood",
    category: "Interiors",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-terrace-view.jpg",
    alt: "Outdoor terrace with panoramic valley views",
    category: "Exterior",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-olive-path.jpg",
    alt: "Olive tree-lined pathway through the grounds",
    category: "Grounds",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-main-residence-studio.jpg",
    alt: "Main residence and poured earth studio",
    category: "Exterior",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-robert-boyle-gardens.jpg",
    alt: "Robert Boyle designed gardens with mature trees",
    category: "Grounds",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-front-garden-garage.jpg",
    alt: "Front garden with Japanese maple and double garage",
    category: "Exterior",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-tarwin-valley-views.jpg",
    alt: "Sweeping Tarwin Valley views from the property",
    category: "Views",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-lifestyle-property-hero.jpg",
    alt: "Hero view of Springbank residence and grounds",
    category: "Exterior",
  },
  {
    src: "/images/springbank/highlights/springbank-mardan-south-gippsland-property-aerial-grounds-road.jpg",
    alt: "Aerial view of Springbank grounds and residence from O'Malleys Road",
    category: "Views",
  },
  {
    src: "/images/springbank/plans/springbank-mardan-south-gippsland-property-floorplan-all-levels.png",
    alt: "Floor plan showing upper and lower levels plus garage, carport and studio",
    category: "Plans",
  },
  {
    src: "/images/springbank/plans/springbank-mardan-south-gippsland-property-aerial-boundary-plan.jpg",
    alt: "Aerial boundary plan of the full 5-acre property",
    category: "Plans",
  },
];

const rotatingCategories: GalleryCategory[] = [
  "Exterior",
  "Interiors",
  "Grounds",
  "Views",
];

const importedListingImages: PropertyImage[] = Array.from({ length: 62 }, (_, index) => {
  const seq = String(index + 1).padStart(3, "0");
  return {
    src: `/images/springbank/gallery-full/springbank-mardan-south-gippsland-lifestyle-property-gallery-${seq}.jpg`,
    alt: `Springbank Mardan South Gippsland lifestyle property gallery image ${seq}`,
    category: rotatingCategories[index % rotatingCategories.length],
  };
});

const importedListingPlans: PropertyImage[] = [
  {
    src: "/images/springbank/plans/springbank-mardan-south-gippsland-property-listing-floorplan-01.png",
    alt: "Springbank Mardan listing floorplan image 01",
    category: "Plans",
  },
  {
    src: "/images/springbank/plans/springbank-mardan-south-gippsland-property-listing-floorplan-02.jpg",
    alt: "Springbank Mardan listing floorplan image 02",
    category: "Plans",
  },
];

export const propertyImages: PropertyImage[] = [
  ...highlightImages,
  ...importedListingImages,
  ...importedListingPlans,
];

export const galleryCategories: GalleryCategory[] = [
  "Exterior",
  "Interiors",
  "Grounds",
  "Views",
  "Plans",
];

export function getHomepageGalleryHighlights(max = 10): PropertyImage[] {
  return highlightImages.filter((image) => image.category !== "Plans").slice(0, max);
}

export function getEmbedVideoUrl(youtubeUrl: string): string | null {
  if (!youtubeUrl) {
    return null;
  }

  // Supports both youtu.be and youtube.com links.
  const shortMatch = youtubeUrl.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/);
  const watchMatch = youtubeUrl.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
  const id = shortMatch?.[1] ?? watchMatch?.[1];

  if (!id) {
    return null;
  }

  return `https://www.youtube.com/embed/${id}`;
}
