export type BlogImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  image?: BlogImage;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  categories: string[];
  tags: string[];
  heroImage: BlogImage;
  intro: string[];
  sections: BlogSection[];
  featureListTitle: string;
  featureList: string[];
  galleryTitle: string;
  gallery: BlogImage[];
  ctaTitle: string;
  ctaBody: string;
};

const posts: BlogPost[] = [
  {
    slug: "escape-to-springbank-master-built-mediterranean-sanctuary",
    title:
      "Escape to Springbank: A Master-Built Mediterranean Sanctuary in the Tarwin Valley",
    excerpt:
      "Set on approximately 5 acres at 30 O'Malleys Rd, Mardan, Springbank combines Mediterranean-inspired architecture, sustainable design, and established Robert Boyle gardens in one cohesive South Gippsland lifestyle holding.",
    publishedAt: "2026-02-20",
    updatedAt: "2026-02-20",
    readingTimeMinutes: 8,
    categories: ["Property Spotlight", "Lifestyle Property", "South Gippsland"],
    tags: [
      "Springbank Mardan",
      "Mardan property for sale",
      "South Gippsland real estate",
      "Lifestyle property Victoria",
      "Tree change Victoria",
      "Tarwin Valley",
    ],
    heroImage: {
      src: "/images/gallery-dam-view.jpeg",
      alt: "Springbank residence and grounds overlooking the dam and Tarwin Valley setting",
      caption:
        "Springbank at 30 O'Malleys Rd, Mardan: a master-built Mediterranean sanctuary on approximately 5 acres.",
    },
    intro: [
      "In a regional marketplace often characterised by traditional homesteads, Springbank presents a distinctive architectural response to its landscape.",
      "Set on approximately 5 acres at 30 O'Malleys Rd, Mardan, this master-built Mediterranean-inspired residence combines craftsmanship, sustainability, and horticultural design in a cohesive lifestyle holding overlooking the Tarwin Valley toward the Hoddle Range.",
    ],
    sections: [
      {
        heading: "A vision aligned with landscape",
        paragraphs: [
          "From first arrival, the home's orientation and presence are immediately apparent. Designed and constructed by a master builder with a clear focus on environmental harmony, the residence embraces uninterrupted rural outlooks that shift with the light and the seasons.",
          "A bespoke Cherry Oak entrance door introduces interiors defined by soaring ceilings and rare Peppermint Gum flooring, establishing warmth and volume throughout the primary living zones.",
          "Passive solar principles are integrated into the design, supported by double glazed windows, solar power, split system air conditioning, and solid fuel heating with a concealed wetback system. The result is year-round comfort aligned with sustainable intent.",
        ],
        image: {
          src: "/images/gallery-entrance.jpeg",
          alt: "Cherry Oak entrance and Mediterranean-inspired facade at Springbank",
          caption:
            "A bespoke entrance and careful orientation set the tone for the home.",
        },
      },
      {
        heading: "Refined living spaces",
        paragraphs: [
          "At the centre of the home, the kitchen anchors daily life and entertaining. Polished timber benchtops complement quality cabinetry and extensive joinery, including over 30 roll-out drawers, an oversized pantry, and a generous island bench.",
          "Living areas flow seamlessly from this core, maintaining connection to outlook and light while offering practical space for family life and guests.",
          "The upper level functions as a private retreat, incorporating the main bedroom with walk-in robe and semi-ensuite access, along with additional flexible rooms suited to bedrooms, guest accommodation, or home office use.",
        ],
        image: {
          src: "/images/kitchen.jpeg",
          alt: "Renovated kitchen at Springbank with timber benchtops and large island",
          caption:
            "The central kitchen is designed for everyday function and larger-scale entertaining.",
        },
      },
      {
        heading: "A fully integrated lower level",
        paragraphs: [
          "Below, the expansive lower level operates as a genuine extension of the residence rather than secondary space. It incorporates an additional bedroom, a second bathroom with spa bath, and a large multipurpose living zone with kitchenette facilities.",
          "Opening to a covered alfresco merbau deck, this level enhances both flexibility and connection to the surrounding gardens.",
        ],
      },
      {
        heading: "Studio and ancillary building",
        paragraphs: [
          "Adjacent to the residence stands an architecturally striking poured earth building incorporating a double garage and an impressive studio space of approximately 80 sqm.",
          "Fully lined and finished with kitchenette facilities, a separate toilet and vanity area, quality lighting, and electric vehicle charging capability, this ancillary structure offers exceptional versatility for creative, professional, or recreational use while remaining complementary to the main residence.",
        ],
        image: {
          src: "/images/gallery-buildings.jpeg",
          alt: "Main residence with poured earth studio and garages at Springbank",
          caption:
            "The ancillary building expands function without compromising design cohesion.",
        },
      },
      {
        heading: "Landscape and grounds",
        paragraphs: [
          "Originally designed by renowned landscape architect Robert Boyle and carefully evolved over time, the grounds unfold as a series of structured garden spaces framed by established plantings.",
          "Features include a Pinot Noir vineyard, citrus grove, espaliered apple trees, mature olive plantings, and a dam overlooked by a merbau deck.",
          "A rare lifestyle feature is the approximately 530-metre private walking and running track that encircles the property, meandering through open lawns and shaded cypress sections.",
        ],
        image: {
          src: "/images/gallery-gardens.jpeg",
          alt: "Established Robert Boyle designed gardens and lawns at Springbank",
          caption:
            "The landscape design is a core part of Springbank's lifestyle offering.",
        },
      },
      {
        heading: "Location",
        paragraphs: [
          "Mardan is positioned centrally between Leongatha, Meeniyan, and Mirboo North, approximately fifteen minutes from each township.",
          "Here, rural outlook and privacy combine with everyday convenience, creating a practical base for buyers seeking South Gippsland lifestyle property with long-term liveability.",
        ],
      },
    ],
    featureListTitle: "What to expect at Springbank",
    featureList: [
      "Master-built residence situated on approximately 5 acres of prime soil",
      "Rare Peppermint Gum flooring and soaring high ceilings",
      "Renovated kitchen with polished timber benchtops and large island",
      "Substantially upgraded lower level with spa bathroom and kitchenette",
      "Separate studio-style space with EV charging",
      "Passive solar design with double glazing, solar power, wood heater, and split system air conditioning",
      "Robert Boyle designed gardens featuring vineyard and orchard plantings",
      "Private 530-metre walking and running track encircling the grounds",
    ],
    galleryTitle: "Springbank image gallery",
    gallery: [
      {
        src: "/images/gallery-dam-view.jpeg",
        alt: "Springbank with dam and deck in foreground",
      },
      {
        src: "/images/gallery-terrace.jpeg",
        alt: "Outdoor terrace with valley views at Springbank",
      },
      {
        src: "/images/gallery-olive-path.jpeg",
        alt: "Olive-lined pathway through Springbank grounds",
      },
      {
        src: "/images/gallery-valley.jpeg",
        alt: "Tarwin Valley views from Springbank",
      },
    ],
    ctaTitle: "Arrange your private inspection",
    ctaBody:
      "For further information or to arrange a private inspection, contact Dean Jones at One Lifestyle Real Estate on 0431 639 749 or email dean@onelifestyle.com.au.",
  },
];

export function toFacetSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAllBlogPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(posts.flatMap((post) => post.categories))).sort();
}

export function getAllTags(): string[] {
  return Array.from(new Set(posts.flatMap((post) => post.tags))).sort();
}

export function filterPostsByFacets(
  categorySlug?: string,
  tagSlug?: string
): BlogPost[] {
  const normalizedCategory = categorySlug?.trim().toLowerCase();
  const normalizedTag = tagSlug?.trim().toLowerCase();

  return getAllBlogPosts().filter((post) => {
    const categoryMatch =
      !normalizedCategory ||
      post.categories.some((category) => toFacetSlug(category) === normalizedCategory);
    const tagMatch =
      !normalizedTag || post.tags.some((tag) => toFacetSlug(tag) === normalizedTag);
    return categoryMatch && tagMatch;
  });
}
