import { Bed, Bath, Car, Maximize, Trees, Zap } from "lucide-react";

const features = [
  {
    icon: Bed,
    label: "Bedrooms",
    value: "5",
    description: "Flexible accommodation",
  },
  {
    icon: Bath,
    label: "Bathrooms",
    value: "2",
    description: "Including spa bath",
  },
  {
    icon: Car,
    label: "Parking",
    value: "4+",
    description: "Double garage, Single garage & Carport",
  },
  {
    icon: Maximize,
    label: "Land Size",
    value: "~5",
    unit: "acres",
    description: "Prime South Gippsland",
  },
  {
    icon: Trees,
    label: "Gardens",
    value: "Robert Boyle",
    description: "Landscape designed",
  },
  {
    icon: Zap,
    label: "Sustainability",
    value: "Solar + EV",
    description: "Eco-friendly living",
  },
];

export function OverviewSection() {
  return (
    <section id="overview" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
            Property Overview
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            A Striking Testament to Architectural Vision
          </h2>
          <div className="w-20 h-px bg-primary mx-auto" />
        </div>

        {/* Property Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="bg-card p-6 text-center border border-border hover:border-primary/30 transition-colors"
            >
              <feature.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl md:text-3xl font-serif text-foreground mb-1">
                {feature.value}
                {feature.unit && (
                  <span className="text-lg ml-1">{feature.unit}</span>
                )}
              </div>
              <p className="text-sm text-foreground font-medium mb-1">
                {feature.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              In a marketplace often dominated by traditional colonial
              homesteads, &apos;Springbank&apos; stands as a striking testament
              to architectural vision, sustainable living, and
              Mediterranean-inspired elegance. Situated on approximately 5 acres
              of prime South Gippsland soil in the quiet hamlet of Mardan, this
              exceptional lifestyle property offers a retreat of profound
              tranquillity and self-sufficiency, just 15 minutes from Leongatha,
              Mirboo North and Meeniyan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For those seeking the ultimate tree change or sea change in
              Gippsland, the aesthetic distinction is immediate. The residence
              was designed and constructed by a master builder who prioritised
              environmental harmony and visual impact. The home is perfectly
              oriented to embrace sweeping, uninterrupted views across the
              rolling greens of the Tarwin Valley toward the distant, majestic
              Hoddle Range.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Centrally located between Leongatha, Mirboo North, and Meeniyan,
              Springbank offers the rare combination of absolute rural privacy
              with easy access to South Gippsland&apos;s vibrant townships,
              artisan food scene, and proximity to the renowned Wilsons
              Promontory National Park.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="/images/kitchen.jpeg"
                alt="Renovated country kitchen with terracotta rangehood and valley views"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 max-w-xs hidden md:block">
              <p className="font-serif text-lg italic">
                &quot;The ultimate tree change combining high-end craftsmanship
                with the raw beauty of the Australian landscape.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
