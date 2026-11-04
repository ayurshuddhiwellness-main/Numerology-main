import type { Topic } from "@/content/services";
import TopicItems from "./TopicItems";
import { Button } from "./ui";

/** One topic of a service: summary, first items, the rest behind a toggle (TopicItems), disclaimer always visible. */
export function TopicCard({ topic, serviceSlug }: { topic: Topic; serviceSlug: string }) {
  return (
    <article id={topic.id} className="glass-card scroll-mt-28 px-6 py-8 lg:px-10 lg:py-10">
      <h2 className="font-display text-2xl font-bold text-white lg:text-4xl">{topic.title}</h2>
      <p className="mt-3 text-base leading-relaxed lg:text-xl">{topic.summary}</p>
      <TopicItems items={topic.items} shown={topic.items.length > 8 ? 6 : 4} />
      {topic.disclaimer && (
        <p className="mt-6 border-l-2 border-sky/50 pl-4 text-sm leading-relaxed italic lg:text-base">{topic.disclaimer}</p>
      )}
      <Button href={`/contact?service=${serviceSlug}&topic=${topic.id}#book`} variant="book" className="mt-6">
        Book this topic
      </Button>
    </article>
  );
}
