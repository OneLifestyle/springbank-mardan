import Link from "next/link";
import { getFaqPageJsonLd } from "@/lib/site-schema";

const propertyFaqs = [
  {
    question: "Is there a lifestyle property with views for sale in South Gippsland?",
    answer:
      "Yes. Springbank at 30 O'Malleys Road, Mardan is a South Gippsland lifestyle property with sweeping Tarwin Valley views, approximately 5 acres, established gardens, a dam and a Tuscan-inspired Mediterranean residence.",
  },
  {
    question: "Where is 30 O'Malleys Road, Mardan located?",
    answer:
      "Springbank is in Mardan, a rural locality in South Gippsland near Leongatha, Meeniyan and Mirboo North. The setting gives buyers privacy while keeping key towns within practical driving reach.",
  },
  {
    question: "Who is this Mardan acreage property likely to suit?",
    answer:
      "It is likely to suit buyers seeking a private regional base, tree-change property, guest-friendly acreage home or premium long-stay weekender. It is less suited to buyers who want a low-maintenance town block.",
  },
  {
    question: "Does the property have separate guest, work or studio space?",
    answer:
      "Yes. The property includes a flexible lower level and a separate poured-earth studio and garage building. These spaces can support guest stays, working from home, creative use or more separated family living.",
  },
  {
    question: "Is Springbank suitable for year-round living?",
    answer:
      "The home has several features that support year-round comfort, including fully double glazed upstairs living areas, passive solar orientation, split-system air conditioning and the stable thermal feel of the poured-earth studio.",
  },
  {
    question: "How much land is included?",
    answer:
      "The property is described as approximately 5 acres. Buyers should review the contract, title and statement of information for confirmed land details before making a decision.",
  },
  {
    question: "What is the current price guide?",
    answer:
      "The current marketing price guide is $1.195m. The statement of information is available from the price guide link near the top of the listing page.",
  },
  {
    question: "When is the next open home?",
    answer:
      "The next scheduled open home is Saturday 23 May 2026 from 1:00pm to 2:00pm. Buyers can also contact Dean Jones to confirm inspection options.",
  },
  {
    question: "Who is the agent for Springbank Mardan?",
    answer:
      "Dean Jones of One Lifestyle Real Estate is the listed agent. Buyers can call 0431 639 749 or email dean@onelifestyle.com.au to discuss current availability and inspection options.",
  },
];

export function PropertyFaqSection() {
  const faqJsonLd = getFaqPageJsonLd(propertyFaqs, "https://springbankmardan.com/#faq");

  return (
    <section id="faq" className="bg-secondary/30 py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr,1.25fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">Property Questions</p>
            <h2 className="font-serif text-3xl text-foreground text-balance md:text-4xl lg:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-muted-foreground">
              Practical answers for buyers comparing South Gippsland acreage, the Mardan setting and inspection details.
            </p>
            <Link
              href="/questions"
              className="mt-6 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              View all buyer questions
            </Link>
          </div>
          <div className="divide-y divide-border rounded-xl border border-border bg-card p-6 md:p-8">
            {propertyFaqs.map((faq) => (
              <details key={faq.question} className="group py-5 first:pt-0 last:pb-0">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-serif text-xl text-foreground">{faq.question}</span>
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-lg leading-none text-primary transition-colors group-open:bg-primary group-open:text-primary-foreground">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">-</span>
                  </span>
                </summary>
                <p className="mt-3 pr-10 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
