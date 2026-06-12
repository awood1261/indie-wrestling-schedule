import { EventCard } from '../molecules/EventCard';
import { upcomingEvents } from '../../data/schedule';

export function WeeklyEventList() {
  return (
    <section className="event-list" aria-label="Upcoming events">
      {upcomingEvents.map((event, index) => (
        <EventCard
          key={event.id}
          accent={event.accent}
          promotion={event.promotion}
          websiteLabel={event.websiteLabel}
          websiteUrl={event.websiteUrl}
          date={event.displayDate}
          time={event.displayTime}
          venue={event.venueName}
          cityState={event.cityState}
          featureLabel={index === 0 ? 'Featured' : 'Live Event'}
          matchCount={(index % 3) + 1}
        />
      ))}
    </section>
  );
}
