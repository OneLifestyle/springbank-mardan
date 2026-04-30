import Link from "next/link";
import { getFaqPageJsonLd } from "@/lib/site-schema";

const propertyFaqs = [
  {
    question: "What is Springbank Mardan?",
    answer:
      "Springbank Mardan is a rural lifestyle property at 30 O'Malleys Road, Mardan VIC 3953. It includes a Tuscan-inspired Mediterranean residence on approximately 5 acres with valley views, established gardens, a dam and a separate studio.",
  },
  {
    question: "Where is Springbank Mardan located?",
    answer:
      "Springbank is in Mardan, a rural locality in South Gippsland near Leongatha, Meeniyan and Mirboo North. The setting gives buyers privacy while keeping key towns within practical driving reach.",
  },
  {
    question: "Who is Springbank Mardan likely to suit?",
    answer:
      "It is likely to suit buyers seeking a private regional base, tree-change property, guest-friendly acreage home or premium long-stay weekender. It is less suited to buyers who want a low-maintenance town block.",
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
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">Buyer Answers</p>
            <h2 className="font-serif text-3xl text-foreground text-balance md:text-4xl lg:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-muted-foreground">
              Short answers for buyers researching the property, the Mardan setting and the next step before inspection.
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
              <article key={faq.question} className="py-5 first:pt-0 last:pb-0">
                <h3 className="font-serif text-xl text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
