"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  galleryCategories,
  getEmbedVideoUrl,
  getHomepageGalleryHighlights,
  propertyFilm,
} from "@/lib/gallery";

export function FullGallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const highlightImages = useMemo(() => getHomepageGalleryHighlights(10), []);

  const embeddedUrl = getEmbedVideoUrl(propertyFilm.youtubeUrl);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? highlightImages.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === highlightImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Visual Tour</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Property Gallery
          </h2>
          <div className="w-20 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated highlight from the full image library. Open the full gallery for complete
            interiors, exteriors, grounds, views, and plans.
          </p>
        </div>

        <div className="mb-10 overflow-hidden rounded-xl border border-border bg-card">
          <div className="grid gap-0 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="relative aspect-[16/10] w-full bg-black">
              {embeddedUrl ? (
                <iframe
                  src={embeddedUrl}
                  title={propertyFilm.title}
                  className="h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${propertyFilm.fallbackImage}')` }}
                />
              )}
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Featured Media</p>
              <h3 className="mt-3 font-serif text-2xl text-foreground md:text-3xl">
                {propertyFilm.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {propertyFilm.description}
              </p>
              {!embeddedUrl && (
                <p className="mt-4 rounded-md border border-border bg-secondary/40 px-3 py-2 text-xs text-muted-foreground">
                  YouTube link pending. This card is already wired and will display the video as
                  soon as the URL is added.
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/gallery">View full gallery</Link>
                </Button>
                <Button variant="outline" asChild className="bg-transparent">
                  <Link href="/open-home">View open home details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlightImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden group cursor-pointer aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-primary-foreground text-sm font-medium">{image.category}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-card p-6 md:p-8">
          <h3 className="font-serif text-2xl text-foreground">Open the complete gallery</h3>
          <p className="mt-3 text-muted-foreground">
            Browse all available images in one place with category filtering, full-size viewing, and
            room to expand as new property media is added.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link href="/gallery">View full gallery page</Link>
            </Button>
          </div>
        </div>
      </div>

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

          <div className="max-w-5xl max-h-[80vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={highlightImages[selectedImage].src}
              alt={highlightImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-primary-foreground text-center mt-4">
              {highlightImages[selectedImage].alt}
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
