import { EventCard } from '../molecules/EventCard';
import { upcomingEvents } from '../../data/schedule';

export function WeeklyEventList() {
  return (
    <section className="event-list" aria-label="Weekly events">
      {upcomingEvents.map((event) => (
        <EventCard
          key={`${event.promotion}-${event.day}-${event.date}-${event.location}`}
          promotion={event.promotion}
          date={`${event.day}, ${event.date}`}
          time={event.time}
          venue={event.location}
        />
      ))}
    </section>
  );
}
