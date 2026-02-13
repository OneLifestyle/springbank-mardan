import Link from "next/link";
import { CalendarDays, Clock3, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OpenHomePromoSection() {
  return (
    <section id="open-home" className="bg-secondary/30 py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-8 md:p-10">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Open Home</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Saturday 28 February 2026, 12pm to 1pm
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Inspect Springbank in person at 30 O&apos;Malleys Rd, Mardan VIC 3953. View the
            Mediterranean-inspired residence, Robert Boyle designed gardens, and sweeping Tarwin
            Valley outlook.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <CalendarDays className="h-4 w-4 text-primary" />
              Saturday 28 February 2026
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Clock3 className="h-4 w-4 text-primary" />
              12:00pm to 1:00pm
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              30 O&apos;Malleys Rd, Mardan VIC 3953
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/open-home">View open home details</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <a href="tel:0431639749">Call Dean Jones: 0431 639 749</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <a
                href="https://www.facebook.com/events/25736775532617953"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                Facebook Event
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
