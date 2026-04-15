import {
  Sun,
  Thermometer,
  ChefHat,
  Home,
  Sparkles,
  Car,
} from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "Passive Solar Design",
    description:
      "The main dwelling is oriented for passive solar performance and supported by fully double glazed upstairs living areas, solar power, and split-system air conditioning for calmer year-round comfort.",
  },
  {
    icon: Thermometer,
    title: "Stable Year-Round Temperatures",
    description:
      "Solid fuel heating and a concealed wetback system support winter efficiency, while the poured-earth studio and garage building maintains a notably temperate feel through both summer heat and colder months.",
  },
  {
    icon: ChefHat,
    title: "Chef's Kitchen",
    description:
      "Substantially renovated with sleek polished timber benchtops, meticulous joinery including over 30 roll-out drawers, an oversized pantry, and a large island bench.",
  },
  {
    icon: Home,
    title: "Bespoke Interiors",
    description:
      "An imposing Cherry Oak entrance door opens to soaring high ceilings and striking Peppermint Gum flooring that anchors the living spaces with natural character.",
  },
  {
    icon: Sparkles,
    title: "Transformed Lower Level",
    description:
      "A beautifully appointed extension featuring a bedroom-sized guest room, spa bathroom, kitchenette facilities, and a large rumpus room opening to an alfresco deck for guest stays or multi-zone family living.",
  },
  {
    icon: Car,
    title: "Studio & EV Charging",
    description:
      "Architecturally striking poured-earth double garage plus 80+ sqm studio-style space, fully lined with kitchenette, toilet, and Tesla electric vehicle charging station, making it unusually useful well beyond storage alone.",
  },
];

export function FeaturesSection() {
  const answerPanels = [
    {
      title: "Comfort and performance",
      body: "The strongest practical difference at Springbank is not cosmetic. Double glazing, passive solar orientation, and the thermal mass of the poured-earth studio make the home feel calmer and more stable across seasons.",
    },
    {
      title: "Layout flexibility",
      body: "The split-level structure, lower-level kitchenette zone, and separate studio building create useful separation between everyday living, guest stays, and work or creative use.",
    },
    {
      title: "Lifestyle depth",
      body: "The property is not just residence plus land. The gardens, dam, deck, orchard-style plantings, and valley outlook turn the holding into a place that rewards longer stays rather than quick visits.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
            Property Features
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Sophisticated Living Spaces
          </h2>
          <div className="w-20 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every detail has been shaped to deliver sustainable comfort,
            architectural character, and the kind of lived usability that
            matters after the inspection ends.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {answerPanels.map((panel) => (
            <article key={panel.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-2xl text-foreground">{panel.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{panel.body}</p>
            </article>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 bg-primary text-primary-foreground p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl mb-4">
            Master Retreat
          </h3>
          <p className="max-w-3xl mx-auto leading-relaxed">
            The accommodation wing is designed as a private retreat. The master
            bedroom features a generous walk-in robe and semi-ensuite access to
            a bathroom with a screenless shower and extended vanity. The upper
            level also offers an additional room suitable as a study or third
            bedroom.
          </p>
        </div>
      </div>
    </section>
  );
}
