import { MapPin, Clock, Mountain, ShoppingBag, Coffee } from "lucide-react";
import Link from "next/link";
import type { LocationSectionContent } from "@/lib/content-model";

const locationHighlightIcons: Record<string, typeof Clock> = {
  leongatha: Clock,
  "mirboo-north": Mountain,
  meeniyan: Coffee,
  privacy: ShoppingBag,
  "tarwin-views": MapPin,
};

type LocationSectionProps = {
  content: LocationSectionContent;
};

export function LocationSection({ content }: LocationSectionProps) {
  return (
    <section id="location" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
            {content.sectionEyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            {content.sectionTitle}
          </h2>
          <div className="w-20 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-pretty">{content.intro}</p>
        </div>

        {/* Location Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {content.highlights.map((item) => {
            const Icon = locationHighlightIcons[item.id] ?? MapPin;

            return (
              <div
                key={item.title}
                className="bg-card p-6 text-center border border-border"
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-16 rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-serif text-2xl text-foreground">{content.townExplorerTitle}</h3>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                {content.townExplorerBody}
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {content.additionalTownLinks.map((town) => (
              <Link
                key={town.href}
                href={town.href}
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {town.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-16 rounded-xl border border-border bg-card p-6 md:p-8">
          <h3 className="font-serif text-2xl text-foreground">{content.buyerReasonsHeading}</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {content.buyerReasons.map((reason) => (
              <article key={reason.title} className="rounded-xl border border-border bg-background p-5">
                <h4 className="font-serif text-xl text-foreground">{reason.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
                {reason.links?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {reason.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-primary underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        {/* Map Embed */}
        <div className="bg-card border border-border overflow-hidden">
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.8876546839655!2d146.0799!3d-38.4651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b295e0f5defa697%3A0xf4c7ccd2a20a6e9c!2sMardan%20VIC%203953!5e0!3m2!1sen!2sau!4v1706000000000!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing Mardan, VIC location"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl text-foreground mb-1">
                30 O'Malleys Rd, Mardan VIC 3953
              </h3>
              <p className="text-muted-foreground">
                South Gippsland, Victoria, Australia | Between Leongatha, Mirboo North and Meeniyan
              </p>
            </div>
            <a
              href="https://www.google.com/maps/dir//30+Omalleys+Rd,+Mardan+VIC+3953"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
