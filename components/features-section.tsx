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
      "The home employs passive solar design principles supported by double glazed windows, a solar power system, and split system air conditioning for year-round comfort.",
  },
  {
    icon: Thermometer,
    title: "Efficient Heating",
    description:
      "Solid fuel heating provides a cosy ambiance during cooler months while incorporating a concealed wetback system for high-efficiency hot water generation.",
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
      "A beautifully appointed extension featuring a bedroom-sized guest room, stunning spa bathroom, kitchenette facilities, and large rumpus room opening to an alfresco deck.",
  },
  {
    icon: Car,
    title: "Studio & EV Charging",
    description:
      "Architecturally striking poured earth double garage plus 80+ sqm studio-style space, fully lined with kitchenette, toilet, and Tesla electric vehicle charging station.",
  },
];

export function FeaturesSection() {
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
            Every detail of Springbank has been thoughtfully designed to provide
            sustainable comfort without compromising on luxury or style.
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
