"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "/images/gallery-dam-view.jpeg",
    alt: "Springbank from the dam with merbau deck, sweeping lawns and established gardens",
    category: "Grounds",
  },
  {
    src: "/images/gallery-entrance.jpeg",
    alt: "Grand Cherry Oak entrance with columns and valley views",
    category: "Interior",
  },
  {
    src: "/images/kitchen.jpeg",
    alt: "Renovated country kitchen with terracotta rangehood",
    category: "Kitchen",
  },
  {
    src: "/images/gallery-terrace.jpeg",
    alt: "Outdoor terrace with panoramic valley views",
    category: "Outdoor Living",
  },
  {
    src: "/images/gallery-olive-path.jpeg",
    alt: "Olive tree-lined pathway through the grounds",
    category: "Gardens",
  },
  {
    src: "/images/gallery-buildings.jpeg",
    alt: "Main residence and poured earth studio",
    category: "Exterior",
  },
  {
    src: "/images/gallery-gardens.jpeg",
    alt: "Robert Boyle designed gardens with mature trees",
    category: "Gardens",
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
];

const planImages = [
  {
    src: "/images/floorplan-all-levels.png",
    alt: "Floor plan showing upper floor with master bedroom, 2 additional bedrooms, office, living, dining and kitchen (184 sqm); lower floor with rumpus room, 2 bedrooms, bathroom and kitchenette (122 sqm); plus separate garage, carport and studio building (165 sqm)",
    category: "Floor Plan",
  },
  {
    src: "/images/aerial-boundary-plan.jpg",
    alt: "Aerial drone photograph of 30 O'Malleys Road Mardan showing the 5-acre property boundary outlined in white, with the main residence, studio, established gardens, dam, and surrounding farmland visible",
    category: "Boundary Plan",
  },
];

const allImages = [...galleryImages, ...planImages];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? allImages.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === allImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
            Visual Tour
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Property Gallery
          </h2>
          <div className="w-20 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the beauty and craftsmanship of Springbank through our
            curated gallery of images.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={cn(
                "relative overflow-hidden group cursor-pointer aspect-[4/3]",
                index === 0 && "md:col-span-2 md:row-span-2 md:aspect-square"
              )}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-primary-foreground text-sm font-medium">
                  {image.category}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Floor Plan & Boundary Section */}
        <div className="mt-16 space-y-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Floor Plan & Property Boundary
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              View the detailed floor plans showing the upper floor (184 sqm), lower level (122 sqm), 
              and studio with garage (165 sqm), plus the aerial boundary map of the full 5-acre property.
            </p>
          </div>
          
          {/* Floor Plan */}
          <div className="bg-card border border-border overflow-hidden">
            <div className="p-4 border-b border-border">
              <h4 className="font-serif text-lg text-foreground">
                Floor Plan - All Levels
              </h4>
              <p className="text-sm text-muted-foreground">
                Upper Floor (Ground), Lower Floor & Garage, Carport and Studio
              </p>
            </div>
            <button
              onClick={() => setSelectedImage(galleryImages.length)}
              className="w-full cursor-pointer group"
            >
              <img
                src="/images/floorplan-all-levels.png"
                alt="Floor plan showing upper floor with master bedroom, 2 additional bedrooms, office, living, dining and kitchen (184 sqm); lower floor with rumpus room, 2 bedrooms, bathroom and kitchenette (122 sqm); plus separate garage, carport and studio building (165 sqm)"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </button>
          </div>
          
          {/* Boundary Plan */}
          <div className="bg-card border border-border overflow-hidden">
            <div className="p-4 border-b border-border">
              <h4 className="font-serif text-lg text-foreground">
                Aerial Boundary Plan
              </h4>
              <p className="text-sm text-muted-foreground">
                Approximately 5 acres (2 hectares) with outlined property boundary
              </p>
            </div>
            <button
              onClick={() => setSelectedImage(galleryImages.length + 1)}
              className="w-full cursor-pointer group"
            >
              <img
                src="/images/aerial-boundary-plan.jpg"
                alt="Aerial drone photograph of 30 O'Malleys Road Mardan showing the 5-acre property boundary outlined in white, with the main residence, studio, established gardens, dam, and surrounding farmland visible"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <div
            className="max-w-5xl max-h-[80vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allImages[selectedImage].src || "/placeholder.svg"}
              alt={allImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-primary-foreground text-center mt-4">
              {allImages[selectedImage].alt}
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </div>
      )}
    </section>
  );
}
