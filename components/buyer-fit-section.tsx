import Link from "next/link";

const bestFor = [
  "Permanent movers who want a private South Gippsland base with room to settle into everyday use.",
  "Premium weekender buyers who want more than a scenic retreat and need genuine long-stay functionality.",
  "Households that value separate activity zones, guest accommodation, and a useful studio building.",
];

const lessSuitableFor = [
  "Buyers chasing a low-maintenance compact holding or walk-to-town village convenience.",
  "Anyone wanting a beach-town address ahead of privacy, land, and regional flexibility.",
  "Owners who prefer a presentation-only lifestyle property rather than one that asks to be used and maintained.",
];

const realities = [
  "This is an inland South Gippsland holding, so the right comparison is acreage and long-stay liveability rather than immediate coastal access.",
  "The gardens, water, and grounds are part of the property's value, but they also require an owner who appreciates structured landscape maintenance.",
  "The split-level layout and separate studio create flexibility, but they matter most to buyers who will actively use guest space, work space, or multi-zone living.",
];

export function BuyerFitSection() {
  return (
    <section id="buyer-fit" className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">Buyer Fit</p>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            Who This Property Suits Best
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-primary" />
          <p className="mt-6 text-muted-foreground">
            30 O&apos;Malleys Rd, Mardan is strongest for buyers who want a genuine regional base
            rather than a purely scenic holding. Its value comes from how the residence, lower
            level, studio, and grounds work together over time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-serif text-2xl text-foreground">Best for</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-serif text-2xl text-foreground">Less suitable for</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {lessSuitableFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-serif text-2xl text-foreground">What that means in practice</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {realities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-8">
          <h3 className="font-serif text-2xl text-foreground">Continue the comparison</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            If you are still deciding between service-town practicality, village character, and a
            more private inland base, compare the nearby guides for{" "}
            <Link href="/leongatha" className="text-primary underline-offset-4 hover:underline">
              Leongatha
            </Link>
            ,{" "}
            <Link href="/meeniyan" className="text-primary underline-offset-4 hover:underline">
              Meeniyan
            </Link>
            , and{" "}
            <Link href="/mirboo-north" className="text-primary underline-offset-4 hover:underline">
              Mirboo North
            </Link>
            , then return to this listing with a clearer comparison frame.
          </p>
        </div>
      </div>
    </section>
  );
}
