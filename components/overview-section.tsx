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
            Tuscan-Inspired Mediterranean Living in South Gippsland
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
              30 O&apos;Malleys Rd, Mardan delivers a Tuscan-inspired Mediterranean
              residence on approximately 5 acres of prime South Gippsland soil.
              Known on site as Springbank, the property offers a rare combination
              of architectural character, rural privacy, and practical long-term
              liveability just 15 minutes from Leongatha, Mirboo North, and
              Meeniyan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The design story is not only visual. The upstairs main dwelling is
              fully double glazed and carefully oriented to work with passive
              solar principles, which materially improves comfort through both
              summer and winter. The home opens to sweeping, uninterrupted views
              across the rolling greens of the Tarwin Valley toward the Hoddle
              Range, but it also feels unusually composed and usable in everyday
              life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The poured-earth garage and studio building extends that thermal
              stability even further, with thick walls that help keep the space
              temperate on hot days and less harsh in winter. Add the Robert
              Boyle designed gardens, the entertaining outlook, and the regional
              access to South Gippsland&apos;s villages and coast, and the result
              is a property that lives as well as it looks.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="/images/springbank/highlights/springbank-mardan-south-gippsland-lifestyle-property-kitchen.jpg"
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
