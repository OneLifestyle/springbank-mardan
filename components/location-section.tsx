import { MapPin, Clock, Mountain, ShoppingBag, Coffee } from "lucide-react";
import Link from "next/link";

const locationHighlights = [
  {
    icon: Clock,
    title: "15 min to Leongatha",
    description: "South Gippsland's primary service hub with supermarkets, schools, medical, and rail access to Melbourne",
  },
  {
    icon: Mountain,
    title: "15 min to Mirboo North",
    description: "Award-winning hilltop village with boutique cafes, breweries, and a thriving creative community",
  },
  {
    icon: Coffee,
    title: "15 min to Meeniyan",
    description: "Renowned artisan food village with gourmet producers, galleries, and the famous Meeniyan Garlic Festival",
  },
  {
    icon: ShoppingBag,
    title: "Absolute Privacy",
    description: "Secluded rural setting on a quiet country road while remaining minutes from three townships",
  },
  {
    icon: MapPin,
    title: "Tarwin Valley Views",
    description: "Sweeping panoramic vistas across the rolling valley to the majestic Hoddle Range",
  },
];

export function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
            Location
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            The Heart of South Gippsland
          </h2>
          <div className="w-20 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-pretty">
            Mardan is perfectly positioned at the centre of a triangle formed by
            three of{" "}
            <Link
              href="/south-gippsland"
              className="text-foreground underline hover:text-primary transition-colors"
            >
              South Gippsland&apos;s
            </Link>{" "}
            most desirable townships: the major service hub of{" "}
            <Link
              href="/leongatha"
              className="text-foreground underline hover:text-primary transition-colors"
            >
              Leongatha
            </Link>
            , the charming hilltop village of{" "}
            <Link
              href="/mirboo-north"
              className="text-foreground underline hover:text-primary transition-colors"
            >
              Mirboo North
            </Link>
            , and the artisan food destination of{" "}
            <Link
              href="/meeniyan"
              className="text-foreground underline hover:text-primary transition-colors"
            >
              Meeniyan
            </Link>
            . Each is just fifteen minutes away, giving you absolute rural
            privacy with effortless access to everything the region offers. For
            tree changers and sea changers drawn to the{" "}
            <Link
              href="/south-gippsland"
              className="text-foreground underline hover:text-primary transition-colors"
            >
              South Gippsland region
            </Link>
            , whether through visits to{" "}
            <Link
              href="/wilsons-promontory"
              className="text-foreground underline hover:text-primary transition-colors"
            >
              Wilsons Promontory
            </Link>
            , childhood memories, or simply the pull of a slower pace of life,
            this is an unbeatable location.
          </p>
        </div>

        {/* Location Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {locationHighlights.map((item) => (
            <div
              key={item.title}
              className="bg-card p-6 text-center border border-border"
            >
              <item.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
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
