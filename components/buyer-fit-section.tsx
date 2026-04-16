import Link from "next/link";
import type { BuyerFitContent } from "@/lib/content-model";

type BuyerFitSectionProps = {
  content: BuyerFitContent;
};

export function BuyerFitSection({ content }: BuyerFitSectionProps) {
  return (
    <section id="buyer-fit" className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">{content.sectionEyebrow}</p>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            {content.sectionTitle}
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-primary" />
          <p className="mt-6 text-muted-foreground">
            {content.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-serif text-2xl text-foreground">Especially suited to</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {content.bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-serif text-2xl text-foreground">May suit less if</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {content.lessSuitableFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-serif text-2xl text-foreground">Things to keep in mind</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {content.realities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-8">
          <h3 className="font-serif text-2xl text-foreground">{content.continuationHeading}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {content.continuationBody}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {content.continuationLinks.map((link) => (
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
