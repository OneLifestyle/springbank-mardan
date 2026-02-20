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
  // Add your YouTube URL here when ready, e.g. "https://www.youtube.com/watch?v=..."
  youtubeUrl: "",
  fallbackImage: "/images/hero.jpeg",
};

export const propertyImages: PropertyImage[] = [
  {
    src: "/images/gallery-dam-view.jpeg",
    alt: "Springbank from the dam with merbau deck, sweeping lawns and established gardens",
    category: "Grounds",
  },
  {
    src: "/images/gallery-entrance.jpeg",
    alt: "Grand Cherry Oak entrance with columns and valley views",
    category: "Interiors",
  },
  {
    src: "/images/kitchen.jpeg",
    alt: "Renovated country kitchen with terracotta rangehood",
    category: "Interiors",
  },
  {
    src: "/images/gallery-terrace.jpeg",
    alt: "Outdoor terrace with panoramic valley views",
    category: "Exterior",
  },
  {
    src: "/images/gallery-olive-path.jpeg",
    alt: "Olive tree-lined pathway through the grounds",
    category: "Grounds",
  },
  {
    src: "/images/gallery-buildings.jpeg",
    alt: "Main residence and poured earth studio",
    category: "Exterior",
  },
  {
    src: "/images/gallery-gardens.jpeg",
    alt: "Robert Boyle designed gardens with mature trees",
    category: "Grounds",
  },
  {
    src: "/images/gallery-front.jpeg",
    alt: "Front garden with Japanese maple and double garage",
    category: "Exterior",
  },
  {
    src: "/images/gallery-valley.jpeg",
    alt: "Sweeping Tarwin Valley views from the property",
    category: "Views",
  },
  {
    src: "/images/hero.jpeg",
    alt: "Hero view of Springbank residence and grounds",
    category: "Exterior",
  },
  {
    src: "/images/aerial-grounds-from-road.jpeg",
    alt: "Aerial view of Springbank grounds and residence from O'Malleys Road",
    category: "Views",
  },
  {
    src: "/images/floorplan-all-levels.png",
    alt: "Floor plan showing upper and lower levels plus garage, carport and studio",
    category: "Plans",
  },
  {
    src: "/images/aerial-boundary-plan.jpg",
    alt: "Aerial boundary plan of the full 5-acre property",
    category: "Plans",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Exterior",
  "Interiors",
  "Grounds",
  "Views",
  "Plans",
];

export function getHomepageGalleryHighlights(max = 10): PropertyImage[] {
  return propertyImages.filter((image) => image.category !== "Plans").slice(0, max);
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
