"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Open Home", href: "#open-home" },
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "The Grounds", href: "#grounds" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className={cn(
              "font-serif text-xl md:text-2xl transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
          >
            Springbank
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:opacity-80",
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0431639749"
              className={cn(
                "flex items-center gap-2 text-sm transition-colors",
                isScrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              <Phone className="w-4 h-4" />
              0431 639 749
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border">
              <a
                href="tel:0431639749"
                className="flex items-center gap-2 py-2 text-primary"
              >
                <Phone className="w-4 h-4" />
                0431 639 749
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
