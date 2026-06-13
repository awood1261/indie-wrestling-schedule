import { EventCard } from '../molecules/EventCard';
import type { FeaturedEvent } from '../../data/schedule';

type WeeklyEventListProps = {
  events: FeaturedEvent[];
  weekLabel: string;
  searchQuery?: string;
  onSelectEvent: (event: FeaturedEvent) => void;
};

export function WeeklyEventList({
  events,
  weekLabel,
  searchQuery = '',
  onSelectEvent
}: WeeklyEventListProps) {
  if (events.length === 0) {
    return (
      <section className="empty-state" aria-label={`Events for ${weekLabel}`}>
        <h3>No events found</h3>
        <p>
          {searchQuery.trim()
            ? `No events in ${weekLabel} match "${searchQuery.trim()}".`
            : `No events are listed for ${weekLabel}.`}
        </p>
      </section>
    );
  }

  return (
    <section className="event-list" aria-label={`Events for ${weekLabel}`}>
      {events.map((event, index) => (
        <EventCard
          key={event.id}
          accent={event.accent}
          promotion={event.promotion}
          websiteLabel={event.websiteLabel}
          websiteUrl={event.websiteUrl}
          day={event.day}
          state={event.state}
          date={event.displayDate}
          time={event.displayTime}
          venue={event.venueName}
          cityState={event.cityState}
          onViewDetails={() => onSelectEvent(event)}
        />
      ))}
    </section>
  );
}
