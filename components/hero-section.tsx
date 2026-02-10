"use client";

import { ChevronDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/images/hero.jpeg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-primary-foreground/80 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-sans">
          30 O'Malleys Rd, Mardan VIC 3953 | South Gippsland
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight text-balance">
          Springbank
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl lg:text-2xl font-serif italic mb-8 max-w-3xl mx-auto text-pretty">
          A Master-Built Mediterranean Inspired Sanctuary Overlooking the Tarwin Valley
        </p>
        <p className="text-primary-foreground text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-3">
          $1.5m
        </p>
        <a
          href="/documents/statement-of-information-30-omalleys-road-mardan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 inline-flex items-center gap-2 text-primary-foreground/90 transition-colors hover:text-primary-foreground"
        >
          <FileText className="h-5 w-5" />
          <span className="text-xl md:text-2xl font-semibold">Price guide details</span>
        </a>

        {/* Property Stats */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 text-primary-foreground">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-sm md:text-base">~5 Acres</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <span className="text-sm md:text-base">5 Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            <span className="text-sm md:text-base">2 Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="text-sm md:text-base">Split Level home with 2 Living Areas (and Single Garage). Double Garage, Carport + Studio.</span>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-sans tracking-wide"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Enquire Now
        </Button>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document
            .getElementById("overview")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-bounce"
        aria-label="Scroll to overview"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
