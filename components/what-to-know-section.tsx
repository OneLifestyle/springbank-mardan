import Link from "next/link";
import type { WhatToKnowContent } from "@/lib/content-model";

type WhatToKnowSectionProps = {
  content: WhatToKnowContent;
};

export function WhatToKnowSection({ content }: WhatToKnowSectionProps) {
  return (
    <section id="what-to-know" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">{content.sectionEyebrow}</p>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            {content.sectionTitle}
          </h2>
          <p className="mt-6 text-muted-foreground">
            {content.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {content.considerations.map((item) => (
            <article key={item.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-secondary/30 p-6 md:p-8">
          <h3 className="font-serif text-2xl text-foreground">{content.checksHeading}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {content.checksBody}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {content.checkLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
