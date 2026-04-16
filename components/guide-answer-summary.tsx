import type { GuideAnswerSummary } from "@/lib/content-model";

type GuideAnswerSummaryProps = {
  placeLabel: string;
  summary: GuideAnswerSummary;
};

export function GuideAnswerSummary({ summary }: GuideAnswerSummaryProps) {
  return (
    <section className="py-4 md:py-6">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-serif text-2xl text-foreground">Why buyers look here</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{summary.whatItIs}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-serif text-2xl text-foreground">What gives it character</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{summary.whoItSuits}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-serif text-2xl text-foreground">Compared with Mardan</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{summary.howMardanCompares}</p>
        </div>
      </div>
    </section>
  );
}
