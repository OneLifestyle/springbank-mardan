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

const importedListingImageMetadata: Array<{
  seq: string;
  alt: string;
  category: GalleryCategory;
}> = [
  { seq: "001", alt: "Elevated view across grounds, dam, and tree-lined valley surrounds", category: "Views" },
  { seq: "002", alt: "Main residence overlooking dam and lawns from lower grounds", category: "Exterior" },
  { seq: "003", alt: "Poured earth garage and studio beside the main residence", category: "Exterior" },
  { seq: "004", alt: "Home office nook with desk and monitors", category: "Interiors" },
  { seq: "005", alt: "Tree-lined walking track beside post-and-rail fence", category: "Grounds" },
  { seq: "006", alt: "Side pergola and garden edge along residence", category: "Exterior" },
  { seq: "007", alt: "White post-and-rail entrance gates at property driveway", category: "Exterior" },
  { seq: "008", alt: "Cypress-lined lawn corridor across open grounds", category: "Grounds" },
  {
    seq: "009",
    alt: "Poured earth garage and studio, with gravel driveway to the lower level of the main residence on the right",
    category: "Exterior",
  },
  { seq: "010", alt: "Open lawns and drainage line with mature trees", category: "Exterior" },
  { seq: "011", alt: "Merbau deck on dam edge with rural horizon", category: "Views" },
  { seq: "012", alt: "Shaded grove and open grass near the homestead", category: "Grounds" },
  { seq: "013", alt: "Dam edge and sloping lawns toward mature hedges", category: "Grounds" },
  { seq: "014", alt: "Hedge tunnel walkway through formal garden structure", category: "Grounds" },
  { seq: "015", alt: "Pergola courtyard beside residence exterior wall", category: "Exterior" },
  { seq: "016", alt: "Orchard-style walking track and lawn around the home", category: "Grounds" },
  { seq: "017", alt: "Two-story main residence and outbuilding", category: "Exterior" },
  { seq: "018", alt: "Spa bathroom with corner bath and vanity", category: "Interiors" },
  { seq: "019", alt: "Tree-lined drive and lawn frontage near buildings", category: "Grounds" },
  { seq: "020", alt: "Circular garden bed and clipped hedge feature", category: "Grounds" },
  { seq: "021", alt: "Tree canopy walking track through lower paddock area", category: "Grounds" },
  { seq: "022", alt: "White boundary fencing beneath mature eucalypts", category: "Exterior" },
  { seq: "023", alt: "Open paddock and tree line beside boundary track", category: "Grounds" },
  { seq: "024", alt: "Olive trees and walking track near residence", category: "Grounds" },
  {
    seq: "025",
    alt: "Walk-in robe and dressing passage connecting to a toilet/vanity and the semi-ensuite family bathroom",
    category: "Interiors",
  },
  { seq: "026", alt: "Double garage interior with vehicle and storage space", category: "Exterior" },
  { seq: "027", alt: "Bedroom with large picture window and garden outlook", category: "Interiors" },
  { seq: "028", alt: "Open lawn area with scattered shade trees", category: "Grounds" },
  { seq: "029", alt: "Bedroom and adjoining retreat on the downstairs level", category: "Interiors" },
  { seq: "030", alt: "Internal stair hall and passage to lower rooms", category: "Interiors" },
  { seq: "031", alt: "Studio living zone with kitchenette and lounge area", category: "Interiors" },
  { seq: "032", alt: "Multipurpose studio room with kitchenette wall", category: "Interiors" },
  { seq: "033", alt: "Dining nook with kitchenette and garden-facing window", category: "Interiors" },
  { seq: "034", alt: "Spacious bedroom with corner windows and seating nook", category: "Interiors" },
  { seq: "035", alt: "Compact studio kitchenette and breakfast bench", category: "Interiors" },
  { seq: "036", alt: "Kitchen sink window framing terrace and valley view", category: "Interiors" },
  { seq: "037", alt: "Large bedroom suite with seating and soft natural light", category: "Interiors" },
  { seq: "038", alt: "Covered alfresco deck with valley outlook beyond", category: "Exterior" },
  { seq: "039", alt: "Guest bedroom with chandelier and garden window", category: "Interiors" },
  { seq: "040", alt: "Walk-in pantry with open shelving and timber floor", category: "Interiors" },
  { seq: "041", alt: "Covered outdoor edge overlooking driveway and lawn", category: "Exterior" },
  { seq: "042", alt: "Expansive studio space near the double garage for flexible use", category: "Interiors" },
  { seq: "043", alt: "Stone-topped vanity and basin in powder area", category: "Interiors" },
  { seq: "044", alt: "Studio kitchenette and utility zone beside main open area", category: "Interiors" },
  { seq: "045", alt: "Residence exterior through trees along gravel drive", category: "Exterior" },
  { seq: "046", alt: "Studio family-sized room with dining table and storage", category: "Interiors" },
  { seq: "047", alt: "Open-plan studio room with kitchenette and dining setup", category: "Interiors" },
  { seq: "048", alt: "Main kitchen and dining area with terracotta rangehood", category: "Interiors" },
  { seq: "049", alt: "Open-plan kitchen and dining with timber floors", category: "Interiors" },
  {
    seq: "050",
    alt: "Living room with fireplace, TV wall, and rare Peppermint Gum timber floors",
    category: "Interiors",
  },
  { seq: "051", alt: "Open-plan interior linking lounge, dining, and kitchen", category: "Interiors" },
  { seq: "052", alt: "Kitchen benches and sink with wide valley outlook", category: "Interiors" },
  { seq: "053", alt: "Terrace viewed through window toward surrounding gardens", category: "Exterior" },
  { seq: "054", alt: "Main kitchen with island bench and timber benchtops", category: "Interiors" },
  { seq: "055", alt: "Feature entry corridor with custom front doors and vista", category: "Interiors" },
  { seq: "056", alt: "Lounge area with fireplace and long-range outlook", category: "Interiors" },
  { seq: "057", alt: "Terrace seating and lawn steps toward valley views", category: "Views" },
  { seq: "058", alt: "Bedroom with feature wall and built-in storage", category: "Interiors" },
  { seq: "059", alt: "Sunset exterior of residence and curved driveway", category: "Exterior" },
  { seq: "060", alt: "Dusk frontage of home and studio buildings", category: "Exterior" },
  { seq: "061", alt: "Decorative mural niche detail within hallway", category: "Interiors" },
  { seq: "062", alt: "Main bathroom with vanity, shower, and accessibility rail", category: "Interiors" },
];

const importedListingImages: PropertyImage[] = importedListingImageMetadata.map((image) => ({
  src: `/images/springbank/gallery-full/springbank-mardan-south-gippsland-lifestyle-property-gallery-${image.seq}.jpg`,
  alt: image.alt,
  category: image.category,
}));

const importedListingPlans: PropertyImage[] = [
  {
    src: "/images/springbank/plans/springbank-mardan-south-gippsland-property-listing-floorplan-01.png",
    alt: "Springbank floor plan showing upper and lower residence layout",
    category: "Plans",
  },
  {
    src: "/images/springbank/plans/springbank-mardan-south-gippsland-property-listing-floorplan-02.jpg",
    alt: "Springbank aerial boundary plan showing the full 5-acre holding",
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
