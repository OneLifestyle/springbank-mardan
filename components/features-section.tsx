import {
  Sun,
  Thermometer,
  ChefHat,
  Home,
  Sparkles,
  Car,
} from "lucide-react";
import type { PropertyFeatureItem, PropertyPageContent } from "@/lib/content-model";

const featureIcons: Record<string, typeof Sun> = {
  "passive-solar": Sun,
  "stable-temperatures": Thermometer,
  kitchen: ChefHat,
  interiors: Home,
  "lower-level": Sparkles,
  studio: Car,
};

type FeaturesSectionProps = {
  content: PropertyPageContent["features"];
};

function getFeatureIcon(feature: PropertyFeatureItem) {
  return featureIcons[feature.id] ?? Sun;
}

export function FeaturesSection({ content }: FeaturesSectionProps) {

  return (
    <section id="features" className="py-20 md:py-28 bg-secondary">
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
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {content.intro}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.featureItems.map((feature) => {
            const Icon = getFeatureIcon(feature);

            return (
            <div
              key={feature.title}
              className="bg-card p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.answerPanels.map((panel) => (
            <article key={panel.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-2xl text-foreground">{panel.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{panel.body}</p>
            </article>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 bg-primary text-primary-foreground p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl mb-4">
            {content.retreatHeading}
          </h3>
          <p className="max-w-3xl mx-auto leading-relaxed">
            {content.retreatBody}
          </p>
        </div>
      </div>
    </section>
  );
}
