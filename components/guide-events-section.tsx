import { ExternalLink } from "lucide-react";

export type GuideEvent = {
  date: string;
  title: string;
  place: string;
  description: string;
  href: string;
  ctaLabel?: string;
};

type GuideEventsSectionProps = {
  title?: string;
  description: string;
  events: GuideEvent[];
};

export function GuideEventsSection({
  title = "2026 events to plan around",
  description,
  events,
}: GuideEventsSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-foreground md:text-4xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{description}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {events.map((event) => (
            <article key={`${event.date}-${event.title}`} className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{event.date}</p>
              <h3 className="mt-2 font-serif text-xl text-foreground">{event.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{event.place}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
              <a
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                {event.ctaLabel ?? "Event details"} <ExternalLink className="h-3 w-3" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
