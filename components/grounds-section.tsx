import { Grape, TreeDeciduous, Leaf, MapPin } from "lucide-react";

const groundsFeatures = [
  {
    icon: Grape,
    title: "Pinot Noir Vineyard",
    description:
      "A productive vineyard perfect for wine enthusiasts, adding character and purpose to the landscape.",
  },
  {
    icon: TreeDeciduous,
    title: "Orchard & Citrus Grove",
    description:
      "Espaliered apple trees, mature olive trees and a fragrant citrus grove provide seasonal harvests.",
  },
  {
    icon: Leaf,
    title: "Robert Boyle Gardens",
    description:
      "Originally designed by renowned landscape architect Robert Boyle and substantially enhanced and developed.",
  },
  {
    icon: MapPin,
    title: "530m Walking Track",
    description:
      "A rare private walking and running track encircles the property, meandering through shaded cypress sections.",
  },
];

export function GroundsSection() {
  return (
    <section id="grounds" className="py-20 md:py-28 bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent-foreground/70 text-sm tracking-[0.2em] uppercase mb-3">
            The Grounds
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-accent-foreground mb-6 text-balance">
            A Horticultural Masterpiece
          </h2>
          <div className="w-20 h-px bg-accent-foreground/30 mx-auto mb-6" />
          <p className="text-accent-foreground/80 max-w-3xl mx-auto text-pretty">
            The grounds are nothing short of spectacular. Originally designed by
            renowned landscape architect Robert Boyle, the gardens have been
            substantially enhanced to create a park-like sanctuary.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {groundsFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-6 p-6 bg-accent-foreground/5 border border-accent-foreground/10"
            >
              <div className="w-14 h-14 bg-accent-foreground/10 flex items-center justify-center shrink-0">
                <feature.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-accent-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-accent-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image with description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/aerial-grounds-from-road.jpeg"
                alt="Aerial view of Springbank property from O'Malleys Road showing white post-and-rail fencing, sweeping manicured lawns, dam with merbau deck, mature eucalypts and willows, and the Mediterranean-style residence nestled among established gardens"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-accent-foreground mb-6">
              Park-Like Serenity
            </h3>
            <p className="text-accent-foreground/80 leading-relaxed mb-6">
              A new merbau deck and steps overlook the dam, replacing the original
              structure. The park-like grounds include cleared and maintained
              forested areas where cypress tree canopies have been selectively
              opened to create light-filled walkways.
            </p>
            <p className="text-accent-foreground/80 leading-relaxed mb-6">
              The approximately 530-metre private walking and running track
              ranges from 1 metre to 5 metres wide and meanders through the
              grounds, including shaded sections beneath the cypress trees. This
              wellness feature is rarely found on comparable properties.
            </p>
            <div className="flex items-center gap-4 text-accent-foreground">
              <div className="w-12 h-px bg-accent-foreground/30" />
              <span className="font-serif italic">
                A rare lifestyle addition
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
