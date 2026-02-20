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
  title: "Springbank Feature Video",
  description:
    "A guided video walkthrough of the residence, gardens, and Tarwin Valley setting.",
  youtubeUrl: "https://youtu.be/rFPWAy40BEg",
  fallbackImage:
    "/images/springbank/gallery-full/springbank-mardan-south-gippsland-lifestyle-property-gallery-001.jpg",
};

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

export const propertyImages: PropertyImage[] = [...importedListingImages, ...importedListingPlans];

const homepageHighlightSelections = [
  {
    file: "springbank-mardan-homepage-highlight-01.jpg",
    alt: "Elevated view across Springbank grounds with dam and mature trees",
    category: "Views",
  },
  {
    file: "springbank-mardan-homepage-highlight-02.jpg",
    alt: "Kitchen sink window framing Springbank gardens and valley outlook",
    category: "Interiors",
  },
  {
    file: "springbank-mardan-homepage-highlight-03.jpg",
    alt: "White post-and-rail gate entry at 30 O'Malleys Road",
    category: "Exterior",
  },
  {
    file: "springbank-mardan-homepage-highlight-04.jpg",
    alt: "Merbau deck beside the dam with open rural outlook",
    category: "Views",
  },
  {
    file: "springbank-mardan-homepage-highlight-05.jpg",
    alt: "Pergola walkway linking courtyard and residence exterior",
    category: "Exterior",
  },
  {
    file: "springbank-mardan-homepage-highlight-06.jpg",
    alt: "Established garden feature and lawns within the grounds",
    category: "Grounds",
  },
  {
    file: "springbank-mardan-homepage-highlight-07.jpg",
    alt: "Open-plan kitchen and dining zone with timber finishes",
    category: "Interiors",
  },
  {
    file: "springbank-mardan-homepage-highlight-08.jpg",
    alt: "Sunset exterior of the residence and driveway approach",
    category: "Exterior",
  },
  {
    file: "springbank-mardan-homepage-highlight-09.jpg",
    alt: "Covered outdoor edge overlooking driveway and lawn area",
    category: "Exterior",
  },
  {
    file: "springbank-mardan-homepage-highlight-10.jpg",
    alt: "Kitchen bench and sink with wide window to valley views",
    category: "Interiors",
  },
] as const;

export const homepageHighlightImages: PropertyImage[] = homepageHighlightSelections.map((item) => ({
  src: `/images/springbank/highlights/${item.file}`,
  alt: item.alt,
  category: item.category,
}));

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
