import Link from "next/link";

const considerations = [
  {
    title: "Think of it as a regional base, not a town property",
    body: "Mardan works because it gives you privacy and usable land while keeping Leongatha, Meeniyan, and Mirboo North within practical reach. The comparison set is larger lifestyle holdings, not walk-to-cafe village homes.",
  },
  {
    title: "The grounds are part of the value proposition",
    body: "The Robert Boyle designed gardens, dam, orchard elements, and structured planting are major strengths, but they suit an owner who values landscape as an active part of everyday life rather than just a backdrop.",
  },
  {
    title: "Layout flexibility is one of the real commercial differentiators",
    body: "The lower-level guest zone and poured-earth studio matter because they give the property more than one way to be lived in. Buyers who need separated accommodation, work space, or guest overflow will feel this value immediately on inspection.",
  },
];

export function WhatToKnowSection() {
  return (
    <section id="what-to-know" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">What to Know</p>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            What to Know Before Buying
          </h2>
          <p className="mt-6 text-muted-foreground">
            The right buyer will see this as a long-term South Gippsland holding with strong daily
            usability. The important judgement is not whether the property is attractive; it is
            whether its layout, land, and location match the way you actually want to live.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {considerations.map((item) => (
            <article key={item.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-secondary/30 p-6 md:p-8">
          <h3 className="font-serif text-2xl text-foreground">Useful next checks</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Before inspecting, it is worth reviewing the{" "}
            <Link href="/open-home" className="text-primary underline-offset-4 hover:underline">
              open-home details
            </Link>
            , the full{" "}
            <Link href="/gallery" className="text-primary underline-offset-4 hover:underline">
              property gallery
            </Link>
            , and at least one buyer guide such as{" "}
            <Link
              href="/blog/buying-acreage-in-rural-victoria-a-practical-checklist-for-lifestyle-property-buyers"
              className="text-primary underline-offset-4 hover:underline"
            >
              Buying Acreage in Rural Victoria
            </Link>
            . That gives you a better frame for what to validate in person.
          </p>
        </div>
      </div>
    </section>
  );
}
