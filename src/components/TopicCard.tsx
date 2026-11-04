import type { Topic } from "@/content/services";
import { Button } from "./ui";

const list = "list-disc space-y-2 pl-6 text-base leading-relaxed marker:text-gold lg:text-lg";

/** One topic of a service: summary, first items, the rest behind a native <details>, disclaimer always visible. */
export function TopicCard({ topic, serviceSlug }: { topic: Topic; serviceSlug: string }) {
  const shown = topic.items.length > 8 ? 6 : 4;
  const rest = topic.items.slice(shown);
  return (
    <article id={topic.id} className="glass-card scroll-mt-28 px-6 py-8 lg:px-10 lg:py-10">
      <h2 className="font-display text-2xl font-bold text-white lg:text-4xl">{topic.title}</h2>
      <p className="mt-3 text-base leading-relaxed lg:text-xl">{topic.summary}</p>
      <ul className={`mt-6 ${list}`}>
        {topic.items.slice(0, shown).map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      {rest.length > 0 && (
        <details className="group mt-3">
          <summary className="min-h-11 cursor-pointer py-2 text-base font-semibold text-gold hover:text-gold-soft">
            <span className="group-open:hidden">Show all {topic.items.length}</span>
            <span className="hidden group-open:inline">Show fewer</span>
          </summary>
          <ul className={list}>
            {rest.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </details>
      )}
      {topic.disclaimer && (
        <p className="mt-6 border-l-2 border-gold/50 pl-4 text-sm leading-relaxed italic lg:text-base">{topic.disclaimer}</p>
      )}
      <Button href={`/contact?service=${serviceSlug}&topic=${topic.id}#book`} variant="outline" className="mt-6">
        Book this topic
      </Button>
    </article>
  );
}
