import { Grape, TreeDeciduous, Leaf, MapPin } from "lucide-react";
import type { GroundsContent, PropertyFeatureItem } from "@/lib/content-model";

const groundsIcons: Record<string, typeof Grape> = {
  vineyard: Grape,
  orchard: TreeDeciduous,
  gardens: Leaf,
  "walking-track": MapPin,
};

type GroundsSectionProps = {
  content: GroundsContent;
};

function getGroundsIcon(feature: PropertyFeatureItem) {
  return groundsIcons[feature.id] ?? Grape;
}

export function GroundsSection({ content }: GroundsSectionProps) {
  return (
    <section id="grounds" className="py-20 md:py-28 bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent-foreground/70 text-sm tracking-[0.2em] uppercase mb-3">
            {content.sectionEyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-accent-foreground mb-6 text-balance">
            {content.sectionTitle}
          </h2>
          <div className="w-20 h-px bg-accent-foreground/30 mx-auto mb-6" />
          <p className="text-accent-foreground/80 max-w-3xl mx-auto text-pretty">{content.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {content.featureItems.map((feature) => {
            const Icon = getGroundsIcon(feature);

            return (
              <div
                key={feature.title}
                className="flex gap-6 p-6 bg-accent-foreground/5 border border-accent-foreground/10"
              >
                <div className="w-14 h-14 bg-accent-foreground/10 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-accent-foreground mb-2">{feature.title}</h3>
                  <p className="text-accent-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={content.showcaseImageSrc}
                alt={content.showcaseImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-accent-foreground mb-6">
              {content.showcaseHeading}
            </h3>
            {content.showcaseParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-accent-foreground/80 leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
            <div className="mt-6 flex items-center gap-4 text-accent-foreground">
              <div className="w-12 h-px bg-accent-foreground/30" />
              <span className="font-serif italic">{content.kicker}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
