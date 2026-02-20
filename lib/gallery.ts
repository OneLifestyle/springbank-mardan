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
  { seq: "001", alt: "Springbank landscape outlook across the grounds and dam", category: "Views" },
  { seq: "043", alt: "Springbank interior room with natural light and neutral finishes", category: "Interiors" },
  { seq: "007", alt: "Springbank gated entry and driveway approach", category: "Exterior" },
  { seq: "011", alt: "Springbank dam edge deck and rural outlook", category: "Views" },
  { seq: "015", alt: "Springbank pergola and courtyard transition space", category: "Exterior" },
  { seq: "020", alt: "Springbank established gardens and open lawn zone", category: "Grounds" },
  { seq: "049", alt: "Springbank interior living zone with warm materials and light", category: "Interiors" },
  { seq: "059", alt: "Springbank interior presentation image from latest campaign", category: "Interiors" },
  { seq: "041", alt: "Springbank outdoor entertaining edge with garden frontage", category: "Exterior" },
  { seq: "052", alt: "Springbank kitchen outlook toward Tarwin Valley landscape", category: "Interiors" },
] as const;

export const homepageHighlightImages: PropertyImage[] = homepageHighlightSelections.map((item) => ({
  src: `/images/springbank/gallery-full/springbank-mardan-south-gippsland-lifestyle-property-gallery-${item.seq}.jpg`,
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
