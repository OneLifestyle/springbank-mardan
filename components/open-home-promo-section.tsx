import Link from "next/link";
import { CalendarDays, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OpenHomePromoSection() {
  return (
    <section id="open-home" className="bg-secondary/30 py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-8 md:p-10">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Open Home</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            No open homes are currently planned
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            There are no scheduled open homes for 30 O&apos;Malleys Rd, Mardan VIC 3953 at this time.
            This section will be updated when a new inspection window is planned.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <CalendarDays className="h-4 w-4 text-primary" />
              No inspection date currently scheduled
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              30 O&apos;Malleys Rd, Mardan VIC 3953
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/open-home">View open home updates</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <a href="tel:0431639749" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Dean Jones: 0431 639 749
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
