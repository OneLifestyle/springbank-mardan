import { Bed, Bath, Car, Maximize, Trees, Zap } from "lucide-react";
import type { OverviewContent, PropertyStatItem } from "@/lib/content-model";

const statIcons: Record<string, typeof Bed> = {
  bedrooms: Bed,
  bathrooms: Bath,
  parking: Car,
  "land-size": Maximize,
  gardens: Trees,
  sustainability: Zap,
};

type OverviewSectionProps = {
  content: OverviewContent;
};

function getStatIcon(stat: PropertyStatItem) {
  return statIcons[stat.id] ?? Bed;
}

export function OverviewSection({ content }: OverviewSectionProps) {
  return (
    <section id="overview" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
            {content.sectionEyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            {content.sectionTitle}
          </h2>
          <div className="w-20 h-px bg-primary mx-auto" />
          {content.introNote ? (
            <p className="mt-6 max-w-3xl mx-auto text-muted-foreground">
              {content.introNote}
            </p>
          ) : null}
        </div>

        {/* Property Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {content.stats.map((feature) => {
            const Icon = getStatIcon(feature);

            return (
            <div
              key={feature.label}
              className="bg-card p-6 text-center border border-border hover:border-primary/30 transition-colors"
            >
              <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
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
            );
          })}
        </div>

        <div className="mb-10 rounded-xl border border-border bg-secondary/30 p-6 md:p-8">
          <h3 className="font-serif text-2xl text-foreground">{content.definitionHeading}</h3>
          {content.definitionParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {content.descriptionParagraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "text-lg text-foreground leading-relaxed mb-6" : "text-muted-foreground leading-relaxed mb-6 last:mb-0"}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-muted overflow-hidden">
              <img
                src={content.supportingImageSrc}
                alt={content.supportingImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 max-w-xs hidden md:block">
              <p className="font-serif text-lg italic">
                &quot;{content.quote}&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
