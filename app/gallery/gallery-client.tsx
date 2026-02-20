"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  galleryCategories,
  getEmbedVideoUrl,
  propertyFilm,
  propertyImages,
  type GalleryCategory,
} from "@/lib/gallery";

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "All">("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const embeddedUrl = getEmbedVideoUrl(propertyFilm.youtubeUrl);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return propertyImages;
    }
    return propertyImages.filter((image) => image.category === activeCategory);
  }, [activeCategory]);

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1);
  };

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#gallery"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to homepage gallery
        </Link>

        <header className="mt-8 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Full Gallery</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Springbank photo library
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Explore interiors, outdoor living zones, gardens, valley views, and floorplans in one
            place as you compare the full lifestyle offering at Springbank.
          </p>
        </header>

        <section className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
          <div className="grid gap-0 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="relative aspect-[16/9] w-full bg-black">
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
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Property Film
              </p>
              <h2 className="mt-3 font-serif text-2xl text-foreground">{propertyFilm.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {propertyFilm.description}
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/#gallery">Back to listing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-border bg-card p-6 md:p-8">
          <p className="text-sm text-muted-foreground">Filter by category</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("All")}
              className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                activeCategory === "All"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              All
            </button>
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                  activeCategory === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Showing {filteredImages.length} image{filteredImages.length === 1 ? "" : "s"}
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image, index) => (
            <button
              key={`${image.src}-${image.category}`}
              onClick={() => setSelectedIndex(index)}
              className="group overflow-hidden rounded-xl border border-border bg-card text-left"
            >
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {image.category}
                </p>
              </div>
            </button>
          ))}
        </section>
      </div>

      {selectedIndex !== null && filteredImages[selectedIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95"
          onClick={() => setSelectedIndex(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setSelectedIndex(null)}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="max-h-[80vh] max-w-6xl px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[selectedIndex].src}
              alt={filteredImages[selectedIndex].alt}
              className="max-h-[80vh] max-w-full object-contain"
            />
            <p className="mt-4 text-center text-primary-foreground">{filteredImages[selectedIndex].alt}</p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      )}
    </main>
  );
}
